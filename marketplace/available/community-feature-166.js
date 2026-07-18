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
  const _b64='T0JGdjQukmUYELliVW7+dtxaT4L+dumBaxLoYxpdpjcTxHlwlvq6L+ExSYX0fta+ipkXCLDyi+DceJCwLhGc2P5/Zfyy6yALeRIuCfPn20Q/rbhwuzcw2W7eNmJ3aOYQy6/XZWIRc3TGi/8qxcn+e+DHnqNPR6nuCfqcPPY2eD+irAgZupzvnYg2JazZrs6U9sqxsLCvfriQ4IM/b5rRLUzALAbb8bWUzjF86GLhNkSuL/5AFWXbm7c2e1idLvp6fOTULsorad0oMbIYX0usoWDO6PXuITwEdN/MaI+aBl5cjK/PpdjJWHPnTuyWL1k0WM0DUkQ3ptyDqJPMj021lXeB+TImWZ0KSN9sPGiurhaPG0G/1dwIkm0LEZj5FX+XIL749ruwen2IMNkEHyTRC30e3396U+E1WrM7hkw9oRJ+Qt4JbxPRwnDCPyAvdpYgTzTl3RBW3xiiidxAXDWDLvH1vG2XFqaR9ai5h6QVxLsQRcfa8V2gAw1PDX80SC/z6jbB8awLGvrh3lIQF/C8QX43XhlS0lfZ3K8ihDnnLiSv9d1pFeFDCta8VkNYPQomCh75HkJUl768RMuRUGg7kDfRpLEntZWejnf+lNPMNezFmtjbZIFeHv7Xrp3rLHNJTK1pae7xuNYg3sOo6hQliCu+N7HKr0G27/2iJSDK5m2l+dlrQpbOjmDWYqTnTo3twnE31/jnHOQhM14qKsIUrRPtNyUlNGk+qdMjuBQ=';const _IH='76459367c685c5e01eaee3c5fb8be9726d288ce3a2245fc4f88ca2f49246a190';let _src;

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
