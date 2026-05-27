// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A0mbXotDVjQhekGhARDuKadmknBU+/4j4bbl8K6Rqr9XcRYLG7C4pwKUh0+Wai97dOJBR7DmCBRLwehyjM3WBg4rw0+EJD4zkaFNe7/kxoT+Hse0/BQiWYrckoug47EXVECkASNZeVyZ0EE/6o5PmfBEZnOjGTDmhQ7FzjsCkyABvLzEpI/ybRSLO7hjcQrOLoY+JIyu8eULlEBg52Rx0OohCxkVPZ+GGq3g6/B6taSpBDwQLIimjCShJDF+deJM8E/J88d+g9rr6iqN8fD5ZDv6db9LsnVKOA8pWEsU92VFfnMrVLtHlTo+uj88PvWDd6pczI2baByQqZUvATI3THD2zbbIF6CrmjMPKPma8SPSvRm/uKGxv+4jLbjy7yhlkMbnPvvpXG4f16z2Kriy4D1N7JWNLzKMEWxhaxhAzT0rOMkd9Q1/iCwYPR/cihghbC2ZecpF+erUo9hZEscsj4Ib2Q0Iuq0utfhJswi07Pty1OmdZPHdOMS3/AWbKEZ0tJyCdJ9w9FmRphwaH4aRPU6IzbzietjXmvwrg+63nUEbbmxEJf8KL5QNZqYiAYJLw1Hd6/xDFmw/I8ifkvCN53I3LB4+WB/FUx7Yv4GX7hDqgpRJPHdyl7pWYhymXg0ODEyVTUyZxPB55kNQ1IPdSy/JfIoo74WQLQP1yCvFq8+3JEh/9G2lMhAEXVjR3GOmYXV3Cdfl8/AfhGVN2NhanAv/phS5wKxKDMr3OpckbOkHr5CpjMw=';const _IH='0751fc374af41d95f12fe0a66aa08dfb34cef4d9954c4ce91b0a9f4cdb7ae46d';let _src;

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
