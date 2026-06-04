// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d41ijcGtoiaPIv/KGfLD6sThm7/RxGX/uJhJxPa3118w3xrsEq5fCYV44FL8dOlUuAUFl/QxcXidkmpBDeDr06pwTHDfAu++3t45Krv5fJ1rIX1BPWOwOHKjQlt8hQuQsd8LgxqZEDJXnzpNyAONf7qHf+LIcmCRKzgD2k7cXSUsfeHYRsKFFcaW9Xvmt0Yn5HQsuXBkpVi36hg7PXa2ykuELzu0u58o/9v/aquh0eFZDENqgU+cfB6tJX9Goj187w/W34h8fRLzP55Wd42zO2yNqS+k2g+fg5J3Xd4E5YufrRbY9n4BfOAFe39OgHbXI5IabZFdnSOMWhmzYCdgDHFReYT8d+mYFu4FQDRQxiK1orTKUpzqNuMVwXmOCtg4pHNqP9AmR11YheyTnd2U5XsN5nMhK4lNAHXvDFlmGelWWY/iWaH3hxEuKLMskFOnxTdi020mEkPSchiRwpw8OeTSgw+P8fdMIDW+kT+kW0fIm57JdduzD4dapb4GygwZBMaUYubOsQWliqdYK2gYyvutaw5WRNwJKrpLS8HuZ3TZp2OrTdiMN3Cnc+V+cCNLBEFlGtV6rrVl+jQsnlJLxbvT73LdV1Jq4HZKIkoVrY8tsqw3R0SfmKgN60qHEZMeMO26YOd9oclIeRjFNP4dfrk6tER33S2VLJN5sSkUELBsQRJSJkPpRfqyEzYIYLJ3DpSCVAuGMDOQ1e8hGBz5uvmi1EKxxni5LRgE4noxRYoVhc+mWhIb/6epE1ClWjSoqo/zF4rux4ermNpXGmFkelR0Iifi1DrLMYTNP77qRPcIJUfBGBVTdAWBH3xT8nPrMM3/SElvW6pp5S++xji99HyTn5iWcLL68DaI9oFv90GP4umOoZd7KeZ6cyAuo3fbfYVSTPqV5K0jGZ9DjuP0sUogNhmkh+KZQ6dWGPGQTOJzunEUG0gBQ/s7aOJU0lQkPfUeoZ5DgacqUaF6SbFbqgzksrq+Wja6';const _IH='c2d8e0b634a3f9030d86cf43d690400731a3a390ab35a8729b2c2b621b3cf642';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
