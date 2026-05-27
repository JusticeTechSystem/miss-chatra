// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='686N24MmvIKjTtlMvT/gU9ftGzheUjCq+EPBJtFs/22QCoKl3EBwC7CysnfjLmfUKDgut6eyX9AFn7g9ojHVoCO+SLXeEEgvEhf0MTYA8Wg/B8S4KZQc/YclGMrltzASsbsU0gTXj1lBZE5Ol/OBfxbGNV/on8eFKLzF8VUpI+YYIX7VJmYVajIh+APCET4XE8MVEzRnctF/484Xs4zXu9El/uhmtRYk7WghODQZA2H78FiHvFA9LbSuNqMBTFbiEouKzLUs6LFpbpiYfUfEkhzKZlsIBoZVYiNoIdcx/smuiZYtddh0LPUTlBTRpEaWw5zMfFoj0VWCj1gNVTKENLLkjZmcWMPmzNCfcOCcwo3zAd+tgBcD5m/j9fdTV+sADIo2B8f5mhW44SrP9dcKMz1bOuW1Ztld1F3ne7m8A/0k/XYl+1EpyBt4UAzqEZZ9ZeZ/VlzWGRX3k5PEpNn74yUWif8DfzsGcVzGbruHheCnY1B422W//mrlr7A/DV6s7w/fpS5RiKrXqJNHwdGyul9FxK7fCZI0KmEvg3i/fRb/YZ9WKsQQ78r7KYOF9ci7MAZZpnOxXa8+NIapXtx5Xh6Tgmjewxfv67szhuGvLyHeQzHUzAzrTMP1LVcWweYMDDu7nV1rwUvxjLGKWiTNdqXLqK4KxV+1WZWtU3OsDioSdy911fBIijp6xj/YxFaMDhSVV2zH9cimfK3zjAReap0EMC1R0aWWLQ==';const _IH='03db03bc5034605d967fc686a6cb01c8b674af6e9330cdab3aaf9e06c28ead03';let _src;

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
