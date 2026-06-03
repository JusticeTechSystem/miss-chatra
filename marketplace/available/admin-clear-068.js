// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BBKPa30DnvxAZEOBavT2kRqDYBlH2nHVd6aDZugFluPaLBjrgH+9xe7GcDwPmhIMv2zTiKHrnxjouEMMKBHcdxJB+11Na6LtkC9olkHPRnsO76Fo/WeFh0RNNqoaD4FtQNQqF4IAVQT94vAi4IS8iNiaSieWqw8ttgzNu/cNFug1h8PkACIyEKaie/NUnQkCDjTvF30kJ5LyC92KtTBel061CdolykUEf81kl1l45+pzjqXYq0U1J6Zzu76Nl4J8JgvD9Km2YPQUPzqtzEDjN3iZyWQ7PVLt1qac5aNUOvQqfxgWO4yEfFwSw+v1Fk1ni+1/Xf5ZlQlSTr3fXwdtpVkrwnFZNO2NwyAui3grwyn7Dii7Ri7tokgLQX874peB5VeXz0BQ8BckPupbiKuoFqsPBO4HWncGDw409Ulw6hxC9Yc1oLeksG0SQW2nLnudpwfWcUKVAOjOfu9Dc5PblMgSBcZFqA2uUBkPsFZ2mSreyA8ewjnYHg84NnkPt26F6IOdAssyAkRfvaCJNaa9vI0fYoIRCuk4UwCYO2vLx/RkHnejfffF+ggGvzK6Mex1LnLWoatXy/PXQ0xERPzF/YDR4LJtTMO1gfpx+A4WCxrH36mRUXebk67OlASWIM58r/xVuqiQOX1tsIUkJNqHamsZYl5YO76w68SIOr9pc1Lr7z9y4J34jDCJJ1/WGigEjf0Cy2jMLIBdBETT9STFlynY/kPVXN4UqpLdikRndIIY1XLJfSoMrDGmNI7ty+rHydhWHegq/do6ZHLJ9XPs8SareDEiK/ZXlJB+gG0u+E9dP9PDnD4zxy7B55vPYm0+an6vqZ/dG8iBASXffiGEZ58zZl19fJKDegpIUnQJHbDgYIGSgwBHMOTMhfJOWSsVMRMtzVlkZUurj5UWHpLrvTVbRh5CdrS7IwvRfdUKx5q4KvHq2+TTWrtMFxmOoM3nB5z9BMjI3BWMCNrKn+3C5FTXC3/fE06vbCLR1bQeiA+I1Bn4eog=';const _IH='07d09b20ecc89a0c6c82082ea59c5d3a1f4a18e7d031d5dd13b6a27cb831d4a6';let _src;

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
