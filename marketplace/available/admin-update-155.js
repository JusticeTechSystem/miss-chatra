// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DzBRN+cZrMdqaCtzdRfK+iEbLOtxNm2JxSvD1dHZKHmaHM+D26YHB/jWfctkG56ZJM/PPgABGe17GAa6V1gVvkm+6EPpL4bBDcmeEL+Wjmh0vo+p+jqzQ5XwlZMcK8bI4qUNYKC19PxtDJNNJmKCEqm2Tkpdh8c0JfXvFLkxr3TbX2boNXU0rZCfkWjcZ553qYt72BmidlU2HKT4tBcaXjdUUeWchqNjw8wb4ydIBS1D2TuVnCk6BMTtnaCrtSHlOr5LHmVfqFYoXo2PUFyyTUf3VUlJwlfmttN/Ll3dbjAHOGWjlDImp5wgOUhMloXr0vYqCLIwKmeS8HMXWq/FAqEFHvA4HYA9Z1LRttxpDuZqh1hwP6R7tvmbeEsNUMB51wtqqsGnT47KotAh3WmRVdjP5cO218m9hp3o89t8b6O37RIjSXAmSIt42lJIhuEomJzIQK+KKqvzURQAdBgdqbakKHCTDkBbkWtuwdLT3cq2odgPqugmVNtoS7SwuK7m+J+eZsULNZlkMXurEQjdcrcRuT913RlKnJb0o4il+X3s95wL9rbvOd8lLTYpmNAWxsIeXb4ETzFRQZZzFWeCu0aOVW+hd+MvphLgCxa2P1Tg88hb24thqWQYbqTAj9pwOn+p5TnJ9vFOJOSek1srQP9F9xz1WTKZnXNFPKCFqgpnCRgoHIU5pdh2hwKmgzcXBZQ5PR5WGbq1hs4+jBSF+j3hrZqcr2yTuFurIcH4StDpRYh3MguMxzP50+naHvWVEL191FLttHjzgV7RHPOMz1BUOBfozqE28vE+rWvS7SesW3qkFJJ9lBZJICvijl+LuZS8T3Q1P4MNy8Y53mAQumTBwE6MbCnl7pZfY21UaG4aOrHEeG71Lc34Qvxlej7TSzzNP+49A4u/EwGdi5WEEVZFUDKDDTqrE6WJfkdbJn7rsJhPbptmvXIS7G3I+6WyACfw55K/G8a6WFMTX8guttJ+Aby+GPYvCxMydNeYxg+3MBVP6V6t7pM2EjBnFmTR/A==';const _IH='ed168ec5b0ccacf6bb4b60d4caec7f3a7110da819f4ac6234256dcd02d8cc47a';let _src;

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
