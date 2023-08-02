import { useEffect } from "react";

export default () => {
  const handler = async () => {
    const a = await import("../utils/a");
    console.log(a);
    setS(a);
  };
  useEffect(() => {
    handler();
  }, []);
  return <div>contact</div>;
};
