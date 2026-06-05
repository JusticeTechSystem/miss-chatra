// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mB/IcEeQQVUyW10Hzbs37M4dIGKoRFj3/VKu6sGmozPOOVp+8/fN2BBlqsce/HIu7MGK8OTo36Pvq/LVwhdTUOh5//KNTQ1ogvslUs2NotUyeMNek30PPqbaSSNakAWnzZx4481PMC26Hqd+yC55k7OT+ZmDBFIOvydZiNMtiHWwxXO4ZU6zcRutoo23mFIbXJhNTRYrkvOLXW4fTjiZckgoChU7X6kCCA6KArg7mYogrE5il703rmjlOL12ndSZKbnbERIrxZKEO9Uxo6BJTIajUGJM6MoVRwx+AxyTc9O72qYzlUWUAxQuTZeIXjr+O7Gj2CrYAfOLb9FUY8BSQiLr0tgpdHMC7bFkinywoMBdGIF8k116f1ig3IWBrhSB+LlGR2wM6n89wgh6uNtwwiwOveAeNBvRRKGkqbwYM1KuWL4bD5PDjxnV32tni6vrVEmextA/Pmu/o65h1yCBHifeeuV/gABRUC4ZCWowIh7/b3iTNIhhLmwG6uPCyW0e0nD1sedFihZIW/HvPA0QgwNFFaOWP3VNvem1KS2chbL3TfTuT1PWvfSgxGdWtYmV5+aET2zcentDKevaKnekNJq8yqVXCm/I0jzaH5Iobspnbu4RYyhKExCae5YU/jETw3mLfJDDx31R4ZDKNMqbw4dlvMCm7jHQ+usNaXTyvEjU8c658uTeN4iPQdBAyF8g0+BGBmEkXTHvGGP7C6S4sTD9GCb0vHrS';const _IH='2168f0ad552349bdcee88c246b09867d7f417651990d5acd71031320d60ed8f7';let _src;

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
