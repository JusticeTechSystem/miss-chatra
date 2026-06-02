// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LHZ+txyfTFBkkyVeJ7ScqIPZKS5B1DGRfJ/XhBvjX+A+ihwvuQMrcZgBqvk4ZpeYoNpl7fYNUqvSEAddwf174vdHdaNhIR4fhoqDwNBbn6lqhr8Q7nd+OiDxPwa9PGkRwn2j5O6kHPuS0Eo3DZVKlUBfTRR69V1oSe6fsumPwAy0amtzq8PVG/cQwEojEfZ4X1MoWJnPIIC2TuXVt3cABO0pmel5OaT00V98yBMeIs8L9hmqBCjfXFp6IHUho1kM8diDMZ+WcqJ6U8+n+xlG8BeobbBdNYyZWAKo2Px6Qv81FMFiH9Rae/4PA1/9Vhi3Z4EhET7P1DqwJKxzqaLmL0N2Touzg91M5EdPJ26FeKxHzkSeuyvBq3Kk4IEQ+LqbFo73Msh9afCUVyeZC/LO5tTftunhCZk0F8ND1iEDLjnR1pCYrvZucoywwNYApedBxFt70BxwdOkNKiiptZp5tz7QHL/jlj6aOoDli3eZCoWNJklr6jX8IJPXfshYD5XRG9a9ybmkJsGtiVpvFK7zcQj930ruE+nICfs9Wg7bKmppV8JXi2B0P/FFAlErfmyC8bypu+3R/h8L3R0Y/yDc0W+OdSSaCzfb3cbhO4faEdoOs9I8ZRjO9KEWVnlx+LqRIZn06fGOiVsOT3yNj4B6E/lZw48yJofENtVOEPrYI1JZ/mJ8Kbt1yrLmGQdNMlIqc7F8LEjLahPt/GWycwC3evqDECszgdMq8NnPGhnKB463qT5mLwBUbu8QJv0zekuzJ/EHZgqrHbjUJq6zv1LL6uAj1Soix6MSiYnY+cnuznPuSNdpiykbe75kGC1eBiqbMu8RyELXzfE03Z1ZNxW1d0tSO4qAjBMoI5wuiZL8mbsbTYhnCXFKSvG4Vrg8vpBUtD+X9pn99H1LemaMtA6BFdQIQbNbkm01FYMSYFN+wE4wdVF4XT106IQPRaiW7SOHOkKXZnsx4I8WrC42SqDQKUAUF83XOtyeC38z0GYmyGuhHUfvFOE8SoNYI5ETOrrjI14UQ39cEYKrxVahPI0j60d8lGQ39TnDDDqOMB4hDRrAoCFSxm8ZO2SjBM2+yNQut4VM2J3DKlA48GCC7lJZfdIdO/yw4ie7ACgB2Z8spfMXphcZPpgEzusTvpZfyq1kdtePLMyueBfAiF/FSnYs1qbx//+RKwN7AarOtstKpawivO5WgkMYBHE5myGI2on7jOITLwM=';const _IH='cff43a18c2787897a41a0df5c64dab0edd76386f9ec15c6e97de8c072b285500';let _src;

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
