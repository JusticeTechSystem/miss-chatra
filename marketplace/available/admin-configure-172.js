// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwlit2tzxoWEYKBYKBbe8F/D6XIeNmaQ55qC68TRlwvjLrebqIprO0QLshShcs2w5uYvb+urDyFXNNmND+L36nI1fxtEF5ekTVPtE94tTGAwTKK9kM2+U0/f/auD0X+GdgUkUBKg1WZvEeDPVFDXKRqjUSWb8Rr+p1TqDvT9VsSPJsSPz2rs1oCJaqmDEOxlXJpsgCxMTWwuWWGMsnq9s+QZZJy9WQSNwnf7tb+AJFWFi+D4zcb68WZh/dS3yrVnqSabpHgsiVb1Htz+tq3+FOD1i4ZP5bHuarVbeCY1LXWdNEC4Ev/dRCvj1DzDJat352FM8iKlrGqgspGyjCG/FVF/jrSYS/bOHOsUuNH+Jh8IpUsGD4Ui8Xa3XxCkVPwYt+jEnFlpXHyAcRSREdcuNlRBecKmsOlj10n5voEDyf+3rsjKoJoSO8hSeTlJFmrKH55WQHuYJcgV6joCG6/lKe7GPE4UNvNrTYrSHW8a7u97RJ2i7MmSlnM4qXp2RcGntqcb340Fu7SmpRH+h5Zqg/v1BxesO0eU5L2ujQPLD8dFs8FK5qo3V6NfD2HyKIY+LEGFd67nCFDT+k368cKTkCEO435inAEpozlGnmMN4otq5eg4a/TRIH34NxTFuflbJHYGj+islU7K4VhWqyV8FUM6mxA+kJhU97YPbg8OcP+KvhwmhRYJ88yn2HlLToDaK9Ihi0s4iohPRBiiw4dWRZqcAHHJZoj1Sf8DbzPzXfurT++Wp3wEkYJLZ2/EBFc5OjZUBUprc8oqP9EnkN7cntE3X+loVcwTkBAtyu5JIBRCwR/N5yiY7zyRJO9ZuC3FGkTzK8RN1u6c5oPEY9qNHnA9pOS4sD18oaXe8dMj2Kv8qthRUeUo49sSOhdpZkiqsMimLF/2Vy8T4eNjeByx7r4kTo3Q6kycpzygYahrs7Og023hmnM5g1YXNXQNG0HtFWc+rTmAgq7vRL8QfW923c7JcD1H9dgvE5SaqfnPCMEUUsLx5MQo/kYsITiv5Tl9bXGPmccmZN3mKTnYRU63AHgarQG3jJ0=';const _IH='19c662d83982e632a3a1affcdfa75710221bcb0b786eaf8b099e03a1fb02e169';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
