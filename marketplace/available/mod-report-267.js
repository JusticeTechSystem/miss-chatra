// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U6J4RpOR2qk8ZYSfkcszWkHECFPBXofPGRa07HElBh9mH1O4a0BMMpdajwqMkTgNvAyflc/g9Su4kwTBJapb6L8w5Ybn523k/uydBmlD/klTXiQJ6jNVB6Bvwkvho+Wrhkluw2PfhF/MGgwmuSdJoSLCYSlrCEQPjpVnYmXlAL8jIAZ/kPzUfsnsqtjZ5HuNyZ0bXFKX4XEgquuJj5RJih5BuqjmzCboD6kjQ/qUxlorlzKDWZ6N7YeP1PdHKMGBdzHUYbwS0xLQuy61NPpnRxBrvaxsHw15j3TVIE2LnBS6avRFcx2pchW5lNHXrxGrsaXH4tertsT8+t9n6+zcUmOeZzB6xlAClTsZ7D/yZMry1U1yeuAumWqhuJsgrC95hjCYUSLQ+OX0YnRG/6l2++i6dUu3dsp85J+w9XTWCF1KXr0hsSzf8OSAZvBH0IPGEct7Lbbh5Uqa2fF1apKF7G4pjAqyYlwZk4BMXgNekrqF8CYKBpL9qbWm6jG7W/hIkLjrC0DKFvFbDHnKLmUYHxQtzulU0bfecZXI8TWdWJ9I4Oxn0RWIikdJwnB1rB1cicPaCe5dFhlGyOTXt+z6Z7xOfIHDl1H7RQQkeh3yrucQhf6KZpXqUbu9sFYdi8emQmrKhEKEryfH7W3t2GScKb8aLGbgrxIqJF46YIhmAZymb65f0O/mDHSg7JxaT4kvN+m7hOtm3oKzHm9qwhNuxh67B2XqlMvpRHDkUzZElnMLgDDCs/zAY5o75+sCJ+rmy9B5htwsFEI8dU7Z7mtZyGq7Vd2rBe904gCGZWlttma6Ao9SI1ytI7ewaO9NCS7pz2RW+fCnyAirVdwD8tyrHYZ72aho8NAWWfBIcXwVIQ3Ma/bWg559Bxfhs9KvfZ6Es/J+gLDImp5R7LngJjNthurF6F0xtszylYM+3MmuN7Hkh6atUTjV7uc5wh0YrDfuOP5l2v4BBZPzcQQgvLmrb1iJLbVbyQnW3eBvdN3jYkNVg/VN6SsRg9UlEHuECAsdMBSWVfWZcsFcAVks22B+Nh5E9A/N+deDS8987wAI6VJifyzbSGquxGveBcgU4O2J7OPEyViT/DyxiAujxQGoTFKeIZxBCL+bujQv3FDy7fpuwu3hK6wafD6cXweTKvTNJCuAJyRZNSLLwMpuTvAju1tzPGxxVfNkaWKazmdxHKAQD1PtbhLorcNEmv5lKZONASHSLDoUULT5NfxAQ++zh4r9zqiY204xBYYFovc3YfSf5PuKTYZ7MbuVig3l2XUlUmfr4wB26p74iFPF2zTBSMBkJ/5nayN8+depuqNeatnjPrsiJiIh/tj1USzrk71lBptQzb6i2dopPjYF/vz0jkq8/spbAcaD3Ca1oQnaLNIuI2d5WPV3HQ==';const _IH='d614139913ada8a703f9a6691af74cfb3e912ffce9c4f81bf2ffe637d986267e';let _src;

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
