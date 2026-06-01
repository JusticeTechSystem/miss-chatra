// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxFDDhVPwtZS0m7XCObFFIOItbg/i/OpNYL0HCy461xFXBRw5294bPXEcQn7Msg5sj1rYbC8pGoLZthv1Oz2BTclC8wYoRkA1tiyACIhcrPlCyrOPMnvH8HJ3Hfk2FU0DUq4efcTK73NR4vzTMTh3jpaDdUh7ZbBKIg74pvWCQbecvO3XS75khiHkJwi/J6FXVzp2uKjfnKlN28cOBKZEsp+c5cOLDoniN03nL2a73rBoKB380BCE7zkCfsUs/reHimMoqZMs4qkR/R/aNN3I7AMJEUdYHBBUZN4CARjXUVJ07QVcvRBfYqtG4Fp7oNKSm0XUuTWih2N9E5qw8VKDqyoKPk4/SBMjlX5WLlyQIqQbCvPdfikBE39JTL9DRUhuBNfrERskeRCswroIr5+2rv82yRMBiboKjvhDIhLfCwbrw927gcmDG7FlFqC8Agz4WifvI7axdvqeE7yDDscTTNpXqWkb87cNWEW21PE3EKORNNfi5HCER0qBr5IIOnIjHz5wDbzWIultqYVcPv8SmHUkiewwF/aJnAlWnWQl8Ds3b4X1QJgSBou7wejGZ3IatP4RKZ0tFXx5PR4Q39c9YXwWL9ZAOVlZ/w9+L4U92p65xqTfI4nGjS7CXIhm5IozWDiHhiAW0XnxrYyHdInQaxMc6OcaYWgW+zsFYpowgMPtnYpi8l1VWJj7vu68eUsNQejWp5PJMZcIBfdmYguV10bOKDD+91kr6vb+PBd5VjbUb66FZu3nPZ9aXZ8YojA0du7lVV6EUMkfSDsIeUpa2dye2HYXE8oP6gwq7xymkgMQ62Y9IGUavhNWKLRS9ViNVAK9GsUL6v3bmb/hxLmUGEwIIoxHWwpxU+MwEQoDAAmFPK0zfwK4Qwd1+xSLELN4L3byZv5UESjfndkdZqTxdGA+FX+b1TE3uSAvCS0Ez72tsTozzKgk0X0xo+rpcpDLa74EnqNp4DRMlVXfPYVAPDF+XSD/ySIPBHtQes4vTGKfPxDci1U0M7/aHOprjAlxELpfErNnT3Nz6LT3ylknIkYD2mPmb+GUs0ayFb88qgM7RL2gLGigALxw8M15WGHYe4/+GsPQoqWtY63';const _IH='756be92555d31f8b230ae320182869f3a65cdf28ba8af968e9b24e1623b9b225';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
