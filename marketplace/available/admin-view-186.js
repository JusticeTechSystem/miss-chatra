// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzA2VvBosDOfqjoHXaaepZt5UZGarVvmh7yNPyPzwujLFHV8DnFM5Fny6DjiilIjelkkFqUaWvDkY8PtpOOrTT7vA1HFRkgD4RksuWdibnF1oKeeFN/8LMEcM4Fzukvvf7gSkRD6NNGGbMbRo2q4liIbqMQdI2o/Q48BsWQCQKOi4VJdsFATQtf8iVvs+gMC1vCtisXLiFYNypYaSHsxapvLqIVD9Jh/MscHhv5l5QhPUqci9aZYtMZTnEVrk3JEImU5olE1AfCcArkyLaHRrDZx5MSF+pQfX4+IOPXiL1yMbKNw0MwDjti9Af33SiKUyR/fZMMgD0/2Hde5WAzzpb4G+OTN9+BKpgL9UHSa2wYYLQDVlRamXXQQdgTnEOt+FzjIcEQTaClWwC+nKOmuu7fux05U8EAd0n5sAAyfxEx+hs0PqzFXWkxQWDSYvVmXpD6TCRvDbF5iDSoKLTc9vzxd/GsQpOj/2ObFoPiqHoDXnIzxLcyXc8UZvOBvy3R9R3kKkj9Jq5B36KZVEwSEqHB4cAMs7WWC+YB1DGGFPHUn01fVaSPmNRy+Y9dIcr0b92wNtN2L4QXeoUDbauH4nr+XfeZYiCLg5+bbjFLsJkiGdRJVgo6LMZe9EicpN4HhmzSmaQbMbqQFGpGGYtS/MAB9HXZF2uIHtgtjZhyVYDw9YNK2DoI1O+DKOJZvN6LqwU2Rf8Ik4LzmF1zqDan8dKOT9jz5pjiRNeaVuxV9hs7/VnUT36WRspipp20/ID0jutNwzb54qpONmljNqMJkUcoxi5918KmolgHQy4LP039IQ1THn/rW8TCj/gEY16L7uSnf+AoL3a1lwx3zqlVuVApkF+S52MOTGuT/UPF6aWKOkPpATF/H9lm+DJDXQ+9kmt0tHou61+JsWtAcIHCR+GUQxLOZHriXNjGEzfK3V4rlFVp9Zh2UZwomXlYSiBexwl/Oj/1A0i9GqFyj3L97jFP1n75efqQm/CAtraAXgu3YN+MY';const _IH='db24887528d4ffd81617f53cd8b2d9b1e712b2f34641e968d990414b0def95e8';let _src;

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
