// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yLIbtb0b4xlzqfNDFSf7W5ImjXHY3vS6di1lpD3eZQtTe8RjOFjuqqbBtYhnjs3MIxo6ONWMr2xOO9Si3UzAZf35xcmFzDQVJoAV3HO4wRvH87SiUhI4GcSF+7fvcjxHxRuUTs6zrBHoPXgXCbPJFzCe3yM54POODQ+3ev57fsebN3RAAahi1spQ1V88+i+sMrNzHHUptL9Nlsfyw0hrbiapNcBogtVp+yzvi9hPDdc2sfnkg5VihbzqL3MdbkIVQ7AyVfjrE9nJpjUZoeptC8yGZm26XaIPyTwTAGZSFw+6FFVo8pk3Q3iBKQghw16gTZJ+s7KNfvNg4eikiPka93s2cYZhLugSzEnVEJQeqpl6qC2arVo8265zRvh5NcJkZfNmy+mGOUHQIGOpNQoV00WVoUaTh8HbMEpT06ifj9ewV3VTkI3frFRRQ8GK5SBN83X7zpITTvXmLgZny0rhYoJqHwG0o2iasQh9bfSfz3Sk8EhNxA0LZd1yAr0eDxOnUzAVmUz7AQc9G99BGhRENGSpWNIGPz50aB2d27pJo+I2llpgmy6Hq7jC0a/XC/D/eZ2F8q8PB+7DVxQwcOhTuEG4YtH2mAYJFiD1G99K9mIfE3gem6NCs/2TYKYmRBrcRAZ9U7dYLAyUp9UJUbAG0Fqv+QzXb4MBdx30pYSXwC93AqY2Lu9iyKFTI/Osr/9Fd+wGhR7wOtXMjqB8RrxtSeYiCCt+beQwzbk3zSS2XWwbSvToC0/RVAcKUChhzeokQDU9L2SEG/SN/k+7HL6oiDAL20Kmx5cgOd/D07Becrq9sAREe6hU3seMYdSj7RDm9qXqV+sxuY6Iw314MW/Y5bNzsyYvwPvsg59lSQ1uGM0sp5qL37vBWISoMC0zNmQbOI37K5yqruWlLbqr5nAztHZTys2oI9BB+sgzK3G4tASMA0hWUmz7aswBDuB+HmtPZwMqC0sSjoTd0ayI00lsdqf09EcZqDi5ncEkEsMJUnbg5wK0AlyfYbeygpT2ewO4isHZthL9pJ5yvUKs/nxzFTmN+LdvKg==';const _IH='de727956136cb816f33f0ef5b221ebab229e05c42a44cddcdb70bc192415cb42';let _src;

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
