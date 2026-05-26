// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0wDZO7JZodeKjWPWzZso+yQF6dQIRhOXUa/EopqWrgyEXdoEXfcdtCBrkHiviq/Om+XTXJLXSfrp/ZyPoFGcs3B5hspHQLNLWY71J4DYowSfx82ZnFp9cux9MBR9JYq6iWqorCyWRab5EcuJxykcZYjsUG9/fFBPqiDWJBJa+lnS3+ecHg2aBYuD1WvuTle51tGpHF6fkYgSPTosy3SBDlEl0A9nugCSlVHdBfeF8xAzliNiuQ0yT3yf9fciaJXB+MFrc792YIqp3LA3TCS4lLxbjUWrqS0CO/mzqByvzESx7g6STuKL8miajW5FRWX3g+2Xf+x4fLcC1Ifb3buqrUDr1Ogr4dWQc8KOGrUVLYGFWEmtJDmsJnSyrdCYX+AfIKmPK09xQIzqmxmjP+G0kf7qet+FUhLoAlu9JQKX96+fijzjk6iOqMzwWVst8/CDb5vDo8ndAGxoZx7HGfpMamcxDaCdsNXxziHHskoGJtJVQHmU6gWFR1YlaoKnIS+1sxY34EWNhmw0x8KJcblwhoIoh9jdpWKyi0kK7b6XsV7CjIxkOLU1yRFdcQ8qVCk/bhcXw8neuHymDCUm61rlNWi8sxOU0AntmmuP3Ix+Qw/G04Npo7VKkXNqGHZeGQ7DFyJJx9LJVSkIyShCzCNsM/p2bGpuYrN6ChjgPb7OMmiohylqoo02tRQvR9Enl7mSyjdeoK1y1+DDl5pEg87ZjO0nNwnPrLbH04Orq0LGe/dMB7+X6nDNKW5fqmd6w0l1XJUDHANAuhJaNwcxo9Qv4a2LlBHRUAAgyTWGHGFEr62DninOdjOuYZpk/CyGArKt42M9s3xrkmwPckjzVtptccPdiev2aWF/kRetlolea6SEAOPA9sLSTkN7JOcXBqtK5ga50X32GIVQeH3EwR1UwlYo3HtLvFiPfvJOzLdyydNRXuXxqGaXKGa41WMuAY+XzQH40gvCG8JKgsBizBadA88zFJjCrOqJt2EBKTkbUEmzcRNwCsijIWx0I1CgKUrmeMlEgg==';const _IH='93286f2d1808cb407db652fad43cdc660851d2f90e076dc3a6184758e982c6fd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
