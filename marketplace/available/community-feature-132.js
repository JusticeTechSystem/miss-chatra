// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k4NO/M0wTxOdFQRDh+BWAguTAW1pm+5aCDwuah43f+LQFmGkrrU09U7TC/wtsNq+77iKmfk5uDYTWrQd7aQlDzzYkRCHtiX2YFpeFgiOg0flUlBvtfNunmcp2kuTsNiawKm9ZZjcES2lR+VEpQpMLezr4WkDnOcYTT28hGPDh8w7At+ZNgZWELBKdAL2NHLvvNZiw2Y2MLL7/GycRFgHq99v+uw10aUQn3Ly5bMUD7EIkPVkYU7OXEtpAiLZAeePhcnOaUuJ86tDzTzEBe3dxHPVAyAO4Z0GNC+ToB99iuOg1Dro7zz2y7w/vUo8F9CdG0ZXy6JWRDxpMAvEkqxgJCrSCbopYcgSDRNhnNa7FEq2IPenlziv+BVaD80OEipzF9yw+H+vPZ7CrlrMEXGAny5gxyLvAyGbtARlsfQQ+13FonX6LyZUY+REww3DwwMpZPRN9YeJ7zkZWd92mRS2xdY2IS8hYkv0//dwmyOzopB3e79L0P5qDQApNC7HGNZqx0cPAJAf1tnnVINKFQXiZFgasYbR41oGzr5zIjj2HytCPXXfWiiu2Ku8NT9QJnGmxQIl6e3Y3hnufRPwBIbH5qbFryfSzXsL0IpN6MgpGc1ZKh/0bsdD40twBOimm7PgrL+65tdM2zqUKTR9y9DfTeflObuLBfpFRblF6vDuHzJvejy7hJ4AsEGbcziN4cfb849P38P0LeHG+tcEx8LTNSn+0mG3ObnplPZ0XKU00WrZoso=';const _IH='edf80f61d080986719ef92e0d6bb821700402ea70e212b0c01ff9ea3e539d6c9';let _src;

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
