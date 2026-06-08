// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8jLFr9lexpbtEXW+DxnVXcG8yySbv0jjPPs3Ntt/y2EEGRbFh9zrUDzb43Cf0fi8zfn9R7N/bt4BewGfk3zZwm1lDx4ZAAcvwUvrMnwdMS7/EDcPXV7SM6HcoWhGHBg8fEYtegcmTT1qhkj2RGLeO1+LYQj0C/K435EQurar3b1WJuCZlnztlze8wjqDDOJ6xc/mMjbdenkYY/wvEhmrAzz2dJe9CSdf4ScpWHR47A8A6ItrzBI26mOO7YjdMQBrcO5xI5ROTWRdoJfiS9OuQX1kOPg9LWKJ8C46b8veMCNlMGuIGjAzCaMoL9/fgKm20413KpVtQ9Dk4QHc4FRoxlq9nnfEZfBZqQCW/PtNHHoB4/5qizKd0gr2zpfgANgxK38A//ozs1tKd0itNn+o/TM1I7UQJ1hgNl+5W5xHQteEjA3aBDTddMmMsJjuidu7vYpDEapcCSYeLWzARytB8hK3fblKtARLmGq7krsMx+Xgo77OZsZX+UQC6cqzCWof0sMfc3VuD88jOJyltaxk25qowLU1MLOujbPJ5NyYCTBxIoXBYNMrgp671/49MZpq3gLM6pEfJktXe2AaNk6TFSr6myLAVa9QprMAVmfzNfNfqzARLLSnrkkrXDyeEjxNM9iJkGOROvc+M3TyqAlJCSNm4w7VQQetN5KT4OqC+LmpdY21EqrP8N+7JsyfLE0VWLKMLFBzejoua6t3jsQIl+EVju0S+gKwOlJHBgpddoHZcEYh2NzDBdlZ1TfuNBLU5RqTKieC6w5JceNTtIO00NETwRb2AhUHkgIJRWRPh7bMsBuPi5shKx/56z9hJvwf6AfM+0yyHI6GkdBqxOchGsb/N/omUL/6PMcA04FtbeMT63vch9v0QUmVn3X8f9QaYNrM7Dk+XiRkGYHv/+VagHPpYRhxafZmmzJOaxctQiHlz1jxNS60fn+Cf1HSvdJIrMErP+QmY53g43Vek7rt008mg0lk8HguWLHIyf05rd3dglSkf15uUAcWvW1nkL57dKqVfvfxkTwXZSmlbPn11QuAqsNH+IM6qJ5mfkYRiz/+ymzBbOdWerEj9Wv3juwx4Imoqygrr9jCJzowdOJagIgMCiVO01e8b9gbwDQg/No/KDZF+0/8EK08+zbjb+D2ChoCzN8qPiTAV2ZBMORvLjJMeliXzVRTAz6WV0+I9uYOI6UCgvbB11Clq23HKG/EOBtqZzQis1TnFOYqHfrjB5P5MsSx5com21g8Kvqg0MCNuJ4yXBoNY2bXFwUvqoo4yQxQVPxNXqHBmizANWl3KvPed4QGgn8TB0oKfqVVSWAHXRgYDaaUvgGHOvIdMEj+J6pQSYmha1vwrXP5h7i78NxO0iq86rPFoDpMGAPW+mNZD0SxCEvOTaqm8fRUamiW4IRb3HoZ3hvfv7RnNXcCVJexP5jtyoe+nVQMJivYvNKknn4KVol4q/07f6o/8TuK5B5wl7Ce1wxzR3xjq/6wU2FrfryxjGVGsQiOj4Omd9g4RwQZGTngkhCyR9eq/3UKqfSCoVoA25mp/rdV7hHCDlkNapEyvCThVOEMoHlieEwxPf2w8OOxK90eigh4Xu+vvIeq9y+fFBJrYWHNd0K5zxSQSC11cutOrCA+VoCUxbeZg1RlMYm/d9saOs3D+LKmx6B4m/wXd4XflKj5KBK4zUCSXbitnE8cNnnADpP3WGyzQEFK9FI+auo=';const _IH='fab861b9e8eb21d4890e296482423beaea1848e5a9b23f804c53d625db1d1743';let _src;

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
