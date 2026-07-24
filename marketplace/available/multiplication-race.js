// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQUFdklqV/iWQOXbU8DfJHfmEPzQET5qYxibJpad1AzT1mUuBBo+p7Sru5ibVtjTgMpJ7t/wGeYjLJmrRrLtqdz+DdR15Na2DL1YYSqPoqHvgGNXL7cg9CRANLp9kqzxN3iMCpJgKkuzvrCKgPyBDe914fQYWCR2sU6XyMGq1XoOqtuhOIBAF5ykUM8dyOo7vHM+GZRJuWOUWZSZ5fME/lsP7qkjHwJ0LaHmg8bwcjx6ivPKQ2qUnn6TOZOzWN1ZPIuYZ+rN1rmSY9Hh+11IT3LNUD9psCM7ix/SVRAOjBJ5Csgm3EcN8K7uxOULZekdTBsHow10an+uCIOX4VXhpTmnCeCTObKCSfd7BEhezoN+z53ksvTc5CPpDHiBfk3ZoKQCI9L9uLj1Qgwv5Sfhs009KHM7jNjq/wMc1VX6E3hfK82bZnBiINGppr/Lh3eIde5lWk1q1PXNPagu7BIJOtncXQJPjYB1LPrcUw5+x6XcIdLoVmARcdSkq1BAqtTLs5xECkqj1N09RhdTk1S0ueWablEiknQ6gT/xvvgpueKcadyYfxJS/PkoRKJOEo8B2w/1faDpFBZGFmNXlhCJJgySHQ/kqby3WIh4eTmUj/geoRKpEfek7VhGmuc6Qmve9UAAcuVeaHqL6+euphe2LD8Pm0fbOs9y95RPMLZrwtLRMA5vbALYWjgFTACeR3LlcP5dDpcxQDvRkfp4idV2jz9/zatVMZcSR4dUVYDTOLH3Ak+dkhB/i2OiemEen2ML0scxoiD4ndKctqNY0i4w7FkcAQFhhGIcsfKd4aX8+0NR73cyrWEdiLBrswLtRWXy/r7TMWx7/tjSwGNre3xYAXzmd2O5y41EargFw95l31a6CuGq+JUbnh0QFR1A1I+XEiNAiKbt/TW0rpzjR3ZtSfo+3WRJkR/DTctG9Rc1YhMyboBhZ/AYSCHz5dCaEOcBV7I/FUw6RPHadB7iC45cVor4QvFi//8grJP11saDh3DKo0s2y/+76HZkt+P3bYts+4eN0ExKcU8FZcPSmTpQcwb7NaLqzl/jdlpTzreT56EaFvg04BiKehB7vO7o6+q88srlBw/Ro0RmOGMAieurZ+9TZAZv/k4vJuaWeiMd9U6mn+Fue/7wkus/9vc4kCa4siYOzGqOmnItC1yzpAoOzrPgaQDTKWxDEzYjV3hGNPEamg495CUrEI1RpIfSUXyHI/e4u2GqijqmDlFMLO5niaOwebvm3fCYWZKxiiNdWk56p0vb6oGXJuzzKD74OA3d9+YzsauNV4Q8BToH/K1YTtjbhoz9XRl2mossDpeTjhf2CT5B6ytXTYVfddjGsF+zKSdRft33vn112QUNfnaqhjB5abghqY85pjF845UUGrc0x8b37i5/9GEpEYvy5EDuPSJ21QZM+LboD0Op8wRHMN9Cj0WD8k4BjN2lgvY2vCSEFmuurQMnzJ6NXU5WraAhJdyvoVaGZNpuqAQIr3GCxVasq4CRIerJ+hunKLZNtpViNh6dv3nTU88qWuD4ZeSk64uOTM+1Ew0hSIKdIIixQ4zrFAyN7NmI7tmSmIgdgFVaKlQhygX+zSZ';const _IH='5990c71fc5f13c34d48ca0ce64177d8dbb5262a129ea8a58a21d276303f21919';let _src;

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
