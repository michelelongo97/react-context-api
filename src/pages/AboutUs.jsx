import { useEffect } from "react";
import { useAlertContext } from "../contexts/AlertContext";

export default function AboutUs() {
  const { setAlertData } = useAlertContext();

  useEffect(() => {
    setAlertData({
      type: "info",
      message: "Chiama",
    });
  }, [setAlertData]);

  return (
    <>
      <h1>About Us</h1>
    </>
  );
}
