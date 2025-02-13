import { useAlertContext } from "../contexts/AlertContext";

export default function Alert() {
  const { alertData } = useAlertContext();

  const { type, message } = alertData;

  if (!message) return null;
  return <div>{message}</div>;
}
