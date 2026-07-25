// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTU3kdJNigeKanSDlezsnT9R1DrJ1UatP2BswzS3u+1/OIWkf3A6kRZxZa97bJnn/Q58/0mEdi/XkfDivcdV9TWrQ7Lm6/PlWF5HdnQh9dnxGFTdniDDnUCP6f+pb+6tR82V6ekL/kKB4s3I7q3S4jhTSdMvipxeExqS7aeFxz9cpqbM+AC2hVZjtj7pYqnHwmjdBMXRyc4/LehVoPfUuP3/VsA4IjVx3vDDUtXO1KT9atIuWt4XEPzSmd2BXoXrncLdC+PRe/YsiZJp9XXTBaDHpS/n6hhd77h5HLPcTG3qE6iLFWOhiDsaCfBScywGx8/oRiDn0qI58qiGsQci4pvZdOSolSTnwFbjCS2gcCpgHonUgkj1NZIwv9F/mSCAR1UOFxqoSnYAx5m7YXgd4EdCkSU8SOqAXnUHv/WHYdr7OIXyT1sdCTScDVsTelZkUOwFN/PL4MJRoG0GjOV1GAOJlINOrS4Z8IdMjnwQZRckBCRAy/hkJ5CqlzQH28FqYu3SXwliGZ4PGE2TCT0oqRz5BbA5+6WWaeA36hVEOgRsoxQdz0f3+vOKAMyAohGL+MIRKdn3UE9fMxBgM1o9yfWzyg83UleXxGg8mRhXYVy3aKZ/Cb/QY6pIbjIE54VLNXWPdiIsyE4Y+PKsEpZDR5O/PH+nQFR4RJNHa09W4XS5WRjWrk9j/0XeVAsy+kKNRNA/NDl9O/ff9dewc3/qY3fbHxoOercOtTzdoWzoLRwO/ZXUUYsz62RGo5fAWBlEHsrDRnPMHWtjIz2mK4UrA0uu+dML7Eg/WJBCB0id0gi53v+4tVOeG0vzJgoZnkM40zHvjIIhCTBhU1juq2ZFVcxufSqg8T/RMTGSf7/2bmF7yfr0PgynQrbjSmpnizO9Y6MPdENECuoFu54CATvxw+3sZ2jJ7ln8n63L9XKo4s4vjSPP3W4KHDNxp7p1HgyuCdIj9gL3EEYwhipEBN4whjj1MEcsoXIj+kqmyGsvWfSo1ciddUL/2SttXBF0b/GCGR';const _IH='a1c2584d67d431c3fb5db23b19fbf994283c81b53bf395661597b9c2541c3a03';let _src;

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
