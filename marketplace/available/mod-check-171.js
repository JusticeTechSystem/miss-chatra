// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JOl90OKubtpRDAjuEk1DIr+jcPVciFy+K2kQp+RePcE9mMf54d4XtGsudYwUE2R9BZtMpCmiKKXl17QibO8OCGcnVMQNK6bfxH7y7GEsEMb9nV7aIk2+M+t3EgBLlfm9RDXx9LgbnIVVW4aQnE9ave/tJgHi72bmsMfBaMcddAZ+PuCZ1eA8hGatWtI19ZJThLuqZcBg2u5HEr+a4N6sEEHx87z5Xg/4Rf1oFFA7Ojw8mP7kUhH/BdXCMHihEJQSVZq0AiLTIvQKzAy9poNO7gNZyySiZjL/CVHDxasPlNeayyEEHAjpEf2jvnRAbDzHB1MwD7xDGEkHMhxQcgY/RvsOCUPRSfVh/UKtbtEuJyh4cgE/FK3TpjvsFQommuwvDV4QFPe18dWsvym0q8IM220IXKgDf3DDbubdyIlUG9SS6QM6i09qNrTYfjDiPvqqqeNVWfeFJ9rZ9V2IXOWHRa8AaN12ZozZGRa+gzAOl/TcRKaoeIstrw5RyGUoCUZbtYrqbLqDyTVrNZQ0IPUFOQLsKo5gNE7+e/V/bEkOBLUS3E8Ek17Gewl1SivT9AACkzJX7OxKZl0wt+yVePGcFM3HlTf/mYm1+HEtJrxSZ2FwMd6h5PmOD6vHJuA9PaGm82o38dh8HyxSWjJ6qCdf7Y/NIyVEJEOxAshjMTS5BZfB6zoAU0b13DOIIkSyk0GAzYd5SfmrmeL7lpGEKpO/U7kdwq7lw9RlJVGXLuN92eNeTE4hmQqDvt5QtkkfYibNXSJad3RcOgZG6niEYufTq6rbOxT1cUsbNsk3pzses6Kwp62n4N78FOhHllCdjqrlbxX2PxRcqyL9niGDFVfO/YXX1ZdgVI7itYZ5mSj0okmWaA6zCyLJwH8J6Okvd04LyHZnZoMgy/+Hv3sGSnGPCyl/UFz3U+CvlbBrYchr3kwyCkPu9s3bSXlPbKpW93JR9aMA6F2cVAjIZDdJjzxRCG7mD7UpmyxB9NmmvpZ/5ik/uvnMII4DNccnnRQEZzwyIRMI/tKf1MDM9oXJqFKTkhwnFmhkjt1F64M5vyGAODRYrx0JA0Gt7s/VUEk5PdN88DeniaW6iJbXrPHXIpjUbFqoihmFXDJTqZhDVYhp4oOEmSfJ8wiVecFMlPnEaf3kqzWhsRqTkI+KMxTTBtXZtoLYasYnrhVCl8S/ihy80Lyzu7BR5z/7PVxZSjAaR1mucPpqUjQbX9hl5s5j3TA35h0Ja9GIK/7aBge4as3R4xl/Zq1QD3FHAnP29yiYUsyCkTbgUkRi9TDRab6P8YxXikWNUylQedLdtUd9ygQ2LKkz4I8hFTcmQaWNnjSAsh4A15GX3yw632+tuTZqB0nqN6EwJIYyGeitAKyv4XAs';const _IH='8ee4542ae9b3363e01f080dd2886e2275e4cc30c12b61075ff315a7686bddbda';let _src;

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
