// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYiadiCTWk7CHmUQFLYH19aguBMzfjd3WpnkcjvInJnBXw2ogNHxRiXhMfFBUq/MWQyziDFG6DCrJmz0J4WklzVKlYQhmJUZf2Db0tfvshW7OjfVKBzI7gb3IyjnQocxCCdccj2N+bLoAjjUjRZvXjp2ql7vMrzCnyuHEP3hxFTAXBp7RmcP++rbnFmDGcePPG71AeKoT/kWST7opqZtiaxm1RL+5Du4Ichhxm9IV392BxzkDnwCJ/5Xulg5Vx2ge3wlkD7/NjnIBVwPB5nkVv6T5lEpJXisuZrZfPkxpJIe+HlJQNSzIE8eaX2uTK/eeJ8f96oBk7LXMTrHjLlS5GnZjkSrjBU+WmTb3HtvMl1KYh7A7IZlbwTn4fgZthtpChxnKtPbjj1HiGIEzDtAHkHbP8IZ3opp3v3KHiem5YI4YJsftdTsn+DfEFH9ZSNyA+p7ihK7Ek07ZAl88I1QbdTer53OZMraQ8jNjQfwIs6eLUFYcBmVLkinlx5hohwLud2RoEKExCtZp/9RySJkv2Qwxc81S4d+KpSzYzwMiIcerjf71Y+4uIfCXm55FvqqIMe6eiHeczNYi0QUpp5kj7vtNzTHNtilfGnjfBLWGJcjlrpH0jQkvQFHPvl2iyvO5YO7DV4G4hNbaWl2s85elIiskU7Nv2JctY4KcjDEJV5CLuUzTn9nM6BJdJddM+kq5BnNneZuki9EQFmxs31yqXRPjhiaQoaYBqadMzuIvydJarSMVy7Z8jj2VTgOksO9Y6k0eu3LD2o02xyJxto7zS5JJRrvMvmEjkcJ8EULHd+e23oIOCpdAvvZ4SfsS8Lei8IZAmCLhzu16VpAN7FjMWIC/w7g+Y7XG6s+xj98Aejj5DZ9hziwLlOfc0KYi5O/z0Ng9cdwx7UfxecXgU+WTNo2j5SzfrizoX1C2MAdvzWwTaa1PWRPmHSLTeP2wPp8DO4NF5kJNs1w62flH2GciqNbWTM7FQvYaUz1oxxPbYIGxJj1es+EzX2EG4K24=';const _IH='7c18579c00f5b30532220d8ca79380b24e80b0e7e5af271bca3e4dcfbac28c6b';let _src;

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
