// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kLr3qJqLt8tH1L3l9hyMn7fyHWCg6Of0pbyu/TjKcwGeJTPKGp41NZgKI7F9OqwM2oQb276vBSoROWpMMVBsFJxWiraxOwTES7cP0XOR3S9rYwsObkZcMeEXLKZ/73IhE6y9++oH6j2CMbObrFpS8GDeIr4BA3FYAp5dNuCptgXcJEUkuycSlNyzNYtJ/YQg+rthSrD4ezGs50lTrH7RavPx3+U7I9mGQojFmiSf2Kb5Q6PzSlLxckenm7D9VFBsQPtkI3ueT18lhbU9hR9RH9i755gGpEpzLGayjH8+Txx6qpoh757H69aFvCahLjmJGbw0FDJU2aiHrG7xhCXelH/eVzHVrQlH6ejNUefa19S0pGpl0qpoL0SxchIlkdMekjpOlUWwbXDnsJMkD9mg8dcNqgEaOaDi96q5HXEGPNIi0X5CMa5bp0jr0rEIMdklJUdiQRAyZ3HJ/kPAqhcvznHzERXYPSev4i2ky1pt/DFlZdxVHTZudfbVh3+3nqRsMcsXhDfxhJtP+57psdUF+AW2P87TcaJqQp2lINZQO09NXILdsa1/h+5zyL8RpCz53NDd85RAuNMpGyHKbGxe58PS7iKYI/jwr4iW0G9xDCkj2JvFsfe+j02beMqFz2Ljnf4DJVi1KA/0rSunvjfJSrzGyLgUj79qFmwIwiidifSOMqLLQ+iSRjonmo5L6E+5aEcf+/cFIlpTiNrT+MFEQwmziEM=';const _IH='e7c6410f082ae288114eef8025c29f52473d44524000a6b17aa47c0e3ebb6638';let _src;

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
