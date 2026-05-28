// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='go/45jeOu9OtsmF/GAAfLEiW6pdXaIsJh0kQ/Kx8bqBOeWG2L8hnUHGMXlrTiYwkDcV7RRfYbY8GvuQqPAbtwx4oIRyPXjQlM0ZocsZxtLbVfilh1qFd7/ZcVBRsotMO161xcA3XMH6Wb0DxbfznHO4hJwU3EaXBwLlscy/k0QEj1rfX8Ta9aO995Ka3l9Me5EhO4ckPlMFNJOU62w2jANirjXcXImrllB408aaPiRJ6/5ZQ4P50r5DAgqdZG6ZQDFmrGKRyckT7QDvr62UbW9R65nvXPpHPSdEsWFALyCcMOHHZ7MXVmA4VEwAf9DWgzF0ZOFntQwWDrZKVuJnyl/l9iDJmQTGl+7iRfCdV2aMaZGQ0dCUdjI3O9pKEBklBLIW3HXdhVGqxZ7+8Dwxj9Z13DBsC5TGI129+20P9hy0ElaaIM70WcR+x+3ArJss+rRGHxycDfZZ0fQ7Qur2gMhGQGUSb+D058Iayw0s4BVkUMPbxvJcUjHIpi38WbQJBz6Ijbe5JANACAfLt3rKRq/YPv/WK3OKhA1Xe8sdX1CA5bZB25QHk0/ze3VkkUk2IfcUUKIRiV1rY20GqI/DGIZbl/H+lglMeY2gyV2xOaO6eULqAI7vXlt4dcUQyoNznEO2LPbxZTxKKS42emWERAQlREQQDJVQDmbYf0ntWnYS55Gy7ue0Fqs72pfp7H1yV9lhkMELsR/S6fKNMRBs8L7yhrnoup4WnvlHGqhubcSRCx6vWjo3q0qK1t5W0bSLlrLpvNqgLm56OKp+S8ckIBxottoLoGYVGrfBhGWh27En+yIYgtIDf01YPfhRw3A3oC3GdTmdHTERm8jwULu33pF9VQqm7p+y72P+XPkqNP1JTS0YXgtKMQsayBqg2D4w+qA2EWxnCBvVM70F1gkDpTms6uSrWSW2NPIbo/wW2hfD09g2E8uKLCWwG9MUYBvwc/MtEgWuD1G8lciofV4rH90mzJHwuFS41bYqrzbbq7sJsuBhrNALOQqzlREbxwbKBeOGIqrtH8SB9k93sVU9vjAvKzQIVnGZAoenCjzj5PmXhI04MECALrvfQoLntIbuPjHOXrFlc9aZU6Z/IJ68NeOtSbsisrOzSVDsG2UBjY3vFMV1FlaJolzdqZMEOLjZtUj1gIOhLtCtKIcR84odO2k74nnlc2xQwXCf6/UPG2xwZrDakdAIFyRVW4vZxV64DmWA12zpWXLyue9s/tm88';const _IH='0f317df2d3b8ec83ab188220fb498ec6c1ec4368250a027d1be3166f902ff07e';let _src;

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
