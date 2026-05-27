// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1YRRbopm36tdcJgy4XC4ORKWR+KJUT2qorslEczW4tSrGXo1k2cAqid9swAy3txhzjNe9VrYwC+VXEBXeB2B8X9hwCCgeVxuACivzfoa52jZcEENm9Ttqn5+E2RogWaO+p1u4vjJ4+bXN99iZZ9tltkX+JzfXMkVzVlg6la7O9/rNeKN5tkE5+tN3IcEIFStiO6Yf9SIvTupUOtcxEuY7mFDIniF8/JF5d7cJQO2wKNODZLfVZlJ/gvWCGDhJ1fd1yUBfyk1pbGCm8Y672q4lhz/7WylDPy3o/ipsKtwhSOPvcV8g0Cix7Tqjs4/ymeAiVhWTwSG2pCn55QxZzudW/T000cJDd084Yygy/mElIFO/ogvDBzGGaAJVZNIJ4hglU5h9hzu3tKmW7cbkgF1k61Yi4kMyo8FQv5c1oML3IY8dMZ85Q64/6JzaATj/b2Mf6sq7QSf9hOfr+0c9kPLdCN/4m7XpHjvn97CoSXjjkYVNUaYMNfffdX8bVzlXHkLUP76pKHRACVyJ8hihrtQGRhQSGZ7F2Fq8VQLBDW1qDTN9fOvW9R+KjgFr+YtIwJ0TlIIdrCkf8NY3XFSXN2psyDmbzn5k2C6ZyUbsFmBMRVrJmDK';const _IH='c6bea2f39bde59a0febd1a152b3d9bb741df6fe9e9b3771b8a509ce3aba477da';let _src;

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
