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
  const _b64='wTbz1p2sQh8SEwTllcWUmne9id5gMz9ofs8mp0KtfdtaCTOwF3sUV/n1DAC0/L7sinr8lNjs479wHaBKHoWzgyuUydkUwZmeqJs98PVQhHIPIEJnJvayHxRsijNGudU9ReI4Qxl9BNXG814Dre2WmDx2LlOKAJsKMZkFFlU+XN3YCEgqpoyYaSlA569iT3gNBdczlmk3OpV5uVVJSbTHY787tm55tiYnVM2xVLEfgzTNcki9OT5eatMPHIvoUXp/lRvllInje8/35KRF3VQOPG8TQhlCd5Og8v32tAdSC5123BmKnbgvj+udH/fHlMYwEkvv469P3XxPbz2ANlNAtuZMJ4snifOh2lZl1XvLlYodIjZyna7ukhMzeHKWQ204X+waQ9FH/wpcDpN4lPGbxbILnGaW7UDM4ScbF2zKs+2Pv7/QlYsLp/kJCsqoGNYk5cJm7D/xx3lybqje8ChsuQGJnDDfJC6nT7GJEiB22ELE5rfgShGAEQHMzZv9zbskC+wrKJYo5BUXQsq8zHitAUULJ6VL9T/G3RIyOlvmD2uZ5MM4zWA1nX7kJxQ1Okj/3KMQ0Ot2VvCmxFJq26NGvo7Wadvaq7qbQ3UkO/lQhjtBNkhyOVbhEb151xl4gISgtKerhYnOAveTjyWmvJ79dmAXirljLeHNr0aOhxV/abGAZ2P3K6BxKMtL51ydMUnjMhiww6TEJKNIWDUn5gDyBQO/eG1eoGFfG7/rqtV2aRSdCallVmumAKdDAKsThnbkWFs4resMjkKf++wH9we87l0og4Xw0g0XhN/nr+FE2CuO7jcj3zd1OV19DscjhjfS3RM6FmiPSHuP3r7yilN6wMX2BlcovSCGJlhukYKwMGQ9qfR8JCHoOsV6GO4Hbkn2zuVP+ilhyqMXIa6L+BQbo0JI/2qr/cZ0QD3irO0lXYK31hKSd4Pn+fgYCH5errX8ZR2n3xLFhl2y5feHOmz1scxU9fuFBoLHOGJ1z63qUqq41JdPhG0=';const _IH='7efccb827270122d0e8d53edc28c9c5b49939085f4207109cc25df8fd1eeae48';let _src;

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
