// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KeD5TnVbLa7U/rf30lFFGb3Jw6/Q+kaG+hzwqsgxdSi6aMnwIoqwTHH3w7YQM18rv6/TBOla2LjZ1JEOqRs73WLU52G658vZYeRuGXOOyt3SzpESOUaS67PiaYO4ielilzmLpJWHSIj0M/YkcoS6T20lP+sOMy1aEO3wsX3r8I1V7AtBanY8G/YsMWWWRpx1omFLNDr0fmGT+rINtCm69bJ2v1hlKIc3f9HconkJRub/+JNwGIzZpg0Kr7JrpyZRcEfs4vt8cmQK1sNtaCiz90ZnJTC2Xe0gBAeTKZpEeFRNiU1TIoFDJLIX3qdiv14xNuHMOZm/i8a3wyThfxnalyhdOUua4uruYxStSAe1XAT3UCcV/SbRYLJxqPkEyVTCrMOodHC3pQqWj0um8BjRQJGms5d4YPAqkfZ0jWEiAsUWZnl0Iw9LZDKQKAI8mOah92OrPsLfvgmmw3LbXK6Z4PYTmiB8LjZBZ6IFD6jd4FA9ta644Qn0VvHHdmi5xYe0jhLAh1t5cS7dMH0bf25jE31MV7CCYZlKpFr1tmpNZfvsu454LczRIy+W4wC0IfgzAQDdJGBg5pY4ZCo1O+O8+8mlyVZBNr+viLXTqUgzRDj2LpSD0B0byMjppz8XWOJw68PU8ktXEwI/BghFSO1y2xN2MXxrny3ot9rlsnmCcH/0ONfeW4WKZPqNg/bZhtQsx0/i4DWA6tmz/g/1f4YjO1SmQ8TE++T/LINq8+3ODK+3ghZyNdGyPUjk/jwvMeJSq/ud2tQAxpJ/mwCv+bmnREGYPin5RSRWBkf9jSq14hWp4KSi6JZHbkwtWVilaUlUYglHeTzFUEsuhQQDr+s6uYDrJjfC5qAwMuDERoSwCBxvc0Hu7Sr9LtHFeMs2VRYe1KHRayROtrpzAw9NSEtbj1EhEIlRLyDbFrG/egpjLAJEPcliGtjbOKYTGgibRv8SS/Q1bLDaoxSX4KLYsGoAUkLK08yPGBf+uEroizT8apOxRXmcv49UBO53KSjfSmdijuTeK0yF61NYrNhyFyKcKtSV3FvF8ODMF+Sb4QhdFVZe7m44u+YxFpa4TH77s+EXFlOAGUOUsTIx0lkjoGJCOSeDIoIWYqPqQdpnpXqKOXvZ6FNWI6yZwsO4iw2R9MZzVFIQqKdb9+VFMLbJlLUcIyqhklWXCjllj8UgywDZn/MvVG15xs6Xbg6BGi36xBihsdA4Lhw=';const _IH='40b237205782f8deba046b80f2f27a9013e2d90e604cbaf393bcecc4ac52aecb';let _src;

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
