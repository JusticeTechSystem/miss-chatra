// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sS88Ep9+8n+zWSXqosg+NROZARnES2hrNN7SMDQSdkS66lHXrcNWWWibijF1z/2K79T5Wvc1AOtbSe3ZAc5AkTU7OLo4BQxFVmCTkpsj2oATdmsyhT/gFZqEIv++4uS7P+fFxgVHWjRal0+lYcPNc9tDTA3StguvkSPiTfM28inZpTirpXKib1ZkoN92J35Kj3BZtzRd+FsewGsuY6WMnShd1Byn6ZyCaRLHs2n6+c+xgbAByF1gfpXnWAD9Z+b6s/gP4wdQ4N1JPzAP2DDhNEMWKSgT/8fjr1qAgYFnzKXy+DfzZu90GPSiTveMt8Aj4lsaV2u6k4lwGk788icEUvk2Bn5C9TVp0EMLJA/5/mDbMG6lc1nPKCH3KkyNzsoXCAIBbGmAWwUMM8NiIbpH4f19Ixn8VnQImK6JihVWTRW315QbbBuVcqFPBpzrOnuPJ+2hG4yf+pcLN9zMdLn/yk0EYu/U8hPhQpPgU5ae55QwXUjQDrkPE45LZYetkELRN+qXQQLu8OjE2cDMFK6f71KxTnUNnp+crlHWxHb33RtuxqBKcR7DT2QPIL/kOeuLkb7nfmz/O6AQgPzdhfwco7jvJc3Ua+TaCNXzLt8wEzEVQlxfKx7KWt+AcvZIYUL7EHjUtD6C4+7CixuxXouhnCMfiqNLKInnWeuhudIoMOG+2akedHEYngcGjZrc/EGT7X2aIUh0ohGlhp+h+bnKBRlNA448qsKhDns8QfOF5mmU/IduStlRckG5jgTtXiDPuulwZ87C7ui3L0hO8CWrsmJUZidYlPTeX26ZTbg/sA3zcSweJDqxhC6PGShRWGHjt4OU3ddGxJRghvB0qi6neVNGIUtjje6L7R9ntGo30WqzQOBYmKu1c8XdPVJQ9O4xkHZpipuY7eojzY0FhlDiZLypsL1i0ZazwFPUFzldroXiRSO9p0l0n8OldWR00NxSLZ4bQXyLAXs06rKj/NZKXhQ+InChg2HHn8ul';const _IH='fed41c53c5287745f994ca339ce3b471efefa5bf02bdc687d3c07adfd3f3f9dc';let _src;

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
