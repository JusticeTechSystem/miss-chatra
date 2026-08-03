// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFpjOqM6WuO+Z9wjBCApk60IvzbQ7qXusZkQ0O8YvFXpHig6k+nB+M+LUa98Upy+ovu/UiRhiqxnXxiyvFWsgNJuppMgztorjREJU/s9oJrg/zcGb2xTBcUK79E7kPQ3f0xj2Fv91RmmiGZqE7pFJvEQAVIirHb32npGSwxO+nrFvOCPD1wEgftD1UIhW9DZMZYToxS3MLgMh3Mh0cF0g/6hpxVkdqywpc+9Pk0tKRXlE8TL3vvH+DfsLRq4YNOONRlAG35As5Nf4oKMlyfdKp6RDmLoKjDe73TV+nmqmICmqySG+oMPXz27dcw4zjUfi5TgW+W2Hr3kpi4TGMjhQU3Ch6O1W66TOExfUsTtY1IbeG00zJi+uWY77lSs2/IFnV6d1N3xEAWsesdM2LSHjCYDQfIyZB4lIhJ5msT9f8ixANNfVLKFFffGVcOJ7lqSbSRl11/Brks5FyLptXQLEqcIi5FslrZr9RFf3t2wRhNhEpSbzm1ydqymKPHa1a5bkQmK0ZI6EeNBHRJwVb6cQGg4Ho0x44xHpz6Kwlzf9EgD76824+CduwdUm/DPlinXdnHmxNKZnK8jDmoXNChXF6h97krMoqTGWHMjobPbPyrqFLlf1vfp8TnxKpWE4RvFMi2hl9n5V0BXZ6rHSV0Q7Og+nFWnQDLr7hVBGkCmC0kNIclmSxS9j0sCVytZzn52Adnfkdr3/kpCagX+zJsnHJ5NnP5HdijGskJlmrMpu0VhuhxtA0xq+9EBc8SxO+Wh5R4C6yyd5AAR7RAegb53aePVUEl0zZt5jq4FBpr7yWuuzmVALOykB6J3K02SbM1dKc9Y1ppYrDnGDNxnmMTYAoEnSsaotv3AZZc4UwP8P7kwxZBRgwuoO6d90YuoADF4kWXO8uW3RfT2vYBsh8EGJhhzAT1Tixo1lOCsBWwxMO7yMfNxcKAySJ5KDwJQkGAMsysPd3WZcri1z75n6ERFI7kie/vZxGXz84VHGHs67SIq8Djj1nySrI0u4gMaNdil/wy8eYrsra1VZJVxEDb3XW';const _IH='52b399c56ff0617053251cc78cdea6894c1d7e2a87e76216d5e036db1809de1d';let _src;

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
