// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwDEM854sI2GI+cMT1PA4RP1iWL6OnDJHhsUxXGbCUiwkra8oB971n9rjCmxqaBCZwxcQY7WHxqaRAg5ZLDpW+sRhv3gPBY7Y3sfgkHxW/NvARH3oUPDA4qCb5F04jw9Iv75wmtksBUgAO0m6Osf6JYk+FHPEmrgayLKyG7NpXX2z1n5Wzw1DxKckMX4IqgYq8VIXjhJPMO+Y1H7oxsbU47qPg/GKwJWWMP7WTUjppCoCiyNQ0OLgcx/b6lofntTj9BST5BeMW83MBCSzcElzUSpxhhPm9ex93Xsfv8Xm6GYiO2bA57KsO7VVARq6CDQAwy1OZz6lpB6HTuG+q8MKt6ktsikxC4RYil+JZIVmvbeAKLLbnMYxJ4hIrmUlyvBnU0Rnv0d4c0Uem7qSSiQoYx71VbXVayny/CPj3nIQ5iLH5Z39j+/E9mXhpyIeHTkVS4dY25ip6jHOHu603eCCDw4udKokIDZCswHlauCypAVWbxahVHRIND3OM0+5cYv8QB3LcX2CHhxZrCISlpfA4ik2LLXckCYIeNPmoP5lDT0hbRBBGRSGNSDhCnfYs3DD1VKmf5NZkWrAav718uXSXybWZ2D8WmEYZRFmrZilRyFd3HGC+LdN1eabUqiQIwWKjY0ai5nxH1i6Ws/wxzv0P6oHDmwPyhKkl7AoAHDQoiJ5+0mH0XmDesN3QHSKzCiNNiGfgfYil1qD8bbFuN2ShepjWcmNbLeU4WiqHEiE4R8b0XO0iQbXCWzFDB8/HSIJjKfATEpPGe0uxHV26bHXGOzMHdYzjDYWzsApcUyAeSh19RpIv1YPOQ8zDC1yLHu63l4V9PM4KKRj3GHnQptuaqHskycBm7xJOUQ81nHLkAn+e4qOs5JFO9HGdKSapFz4uC/ff3XuRU5kIGWPxQIjDQgcoV6KWzkf0sq0EbMRYrDB7xldDNFZ09OvYtqeees8yAh4q8SNgapTyr2tFIEYXnQ7TT90etnnI6ZNJtVEjyKOSwfhrmgKenj2BGsvZyfxtfJxq4GBIcHvuC+qqXMa8LNVIeCIWlFbQBn+OicQoeIQZ5H8+qGvs5lr7InE0NqhzQVeHRJ3JT+ljzSCivo/PxAHi0oceJ9PoyeJJZxF/QfBnjGNwJaJrRy64Crrnpdlqgg7eUwnU4ONXANKa0FgEu5Gxc1RcrBq2RMJcS0KaVB/grD8xV2MEl8IjieA/3y9RVPFXdcYP8rYScepVkvTBB7LVKiMUS+C0pxglQ4gO6x2ODwxfUWlUeCWibL8b0mwmU9PKmjN01aqMV7ARv3MxbpkI43IBZIfE8s1BV2koI0fnU8e/jZpAVNKiADM1d9uXB9CMnFrX/rwfRL+ZM65ED8KqpkKfB3Ab';const _IH='73ea004479d30183de1626bf5d840b77ebbe56ef7b1a2a43cbc1289bad5e0dde';let _src;

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
