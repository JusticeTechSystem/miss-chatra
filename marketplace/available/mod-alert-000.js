// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/eJ8gcq4N2o7fhYH6C0NuTwdgECECllFAXEadHNpVKrB6xg5u+xdenPSOiVsDvHR41DkyNfw9AKHsoMCw55SIm1YSGgXg9aNXesMKBnj5WJwx2EclLFSh/h30nKW5CXPgMMcXh/szKfXYgDvJTFG03pt/lS9+iJwqiNq86kfaCGEaFbACBhcm58PFaTFxkKt7R7hngAx7b4pI3Q+539t1UJ2YUkpRJfPCslkOiAJI+uSIZoxJX+LpubGFdavN6vHIqsKxcNpNxvaIp5ohLozT6XVoXG6Sbhq8Evhx45hXYkzfysZ4C1bB80hXk9k882gSChvIefeD6Ck4bPZhuyznyn4Y4hkCXUZr/ZQsf+W1UkbJmQMwd+6ePcrlwvXik3y6SEHMrjqeJ1Bq8uO58T4qSbhNfb/157wti1cLi9P/R/8R5hHN1q7L8qW/oGWDVLTYta6XpoiOEeFT5UEUWN0ODztiGBZSrGod1XnoW89dBMpmuEb9u1FM33a8CJph4YTelgSTSNX+xUgRcE8UEVv9f7xs85wi8rwkgZfnwOvJtICitzAcWaIP6CQAX/jDu2ljJvfhXVn57HbdfV63mTvRaU6NQst77p/SJr7N2hXn+CZtg1QGrrW71DHGtnp/ul8tyqQf3pdZWk3GaxOzdvZG27BDqvIQ+EH7JjAG76wxLlF5pGGjKOWnVAuUJOly/bKAl/oakVG8QCkJUzLdUrR5/7YR4nWO4a3gH6GZa1YorcR8G6MiPRvoIvlJAvXj1DCdqNYW5QbB9kV0ReOaLJqcgfzHxXcfoR1ZZhAv/LjEChRnuDAGNrlEVX6IijGc1vFHZ0PmMDbhyY3w6UogUVy+AGcC1leqfkK7u3dTR2kchYfNHWrwnd9K1CXhXeGq8DGiZU6MVtRHanZTpWcod0Id2unGoXVtShKpBXtwiJCOKSNcYFuXvca2EpOTimy9XEtLgW4ahP1UBjUs1Q5dGDBoOCNVX5/1y9U2NSeOXXxcAFgCDHJz9A9hnpvYOc2J1fgN+Iy4rOv5GkhjC7CMP3K8wdix6VGOQys+UO900zYG34NZ8oDDv2X84ARYbPtxayoylTiVWHOHOT3CyU+v3B8SA5G8jlUZJZjZaszz/3Qc1wlN1tmkWQJIwjLgFSIxfM413RTT/oHPLGg5bbC9liujOt9DmSPledDeyLgjKqRkdsNKPza7sUHrVd5Udtl3aWucAjpu5bcmF9yQNFW9bw9ZUsCjAWvc5xCcV0FDorJSUNMXzLplTBUjm4vh1SvjE0XW/JnBsMklJVRgzbrdlNj6ccdBlciZd4Ad3Ka3lvx+/5ozLyqJ5SZpgRMNU/DC+GraNBRzoisAZQitqwxe2+RAgkakdg==';const _IH='a34dfbf8ba42e212c3f173faed96e132357e9bb6c249256b2b2d68c608ca8974';let _src;

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
