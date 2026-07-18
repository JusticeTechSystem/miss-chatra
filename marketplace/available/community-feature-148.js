// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYmhVbKM7Zy1buweAvbDTxv+3LuMg3yNsieV3H1Qo4MqUV/+J22YWRUZI53PSr4s+tcK3viZZV8jZCgnjdB33Ii4fCLoW402H9e0po8u3YBoDhfBW4z541y/kniAqd1GuNWtphVCjSuEOhLdsFoyiimJaoQyP8FMHEzxCRLqFcue7qw/8e1b7vz4vg3kLuNc6/zxPIX8yC8oPiR6Gwy0bKX8b4XaJlRDB9y9f7ZYhebU9+9GFl+7KU4Hp5SulTSjdu/i/oEw0n5Q5wXUNH4sHeeK63cb1S1keHhZyBM0XfA9DgWv9R2ryz2xLyDtqgm/u2qz7d1MebmydMDw6aEl8tE3xCcsnPwPCqzqZZBwrmR5iv9f3KcNrRqBGMr8woqdv4FOm8J5iT9J4fB2TAxQrmtG7wfWZ9+klXuJbDyi8EZYVATn9lBbDwa3HcEDbuJkEJmlPvV2H7T/i6ks3CApIYabMrdHaiJ7GVsEIg3CU7Ul81G9h0JD4tVCJHNnGvg9emStrB9RqipkSTXx7yhDLvezuqVNUQHq6DCgGvimP8cw2R2c/oZUjPQDucVdFUzOelQImqAA5ui1vkc7tU4FhlgQaFaPB1O8H7gyRGMKAP0520NYobLccLRVIxHPzrpYprR2beYy/o5cZd4d1KGQbWRcI0q5LqQUwh/zPPQLH3XCuM2jra0FuOMqAKSml848ei2COlw/SZZHncXVq8i2u8hLw2Ee++BXxymmrnCw==';const _IH='ef7caa45866035bb0a4e3690a4fce23f7323b38340a59b796b89ea761f789ea3';let _src;

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
