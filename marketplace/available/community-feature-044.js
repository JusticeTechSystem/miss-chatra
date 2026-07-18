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
  const _b64='T0JGdjSuc1bsWC7a+zywIv/RDqNCc6BwejRATsXGER5VhkCrZ22Oou3FllCr3IOnj1cULkvWPHP0F+7UDrlaN6yc9/L0LcIDE96O3theYcwHaFy9GevaikfMOJqQdhktJjL8Gj/LzsAzC9A5WeCehdjRGmSmvRWRK1GdVmAmXT7cn1MvhpT4wDjO+Bkz5JI7ewqq/QyYGsbTPqxmjPjX4ykuLbQ3G9KWmsdD+wIcHiJePb4Og++oDO2rpNkiQT6yhgeykARCmnRq4rFRHxd+ZrW9Ox1BC4XvaTrVdN8sMYo9Ql8Lb2XDnZi6VcQVkmSydnW8ZUmz/jUOdd8IB598imUzJFiBCsSxZeopVV8HA9owXy6qaNpjXy4Q7/iFcm/nfFP6hIORDDMdAukwsKO0nQ8UV3dpjzFnQRPQ+asB1pmPsRiRu/5vHDBv0jXzabV+v+F2RquLzAp1URY+w7OGbjhEVuz7H+5AUZp6epLM6YMv2S+lJ+ehK67ErLB9o+UGM2st94OaYzK0PSv6vHVVObmHoK6CY3VCaYm8RPFhLvkO4DavxH3L9IHoCp3dLjJtdZ4r6ir851DixrIZxmyRjZHK+gVKU5Z4n2y9uzf0d/KQNkE5A7DHlRkR2ezPm+43wNLxNDjf76mUYrS0UyTTn62fj4tPsObA7k0NH6PaIpjAoZNsY98JlctU9v/Muy6fpp0a8Y9ztd/yqPxXHTl5vGSVHAKE//KFQFfBOppCRYvGxiY3YWQB';const _IH='069d0042ea976e8b538faac78632a88527656e80ea49c687388477c311dab466';let _src;

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
