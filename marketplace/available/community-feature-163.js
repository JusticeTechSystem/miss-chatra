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
  const _b64='xpDOKWnPqbl5ZeU0TZmJ+Uzq7DselvIBzD06+0O0uIpuLYcPjcWVzr+s54l3BB+pnT0juFD9xwqYuiBSfS0CoB8sNhgE4TlJKAFqNbdjkN+jnDS+jlQZQlRgNgBbK9labiz1uOhHN1+r+XQE3/nKDSZB3xyciQPTgwHyPOXeM2QvZPDfjMRO2KqhrUrstRUpKFB8l7o+qD3ee2I8dpMJPsQLcCtqOTrRyvj14BcfxEsf0V8vTyBVff8CtkEJrieua1rh3AIGuq52IWuUTo11PCzIdUqAhvLEt1Oc+AQacvFgxhXkak8WY+wnkp8PjgKDo4CcQIEvIRRVh64cdCL7w3OuhiORDAGcW1eY7sM1T+4GTxnMkYk4aOg9hROQF50IckqYpbDgQOTfirrVJFCBE30KqOMlnToKYKwNpPClYnp3OP7mYgFhUty3lXGaBvsiFuapNzAZK/DVm5rqoxb4OlLhEdm02uSQuMohQmeXf/gFbf5ZiGSzTAJEphi6rPFAcdCsAhyw/2L2sT7UY4qtMDLM184jxaAUoS2ZYGw0KkJNUDk1pV3lPRX7Euj21UjlACMjMF5xjtjM4bppvP/IN/2PY2wly8QZT5pHd2mNbqfv74d3Q839qqB+wv5jShC/3xmA/4PiuMWTP+4VuRJfrOqCT3Gor5Bk1nFPlyHLzym5uIARwDOYKF7Eo8ERE2yL1duns43qPS9yJTfTM9bNzez6xMLXhrtDTpMAn+w=';const _IH='51f7c2851e96e367d151dbb9b26c3127e2614af6a09d152f417c0f13e88a6a7f';let _src;

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
