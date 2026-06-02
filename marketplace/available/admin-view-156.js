// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+SViWFQWlIJ+DybIjR3Mp9nNZeMh6wwq7vW9RKi7vIYi17VFgTOGqBVcShTYxJA2mC9d3lGje3IDeancF0kQZGkYkn0kfInnNEOuDYeCnRZ+k/vPvLKvouut1eqR8gQxEk6Q7ifgLpknrM2p5LzSwTfzwfq5EQr2TfdzSAZxQpU10prWbHFYFeCJRIskQ2rOJbYkWkxyciNQF/CyS/q9bg3YU9JClwM9cXZvZGpW1lz6qnd/TCr7HA8qKtv4iGtpDKGW3Z2P0g05Eof0oa2rGP0kPE9K5u0TuTUso+3YFY4sxjb1G95u8F7elp9Zs41PvROxe8i5ZciOJWlmsq38pG3UusoU5Jx2MS5C8U3DeovD28b21bcad/AAWGebDHUZiEJZRJ8sN2akPjKY1ayPJ5L+1Dn364aJAr1ct49La71YU/ojmvsrxcfMp9svUn4E3elfaz1muK5zaFzhZ5kqv8/zi1tWUXaSSyb0FRUawRjHPzVTFR0NXkaT/hebM/lEy2xghbaGtvb17ItfQc+X9fuy2w6EpkSoJOuF2vT+gcIsZXKHHO9jUCpuDhFOJFjYZxRJOoLTQA8Nmc0A6DzHypv/2t4JPPZwIyygudLb1VMoxWL8lhH8Pya8o4iUtkvGPsGgJ+ZkkoVf5omXUaZ5wkk6SqWg6G1HWwoLTRgEsnIsXbl25NkqJHh1bgT0aShuuMe+VMTknrwAhdDHyRUddofEq6aPkEhAxCPfzbcDOLlmjVkFCdTM+neXJBkejwTVcivVWV/9m/kYXav7zcVV+bOsEkREw5Ak7Byne+9EcrTD42VkRklcmqFc/Zq4frV/Kv+bZVm7Qs1B/dpXKvpt1+VtqJGyhIW0fxEltJx+iMXRJIkWu4dVbmW44LNA/g/L8oH3Fkh5WVnGoVQBohiVG9k37VihHPEFreNmNO1830b8Rll0gYtMmVoaHJafRRCuQo0Kx2lWY0UafaY+LN5blqrQQ2ykTflebZazk+vRa8Mw7xo=';const _IH='f55d808bd4486a4ab82f51a35928a9d7d01e2698a9f302cc5c7a28f7220e0204';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
