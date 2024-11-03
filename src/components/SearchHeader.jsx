import { useEffect, useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import { TfiSearch } from "react-icons/tfi";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function SearchHeader() {
  const [text, setText] = useState('');
  const navgigate = useNavigate();
  const { keyword } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    navgigate(`/videos/${text}`);
  }

  useEffect(() => {
    setText(keyword || '')
  }, [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to='/' className="flex items-center">
        <IoLogoYoutube className="text-4xl text-brand" />
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input type="text" className='w-7/12 p-2 outline-none bg-black text-gray-50' placeholder="Search..." value={text} onChange={(e) => setText(e.target.value)}/>
        <button className='bg-zinc-600 px-4'>
          <TfiSearch />
        </button>
      </form>
    </header>
  )
}