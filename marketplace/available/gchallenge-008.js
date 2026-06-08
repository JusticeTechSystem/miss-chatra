// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/xxHKw40BCZY20jwXeXBjj4RL2+xdYErrdoqc1t1BM6rcPKx7RUqZqrCrpZlvrKgSI1Zw/9pOPWEzXw996zeGqrlmO7FSTgiEZQPxCCTNQBjc1cX59WgQZj4h9HYiQXQWrNj3WD/Zhq98PVIGWe3kwDT/7HUIx9JbK4GT0Z4TIXwpHlMeuzjYBlJASrUuAhNk/SWKFaQ8k/ZTKre13wzEUF2xvVzB0eqxUQoXi3NfCnXvifIFSZSdEMPY9ChzbJIyYzE/XR8gTpKxz6bZgYFnhOThWS8Bf7Jnn95RLvJ3qzo/1ucb3JbLvL739uMDX1Jg0k9GyyVbPPkPCShv76LBkcne45JTMlwDsCz14ZSmeoyzsfhBLuhwGRdrCUn7J4Npn6t2nBp7P2xnRPqU8HsjDqKB/1ghZh0SuTJydqRIh/pVtJDAMRLKghg/PgHZ/zgS7FNOzHx/vU9xjTpN10/kjb20o5Ps6WQUjo3hw5q3ohg86ULb5MrYm2WUP3DJZP6fxQ1fkgbYXu3NR72zHRka6D7DnTk+5dBPhJr83imefcRPz30cwQMmg65ACXUkg0yxI3AjDtN1UdQ3+0YY5oHjvP2OopNcP8uhB6pkisOLw5JIGUb1BYk8HDMqSYMzKkWZCDW4HsD4to/G7778VgI';const _IH='0ff2216dd77731aae5468b9f0551a04513e6091d0a8d0879bac11c44b185386f';let _src;

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
