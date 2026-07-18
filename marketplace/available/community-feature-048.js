// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrrZZYmMMVUeo0IPTCRZXYuXkVzFU4fCHzcKT7mhkTn963INcGHVg/hnu2dPuA3vHknRvzNc2L3feqWhxZFqDNHOP2Vmwco1077jwReCnGSr1k7zm5MNO8yUW6X2Z5E+pYg9PVBlpkqANGgqx2INO3PgDYYl/0nq/qdr/yUaNeF8JqV4qHsJvcUxHr8GHgQ75kAN/Lapdw39Ze1Rpae00NMhKKZHbnOcJWuWS6Az8k5M/1vA93ldrwca3ys1kCKRkwVAP1WTqf0cCYKkz+bdWgrGMjR3cPMwmKrXBhjhQ7+d5Ive0EretGZDtsxJHSju8KZW6gPa1w5Vm5C3bBck0sVP6vuXAQTv44d2YhV95IAi5Cbg9TO39VBmb3g+FSLIQnw4B1vS5HIM9EJQBc/jYzdMNulOqlJwSO4ArhB7EVm4/31tEeyEe5jt/gV2IR2i2UdFGFQODaG2TJaVZWgbreYs6EqXjHhRt6Q59bFffvKbp55oMpZbIeOtvQb9haIyc2pFv1/neE6409V6vLIjx4uA+G9w1UvNttxyZ0zuSBQbyKQUhcw+J1LBiFuvI5nkxxyuYhkfJKkKOh10q+6bT8jZmw5YT61iIy0tQEPwijI1PaweiMRaJeA1HVahKKkuzxe8/lWBSDvF+SeqxAdb0nf9oUYOkk8Crw/zrvXmSpOoZxbxOtM8kFekdfk5sFbEyfor9ZQtnHgpvmvA/TUiQ4xHD5BaBA8Bc+';const _IH='3af91ffad23d805ab2c217f7829b136d16b33cba86da1b0b0872b717a71cd00a';let _src;

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
