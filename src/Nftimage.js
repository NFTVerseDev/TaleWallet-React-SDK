import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Nftimage = ({ fetchimages, item }) => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    fetchimages(item.params.url.replace("ipfs://", "")).then((data) =>
      setHash(data)
    );
  }, []);

  return (
    <div>
      <img
        src={`https://ipfs.io/ipfs/${hash}`}
        style={{ width: "100%", height: "300px", borderRadius: "5%" }}
        alt="nft "
      />
    </div>
  );
};

export default Nftimage;
