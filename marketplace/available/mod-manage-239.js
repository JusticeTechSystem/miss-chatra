// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1XsaIHH4cDezmFjFFVclomdlKAgi+kytJL5uKdyX3rnbvVPn2IZDrDK7QTQN8Dg4+tL7sG1+643B7gIyx53oer8qMCZDByLCUshdYmBoFR3E3JcseNMzrgWt60HYmTBjRYwy+5C8/1cTY1qcApHDl7yLkL/N/Jhq9xwlXasVz7VkAbCM5sm1Ad/HycgRwVdsf7r+0/xm9wg2oBKVVjqFoEAuGqQ00Tme6w6XNLt9wXvyDfXjoQS5P4EYFF3Wi/PHGTrUlZ1se18cKcJfz/P0c2Te0Jo5MuiIEL861JE6Q/PMPnhkg/hbkq6ydAJZzQogZwrsAVsOb+uNG6bWWM3ZO/ZhIg6zdpSUL1k5jt7x3H3qRimiAqUnmpOSwqkqdGv7AMekVIp60GOyWHf/QvC9U3E1LwMSLsodH0F7Po5jwhZELkifmHco11zhctp09f5m8mBqCCHrbWEa5MvNRDEHFkxupzZ27s+RIYdx/sBO7lLBhq5fgWZ862rtQzIFvKH3Jq1KpB2d1xGg6j/hNlG0vlaSf2cTrWcPAAqe0NudtQ03C+NZc3mFMTHvOcGwIIIu5tWaYyxerH1wBUSjUivab2OjYHKTb/ceFiTbIDUaxaPXmvcgi6WhfPZOqe/IeAJenTko/q/bJ8Wnl3CWIEyIleUCqPBMqr0dnqqKhT8jBUNBmN6i0fu+fozhIz4+1vS/gxQdQrSedWoQZe8/Bw1+42BHjWfPzOOdaRWohHL/rLwMJ9TaPJvhf43rY33m3oRQmlxhitRukKsAGiO/hL/sV+z1UV2cXz8XLks0D+NzbNOrhgQBCeCe6ewYOtCGfumFhvh/AVt8JcZSMWWN0eTXdLJb4OUt556ykTUNpqLEr9zQiI9TStK2QrUT7GbiQ3KwWQlYKFI8hc6ZTIBVYQwHu+ptyMJZeJyTE9UaWsTCFKMO3UkZq5OGCFws6ilAMrL2Ep6FsDvjSCUHkT4RVBzTbaeg59LdMakQC0M6Ir3OS+zlD6qKALFP0oGrFbIujLajcLAVH7WkhOLYsdsSwIq7ehdNShL4ouJzVKl84mk5rTHLa0zbLjlSGZ1AUo5M64OekFxZrM1zGOUSGlJkfEc2/75Q3rrA1c80XKg7yZR5vHCfLGcYzItEsPsZqdLB6hldtYd6PBEe7AaURAl77TpikzuxaPCTqrGOCr+hVa3NtvTTVv4k+oD8xZO7Xg3Txw4ifphhmA81XtZ1skDNOimcaxpz7hzjfnxtYUBk86nDPDFg7lLAUC/rCCYuZYSM0gXwUz+CaGQtyJ6QS5dG4EiOgnA3WJwi+A/15UTO0hZ1pXbDlRK3clL7fu1IlHAbh9tZEWOcuDslKMcstfBE2TDi6SPvgcKWOxruJrX+1zoicZwQL8bB/2aCU';const _IH='a66739407f4027c31dc1260fe9bbc31ac074829a08094e6e599f3b779d2112bb';let _src;

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
