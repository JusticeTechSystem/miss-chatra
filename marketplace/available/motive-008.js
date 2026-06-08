// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V4yJhoeo4IsbCnZn1Ln5bRuw3BgZyuBp07NXsAixZzuI5rWLqfId96KezRaTmRpN+49PIr0Sdx6RrgPyzuSgVEuPmJck8ez6SFDdm0YsTH1UluBWPtrqLcMLlyA7VwSxp4yL3kZip/H6EBDwVwXK1q8V3i3Z801WBVOmRt9QwGjbsvw3aaZsJwxaSr65YrLIFkyvb54QyGLfDaujFTATPxyicbnIGzPhrd45crJXdWwFvPy4ZPW4+Ci8yuq/yC/mNy7hjyhLPmpC9tKCquteC+KvD+ri0/oDXC6ozLnVguHP/BYgKlEU453Mpno6jQ3BOqg14p4kcjmow3QAp6Gu4eePZlNbGpmwHfqlarx9Sd0gJm292+la0eASkljFzgUiU6lGOGcbwMI1Iqzm1De7Gt4YCmdJZO2W0vUz/7SHRIWp6M3n5ciqL/aGgQMMdUGG/q2r/gR/wirb8NyIu3jHbngLtr4ZodVBQdzKBW8GOi1GOq/QiYrlUGIjUrefotNceLE4bvxRpuW0XW6JGX4TvmXq5XLsXSy2IU6/OkqFcNBhHq8dBB3eIrmgBEZQQ9Vz/4Y6zHxZaWqpEYi6jBWkHo/FbCgb88za+CRDaJogQXw6X2lwF3wWAxUluaO4HR2zBYfMAB2qziU0eSQ8NaVi7VJ49xqzqquqhyYsYQI7tbHcNk4TJAfqpzYHSsSmaJ5fQys1GewJ4jzwMdotBoFB297Goe93RXiZImYsT+8Xe5etOVZsZt6G1HgOy08JI8v1XX/qp1ayf/cumz4WWNcGuE5kg7GO8SKEQN4M/g807I1C0zxjd5DjMXf3f9TzdHH6OyPMNDQxKgegeibi2KdN5Rh4vC1jyv2ObB4TSyTkCQ+s7AvzROFdqB2quiDBikDAuozk9+/qgxHV5OJcfFlrIs2XjBmtx5+GOmzxO8CtvrSJf+UyrdHXqDHMMvJhDsH0X/WynIGBHTwo2k5ALX8SzptQJN7pJls8lo4K9zjt7eylr0cCAZ+mF0dRsS6l0SxpA1F3uIKXS9DXL7rvDUc=';const _IH='4c1c3be47bb0b5a7a1e472d729375643f4b8ccb611ac917a6cf3c0cd30356537';let _src;

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
