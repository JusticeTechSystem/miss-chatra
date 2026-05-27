// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q826+71b3eE00Xp7vdIXesqtOSDiXt0TTWgPCJGkRUtp/XCesdfAdDdKs+HJ+34oLSDgbZQP1fIwTBOzckbruC4Z6sw3ajBUobCOwnUDvvdpaaI4gj4419E7a6+eZ9kIJo6WTjtMQKoczhe45YKbHC6yxA8XPLweYj2Ns08zEnohJk8Xhta/r0ROkNOfSzJDmrslnpu79yr/l166/gWBOiez1xJZ5fNByCy2q0IdTet4+yOMQx+EmRuBIGKk5bgj86yoLK2il9mOZKLtS6NCRt32OFFYfNfKpiVW9k/Pm1EyXuYG6gPup/OFpaCwY9Tn6w/7XmjTyjYz5iL2q603wDYT5ooYcEu+S08vaVlnq4FS+qMbTGjYw1b0BD/7T+b5tpPW4U3EtkkhCdNuw5/WalUq3Tj3kMsyT+Dsdp3SakJBjgVXtqZi/vF2hqrgwovQRPza7M18bV89tilRTiYSVQ26v0fwRv9tVsRkynRCCdhOPOtKu+9xSRRK/VrVTZb22nvrgitEP6PfJNQBD6Iil9TSdYDoyJcKnpGh43IelnOinDeCB7XppjGjXXLKKYl9s6QCVryc19Wl3CddGwFOPMPZhn2pAPT0FX5WXX0a61SxMG6mVst4YLT2mWjmNB9MhNjDfcbjOlmJOBHzwhMq3fOomP4Dp7J1RFLhwKhTBObMh1j1TEikuiDxVbX2eV7AJ2aamot1ifbY7Je16XLs6DBecMSpb+Tx9X8PfApfV6zF020AcERA4FypuYt+ihIuVmdcb1e1vvqFtIxq5vMMSJFhNTxc4SnEkCZzAPY1TlF/aaCPTj+5ugMgDVZmkYUBjKTCM7SrJqccG24vyeekAEyszQQc4faIz9+zW/YeUav3V4+1UX5SM1i1ykcUox3b/A4hibnOlECQgf65tvm+J8IDSjVjRxkWtjx2409Psnvk0SHt+1JYHqaTP7lVUtDL/kz05jw23Zvias2xt5n02KyKF0y935nUAKmR8m7LLjQgDTR/fuq8TWaCMINZG3VEjtt2tOKIl6ifUiAaLFHga1zbetddsJZruKRjxnaQ3uqKWfCOR9Rr4n2jCD0HEfUxzoFZmSGbXCLOurRsPgngQJ83XK2sfGEMtaN9jvdZExd7sdYh+L7wLh0qem84FXEbwvCsTR52LZOkKRBIuMSrLGO4HU1JA9WuukklId9Wye2WSy4u9B1nmdnGdvSzyNBPyIZp8r4Q2RLqOv2pSE1Vd5ECRXbCdJK6ppeeFid0jOoB0wIovpOIBCYggbkTMiXQOjKT6IHzMsTv4gQ5vAduuu77TgsPbfjnOu/86oY7G16pugwu2jXOdGVtFaMja1x3fYZcUaoKRBvIbaNxEkJB53/Nr45giI/2u6hLjYsJ4Ssur6uegOUOjA==';const _IH='0a7d42e027582d43c164fa5153197c82d7200d5a5c7984b92a21de3ad8f503e6';let _src;

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
