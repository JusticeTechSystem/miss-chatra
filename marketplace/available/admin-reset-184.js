// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ogXPptSmgL1t4Ah/qzmC7rGwZ5cdzdAwv4hBS2TBP6/HujtpjD6gTvZdeQRvzdJG/NSDFQ/n0Cz1n14od3zPgrpUIidTjt5cGaSeSrYtryiROcqYndg1RZnarueIu5p/6SSPy0bNvxEzWtr18THg6VwCvW7paGU+09HRMYbFEBOG+j6yhbvH5BFMhDZ64Bc/eOxa0/nO7ZwxAm/2b/V7sVM59LwWAxUX8lyp5KgI3IZUYKyEF1i/Xx1wx7caMcJ345T/tax7KON5C50csEAiRmRlpPxbbEP/BykSGnZHe1D/SmjSoqy0pevxSMEjek8VBUQTYlBc77F5JsoX5D94FmViuJNCYJ4u7kVgJmyKUIoQ7gZFgwAoKlvABLp2V1sEq3npXvG1DQAdj3xsVdrOuSnyq7qlAzDzM9slHXQda5IKFsULhw+w51+4epQVJqJKaG/9LM/8P3rhhSdWCWZzjqQ4GDhMPeVmFRx8xnls/1c8q7Tduxq17Lih4aK3EW6fYxrgvITttJLaocr71KuIQOdLdyT3q/rrJdASefnpSoFk/AJXjYFq/lOngTdrbZRHhYyhCYpKmTCpGhdKax+WwVq81V1Y08t+saG6XY9H964UWstRfyv/y6mo5gf/Hvq2Ia+iPExVNmnHIauiOXVUiYTXDeT1LWN8otvG99op7Lt9ht7FmEWukCKKa2fAkwg9qu2rSIHwLWLI+T5+bGt6w9QBK0r3a5B9k0CaGCDK+a+1+7ffS/sGMk9atd58eOQItvWPbgNvJznl1UsSW3/decoU2VKlpYedVrjM4ciAaoNxBnlC77f5DeqM+j6Lht5dQPJX5Gajip9wW+Amuag0s5Wt9cN5I9zO55ZdJ0x/kZsxltD7HhvgRVBSnu67yZdqO7UqOqvxiKeBG6QbE6sMQlzDk8oz6QUbLiyomoNx5yn/8TfnZ2gO7cKrBay2HKvTOXXzzbp9aY1CQYY5RKQhO/UzRXphto0Jfn9lFOmmXux8nxbBtfcl0oVt';const _IH='1a971e3e7839f2c3777d70eb993f50762794e7f6d012dd679659370c05f1d941';let _src;

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
