// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4kAlyafSf5B+vQDNVnirBMICZr8b6V6S3FVpIaBhDqqqjhqHBy5XjMcq4/X+aIBKlW5MMLskv01U4N6hUod479hytKfbrWT1KdldYgUx0ctHtFs4GhoDCzzDXIjuJiBhJ/mQ4obu4mjGIgv47q2pPoWjLwPIacP1k4jougk6UvPdmnBJaCsplZFqQ9b4ftlNZJ+9DQu7iDndy/vKQde8ay8gf9rE0FvsihxnZ1YbGN6fHpSKLlfuQU5Aij1zTgva+I1pBcR6Tx4vt5Ivj+8TYTc6jb1V6g0Ikf6SpD97J2quWEwC1RfUiDUouhSIXOIV5J/GxGnVWQX/NUEcystX8iIG7Ioawlyp0V8+AH/Tm01CegZnVVjn3g1Nucn04eRV1LAfxZXIY1wVb97C8h7e5vPH2B+nF04Jjyz+D1GJTzs/vI3jDuF+Upg1WEal+b36UsgeHVOtbBsgg1GiEQmF4i8WEsmE6P4vH8jXKiQUm6Vb/A8RagaGA3Ng3oV1v9g5Lggl0ZK3abJIzH1woesaYqqfcofydSPjIvufABBjrR21N9trEDFnsn3qbAYfAK2uSOvSStqdKghlEEMwknQ3Pdjgq+9G2zFLzwApSV8Y5JOzi/n3/2+bxcbXsiwKXsA6px+U1yE9dkbVamA7EnSGUZJrqiSZU5GfIOEq5HkyndvvI5odc04i6P1kwbjcJMnNIxHBX39/T4yHYGi8XkqaASdn4XpiIfn0pIvS4ow=';const _IH='596d3518cbbaea56b3127c4165fc0f6f6286815e5796b1d449f7f5dc58ac0b21';let _src;

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
