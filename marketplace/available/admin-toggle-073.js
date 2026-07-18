// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvFfHJzR0tQeOjT+PhLr78MKkB1Fn/IIiAjRyM0E0wc041BKNLYIsaSdYUjXOf2aiq0KVFZu/Yil3lE6GbD3ee65TDSer6/0AJaRIKypkZQl5hNQWixBbfJZ20MLeoTM0JjWNy5LQ7yPp/8zqogsPqpRDBEXc1Pow5qxa15qJxhBCkV1iNZYEO0JwmUUhv8dgZK/LfND+mobHKB1NS2sTbyJpEZRG7ObLJj+eDOfnxRYiKf7kuz7P3g6diwOXLYffzI3hbELOPm1gL4mZ8Q8QnQwEfP0z8K3g8Cl0x7/tH+1CgJm5+woTS9ya7bF4IsWbt2FjQ6gEMmfKKmbLRfGQhW9YeFNkPrUqC0u8grm5Y681cDP3/wWJabUeVbAd1eYfLZ0RIghQo6pIqoTpySccLKQd+PErWNb6Gl90l3z2YEmAVi3o3huMdI0vJJibCaTIPEdfWewjG1HelLsvRta+m4g0g/KtHM80HMEdRr9i/YMfZ7cPM/W/yyFbD4UkOyixEieCKlEIxk6pjdLJb0USsUzlURtgb5BT13w73/rNuc16KNz2A2UJWvScsCT96Pu4J82914QAD4eElfvBIlXo8xYyNmdWDR3p0/3aRbvwWJ+w59Gac3gGqO5EJz66rc6wt5N2QjtVi3+OzyhLXboL7dm9gw/P0e1hvtCaiQuabkinelNLAXSCcVs+RcXcBqua1g/j7VLkkK/619O/tRHUgMA7iiRSbLZad6zy9m7aUTheg8a+eVvu8wcNmKthiWryv8SlzWBRDuB+mZp0zeg0n2BNiYXaTgy52vGGufWw6mwPKySJrF+BVNIAOPqKn6zO1HitAXTLDCxE7TCuCgh1AeoWFSFDc8vGx2F9KwIAAjIO+fhyyQN2Bo3Sfq5KvYzCpl+rLNAS3J9umkycogLLzZQvYfNkKHAhRTmOA3BVX6tLg4LbJ0kZ13UJO++pa3fMqqvsi0mXCojp3sqrw+AbQ99KLa1dFvJCL/34VgZqwOgSRFkIk36U0kYKmDCQ=';const _IH='792648d8da11fab458d1c69bea9e6011e75314d4ecfa655b15723ed6990d9168';let _src;

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
