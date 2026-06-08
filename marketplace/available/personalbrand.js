// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FjjOsLTHuU7ymH5LHLW6gBC8gy1K2G0a4jFE2bXiNOfhVePrR+eaMF1uPmDDVP1/7as8dY1S9ODXjvW4SfpQ0gxFWypvgEZZp8Qyf6zOhYV3qGJBXssp6tf4mFi/Oqf22lBGrDpLCi8jTFfHU/MU6KtmgL9b4zflWaRB+tCHggWFDi23bn+E/JEu1pDUSIYFOgnD25K/w+p54NyvYXJaDeiNIjaoLE2bed9x2Etzu9zuPzkxmM0QvEd+bmURP/5VnVcrmbETi99a1ZBZF1Cq0I/urvDhk4wdrLMjI+Ujhk76sA7Q7UzcsbiyrL85FmQgzQPLEnKPX/wEb3YB97urZMzpLd88IUxmlltIo+Xb4tlbzRS8SQjmHDk7/3jPenQlLaN6J3xS5Mhhv7LvR7BsZiPSAa3YzunwgGfyCPGxsMXrQ8lj68GLy+OlIBqOvz5C37xnkXuJiewJAKeRmh0LDk6UBlYRJheOv7doqFH/2O69XAy/ArWbrlPgZx097jb3Z2Ejoq7NM6/07rqn3WCUR8UmBby1zHUeoMMP7cU3pxktewKBv4g73ox3B9ktsik81lw3YAbD70aOLHk1JrmyeNYzLnVH4ILS8DbT1mID10wF61gCMYC2CP8vZPkZttHTTYrc5aexA23YOVbxWup12irzIZQZT6k4+g1rtYqcBr3dekmzn70Nrq7S9IvJ+k4VUWp9P5uulHSCZP0WccnTrtG9mvsPRADYg5+uRTSThpbluSXOsDZpX1BYMezeY7gNQEF2/VCuaN8E9KpxaKKYEszRX/dv3t+2bQLOUQHSkISLSSTyM3uMD+VcSiLnM7utgi7PGUzgbCPzhAVxgkSljjBM1xxX37R8RTCROtX+09ENXv5OoMsEfziaMl81/LCakqtonwsVdlj/f2uRgTJq/5TupowMRv9xNQisPZi0GBhtB9wWpwgmHFPWyv1tYx1/FHnk82TmLujhpXthab8vIE6mPJNFFv8mgVNWmsCH5awKGiETFSyL4wDGncUhqnBgIG5v7tWN4wgaqWmhQqNrf5FEgNBjZXII8+O0pP80XktFU0fOl1brVcXVZZ1wg9zjwF5gIt2/wWNyUBPpgEdLTiPNqoNv3QNdOQC2TOR9FucvjKdm3O80cyFpHhNekO733cOZ5/fNsd7m8SgpnnYWggGERnecpzCcpXkTPHOMG7mzKt2WKEmcIXdx8y+Wg2eOvKEuMIxIFaY=';const _IH='66703a812a7734142ac8fbea94d741b5bab20dea8f87d8cbdc999a7c10378d96';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
