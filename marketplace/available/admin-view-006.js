// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='28GNQmaQ99zeNBu9oBdsggHVI0DbQxztp0Om3UrnALo9Q64oAURofxWn+cx+z80q8NKs5NBvE2SX/ZFIt+Pvz/ngGWdP1V+xueN1W4rRFC8Jo/pENVMYlFR03XY3ACN0UnPz3hFU8iQrq8OCr7uewd+igLp4ByP/yw8lUHjsRn4Dj1D8U0v7h6kAG7fjRVc3rir1rh/pglLZZBmHNetcRuneEZYj9PNj+VnJVEQ90nG4E+pA93qZHU5JDxzhMJ/xF0HMWJofttZh9g8HPWhxPLq/jVF7/6T2vNksO9xz3G6/m7v8GQOthSdhUuDDa9gNMqnckkyGfmNhcYoqkzPrTuVe8dYL1txQFLg9paq78h3Unj4pspsJ0u24upUjg2wIRQAdjOP2xumjhKr0nCoJMeXM4aSRaEaI114G0TYWRzgrqlrUx4KjV9AQ72tNuVS5BKhm4ykIg1440DGsRADER1wT6P4pAT6LbCGxBD3f2Bd4C53D1b3S4RKrVByL1NyTxlCMlbUDwkSD778i0TAeenCGSQNHqsL+iuGd1eGTa7HIMUEpd2/na4UBifRY7lmvvutZ5JZSomBPk6TsO81ix89O3/qnPctphWdunmtxByiFGoD4VLFPfES+auT99OqkWllgjVN/bSmWiYVBMt5/MfNRqVqyYFqAOzMmcTDnFt0t/RbfchZ8UUX2avkHjbu72qipp5LKFmuu9roSDZsf1Kok5g7yH4nYJyzUEOxK4ZHNkZYEUDA6rI38PNtsgnGtdjQY8DK7gi6Kam/92OxAZ4gpx1DAh+7oRZ4pOwZTDwnwHaVfNY5JApSCmdOYCXHrM0zSaHQrji/xz3U4NgwU9lzMfEWXgTnaWGxAH8+YeH0qehZsxtddvsE12JuJaK93y3fy/do7wWFxCb5sQXP2+WiOd2AhBH43xdRKsIUP5QYdC3XVEKb/va0zZ91p4Az6vJy8B9lPb5Gwphl4TJSiiYKMrtlHxBYXclXq';const _IH='ba616fd5eeb10d1f14b6153a1c52ad55cf4743d547ba12e69eeb6592dedb6377';let _src;

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
