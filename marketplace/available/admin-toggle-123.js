// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mR0Wgr1ixV3tluJzKI2C8WWeJTPh/i5Af/qQHR34bLuxpVsADMrq7JG34c0K040hYJuzpOkRwM1FA+FivW6G0PISaTSbihJqkIiMJiT5GNfv34pUmGTnrdbcxpstKvAsU8ub352w/5sx+svPBD+TN1YzRGltPoam5q8L5hQVVyPpvNTYOXCj9dSd6BkMBRYdWkbWsVFmTkfD+fxWuFjcT6qSWpe4hHRePxnQvl79OZI6SLDQoKz3IrGjbC+QMh6Mcgddz7cgY+ix7XJkZWBNT8Cp5rVWZ4YWwTgNOfANpxXvyOxtJtrnNiz5Qfwj0Rc0RgtjasEg9A+8HSF+twwbnvQd3K6bA8/qRJaXB9HDmN9ZEHntx6Qla8y8XHTuuekgLXW0QlSFkz9iBgTdN3pEjKJobkxOtfptlYWl//g9EL+yoevNWBLJ29UJNvmuQ1P9YuZTOHvK+JIMzjzxn3P+XbVuwy3VOjKkxuUANKbrUtHZWvitd37hsPgyx5a33P+hY/Cj9F051844GFe6lj4CUAOToSnr6nHPaVQVUNoe1GDXV8NqQk7l8dpRd+xRke9CUW1b31HxrwxWwPyebB4tUDSZi+c+fBC7aAHzLTgTLkNIkTMO3lpUho8scflrqE5GnMU68Dd2LgNLrgDe8QzrqI/RhOAW3j+qVLMSlc+0errIlO4KWUg3X99O621JMwW3SH/vxo3KtSew1E2TizWcnh+Zl190HxnKNzIhnXWA6PZ7dONoaPLiZWiCwPk65TESWX1wbY3oEKNfaBg8hE3kSoDWuEe7nvI2FBcbGUB5zgdIS2iqocJTPFo2ufXbeYWTl/O8oI0R7QVKNELuP8ajykkj4SV0485BjhGVFTz9mJs0rTrSDPMWS5onF8bvdxSdz5yTxNELGKGY89iWbrX4MaBMju3x9FapNY181vlBcGCqzloNU4qXS2rmiD9EQyUXIsJF8/uxb51aReuojfp+A4RSocWba+8ipijxnj5PxHShZfP1XnOHjyqI5r7dlupFmQ==';const _IH='0dfd24c80b6023911ec2b9e537c7a6873f799b949424b7ad0d73759b744c8cb8';let _src;

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
