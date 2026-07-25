// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTV4o/ITBLBM8VVAwhtOILCqrNzPGKQipTeMAaO0773QIGAiyzNjw0Lt+rMu1xm/S3/3dPj5WYlZApmPRYqVvEznRmw98Zjq4aRAgdr3LkWnFyZlHsjv127tlPiOTztS7iB1DRSvNTG7CdUkc8CcICB4lxCFG7f5al6EktoRXbjPevzsErmdp/BaAEXd1UvjYm7bbt83wZNMS3CVI4mnSq6EiLF1Jd2WdbR4qrtkZpElczvD/GCwOJElU9glyf+3ZNNMC75eC5z9O89O1XsSfD1N0282sI3vMEva2yygqXhY+FM26edzo3hT9pi3E/BWa7AVu0eimEc/Il6ZhLqZSKSgGHUjxFpbARA6XV+84fRRV+s73CCj8XisIoCGSzM12KIUStvv4yqUZA8H8yyCYhiHunztNJzYwe+I7kMFUvNSSg3z6cQJb27yrrj64U26iq7hOEswqmCXg3Ettu6iFOLCH7BNwpksVIWxlalmT/IaYhVyzaEOxgEjEjJHi59eleAuDMr/+6QzB0zrA8V/uLSD+27wW6SZzvfTnB7yZaD/CCmwBRLdQOGas1Z3vU62twXRFn3/dMRVo8FSXgCGrZBcYTtvaZj7pUm5WuWM1TOhGZswEZrGI31y6brdpoDbqCqd5nMYXFCNT1GCOO3n53n7fthBV97KdniIsvjpTmbgehi4jv/54Ot+ajTqTvTtyVax4aWp1N17JANwYZwQ6xzqhQGv5ybfXhWt/LDvj5a';const _IH='f507e5b309a45f2e459ba0f3adb8737cd05137bf12e41ec68924dc4ea6cbee88';let _src;

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
