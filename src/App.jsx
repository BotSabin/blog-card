
function App() {


  return (
<main className="min-h-screen w-full flex justify-center items-center">
  
  <section className="bg-white max-w-[325px] sm:max-w-[375px] rounded-2xl p-5 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border-[1px]">

    <div className="h-[200px]">
      <img src="illustration-article.svg" alt="" className="w-full h-full object-cover rounded-xl" />
    </div>

    <div className="flex flex-col gap-y-5">
      <p className="font-fig font font-extrabold bg-yellow w-fit
      px-3 py-1 rounded-[5px] text-sm mt-6">Learning</p>

      <p className="text-sm">Published 21 Dec 2023</p>

      <h1 className="font-fig font-extrabold text-xl hover:cursor-pointer hover:text-yellow transition-colors duration-300">HTML & CSS foundations</h1>
      <p className="text-gray font-medium">There languages are the backbone of every website, defining
      structure, content, and presentation.</p>

      <div className="flex items-center gap-x-3">
        <img src="image-avatar.webp" alt="" width={35} />
        <h2 className="text-sm font-extrabold">Greg Hooper</h2>
      </div>
    </div>

  </section>

</main>
  )
}

export default App
