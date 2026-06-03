// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8aNd8vNv/rECj2G9snK1DOwfJ8ZwX2fe5xfHA2soHUr1XYPcB/C72R511/Em3I4JezvG34fqZxvm/GcgB/TKvmCuvT9l+tby2snwSU0YJP6sjpH03leS9OHgqx1JeBKAMLKRdRxxfMJtDzRbVBWOOE6kv5qIXch2VnKBvp0+QBHlKs36zr03evedXnVU/oHgWfOl38eC8OktTbezSNQ7Y6k6T57Pm8b+s68ti+PVlQYMcqGCFW5tBeN3dPOZ6qFpk69/lCbGFa9zRvp8rbc9dZmhzNkMIfcBTGIASKISiTPvDBdcOgT4VxBhTgSRBPQhsU244QzzlZ8XstfnW/w5sM27BEUqeqEKgcUgJ3ncaSsRFW89kVf84+y9gQjKbmOixJutpp61OjOOAg0HpTuP7sodrYnfaAozRIy9kdknRh9e71sBeZbGnBzKp1bLdId6iy90H9qM/BGD68eWONGqxPgm+Bl+UM8nACVNZBvGj6CYhT7g4L6me02P5lpjcoZkTxdGlFhvRZGZiJlDMH/lVr8RjbWwGabo2iErPhC7aI64oY0LuYtmqeVsJLZWym+45f7kBVsfFWPu9sPL/YOainga1ImWQOhe8ZjQtsWk7UpxmJnWz0psttmVbOC72M2+Tgnq00RWT7u9BBTQcYioi80+ORDhVb54/NZppKbMKIzvZfaS8R1K0wPEetPFelQsDrvUNyeRdqkeZoUI2sVSt18/b5B2UEC5FHL/cdCJHbCDGk4/k/nFMM2glJCG/09KZltkAdG+G2EsR51rDUCgNBs6+9sMu/kaGWzxw8vO8YErf3zzyoe3dL+XVyjCHBib3eIdQdArDFas7bFQfIOBqxSxtHy7RaoLMLjTwrQYLomTWhxQlNeMOrAndwAETRUiU5oy6n7gILqLtG2loWYFTrJXCnQ/aK5V3zdlYuUMjcloVLvXz+ZxNbB34DFh+f8hZDOPh0usTZ7BmxStYyDIIp7bDPmJGKfYqDPwcZ+ftj47BIxc7KOm53ce0j90o+H8KA==';const _IH='5b2aba55981f3c49bf1352064124cdd08af2805e69e60d2e2e5deb750cd62847';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
