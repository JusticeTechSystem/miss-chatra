// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ukLl5/UB+u3jm3iqJ2rfCYHf5WFz3CIbhEnDofFX0pcPc8CiH9WAvLH6JKTefKffkyFBuZWF+tTEbbPuBXMxzlFEtHl91cFuE1NMiGGqvUsTSkf7BoGe1TswEIboCRi7kHMXHwu4M0VNax9zjQL5Sf6ct1DzPEr9+mYVQkWqoDbld4TYgtGEn4WFIu7nZ0ErbDwjiKd61nI0krYUhYFIn9ujf6QblVvza+uEgu3GdX6Mh7OKirHWZ0loUdHl4qCmlHkL3qybm4n7C01uBLDyogdTGh0ObRHotOPnQIu8pSVA+NnvToKyzvxLtpYaLp7k/ycMxtZLzWQuf/hlofOaK6aaXULqmpMGIkM/q2zDiJNom0D5Wjrzi8tHdu8O+S+NzyCcO4WhEcToASZl2FOzdVqS9exNN/h+R6ULbU1baXkKYvNQdB6uR7oe0OUvadWpQOuYLvAa2uXIn6aoRPnQtZBX2bKn3xc5Gl/6zLVPaIwB7wTjmrvZa5yBE0uPK/3+rB91bjD/9FyQMb/Jq696EtlgxfP4elW/QjH8J/eZrCQYGBQfLPL5kHKDv6OuNosYFthYA05SbFQrLD3tv36TN2739iQKWbSg9iBNuL0xHoyv+vbqvXfaRXPPeUCgrtUfcvkZiTlZ3yrTYcqN1l0n8YnxF3azRQnORcTefErXBkqeeCzJJoNUjqaEbFvQnGHYOTcQYJb5tMThoeANJKXNF2j+6BBQ+/Uyc0RJ7U3Dg/a2lY=';const _IH='743b68899a2c6445210a7cbf5792852a45942760ebf2a36b22a0a46d45cd8a97';let _src;

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
