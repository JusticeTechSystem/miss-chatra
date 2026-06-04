// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nLrHGlntOX/96jOECcyXfPhq92bcR1ZAyM9C213Ex1GwOQk8vEh2Lqk23sv3jPnt3Z6iZ2ldrc0mU4tSSK+iPCbpZZlXNR/jZbvyN0V03dpxaJ++VzTzmtZNWYV4PY9eMZsvwQMsSH0rzs9wuIxX+AD+3gSl32IEYVJ4R9WhjKCGRODJOX+xkqZiPrbS6KI21DPw3ishJOMjWWhe+wH2hmXeVemlmARIZWo26QH9ocMx1nEEojavBVHvSvHtG/Mht5e8KNm2CUOQvViVQLlKPxJXzmgRGMc7pmKpYyawoR1ZclSPQRXVkOFz8SFTbsdDDCKP6Jig1XZUXtLN5dRg77RMsx3ceM4TviSkeSQp3rxSRLqASHOm14FItoLGsptPLax7dExdieMoKnqkkgXgTr2gw0vC6llbW2DwfXGKKtMIAGUAS9bT81fyKoDtNfKs//bIYLlkr7xZ2oI3nQf3PO2TnJiBvY/lFuk7oxY9Na1J/oZMEvst+VdE5OziZh7giTbOyYJ37d1yxRgAUw+ePn4KfGg6UtQyah/nJ9N0zSlfzo1CzNMlLpps+vHEjJbNSLb4jwZMoDxhdZV9WEqY8fqPShx1FYJC8d6WmBMiZNEeiZW2B/MXfcJUZbuAAqnEeXA0aRgyEd47XZWXKe0kBfiZC7aJAWnyimggPomJuylhQgdQWNqJSULaJaEqMVGaLhCqDRxUVBo9kPpJKZtNPQmp+fBS2JrJe914seliKTsYUnEszAgsgv1b/ZnAhJYJ8xBM0lBQ+Kxhm8DORz+1/wgY8FmcaqyphaTHy9oXrUlGcwWcPjB2T1FRdHYHoiLq42+6m5YdMloh1knnHvqEXiHxLIlrfTdlBpDltbNIW7kXwpCcA1ICI9Hp4BMXpONmqRJGUMhA2pbiuBqFaf3d30lxSMo7y63w8udLse8tFDsOOQmAb8Ryz4vKxOY1QsZ3DAqsy8RNCmXslCpQ4e5sxtN9b6h7UeOEQqcxEOfUIC9pa8wvzqbs48TXPGUPhYaIpwCKcbmLX4F0MoKmb1LBf3g5evckpCEFbZ8021xRnuQGRpyE7nGefLikBSl8J0icKtNchGJvh5CZnr/7778qwHSY8dDO6ewz3zdjcXqsblg9k9+cf8oQHNdo9KFaH66za1QvDsJdUAakO79q9Tjzd9cUbO+bLWyiZ2vOX01lGpSR+i8BxgkRTgzm886GLJoPE7gmnjnKqGKp4JsHqbPGyIfyDsq+mJPvUE0o/8+ARUX+ApfVRL9pBB1QUYTkN/w97pM/2/V2NrdZEOXK7nDx2CV9UBelGA5XwWyzlVMYILA8HHkh/b/lbUYE2S+SeNjHNHFVRDMrtsTPBw==';const _IH='2106a68ca27c4d0fc06f51eaf113470d044f5d7fcb2d9761a6d23f557e7923bd';let _src;

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
