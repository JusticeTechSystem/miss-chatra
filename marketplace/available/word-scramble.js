// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrxf4Obe293q93+nR4rUfLx2HNjwKtzVdk0ZgWrgQ5N+OdOO1gGAV+WflMrVBosAUVSmLyy59DdTakhxGXYEUJYOpphUEv/jo150ciJZogPWqr2mclCosNUtSwIIroBjFtAzwrb1nBlvTlsIN/3KKw6IsyrACEE96LJhghppgQRXMGthNb/G8+AQYTpoeCbOM567trB3ksQAGCxUeQYxVhdiRFlYWtPAqsINwfD1kbfCrFDqz/17ep4N0r7K/lHkLiF43oBSFkeePlQxLsUqjXwX8sEn+jTnOFH7OHweV3URMgN7AsHQtZ0jWKf7Aw0ifHmOdr+aOP4vDzN9hvLx1TaGDP7GfQme7fU0vhs0cFbQlA9roS8wj5vWbj0KoJDebi5n5dfmloGU4spwG+YbjSMqd23rgTBwvaGuHmwhzJ+/XQvr3Y4IdBh4h3QjJVuiRECEONggkQWfn3yhxqGZ33sP2e4TA4N4Oz/pt9A7Yf9pPpe6ta6ZkpUQR1mhOcz4vgqCYciFnR0v20RCYWilNH7WRCOFuQ2us+gSptuPe8o6cq4i11UJwLhutxDbyP8o3JhkAEYXpC42v5fjsX87st1hsxMyQgX9X4gM1p29TN5S5w/SyDLw5zszXlAmipebt0Ak/D2fI/GorPzJNDT0nLtlzHAW7KlH7Nae9RjNlrHHoIMm+3FgUcaF4sgPNt+SnbQHbynGsUKw8p5d693Xs3wHjs8z3gK7EKqOLab3BNLlWoDyQymo92GRkfBs2z0cRzRsujXakFV9h8gIf6R34UM7S5EVyKQYGA0APvVjXTIcwwWsJSVZWZKB80BVJWe2mL/LLoF7A2CBwZjKe3NDJoKZBN5TQJtYnXRP9O1UlD6vPJflWLQMBbL0BsKy+fgbNxClbMCBXAjvbh2+iicPtKTxCe7Kk+W8AQYeljGFvULNNsEQA3DVLlJxV5UtBAGTBC4jFYMISDWvLEcL1L0Bpb7p13mHOPVWQzb1cuC+iLcbjGdnbmOr9jy9LZIoYC7EjkuurBxRUpV/P+7aHbeKyzy6Da7SYiGGUs6JwPAbzSNDMniFXrNKudKkBO55dDg9eHQiZEOSooe/pIsQeSXHJeaGpyqOpKmgOVDhufVmZPGSSiB/gBPi2Pf9E5XXVf0qRm46+H1zv3/dWRBn9P2+zj5v6u0fMOLrAcmDXHohubEm/E4FdFk7WyrOTGSwVJBDs1vt0s6HRxMwUqdggAxGO3O+FMjhdjqrAC6lkJv8ZbDcTuJcYZEFumuGyAWldhNNdPSSa7i+YX2cmoQv+a8x3oym19lCeG5L0bKKuJHaRhFoo373BzeztJk9TpI+bp4JCW2CAPbJonX+4=';const _IH='a11bbdb0a96d1fd45d95e5cb9edf70501fd323bd21b32b986547fe44862aa86c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
