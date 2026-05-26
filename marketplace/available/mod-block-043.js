// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I/H4RL5RnlH2NhI3v4XPaJ2noudKCL17M4BH64pkxACjAZ5RGuiRNbTuB2vWKWLEDizjEX+pi1lCv79w3Aw5jIMF/SlPy2GWTIdfTSmdBdue7g4+p/+u26R4YUyikgKEDcrlDDBfkKLs6klBPa+e2mF2E1rRNQjTghoIpAaavLUx2/j20WUOyrMbC+h8WiuLHZOhI9jh3f/J3rch3GOszNGGTwLOjCMdaXQJ3vQg1NGD66lW/F6vL0AXltFD6mAMhFc4Vs8H5GvVp9s1gF/7UxbajXWxfxkVNrAZxr3iylSrOfBgMIkK0sM2VyHSUWcX9Wg1TAYSxo0j389K4YEvDWsXm2Iy+JZZvK54HCFYBA6qF9/kJVg0U2pV1Wx6+NssucejRg/DhHL6jazB98NmZJY6UZj/Affs02xCWOhlhRfytZawU0cF+PsY1GQ4cmAMkA7fL42WBvbi1cg75lElSQ6DfpPKW1gAbDHBjyx4xkihV7qgNG8gv1OYHGHdf9NNw96NXZam/doqWZ8pzwxe9kr0DW5REUCj2uqMni419jGymM1E291YieJzZmmoPfzbqC6hdvJejGCi2hel6ZQtFz9PmSRwVB5YiiAUhlymg7XeHlVUYK1aqO++TnVlgZj+qJYaiTkxuaWsTK67K4HNehaTLDA5Soil1p4QEuTSZgXh4WrX99vSPoSw8xf+168KzhmToJRTaL1ZuG5BFMmKsTL4iuiN7MhOPwnfye0zh93vv1eDntkMpao9DtEmDJ7/BjwaNf3PhVKNMkdVwSwr48+GvVaZi44JSD59/ESwK5FYlQgI844B+zWvwHLmrKgHTkVyy2qIu6ACijOr7cmM5Jn+0H11LIXminR5FDKlI0A7iuHqI/bRvmJCl1cOWjrJxQsvitlAPxaq/GpFXxSlB+e08OJArArPoOhdLuR78HWtsEsYvYWEtkQI71+yE8m7L+1NSCftc7eWstHTgT09fGoxlb7e5xLXQ01ke74oTw/W73zhhsXjYMpSCg3pTvHCRiDWpWW9vuU124CCqI91vHbUJyGjMNwB2wV/3anjHfWXGAI6vOyhTEuuTl0w1EcnSrbUvihLv5eEuroYyOrJesz0XvveKnHfYLhfkWI7n3qUe6hP5ieWNmvh27muwyhkkZgPmM3yVPQo+ENegFNYeEQtwYqe5zBdKVYGJQB4W3eYI98qwnV/KQnxQ6NVnAFXrsm/clz5npbXuotAAhO1suztfj1t4h/u/lsHvyVZlTp+X4DPWHP5XR0M+mSYuNUhw9dnPROcGBuL3hPcx2ZazrWPECyw/sVZBWWFIDYLm0yy658H8Y50cqO8ZWXN1PRnaMg7bJ3MaOmGV75lD6BTWZQN1Sm3LJvzWA==';const _IH='c5534b4173b6b60a36fb7951a926d5aea126e81cfcaf9c3fb6d7171cacb77ed3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
