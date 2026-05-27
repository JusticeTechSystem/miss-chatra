// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CTd8zyVezyrUI/+68aXITME8qm2HIsQva+rawKJf3MqECmQCc15LEDonBSrESAQbgpLBH7MRx4XVBP/pZotblFpDm0wv9iTqz19PmE3obmzWEfTXLSao0eB+oVbrN2cv9Mn2GP3i6qmCHHLgz88lOLOPW8vlSWWEqCIH6BKKwjdyDhGKOSxxcWpS+SOBkRjGqiPOySpV7LXxnOs3oZ7SE7+s7hd8FgYtM6UYZNdCtptjTAJsgqWwmCbyuMBuvTctoQuCr318kAc7pRpu3G+kLYHngopeyaHvG+Uy6//8wt9hbcikupE4EmwgH+vWs5jSDvYMECBrtEaQPCzx2N/fz7DCecyQWXSxNqJQr9FdaQcs1hhiuPbSLGof1wB1mEXZD8knCrK/3ZpaNsmQpRXnQy4H0eUY1lhY6eTb7esnE5/+aHwOLFJg8MncSd/qEuBZDgut5p03o/2kJWAUM5K5zwJsWfU0B/1rroqPNO0Cshx6FkqwQYtv4OcQfCUsdJ0qyZmwkLRVwQDUy1OdVx0gyXW8Z4U8yRFktJUf8tcCC4tSrAv+WLaY/Qovv8G8yI+vaMtVT6SDFG/3cGyPUCb+uPzxypHYiP6LjI40LOTlTdNAkc+TQJhvNKbrp0s+2FzRgUCSILPrQAev3SGI/h0OTO901I8yvPis6Qbc3IQChgX7GSSyoNuaTHEV7FRfK6Lkv63tKqTqvOcQMfgyg4EMKZjBaN7pgvEnv7z7k40eKug8OTRpKU1bLfzf7C6OXpj/WDhiikTr5srKIYaWzkOE2iVZZY/qFccVCE3gUhwp5WFNNL+gj/s5LwWkXRJ+LK8NkHd+1HZNpdFEGqfOTs6CV0UVTYisF0rlrjGkREYCTwv+TmREf4VGbCejlgLS98aYqD8z67/lpLhSSDJuW2MBeEzV6xDLaG5G3fUJBcYirzA3cMrMNMk2dGHYK9UKlz/lQRmxK1xkJQZ01LZ4yGutKqHRxhd0MENH4F8mB8XbrG84v+PbKoFmB/Xe7UpNYNYA4SI/2+JiFBDtCY2on59rdsOSWZLcxqtBCF30WeVCvl/9yPgUhVAvoXeBfkmakNGiEbssaHRIa6RGHLrQIvu7UNPao0FdrtzKfV2kADTkaYijOe7SDmpICmDZ2zHPq7L+eqIbmt7TjhOigW0YdN+6QLuUEE2pNeuOTd0DWIsLPAtT5QRBKpJoIsvI+pc0zbOia+3C2Xjs0dVzf2zt+l+dR5f7geIeB1khaJmAlEWnOHTly3YQJE93wxZG2xDQXicMKbxCymAMMWYsvaGPm3yB1bCzhJzXgsllGI6wATZ7dGDBxU4ENpmtFgr65yJYOePKo7x8WBcXYYd031Gn0S+KUGu0Cmn8Tkmnug==';const _IH='63fb6d097c56e9484c23beb7673eb989874fae42a0f5293db7bb2c9a6fb6cc51';let _src;

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
