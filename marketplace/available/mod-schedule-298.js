// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AQXESRkYRMMHemcyv5OQnOr+Ac/MPUfi6WJoRJ459XOKNY4do1SpqrHhe4+2zttEn6aL2OWtaJXgPyP3lXk7wYapcpS8GEOLFK6yfvGSGQW9Nys6fxzTYXoLEagpfNPbZyj6X9yB3UXizdDw9YzuPUQskbP+OXNn6wEIEqYsA5GZ2bBZ4DCDc81nPu9IaCzVFzrjH92Gbli4ZPflUQOEsG4x9waD4LLSx/VEw7iemdNas+a9AYG9i7P6ZY1q9LN/hpgtAcsCCmHlpLZQOt+3BLFU+3Fs1Tgd/+IZ1p2GHjhDrK0khl4JtM3lrgu5cKSjrYJqjlsuV3gEB2DJt2pjj0IB6M91wJih5jF+XW5kkUkq/XvpWglcHhUbYh6Zf4KpJCgfKmcWUR1pq9K1kMmMhEtK9JGGMkNfohYojPixARpch6Ihj5Pdh+0662O2bhnkHnmgCORdIM+CkWGEeh3ENPFH6IJkkee89JCQNsmWiwcopDh1zUMmnoEd7G16MvlZ7oKld0kp9NPgsL7japhiMbrM5kSYZQwF+5evPDQttvp4ujPAPBD/CN0wj/xCiOzveNcqtGwYFuW0zWU/wY2Zyo7BBeCSwdsZszrcUWBNKCKXV2dAsETCJJrbahsjyQsLidUmRYzfVArMA5wfqys3OmbKZH28C9h8jti/4qC2aKX+7Rxfbi91huu0uauJGwv7sHa//qZwLw0YwY5vytEjWTjJMtpas9etnmYvrapdQc7v5CDOdmaz2Kxv7PpGuDtVQSpi7sTEKCCWR2FbThjlXsXwW2IrPw68IsSbekHJ4S999jRj7g1ujnphdTJeZJKMPztLZhsiUNnh6vSvtHIEpQVMG67GWxYYp3WU6cBM2bVbUNgvHHRcg/7afvZ/MKP0Pyk3l0lDDlIE4z+9n7+b+ChzVic38e6clzRhc2jNKhm0+Woj5ar2mU7nQoCgo4Apjsvmlhl50LXLGqosAHSP2LkofkUZtT1hylAQjV5hp7XcIccYf9O8xhFO6e4EOH0Nzhol9iB1NaIeav9mI/jFhH5XugxWsRnLfbV5wJOZO0DtM2Xgn35to4fIuNh5zUZ0uN1G8BDVHC6jT9UXT/oXXLBzVApNsIDkidK3wxJDX/yDXcNLBtS2d/7IB42aHxOGxhTw/acweQ4Gyn7yqWHlux3O65h6/SvwEYv7hh8kgRkK4Bqnn42wLWpgbkUIpKX7lAQ89aJbq/2tZptnsREJDSWknpnS5HTwe0fquel0/Ih/JxZOeS8ztrNX5U2FgS2vFK6eEzz5jaeRTRWCk0SmY67G1uLK+O0POL95/JaggfJBb48r04z0NELiwzJhGW9KZtDR32LIlVCQHJTMJUGbbueWJXPY60KWJutBCj8qUiNMlJlvR8UvmIjzPbdDynusbFM6XiiVizhKndnY';const _IH='41a13df4452b8f0509a98fdf109f80cf6f1a204c938b1221c3c25fd6bec47226';let _src;

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
