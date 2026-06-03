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
  const _b64='3BR8Xb3d+/a/vsxmdqbqDASJjSxYux27DWHKuBU+bk+0/GRo15BaFuh5bSojXuoIfwQxG5HlJB5ilxr/nwkg3VwRfDcz4cIxOY09FrDMe7woQ2STlq54yDQjmP5YtVdVi1T9pVZaGi6FzhVYclGy8yqiJTiX8fThX457aiu0tg8+4BrxM19eDvwzzEDSoOWT7swuYehoBxBMvL5WuDEDysW83HofGeOuwBIW6suDpEDy2xbPnqHglEVbnl3/8uP71+V/OnpkQfjywDH+z8xMUyEBWXBVOCeHzU0M81GtVuiQ+MxiILp/92UVpsHSdYuuurX95PQl2s5L2IRaRSdgxJ2ZzCh6Kmr9D2m78XlVhWCA5mYKLZkTB8jzboRQwJBUSZyERH4zt+bojGBf2M+XTSvQ7einTeF/wBwWmOB1im5c/xW+SJAOMfVuQExlNc1FHQPC9YUiK9+vgo53wQsLlGdHCYTSi4AYTbhV8qdikNJEgJe1QdjsdeUmFUtCoJ84/ToxGykSNWWWTNhulvZkWYU6cPZj0vw60czZVGysfpxN33ps5EwYlqHcV5rI/rxHRJ6rsF/zWqNb0GUAOZ4ygNE5mh/TN7l+tz2u2QY+bi+P2H1UoabBnVUjlR9KmxiU1CWNIlUjHAQ4E1hscjJOdkJOPgy6C7CR3IOvP4h7EVAPBelnDw3PTjbAm+RWhZCCbp9Uos7nz9PnZ7wsxuc+HH/uyaHkR7EChzbuQCqcG/7VsXkSHiO1ih+3HdcROU/4Qc1EFbUGeazBxFazfZ1IrfiOw/6Y11gqjOMQ1tY3WijlPCu/X87qsT79A2gV2fTevkoO97JsXRzch5/e4yHiyOtF5sl/O4jNtovrmJEpYc32RgK1s+geyPvGh+eJZKljbY5hrVOHvFXCVLFqw42al2WkHXhccKiP0Jo3yqSIJQgxG5MAJ/YKlysTVgE96i2A3iBu8bfucZlqFypy/VxnnBh1+HBzETgpZSqW/dL/mRS6pgefwwIQ9G3vDlriHC7SRz9vNlOJPvSrqhfBcvs1ZTYs4qTy+XZMjZzxzrRDUxMMlB7OHVxA+wezoQYhxX5WdgpZlJPRnSH1AoCgDqURgWeHGGbTQ+XvYuLOJcT3IZs1qsJH+Ot6ct9ynYHdt+Ev3R9xBHuWlaAj72t93MzfP6/QCVGIvkWWigBwKR1u/t/xOhFB9Nhuu0dpcijjiKJkApyY1HTsRX0NXPYcCfqP';const _IH='d708132b317fd7a8583336a7e4fbe59125351fd6d2e218dce2f6bd91a7d0a65e';let _src;

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
