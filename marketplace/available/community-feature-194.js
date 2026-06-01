// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ12xo2JFz3EFN7Ti30ZksVGJNHaK3P0w3JZl3HSfcJhM0R6HUttPaB6JiJrefRXw8QY7S+zfxD9BrwojnrMneFLBHd2ShqFmmtDpzA6A7bzCOdC37UQEow+z73vip6cNYlnnaBby97PKDx1K4LUDpnpQqm8X70Mzy3JOceiUvWZPty/4kG6QkanIVg0tvDhiyvnloUpcYZ8KaxfLvQKLPTppdsNLzI9uLLnIKjGds4M5lcXPCkRnCHUW6oA1QGRwLCkgstqL7VN8K1T8c7lge7FNe965gjnmMPBgqpGGJEX9/7JPDhhAND7pxXNnOzJHw5M4qc5UmOdl5X9/6zRvq4zj5pUB4TJ/ARJRfC6oCuHL5gPOy09k/8G6qspOSSwc4Yq3eMwrxaXvFGSJ+v5r6nRUI/32D0aIHuNf7JA8nGncBoEpcBpSxx5UcZ3PkzVfV6VA7AwgnEoWo76KwWYjr3tnCG86Mw6F+Hxl3tehNKb3KlD1RDzSf60aMcvUAWjyRuLhtmzc0k/wkXqlAPfzOGT6dBpTC8q9A3MfrlK+V232wudInm9/S1dfCtODcaUP6HuSMY9usXrM9c/8KntZaOY3cY8q3srUUF51WpLAlagyJzx31DXzGuZZ5q/UG8LEKbCfVaqkL6niIFsRcK1gdJMaw1ty5YuW8Xw4zL7MaXerUO8uKkw4AMPfs9aBLMXY27NJiu7FG+xAKSF+FtB+ODkitk8w/gw/T31lqegNwRtR08ozhvvX';const _IH='120f21f73282c0accf83ecd18e3c6e21486b5dff91269fa97e9d096bf33812bd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
