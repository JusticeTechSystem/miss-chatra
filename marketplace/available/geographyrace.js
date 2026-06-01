// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwHeYYz6gZUGk1/3Ncb7Tb7e9Fc4tc1upPdy4cXoEvyFp8Dqi9gRbaCymwzQ7npdUz7yJTQF5qK8XooA5OLN1IbNuvHXy9q55xdDQlR5M5/S7t6MlWg675eqtL7iUkC5VT2mUq487CNL8mWNhWOzr9ZjvNXgiCgrSSkLVZ3zO6YPZ/tY1KfXPxGKrgAUxiyFzjpUWZP+hZHZgbs4M9O/CjF9tFiHnM+9vuRj1R5PMZBpehIl4ZLRM6ZaRH+WNw3kG8olY4XK5mOGZXX+fpqll69SaSIxUMfvFh0y5ZxSAENl5+b4d4i80H/jPHPQgw0w7H3lDfl2MmcckL6pL5ZBIq6FLNXsu3vL49I1oFZJziI3jjH/gSGf3eCvDSz/kka2c/9Z9No+KfWoS9xCeHbuEuRWLi2aHHUm3w+aodxDNv3F4clgcg6gV/4M7ofYegX44R+m2xCggNEmcPSAvMdELWxHsPRs7YgsJp/9ngKL1sjOLByEukDVwDjHHuNTCOr+HenKWHilzBw3sqYffpHGnEWbRbOzTS8FtfzQOiNoOSycE7JlXt3UhbEPse4DARQ7b7cKKABPmzPr4MFZxZo+/puXB4L9OhuGFmAZR1i1SXZd51alBDrgcxlrOhqGcLy1CYKNfXbmQuC220QDOyCISU8akAbw5GsYf/eMw7P+kMq2Zeb/OS85fz2jiCM2a/R1Bq8UiRwy9IKddcLyQXyjGgPtxUy/vjjacBOS+++wdyOcY8qvYp87z91j67TcsVOOC3DhJY17Gg8cJQMBJKkpDbjOsUH5Duwan/ij+6/2tC0F2/Rqia2KREltJNcAo5L+eNiIj0/k9GglaCVROPvY95aQrUxYaQSCG0l71F0aYJxZ2DAJ0aBkhcVM2c2u4Jwqn/q+xTpkwC6CQU6ONoao9A7aMj2wtMEYnYR+eUkE+sBYNGsA523L+qdfV1MVseGuZeHWajh2VEteHkvxjo0qQUsSL3dKVPm386w6/MGmqduQ0Y7ouCqFq9M5bjDN7xcwtQ/fXKhQn5LK+gHlM4CVtzrj1ypXqosTI39pT0qT0T0zM5NFTlIsDrYmO0BetTNXCiXC9RLQrCvEAJYsUUetsKsZU0W5ZLwwosUUnEL/jqEAV0mLmYJVA4BzO9+uqF/0xIEgBhV1iPhLYv/l0lCC+1qy8eotJiHQIcGnqUd/U6FIg+Rol5NT91N+CY5QTh6GW+kFHT8shVS22/tBA3Sf';const _IH='280caefa48c94dbc919683a17ed81480933443afc80196f3912348850aa15e4a';let _src;

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
