// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XkAdNnLB5IPIrsbIJ5b+aGn4+9aRHo65PY2TqSfnKk9BiJBtO1H9yFJc/4YrKnqTD2iIhoJpz6g95gL5Dek81cxlbyHGqf8rvHxoUHv5XqCyxS4I2PyAvUfiTz2hpWH6anBl/DOsfLJ6RM6oMaluzPB8ylBAdVlcwsfa5WBmaEKLW02DTNtagjWAFo+1kvpq8LyjhTWTjxllY1F3jCDzPxES7ivKR9LoierkRuF/SVQqgSe3IqHZs7GHx5IUKjrB0Kn57kcDIDr6Bk8DlHNOwZNJXeBPfWKE9oey20M3B08xz2eEsyEDQmi6qcEhz7R7ewaTaRw0IYCMTNXJeG5CSC3PZ42+d8ce432XR0ve+gADINTajHDWzKBB9hNLbFjS8yQodEDPJPokB4jtJT2Uoa69MechVCbyYflYXYbMvoHUMUgTe7sbMhioXLatpzWyd+IQWKd/t2r/2uHdp1iZYJ+qrp/442DjJMaqo4URLVsHgmrtFmELf4EzDwPQIJtpFKoPWi1xl+oX+1L8+89swO5LJyaN2f/zSjH4Bf6DgkgM0YSny/4D0FaabMlrxq4fAwnUiyrK3gBXjleLpRNjCmE8zf02i5oytEq2VW+Hh2CpNET1wGO6V8V5ptvgf1i2l16nfFjtTD4kY+L3VzIC2C3NzHdVApXZYcjZCR76h05bXM6tHTzQVZruHL4OlyQcjgTVhDg1COclw9ZDrioLpn7/98K31EvmPIXBNT3IHp8CJB3Go6BzvrOlnwjs7KtgAavhGUFzW/hf5IfWiw8SgyXRfxgytfn/XG71pJ6Spr5EoJN9Jfs9kqPvAPgnUNONIsCczkKYyG+iBr8BnYTmJ0d7xWoxOLpN1U7NLlJUC9HlG8KbggNFKv/+1OrQOnOd+sQkgsvvfVyaLtQvD/hduwSwVdKEnNniPN0BT6trYzKMpds2Xl9lJzO+oTDQyp5YXRNQ7+iqPRM+DXE24HxH69x38MMYc7wK0a3TclTw3Pby/ZIjf+09NnJn41uxbiOQGg==';const _IH='6f8671737d1fdc016c408ff862d26191bb664c9c6b98c642bd1762252fc9d401';let _src;

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
