// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKs3en6ygWn2Y0Aqn9FEHK2b4kK363o7jWZnnwXM+B35kJIhBsKrlAO+FtFkac83N2rNMcZtdwNovepLowB+Y0SL+E7hqB0YfcXWqK3reHbJOA+2GnSKUcCGVSKDz5GLAgFzhf0jlKO2bZpvkfrSpthi441H5CigsbLJujhaNNEnPywFuZp6LxqJCGn4psM50+vcsUF9Ca12M8DAQW+YK5tC9TufVeT5pkoeaMDoeSEQx3UF+9NCbQAyuPKhxzqx1I7GmSNfVicr89nbchddg9n8Dnmye0MUIPL846bqCUzpXcd60JiH69QozZ2cTqJ15b0jSMTnJ7E1518o/2vQLyfXJ262xuM2x+huf4shVoxq8oqF+rDQ1ldSqJNNmeLJ+BVx62jc0DPGs1wbmzclGzip9z4HUqzvAwwKSAmvuZRLyhHon5LtGI9f+EiSLHtHIrHzCsyq1YxFjHuXkyaxRv3yMFKedsnecaGguQsFmAOnYP390ZGKm/HKS2Y/1lN4HMU0vHR13VeIXsC+PmZrlXliCk3cxXyQickOjxE8qXiaDdJrekYG0fTRgUz3LYw5S2t4lxd9tFo1TyVclZTfJAHzqgvCyQ3GYkLca/EP6FARWhIsKPGfrYT+hnDEoA6HnW0Z812HOVyUMQWwBDSxJjfESFsOrLbh99iYSIrukKqNu4/OxkxWgrHvvjclHQCznKptYDi2wf35vRWdwg7B2+47T6Tji8J4TEbRtnlkPMltfsIbjLXUCwfMt6sHphrkg299+2WsYYQ72q5rjNl+XnFynCm/U8aIy+0hH0WmE5NFfPWHfkOaJyspTT+yy0UifwMr19Qvge7Zvx2NBVzuWnDfAywqcCHl1iyGBeBZMLxy1Zzj9QWJMUYJjnChqJVeVciRELVE/FjQtqB7SSUjjzhHZsaJ4fJcd5f4WTfNJpqFOoeHUrkQp1nzcNgF/WgnhHlMr44LYnbk+mzCEi3KHu3wzzCbjOK+v3lpG/7papu/+k3LCXE351hEYXH7lDtzKc652MOCcxHuSKZRA03dItK7Ju0j4Hl6Hdy/WTA0sgGTcgxw62m1n15zZEPwn207nsLSHggni5rZZz5+gsD5fUlYQLyWV+4ZUVzuMdtr4+Laa7ijTldK8IE/IEanqjswgCixUtNfapOq3Bpfn5QpZ1XtXh2A8vuJzX+zfZRjj2pvD+UFeI038MJpakzkWxAIy56YRHJf93F6G5TTFcO5dW6ceuWQQ5DscDUvgGm3MyD6dMV1k/WPgMh3lDPvYkhKj6PU9yaSd+gA95LK3uV6unuvDGjLuchZO8WD8PvSc1AmOVuv1J+Y1ey82mtyxiZAmA1QNBzuk1eOOFKt/Kek4zEPUSxKFJGqw+P5ie6Zk=';const _IH='2698e416d5cd921e917fc699d530a4c75a9f2dbe27853a099426443e9e541ffd';let _src;

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
