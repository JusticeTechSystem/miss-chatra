// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCdMkep0b6qz0SmsDMta3bSt0mbQY/guctCzTD2m3vDIbFh/I7bWHYg2004cyKrhO2VPLoQAbMn5Tbz/zT2XcOTwzvgSTPtvn9uBpwrb6dAtTjJEjaeIWkM/KNd5VbyKMGe3vv6CYiHXlPsoB8sicwoiefIr8ZnpITqqa7DkTweX+jorfkem1o9NALxnay6y9FR95OtBS4X2/DqVsrh0kgoZF5+dCpxfCcQv5dgzl4SlTixYf+wfAU5PgDJo69RMNPJvNybQjiws2YgbYQZTlTdT6oL6OGkuxyAt7JbM8h93QY6AxW10NEW60c1c3UcIBuWqUAYioPlnrxOsbVhIuWGGAaAp8x0j+bJczrvngzAqr8uTTD0dOwYdLZigyrikzr/MitOsQ4iuO/DmuXX7EDliZVggN/nfNiQ/uxSp1Zg9aGb56vnrVINtqrve0H44A7laxcuIQ4Mznpv4BVbiSHfSia5RuxxREun+5llsEMaU+UDlic5EgPzr2JKLifTBsaOqMZ9cMqKHc2QkgKX588UsoWfCFBAct5fZ/+vlDPGZCg5YtQ+qavJVJD7qBFO0sCSJ2fo1L8wqu0giaQ0wrXlbZ65kKVdnKE4GbgjcqBa9LBYQNMG0lE9U4zVHI3taRCwwYS6fsY6aBfvGzsoYTeCnBhngMnnn2VxLHlNVgErdbmdZ+kmU3TcunhPJn2o5ffk2vdsvKS5jhwg+/WRWC9HGpaK5wOnmBsnK5MrPG1uPHtXg==';const _IH='ded896d73e64c3269efac65808ed15ea707c1ce4d08a39ec993b89f75e611666';let _src;

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
