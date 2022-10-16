import React from "react";
import getData from "../../services/getData";
import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";
import { useRouter } from "next/router";
export const getStaticPaths = async (ctx) => {
  const maxPokemons = 905;
  const api_url = `https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`;

  const res = await getData(api_url);
  const data = res.data.results;
  const paths = data.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (ctx) => {
  const id = ctx.params.pokemonId;
  const api_url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const { data: pokemon } = await getData(api_url);
  return {
    props: { pokemon: pokemon },
  };
};
function Pokemon({ pokemon }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div className={styles.loading}>Carregando...</div>;
  } else {
    return (
      <div className={styles.pokemon_container}>
        <h1 className={styles.title}>{pokemon.name}</h1>
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          width="120"
          height="120"
          alt={`${pokemon.name}`}
        />
        <div>
          <h3>Número:</h3>
          <p>#{pokemon.id}</p>
        </div>
        <div>
          <h3>Tipo:</h3>
          <div className={styles.types_container}>
            {pokemon.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles["type_" + item.type.name]}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.data_container}>
          <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>{" "}
          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
