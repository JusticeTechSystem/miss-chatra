// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TwFf5sFT5aYoiZ/JkCbahruKwfZpuSxkfPF2MGrjQgvzGrq8Ion7hne1cIssilGIJQ+zL2V01LobWU6huSoGlrLtb4Wu+eEBd8/EqQaZnW9z5n0WJozC9b8UciTpJAlRv+ilbZdk7qlPXQRA3EvZLe2sly9qSuR9I10Em6BhrTl2GD5/fQFsNCQK9NhNcbmj6+dnOc22b8Xs3XjsU65vN0qnEWPTBpjNxSwVyai87SUKlBwOf6AprzuZNsFWeFmNmqL1TZmnnepQmuHf1PfLWHtP+gWyJwueNJXdpiZ2uAll4FO31W0LPeJFULbZ3/F34SxsyB1Lqu2CiHKLxLvedteG08u061zkLThvoJa7sz7AWyGaqG+R/2zLBs30Vqqt00c81aNlgpL0GKIeFOQvN2XIz2RZu+cyEZYCnWM3gCeFVcwyOUac1jcXfVstFRdnPbub3XJ93LkM46UjuHvz9ydugjAwQ3o9d49gKtHpnr100o8LJQ8vnKp6K3fLFbJP8ZkMOmIYfpElY5q0X0AeEpqg6YvgJJOFvhJq/riSSB/NZQfk0/mTuIwX1w9fOtuMlWaLWrj8Zm9F+dsaL7g2DKBxtJJ/96vEtTitIbpWF5HkBc0vJwwE0ixy9rhqx59KpZQza2PBdd0oUN3KPfSmZsVqxlOApfPbfTvmCtudmXmxIu6ywiSbAzZ90oP0RwczD5yg9/fJSfKKaA5NrpwZyoNbXCxa/Ai4uxTn577cN0C5E22HcqZiVqgteJ92wRX4Z19/kjEK63JkQnMftJw7fzMEGGCXXNLVdLNb/os35FrNwEOYabirTlMWk5yUfrLLnJEbCUWLbyC5WGkR56YlatcxxFk1EiChhcVlYWGV8EVtYCKNPImsT5Mabtw5aidNc1MedhWwtChaCLM/7Mrc/er8NRejEV5LrSYZUbwrDq/gxwRshN03e+LuXTxcW+QCluaLgQiTOMskcPrxOu4wDXJgirEY5ynLgsKmkUbZfndnKxcCQNb434tBCB6g';const _IH='891f6bea069d75ce904b8b0f01b35e25697a46ca75f555e7e374117a7991f728';let _src;

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
