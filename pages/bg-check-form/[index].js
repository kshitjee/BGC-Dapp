import BGCheckForm from "../../components/BGCheckForm";
import Link from "next/link";

export default function BackgroudCheckPage(props) {
  return (
    <div>
      {props.id ? (
        <div>
          <h1>Welcome {props.name}</h1>
          <h2>User Backgrouch Check Form</h2>
          <BGCheckForm />
        </div>
      ) : (
        <div
          style={{
            marginTop: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>404</h1>
          <h2>
            <Link href="/">
              <a style={{ color: "blue", textDecoration: "underline" }}>
                Go To Home Page
              </a>
            </Link>
          </h2>
          <p>Sorry, the content you are looking for cuould not be found.</p>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  // MORALIS INIT
  const Moralis = require("moralis/node");
  const serverUrl = "https://kbuw5v7jxsxa.usemoralis.com:2053/server";
  const appId = "eWgF6hJUPK14XZCfttLTsYw4yxITR3If5CLfFctR";
  const masterKey = "r8y7zATiNFbpsCML1L5ES961mrJqwlaAV1D4C3hH";
  await Moralis.start({ serverUrl, appId, masterKey });

  const { index } = context.query;
  const candidateEmailInfo = Moralis.Object.extend("CandidateEmailInfo");
  const query = new Moralis.Query(candidateEmailInfo);
  query.equalTo("UUID", index);
  const candidate = await query.first({ useMasterKey: true });
  
  try {
    return {
      props: {
        id: true,
        name: candidate.get("Name"),
      },
    };
  } catch (error) {
    return {
      props: {
        id: false,
        name: "invalid-uuid",
      },
    };
  }
}
