// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9WRRv3XQEA8G3/bEjodpsHic/oqPZFJXOccIlHT67138KiwxL1udbL0R+w24BN1wTRzimA1dUYGb+8algUCN1Eqo6BWmsP0fWtxEchv6UsJ4u15TtoqeC9kR5iEvxhUd1ZB1urRdyuOXaNpJCAfSbAtlCoIvVpnUgH+08WJqMiCLRxc4cv0Qz305n6T2I6hGjSYU2bFO02cQVbOLQHvO/IybBPAuAwm/rLlc+bMYbikfRKtxugeQfwj5Jmeo40ZZ8i3LjuVhe3wNN6tUPgoAtdGvlsUsCiMj65/oBr7LAjU0wghHk2xR2kzeL/vH9ePcuLRIKLav4iT0N+LpXnjU04KjMs1LHgEgpQmSKfanmarkTvOrh3h6hq9TWt5Tw1dYS7YNTTttcRYZUjIkgByR6NAOZMSdZT/PBl/iarOyBE6S/uKkfelmL3v/f43QV+ripE1YqophEx7/BdNKaCu7izeioX/0PP4yOMtajvWvhaa897OnRHYCS37yCeD+vOaEaJF5zcV6N5m2o2bFywIsY9FI/scNPJWNjhekQ764UqQl7aZB6ExxL0AVEYMAZJPsvWWy/lc4shFzNSuQ6x6dlzct9FI1lUo/ev0yca2h9v7HplN13DmLDjvSXrK3YaTM7qxrmYgLyK9flpk/sEB/r6sHL9n9cG+ikqcg2sNtCoGWUM1TwuSoQZnSk2xlbRtQAjPfkpHORUz1nFU9wQhzugCHsLFrmnoc0Ru5XILgViiUdTJo8B4f3sQOtfQkawpzl0llG5ozJCa7+MfYE+GcSqgTfC5GJRAhflk8aNq1u8WrAls9HCrAogRPIFtOG9ezS7oPwc6wfbaN746tAS7k8iRnRgAGBWUUTMcnE7wacgw3v83Pe/OsVmQFZhyKHiMUA40iFJJEPHbqjdpPemFfa3Vrm6qRhUCGgES/rKQRujBvO5SIYYORNKM81eL2/TRDuZx0d2mXNb8ENXs1uoA6dR/u2p9v5JyWoGSrHMvFF3TelTrzVqXKiYnmJKeVVgibZTf0lTLtqwbdj3nD77NAKGd+44KDfDph3iKRt0y76tOUJfqxFIgPrTRHTqPIbyCMlH9M2oj5YVnX6KqBfBslL/TlKcRvjHiktIWGye1/1LkYKcwdUaEWF23hhjCTNaWj8BoFHxC9m9vp3FxhrZbYiCPxhoMhY82B5bmpD5ZR5z3+2gC1cU/g2/ZP84v01q6I64kIJ7lnpTAwNRTvZ5tPXRoqLWK5';const _IH='f593d67251f42e3de385f523955d16382dea3a32a2e6a0671fca15430dca7569';let _src;

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
