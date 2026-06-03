// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6mB6icnYQd+vM0/Mqds7DeOOEgbmyZ5r/ZExLNp6VcDImeaTsJNJzQs5NMxlIm3qwvVU6TnVHfIiTFzpqf3svLjTRDbGfE10pX2kerhE3icgZMjaekiw6hLfcfrmI2KXr8GWf9lUslULztDwDwk59aGJKrXHIt2qBoBnL3yMQOxNyqEJk2l3S7i/hg62/tNszqhRQpx2zS3hdVakdV2oXanphTXQ0bYlJwO2vRAGK57Nb2m0KB4JkZ9i6YYhkpcVoox+jbH1IcrzxPvLs92Q4YGiOmIIwFxh6ynJIRhyU1u/4RPaKMV9YOBDPfts1IOqRFEAo7d5tXhwhBy4IheW+VH8gDINA2yt04iPX2Su4F9sqJfyjPHY3vq/x8oP5/4s9+K/DZALMSI4gu2e+WmapjMjSW/lgc/gWjklr+ze3Zwoz7Wo+iYNJFkg/SZpF/Tt538rG4gXHkK/IYHGTibA7oG2JKoUJ8FNlFplXyYhMoPgBDlTYHr4tHpU3EsLRMJpNut/XU/giaacPkau3TFI9Lh2gi+tb/5K8CDr8DxHSk/lcuLYKOxSpRTNxSG2MBsC2k6W+susgiL0kIUz7g60uW17W26dk1w0GRTC6c5bv/fkl90X/LijOdPC0z09utaY30iuWo8UTsmib6x2/dTRXdX3EQUrwJKsavkxM6zIy2H4bfzDeOX+HSmcwoDOaJbx17FMAPBYyO8VxaLYx5iP6k1UoS2CQTFnnhmGqTOaO6pPtQLkPcJQNGvDkQtgNrpd5/Ytx/LDSySMmKrWb070kbYNLrWZywNPoUbpqNmjHSjbDo7gqjbcO5d99S7+dDElr4rSylQQEwGudRbk8MXpxX0aLl5Ef/OrmDuSPWItakCWa+DsBFU/5IszQ8GzqY575EaGKsjBkR/eOkrNpmXurSVujiBy4QaUQou7/u+57XeLZ6bVDWUqTQDlD5jVsLWJb0VD8Bli8Z43GyqVh4wROOIeNH84gbcmrHwZZx+ok6q41gKpc5Bw5+wtNcNsqRsQ7hlATaJVLqqXo+fN5St9dqHUrP2yRf8NdrR8oLNFBJZRUrkyDs/CvVVHFpAdSNrP7Qpx5kwBj/obeUV06zR6FMf3XLpVCiR5lJgCa+aKvRrYH4uPBFMoRf+T6JP1rjt31m3HWZDNECADpv0ZZCJVfkQ4XXcJeqOyMFZXuOOYp7XPSReao7qRrSo287IFMFYhhjg/qw==';const _IH='fea8b2fad2d84df8a73f8c1d2c230e78f4917b98ba39f5e27d2fd951c64c53f4';let _src;

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
