// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8gMgF6HUMpNsajyvATg9vY2bLJd7J1Sq2BuzMYAokd+vb9Nf/5bu0Vt2A9lI8ftgy6z2WXuG16mQtTxVrDB/qbqWvsm13dENKNWEKjzDTGL+vvCRh7RY3QpBmFoQpAf3f+jVpTbMmJZR6epZ+bOlqSKs34/F9/hYFdp9qCY2rZCr+F/tJ8rYROSq3qnVyFCWV8lIAnfyVrH5lKDFzCUBig8dLvbVoksrsWA3MJtxn7rWHeLL1ETzbvyDareK6U/bSDRYcegTFCvELDKELHZ/P2eAsFQ1X6UJtNnVqGwFZYF0n9cbahQM3AGAhtkPfTYqzFc02a7Vuap60IJMW++4kNNv47AynQZ4ruDIVESY7IOH3dcGCnR4flyLoqvRJaWiWJbgKwPd69/6uIT2lOgm8VdLOOvnHAArx/6ze3uVa3r1adSUsJyDsjhGwV9xKNDCZxdivvo0bnLGL7VAlMVieODRUAx6DNpfENQdK4653cvZPVo6o0h5qgkTdgVTHsNRpnKk+9rXy+HWObJEYyieduDRyHDU7r4i1tG8RcZ8N2kBVc41dHfWtqNclsd+ID/LxyZ5tbMkikDrZQFy/AYn+2/fM7fNv9iBzyq7L2E1dTOKWKFb2hIHG8zCVLDjyJFweo4yMDp1mND2cAnOIKX5iRnZmwffdMcocGu5/3V6UWXzxLYpPskPJqHc10j0wk2ndB+Yrco3P7T8wZ0gzl+vjhO6TgsXGrenPU61Td9l/as8YNAg2oMuxXOCrx6WGCixh29qx6SW/NGk50dENA5drCqsDXddrbF6YWQhePeyr3nN4d9J6i1iAXxTWcC/1rrYuuOVSoV67FSuntV2waCcaX5atQdeBEOrBE5e+PIvDo5Yp4EjJvcZVhVkE7xPiXZj1niuquLLaZJqHs7fSy6QrKsdWygvcuJ+Wry7is8BMUkbD9fISlYg2sBW0rLBzecn5OGD2Awyz5OKyeV3JcmzLGC6cVRZB/ZCEg/hPqaWoq++ph7tD6IXONOWePDdVAUS3ub0zKuHuzKT3PNG7tXkcexvwPqGw';const _IH='8305225b4461532011ef655fcf55cf36dc73ac71a7de792a60ac4ea0f687ee87';let _src;

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
