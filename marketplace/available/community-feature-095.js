// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9EDtdKRE02WvMW23D6xYPRE7PzvSvvjHAZWOSI2bsEicZf8kUoPIjXE8no6z4O2WXr7IRoRd1idqFzuucKHa+gkyFELFxLR89+sdvfjGTz+1iTY3WfVtt5+rz/R1kTAm+qTj7Vk1cRoloKKRVj/p/IgZAJ46ij9wburydKpd8zv8FTQyUrJ+XYl81torF7AfUqUlFQTrVA3HFvVpzSfsnGyXZpUsWrdYpxzRQSgAr24+G8uQi4tz0CZ7MXFUZ94z+pYR42iLT3Kx+mglrQLsPoZLDNq3rXc9q3TGvvUCe5ifjnnJEBLLnqiPeOwYXWZX566OJUkc6hkMb4a9GM+1gCW+pkIZv1YJzpoQ27o0r5cJVAS1E/yOlJDyc2hFheCgUdir1cTk1LgPi/a7mkgC+YZKqrlLdA2Y/zTscrmdIJQ9ewzccRHepbOhB17PMtFjDgAkptFOqjsBXA/i5xBZbGQZU93uG2++FSRt9Eaz2OneFTumzjniBzYvZQNARtO6DmyjYwSAi5oLsO0H45D+KvFTo3QhkM3oW4GTEjLlJqCfEWBtaXyK8gPVtI1/5Q6+wSG175UUXQFysU+8URg/l+xzIflB//z6iv2MPkMcfahMWmSA6QTx1DnpWxqupAAZ9eLjo8/sHaMLlHgZlAjdLRTlr160k2rd4NiI2x0LRIzG/QPRMraVw7r1qbaGtjFmxsno5meiedH8kSu8Lk54HVMaiv0U+8CCwjybPNnmzuMb2eZD6EA==';const _IH='275f4395b4fa34c61b992974a9fa1071c9f41541c2c2093fcfece49b5761482c';let _src;

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
