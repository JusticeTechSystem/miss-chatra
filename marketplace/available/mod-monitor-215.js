// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWvGxU9qGpSKcW3PSNg7eTRRgAdCce8AWy3IVD4xgOBhL/2y4wjZ0v1HOQFAuPQkDvXiBMwzIba3tBZg9PwMGHER1dxlvOTywMWVinjyNMb3wexWd8P3TQqF23Og5VKJ5JstHtTsThCtBIYVhf6cPgUaX9LbsuNycSrMKJCjEQwd0znnXvdIG5UYWxd8wRfd0TQeXjP7mTUfYcUmcmmsHmu77WgtjHeuAMKUmaYUo0Vh+5Ha5jry0A1BmzjMmyqBKaVLz7NtbpXhDkPqqRtPuu49xm12CiUq/Dd6D9kl66/6HK1q+p3LaMYXEXjK/4HoOfwl8PoUdjxnV6DGPp6yQmktE0bu9mHmgA09wPCtj8lE7H5fYwrO2Un3crXH+mHFONkADklORoO6j9T+WvxQsP/XSZZ49QQd9PaaQLyIa5P/QoH4o2eMsYCAWU+vpyvulHaeiJVxM2PHgCoOsW556BG2EmrqAw+NkMF+qhDUF/3wlodrPJjmTZvY9G7RM08xMjNbv1JiFF9uPAAu61QRwRpLbUmIuUH4zgqTZWDrXphJVUBRmlVPvQUCNEm7T3HVz/rdfT7AJq8RAUMy94gXHasTsE7o2MUyLT42BVZiPGG69NWO4l0irTTPOB4LvLDB2f3qDq+Zer8NgAnNhWBOkPWM1TZ5DieCRjm2nB1VfCPecYvI+3/FjBc/ZUftvd/Jv7OaKvLRCjiLPR4IeAlRLhrVTneGrLCac/Y5sYcsI5r+2zp7D7lzwM5VnRxfU/Bxws3BPCwASTmCM+YVgwdXd9lKLQSpFZjlS0BH89Rm6dp4Z/0P3FlaIlBEsppKYg/mvw+Ur8mh5ss5GSP+yPccgT+j8/pTQciq6ImyoxK8TB0eiIE02da5jUbQ9H6PMK1PLt2TS2UaQh05BA7eZV3joujVvgXViq+SZ6g2lYPIgxf1CSdMu8va/9laKjdiv6pAaKYqOHUMIT7J23O3e/rezNaSRlN9xvaZv1im3xLEjButSzSiZo3xBZeV5tE3ADrgIg/txfTRjmmGRORwqedILCmiuSKDCpPtI1jrcEjqxC5h8Exh9otvZeipkij6KeF1BEcOgDaEC0V7+k+yIC2zx77LSQaSWcCEh6vfjruf1YWEJvJ8M1TuB5/LptNDLUPhhOYqUEJ2RsVvWhviDvnZG9EXTkC01OY57Qkk1ZXlorlT97inQNa1+MgCcR/z/HKmkB1upiQBP4pCupWq4+7tM7c1JdTSN52+VHJHNXy1NTtqeav6iTMT/LJWW21cshpSI7LOfffe5YYYKBEJVHVUssomJEspxtpXgHOh8z7cREPgWJ+FyV9o+pKprr+ldiJizx4dOF05q4dyYgqzdG+zTtFAp5j1YMfOUOgOSkt/sFko1SO9kmSycNDT0WIeCiyLDNYw==';const _IH='7f75bc128aebc5c54634fc1aa898c1a5f9c01db833dc55a4b3e453c342647479';let _src;

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
