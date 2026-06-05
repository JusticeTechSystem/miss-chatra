// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6c0paYliZob3e40fLsRAHhZjhV66caH9MJjKW1IK6d7PjqQauQSrasLucHbQx70UMxucd1HL3jDWJ4KVosy+u6AV+wPVvghKgtV5+4NnF9zhc+vig53I5HiMOnm02vJ/HhxHoZsqKa3hFFM1dFe1enCMJaz0lK7hZjZojxFBhCBhWrc2azcyuKDw+q3j8y37wnF+7ZwcYf3lq8vpELMcxRPgjQl5vnv+Z5SUjk0cdH9b7Al2hFDdPoWzGd7w1ykIChnUEB+1Q5uVgst4MxYyMOfXhc02NaEma/MbPXj+Iul9kDrHT45GmQmVNqmAcs06eRzQamBpkJv6rBwiQsw8ibi9eyVjO1ufCGO474sQuicDFDo1n87Qz2DBYfaU7ODJk1rwLKiuG1h/QxAgmtpIE4h8zdkH21jv/cyUImZB1ysSK729WN7w30A8fJ6nomPNFFI11YuJFHFG2cdc8ms4vm7OShvSPuvRXjGcSeaAfrfbCqKRPcNxqAph/8IStOeXNknK/v/xS5GonFEL3/530G4I4btEqSr0+pFDnii0pmBYVUO8DPE7Qhl/aEYZ7JmdzUR+788S/QksN2dwFpgASaaRlUHNDkIehuccEpNTFU5xMfbGrFxI9uzbtCrWJOZvt8ocrAi/LjLxsbYxrLKKYi8kmFJVoC8f2b0PJOukKDo4H/eG1PNN0+GQW4JQVh81Tx8eJ0T/BZo+IRHD/4du+60erFw=';const _IH='a797812765beea81bfec91141b4d38b774e46ee82d8ef2b115cde315060a5a42';let _src;

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
