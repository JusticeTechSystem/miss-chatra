// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YvXW018fYMHX36NNes9U4qeqxHo97i6qIVqykspZz8VZtljnPozm78rJ7I8k9ssEiZ05qFVjro1I4L7xKiuX4i1n8gWLt8uCGaNfWEqH2UgJwR0hcHptpaCnK4HKAGbZ0kxUJ7TJfT3mRTGCza+72e1FidNrkN1ppKe4qTOv38vfiOqp9sKCdzbN7NR7+VXR3sRfP36DoWqCSC5uqz0KqTWPK+++A3k3pSTKddKK+4bN8DX7SszbyObi0KnF1lM2kkqZZV8pT1z+ncrjH1Xm7B+LZJKjNco3lfSsj31uafaniH5uvt1ObF/Wak6V9SCXiD8CMn5kMdlZBG41tSJXYSef4tVOylLeMxa4l6nDAZqmypolijC+6sHx/TkIHGEzTBLW/eQkZ/puuvDULJ8OlYIOtlQf1qTnJriluDrL/EfESy7ySFc4qr9LRUee8CPwrAof0nlaXaxEc4QMMdRnCDnSWzd5q21q5s+V4t4tY5KDnUlGxbSqc9Y+pxQkspYDECk9od+xgrzPlGMg+v0Iful9X1hwHMG/yVjemaRzcaBXvFgmdE0NWc2m6Ic+TmaJfFtFzbbmqTFd6FQ3dnYgwk14hfPIDJajzQxrTUaWbcmSfXtOTYjmK8Y7RQkQI+2EqcbA/HtVAhTRvgsgD6oMFv5dk4D8kogsKdf88HyPCwTxkpmq6/wsrAEdmiC3eMrIJKqCM8ToUUha80DTSWNMCm3+PyIURri1mgdTfQWobwlkw4D/dLQ=';const _IH='6823f28115ad5ebc55722fe959f97c0b904a6dcd073c0cccf211c6a09ac9a17f';let _src;

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
