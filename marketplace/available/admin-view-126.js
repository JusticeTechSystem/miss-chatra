// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Pytfdf0CUL2T24BhiqYFg1oHzm6qj7Top2YmD9AruU42RP+cbRu5eDOYEbJi3fgTP3tyuLyC1oXWsB+pyortsuEnF73OkRXGG3UuC5nUfD6lijUrSMj9oejqQ7P+/AuCA0aAs1IdJ4EFdGSIpfc0MzlF2z1oz08PZlBYLu6k87IvNmxehsrZV5hnF21ccEG1b/T/SyeRQzYEllUuRawHzDMVmtTKSTo1JS8lXsg5kfa2lwhPFtP0JJDXP2ipI0Su+VNHoDiguNH1qzA+ji0bJAZDgf4rpG954O60Iua8vzSsehOsL5OA+bJSzcSWyIoerIdBIKdOJ9tr8up2tsH3Nu8nRe1OmJTH7OQUDR83qw8ogpBssWwvi/rdELPLmUH5rFYQ0II+T6EAK6odf2O4cbP5qQ+o+M6fOj8WjVJY1cKLX9adpt7ACyATrI22yisE/HJZjIxvViY2gL7Hv/9uWak1ZZ6CkOEGf7EZDRTa+GFg9CMq8spaqVM74C1xlhQzXBbpj+yaWJJ4BHLAXj2HwNcdrJDLozd1B4WHAZ19DJyB5ttCe76ESCKPBCfkltpANZg0p4iyyyik6XzFRLemy+nR9gJhR0Hmq5Xp8AWdUqoT6DiAao/y4iO2Mh9el6ebFHcmgpcI3FB0BXqOMc/+X5Pz9LPD/ys2OSAmo0RePo01Vq5/cgUKRM+P3Cbdxo6cSQ32hks4eJuA4re02gfdQ0bm39Ch8qHk9SA0x9n/LgO+/s/L6FwJGk77gzeThhzoXNSvSB3aYotCS7wZVwU5uxYBKTXFfV1JNDCGGM3LNQ4coxQ0RiwiiIWsMj68AU2i52dsL608VBdYnQvIc/qZnyCpAIKu6OnIw4I8RKYfgzbNm9rMnqxdIvWDtSch92ug/nEVLoqbg3/XqI3lXJB6ukZMl7gzfdJ9Rv6xBtoqXw9jBsK2kO+Rlzc3hA9CXPTsnNIFzfFpaTg/RqKeu3R77qI+k/OTnh9mjdp7swyKGBGgx0=';const _IH='dada752b686cc8568afc41178c33ccf5d596a5bc9578c11d9bf5882265554cf8';let _src;

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
