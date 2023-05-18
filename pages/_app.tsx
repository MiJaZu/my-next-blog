import TaskProvider from "@/context/taskprovider";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  );
}
