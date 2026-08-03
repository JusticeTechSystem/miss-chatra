// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ2m33A/nXG8+qW4EVYLV/KMZxdKAVm35uWSw37DI/VbevRkmIvlLzQxOnSfCMC3AT3tFPHOi+eLdQnArCIMutFieYHmHaLqCxBU6VRfPYXjB1ZyQfmOTqEleean4/6Tjax0CK6wS5hELmr5aU7k8nMqnft5ASdKJTuoMS+Xi2HppbOSwvK1/OsyjYzWm9HZDQ53EZfpe+nLwpbTbrA7sUw0dglfLpVw2KpCp6x8rFK3Mm6wgl2e25kJKznYDsLMXcc6LnA1iaUpq5n5Pa39Q1tHihG99jh0l7/r12CfDjr2h9kvN5KwJDqusJB/yl3ezolOJ1AxDX1Hi7K8Eg7KxzvdBsLURJatLrabLczLH3hv9VLz9YxMXIqrcwif/ocadmFB1jVrvioN3P5hDMTz5fQ1yNSjukhwmuRTLGgWd/yo6kB6c/ucNW4d2QemGdXDs1tun99CfICo95jDppe4/kW12jxva/Yhb28SGRB70gqxdn1IEhsd/pbwyUGIu3lijqJ9b1I3uGeZA6tdWaJXgUmQQnmnHT9sRPv+0tj9aBTrqFfiY26zHhHvnuuV7YQJUhRw6jlblRN03XTAF79iLnQhBKpajLmk2O3sHP9EG5XwNE16TKLbpybBc+j+7+koYQ9CFcnwE96+puTQDXLj42ylW6UE4qMfQswsM/PL8P7yV4ebovB6GxzBkQ6D2gmdUnyV/F30hKU/UOER9tijU4rx0Uw+bAvao3ZDUaXUFZJhY7qmsLInSllTsnrq+RnPYw8GFz0fyD250yFcKlW++fOEzueqZlYU46WUz2qjGzeoFWdFKTnU5XCE016PCVqODWwge2gPy32/mUewTSH/SU3EEgnoL8v6PY3YphX+Y9/1qNo9irs0fhvVVld5y9mjamOli5S9rYK5kHlna0Wo6o3TXcIHMPLP1sAZDG2wpr0UQwu4vzmyQz5oPtihL4B8KznsZ7UEW6Oklj2qxE9Wbga0ZqKgddBo+fBelM9HP2Hkcnx0axttBIODP/Vy3vZ7fxNIYezEYY9Xst6KoW/fbjx1RWlNwIMA2jEwuXCCgG4cuh3BntlTgD6AYqKFokjme/qQJMYzc/rGQ2ebfIECHOIjsb4wXWuparTGN5LtasfXXcHY7eIan9L/YjwQXoD52fCrGylfgFl83CbYhybpwEoUEJWXWkDQk77/7oxxu0bNhNhg0I++VCJm82eEpM3YP2K+A==';const _IH='6f1fc222e18e8638992e33cf8713e4935b8c3381a3fe09af9a79fec0a337b2a6';let _src;

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
