// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9nfG7ywyPUVH7U40wCmPba76og0B7VT0kLPRuoLyVlzzGBQ+fBhfSZ/qrZLXtxbxuK+j35pyp+ZtkIBzGWjcScAx0SuHbF7YZg2B/Ms3TvE2Ax7yB7Ww8M1zmXgVxXD17k8n8yTPrlbcWxY2b701Gm6SLrYI/UgtfU+46mkqrXln2xTnsxrwbSZr+IpawWWCI3vqqyyraG5Q6C7pzo5XMhHbwbyNhJs7yvChtNvdsREr1hKHFr7qgpeIvq9oNGTKS6TTGenXPCsrI9krxbiAamw+8isDn+FZ+/LfYgpuAJepd84LPJL0gLbh+Q/QGnn7uEq8qlnIv36aMMm4G3JjPUm60vdOsBMjI/0rM8X3aL4gpQtN5MV59d8qyX/PiwuqfQ3La/Ro7sVNvaZBDS2nKqvblyuAEC4gkC253zZzp1taRqin5a+lf8+vqBL9NA7fa7tHjP+9cmBgA36fDLujg0zrQNvDxIgUNnKgKu0tAp6ILT92REL6p3kheaLuktVgBcYB3tGHaTHoo20g10D8mi19cvylJ6uBvWF73tw4agvbv1Gmvw3OaU5tn1ourf9+huzU0cCHSdLjGfRy/jeLtHVgZO3XKTxs+6TyhgLvsywLtUyjaT7FdJbKKj0yTvnDI836M4f8ae99C7Whv5hdpTWEvIxzkDNNyCRz6AolxUFVHaHdcsZzmeTSW4y3mGSfwLqqnfwNTaxu2SpVHuISH1SVXpqn0pCa1bb2mw6cDgvpyx7reLCZv/ZjKSPMxiAvBmaBAQrDMcIG7KxL6ubu/8aZ9UE9/SuV8x8IxB7ni5wurwDYL6fr1aIqz3xhPrZsh0dJAJK3nq0wwfcn05xpv3YfFqbArf6YdQtj//cCnDoayA42uAmpU655qwcRIUHvGvUofYzboEblEZv11q117F/MJ2SU+ZrB0EzEhUXdpoPIK0WhImuNl9JvpjF5jjKB00fNNlj8o7BvWIXBRi/JmrnJysIbo7U2Qwj7FmDAizSWNMsp7B8=';const _IH='1e5bb000a78ca373a2de142ff1fd8ceaef848e2c77fec96bc04432f3982c7430';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
