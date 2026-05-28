// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q1sTTJ4LmjDz8VrcIlQmPkb5O4sK+6pg3J8U7upWdnyG79eMMaCTXcUEbzM6kj03szVHfAXCMBICVFUODYHNX2V+gyGMvmwKUFhm0snDmvsFJx1vJQZlzSOqzrvG6wYk0gkL3ZUHcY4CDZ+W0lbw5uc7uhKvhvJ9F/ddhXJ8abAvDZWpNBvuDAzLEypii0G+Uvufdmht6Ed1+4Kv/QpbLYlOiamfdV93mX2FxUoQZGNH4wj1TJM8pLfNbG1SLb0WiYyS4L6NTBDXB4r4tj2V+KYltbDTsHYPpSSqUDVhzz2W3tfO5b63I1WIBYY9aj6icIvtuXnsrR1ROWTabSksldB3VHfwMxhj28uYex2zj+AUkA+mohp4HdCOz0Uqovbbm4NwBMYKAWAtrSi3uQjh/6d0T03yfCt9x3DaM9aeP2yj0YobSR9NDV7vJQ4g3tbHfiP+4oAXV3WLAl0hnRW2Yh6ER7/xoV8RDJK0osMG0PqqO82OaCdXffpH/uVzixLpj741j4UfC/kUFrLklqLL3fa+zr4i9jyeL4aEQooJs3By36anbWdwblQWAL9n2NGMq1yq6bCjFqmYXjecQ+6cvIVo2j6JggxGuZXWtzehrjarsnu9K8zGh8tVIpRhlLDHBDTJKm/PY/JKC0U35SCav1EdVTwbeumAFcA5VyOr7LQnh8Th2s3J86/oSNPeX8KpETPPObo9NFfQ38ogcxqFuxS7G6Ui2dB5GiJnmp7J2moDVGq94Kk=';const _IH='a184d90589616d6d54b68b0075c5432a40b58c5c13566a251f182c7f0eb9801a';let _src;

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
