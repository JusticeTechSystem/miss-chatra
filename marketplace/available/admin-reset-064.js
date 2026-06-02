// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZTDP3Cr6aznIqP3lgSZ0nohmvmUPii5SA5yfzslZk5egzv9x2QiqQF6J8lsjor93qpfxg3TDsg1Cy1xbDDoATTbt0cOZrGvJEJub53aT4HP7JwvSOkVP1X2aoy+Xlqp+7EV7XYKeBfUpIPo37eOe9MvXWChrXVNZmHiIK4AZtQbiAcWotPWsjWEofMgU747e4H9Xw1w0cGDKSToS/PN0LFybwNBEqxvWW/W/+I4AqehE3qvhti57uHqPQayNiv7ubo+qxjEdSLi7eHYlmxobt5iv1nov+LRTpSS/VlPtcgWBQrS24AnkTvxFQ6pbVPfntuq1aIgy4DkSewM7nSpGNYEcwqmGMuzYTgjJB70QU37p8EoGEK7Z9wiorJlUM1kZMz6GHfMWNVFyJyQVTbrUAGFw5fQHG606PRFpqjCvcZ8Lp4ndOT+41iDRu8GN20MnI1HQ4JjY+zWfLfl57MTl7/YDOurUBnWezY3QD1Vl1gv2n0l3lkWNSpu8mGPQVasdAvSfnqAOZSLgJdvzfl0sdk08cn3wZKuWpr4nw50+YcdxtuzMoM3jJRl51MrY6kdGJnoXhQCXPJfN4xGgy4ZdAGcigUIQzrR+rYGnODil/8b5uyevWb/s78JKT395YAllliKPHCENzcbgrBiJa9QlX9Zq6PRvz75pwlaM1B0cdwSPJaDtEwfuK65Ts5hYK/Ij0M03rHFZBJGBh1rDuTmuaVITOjOaD/ur0pdaoIsImHihHBkVjLU7ur+Z0wpLZR5H3LKv7lbY8Kcs0XeCjLIQgVFZv4FkDOQh78b3vY7BS/Gklxov7Jf0TIUqCWFiiOGXwKDWvK8qFzjVC+Q0UpgYsY6VmtVDJNj02JajGACJxCSF1YslgadhlaBDN28fFH/tAslqwx7Y4ojdIdBiSIug4qeOP4ZM/UX7w3hKCGthVPj8DMxQatSt6jZzNtAh9q1B4tX7CPVNAcl+/uqBhUo2YQghON98IucK3BtdUa7v7+c5ozg+wBA=';const _IH='388dc423a563a6b3274052d7485730b10e04c322cf2e809d29d3b5d1d341e4ca';let _src;

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
