import Logout from "../../components/Logout";
import { useRouter } from "next/router";

export default function BGCheckPage() {
  const router = useRouter();

  // function routes to Candidate Input Page
  async function routeToFormPage() {
    router.push("/email-form");
  }

  return (
    <div>
      <Logout />
      <button onClick={routeToFormPage}> Initiate Background Check</button>
    </div>
  );
}
