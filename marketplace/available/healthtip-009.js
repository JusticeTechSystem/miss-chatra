// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FbiwyZaUeAsuwga1lGk8N4zWimz/LDPF4X2W7XiNE2nS4gu4MygpNt4fRNRNHtELrWYom6cbHVMbSNwEa8kugY1KmgcZmOOkSaTFsr2ay1bzZKBD67d8876EVQYwHvzqrmw1aBEf5ns96y/s+S7J6OmK9UD9J8kvQwaMlZd+yR4hKFXlz+Ub+er3zsXSLb6qF+N/RO1JXwtfpCQLltQ0fFAxJzUtV6zPOk7/c+wCu3wFp4NFllEgiOLcrAR4lzrr+p9+F+7M7gAfIZ2juIobrvkPtNRTlDVO48VaFN7N4jUPmlqhPB5aNSX0YdirAhIDWy6+ocP66v4ZcZtueNTe5ExYKZ2rfJN4NWMFnEzIA5YFHKHjrcBdnaiOOTQdYrr0NqjKMySm+WQ2W0qqJSgewHsH0M0H+g5v/dOF5H9yggtq5KVLPwcsLQT04ctgfynPv3JFrgrLbEHPKZabc5wsNeoUaYGBmsQLT3q92g9rqrym3yHahm7LPeneBVt267MV/Mv5y8x0rHTuzE1VwO45pETsJ4fdabgzesWvsyBB/HPBuyAoTWkiizbBTYSydkU+OfUvjoy1rpVfJ2g6lgb12AAKdnlvKIJrcAlOwpbt4/GCb/WazlvsUFrQfLOmFxpYLQyA5jE6aTHat7+xdVRHbHsJIvz09NJoLAiWXtjNPJFi2eNWWvhfuP9H3o+qu5fgoZHZNTI+8k5V2S5GVH7JGsoz4EjEE1eE6v2EQutEOXsm9DOMUrlzBsgTwDPkuk5XCa9eL0paTvu1pIad3NW4sKyGOoXt/Bbbu0IZT3Z/i70B9xxdtkXo1P9yi9HRXBxDiml9QG7q8wu53lJTTfEPPPd2TARSfMf94kTlRU9XqCWFps7rH9yxJHiKdUNsMus2ag1tCY7+ZwewVVymhZdYuimaZiFs0iVlOWqgHdRkTxye4lBq2HYDuw==';const _IH='e199f2ba86b9db7749188c4b87cfe149b8b376edfe8142b73aede930c6cb774c';let _src;

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
