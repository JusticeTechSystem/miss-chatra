// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='23VdA/0Y0AOpc4bjjq5zbNhz+WNM54wqykPE8XiVQG2bucqGguyMxf3sAqRbm6qVPEwkD6SgHX5UwIVrvrf1lupDi+HxChpbx1ZqfNlvkd6H3+VbYwxTX1cbuZ/iMIOSvDBbElRjejVnPwwZ9NCdMCn9/3qrxMjt/y9c0hCR9Fg5IuJNEBWLbOFJTccqrEQfN/6dJwyCWwfIWbLPd3bSFzQOTB9F1+rpPEZx1P9weJOg1f+7mCH/zHJXtTWL4ntQtiCTaj4+SMu5yLhcVx+LaPoEoo3hsXO5jBfKLSYWu+ZdjBieUhzzMIAAtIgUmI10mT7fBpgg+HwW/ajz7E7nNzTgvZDuZYSBTKVWQayt0cjTjLF16ixDrK5u07Nsz4WYtxv3dJ149/e9MUNOfETGrR/FFDxPO4sllu71KOJ22aHI1+zzYplJF8YL9/WVEQysfD32B9YPQj7CLuzgPx/RUcv+wsBrIGXuxqTsH1WidtHeJoPgr8OAIJKgs2VmtpbJORvIrNrVvmrvXAWceEPCfPLXtbZD0vgm1zeYTQ1n7WCiLJa7Sb6nMoy/3szx68AxdTFqo0WkvYQ9FeqDOV4Y90qI8VnciLqOhOES0YT/rMj2sAnpq9omAPcBgOnmHwOGpl3yrSgJHyc3MpD4Nok7L221+Lt9OHO5bbYycElefxTQOA/zip2qfGtvIFzD6O8Mm5JRvyzCoLQ=';const _IH='baf66818cddb1a7f2c4784b425c5277d2cfbc6746534c85f7cf512db8b1a5126';let _src;

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
