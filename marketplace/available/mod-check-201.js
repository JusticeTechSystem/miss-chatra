// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AMkCV2wspBDrouOJD6NbJ7EgG0MhAAnLg9Km4lv7NXay+tBTJ17q/GnbJ5KeDZzejxubaqO/9qsJguQeMReDRBZdKlHT0iYEW7obIqJJb/5KuFcvmCVRtVr0oRMuXbDYGiliyLxFeT93Ym7H3Hnxr9tYHzHEwKSqB0xESr19YA8ZmJtOMoHByS2wZdvjr8d3H7LMunSdm2KbcYPC5PPqWS5K6xoh+W/N9zgNJd1fo/ipDEbDkqM2qPNjmd5HUFmmXTGCeE36avXAQpRWvxyOcNX5EiVA+1nenpWlRTmFv9J5OQXfUjePeS11O36/nq2yUHuywnEwS775mPtnb62uYHuB4fhgiDFbEyJvPU9dmAWt3ypKa62kLUMbxMogkREzxwOw6PZuMa0K2gLpHJLFyzKVSV3ctbWxqq6Axr1H8aXMjS+ruElLpXUnlFG6i/Zp2d1E2L57T39kILfJuZbDbPkJwE+jjrnfLfHmhewg3WA6BSzM7ZUZ1b+Z0DlJKNnZfEKXHONhRAaHa9tEhtLVceoWiK63SPgpMJwSh6Vlvv2rYxDERHyuBUfVb7xOJv78r11sWvozukQarnU9MGuw2SQNhlDk+oeeJs//wbn+sSZA+q1wIjsXTZoDA6oIY+pk762vgLRQK8rZFt45Ds1LQ6vW0kd1JwlFllMOA3XsuxXsujEueqd2DJGqO+4LZtMVjrv8ucdgV1NuDGJI2EF+bT0PXZ+E35y9yl89wqhxi16fCNEtCftn4KrZbmycfKjdg6q1iTE7qiFXifxSHWD3bzwyXk3LDf3Ommnhd7qwcY3peZxdcGG2vdvZ7LKXZ7uvOB+CJbhiyi2zWXKSkx8QZFk2KNUecd5M7vKq15oKTqWAcOnn1em3SlpQgMJEANGttD4AAaMFhdyd9jAVd5Vm+R1NuF/kQYop6B31/XWOsoW9eJDcD4U7ThUP/+g4yOTDMxx8bj1nvQMo6Epyyd8RafT2XBD7QTc6muJGywT8y7h/MjC4oolZPyWSRFv7ofUtdbeGfCmYWcF6v67yyjdopT8RGQj6DUzM1nfwfEZzFo14qwm2CWpRyUW8d/ZfkCQi/9L4UC4bM32uYwZkyVZFIw51bFVx1lB6b208xNLXS39j85P4fI6YLGQxe2E665U8I8pLsT/zG+O1abHAIcoKRZqTQrq0rG8c3bHWm1FK/hK/ctLiEs1HE418XL3GboNfv1GdUWQEiiTjkw92nGlN19xWEbScs1CC1Ee4XHtC0bxqvYYqj0ZsF16KhMvBsCksoZiZWaER18Vm67cEQ5wozLjceQXho7BFsGeUnRJ+dbr76rnExwY9BCBEkn0hwHA5+8f9/pfj6yRVWHoUbPrSEbPDI5OSmrGF/6bxjNZg';const _IH='2550a4f2e3367d6a49637d3120370bb296e6b3fabdbc25c26484e447deae6e92';let _src;

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
