// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7YE6+pNEFcv3c7DgfJu3qJYXqlwANpIK0daJvm/uobnu5iLkGm/67ygQ29ssbu7ncUEyEbsJkB/RZC6LvoA79Q8bpnJvJ23uRESc409QH615RHNDVhv2cRA65Uid9AqwJNi6SkjLn50Q2ShsGmv99XxKno2AwbKAzIZ4pgN/FPRPPaFYpBpVjRnwFwU4CGiZdHcTcCamxUgf9yhB4S10k3U4k8BH7gccANZLxX2tO99/LzsuNmCZU2U4p+JRTk3BjbqG39nYxcFE28iZKWgY+zBViZzuSVaN/pUVmZhkybBPOy43TA3KYc8+G1eiBq2oKRHT5To+6mak3FksKfhaYGPj8FOko3oiyiRaLPkugFPe/b3X1ScwUaeAiH743TzQM0fXKomBMi/cU7qgMTS9U+PAfok3cgtBOBnqoj6IBEmmubyNnr1zstdtEV6VlN6EPMQ6e24RV9kSvfzFQNTxHt8fJZsIHA6ExX08cjyWTl8EJXbR8GEEZ/Hz/RSc45g0nGabq2krmONw0ErFFLreHY9c+Z7GOru/+adkSj9L7YHNe/d/LHDJBoKgAz1gdNNszpHgvj7hojFpdwdu8g8btO7qRdQEhYft/M+aLfCZjM/H7tMpHE+ldJLTpGITOwaaj/Mw1j2pa2ZGgcety8kmBQZIWc207QW3Zj9omRL+E5vyOkqkF9XnXF5l3C1Lmfa/IdTcN3n9ryJMFg==';const _IH='46cccd4b414bdcee9eb2cf7738c7d25729ef412d3eab8b8cb217786e45f2f558';let _src;

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
