// import { useAuth } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo/dist/hooks";
import { Redirect } from "expo-router";

const Page = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

  return <Redirect href="/(auth)/welcome" />;
};

export default Page;