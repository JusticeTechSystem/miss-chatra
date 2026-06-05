// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NfQMvXPQAsJ1Q97/OX4Vuk4pWlD0RpWXDEgaifvGxtpSUNg0nRrjxLJojC5HYY75MuHw7qER0PPBkItdyjafF7R1G3I/TvC9CO9O2Hd7/sYZHW1ntYHyct6awM/ZyOp4L60Dx/qGGZfXGRXpEhke+t9oyvzCjmo9OVpOpthsvbBJvMnNYQfmo+jg19fixuQz0I0CNsVMtEaPotXbxIFTUGz/cM0skOpOqqVubOFtKzJ738Ofuk6Evwh4hsyXINijBzwxEOj6U3+Ge/uAirXuMf5ov8DkdXG2hdung45d3v99Bq5OZ1aGyTj+5TNm6c/Yia4nWkjyBAUXPhQZK08Qmd2eE2vxv5maR2TUrkwY7mdsQO0F/72yltorDkn+p92BiU9BRHpVFfjZjN4gpN+gVJFLL6x0A/wq8wSa0zm3/XqDJA7J5k9NlQxedpho6WFzY8KnKPTVJ7Op80BPJsZJgCGqJMS6Ss5Czn9Y1G2yvxnsr6sRStWzfODxF0xIuePNUJw0qDnhzchl8dxoIOEQI0OQAF6twvsRVo5alm2KAqtzhU9Gh9lbUNlQP6K1Oe2BCVgmAQrLQxELXk+QPGOa8vfxYsfAbBLCxgPrpT9nG9pOX8/uUW9c9v6bspF35VsJBpjvsXJsOttJCKkJrzSd9XauCDxYzwms5rLX3G2EEb4KeBqD8JsJ1/K4kdqac0C025eQr9I4gBxPuNYzLO7xvX+Nu2KD6I+qXAnRVlr/8xpOFDr6X8fS47NWRVsUpZ9lWQ5aVmBsiz1VRZRsMjTjn0+1GPLZByV+R8rlSfRJWnvoOWdm2PEfe5eF56vNdzO68+xg/DWfN0c3gGR+eQWk9gsK9m7Dyz3P6KI5TYs2y/tt7aPnSmYUJIiN3nz06FvZ/EX+2CosxqYVU52VZT2VTQhotBPH38NZuwFzsQfJ3Xwxzo1qZfjf/9k/kaI2LBeuvCOx6Lc/wxJo8v3m9c8QqhZCJTfEbWaik0nQZ9z0q//LlJR0zsUvRi0AbhLGW4qOWkYwvFb2N2ypTwDEFfE/ZUs8LhRAjA==';const _IH='dc075e5db926511e2c5a751f48c145c125854d69504ce75acb44a04aaf7b600d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
