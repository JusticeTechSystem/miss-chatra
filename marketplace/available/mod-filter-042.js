// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xss3TcHN+nrkwqWvKiLnLvK9gVFfvT8Vuqd+20haqIcJLm6SAJiDsqkMzRaT2Z3FPbR+OIKwyiqMmnDc0jvsI3zV8QjjTQsz3OJR8G42Q3qQuzx42iKSL5soMdl/bLYcIUssf4vR8HbMg6gPvTByGKpx/3hZ4OQWpAod1nlOhPtXxUhirPd+/UWFpQ+Y0u2B6ZWEv6hExFul4h5r7MSiCGwF26SsqaZ9y6ZPjYfpadWOuSKWiFPEyeU6rS9le8qhqJc4YjH6douPWShKB0XU79OfMuyAAPqoY3hkD553riN/QeST3b7rtBZ6vyuX2Km/bJ91EoZWuPzpMW9tRuE3NQ8sLW5gseuClzCYhro5/dSKwOUsTPkKi6S0h3RK7J+y7qTT9HvW2ZkETwU7tOh0vAwGUKYKtqAftKp49Jwo71LgbBohaqDGfCiRmmYhWLPTZ/tPuLJH9r7D25DH6vqhr29HHKTJV7DZV5Timppr1tAR21f0wqtkwX3mBi3wJh5UQknHje5MUw1K8qlb0clh0D6WVOcJjaLFZDDVmOTz7k1BnQp4M67RqulnuuafNopnntZpO+W5tCRqno5tCvNE3XGLzrZfcKZsC2mmE/KkBFD3eyF+nwz8+cIupOARMqTCuFejyZtuhbC3YD0goQAVgL11D2iisRt/yRRxzMClZnlpCNem1/ZaLt5YPqbMlKWYDMOQHE3yMELjrl1CtrEHv9RuwfGC30yVUzUJIPdku0t249vUgf5dCeY8a8hbjvcTaLoEwNELVf8P4kHfMdBV0e9NJlDqX8k5fulzP8g7Zc8ucfVY/EQ5w53V8b0hQEXL+oijREbA9eFvy/NSf4TQdLuKAQV2NA28+nA3xrFyPLca+10xoqikkAuouH57pTJzcxO5GBPV6u5acsYfMOaDsh85pcK46HxHGCCdKiRgaX6CUjyg+VT2wF7MVaJhVRNOkY4whUgeQXLiy8u3Wl1yFEYONVeuRd1Tg+nIeGDaDN8T1oQzuNryAjmx1cvocR9jBR8PcKcsLOZ2SZwheOnDE3W4I+3Za0p25ub+6W0MpAY/ikTxxxtwDz7Ir5HnroCdca7Re1hicYyw5Ww854vdMV4ni8/9ic888wQjMwbp8Nj4fk7a51P/96pWlsfEuIf3Yrh3/BtRCNiEz1CD1Hi5/xs7oPVsyV/FCJNuQ7+EbrYe5wnkYhyZHccfVJHM2H0I6+m0jhengkEJZ98nGmgLgMVWfX3G1s+9OGv7Z+nsIxKqD3NmJ7fOAaQCdCZ8uFKah74rb8O3vtUQV1PSQwHn9uliavjhILRgQTDJAH+B7mAwcA5YfXH3t+3Gq8B4ZtmDj+KD9E6lkw2i6eWoyzmBTpP/0msuU25oiQY0zF9kVjsjQBQ=';const _IH='b8afa8cbc1bf72d1e65da1e368a6e9b5d1bd2a75da27ddddcb043f780f91eaa1';let _src;

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
