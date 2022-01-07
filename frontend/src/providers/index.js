import { TimerProvider } from "./Timer";
import { AuthProvider } from "./Auth";

const Providers = ({ children }) => {
  return (
    <TimerProvider>
      <AuthProvider>{children}</AuthProvider>
    </TimerProvider>
  );
};

export default Providers;
