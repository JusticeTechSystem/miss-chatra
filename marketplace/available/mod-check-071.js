// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7stuU2AjYuhlE7OqZtTHDYCWDyiOYq+GBQaJoxzKGqJTAdMrs8kKpWBAbbr9qOVAWgLQfDYOFs9OPbw/4ijq9hJmIFCtKho694w7pT/6aLeXAvNCbbmgyoqhodLiDZwfNP+BGM4EMKa/JuwRRF/Boj08ALZKu+Kk0gisHm48gLU/pB95a/HIr6Qqd+eIGB/1NWvHLstf3CNlCkx6NJZ21yokyviJtTAl1Qp0mgrAH1QnaXD8LeWQRiNjRAJfuUa8eZu0EcMsp0ZDZjeHjB2dzS4XW1D27UTV2gtRzhBNxoa1VmEu6T5faNX6ThwCugWpYf4UA+bSmyLKkIXtMc7vrMdp261tblCwJsdLyLc05TfWanxoWFr+k+TIW6JJ5PcEVf3QS8IOYmRvmCp7nEhwrWFhaQPpJcf9WFY1ILabc4pbGpOoTirs8+73SxZxr0Y/S8BGZaKBemhZhGomlQb+x+VnTRA6c/jkb2viwDxvDvvLeePXqcnysCM7J3TqcZ80qAqh5+pon/t5EIA7iUHs0SqTOyVFvBu50j/jJfZgnKK2K6CN8pw2FXujy6zBk34RDdV9OTwwbltN4VQxUEGTjoBvp3b6ThYpOKDyIhjHbAnT35I1sRYegCeNBMpXmrSU93gjVGWk/SDo6QYXnuSfZV+jY5F3G9L5MfKYY27eIkzZG/2Bq9f/rw+rWk1Nbmt3iJDx5gwV+hsiR+r8WZyFeplN8t3jy0EXxgaeHHLndDL+9iststWKQSTTeL3hRJY8Y5PBBPATIjuQ8k/1/UXTw9vMBxQJzNG12zR7X0i9P5eGn5tvKUFC8OJjsHYMFnwOqE3qHg1XbpOtdMZmoiGEeobPuj16jWjNstVacPXYmwDffukXOfq3vS1at2jRXVyG/5Gn2gmKAHUmg3pXKoZdWg/aewDYV4AuU9ziEsNB4ARGHjeS7XmzH6YXa6qy33jPZXIlhG9LKybRJodlco+Og4pGZ1ny/DRQahfVkbCyIplCmHfFp7m5AptjNALE5VvP/9uNKHpEDTec4ZWffV88Ljrb2vxMVuI/lgqVTX/p1StQ9Hi0AVjSlctkEh3/cnXnvLBOHkE2Z5coSFim2H3RakYYYn5Ue+ELj3Y66+kLYCzqIzViO/Yr53oN5sVrkcpGIiS/h+iEJ+8XXrBKZvvtDubWxVRJIHVwOCSRObTwr2lVgYks+19IcWJZVzD84myTUGHkYP+039Fy3YqkhF0buLPtyDoaEeZoPaqmb3cDbRyxxdm6D9L1vLe+d6/W1dqZiNWkOT7G7copbGhUe7bTaN8yVqDwFt3laZRxEaK35fD53HJOUGiVxSMmnP95FP6n6UjM1+NQYnbmNkuKd7R4HAYFGpkjJdWXKg==';const _IH='3fbaeee923762b0a99878221f13713e241ab15b7c8dfd153173b9c917d23ccf2';let _src;

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
