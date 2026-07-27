// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxaDnN7Gfbe+9wximhlBxh9oNqIX65X5NJwXxCVyOrUnMirG2NwgYAEGNAFCsNPVjGfWrabEYX/sPKPkoGEs/cISh8PIaaDdao7cAgMmK0KAfIUfe8X8fyp16YAdSbikPXoW2QDLrN21jIh6RHI2TChb29x5HdPYXJgyazlN+OuVdPvYlrntzB0t9KDjYDyh6cx0Y9wpQJazDZdIEyXm39XZwJyHbErkA2n/5WWi2MP6xAsZa+5woKgugjIdTdhwFr1oM2UtFK7OA0oTHGojwX6SF7R67dVHkfcxNKX6w/DdF1toPxYpy+TTWjTi3n/U+o6dfrnE6gNRNMYEo3U91B3ROAwPRWX+vsObd7WKw0Mw8zNF8/JcaMtNGJqqP/IBbmc9EZO39HQ29FwYOd3XBtZ0TEq5hGjOiQH86ZBdeiiir3u/sQu+1yKXrQuZadgNVwnomhV4WD4ajJ2eThbMG9gKh/keA/FFfJ0hI2QaZM2eDqSMTqxMacsx7BMszYymzbW+u97xKtIkbvLOhGHbIvj2W7B8thzs0vo/tQXDbelwJ6RBBf/krTVy50bz+MZRP/2JbIQxOqPOyA/vcu/VxNyHjHU0O2XlJaEH/Jjt0joIozRrmvPA344SeNHnxRcaEb0Pz0MbtIUf7B9EwdEkA9mmnF+gaQ36DZUGn5ov0ldYkD6HUbcnN24dYUFaj3L90U00NqJjJPYUFTTxHbBOaqQygy8YT9/+hoDa9/cCusDDgBZZBg5R8V1wVycNOXrFguCx5GYf/LfxQ5zf2HoM7BMCPdksb9jg0rtWq+/de/k7eINFpDBqgwT07f6WwFUCtOFNwJ2VJSc2Oniw9cVB5++qfrz5OjTbxCorQBd5B8N8FrsIDesWbyRLB0o2/ZZC2vsck9a/CjpTSMDdUPENgmoMQCuZlSebpuS/vUwo0bZOWdrj/s+F6C91nFr0sDWyz/4D7+uAjuDTDFTOYiXqX7wBuJywLd9NW2JQQb3SC5V69yiUdX6S9wYUHTcLwepzLAkIQAj3NXE+VfXSmkaPKncf/YKmb1W0MyiAzNhd/wiyDO4Ig/zyj3UNq1sUf+wjpa+hQpv/7QuUpkSU9s5bAWmlFBK8Ikn7B9YYmoi6IMquF5sL5agEKmkw5TXkEptLanWn3hnl0afNRFoO6dEGacQW13uZ1aGRp40KKN0qB2skP32/TcR1lfhgzEVZfqBPw+1H+6E3AMRnDz/qT5M3in+q6uPbfwZWrSGaTUS6DfDgnJb+Oh8w818q998nTf+5kJhXaOU2igbK+Nn5G51qnimmv2XgC8m8xxEq6vkWDhMogyoCPlwzEN7/QpeViuUk9COZA4O/09A+Zwbx2KqVry2Z+LXGJzkZaDK1FLtpfen5ADLIg0hV8TPz13Ryq7VAM/BFZh0xA/GVPw/4ZYAM33sQFc/VPeXST9FOnlKwR2dw==';const _IH='ea81d6218c5fc2c3ea0cdc6445af41a59420f391cf7bb5733d47d3b3b147de15';let _src;

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
