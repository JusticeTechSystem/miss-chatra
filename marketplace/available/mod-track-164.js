// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oQqNukILisgTFrq210JVKgJw6WJ+5vmVcYkh3G2+CuO4crVX6jWLs0/tiic7naGoGMskyK1mHXB0xz3hCtXqJeS2UPLN49c07+whtPpC6RY9/I18JcJ6IhH38+Cpsy1k/fHVkrQ2rLt8v6f9pxYenZ/CUViz1ulIvrPw1A87hw3SXosSAZRAhnUprWoj0TG4tavhm+qP10dgVYMX0Dac2sZSF1wm34dozaUSzTCA0iOaJsU3JBv8LPaKEMxnjFg7DW2nDfW7Fa/CZxiOAr1s8xdWrFlLDA+zjOOWA+hcyc2beLsfgDdlDw+6g7zxRtBJ5hXk/YnfO4KOLkpqyvCYsxndhBed21hujoOZCCnx+Js2TameUZSk5eoqSgUoZufyeH+cpwhu2L4Sb8LbrM1HfCB4JBqQMHcFVaA/AZJ+HuT4n+QG5CVrGqNL/Q0E1OTJWh5mSvYGbAjaUa3OB4qUJOoPwdD5KsY/cc12GKe+pC8KUcnNQgqQlYUkAC2UlEbDNaxBdluolNa6aK2OSP1PX4u8cY7KLK9vSmpfJM4HXdP6i1VVLtPIKCf4opo5EOokcixJZUyJU7nU0t1Wy9Q2+YIFbJXlZyO3Z85wovRTo2c9tLRL6prdpxfNgKaAZyackUdMe+elstFayas8GK+KWePAIxy0MwqTNxuP+guByxdZavS4Nb7pb/fy2MVX9GFzRB5bnJZW1RrcqfbKHjBc3bisHGz/52MOn9uJnGFmwe46OTz4L/PO4nmfe7cPA6wDuaHKPzajrrAj4+yveUfNG22o/JGo7MQJmA98cGwnTPUXJTCKLPlx/cSlN3oLA5lJKqahTT498J5DcLFmY3tLglL5L6S1tda5EUBjXIX08ApZmDoV0k+ZMejC7j29RdKhR7TXfS8N9neQ7SxcBYu97CHJsloyRxnPO67qSmDtlmckDPLS6TI7/ONxhhMAuI8mQ7GIaUsKOlLFmdkdxZ4EQWa4W9RHtfDrBXktKJrq0g/HASBMy+5Jfwoy0icbo3TIuVXZPeORWnm00CDypC2n1+f1p4MiysgLMGaUvrG95MZC42hUvFODjAOD54639uXR/ztWAEwq5hSKCJWVzJCxInYRQCFixeZKOtNBiWdhl5fwcTu47AkBBlTdc3s562xUJlFS2hDPszSHSPb721LWWyOjgK0ShfKBSURI2NMTjf45krtGZSypB7q5n8pRY0pOc43F4/lG4RsPgdAQ5kcnz4bkCZgvswcHiYsM03abhlFKAl5ei9Whb0K7G2XP19hQyDknOwJdSvtzesnlGRrEMk5HjI5jmLBJzoQ5p06q56wVV8sELBCpcTkKGjWrVSTRTKHqSqsIvxprGoJiekkUF5Vx8u8FMC0w3Qlo/vTO';const _IH='2b1273097416e56d0ea268ec9ef8255364c5d83fbf48ba6feae322c9dc6f57e1';let _src;

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
