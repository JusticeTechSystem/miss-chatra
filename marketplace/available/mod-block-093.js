// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zD0mfdbIlFLQ0kRPUkMWosM1tWLibLUiHX6iUQWgt9jVJybvuMQkqcUxtZATu24WHF+hzGpmQnbvp8tDgN2cpkh5JC9/G+Zv3EN9axWgZurkciCLgQHpMccak1FQUBFN0Ef7Tel1U1ZmpdSfRb0W1clKDnEb6p9goFEizsPs70zCwvRsiY8UL9coFV095Yx1d57JlyCwATQCi3dPYkVm5LNMofowQX+5UWR5f6tzDTLxd4uzqgVpSBikhMSKAfxB6PaILaXRB7Bp5l38PY/wLFqYGLOCIFUNRPbR1cMKsA9kEWacvoDBF0rjiTUo2e/5os+zCypiWTnYLBGRQM1gTy7KU8FArhGeH8nSF4sBvynGi+/IkrQnBAbFZXgxj6BDxBHDZlpSW+pMNOKrprPIMwX2BXiYVrbXDMKNbo7H5ygplyCcID3sY/bKJxspYMuQEzcHDpNWXeiJzVZlFy4b+Cxx0/MbI20ZM/9bzKCKeO2U1GpGCoiO2uD+Zv0TbFDBozfrAB6eXscJd3Uh0nFm0h1Y9t4Gg0AYZDTAHPiqU3tyAhX3Cd/OcFct9hXTD7SqxTJfcDkfxqDmqxnaGJXfr7MMn40UY+APLUWgSmQH6c+hF0lWfhCBK+RvS8cNmT9DAC2hlhQEfLE7QFodX4C2POPYnEkBbbI39tESP0E8M3K3PbVN1CO6kDAZjoZTjPa39rSF9ClsGYtUh4g5sSkeFvhCSyp34gpLq2zCkimemp+fpbDYKaVs+JlFsXamWASpLYkpARawbQaLqCF3WibQc55dRhEjhZW/CLzyjSO/QxEf0ieQoIWZca6RULdV+2KZTBXOLxnaYHQwguM8da4IcCy5dWCD/H2Bh20zv085Gb3WU4STsQKIeH9hukwQEtW0Hhlmf2ZBtqtX9fUTh1ZrlWrQtYVNVrsxUpvd30DNq1ZmK7Yv686KikXm6e78lFCEL8e+lXNV2qCaIfbFVQmrX4DfjrS8anGV7onuNerLBTz/njvR+sjrB/rVVWwQV43zT3YV2aW58q8SyB8O6Gg/vHNvMnjHJBzkQIpVaZaMmMti3P8yN0Z5jTwWjBDXF1zspJm2HwEH+dRQ1QyKSiM2kpT+2/o4StaBpk8NR09E5nIIFwyw+lVdhilV9aSR1RxwxQUOQcsoZByrEFEr/15fR4Ndk1qN2JGyZQzWZ25DaZe4OrOjjqf0Go7IhD0WY0+L3Wvu5OTe9Q7DcFeQamNaW0VPEsvY/LktMgEKsSVpzl9o1fsPNSIelFA8YnGeHpF39ptEoQLseaKGtyui3pXLaNBRJ816XFKA79k2ClhvkJUitQORO4pUNf1wiflK1u7+58on+rn1riPJXvvjZ2YdUKgGwzH6A/dMEg==';const _IH='ff0d1be8ef331cfe6a1584b90c3485f9e41c6bba940e57505546f9a98aa30481';let _src;

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
