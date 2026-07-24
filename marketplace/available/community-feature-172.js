// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS92zunIFF4eKecU1AD9iCK6/lNfzUbAVUb9JO3XCciP6hG+3sxGUMmMY1I1kzCf4FsyMrDzspSho4AncJ5RTYtiTcrJRpvQqTKNvYSPlLY/Gf3zIRQcoPmYn6Np/VRL1dBBL6hqcB/7VjguPAOrA9k6Y9/WcfBQlqe/+1/ytZEpYSWjh2g69QetV8KoeKwUjdIxAnQuQuej7PrSYjXVS5+jUWrq0SMn1JCg2pn1Ik4zQdmxOXmRYdKA3cJxr0NUBWd5p0RqwMULqMhM9N8Nou19dC3JhaqWl/ITyw65TT4A4/pCteclihUI/rzoJQ10qVvoO70Opg34lVaCBApYd7gNT8CRhUKs6PVGDekGXwcwhwR/1OoVsQCPhANicQ6u+0rvMWKB4ycPrmXBg8xwSxoI8V9hm9uvx/LZBa7vYIQcs7bU36DU4tfwPD39VhvhWZVr9zKVz+41VZ+TySq8xB9pWj0m5fq166geyg0vhvl9T9kCi50vGB5nd41xrs4xONI1K8rHqco7kYlJ6bEsDMPo/fccd5EM/E3FnuECTZ9m7h/SHlhMUaIbN83rA43CMA6I649mpoc8RedgU+vMgste2xtB5e4TR1Lk86EcoVyjuAPUgGqq6zF8hEawd9hYVCBW38bmzX6wOtW1BSfaOdjed5eh8BcqJg9Ne3t4Pah8zr60cgdNUmkvmhqIaylpGgAB3VU757j1wa6Yw26YHP8nLlSq7jBWvy7Q1V3n7QQEfR4iw==';const _IH='3d19ea7b2afa6bc713e203cdc56feae6395c30c8d677528216929facf57beccf';let _src;

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
