// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RMIK5o6lhncDiFvGkQEy9UJIxrJfDqf0DA/AYZHpD9lWUycLZqtSnKFbmkeKyignpJE6cloVt4dNrQeo7VCGbD7VJL35jCXfbfvZhBO4qhogOgjgdOpbT2AIh1L2dMh1CLDP/Q8jg47JLxKlMQJJpOFsR3JjxxMiKYGn0AmAbZsZds8fz2/Ll4/cHqRCHFd2E1/vqpab9tlPZXHaZd2hV2gCJvLaHq5+vhXnY2rl2y8ufOPgCgQRVmIEVJeE6P88Na8R8WWZbN6kjH1gxuTj+5ECLma6BoVVg/AKpLnTfCbtI0EyE6OUaFwX3TBBC3YbhggtfAval6A5Mrd2gRPQ55ZUJD2TpxQ6uHBl6y8GvN+HxlXmr7oaEoO38Jxr7hT+bmX0ZDdl1nJjtL62hqOJON+fJEH33SFUbtwZCyR85+CLxh6HTJGUQwVAteAMCnkxoah5cj30VTPlYmfq9FevJUe1BM8yAcnHD58Xb8QsGVkLeA7amPjwJgtEyArjeK5XUq3bjvfXgHdsJrtgOPxw8efDdeGjwceW1pQOIsT3r1buPuYHhTuDLKYHCzPD7nJvRlaVxen4hSuDn4o23V61HBhKC4fPPpE1x9+mq02+WEAbiWMbGGdayKJEwqw/ZelgLlYc79cgU57TvWa3LPstmuIjJs9ZxnhG9tSyehHf10YQx5OoBl3w/vp93arNPCi5e2e8tibvT+iGURHvCOd5wWyvy8YFMBwPZn9IT5/9+dwT87FaKyxD36MFdfWqL47T8CQnTZLjztSiOP1lMcyeCpHfcoCK/m0kmLHW8+r8yGAAGSg6jSP6Aj8G6svs44Q/Z4SoOdEaFQOUYTRmYwSJtW0AGC5zYdSndi/XQsGoZt4VuhLpUDKhzfE6UiHcZ6IMzM0XSLa7wGARUenh/bBamSgmFyf8yt217A6bUlEaqES9oqAEDNpUp/uw26CkIU6qI+EpDWn/llHLDi/SiKz3e20a5/oIw5qA8nWC6nokgbxeNVYOMyB3wJf5hP2oRvEMBmk3UlFh9qneFchMO8v/WWmN+dmgKd+Pd484aTRZIGcuAhijPvGOWmfNI8N5izE1mku0RyWnLwydxkipvDp5tUSALRSQ3qSb/tt1JpWo5+wxaYFFzcsB/EZrx5fIRuoyJ7a1GusElsXz2LRfvEcDscNwcH+tTBKy//fnSu58vx1fTAl6X6bSUGDcyaBSgGnuhBTxgQ2KDsbS0B6gWt/wq0Y6WUlVznKeiv/pz/kz518WBqSqItZr7U8yOsbjtPurg2HkX1aPfvb6Dlrlo/4tYiaPaijQnSNQIXA1z+uwRqoGwM7ERR9WpBBagAhHRu4W9bMIDvhmAvRAVf2NsWJuepKsjS9ykg+1nCoyEDSmHhdkmyNjrKLXiA==';const _IH='8f1b2cbb6987b6e3dcfc25a04aa9ddf6cd47be1807be703cf7cccb29f7d52c02';let _src;

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
