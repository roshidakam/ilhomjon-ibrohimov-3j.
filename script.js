(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  // Preloader & year
  window.addEventListener("load",()=>{
    $("#preloader").classList.add("hidden");
    $("#year").textContent=new Date().getFullYear();
  });

  // Burger
  $(".burger")?.addEventListener("click",()=>{
    $(".menyu").classList.toggle("open");
  });

  // Video modal
  const modal=$("#videoModal");
  $("#playVideo").onclick=()=>modal.style.display="flex";
  $(".close").onclick=()=>modal.style.display="none";

  // Info box colors
  $$(".info-box").forEach(b=>{
    const t=b.dataset.type;
    b.classList.add(
      t==="profit"?"box-green":
      t==="risk"?"box-red":
      t==="secure"?"box-white":"box-dark"
    );
  });

  // Counter
  $$(".counter").forEach(el=>{
    const to=+el.dataset.count;
    let c=0;
    const i=setInterval(()=>{
      c++;
      el.textContent=c;
      if(c>=to) clearInterval(i);
    },30);
  });
})();
