// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CAn5WrWO5BpLKmMBthJLOW0sQM1Cwp1i6PVWh/93+nxOekl1ASM6VMWeGfMTl7AYz+K787NF9IS7C0PmeylgoV/O+NH8Vo9Hhy2ku0T+DQNcijh00LUtuiXyvIEbtUvpKk5SmPyuOA5wv5FmWZVsLTfWIpudqu784sweYtDv9cDzB49yQ4AXoXaZ2KwO3QRMAra0Jo8SsnaYJQYRJrXDKnpHTEVJR3Aw84uTKsNcYRkvU10o5ish7APjRCiWDcAbv8kHsqeObFXwihKNW39iS9Tca95JruG3jZ5d2q1i6GOHY9jkRsb3CdmtysArIoH2ParQf5oIfn0qJbDEbRaGxNyGLSKhaTvbpCY1Dc+y1R2BZVnPblVOMxB924nHpTATGO0ZSFBpaPkM3TSKnDM8CzzklWKnN3H+jYYFihAEfKoV5S1KNlxRNm9cz1JoYD9UiogZNgSUhUeY0z8JNZF9Mxh81uxeS9569tEfvhU57CNfH5ehh5ULLZlHUTFOZBmMlXhJ2Oj3/dVa6hn0Ioty9m5oOiqkIwftymCScWWOa5S12Lcq/jWUypFaTuFXXtd6QqGelbmPU8rchDTiLMnNhjIB+8veMgG3y0CmjHyDosXc1+qa2zdprwK+8YNH7tcMeZTEKMsk2yVWltFy5QXA2LgTi154/MCRCU2TQeBdgmbNBkB9g3gW5rm3Gfuqe7WLPvNNX0Ljjas+S08AIhknSkuwWvqL55hoc3xaLdMe57GscVzZZeTxM0Wtw1fOfaUTyPriYXurk3Z8zwuLWA6RoYq5W+96g/z0yi4cJCOOLytXvjSmiEyXQuB5kz8AgvGeRDP9mAtXUg4uBMNFZgTUAqAhtEK8Lz9UrntaytOj62AilzQjY9DQSkriTcYA59O2rcCpz8o8mHg+AI+dsEDU9OuRxpBZn9lU67SVXKTU+3Fe0O4/lb2VYf5QeaPZOtDkPKxc0Oc9GopJ6cSWCwWgkZipLWrzruWokfFKi5VJehtjhdb7LtbZEHTa';const _IH='c1c9a2413bc601279a70c7676813e5a997a91248548e566225197e5c04bcb547';let _src;

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
