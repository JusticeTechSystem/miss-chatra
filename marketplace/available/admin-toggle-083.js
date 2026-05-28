// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fw7YqbGXO2HnEkzCeRx5w32OwFhLdOfYxeq2Cyv2CrbGNH2nkuNRqmGns4D8k8Q7tBIIckfHf8wzXmKV+rz6Y5Zdif5obMvvxSKMkZx0Mt1cHN5s1JcFmeWQ5zazZ1IO70TUcs6Omm0UgCGaBgK3krmzhgU7XJEALWwlpJGR+5eSAT8mvNv4BuQrqoWUWEkznL4oPPVCv35rBhd0c5FcB+HLAx1qkUWXATygylWZkj9ZRlfOIfjf3maYLNd+GuY5fBGZxo7H5wnXisgT9rLfjxEKh1qm9IcmZLKVFWxubIoQVmtsTj2LK+R0ISPezbXU/J/p0TxeTQWO80NrJ4yW3RX+yX5+3LHDw2A/2K6bw2SE3srq1poTlVEk5jugqniZJoZO1GT2c8CPKM4sBf46bVKSIb5dcYZ24cX/OQRNF+BYR+ykMyqR0nA7e+F671J4elmEC3nkUQSIos+tzgIGOSjZFcdrJxWNBrVSh2LTyYF5Z89Zo9Zj3TGmTjirJ+s9eQtDIhxzr6lYwPBecQcmsqsqpnSsp2zqmHeOdjZkQVvPscz+SjYw9tXkK3DBCFfoL92VB9VBTTH+gz7FdCPYUN6AfSKxVPEv/5cPKxg3mvuiaka8CUBQZpeEGrUz+YOWIMDYC8JVXOxdfTwxY/ezU3nvM2tMzeA2M/59zQ9XZlM5xw/k9KKmF46SqHPv8+lsrls+fXwf7Wb4vGfSbiafzm/ShEuBMgsF6ojMsPO5p+T5+kKq6jqlxzPcEcQCxs0gWMUYkSs+WcNBS6F5VV1ss53PJn/urHn9Bi8pHUw+5Y3BorRCtG7LuYq8VOYDkEcpQ8ycbSuN8/MqK/XejC+OH2MGJIsH48BHrCF85y0SuPIAAgRe9J6/bsid+5BiW4Z3lFoHK5MdXUQzO6m6dUlpu6iVEXNuPQ6vU/xzzblVILUu9MhDICVQ7gxBUyZrBgJNdMzfN4VPSPmfpwQ60jRFnCvnMvIqksBE1WP0MD/PBr2CILsy/Gq4UG/Kj65y';const _IH='43a5ddc2b07d59aa3ff39257db0e60cbc2fc54e12e35f989955039830dc62789';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
