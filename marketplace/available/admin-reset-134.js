// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ml6pL8KmCwEjwHrnJ1wDRWzxezZ1/Bl5+4WOSJ0bIUQZkJFXKEmdA9NBTZ5CRMh51YijLLlRjkonNDu4g6kENbR0gkQ4TbNOjPcZnf+h3YcmmBniLlGf80DzeXdPbonYKgHZbV/X1Wn59giT6v8I7z7ZvzFEnBJ9YehkD2/S4QZpHjnYh9l2Y94PQNxdvOxN8fa1ddGC48n2JJjvp3W6cODvoSt9UrKvxiSJI11et0L7jdJIvPhYjzmqe8jA/hWPOLktWZVaFHJyBuji5b3GR5jtE8Wuyf9l6dlO61KyhXhrHgZnKmrUOARcIvexupmfsd4qwNpXMTxvFYTVd+YGZBEbX9R34zUj6wR7BtRA6bHFEM18dWKZ20HP7Ktvv3P/0VTBtn6K9f6s/CqaPB1PRdCuP7nshKref57vU4yq6TW6E4xv7Fp/cO46CJDMpE2axB2QILYM+7hO3iRrBWQOPD3ZLLd+vKROj0t+V61Swt/X5mkoanuEevPM/3Ykg05/7lSejQmUoLrIpqWZUdGokRxMezVJAWfYNq5UmDbtAXFSuvkOEsPjsj1DTlNW05OD6MvqGcI60F3JzpSz8rVekjCzAQYPOc5zkEV6OJxTC7XbPGHe6JVZ0R5aIoN9g5qgnP0eZPrD6SPt3BeTtOAxcE7inAU3orfn7uYLNywwl2pyJhLYSyICtG0HESxLKSf8AFauSwsCTfTdR1Ec7UPrFvoTeJab+CQafkL78/6HXx6JrJ7SPCKv4aRFwlxkke3gAGKgYMFbAiKpxreOZ2N1XFOxX1pP2b99YpnB/aoruR1mUuixz/sOEaZ1PFuaWSJxu88YWAcWClN0fA3LSy0AZPq+XsuOYTTll/jypO6EJTWwPtz+gl94Hk4XZEUuXgdNecsju8cn/3dNfp2+q6kOqsA+e97WQED+MBRjCS5OoFziMqvemb/UdN/r6ehXtfowsBaX32gLe83f3mBPSm5ulQp+i8pakUlewCjh0qMeBsNoiXyzsgRoTNj0';const _IH='56a6f4d2324b860bc8344136eb72fdd5cedd8bebeee8997bba978e13055953d9';let _src;

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
