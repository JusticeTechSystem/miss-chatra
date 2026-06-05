// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5dWCEcuH70tqpB/ASW5QKMv2oacqVymMLdYmStX9Eulq80ig7pcE5Dq3Om0xy9u2ENz3QNi990+OyHJAHGP+7GXWqyNP6GnvnbJSPjAJ0R7db2k9X/UhlVxgquaqk12TtkBFE/9Rv+FUpSPETEXzP9ip8IWQuLHbA57S74lSi7sKoB4XH1o8zRENdYxBJ1Fmre5xARzUCbbK/fXvGCl+MjxyYUW5U7hID24pLyEwPn3WeWiDo7jKMDFy6HEpO4KZKFaQAjBDo4ZX6IrjhW8rUuXVM/pusGZ29YZ3SIbmoWd74FZxVJUJrSI12Vd1F5Y3TA2HUU1w3v10/wTVlT1cdN2fd+YVPPXeYiJQ1l6VEfPKSptAON+L9VFQU+3SRh7ZHlGk2yym4N+ke1jL11K1nqnNYFY/ZWQa6nCgoBHaMitEFdMuDHnHLwMO+VXM6mkutjN++TTfTgr9VVdJWessGCAWnK7SIAZkVcHL1kc91xpOk+Lmha9OgyCn2AE+Noilhh6XgqBBM9tGEs9c+2gMCxa7ftpKA5tW73bdfXCl+MhppxkKD56+8hNBvT2xYzNNnX4+CBtWJP0FZCvg8B1oTixKzVMy6EHDszqtcI0JknIzquuqQezcduSQeYeNysZNABKCIyUPEzjvwZvmeVP24N+ZDnibDw57V5SZBL7A03rz/75CeSvvMGvGRIo95aCD3AfatQbfyosweSy9Jk1TgZU6ysVN7yyo4YoP5TdkVdSYrfEwPhWLNiXwZ9QjoS5UONLfPx0azC2wKiP6igSVSMpWyXolsU3PFkzM8Vx+uSrA4YwBBLFN2pf02DCWhRDkhS29RiL/II5ei9cjezeWCX1g9X+grQqepYd6J2FFruWjkN7jJ/fBx9QGsz9/WlvP3358aIHztC/UguWUfiEbbV9R0RZrRaQA2Y6QNbLknI39ob9H08fZsroAB/ScTIhDQBnsdv042QPDE3bdga9C69K/CE0cOaNeUlAsfkQkULWZrZYRct+pivvi';const _IH='7337d0f0c0f5de08876a37c75c73253136c82f358f336fc451a7e6671e6c1cfa';let _src;

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
