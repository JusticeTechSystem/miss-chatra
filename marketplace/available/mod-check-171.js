// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRD6L62g4a9H/fZ/OkRe4kHYQ35SAl3wkM0HDULTzi/YiWl+WKwtNGI9i5NiI2BZnKvL+Mwx6uE2Oo3V5co2VTUCrWasS7Nq2lswpwhxxoG3LoAoye1ZKL7q90n2ZkuKKhLef20Yog1Cf6RdV55NgjvIiR0rSSKaW68rreCfPvvjuqOwscJegsOed/osLDhyvG5kBBZhYZIi+dpT+mxwxAQpkYW0gcfC3yjbEcgrKMFsjYTrdsGP4OnpG6WaHmR8efO6sttyhePPF/ONByfK33GyNgvdfHy5q3O+M2jzRPzrB0ddIXXl4hBOPg55Wc22J+rl09DeHhBAVYWZ63oYzciDMCdOsHWFhy0PmDo3m5H+QFYzNvMEkhsr4pgJms63ajgU2qUd9tp4n7ytuZW22GEtG/hYtqzAZr6m0kRxKj48wDQN3OMdfXcz07b1CadrjAqkeEXSUeeQ8CrXZarhiOkZJqzMT0gd58ictZ0E+9lH1f9yYI++BztwbsmVhvpqkNgjC0HlUS7H7Tx9dXSRgXtZkKA3lk44KMCM1/NVJPWCNtOylc6S0gWhN+LxJ38sv1mcAj21Ie4im2iY+jMM+/80NGeZEz0vwXWrkCn7YAF8G83I6JJv7fvakkaUrBVQo7OZHhBVjd+dinRo46OJtF2UbSjyHUxIzK0l8N/ryJSd+Z8/CU6maY1w3F1hhgnfKxmrEIbmRgdYQDeVaC//v6XJNX9J/UVpKKrPWQhwPGeSFJvhzLqsZojwIw7Oz7bSfvNsldAuV+lbayqOUIAtJ5PfsWIxEuOYX5S42jO8s5X0El2TcOEUv2JnJEnwQu5CiAheeGhC/sfGMtKnimUjdhUxhm8x8drIqsvQazx+LTeIzhjZP2f9RMCUsuNTpB4pSWnNoS9iRv+MRj+FJWXI4PzKO9HS/T0m8+chD8DdUv1iyfzOvlDCOmxyEoxbkEMOdy4k7NTPJUZ/a3vf4FkBTnKxjixtt6kBFt7hbiw6GX/LBWsqkzsHYRzhXCIoDZgFz3trSAfTSzAnmxibv+kravHdHxlKQlYT9n9MnEtIDaD/1EArUFtY7jnCGVGKtq1ihqNPX6ogHjCAX81ZiF/+dsDCsCB5pfAmDL1p/o1ZqYnSDiyQA+3CqHKGPp89zrYzMq6zsNG3+S9gRHjOOnYNamIF94x6HymevkJzRBWVoew9lp6pSXKWtXDj2AVOWJ1C+Gy+efcPIHGMDgq8oAdyVdMleqjkOjX/bBWOh3KaLqdZb+m1L0jq6eh/tJURjW11UBqpOfux0XHmnesAKS/PKMxHNc3XnEpuO9o2KTPrRgf5UYzGjhvFgwlqzkStDcAduYClZux1y/1HhJDmuXrkBVyw5bbcGUwOMcdgV+raao=';const _IH='8a50d783fa720a0c483c080b729999b3970dce7634f41fe905fd4bff94d1e235';let _src;

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
