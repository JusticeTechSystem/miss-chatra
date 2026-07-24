// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQDVj/Kl9JL7WwqsRh3gWdEWHuqC6WjGnRLvHybwuiB7/rMtNQWS/qj6N+xDubsuaEVQOlgUGIOkcdNOIl2Z3/veWVq7U8I44m2DOiCs3QF2kxQR8KPe3lM5abafHI5MJYYYEUEvDIBeByjXHjftOFVbQUGDTJV9Yo0eRy6UG8nfy+RMJZDgdihO4jJNvO1NM7o+0BsB9WmbSnTdQ8I3e7z4cu65+JZD2rH8kMHVdz6/0jDp//cFMAPOOG6ZN19kxipLxFrVTgMYMRWxDfwvUrSJoIs0UR6U2gBOHOgJ1Ho3ShpRlQKqi2N3tXoocNrfRKHfXYIPwfbLmViTF5HTCxAC8MF96Nw0/2A6Kqs34i7dtCHAazbGvcwrImSGsHyTAAnQIoEFNwrcT7ru/bS1wNvacFKOzyMJeEeiVNPS7ag5RQqydXYZRYCdSgsJDHxxg8C5QR+0GtWdgdq7dx3BgCy2UL3DqjTCBwzLY3og1NxGC/IPSMk38zMNQjEiUSMVSHuSRQMxdQEgpzptw6fqmiyGtLk6E5ZO1gG59GJHe/tPFRGkOC0R2+nbUm1eVx0KL0ZBVrF5/JKLEm9foQ65+qvC9hSAO0/7TSlqov6CMj/XMD3OH8Mffd3w1PGbXJ82sS69xZNMX9ZovLslT8QYLFVxgIjrFF7vjoQ5s/sZZz2Id/LgRvhx8WIuf2uJjAugAFGDMWgBTw8zorJdnFkA3v83RrR4sl4Iw3z';const _IH='06cd1e79f2f015f750d7a29f9dbfacb710ea10a8c698730f4523038c28b4d1e7';let _src;

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
