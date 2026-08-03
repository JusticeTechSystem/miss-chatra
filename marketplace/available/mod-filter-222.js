// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9CfspgRa/+/2N975MPSKWDGlpDsnRVpbBSVVVfWS2qFkcvBDoMDndFbjoxE/JduIFWmL286pitsk6qkKL8NwOs7idei4NxHQzVVlmtZMCXLbKBZ31Fbw6EI+J1T+lMF2rx18USBXrUp02foadthCiuuXh7kBEFbSXzB4m63JFcSMW1Ri5ymT/tfaVNWvL0ya+kjN5C96agVjiJTswlPlHbmO5L9GdGny/xMDicjU3EkHXsbzzOL5cJsce1WiCjx9NwpvmbpiNAti3HUOzb7IYRvHyfj3Gt8P6WB68rhpk2SEh/zU8ZcIZEjaG7riQ255/Cm3wOzxiCDUZULK2j7QpV9pjG+YXIw1vJa7lI1zfk51nB7eVTV/tTCXg/dMqDNf1jp5DJsgvD/EQ/wWRCE415G55kgvCp8YLbb2p97IW8XbhRBMyyDU8A07LSKBPmxPN+n7tfXuZ0OObTm5Hlig+LO/v89DZSg8uYuPqrselKO88rUjKshsDiLJOe7G6xUxuTmWtdz8DNQzEL/3LVUerCOIVN/YaeJKisIa0dtRxSamQxe25BV+jyY8PqJ2mZMqyHC1AuMuE5M4dmYQAjXQ/TGx6pO91zNmbYbVlUCR9uU6kUB+Q1wPB6xc//YfwElQp42+76zBPEU+w//qV1oDsKUmBDMqX+A3dW98NzdNzFeGd2N7nRc+e5nRfdYNQuSC71yy02dX5yD4TAN7RYWy/X5BQ8SG8Hit6qm5MuPz2Ng9kag8O1bayxVpqdecbEtbjRihH4qUehltfJAC6cPUhwRqcQHyO3c0t8PrUX0W5uGcASZCmRm3GnZwAWRp+I1/noQ5XOLkj8WgUJi9BljFqr/STXBYWnhXDAP/uoXENNONzVfSNpWK9HeFQR/EKTqczXukY0ur0eRTVfa/N2kCmkeCZPKbgvQhWEMS4Lj37dqonuNlpPSo3xSTwseLWB4xvJ9jfiSMD6YHBRV5SwGOtJz0IepAddGfzztKT3pCuW7UN0X6uH0YYkQf/y4rPh5fwDEjbYyClv7Ffcdw8WJTlYpTE78jhe5uZY7piYuP9XjaFzdp3vISrGNFBZiFzdeQBeDTCj5b2a1lGMXV6G8e/lZfwffs89ZRGLVFEkdI2lm3tvySPbMFiaCQ3CFSfKYa8lASC7s0vo0l8YgiUJhSDzYFlwh84iEjDuFPxu2S/sKcpe2220CR61AmXxmmBn4PJa79FqDbJd+0Jqx4O3FR+5gjLLucWZIz0Qwe2MjOJ5Sj+9JMk+SIzCexXCvj+4GCwpeq563UYRgevmEvdUPXxz2RSVTalM0Cu0Y4432hbmRe/njSXsU4CzfV4S8wygmXMaW3yGWIFG/btUQ//7vz/S/BGeGu0/LQM09L/MFbGXqr2nrMZ';const _IH='a4673b90834404dd56c7eed37e585400b0cedc714f6782f7527a5cd89fb79625';let _src;

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
