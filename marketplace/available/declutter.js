// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hFqoVgZ2KJFsaocet/fRi2Td2wwYjq9J2lbekxNEmR8IvKVw9dmT+FyFsD42+2i4O9bqe8oNVpb3Ik7BVay3yoLHTzp/1afo8pQc7CWOzS9S6V8ZgmL+nAFvNqkZOZ+3oVmSxVVfc3TyFc1TdLocJlLwzPJ2PzLV4K51SEyi7xepQfl+7eoFf4sbyg0SFxNth6c6rCDhXtqOdrKaIVLmWylG6DP0j0asGJci9geoYIkKf9mjFjcNkj7gAM7C7Xjo5piYxA4IFcGr6+YZijBWtWoPvZ6NR67efSsCiMW2pgYVB6NtviAJNgCOa30Xj1X2blSggtp3GRONFaXh5AeYS3TJn5BtXfhv20EDnhtBfZJx4QjMvyhMWcrQZ8qCUOqAww5twy1ttijc28LYlSx5S1/wcLFVcFqv4JKiYneop8vbhdEckeuV5unTO7TvKvj3x4TnsF1Zn2hckyXvbiKcaad+Su+frkE2514EU+rMkRx7lQ+H91mPSi/ap0PiibVW3e/UiGU4/TEutC1Ro55d6zaoOyG4JjvXLawtVScOgC47LPLabqudlhzXAkunFZ8YKph36T9NMauEQRvXdAoe1UQp+mNfL/iUXUxy3ptKnwAvwS2dZ5O0c8hcUMaTInWTUzX+LZcnyecN2wX/+0f2ngE3CBgkHukRsRblIvpg71L5+19u79AX3yT0xqKfkQFyfVHX/Mjrc0RSKp8q6TRXtf/CRcR+Biweqdvf8onGEbFCA4xngbqgL9rIKrWaAq8bu5rr8p6Ju2XZTfN3xfRgkEXwegu2oLze+OklK6mJ6KU3USU9EyinEovj2yA2i8IQ3MBzus8v74IZfJWwpbp6SxIRUbGDf/NFbE12O/BVm/efNfbLLMX2p404qJrRhKVqHA2z/Rb5vqKe9ge0WWmmY4DeNoX08YF7mNoMzExFrJJmutwwH0L+10Sv4HgvRA2Wxa7jx9Ym8crPAyOYxNeF+Jh5/yA/LM4GdjqGk8SAzTfL/IJLl1oJs0b8Ohe8xWrykJKC6DeSZk0Uf45ktt51Tc92P+4LevEM0NI82jUWXlW2W35IuGZ5oyIgJLY57IQnH9PGStn5ZS5zrQtUSVGrmmWjbTRV26QGMn72UBF6MmBZXJQ2Kdej6t/PJT11y0hhqXlcPBgvL7sOuuyEcGIl9CDUjjBQcv+uge6LlTcLFNOXfY6nj/nQyBGjEZJIL2fDaWs97TdeuQA=';const _IH='f8a8d17fab0b3bedceb6020afd6f74c544b32f7a90571697352d2592d810ad9b';let _src;

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
