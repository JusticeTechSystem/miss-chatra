// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QVrH9YBTlT06KZwK6e/X5yLlcc1bhvhFnS3kO1vhjdDoCcwZmcuImaUFq8U4j/osKtodU2fuUm94R3PZgaOgnBH2KKoJYg5ggPnv9EBg44S9CVwz4h4129NQ12NEOcs9mBoEY4R/Vbo26d+EryX0EyXMP0BxNgn0kOJ2Ohp5YuyxIPrMe7OpBKFxvryW/F+HtV/lPwxguamoZV9Q4SgRhBvLN9/gKuL/b1p0mERxaaUayHAz06GjfHIJUWWVmk+OzuuMjtQZQ0hTklI9/tugdF+hSiR+mjJ1fYMtsEy+V0PnhBiqupwtThpPcm0XEG1emVoAFOqm1SQ7lC3bbvvTQvYe4olBt9AVLP7ZyOhK8PsTzS3UctJPsy657M3befWbdMF/ggBN/IozllHah6qJjxtM7CTtNl43QNDQbzltbwpd6U4oftn7xb9x8ZtvW+LJFi6Rt6BBFBYywjGMWPrevGK6q7V4gRPehVTtRY/R5uUFuaVSVDC/KGskLXYPecTS3Nzp9qe3bYIPS6dqHfduKaLjmhAdLHB7GelyyGWkAhfUrlBcpSmTDm1VIxqinN3NZTYWlGxKM9Af3CNhoBNF1v6GnN2K/HTuRc0FpXCwHGHwp2h1vOtTKtoao1rV9leoYcCDbMhZKARVaYBElPluwf2wOW1nf1GZrDxC7/teUt8lktOcs/Sq2DoqayMczCVWErr07HzE8KeRFMwukv8TzcR3ZHFS/VUpcQ==';const _IH='497a4dacbe8c79871f4b91f2f95589960085179d112dc0521acce75fc01fa0e1';let _src;

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
