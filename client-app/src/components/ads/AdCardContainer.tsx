import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStateStore } from "../../redux/setup";
import { AdItem } from "./state/types";
import { FetchAds } from "./state/actions";

// Components
import AdCard from "./AdCard";

type AdCardContainerProps = {
  minWidth: number;
};

const AdCardContainer: React.FC<AdCardContainerProps> = ({
  minWidth
}: AdCardContainerProps) => {
  const ads: AdItem[] = useSelector(
    (state: RootStateStore) => state.adsState.ads
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(new FetchAds());
  }, []);

  return (
    <div
      className="w-4/5 mx-auto"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(325px, 1fr))",
        gridGap: "1em",
        rowGap: "3em",
        justifyContent: "space-evenly",
        justifyItems: "center",
        margin: "0 auto"
      }}
    >
      {ads && ads.map(ad => <AdCard key={ad.id} ad={ad} />)}
    </div>
  );
};

export default AdCardContainer;
