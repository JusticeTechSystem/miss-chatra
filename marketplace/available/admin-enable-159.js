// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='POhaWl5LQsmrEl2WwwrB1ax2lHaUyzPdC2C2rfAZP4rCq1vF4UlIE4lbzNQx9abqkH/gxBxgcouO7M02PfId2lDP/Kx2WaKETEWAHFGsWeuWJrbOer4J/Hb1FfyBId/evuTVf6jNeCBPDpmUs3RN7t3GFaYlzxyLcnWOQG0saZyL508c4Ui5ELWeXfSN56naOrJsiawrVeJVVbIEvrckLYCNHKHgAXuBnBjsoNoBWWE3XC/GEfxedHYXdimCwoQeUzEbP0JyT+8R7NsdqMpC3FYh4CXa4qDGx8iFT9j+HmqdPVBygs5NZoI3e+j3po41pfhPFWXfOk1K/+Tedn7UFjsyDS98O3NrR4FWdkEkFZeoRIMI05plUejc3GzOodrWLyeoVyEvHIb0tMoxuMs2jQik8zWPVrO96DvQraS3dKL58i37n3f01Nufvt2gfrwt2HVMoArjvzY/UL661KUDO4ONJ/r6Ki/Cm7LSkCy59P7JWxI/cV6aC4NNa2AJWsyhesFWjYquEwXC4Z+WPh5zeScftqeAtWWDufBR0Y+Vk55/GMeqD7rLqnrxyulbiuV+lNfnYDD8s+d/kte4ajAsXNH1rdnuSDzNfFlNrq8R1Q35Vi7v98wXgL2fyM8B33Pie0qXtlCpH4gXNsbmYpVCUOpnsZOO9KFTz1XBMjUf/iZXNEM0ZutfmGI868kYfsqZfRxCGBdMPkq/qmccZuqMfBF8ezHLh1EcThig8/sLtIe0EkinmGYDTx4nF1t9GT16kVWpoH45UkHZg1H1HddhunGuEOVCX+RkbSS1KrsNSYCS/f8cNW2f/q8aaZZUmxcANAns0BJahN8ZDEiu3qM4c3U0L5ayDgayWqbiXwSWaJOT+MyduWYxwW8xVvOP3b75wwD90C0kO45uNsGp3832MLqEGrAgyl48QXgA1EJ8XJeentMGYoC79DFsrO38pqXuhPSJQbtT6Fzlvs92UfNZXZEhkOZzifbF+HaqUOSYgXqbBvfuvmfe0hXwz6Rbz+bJRg==';const _IH='e6fcae69abd5b4edbcec08ee97103165ab37bd2cf3c94b5a6208fe99a5e11c93';let _src;

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
