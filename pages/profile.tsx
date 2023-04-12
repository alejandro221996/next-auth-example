import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import EleccionesTable from "../components/EleccionesTable";

export default function MePage() {
  const { data } = useSession();
  console.log(data);
  return (
    <Layout>
      {data ? (
        <div className="flex flex-col w-full items-center ">
          <section className="w-1/2 py-4 border-2 border-black">
            <h1 className="text-2xl font-black">
              Bienvenido {data?.user?.name}
            </h1>
          </section>
          <EleccionesTable />
        </div>
      ) : (
        <div>
          <h1>Not signed in</h1>
        </div>
      )}
    </Layout>
  );
}
