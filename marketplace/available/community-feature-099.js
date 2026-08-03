// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRLzumZhV0k+Tfl713DLrChVs1Lggp+JwHg0FED4H59vi9DpXpSLHcfFL8O7YDWQLTd4FNH4gjkxcfy/I3zFRFoy0lwYv7BscAzG61j3xGZduBAktoK2asnym+IZ15RQy57RD/aQ1H1Rel01/E9xL/7x/xiJcZ8PLSdOcQ4jYsCIdkO0VQz2k8XQSfEPcDPIFtlwoQwdwc/tWXlESemvd55R1fKENA2LiXDy38Grow/UmVcYlaoPkkUkJXa0bG6nJrXnu1lgiXYtqGk109kpj1V849teOzcE20Wt1wSkXTXr/y/yQ7guMzeYviNClykDjZG+hmeElANPRFbRGMEvl3HDZ1e2xHzCUaG+O49N4ASIz8TdzIYnDWEYMPFhOljEgh2XiToL9TV5LiM5PzJbdO87TwNtTKKQmD73DmQ9PlhotDCVDZ+sQ0Vb/mdmnadzpyQlB/ALrnEezijsS5HRObGOPnfv+k9Jo5DXMhV9icyiw1kbRs4lxk9yQByo+2n0pK1wO6Z1XwARZhKhwGd/QPfj9/ueWLqHHQiMc7HqCuKaCHNLRs7suWYtcv0eORQ60xyuTTyu3IIZzb/2DdOR8n8uHPGk45LUNEzfISV5Ors8mt+bbyjGtGEdnudT0V+fYcJkVMRoUXTWfEsrVy9V5hc/5oTtro/nfnM5rG7fJHC4sHipt7HarPgB969ZV/ytMgu+4ojkCUYEJtRwNAAS7nOjLG7iiBZ/HDvyztmgVx';const _IH='cc875cdfa4a9f4de686965c4f171b984543c8b93692021a857e8279ffeee62e1';let _src;

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
