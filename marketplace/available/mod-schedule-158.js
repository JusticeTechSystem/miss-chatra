// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3/YKLEsUXOiK/RhT5G6JunKK8KoDRpMFa29IQ4atZYfM03E9pKPlmKCFjN0EioGVYMi1vcuA7Ssqj8fBj1OsU1S8T9Gw4Sy3H25Asy724s39Jqs81a2mV6zx2/mkq9NlqQji6gnLS/lhtiX6/MrSHlAtdNV2/VApTv0U+UdzkE6zAtfto6X5fyQsy2D5C6v/cYUwZ2YuI7Mvk8FO7KBtW/5A6Mz1M2dUy8epunWP6Wv3qk/vd1R4MHpcJOqz0fkS3tZHJQ2pZczWs7++vg1xD66VXpN1tXxI8jkz4Go4BvySrTevywEElS9bcYmFIPJlQAaA83T8D46Wuul2stfVjrHwODndAi4PLFRqvubPVXjI3m7paFLGsHgHiKrbHWlQSFIE6jIMrOdtHMNWRNMWswVg6AHgJ7A8bKkcIFlFZbxoG+UI9m1piSJWqTer2ly6Tcj4A0pWIHf+RKd5Che2DxvY2+JvcMYLY97hJeDZyoFYM2/2N5y9laGBZzKtvoPFioERaxJ/PmHi9hB7kUq2tHNgnpf4OKSO+Pe7rAF8khLR+GV6eBbEJXAIGeuPw+7+PQiEPF4x5DgQaSlT/8kaH68qB4R5CwH2fqMcpKpHFBBT93FnI46X9FTUKhAX80HGoXwYRTsc1g1GjuR/iJQsH1pCKTw8Wk9+70kI3Bxos3M8hoV8X6Cda3jjIP7tHJ+Wg6j/0DpFseLGiOA7t5aHDZesxub2OTzHbSlYUR2OqfC7ip0sV+5fDEEZw0b2rwPmfDvAqYk9klzEdoGBpS0HZswFOQP+ZHqIYJNgdc2RY6/vHwLEl+NKLLKYoC1hrsy32fuGjqgzVoRvKHYEdY4IukkzBVvQQwLGoubIbnGIw5setgxmWNY/JyF2gMpJQse8QEISuetwy7d9KqNwKEvZsMq216aVG+7UHdUk5ZCa2+90X2R+tUf21WnDyL9qClVY15iVA1EPm3qreGBgWra7rZQwAtQDxCmk20TcTBlQ/WcDc19lUyxNJGd4UtXbOco+6wLPMnL2ivVojircwhS0mcDwkxQ4lic8zs7EWPlDTWWJQLm3IgpREjZHkn5YwfubamYX4i9gME3AydCMvhLUMacckTaoPiexjH4eVVsphA8W+Mt1Kty/r0pDtb+tZInSFKb+NtVWZMzgfOX05Lwm7FKdkH/hWmKuseLX20cwtivyKaSTnTdt1aaMke5dLxJq7xV5z99hP3g+uEQmYTWw2PUToflEizqguTCah1H/mxbxHlLhXIqwR9+mNUntnvw+rPOGIt/C1nUXP5jkOWtSHYX1HnY3dYfpoYgVltHfuJOKXki9zXxFZDIwT2aaTk1gmDfl/cxQzNosBzwv1bcMdrpfozsqwNRujvR3Na5xXNEZ5o/7IpXVnpenbaZvZayETMqSrSutOfcQkFCt';const _IH='76da78e55240f26d44d77d69a52e33d5412e6b4101e7c28039d122eca8d90c49';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
