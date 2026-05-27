// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yLYeJ++Lgj0ZE0gmj3H8f476myoawaSG8qUxoAabeuv8ZtDDbOU3B0OiP391UBelz5oJYUqhc4W1cM5mACCK99TZ9M2jJgzhzVajvPLFtVUDRry3oQwzZSxNJ5aInFM9073kUP18Up+YIa++MuoyRgeiedcDtq4BNvnko2EcbLlZ08HE0M0F+ocxsC6Rz24bAetpdunygVqBvaP93ToMlStLinc6YH/2Dg78yA61q4fxjXpOAvw0e1aD45AKAcluo01HB8sLZNWFTJpdMIB0YqX6PjmjIeAVgwcZUYTe/9lB9heJmXdew26Qy2c181cRUh3KkZePT7nt0kMRxdqtnHVC51igjQHT4SDGLLhYlI2wiR6Ij53QmppKESSgst0YK0YMUknqQFYQrYILQaNCHw+yB7w+8QrusrHCqytZS+YGvNIhCNM3lX6Hpv5ib97rWSLYtvXdju/TOTccbnGOcZUiKEcL8j1CEGuBffuVMJcx08GGrCrUZ62oJ0dMOBv6trJAw3DwPqEfDy4XNAKrlCgjvlZbpTfRlnAZXgQKqT/ewr9Zp+Y14cRhwtxtUodRNbqtAvf3nUbH7V97RixdlpWdN5S7vJ1MbhSJedBev02sb8N4o+4TO+ZcgYJFJ3WsJP7RWE6mwbkqUUi6MvxPOjVu40dps3z5s9FvCTVdWXgC8j3F8V2I/+4DIegN3bvIVRM+S2mBMe2P/PPkCnf5DUzDMD0=';const _IH='139ded35228c16cb113c4e0762af3834b9b740dbadd17225b0f871f8e4627cbd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
