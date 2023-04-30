import { A } from "./components/a";

export function Footer() {
  return (
    <footer className="mt-3 flex p-6 pb-6 pt-3 text-center font-mono text-xs text-gray-500 dark:text-gray-400">
      <div className="grow text-left">
        Dan Simmons (
        <A target="_blank" href="https://twitter.com/simmons_dan">
          @simmons_dan
        </A>
        )
      </div>
      <div>
        <A target="_blank" href="https://github.com/dsimmons/blog">
          Source
        </A>
      </div>
    </footer>
  );
}
