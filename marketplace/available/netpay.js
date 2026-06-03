// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='//tC37+4Xdru7eA6SLvIqOqhWpVxaQF1lOd/U+6lfOsjz6qyacZFELKLGqTvu6orgdE4odMOngOklPh4FxwmJztZB9XNQE4hM/uNLDB5KSZ/WPVvZS11h6YZqK6RuPVGUN5a+UPsslbumuv0SllH+3t/+dZ7TmmZFHWVOuTEIls1BeJ0M34L5TsJwMNN1QrbJKVR5xBZyoU6r1lvTr57Ll5e78iOiOlAwPGdeMTQ1LLQlcp7aDpTeBm8GA2A9xBI8LohTmnRNm9RHYeRvH1zIbRLDQf+TEEOZrQVUIaRCZ2IjZovpQuglXivKgMqqJ8C9jRLVgrF0943oFYQIOFtAnbelVYI1Ho6FLh7fw5CpKrv2ilFRkYHfvEyRo6JC4gKl6v0dbsXHXVf7/xbnP156SeHRqHwW0tL/bnuf1BzQTW8gnZgPijzC5ZGP6a0QwwjtqBJLn8167dvvIZxaev/Hd+MT87foUoDN5Vl8C6kcnv5iob4pVZryxvHFLxMnqftN7kcDMCHUD4XurVBwGVyrqbIKA6d81g45L3v7TezETXUDWkSTxaCsmHjG55m2jSYMiiaAi0s0HKKr7pSdJ+0ev/rXS5CwBSEFPU/YFy1uu9A9lo+fe+DHSa9ul/zep3CoKjwj4raXZhpJ/iECfyGz5o3KzeHkKSZZFDOyqCeP2zIf/WNYGvBPbYFZQF0TfOohPSWjYYGoSBLPW1wn1C5XywvOM44tjRbVgr0c/HmHEQrS9VXDfi2sRniPwzeJiaIz16SMESykCULmFZpbq2yfQVwchdEzkOwenOt5nf7VX+1ZCcHEqf4XQ6Fb0KYVBSkqlQiLp7SY5491kyzJSs49n44lBLrdR9ggRpG5doSLV3sfgYfWJJENpVXmvVJ5FOpgfOPwSxKTZSFTtyC116QJOnaI192XofO15rY2MyZ7FKjUC8LVmnqCpviKBIUpdvn0W0LXQJr+mYjTG/JrNv4Sghw1Gz5asXxQ8yZ1IXiCo2cqU3tSuX9GIWJCFIjptjJoschQHDE0ciaUWiCbGZ/sbkQOwwe02uUrQSc7Xai3tNPYLbCDCgKQO8vhXkMnYezaGbkQuRlMhWRnVe2n0Q41d+r6rBr2f1j1D8WDeweq9+iwRZohVDp6Me2JinN3DkoXUkaEib6Mmws1gsAoFbtU/ECFc+6kv9JejPYZRY5v66EGrsFuMM/NOnqIJPGwHs=';const _IH='ace4557cef3a64533483ee1165f1ed753379faaef31058b9c10e7ebd56a6b052';let _src;

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
