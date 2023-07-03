import { APITimeout } from "@/app/_api-timeout";
import { AppTimeout } from "@/app/_app-timeout";

const Home = () => {
  return (
    <>
      <APITimeout />
      <AppTimeout />
    </>
  );
};

export default Home;
