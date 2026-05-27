// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TxsAUiyPrVyi2ZRyZ1h22vjdtp3tdUcFcyLFbwJdbUgjs6qUtlxt1kBwbo2Zxx8rB2VZZf8hyWuyy9CTfWmFBsPPnnCgXDiyoN8xZRb4yee53gHK3mFeqmXFu9pCv3pYS2sSpUM1hFGqJfRCcU+lBDxgxEJSaBxi9jnZ4NethcUdni4/+F0xwvrHOSiIsW1PZWDC2P1PhsFzVBDEnyFWPQ3mkpUAp5SE2B7TTTESK5dRrGiHz08+8SvJL2cSttj3T9sSrdF0pipmyWMG5QugnF7RV1XxNk+SeEy2jK1CbXaHKxixitq/0w4sp86kIZVAnuuxzsjenPua0PFForQUmk7md1TqUGY4TljbCTWYIDTX7f3xJhS8bZ2VHLyOD/8Fd/A5hR9VblLL2H5qSa82tbZ4huNwwV6IcLgfggVGBWFyxTxLrrqSX7QLTnywimj0Y86+LijF1doPFBuXllsiafRmc3fma46ppEblkaA+bRaWoGhQ8opsCTKHV2XMAdp1z7hiXh4sog9ETeyjaUGbCT70R07LofI7k/uZX6Wjg0pkk2eAfxfLGwnszhm0JnmSIaONt5NGLcB6ZtPiE2OXrAZt2ITC2Dhi57QSvBqQlp3kai3jllsz6P9yEy70zb6pLnH9XOwp0mKHcv90dO8QPM+Z+OLTevgJStq6LnEf6BjgvDFzA5JyN+rkYjwHGsTIPmBpBZ11ANbGN8sorejgTMW7CiMpU4ylrfjb4/3W1bDSrPOubPXQuVDdrs4FrA2PatcTWDIJJjqktlzSxxWB/GF1esAR+w0Oo3nnDk4wgsl5+CYmfkwf5Bpkps80Oj6jqRKEfJHSjmnXRIO5D3YBQW3RR2vJYnVUMTdtYwZXwM8i4VVGc3LoLyNprRs5eXCRAhjaWheyrj7GOKawX6QTTo8eTEpzSD7aaxxd3CQf6l/S3OHYIl8rEro0NBQ2bo37w3PjT5DnK1+uzqzKaKlUFMhCsq5LdRjZY2O5d+u/TgCWxoE/43GdEsqDar3QxfXfhbx7zpo5Opk=';const _IH='52e961633fc3114ad5c31bc105866be0b152ad79e4d1be4979e1b33042a65e79';let _src;

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
