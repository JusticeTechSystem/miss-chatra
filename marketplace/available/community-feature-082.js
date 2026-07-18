// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTaNvNtiiHt7jvl1OHMRTXfFmgkl4pHPyCsvLu1Bgf0ud6l93Q5fOieAeayTwOB2kXn9OkBacmYkoolQx2zKcIlXVLYa3tq9nGWLpfzJ72fULus9WGDjPtckwWf0u6HGXQzUzcjEHEK4HsmteGFmOZfzeE1jbv5uBct9a/p2zu5Qu+kCOfW0AKDCbyt7Jvuk6fyyeXjchcmqpCx6k0XV5TjOpZIYflgZhq0jrACKRrhvbwFc1tHnmDeStRsnfM3nhraWBl4YKtuJnHKILzCH7ZO2JKHi5MFNSFKlKt/FoYapwlO66vS6TtR7AK37aBczMSnlxNPfD1ifwkWacXIdHdAOZ6BI6erkAeEZoUmFnw/7qisAw9TDHHluzhBRfMDY474rlyqd8N0EaYGV+Wuv/aK1Y2tIeSQyyBTLThEltcZOC08SI+JkoqaeDJJf7qA11gMQLiALdvalHqjxIHQRAhVG+2KQLXTpTGEVlanB9OP079YZAo7BNozdeSsI/l2h9IRubqh0gF5NIkd/4TZ1IghKj6NIj+b5+6LTZKvkAaeje80HCYTySQdNmJky37ehtjchdOcPq4grYceWb9yZbpQl9oxfAWE/lXzut55PIQSeRct2JCCq1OLpr7pIqgcRuI2IhS6CxbCSZWHhjwmlKX+HxOz6BP1bfDgP1DA2Gfsz/VIHdBwCk9hIQruYLIZ7gYl9o/aoIKyos3kOMPupsaUuAqAeK9N3RxfWiZmtit';const _IH='45da78f78d03f9151dae6a12da43fcccab5d462aa4f39309f1cda07a187b10af';let _src;

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
