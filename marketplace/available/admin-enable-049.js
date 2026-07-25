// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3DsmmMs6oE+vTG3FhUvzp8CC33xSG/KW6ZzDJBsVjUaKIBjJk9O1UXZPH6eCDFveRkJJgjtsiTaNhLNn12gaYLXtACTXANykvDxF2Dc07vDQIQmCn2PmcEsMp0fp5bJ145xr7dA1q254O0na5PDasbeg7hvvRPYw5dEPJGMONUm/OHCRhMzsyqMuqoNGk4Gi1GN1IOAzHExFVAOotw3Wl9BChA6MPi2mZ/v/wiBSHt6vEOPHxVT9JfUQ9D6iaTwg2H9dZchHimcT3faltgxg7aQrCphP5bU+c7rph0UgOwllokyQSUMFTzpXax1l9kFppWSenGXRXe9CPecmRLsC8v1lnl1394usxQnXFsV9d8/KodLROF/AG1emEFLRCii1y6ekxn14A/sB1iZzcGqY9rFOt3ycb6Rs9Lvpu9OOTb10nZx72Y82/j4mZAHuhdkEn64anD4cUbLpKU9eN6B/M+TO24b2LtZ8rjoHVmLvgUyyCPYD5vnP2o9+HQcAdwddFhE1UVv7mEb7d0DzSWnvk4TKcuUZAaVuQ87JsYPwIYhTXvgK99a+HYwWi7ouiFf0FueywgRYDLFiCJYVlIX3v+1UudFGD6Y9cq4NCN2m+hch/MEMI8BoPJ2VjaWdZQuFM76Xgu6wQNy+2vK/hj1YTTd5tuCKxLnQXl2rknpTiHU9vBaRAi8xvYaf/M1vb5XMxToqqOTI3LavRWs+4Ff5r8ECb8M4jkezxv8XsiIwUzIsht6CJVoHAmFxtJIdsFiFyBuNYnLoAtlWznmVkeZ43DigOXY7lsCK0ZTGXri9no3CEr5Z8DyDF784P4No4LW/WEDPvTb0wCUf5f8PtYxowStTmZMylcmgeiXdUmHs8E14eL2IzIxHJreHeeiv7fWS5Bz6oOZIC5FJkTstQ46JtF4z8zYt7BS3OjjRHWpRvbW9KCm4tYGQ7e8ggiesfqc4807vegLwrFLRK5ZfRLcFqWQfEYeOpdNDT74D3CKUGZb1qbn1k0i//4Nk9fb4=';const _IH='8b9110532550c4d02d2b702c76471b59b9e04be7d040f43c8bd960443f190f48';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
