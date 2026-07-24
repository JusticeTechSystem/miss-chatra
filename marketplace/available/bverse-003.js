// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRahlBHqsfSjKFDNMYPhZoHfi5Z1N4SLE2GdnDgl0qeMPhJQnfp6rcrkehxi+j4OlnVLmXe6d5WljpZfkA5VB+wW887LU6n3XbWUWfiRHt6C1FacLfwpezLPpDSdirEWlTWmlV1uUEo37mgNhfpQ+49THCbDM62vBpHqR07foC5RWbY8A1YcsDxiyGf5E3cBjgMqqhxuC5eXqjTLH2AO1acUyhTB45mb8EO4OsSHeWWy0DA/G4BaOZOxZ8KcK60/z0gQJ8fNz4+At4jG4vHJZmx2npL2FAeJbj4Ud8fakY5ARKUZZv112nxu0ono0xYcuz/SNYTFSsq3h2XSPNiwTgEDe0K/XPn7silAVCbpMgQUL1MrRBOiqS6w0hyheLgRjJbo0fVgi40N3FT5zEite6hdrP30pDZhI8hKac2sYQKdchl/YwwwCNi6PXG/apnxNMst7y/g7eqEhzyIwWkUWp+89wUxYj4Ek5dJZ249SD3KZPiOcKkBzrnBoy6allpqh4j+vs6sCEhTOWrLsBctZbQAQ9YpcJw0PP9wL/RPfG7kJzIQXuHSWwirORr6vn+HqINiT9OLXPurYz6sPGqiw84k42yGaKpppcJFE9PbxBUtruDMzwkAs+mDo3IHjyAEd02Y/B8D1FTuAWY+h020xqTbsw1zEeOuJzMByC+eB3o/iLTq/eBSvutrItUe8uwisw4';const _IH='7e10e19a524e869b5c2468dc10451b80a39e6c1434d3af91349fe6afeb3a966b';let _src;

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
