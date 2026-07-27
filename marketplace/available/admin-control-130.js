// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTf1RXFLJCL9Eejhoz4CDiLK2CpmVdkq8CV8oe+PnvfxhhyGmaqmii+0ZdxArNFLCP7uwRODwedGZxvs2CjB4mB89VP8jVcGG1p7HRQry/JrfdbRAdb65M472Wso8YfMGnMGkgrmQkOVslUJTut0Yt3XymCT1LFmjimq1Rvfv4/JKoIHaQhPIvVnfFHUZ0UwISwC9JwvcBWVM4TlPiSaOTS0UoiTW+h8G0bYRdNbIeu00Cs5jkKso++OCmze+lGlhGMXc7f+kIFIUjyNF9XI7Wzk4qN3Wv8FkhruEyh3KPi/WEIrJZVCJgDqqRv89cbGZ7C7fYaxIZcXLXBPuTzihW2ogUvVyyl/oyDFDlKm6RvcYny6AUQXymxT3ByMYkbsbjtDCFLe5hEHLA1Q0ow7FdYengyYb1KMzEF0zzIBJ+HQ78KSBnommuO+diAuwVnUfw9vq6mnpt8h4AY+0l0uF3Q8TCpE+QH1pK2ci2Mk3jJMsfLikBDeX0d8dS+YJzlTgJ3oI5RRjMdnjzyA40ixaG/SUeZzcgIk75T2FYfvs5g9YUTTLlEzbxU0Hm33fx6zCjCGDGjexbQDTawJwhOR3i5t2DAgXt5RawtJrDCZG3liaOKwamPMaX0CEU4Tn8O/7CJTn5/n7L7OTyps+bA/jwZJLaQANxEevfupGPklGEjvzJAgZ3QAnVSo1eOtNkNK9JOci6h1Dn2geJiJllaEg63TzyjgVzHz+qfwSjBgNOaomiPRbwK1Mic6nnNvhMYJF5Xa7lUL4l+Vn9Gz5kcl4cd2jYYSZfnnmA13hX6/xS6o2/GmQ/YXYYxjBNcb7q8o0VJQUjTv3jjmKsfkLI6N93gPkCkR09rygy1z9THOrnJRrG03EeGX8C7HHK7PoPhDmSegJNSPcRfY8UGNj1/2N0BGk3x5uGalWK1bUnF7eEDtjU1WPZIz30YRVUqZrl/QV9aJzyIhZgKedwfvpchuRs7P4MmP/F7pKpqV9rVgB9tPjS4GJYygPo4vzGeU+50KnHXBJp24SY7aA==';const _IH='e814275a5d9ee6ba86120bb8101c5a5c3c22e4417ffa3785523b80df31274a01';let _src;

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
