// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WU7nOXPt6OxssJU0WxtNK+oixrTox8oamFAJNFeKUYawDdDhPFsO/pJSuTF02DUIEko/qy4oAsAyyesXUfxA+ydX1sCZ1D5oV+PLdaCCsQHGpjg/DCPQ4zmZ6bwEf7ciuFuqsk2uNGjhFMps04s5WJGSGgpzV6DYPuRH3OVz1PNDyzCLlJwsBm0qLMiW85VCvQReRUCi/rR0btnQ4Au2kBJQqlUnXrrM0iMqj0YiVhKcFB1eyrBYn/DDqEp/smHVzmevuGLajui9FpzxmqgUxHZ32FYslMWynS1XQPp7r+eFVJNKb8hHzB9UaPtZuDhs733Z+90wc6u/0uTSemMo0Dx3wvo/tL3gVebLAKGO5a8T98NXkS+GVs+9OIBoMLsIdymvh6OuVOJN8T7h426J37TY7nZt6qVuxUQe7ovfhLUSv5p0uy9KvYD9ROAmJJnyxa5Ucr0RsG3ovBWtL7Ax+wL6MKtEWGbYzwVxrrxotnvvZ2YUQSlwhVo1GZ96aNBTVvwhFiY7Ksr63u/gN+H0D8ePN/LB2laaAO2LYjK+IukHDZNSb+T3muAIHvK17UYgG9+w5H3SokpiN5y89CheiMkdfEIVwAwDlVeN8MPn8fxoHRvWKMakpbOUxsqhP1AvWWzsgcb7ef8L9T1JBMLJt+A3ZO8ZwK6PIdIBLFtquFo+tjsdAi1LVaaPjQLi6jbsRz0cLCPzd318qe6Z3gZd9f4SAPeIkD+SHm6MdQI=';const _IH='0561f0a741aefdb772bf3d29b89ea066c9deb25cbd65c737d6b7dbf9605df36a';let _src;

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
