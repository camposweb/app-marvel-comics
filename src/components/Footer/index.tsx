import { GithubLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="flex w-full m-auto justify-center max-sm:justify-center justify-items-center max-sm:justify-items-center py-5  bg-black">
      {/* <GithubLogo size={24} color="white" /> */}
      <div className="flex flex-col max-sm:flex-col justify-center max-sm:justify-center justify-items-center">
        <div className="flex justify-center justify-items-center">
          <h1 className="font-roboto text-white">
            Acessar o repositório deste projeto no GitHub
          </h1>
        </div>
        <div className="flex justify-center justify-items-center">
          <a href="#" target="_blank" className="hover:underline mt-3 rounded-md border border-white text-white hover:text-black hover:bg-white p-2">
            <GithubLogo size={25} weight="fill" />
          </a>
        </div>
      </div>
    </footer>
  );
}
