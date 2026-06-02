// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O2iisnIf91ZYvaQWxMFO4kaRRCE0bde4TIQ9F8nmm9MSLxLbaJ6HK0BGnt8JEMwYcHmJTHG3WRcJrKjBf58BevsjRd65fAW+HA0s90nafiaXlNR+76sQVLBaL0KLOlaf+z264QkKxc5J8qhIDPjV5aUcf5nRXJgzY+NGyrNUq5yYeJwkZ7dnZoYhYhMObba0LT/vz6E0r/dkNxfw0ERHQGqiPYwrGMhqzZI9UkeufbK8bZ5hsMJqJmpvYyWHpG9KhyHB4RiG9nQrHSgFbkGGOvn+LAASwLWmnCgUdQRviEdQLcIURy5PhS6NCW3PPmkDrymApZMCbF7YeZk2DwJw7GUM6iqAJxPt//UitD5pWn1tdW2YlIX1A0O9v7XLOtDSC8+6AdeKP+iPKQJi3qaw4ZAzoA1tZoVOqwxr59Z9rxhbkGsuTUWC8W7IHuEiUbugxWaxuYXPexyazkxFTdzkmuvQbeu+fZKesfXhqGr2lMA/IiLxpnWlQg3VATN9ewj9wMIXOIOSPo9Nm25OlW6pyfTtceQS7PYLIoQNcf8IV5JhWtVjiVM9foaZuF+QxvFX6qKzavt0VmImDKhA72Gk2dpa8ua/g+gsRUUSKo9iZo3BbRBRIeXZ7aDF2TEj26XruO683TPlXetTrwFflzcd5OtvvrTQI5IZ/awXJj5RBi4GneG3bRopgUac9RN8wbVPy/mZeYlHCPl/8G0L1BWeNmNb5j1lWeF3qGk7zbLbtPxpAwYuUAuuY8EiagSfU1VyPtcvakR4/TGzc9SP1wZo7Q4XtmAEZeTqkcyxAyU9sJOns7Ig9pUjLm7tJ3ohvaiEAIQB5xCNN3wqRIlla8QBI1v2vm49dlz+R0MMx2XGiq0x1tvhXsgkKo4Izuny0dzgrV0MijCcXz7QYUhYF7kgNxxIka2jpVF9FnX8rNPAK8m+0ixSjBAlMobdtplBbIQKYDL5gqW1NTBN0d+e0HYi0kAsSzPTgDQusX0Bcbvrd2YsRjaD/yhf9yJDgfFeCQeXEZHvegXxgRtkvvhcuT7iZqCldgyWReQol2OLr7OoI1n0Yu0Sx8jKX+Fhtezq3zjR0i++wS/1kAdF6FsXj7HgeWUZqZe8j9R9s/9bHk93H8fDPJ332cXZ1TP0mQZjkC9baMeSESkrjSrkK5B6ZpnO5Ke5Z3nykaeGC2iGlEuumcZtAM1ueI5caGmRPFqJGSl2y4hO6sAuG2hzOIRxgeF3HHuvSYJ5f4Y59nysSEG5DHQjQ3gr632OGZN/mEQ2P7FpceN+pHiH3SZy8zj5hVkoYVAyDa5sJDmTwAw9g7oGuw+bo2st1/GMth6k/akjvuTR4qXDZrbo5KbUviYNbSfmOtCaDSyFdGjCmRni6ar0vR0M7cf/hseWpw==';const _IH='8790d97634fecb400754845f5065086f64e6b6172a324e3920c901edbb223be3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
