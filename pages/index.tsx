import Table from "../components/QuinielaTable";
import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <h1 className="text-3xl mt-4 text-center mb-4">Tablero de partidos</h1>
      <Table />
    </Layout>
  );
}
