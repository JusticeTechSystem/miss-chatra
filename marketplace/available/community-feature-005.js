// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g0Bw/2CqsMJamcMvQcYtjvuoHNW0u/33k7XDJRWsChFaVz6JjfJZPNmmOiTTiZJ1Spsat2v8VABn4BH0GWKrpeFgchIwMhP9dTr0fWnVpvCL27td2ngEQqwrgctbuIdas/2U9Mk1hdT7iD91MQJMZOacCU4G9mLUg4lIH9N0D2TjKDJ+pNZ6kqvK2WX7kbqKKLUYqkf/SVUOYkikgNeaYs8eJ1vxVwCPX2xJxG72FEkYxU9vh1eqons8gxeIsYzmXENxf2UykwaTgNHv4cIj+n6bIXt7DNQ2A2qt3a+/ZbHiJQjfSJ3ZsCBqedj8GEPVhwgfmcoB7gMx2ivER2cC5BGJsTUALbnKQ03inwgYafzbvi6crwQT0lLZrgLyrHRdJQx6+6C9UPkNx1L/GogM3WHGwM5jXGR1sPF8+bQvn7s7nqgcRvARxVHWs6wxzhOQ5Ial7SeX8xyt8hl5WH30CZON2YB14tEv6yWsAifpjTRG3M0u+B0qbZhg68wNJSH0/QkWF/j9EOHBqfmAvceEVa/sHmQ3IrQs4oAxQfueceBzI2D8z4R88ohZ3xSPlSP4n4oF18J1FZLRnp7GF63WZRz+bslmJbeZ4zXHetLp54KjxCtEu8IeUNG95g5TklREFYrFwMw9iF6vgIHHzULvhdTwNIgAygWnPRc7rDwuC7uFAYVk/RBSZKKghMf0ejDG/QCZdCAoiopjqDVQLbBZKvBLFeXNkGEwLFgbzo5tODFcag==';const _IH='6be89939ccb02210936ef6150c27217ddbd862bf2346fa19b8032d60ebf9275b';let _src;

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
