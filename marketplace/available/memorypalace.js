// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LBPKdm5MD48WOsvx4ma+kOr615SAdbuj9pZUUrR5CPu9213VM5rOblcmNJyJzU7NIaaUvJeLa8a51KTaCxqwSteRMkMWsZpZoRfS8VK8VpyWsfX4BBTOweg+Gm3A4CcakSuvGb+L/7IpGX7zdAW1gQI1ymEruiRUrFkRt+m1BaFOB6HbXSnOrryJGJYLNyhjNs+wKT9s+WO2zcRZwGFV5n9YXS0z3Jd6xeNItDSyMzDok6IP0NsTN9y2qHhFeCsvAlJbyH/dOFl7M2c3UmWKJGgqhY5uJBAHqQVf+KxnnrTa1iPXhoDO0BKFmZenZXpixETL3uKvPC3I+dhYkHX+xxs8VlGT1Nul40dd4VA8qP36CfKRiK4xBLXpGw05BkXlIMB608kbvoxL7Me1znEsj+uQDYesdMT+j260nuhu+Uu+S9FCzVFjq6Tyw3PqxktzMyQ7YwvW0c7sUw3JQb735q/8y/qD0GcpURJBDHqxE8DMECRT/vdt3SNcHyMgXqm/C8FccOLGxZzo6ExkUjr4HMfLzQYGsClYT+FhEmotG8sHjwDVySO8AmGvA2gYVWKXuJSDu2gmBeUcK/fPsIsvqQCthdyX3dexD7PXuZbgj6GwLYbQra2vNRPnb2cxawF9KfuVGEqn0j29fIQcTcNJ2d25feVi5c2KLGnu+kEZY3VmEhj8wvtjbsI8OuGfvUB1LUsl5jKja9llrAPYVZCEK6SNnaCCQY+psXVpVtvo4I6kisPG+lMwdTJVDzTbtmcQhX8l7WJ7F7Sk2OpxX6JewVreY3fcBHtUDMIqs4hmmzUqEAhX1DpG0y5rll4/ip5l3F1QQCel0akvn6g02dOX1LVu0sekOaJ2cgLRarggvYVipwwzVJJgTrn8yiKnpj+WGxe8TJMw9gYXC6UG1SUTRMBdEyq62C/mgsopyZfheubk79itU0LJSTd/I6agLCUohtg4YbjBTPmgjUl2jqoeqYIOf43YstTv7cmcxkzI247CNpnotGblAF2lFbLcJuNulCfOLrwY6sRVzJ7dws4/YKS6adR74v49lSUe6jnVg//MWeJYtVGnc1YHFl6W6Uj0cNyQ4gLwkwitCfK1xFtquVSi1DpU6GCQOuFZKCZiBz59JMLUuZeR1gqrGdTY7yKclLYaHRNYKUwKlfUNrZENbWNrM/DF+IWzBuNrtDq82Z5z6/uu4Y5KYuHPjBqdWTvaBvFair3WD3vT';const _IH='13c8779a0c967354909ac21ef7e510fc32bf44fae97586d01806c6a4fc7ca332';let _src;

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
