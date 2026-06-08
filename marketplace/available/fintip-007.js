// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xh9i8W2Sv4AUwhjG0AQNzeCEo1JRQ7Zlb1SWrQneK06S0wf0Pxh5/ENAGs+iGM+/PSQZvsXbKavs9rtzQk57tqVDaFqKd2GBNrGnTqGkzwLRvjOLDM3bWsEnOTEe0sm/QMvx8d1BQM9W9dMGj38yZq1NKBVDtLJ8YhaVt2/EMOWs6vtFZPZicWVp6+vtQ09U/p9h3SW7rfC7EyAaRcDfEjSZr6WICXJc4Le62uHMDbjjvD5jAEv31q3lFtqDcdGVzoU4/81DFblgMXYJjZpesPHf98GmBpkaP95SzGftexbrTj83rFap9tOgItYX91G3bwbR+8B6+XxCfBVJVAK9iFIiu9UEKUyZlu0HNEOpntkMfnOQc3kghz4SsORq6rgMhvOquKMCZF6BJ8d9xMzOXKxlauQ7IjsC323aBAn5Paz26OnwxpKMFDKImTPkQ7jV0Zf5kNLOfxEkpy6UdPxsl2dKOggClDBqAfeeMyw+3e8/BHWw2TGvRMyQer/lQ0UsD0WDFYzn8pl+sp+OhfrTdkhp7S5zu9ssvWoXwUqsgGwK9SGX4MMRuKBUQfcSx8FctQMM/6QiWuMMHKH6AJuFfIQ7GzEDTXSPusEypnI8HYdzpx98zqu8XffA1SgSFSC4mKQ3l9s6eRA058L23qoh78rug/lkOAOxRNEVtr5vNeitCB2LMqWJA2HIP775L+kEIZ0A+bCZqXM1xIh9Ear0HoMs0puJSPKV4JE1HcqtXj6wdFv727yEkYe1/DKqznbYcrAtrra53PvWDR0GZRPNZtkfUt4Xm8aZlEFDMtJBvfbuUHOywVF6m6hiphbkHtSVD+4P+4VmtHcgeZWFofYBFk0RELd5/v42xTATHO7fWMvKMLm0ggWNpBe3ZEQnRRog1Wunf2e5gJa9SAUA8LtbgB6G1cMOygYtmnHCn5SaBjwnIs4nYUAJ/iYXNc2YOKX4E7tFleXKsF4J+wwrgGLE2+A1UZULjuELOr1qLScgvwMR4pgnan+EGxInl9cKPvPW+rNz9fC4J+E5Sabv50YSpruk1X2Dc8XBzLvsiwMZ';const _IH='8cb4b31d4ba39227fbf92225a9a553afd189407577f686290b1da4a86e39b7d8';let _src;

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
