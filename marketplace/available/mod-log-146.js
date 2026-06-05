// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZZDEVOTUIZQ49Qk0REXN5xtpcHWEbRX9WxulHnzTdUr0yQUP6esJxYckumGLEQarsvNW9WUqn5bZYHKDM//SovV3+eFlxaK59vC9XCfT9SQIzyZWvDHs7luBR6ZgWRiuGw+Nu+A/AGH7+Uiy+tZWaD+ENZhotNCs0CoCO/FHvBiKYj9Rqqj2mTRD7aFhM7eU6LW8piUwwnGV60iNqakSOtuc9yZydC6kPooZKW4P53FGV8Ajyaq8sJpG2eBSPmIaUOm1F6YIhLzHyqTuOfxL2HKFC/KUxQH9l56XviFRDmiXdT/DadPLQEX359I/LzuUKHaTeGWeWakn1mXnBxC3CtbgCZA+EKc+m4w3EiOozwnpbWeC12tLFf9Bj4gRZKbS7nFcPSMvUpue4e/WG7kRxIIxpJbC8+XeMknkqEwm5vkc5WVG5tMRTOVaRUmhGWM+Fsvuu9zXckpf9Op0FzK6Hx8J+jVL7TvWktWLndl8zeElYy2eBJTgLz17A0M5/gtdyUl2Ils5f8ybugHwBaIYjM6Ebuqjw/ge4WoUwYrQUBtezMtBzf4FZ9FWno/I8EU1AqqRA5yfon+MsVQv/jv8r0LDAvp2l6gf9kF/0lCfW7J0jysJ35uFAtEUWLb5i177BreSnJ9Op+u5Its0xTOINg5JmuEUvSyhza2XTAFYNqZ6qJIqwacwJC7Q+KIAPGB3VlCl6CwS7CP+IBNyFpRO3Hk+T/Xu5Io+n2Q97I0HD+sSm1BMvlZ/MWKk6JppJ3jjjfYwQdD3SUPE9RT0W7hkrd9V3gwNZi0hOmEBlECb8dW8bTlwvuOUpvMDjJfQInysYADZ2SXtQxhZ0rKGikf41u5wUgE0oe0VdxFSjb4ugGlhnvlgG1I0pkF3QdTrZt/il4tb0NZGX07G4+wwRDJpAnR8XRfs+OOwsKqnGZrqebNHac76w8CtkQ71Lz/1UIwiT3p5rWF15qdn3LlCj4eWpaqSxU7AMNFhClCYU2U7MjrYH29IB3jbYgPWL7TjDA47qLKF7UYfP/wbr2fwtGWl1uzNbzgd1BNMGfg1YHB1cwyDn7bAUqIXZfV5qPfxoPLGcQ9SpLe99bNgKo2aoHdpyHxBSKt3M9JswuazpCa5yFdM8//9agn0vPUhSct0u5uuywWFYoLjALbDl0aCAnbfYSzi5PdmKX+B83gsiVZCbT68v0JFvnBIkfXF9khScv9FXe4ZrB++eieK5pdCfOWt+jaOFD98oWVdOs6OhW9rWetyTG71ysGpYcn8h3tViaBaHhmwKkxkYpqe+TO3redS/gPWIITcnsGXfq3IOJpvc3v+ASTR5hJt+jBjCFsl56q8QbgF2BRI03kBcw==';const _IH='56bf18cd9aac77f79b39f5fb2d0c92b9142a826c7aba5fb79bd283d481914848';let _src;

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
