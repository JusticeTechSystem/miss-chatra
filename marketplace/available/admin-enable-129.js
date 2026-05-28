// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='61Zsn1h9iQkdYFPIou+Q5GFMikpwc5wv5S7bW1CTPXAEf7Hk6QjEO2zraKCVQQjg0dNpMbe0dV6E59A99Tm34XxcD1yQi2nTu5TxB600IK5tqb0J4/oRzQoPB998Tun3taaMiJTlSdmoUvTe7M3Q6WAdMIOBYfUuWdiiewmvPEhtOtw3TxemS91nBqaQhl18hVuRv7NZ1gP9VzJ1tACSzuC1OLAk0lVUIkhRRvKWwVeA72jjLlA0mvI/lpGEaysrs/olLwHYvYbSq99gcC6AMNLYlmI7vhVxVB2rr8DSuaLUa93fklW1KDV6dMkeOh2JxhE6pMgc0+Sk77p1iL8eRz6vkuiELRIEauHcZLIxN1eV+0JmrWMWrilo16NUsLgWB5ztBbLvTU4DNrGflkcAVLqLJGHnE00dYlDOc0vNWSgBqoe/wPZ6VZYn88IKoLuPj2nMAE1AfooVI0dnEQeG6cYaoTBIm7Ao6sUZRKXHafJ/6jukMkkLxM1hxsKeRUkt/QI4SGc8gZ+cgYdUp1AlBmX1GiqpTKSSbw+VPqb6cCk3q3AE85S3B40dnkhSca0tZsp2BMPej6gk9nia0LMJc/8ejoINzQ3WAq8DlJeVzV7T01eeXugs7bF5QUp7vmfajo02BXhVV4lbYGYchwteBM8epV+T4gnkC0RDTRx7MLaMz+ea91Do9uQYAOmbruR8mrlLCzAJY6xdevS7O3VU9NPffDKRJvBNXSEetbyBAIt/KtNt+iBv6zldqGpIEhWeg8a3HzMsF3PeXdRWeRTk3vBUlC9EhXReQTre9lk2VFDJkhPQHNZ63xp0qlulISuAbpzTTbaraQpXzW3VQL46vNMccP2cM5DhjL79xU/yVabs9CuAZ8XpPPv94V4nAaZdLoUoA/CP+ZBqQKQ1b0kWH3UwZS1gVTSWkflDpQBlU6d8oHFbc9hdvDy4RCQ3aRBKC+IHu1P0iw0RwGLRPpgegCecX1BtCIIdPi3JQTrFLN16J2LoBxC3CaIldUpxmUvElA==';const _IH='a06064dc5ec45b8047f2cbb7ab9f34b11dc555afd51589c1ead633130cfa5fc3';let _src;

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
