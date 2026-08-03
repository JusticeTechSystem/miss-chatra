// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2wHryxHUnzhK3ID1ByaO9nsCWhExguqTWcaZyjMNjrZELzPg46GGHU7xIQi7DhmPtdg1A2GTINuIU6OMvf9l+jaa9rVLFsnnbRcmgTso+XUwKvJtpj0t06pE84BEGYc0065jcjoLVqY3B1ulzr5NDHP5eZipRPnuvGdgtppzFhCpBjJ46x4en2hdf8HEXfPLBQxl++hJ1mACB3qxVR2sMENqXG8YArXcMmx5FZFaT42Wj3QfJruG6FtBWyvUBRw9ensZETBpZgqlM4pTl7UKyA4ARmenOH56zNfGphM4ojX0mjSYHKWwTdfPDKKQQJqDsqNu8VNi6RDwhZCPP8EbG8amqtx9frSE64NcOjll6HZ9dtqoi3+mtx8sE5RhM/iGbywN65CkrQa+FXFWd91KcE7mBHj3qBmgCTpOQB6cn8nwYNNWVU62p9JCuf4f35IFG0HC52FEqlJ5sZIvPPKDYFURVMOKlIumSdf7oSQa4XwasFT/cTmcmD7LLCEHFsyXz1wwvHToDVW9cQL33xutPM8Os6n2u5aCIcVbmDQJxW+fqf/fdvrT+KDtG9B9HyMcSMmh7KD5YL17a1boVAg2ScTwW3Q8NwolHbi6Mzsn9WIB1hLBq1hyuH3GnXGBvLaSUX0pn47s64ygIcLLW7SkyXxuhuR7mUVLWk1367OMNegppOeY7IvhJI6ONAJIXzuJNP98ahksOj8bc8yPNi4jb7HqoG8Rjn7x0qn43gOTeT/jeCpN5nxiMBHbmkXIsxSaIonkNeq4aFyhQomyOLsPG6h3oQ3ewgKFCZoXzGts8CxaWcEJXA+hCqLYVQkOtPBzB+j86bD/KU51h2vtiE50D+xxrYIYGHtn5TOfiYg7nS/EuKKFTMEwr1Kgj2r+A9LKyXrK7vFUcNFsIk/RFr9E2xnPP2YHmtfSWULMQ3mnjQhcMNXCL2mGRV6bBbmg1UgbQmZC6bXLJmZKJ9csdW4qf1D6jtJWQOSnnv1aXY0WMB7+JThoFJDPK4uG929kKpA==';const _IH='c8ca03d2dd78c75b58725f74ad92cb96e8cb3eae9d849f62d2e962a8df551715';let _src;

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
