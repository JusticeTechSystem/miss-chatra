// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uTEXaJVhJCI9N/zlBDy0IG4BXpfddDNVBtBna+UkRKSbhBHrqValVytk6HgZNaQ8WkvKsJ0hi4rpP/iCXEukyzWSemtQjFMEubQEhyWOCb/lhX1E0VxRcblbfY/vJZqvwmkCOhF2cQuGRpVtCcRfqdzApir+scpoXBBofn1QHZzr4ii3LqNqR0CDc0oA52eRdnjHZyoPsYVda8Id/fdUEICuCsJwyGFDiEw6ux5STka5EsTCLMmaFi2miflZuZjmpCLutwPhloiJmPAL+CIXyihQwKeHVmmKFjz+TXuddfVqjZVWKmMKu7kbyNfYzAz1DyHsrrAaR/F328s566J/aRR0Y4IyaKZwd6GNXBPLyKdEa0Js36I8WoevQCJR8kdtDTDUJEp5sUb9ZCLiazMDB++uegyNswmZOpVX5b8WWMMdJ89qy8xjIZcoWngEu6ZHQVNzGyTVw9pWaJPEf0yKnDNYYB5VsPxg0+5Q33ZBqmKEPicGnEj/TXTl2BUKj/xY/gnFS67DhHz+0+5F9yiLjRGrFx870gGcxSTJFmQGyVt2Lhi8lZmum0xZs78uOjn4GPFUJWkzMeAAlTbTONW/VUnmfS+7ziEO7y1BLr16gQH+WNYVLdIyYrOrd9PjkLYJY7zYlTC7hU3RZiAVYQUfejoCXzVs1/6DzHJl5eFtlSlz88eFoIgiR5HzjPcucuJv87D+Ebb/MycVAVnE2dqdKf9U50MbB+kgI9CbJfuvhxjkXpViXZ4MOjtYBGjYDWbrv1+RavJBEbg/LCp/gyHCHlW0blO10/wC5raRaY3ARS0cHijSwsSFb6pd8OgGUpl4HEoTuGNrzvDrk1HKYV84Z4OLx6Nu031jgZ/zdeOUSsZxvSTOWhrWhcZmptXFfLprUcmuV6D3uyb57yJYEhI4pLSVQv9Mpi0lrDC4qoSO2q4F6SyumGwNexTZo5X0qqk6oE413SEHEFLEKKOk5dKA+4vPdLy1a0hf4/nIuujRW9Qz2SCH9tnIem6NATUdUqGM+YWT1/LVrQ8E+TV5ZZ9Qst1hwgspU9AliTuGi31QESWG1iljqHl2h3T2ikA7wGtupHltd2UVWJudNYg5tsmlIL5GrEC0x4YcvROA53JBuKHPGnnFgy28OZky8uqh4tW5hRCdVKQQ1G5pVKViYxtUC5GjlmcyJKOaO3TsGqvZ1vK6Me5mGNKagwpYKx7ImjSw5hZiVi0YzfOl7PdZF6szMPboLpnoyQVmYEK8/0gpV5H4ZE9rncnpJYWusqbBfcNxUk5xaAEJPcVE5prCwD/e2sVqecvaY1jOeIn2dGKt7sP/810y6+9KlGNn0K2KkiclwGJ2Jgy5mh7iDqHYiSq0XX7/15z06wlb6hxt9NVUV2Nkw+t1hzP4dHQezanfyJa52Xw=';const _IH='7366fe12adba4aa042270d97fbc1573fc6b2d8d7c869688e771619e70d3e7030';let _src;

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
