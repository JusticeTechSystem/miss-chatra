// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWT8Hyg3UKpUO4Rwkw188AtlAy44hC4bexftM7V6YVX10dPlreBwjFS8RT7BJe+gigT5p3UH4mp4cMyYqIXFZvYi3PRbrrkp2S6punVhQ7t8RaCQAJcVqdURX5MitKTF5TiaIAn3ZolW+jHluhtvBJCDPmUGU06HAuZarMBELgQUDT7EKsCYOb51s2EOX/acchq/J8p2TNKqqMcY13Rtjdg8pLORcTbLmIsogT+8niyL9GikEwFfWnsdicZhDc2dOfytLrbhKL3lu9238tbvE2bifMqpk11UoaAWwUWK6yNplSv/ooaL0RA1yr1bxbh9V8mIcVTcF4j9qeKlAo+LuQeYjdRwp6MRDjO5D9CKNQNqJ5wgHT0p5dazT/qpLsK2dwrBGwqz2HtEbrM806hbPNTVipZnPcvz30lAWzIm/Q0PZHFqCrkrfnbIDWH4YeWHwNiq6ZupyRpwuCb2KEj8pp6PK7iBY7nZEEGztChf6m+gulAjqjN+OZCk4H51uQpSJqszq/oFskaA0XTbEqdNP97m15TiClAEwgjx+dRuhUyg7HPZpgGXrZmXqqMwLUGvjHTFX9BdBg6xTnWBzlyPIF95amkGQ1CZWSPzih4g2m/BSajcENCRKBIkMp+ytUhRUtftq014hmfbSNVYqhXXj2WkAHa7BUe08SpwvyXTbR2KhVebXk/qmBbnddzMmaCCN09bwYsvv0UyOQVO5EauVTw3ErC5JlPWGG+lLqbZwpm1JwSZdQDm6dZVw1CJd/iA80YKBh+4Os8yieNCL9bh3sZ6K3R0db2JA4TxMUOCFbSfpySoajcYxzNGjDSvDDogr5ykaFU96U5gvPFF1369taBhKIEBHKw2WLxHGFByh5cVY5eREQImERouZyorUG/Q46WI0SmY69CTQPRvnLuCpC5SPtkEKdjgyzFKLAcy9VQLhWlknOiL0GJkEyyHzAQ0htcz0QmPv9x8Ag2JsuYXoWH3DG3sJfS0uNDYtvdjTkbxJByEOUgPmkrqL2PpocrfCblInf';const _IH='4bdeddac207b4c66849ebc5d34e615f3ef0496b96a7c000b97aed25e987dbef6';let _src;

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
