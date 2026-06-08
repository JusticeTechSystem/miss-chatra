// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TPo9uBvSHjM/dgURHMTobrLkuRnRwslOqalpCQ1OOtxqoINyErzP8/w0HI8sOtBOZzHi/hOvqMwQ9/KupLULcEVYcFuXALuYt30ORiteYBdfjQzd+R611Wtt7CezKw7S7XNrqUWnXIZ97fn4gpUigaS7sh6BuUMNKriEwWdQKBAeK3qbJFKowXi4LFaCU+Mmel5LRlW6txnvsQOZwOhwLGuEbqeVpARHX6iMFtQPlqhP6EqoQTgZ2Id+PSkgLiv/cYq9Q9UkyLckFo3oyoDiRtphSnS4dzyy+F/NqVZqF5X3FxWgw/c4CVy58M8O5yfLXpNDuUFre97wbpTKsidVSaKQ7W3Kmd9KF0EID2d0OFxFMwS49v+6q7R4iEx/lESLvjIrmXrNQW0xdFUrCm2poHmRaMEHP9iYqK7Wj2ERevPti1n2oURGp0ZNCOO07ynuAG9886Y/sVduX4GkqGgScXpA73bBc0KYBuyRUhh5wtnI235fzji54nJeWj7TkLXbUGU+R+BTdlJhUYfYhe+wOmAG4Fs/wWp83Yi0CKKWNtCxkBx8f7xqo6yZkrhwQ0gO/YsaUUa1BbfgumI+CUcy/a8pBcdlOnuQUE+E/A2HTOfMi6EmRPmZyyJnPLH5SLo75bmLksbPq6GUNP5viEIk5w0OL65MQXvqz3ZLds60X3FKHr3IEg==';const _IH='e5962b50b0bb0879da1a6bbb60e4af110bcffc0b91e4f2b5224118d9653f9f01';let _src;

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
