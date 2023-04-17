import type { NextPage } from 'next';

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data: number }) => {
  return (
    <main>
      <h1>getStaticProps</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;

export async function getStaticProps() {
  const delayInSecond = 2;
  const data = await new Promise(executor: (resolve) => setTimeout(callback: () => resolve(Math, dandom()), ms: delayInSecond * 1000));
  return {
    props: {data},
  }
}