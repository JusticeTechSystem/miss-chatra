// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0CnCf+8Qo+49tlRHlXtEt60VCkr1XOepiwB4iMo94iQO+16SnTI5QSpj+1bMOvolCJtgb9qzUrVGIvVafqHrCfe1sLSXIrcJdDk0ORH2fTf/H77UH1BIECK7kp8h5n3MEOFzc/VpkrGQzNjCKXyzOvqj6cKr0A6JiMEZDt5kJOg/Mt5X5XfzuKcvUuuMi63kPVgIBsSWczYxxYeu3dQkes97FxPsLbCgR5R+2wYh7j6ybPl41zykRRNTKWXAkPc2k/b+OcfoGuHz23UX5WQ/FIRZ/qzLxz1i9bYN2o/6b4RgDdmkirc+363F7dBmLLSbaUK9kw7f+9hX45Qo5fVFIIrZXVyWVwLMkwLH/6jNk+bbsTPmLyn0ou+H5Lkr/Y7OCAdd50ac94eyfbKEsrlFkHKglZWtB7lBVOvn1IfBey9Bi3KzAyzStUURpR5yAQwW/IMiWR+L/hE5K1jVz187L3syaaDxNezyEZ5zrEP+9u6FFWNxHICkAkzN2L7LT5ExZlx7zOJSkeBn3agNxPX7r2e7++GCmihkFY6j30Dx0jgHLP4luRVc1UhmFDNchnKvp5QCk2GJM/NvQYB7ttUy92tE9Bz5VEabgArvta5IbdJs+Fx67pnnlX7EWZxJ++isgTLDa7Y2FBPDf4JUfatazv+9Bh4EOh3iozj9ChG8jlkqiwg39p9ZSfrJMOgwTgNEXz55e7OEA+qk5h43VOF+1FcwNUNf4l1aSXzcxnCacPUneeYnLAwbgO0naq6yzZ3NnuCLys4KElMeUSDXaTY9fU8gE7wVuISRQtl+2UtBYyzdX8pMhKukx73Oc8FDXiHJAqm89azquBNfVmyj6D0bkkASAAcFiL33KqmkEJCRO6rWkcmbxoEVCBFQGdZdwQQuvd1YsFCsuLiss0PKTkFqdmQCPpe3r51waoJjY3JKztchnc6gUEyQjFEmKU4N12TiDFA8hDb3NRoFaQsL7hbi66xHEBQQL8IB5VWKy4B/9874zoaK+6WkEScAoe2udD5dQ+5UtNesXHSciwjBJfqbYWZ9j39krRzAlaRuxeQjJpUGCn5NvVm8qmbPWx5pmSNTpuBJ62TiP8kCZ1MxcQoSGR2mMk1rX7D5zSUQSiJtwtiNx2Qsq8rHGniH4ejmmsH26qcOl8kkgQFYQIAVnACGy8T5gTOY9XCYgd+Xn2z9Fd4P+1oKwHgtbNjB+zLX9zhZkR368ewUUIUijUCaN/I8Cw7AbnjBeOU6dP8LowYp5PK41kNfVbvvckRhPNpPdd87Te+cYxz4xX3o6TMGjwdi5AHgzs790og4MUghdKUkKJQey/JXABdhFt50rhoUwhpl0++hgOdKE/yKCAfymzIfa9XORnIeUEDhRjgZ5cZdnfEtp2ltsCN7GQ==';const _IH='f8d08185349af70f78cd89f44df194865afd039989514d9a35215d0361ecd4a4';let _src;

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
