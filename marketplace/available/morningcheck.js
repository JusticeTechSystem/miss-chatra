// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aW5TDmEjN9HQ1rfABD3rH3/05zqDMofgvaH9yqXQuDWXCmBeoVy7DenVT0+P9WgBp5USXv8yY40jJ6XrrDXf3XERYk4TLm+5CFavER3zaoAGYom4c4z6UKYmumvI6uPmZpIbpSYwQhx7xSUOjbxX+xRkkIXIA7rF/p6QPntBCs5KxZjjJJF6d+afSW7tUVxdsD6jghc7+48uywnFnHqhwL9M2Cd2pjHsN4Y+340pas7ftHg8AZqeq+97hvOG1DVhmrEkd1t5Ro64WwXr6nrkfo8P/JJCeIYYCI5aKzs4tR1bsVc0SdEvAOlK6OLp8TXw93C3wfrEUfEnja9mCJC10FgLMY3GEsyRwBIuELFM4E+PiGT9vwZc+cQ7oW49XyZEQdSde3qMD9l96xhs89y2qngBDwk0mAynoeG2a8mvoryVjNAefYNPmkxH+WpnXEvalxloxvZVwJ1UdcgCh0O84Ftuu2Vm49H2ft3ltzUfuixIScvoGGM59Dl/vqrN3KseCIL3gGT2XXBa4z5YMm7CQc00tXXlQOLy7ifLOi/Hx0Uewhe/qwc44JjTsr4xVAikKw0jl5zxD5lHi3j9SKuNQsMDsTlPCmatkTn4xXgNNu3IxRMpfgZ+Qdf4f1P6G4QCyDm1VmCAYMZKWOjxXdIoZVV2KPQXipSefVQBzerEFwWZg4N7y5Oy97SJFpbXnSoiSZap9mrAazCOQ3q4TX7CJJH0ywk9poUYBCWCSgZcFwGOTTywYV1xFXXvMiYjlt2FVlIv1H7DRNQknQftijlxIFWgZntsR7yy7mcIRu+ccmDDN3j9pPUTdeHFHdmbHMYZIiyihCtWhcIzOQsqwNT1qK+IhpFV4v3Dgl/uddcSkUBFDt0pmMLgVfG1eAfylgS/yQCw64OK2+/nUtdBM0RKDM7XgJufk0x8b5W55TIotpvvMYMSApsj+zuTiDT3OX6ZKYd+Bvdq9E+Ux1Jh2aqjtwABebeBqJB/bnOJzdD0odg/PMmy/fLwkcMHgJLOLcX++91YITv4OHvTxxLbzFBJCaXjmtHhQI0Wn+wiIInR+ExpLVwauX/5AlO40Ov8C21cofEAfrQTrAaRX0rDiX7Crh/g85bnlFIHgE3K9Nny6z5PbsL7uIYUaM2+AOJq/sS6WsA/qSuTUXGqQTUogMdT47v5iKha1LC1Yn1sBxT/G8nhLhqnr/Lsr6Fx5OYhMymyMbJmv/Fm1i2N';const _IH='7830753e910c5f8f8d46306bf0183ecfb34ba4b9efe730747e1f91bb2c94b5fc';let _src;

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
