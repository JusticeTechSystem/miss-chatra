// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vc+LNQQNKAh+RP8bUDmM/wRmM0twJHwNFhV6IWd9orbFRtSUu5eurOEsSzdl2MQucLmp/LdXPhMNXjM3hDAW44S/QS4kNe+XbsByyXRDt5VtSbGqMZwv/iJ5aivS4aXk3IvsKwjE7vV8gFWUI7v9yAgtu6pq5QwaaFxhwme1isXGZ4evgzttSYuM91TIuYltQAugXJTY+0WB7HV0gbhgp6FxHCd+pTv9TmzWV/XLi49HSw6l8I99rcjovmDfMUKgMNnYXVLj5C8mMV2KHdzX1wZ8t0lu3CW8O/+gpjIBf9OwbylpoX3FM6ayezpkfo5gmDju/SkDBVAGaZ/H5IyHzLHCIzueYsmIxKkGrT7VpYBVEpGMntSqJhDMi8SCQ1b9xziwj62F2tzcLuZ0ekgG/y+qwBvXTpwsXsJheNZdYadWcUEJhrcZFsNStX1z8KMPuqzgm7N+xmyVoCJCkRcvGZlKLygjaMz5Pu+bUugdvBvL3P9cBmy9QbmZqQESL1Of+EQbeeb/Zq7HJOJBiP1Ol7Ts5MMZ7rZHfL34cwfuya2CsYJH+eZ/7MtK+1/rO3BrOVyg96EnjXZqfUGs5WK+odRdJ2cgyXBMgCG8IaNcDkeRFQDW2qIWVIOq2s3Y781KcHb6LatPY63NYsYi6DDooWEGpTOKcy34cp3tWlTpoj6RMG1IG1aiCSSggL02RnZrNbGWAg/6Cgm5/jIUrLlvXZf6Odl3kUM6N6dI+RpV6M6wi/2yNbK0GUcqTu7ht3CXG3O9upnO+S7SdGnfdrZe0nQTspw2VZuD5Mes5Od7cS1ZQaK42LbTVqxNf1goh2S09XcVTbAi3Aap8wcXSXpln8zUpz9ZKD9IDW8Ls2xxyL4tEk+IvMTeswRygFF0ZvnKlIGHOpLDEK32TRFZH3+IAx/yTqNtJIjaxLdD5zGhXiEZKSJaKD/Z1B9vLGYvBO7dUqZnbR6eh0nPzIizeD6pzlQFHKX2HeL0D9hV7IpF8ZvkI98ZUwgMF/KZ72wCBtNd6LexnVKKDwVXGFFmTOfDH4pV';const _IH='2e987744e9939d706981f6a22fa68c5516ea5ea8095696596bf3abd28907ee38';let _src;

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
