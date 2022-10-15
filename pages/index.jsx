import getData from "../services/getData";
import Image from "next/image";
import styles from "../styles/Index.module.css";
import Card from "../components/Card";
export const getStaticProps = async (ctx) => {
  const maxPokemons = 905;
  const api_url = `https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`;

  const res = await getData(api_url);
  const data = res.data.results;
  res.data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: { pokemons: res.data.results },
  };
};

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poké<span>dex</span>
        </h1>

        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="pokeball"
        />
      </div>
      <ul>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}></Card>
        ))}
      </ul>
    </>
  );
}
