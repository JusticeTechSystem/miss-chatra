// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHWG2hzZq9vDnRXD6JNXI3adiH6Rq0gDZKmrV3BhChpfViSM9YaMBSRGUbY0FHAGT2wRL6kHIga7nxL+xd0B6H0ukGMfLc0NswWSVO6CNJHYVMjrWlr+rkB+h5JYgnqKI/XC6yBbnVqYzzavxw0Ssu0p5qiFj0dHly1IOLUgEJRQbGiSzLGkMC4RFtcLcFufPOv9//Q7hLOjD5JKFqb5FsEpXKgs/3RgbyfM4oIenrmdmPu6afDCTdv7c+2fzGcIfB8gLXuR5vdXW/LLNNHlUYU2dc+mMHE1t6xN39aq0/doyoSdYdjnK1IgYf2zmWpArH/rUWgP2vgIqvnlvMOqEAguyjG6pCK9nxyt7MzcrV1xr1gSwc4XDQrESGKPbca1QClkCF8P8ywqLum/HGyv9u21i/z1uWKvUILuw4LaqXdxttc2BieC79az672BHOugfJcd4JiYDNEz1QfrbQIrcIBjsKGhqULYG5Hn3sMJUOHsL2PCoUjp+ORHH57HPp7cKqsN92TG897CSo6E/mg82ao7VW19jFjwra5BJIACLlHYc+7TnMNX4YRSnIoPxtYovNGavkIvzZnn+PS+wfsDQrCztHnSaT/72BiIy0jNu4AYDrr6rogzaFcMCGZE1LtkPj0eZ6k1l9F7Ru8I7ggEh63NLTfk9WfTy9RcLqMV23V3/Z6qNnEOFao/YnsT0nj902lIBMHUIyBT9EW0D1qH5BWOXq++t3grMmfhg=';const _IH='712c856a5cf0d5e798b466f176cb6fca244c4f8d760195e5dd25fb0cc4942581';let _src;

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
