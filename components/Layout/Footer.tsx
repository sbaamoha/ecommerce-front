import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="bg-transparent border-t px-6 md:px-10 lg:px-12 py-6">
      <div className="text-center">
        <p>2022 SBA Headphones All rights reserverd</p>
        <p className="flex justify-center gap-2 text-2xl cursor-pointer">
          <AiOutlineInstagram />
          <AiOutlineTwitter />
        </p>
      </div>
    </footer>
  );
}
