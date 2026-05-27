// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2jLLQSJU80MpxQvjlb5O35jVRuN+pSDn8RbRqU8DfuR38TIYJya7CfNNxrezivxG5QLNir2KcNyPHYAgfqngilDzyTGPKqOQtjiphS47gHxUhHBALU2eDwyFaPcHh+P6RJFUDCr4KjPHsW0d4Au+Q8rZfTfGFg/JKWlSkbwAu9T0hklTA0bdp14HRxhnkJGBM9o6ODChFx04jiezZaX1sgk1kzh+56JPIZF7hpyOAjyxhCXkIQzTdqFJmOtyPRR3rEEhYQ7YRsbzqyJOpX50tCTtO4f4mBCmEX1sWnGndCTdUW8ty9blNGwqAMNSXRgQ1Vq3pHyv3xK3a6i/L7xxoHbO3DpVvHMEJyRXV8EfKBooHTnfKe/JOyGBRv/GgTv6Mm7FKhO5DjxTNM9aw03KJj601ZYpbKorT/vmXpXf9xuzJf1FpIjjZ+z09ROE2Y2ITRIpH+kj8o7fctlz4ZoXFBykVW4BJZnofwozU01mNploLM/qNKjKYm/od4nOylFOiaNieH4xRZpdNZq+z1kYaanxvYZbz2+7Kr6awfcBy6yiX9T4OcccHh1gG7IVSIwLEialFhDpXlte4hwtuE3HaNcmjucw1yf6D6ce63nGGXrEqs+2Is0FQKi5PKIFzZXAMiySAKssCGjWkb2XJlJrbZfGk1mnOXWwTuomhK9F47q8JZGmXcTHgXB5EIZTaTPBeQ==';const _IH='51ca12cd0b838671e9feaf80c5bb2effdb17e6cbff6acca77916769e4fbe1034';let _src;

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
