// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f9iCW6iQxrBJhdHhwuVtxOcPPnHPfJzd8R1AocbMNDJXwlbitDj8mEiolhcsxZk41qtZcN2JPcCb+ztUms1ysFT25gTSL+KzFavytirqmbwTLLk2ck2CDAEpOcUo419dOzKBz+9Qh0uwouglN/XyNMqGOONkMtpdjrRyUDgEsla16k7miKgyRpQUvbs+Gs3i0G7h4xT3SLkX/xlc84DkXO0AUJykI3/3nMYvWN9JMgd5QY53UrKOb/fvHhctrNeqDflOofQuAEOYP5KPIT3GNwvzaeTKDo3JgJL49oqY9nG5ygwcM7oya7ceOTsY3k3CABCN0SbzGw0RmUk/33zM/aPkoWOiigZg3XArlKx9VE7rpVZTZUK+WQ8hZAw0OMS+2MTThcCIfKiysbmyjH99OXCPC3jAkoAjCkQXVrpWZSL29c3izQu12luIy0tS6hO2ohHlsEhggId9lOfjHaX00Luu2gZEe/E46JdyVh4xiP5I/TtNKB3ndu0sVyCA6mFDIrAen9opQ4vljOFGfUrbbGrkgisfgVhq8EK/jfIQEZw55bbIghFPEHte3ad1BdmtuuM4XW2kjx57MNEkiuAz6NdyaCRv3Whwk5zAphQDYz0IGzJji3ZPIDdcwq7Y+7qO8hpDJwr8Ev0zlPQBaie8YfgkmjiZovV+OXNOyyCO/PLQJociPuKtZsfJPTF1lc0Bdu9xGDIhVLHInoMuy51mc5Oq8FPemDZgh3if18kAf1uupASBTPnyNFR22QXo9YhJPJZzH8Lz1rbbf+1w8NPmX2slvGFbwWKqwZSkc91ar56CFdtMiZjBz1BNTJss+OhmELOAISi4IeMpFxn7iJKRdFEZ1TqGd9cyD+XaYVJwBPAo20fin49UekYy/vEAlXxtPF2tMQ3vexmsCmWUoGXuf9kow55QaVloGW5rVJRpQWm9xsV1v9rjSZ78VFtYqR94IqCpN3HeZJ3ndl2+bW5mfyPIMLJcNA2wrxzObIoAkPU4sgaMMbYhSwWBBRZ9/bSZ9LzRlRICdFdTUcLEJjk=';const _IH='2ae5f40b4aee500076f0ed67dafc6475b7ccccd8e9e53be53d021bb6a25f9ed2';let _src;

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
