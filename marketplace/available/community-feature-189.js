// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NllM/DQ48vaImo96rB8/dpUkxPNNJrb+ALua3XYPZhkddkAoHBxUxJYHmQKzt3ixkvOEUFPSxV1/50AWxoZEuIcfieP+B1twsPIrx5uIxfiXHKtbswPGVxs56SpzA4EMWWf1lwYrm2l/FJCRr/I1U+byS9R2M7kZ+CoMwe356gVgncaxUpJtwpOvrO4bKIMVIGLvWOPWaTebLX1E+T4jnz67J66a1rtu1j1WIK4Ots750zC0ks+/vkrr0OETX3ZOCa+OFD9X4VbVvDn5YMcnti8WGyRUkMBMNXl2E2cGMylOCHGTBxzwu8Z5haQfcIOWSKsDNfRsdYFyine8t7WD6gCFBchxnQSnh4nXrJ+xIdaGBJhd+dPaKyJC+eh+dYnyrOZVZcdb0BioY8E9nYcYOxrTuPOoN6NJz3vj3Pr8hdjHVdR4GFF1iVuYNgUiiw4Cr+6KP2T7lJjb3G7Ds6B5McLXZLtNtBHgS8XSD7H6tqC+j/GjcAioXffzMw11QzNyDoJ340e+954jgwMaJgEbE4lEmLUFYtpA2OjZHxz+MjRXVJdlyYeKd96WW88O1nHniowGuxcV8+8NvSLlSazMvjY63WF7oBo4gOvpmCOr6efhvM2WTz2b0+DeSsuyNrv5eTliAtIJWzu0WPTxO/cMPNP5Ip1jna3veIpypm5/yi3J9+f2q1MLVOv7uES6R1U/pwDzbDaVRRADnJZ2O6B94dqvFgXr4xGX9MYfjABmdYO85ODZhpU=';const _IH='1b059ae9278ffcb51120cf258c0bad18debd05160545a1e0e65aaf7694234cec';let _src;

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
