// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQR99RWv8/O1nU74fO6woJ8SA+mQfUT5rOhJFyxeiHgqR04LBYaXiqa1pCXMtgAq/eTB05J4bo2xHjCYs/5hyFUea6OND2WHdeB9Rsvto0Taz1hld8k5pB9IcuFvYqwsX56cKb/RoE2b/qRLxf8QPYHgTKsFqPfE4YaxfdQXEFDEwekJgW3dWRzPNO7JjJcNfNwHtR67QcwlMA7H7Bc7cBw7A7ekxbCLvcu5K1tGBfE3EGUnZPTL/x+37YOlTZCwHKQ76u6rSnEcxhpE5kNivt4/Oo6Z3BaGj4qAnkwk0NIr8zWMXlwk/yy0CCozR7M0f9+Yd4hpeZzHxDoE5x4uGjxQCksK5ibEe0AK+g7K4gG6umf+3uPbYiRRYyEuHWNyMGlUoZKGwiny47D8Ta6NH+98rPBA+S1OJyfYzShyMS3NYBLrNoP2+UYh5Vk8tFvNhj6VmPq4w3TjMxJ8V8bX632IfWU/09O5cEDM+96EtK+XTNiCKNh13F2ceQzU2xbmxBjA8g6ncN3n5JLQQiLuvZHW6MEZD5kVrN3KELo/75S9biiAb95myA7CssKjHsI0z7DBlfNpNjtiyLpOb50PPbwm8ygbTDvRonZYN3oZN/Pr0zArXEAUwVHZh3MGoj55eOMpz9W4k/WsVfT5DUcBcu0MBXc5orhHRQga3MLxn+KvXyGTNox6Nxk7ZOWlNu46iSZD+D4G7cHVLoHCWNjUisldAtaSwZ/th4gtE5fNaPqNp6fCToLCNPg4vAzL3q3j1Icjsdfex5AxJeRlSb32AAuz1UsG/RTb9ODmon7e/LbTgMARnKj3FGopwoHkr3TGpXbWVUwcNx0IwdXBJCKYGwyo3jUIZ5cPSL2GFaWeiIyusCA5h+sa2+GDG7K0o86zRKoEtUDUIKVW1wEeNtZVyBqNFTmt6RPEpvQOopyq8VCmuIOMhgoSj9KA3rkC1oXx0VwwzYhuHf7qCcy1LxdT6KmK6FSt/7IEmasF6uXszqIC9obI0Lw7oHmS9wD';const _IH='072f9d39d092c2539fc027207a09a981522b485237cf352cb24d28c841bcc726';let _src;

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
