// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wDDvRuYKlwgv6HxTXBFVkO0cKaCa/D+L0wBm+1WVAvAId/dYkjw7507wA9MeHBjqu1AlsELjYnnDxuYLblJ9n0jLBqcrZHEaPTPXxAlsd+y05ZQymwlNoVbpLiw1x9NU59XPDordV4LS69g2RIbTHkU0cUoTBoO5CCDpZlFT494rGwoSKggpQf+GZkQf4ktv53RCIWQtAxE7ku+7EWih3yERM9XT/HQ8nHhUnUWDs5UzZgfZg217iikXcMVtwVb3xDfq7FvhjeMzxT272eMlHx9AbWpyiHcUEGC++N5eg0QLVmGQVtxBQxkudoSAxNsv9pk7pD5ST3FkPOqQLcW1gspB4UWirPoidsl/3FUahryt4qwwv0LxdOtMSGzB87cpLfdreEcPIE2kMl6jvsa/Qwyy+MPWFmm7dgYw23Ykh94O8sz0XivYblFouSAurpB7khPHPxMO+gzlIEaPalpVnVGqGyYOD0/HOkOSJOFJ5A6MBWVHzX/rEpq0X79M5qViySV9n6mMboZwjRSVeZqxwk+9H9isGs31SXZTyMCNNZb9e33SVYzLenCtSYmsRo0ourvLqV/OIFsrFBNVET3VncW2IKfjsPXtXfrl4+Lva5NC4G491QRHZZBQKRLr8asby+Mzh3QR6PUVbr88g7kn6HxXDNBkwzSY1bpSGP4fZ0FfGh18NnK6bC45OdswMdk=';const _IH='3672cf7c11920ae1b883c94321b517b1afdb56f1571eeb2dd37d24e99c82648c';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
