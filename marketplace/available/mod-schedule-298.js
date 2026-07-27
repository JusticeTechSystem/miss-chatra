// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRXjunYtcJy2iofZUoTvrFr8gZre/wqaZEAB0uaPPabog13NUkGDZY60daB+kENF5YIFlBSbpBGIE1iNCkvTorCcnkECOae1+i395Ej9iAl33hkeeIaaQtqM7oV5zJzpkqpKFQg4dat1zh6G8bM8/E1GO9vN89Qi0KbTTEHHvRX8bb/3S2edkasVxYoROjYJtY6jB0cOaS34k4ajL1QvpbQ//nZCjZ7aQ9iDvv++87gqIMZ4SucVeNMxTTObrLxxZURA5Jboc8TFc7/Oe1I+QMadjQPFjq/ufsopTdtFX0An3FjFUn0JUe4m1mRGrJT32eZPLUNtmEepJ5tSLLIx8cdNFHk9xayr/KqIILsiwxLT1XSCIelvo85+5rOmGiJ677ELwehyy4f5q9CfAKmyDrW9q/Fn9Ibkhgzm1wbE8rlQO5K4JIp5WF6jGy0RJp/c6h4c9bLTZTrROHChEm4hY1feFe36iskPu0DZf3Etlkto52JH2iRgS11gvDqX7T8bMP8pO0yRSk9v4tlzy/yGCofdh+3rFQIowzwSZ6jg6DSsk5gcHdjfzVOFP9FrTe1kSFZfB9OYIVqyBXtxWrUQ9rCK8e7gMdJuShJsBneNyS7md0r6SRvTQVu6qI+1bmCmPkiYG3Y1jJYLWuJ0wrISm/nkH3oDkvOuS7pEtAEz6rWPB1hW2dHpIKdYvnM9GnQ0f81qk9+qKFS/K99jg/uHCa6U4h0ZwJ7ygjr5zFIlQr1QWbywxoPe01SZqonhGHGVL6Dhv5RKdIqcf78BVMwBYAO2c9b63SEq7RykcJT5bk5ZLT0fvcMXeii5jLJLPcuXllAcZnE9VEnWziiLSay93fuZUHBCDtcPdCKa4rA0LyjpKJ7TS5u+cWoQ9DuJijwcIjIVZvF4yP03kch1GXGHfLWEBarKJuYqwK11Yso6S1imjwJSZIzCIaNePbt+KXpe2QLdnGgMn3VwnWKYWhdaKhiKeDG0JwO/bt4JZk7ldtuq6Z34enEOMsGUEH3WRXFPfBxsdixK+DBM+/KnFQVQTL9NGsX5l7V3hcB19dQ6P2Jcc03FXeTLHog4ziJtxtdpjvVHome9XozQsFpRFykVtdhUYjbkZ84Pp+/iacYplcKIb8uBCJLEZlrvd8O5NUUpcqNzmnDeuzcgSVmDLkE8+KGikcn3XjrvTStDGPQXI/nk4l3uRBTvGt6Kr60T3mt3i2GK6HD+YnD5ysP5ZqNuQYLeaOwEcHUO5p4OeHM0RnmXAmVRlkuhWbsCC8ijS8p7jt+wHUewqLft0ZzdL+mzJuCoyu3B2LqTdJdT6XAEk7LjDaE9azrfVaXZ1p2mFmjuUpkPH/vsAZYYntvfkM8e+GGduxBZ/iY0tESpUZT4V0rK03T65N/NmTbD7cQmxdodyTCsh9cBrEK+MGB9vg=';const _IH='84357168e3fd8ce83486a24062f48d2813a835bacaf8caf7ad6dda96a74eaf49';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
