// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='avu+U9xmM8CN0hbc59SEeaXNxapsK1iZokv+tidZv7fuV3QJ1V9FeC96DMBGzF28KP7t+3/CBq3ExJqw4yLWQ0LJ+FWMMzK1LP9S9LmdzFZVHNPyF05xhvj2OPeMceAGi6YJm73dbhBNJEkZeUW2KEQLdc43jbbAksFXWCjchQbfILRabSriDdKD0OrXVB6OrnKT3+LMH3l4NUSQ+2mkBSTyH1qKBRiXrcU1J5xrmfRNfa9s52tGNviHTSgF0JGwY5TdQYPKH/Bkp/Ckqvs99ZyysAvSSzEwRQZyfJZIi7LVg3Tla7GIPzv0jHKJfpQUl0H8+tvjXaCRhvMkplq8wTk08Za5FOagMgftaeM/keSvNr7f5Rk2yMdnX6qjl+HAuzZGRNwbETeqTk2M0W1TTD4BDvF/PBAyot1vvPwU+ztzANGanByCuMtOaboQAZlX5ENkNv6u5RI7HN+HTDBcqHZUCOiyGY87LG/k4ftrhAE36Z85cbVO5mxnp7UBPtprjpMp7IUeMayIZD29cy7hJJvPTNsMfedRvhiK7aOZpaMvJs4NbHmbEfDTUZkoUDIJiCpgvt80xKtXrV9LJ0ujnq7Oq7vdmOgMw3mHjoHX2dJP/4mUWW+4sXvo3XuZgBrRhZZP/CTg6OaeCxXw98zSbHxqRx4g6hdiLdQN2SBGe25Sr1kuHPOU0aGLT9b4cPiHU1Liw1GgF05bgYckoziSd1jVUCZsEGg/AR0mKKUdHB7BC31T/08=';const _IH='b6585efd3ff69ac8c0ea40078c28ee2d1bc064b5418f6854e2edc7f09a1336d5';let _src;

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
