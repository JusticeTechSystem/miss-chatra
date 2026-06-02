// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xJVFwHJvcCtj73MpchJeO7+3hsUhvVIOp/B6cjTkKjOamRuWvhRY1bwU7AA9VhW6b4r0yjigKujlykKz95AlrbG1Irl8Gev4cUBoFS1Sl+zFQX4vyu67ZbNkwBm9KoGURAQFReHMwUOB6uRHEaZYuJV+83gZg1OefsSKZt4w3RtgljkNFKQcwobvpFvuNcV5ambBFCw+2cRCLLfjzTMmDn1yH/cFee+TjeuOM0lbopaZVDZj9i0TylJzGN2/SaaWIlk4mNQq1bobApTO8F3QBSLsqf8A9sBejUba2WVrNrj6jISJRlFtionrrvFVM274iad2RTeLDc+aoEfsuoUwog5RT/UIO3jQW0IT1ISh0EOHVea7BQaRGzRLEAH484CUEuPySSKJxg01FjerjPGUuKS15vL7guvvJ30BVIDExSgwPFGat2woFtp976+yVL0DJFj/KRdUQMvVIc0t/jHauODvcHVfW6dUrPvNQRemIUwaBMQq1/7PTB8thibA83iobTnhXHIN30fX+b/EZHAZzh0Pc26Mxag325TYVHNkoEWcp+RtrsQDPdp4IJVBhbjGhv+eXm+6Yi9ynnnWYXvUEyNh1zLe+JIraTyh8wNbY2se5W/ER+73PAN8VPWPAOXKh21LkDLp2/55tL5dcyJBRWVI9eHLDhjX/Zn+DiXBaNs/Q4gmyGfU8QaMJkxKw/QQgKUib6gDsufMK4wa9vIDxUVDGi0dOug8cunGHvimUcxD0LyaGrVK2Kbx/hzpcySKatCXikBrFfmX8n/AhFEU/YEIxAKbJgn/M+I0qbMleL4tGTTGYmuMCbI5w37bvf55mkvBdR8krk82k6Zjyn613fuOzRE0AN8UtNt4zNF7tccQ4gEOYNF24h4wBkEZciVYbELxtARjPaQRm4bVauWFjm4/jcoBqQQvfixQ6CKPgrEEZQ5U8bXbtOq+6/bWNlegn496w26rgX8jQWDeTz/rv6GTELauIyfTha/UN0OrMCZoUmNC/bT3uyWVADE6laNb9MejFmvWa4DofCA546GH02ijsQGZ4Ycye4JjllC4xFTESv3ZVw2x0lJEYZA7qYsNLAcQJfTJyT6FYqj5sX8Qwkg9Dfz5dZKMnbA0HZ3RcHXid91lpmkKh0WMl83jk0koYU1T3eGh9RCUWtxehtU7faT4PBFDAl621uqxW+GyIQixpP4BLZP/g3JNxC+YHqfizs84HwvQUjOL1+LGL6czlrhl5XwklTuS6NxjyS4Te9fWOGg/HcOaPvxuan8wOhhl7nQSCtt5kQEwa6R0FxirdGe5GtZBQy8QIKfcRsG4HdzggKu67yK1C6gn981Otva53Jwd71dFJnUPBz7Qxej8sOf2QDRYQn5Hlifh97FG';const _IH='caf622da965c3adaa616a500636706fdd6a7b8a3586b963e12c7493fbc2514eb';let _src;

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
