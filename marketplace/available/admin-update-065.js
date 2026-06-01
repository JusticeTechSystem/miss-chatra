// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4llOra2Jxa4Lpc4uN9pHsKt/z7QtTLHt1Wxm/DGhiSNJP9jjPI1PI/bpeVxQWNe/RTe6sXZkv+UooplfEORxURMkBx4FVfq+xJgZRNWR55ssPJ0MF5ew4ynUnFWao2Oqa0zjpbXd8p8xIHIqt2Yi+OQXJYJMyFUMJstPLgSmtI8uxu5Mpodcb6GNNtIMxjr+sko8V83MVAHjbDnnyIVobW9AFf4MVDCIZcf3fNRqTti1jURWKMlof1fsfGXdj6CLAvomJgxMY0wR3qN+LgTtTpPBsunb/28UOIpeWaNVALNjZCTd35AWdY8FPNFrPAa6cCXY0Qmq7S4DeEvMyVYDHeD+koyzX6ZPIezZ1lZ8pbSXZDlK0sa4w84zgMZaqHLAvHEww9y5A1YTLrZ+ozrFfbpISSPkNARPXPq2mbnKkYbGbwiI6Dw5XSjYoZheV5tcFh/SXZHxM8DzKgQCAWyt6PIWgEd/wvrK6w2ZcFIhoSlVGFz7wjf32auClxlH2HYCbXOpSJtgHLq8CJ0GhvH22iBd7ushqWbI+38LvJD/sNJniqS7XbpMUlNUvRZo6G/+jfu87VHVXZyHmBK7Fsojf7H69r6cDpOxFYsCQ0sMtM7kvlbYrO5O4+w8HKLR55x2p3Uz2tKZLHQHH+ANiOTrw+eU2HqfQT33K8QhrmxgN1HnyxwwvypZWynLPwwV0oYEgHvOAGURZFHY0jVuPXmz2ZF/cXmHsTS4txA3tWWnrY59lbtdQacVWG3fWn53oGinfTC28w7xFA7rm59bDTqJr3EhQn8Oy3sHLwkmqGaGNgNE2TRJqs+THFd8y2RYaZvtCLCi81T7QTJ9kOO24EouU9gJMKhf4MXkKU7N3bRG2wNPAo8R8EmjRcPPl2mvhW7kHMJtcTtxJsLi4kFU1TAe7I/bS1nCTIqWOSazX6Tz0yIp4FJs5RIvgmyZzMqh17cJiNcJ+n5gO4f843FQ5uprY2s9e0rRDx786xne6oBEMz+5i4ca7FZ2Q52UfMFyA==';const _IH='11c78d8d001a2a3497477ce7d671005e2b349a0ba26af3fe0caca43fc784c6b4';let _src;

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
