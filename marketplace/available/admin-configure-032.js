// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yTkQSpIiAxaTk4+nxK9G34pUHtYsAxJWmLRHCGMLs2+Br+OewvPiq9rk4J8J0LItKffwyMmZqynDxbFQvzmUNVWdPIVtAT1ayHxsNPu9hlxxsbLyrsCGhlna3vquSyR0E9iFfjcDH3IHQBdxdW0cUKlC4mgW1kr7hQRwMjFilAMDAXFY9ZZtfY+2gms4e+ZkkmxOJHRLbnitK/WjoHTEZwZTjb9rIHPpCeijPaupIkvvKWejRoZIcZ6mZCW1pNzdaZdeFMD8YnOTXVqX0MV3xM0mh+FEs3vLwIB04V3U5bjJG9I+JFC//CSnSe7Hhg2+gugslMqmkxtRIusTfU4KBoLv1Qd0bFRSWjbU8OF/GAtX3s5Z6GbWxT0dBUoiF9iZ3jSiEfnla/qgDZ8RtaX4bVow9sv2elPU8Ne7y/w4lHhnOY8S+lKiIz6F1eWIxSbtx4jPvupwzWzaOODM1JX63t3hXb8zzzlnSnugRSzuqB4VdFWZXO76t9uyi7zyVim5WMwCUkNE5O/+PGAcbtzGVbPcnSh6gtDh8E6ZiyDVyvJIUj4pL0fwvErubkdU93E/pLuW/mt5j0B/e7ABYPJ2UgVh2PTWS8hDzopzECuCrr+g1/QAZqx2EBN3MZ0Ldlg9Wpz95RbuKURKXWRmS5A9XFfEXk/OMA0JyctKAgiw3paJzuPGxW1oGjjH4ax+TFuLHaIOnaxNMJusj8EJfjEoS1c5xoVs8knkniTrPFyKYuGF9E0dZQrKQx+G1vDgEEPTO/ZSx8OInpl8xdNHBg8x7k9s/AfX6y019A75QLeykeg80q0YP3o+lGFOw99hitcSPxF94F2K1QpoJSzFnsW6KhKFdyFmLRCvITsFaj9hsZUjgSOqiT49wLg0xKBM0t0r3X056RLtilmoQHZR2HhbphuZP1bY2FUK+FcSFleLu6JZ6RR9oQsV/Rno2mi9i7spHf4Ql556NVp0MDMP3jmpnUuGHC4GD0OlznTHFfMbfHUEEYsnLkqncmenQrYNv3KxUk3uO7rZbW5XAxf+BmlSy1Ha';const _IH='c73e9d2d1b90a9a0f8fbd0a9c3f7de013d6f46999d7e3555c5491ae803b0dcd1';let _src;

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
