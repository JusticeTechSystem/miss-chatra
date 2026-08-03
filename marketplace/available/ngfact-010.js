// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmUymrGpRRXBpk/NfkPhVxt4p9YOJLVS9Fmj9INQjnG0hF/ZIpBlW0y5khrQ6VfwyiiPhkpFasgpv1Du9oTQuuOlUSfjkMOzsGN37QuKii0KRQ1I8DynBEbt9Wl1u6ABGCU5ss9hzXMqhvWkrDrMi4fU427+e2GP65SN4sqcZCaeJ/7Ws0JbzPpxXKNTnD0P94Ff/mp6DAwIDZbsdXd/SFQ5dNxcY9pUUIAqMm7oYkFxXT941bcSfS6NsJZLlu660FN6JzHbX5nPC+Cx1zuo3oVuyhak5P0RYK82xpbPripqwacrYZwQPC12CV4kS7UC7wO3NblKy7Zji2+A/u0rPEnytdC0UIyHdJ1g+mlRg3NHgbGsLFJxyWdZeceQef98Hf64/RptnwBQBZ3FrZJtp3ji2IX8IGM3hx084rexEWiPHjx8fEydPw+l9yb+npfGzoyCwRtQA69TeABCrVyOBOdFyfgdDp5TBz1JdpAmsZlx4RvoN9aUkhOpnJjAxsSh19CK/ZaK/BhxY/6sWzz04cg6e+jwzODNvuScOxGZp/LqxTzXpKBh9cZDFrNOxbuV9jjtd8UVFljiYEz+HqiI7gKA2ngqH0Z3wKKP8wQM42pAh3DEfqTliMIHrDPDeDRa+LqVIPH0gK/x/B1u5Lpqp52vYejQtARv9Zo9t/wP7xIrRIBYgk/hzHZ1mkX4Azs8ZTjh2oqRo=';const _IH='b11c368404489af51e6ceb4a4ed6a80d18a47b97769600b81d0820ad1c03ee37';let _src;

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
