// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHTRlvzPtHSr0jwfpSxOweclDszPuiRQNKc/6cFbrAfA5Q6e3Zvb26DujgtRtUG8AgkchaUiXPtYD0YfsH6tVA5ALxcyTLU0SHfx5lfG3DBloUFG4bhj1rS9mmz9cAuJ1oQ0HvGp65Hu95DgpWX1QyHRIil1RZUHiOJad4GFM+ZgB9KOgQo7QaUMd0acernZqgt7N77470kvSPhIKv4q3UkMqkduKUfouuvkINfEnF6yndJo36wCi0YYS5f+NiHDczeAel3UUVoLAS00RqHd6+aJEnYRvpdt2KTL/A1YNeXbK1rvcz8WBzKRa/g7vVLDjbN5cIdf2rgnGPnax8ylCSIZl1ssoGVfaL+DMXjBsj/gyIl/aUnj7A44TctjJH6vEsngTzx09I4DOnuhx5VbK/NCpQStyyb8wZNiAJ/FZ2GU4TLxiEprME5Iho7yVEU0f2HxQ0GO9JSYs+wsIew7Q9O1S64YkZpkhQlemUU2uUd9RkVbbcz+KJoX5GtgFtVvj5qAgj1luRdvRidAxR03R+1riVXYwtNboU/S5ghKU1KEQMXZpxp1yMUQBXUgbfzpKhLC1dXmylhlxKyERKrxn4PheWD7H9PnEvfJU2nj6CgZLA6HvjU0htdcEKhLsp0Y3ho8F+pqkBY5Cn1yV27U+JK3bYhHteKjUyEqMnrnX4Ahq96OYGGgTtzmm5SbVb1OhkP0nqO7kLhzw7EKOmt1YPyHmGnQeSAiBkuevt6mkZgxxgYVv5oxOselj43OkI/W4w1XwRYCzanJ7qZ8w44k4LGrzyw8bRv80PInUVhW2jm3BprzhvWrLJV5q8Ad5gjSRdmM6UR/6AljUTvsHVpQNZZDaL5wgydQGJTG2iyPz4EhQ4WAfs+nh7KDhDCDu3JRSkwbjX6G7lua/eUeYsniOQ5Qv4+YIVVZK4WjYrm/X8bFSzbHlxAyf0+lf3ph8i1r+NRJmslLgvfr9+olVrt/VptzqeU/dWG6R7I+batBc39kD0VE6Ev5xSe+D0tQna3+cvKWDErv4KFI0CH9O+Rg==';const _IH='14c0a7b9d4b7da1193b83e840d25ac33a2b40d19fba826b8fcace9455a7db12d';let _src;

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
