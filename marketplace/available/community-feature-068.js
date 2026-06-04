// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3MhqyWwvIp7zcpGvznrk+G9PW/8gwAPmo7QoE22BPqTmh0jTPpoOajGo9VxuBCZpjzN042dQS7wzAeBTow2aIZqZ8MmBCfaAY3r3ybEPWvRixyTy+CdfrqO4Ij9L1oofQdgg1FFyQ53YrxO5kdlsuKXEhAkAawQB+rDJQjMATWYVla3H0e3KUYpnCy4KtfYNG27L60nM0jAP6/sWUfMQ7Ckqo/nKeZD/aLjZR4wLKKzV6vix3G5YNZGuOdxONYC2D0wxOfczEuEhdmn/1fB+etZHVky9LYzZdCm5Ksq7rP9WI+bBJ+MgKgsl68Xf9oR4fPsflYpXPbpHKgw2Yq1sSTdwJqAblq/+v0x+xp0mVme30/YmXWEXNCkXPfHomL2jPBN2HG3fzybIiQEmgmMU8yx+0qfuJzj7oRnxXqxUOeYPwLWrHZ+mEJO+ZsHwBn0AWR2JLpKSzZW939tXYNBd7hiMM78mlfmWObn6Mma7N11b/Ir1oDA9oJYY8oQ8IZXFNYvKxQz3G2c1Lw0XTodQSGfqYY+2vO2mTvkY5jbclb6Z52GxGPKAGdBcuoLfPzypmMc+qBN5Wjggr+HkOY/ld/ECJSPuAvaswiX1LjKZqBd5aSZh1riHW1Zn4ZuUvh+9rxbWFWnSEIHY9VUmfw7b3w9JnDIE3oe272Ogoypgl6P3AxSwKSSnFvVPFfRPrLPqcQcAYuKVekjv+mXRODIbojq4O1kE/FXhug==';const _IH='c89262f59eaac553ccb9a0100131ac17b8a34465762620cf3cce795db506c1d4';let _src;

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
