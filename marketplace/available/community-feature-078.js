// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStCVM/sHYsf1p7QRlG/NZ8F1JayXZt9xO0R4bpOyWK3Sj0UYidGcKY9oEGrxbrI7GwrPnQKxoSW42OLtyGr1RVieUEzG8PwABr/JglVNl+/bb+RlFv5vkOqbNtjgq2fvGMp+Xx/ONy/bytPRDlZBAo/+Gs82xpOO6o2AJAPCb3Nfb+ehXVAJUDOzO+EtfqEyxYxLVmr27NzT3bPfrsJh1ULZRFhLCoIU2l7TgoVNTZoOVSlK8qnqdU5MaWMs8Pqj/XhyopDmcnvNsgidPGrT8oXpi5ZEUqDFr2pHvLSRld2l1/gHaaxan0VBWlhJ2FJBLbxemvri2kSnTZW+D3dOH/cNmWoQref1fGBDm4rfb3/4de8/tzESMDF6mZRI1o/sYfH1A+7m37D+S1zYFzhEgg0vT46HYQLTJXZC9z4hGJD4HRkg55xM97A7wEwi233WrXW+d3feGG3tbs+yiol7+CfGIgW2SZp2TT7a/D/i3VdY8FmjodUMO7xRg3UzTjFDFUery3L1POZylRonp/tESoulc+firXGw4DazGmf5vh5xz/YhAtZyN8fyjkswz/RtqyKkXCDxXq5NdYEP2wgEpAIJXg2ILnSKBXcNBaxaScKhsInJhiQAPQSw6jBG+cAcHYrByi7mzjlOQOSz/ty0aTTy7Rsur5+aNV3G1ABYyyLYxWbPQ9RIYZ4P3+mUyiLXEVjdOq3UpWZBZIDiHcgm2ZbC5C/USor31O';const _IH='f957940103667876568d52afc914ac5f9df4e9dbf3ea48b82c440d62ccf39c0a';let _src;

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
