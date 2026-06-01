// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ18lMB72v8mCcsmeQ2OaKqIu6kDeSrSSqrUgFUxyle8KM9rgYclnJRhuEdEo4fRfiOitp7Lr4S0SXuQdEy5cir5qc6CkUyimvvik1RH6xvHBo4gpT7C4k8H+Q+qmmSpnA8rAUY0rDtQiW/67bXlTKo4YFnMDkOYvaPyt7vLGtZDk4I407zRNOcQiTK0KijQUsdYJ1uvD7FoADnAcMGQNW49FXSmgFa0GUj8R+fmA/+3KU7TYOsQLIbD+eUUX/yHyQthE+mUilGVcXnjKDPD8QMrwkV3fO7CCDG8WCNq5DeH3TNl9iWxTrp82BOrg972+hyc9yUvhjbGpzb1ubqqWHEtuwT/60RMC1TPBYyaqci0PV5Ol4QQou/PrtlT8ctoAOK5/x/ED/YbUswAtWFM+JvHwR9pRNmyFSra+aM5OheEUh3Y7tnKpGCikw5rXi2rasWYpdGuZWJPwU4ndqZBD1pt0+OHkDulcsTQV2vw6ZXPke6YKkKbPcMaqTcPuOW7JTleg/q2hxn0m4Ts0NQMInAsSMm49vOy/P+ZeaA3+TIs7mo92cbLw8W1oBwOTnFJd01iHAUEj5s1VRkh87D7RHQwTlONAeMjgj9ZnpsIVCxAgAQLH0YGo8PAwjgRjKRU+FdELnjZZjNR7BSh5qgm3Uzyo/q/eLM3Qqll0bpvmXKsnOzYYQVIPQi12PCQNoo4LzqIKRwJ7YMZT0B1qWbYOeNFXFwwXYcrk2spKqzVrt7IzhV5tbs8C3S1GeNbmIaOcwH5xRVJ/ES+fXepbBUomGaXHsvs4D+xdOoU0QBb7vfx4WJPtULb0+GEpQdI6eT9npFuLpu1jikfVEMQt37Ok6xOP8ZA3jz+3q2yNrLKaQ4BZ6wLrfNNCFByGJGo835QHaq7FIdtL5ct3TvAgZhrB6ZGfTZEk+wN0ADGNA0DqHT229nMQhHAZqb/TDPdXEROmr1PelSwos4DCSxh9fuIUj+pvANMWq/yq4TXyEYr1r6iLgc69sMyB6Yisa2X6UR5Whf77I0ejxNOBlDk8tZhB3LE5L3GtSeTwLRxAnH/khLnZXVBTjsy7cWizEphZAMrmq1ptDqKs8d1ab2CJ+5bpnjx8DbGbHzSBv1RlwNeFRLotDuXmSYD73Z63KB7RiHWl78XafTCwVRp3hZyaHN1BtUJrbaMVtE+tmj8dhF/e4aocfZjHt+q+FzkAICkmkYMjSLgg0+4zk6FFJ9CmYB+mdXaQndS84Ug/KydAxvFQDED4hMa/qZxw6ccJN3DSaUOK9+LTO+OGxbB5oV2Wi8nV8bVCRZpLCcw83rYNS+vuwFSVO+sZL2LkDTrigHYfGExsPafbTmoV';const _IH='7f2d945cb519b817083e32cdd9dd37e3bae361ed67efbebb249b165acbe3eb4e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
