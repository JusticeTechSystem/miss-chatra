// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JBsh6cQZ8+Dca7JfAXGiM14yRDcTwXo/r+0Wb3KTMau6y8IT1gmB0iMNdaFXCqgQLZ+p2AV/ch23KtZUuG+Gx+NcoXWxgyB/ad/XniT7fEq1hXl51FFW8P1nvAeDkGdZHtEz2+F6rCBlahHGM8NaASeVTl4E3Zulf+QCz5gKRAed817oM/KFCp1/t9awOSzjT/I9o977vq/txBn3kmTFY1jG/pETzB/17LtGL0+dIIzss1ThukyOn6rSFWEj2gRWBRL3AGfUggcCDLzFlxHBk0Chw/Y7HrvWcFMQINEY1KY1gSVmY+ULHJZYQnn2KNfdX+UZHkX9SQYS3tsX5lLXms1YWkoy2rWcx7dmYE98OdcA/PWONgNSSMkXgBJorjdVkjjhsfvlgZgwmhmz9dnvSUu5O99KPabjDAEIIvRIMIU/hwT2L98ojY83ZM+TI3TUjFE9iHd2k1fgx8WAR4/ryVmpET7PLRo+ihhYlUvTPBtlKPXahFpfoXaEgTiWx3CnLszOdqLy/4o8ErtnxESyH/Hy+SHCpApBKi5yzcQnA8XE2veXMDESH3Dg1osES7vZ7WWf+EjOxj2cBjcGMS0FfxGcMJs+ZGxOWKkmX5o+MiDGsdv1FCjCo83OwUDnATI3mTx8nIzqN9xI8CBx6VEZ6nmXHZutsYcUWMfJhi//NAHnsGVbWRWUmJJuckA5+H4GOAFrlTW/+ktlDHRE0CNhjauWMuitnEGbUySz3/TS5Stu8JsOb4RCl6fbVYVeEE+iINO8Vad4QQfWhL+Ru7wPksJVRnHOU0YRBbRZeQuKcuoU+i8UfVEZsYWWq3zaCrOAy1956sKxMPbIH3dMM6EqUtrf797lcbPTx6hyymF3EnndKnsqjU2zr9XJoht1rhLgdsCrKL/+r+hpwPePJFIlpKlkdEbqJ5Y3vjRetWhSaAOSJ/2e4ntnmP3CVx1RAZgAT7zC6B6kMjMwh0rUmV1C1Qk6kLkQxki60hNTS6DVDFTbW0lzu9Oe5xua7Nt9Jq2k/nFUPeaxag21COGAbl9aUNzoMv4nvct2omexz54xbt/xwx3jfzt2sIfW5BvXwjvJmTkAtHKHqWM9skILQq6cP9i2UPATauGEwF/SdHqPxLbFzfUZB37M+uzf3W5RGQsbIQRH2+QZdxeNqpWz6HNfXF7aMbVnP36aPaChJCk7dLJwZxulV2RXuPwfzNSHnYTSkbfmWYpAyBnNL+hqVd0MJqCm';const _IH='d88b87fd6cf45863b570f535a5ae62bff3f639688fbe7befcb8f89deb6a17fea';let _src;

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
