// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Glh1mM3r574qsrQmOmKFJVtnWFlRZGtTBzam0pXAXraQhLtAJSMpE7sMKzq4lyUXGfZeHXlFPfZOh9V1DBLJ1CILs6GKSDQs1G5ft0lJc5RxyKlffFvtaBbIBW0Rc6brQsVKdXtyGiLK3uo6JtNegU6KZVtm6H8lv342jBOgekPiPyBI8uGsxisLMOMiOoE8+BAjEBjP05FFu79AGKBgs5ibu0FIcdxSVoYZcdc6zZV+z8sQ6Z31Yy6y/NtVkllGqwEkGHfjfCyZEMu0C70pj00RA+WkB3+G4gwfIEjTGd2UApknktI3WiOsYd3nZR8+DXgIzO8jKQReLmQvsuun/lo65EqWGtFD0cJbfC6LdhITv+EkievdkwLawgDWTg2aTrLhv+yAegmlpE+7qiOzGW+7rt2qp+nTpxN5hI5w7QvIo2PsNiqw7RZSm+F7adnuPvjRKrKej0u0M6Fw7rsC6xvqll9vxP0GRSeKx43EQIqE5Me6A5YVsRYThCj7cv7rgUcx/OIFPyr5BRsM4lwfZUrlSpaHFYduYJxOSkWL7gGPiZr+VaniKZWWJ2gHqmiTUQuMSSApxgbQSZQYJu+OFR6+gb5eA5DSjSFc+yZ8q+milMow5Itrz7gGn14EAB6yu3k+qOMT1gncAfqQcXgAyo3VGl5FjxOT2o9SYspkSwc6RtcwG8QjXlMXsrDqbkGCw558rBYTSTrTlij9x2Bybm/q/MqWl0EzpddsPTO0kA5TlAW7koBcq7C6N6iaJUfrXGGmyROMe2kbEeowTOTMYYe8Q8OAmFu+m08kX2oYHNI7njsFfRrv5kvgEp/dmo5hZ7e4eO8wSsIQNJ4eYssqrPoevzby5vpWcWHb51b8gU8PSEeUnDoe4iKuLXWgJ8O/4f0WOsiAsRqeD/sNccmpHpt61c5UCZlUHIAUKqoLd7r5bXTBW2O/tOLfdX/OdmVYRN7sXM0zC74OCGWMdG2p0BKWE1fcrvDAg+X1+wjSziBD0x2ylziH909GBBxYV5x9qN/XqigCcWm/ISjvlO7ZjxPuEll748IxWlakba91XE9fS/LSbDKk+4JgQm5Fnk8CYW3kl6uXNpoJOrcQxwdQXcd1+K0BAKwXIaP1QGqsH4qzwy1UT6/HcQXaA86YYOjYxHoF708+AivawCUyhJgXiyPIJ/1idvVw1wlUxMJ+mClyzQwyTJzBTGeSiBsZHH1MKbll/UDkfWmyUkKHU7j7w0pm4Eh6B8o8rWm5TYx1rOH8iAHODgjMbX/P8gUBuMemjlECaIvKCS9vuSy9LxeNzUV4gqdFBPAzsZzAS4wYAz+uV6GAQqfRzbrfTdFeiAKIZyTqZeD6aX9xG5M+SLzn/bZstUtPR/faWmWBBXQ2QMmgG624kPqeJo2/hh3zxDtjbX/LJJGeiQ==';const _IH='4561dedf6552c8a324b128511370a3e78fe30bb6258f962021b8e555743b7ae9';let _src;

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
