// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8p4D9rkRFUrDGSy6ug2QWTC8VWztftd5SCURO1yG7OcBmLIRb950I4CQv+UNjp61w5OpFtCajFKSpbgrL6gVyMYeZ53Z7DPqnz+ALUkprxl4fE2RQ6Zpbo0Rbwm+JLb9khPOVO1QYq9k8zY0bhBamdrbkzDs/rMd47EzRJyVNjUoU+q6eAE7kpWKdvkCzCxnqxlwQ+gUa4MxG4My5cpxh/7SSlXdh1QmOcfOKaal+AJKgMmtS62gkrBLR6x8UxKGdfBHTxPQiIoQjkHfI2t1gcpgpujYwCn/Bui3k57f/QEaFGGu71WGyYWlElXQB2gif6flg/W4IXCzlEyTErFnrilDbEkiOzRtMx3uRkbMy4U/3gxsrgZ9tLC6SFQtX17Qm/swNcijGonJPUFdf4GPympZhgeK33PSfM8KS0SXfJ8gCuVfc5Jbu2/bduoVeAvk9e1mLM4SXHN7ACxQbj1NHn2Wu/a3sHxvzV66DIJAPY2LT866UbVxX7Zsq45t+Lb/iE9+vaMXXrlHK1q/PZhvURebAZUc4COVEZp1wPMVPdbhzsNVnLOxfb9Ch4ThnXqrKv/YzUet7f9Mo/KmBMvsqji5oSn2NWEnCZ97OOeK/DSom1Dcmyh1k9mrIKsDWYORmKmUh5gSB7sOmEf9Bl1bLxne9ntGIy1GKWGE+COLERZnOJYw4LSPuLMWge8e5hfORrGrufy/hKvL8zNpZ/f5pzxCCIghyeD1XV2nbN4+gGx6QdHrpILAMrCphQCaicRI+piK1ad4XlV+oVYU0bS0A8jCwM9RThtBhvK1Uf1FoDw3S54rlS0m2xzCI8wvVh+PVGy7n6Jhzl4bNLXO4Zr8YLClOI4DmOydTWl1pLmnU9jll0BSbp/VRZ1DR/WbkhnVIczLc1gdSjpN5fDYkG6oT1lAESJqvUXzPNqc60Ikyi4NiLaexz4gIBtE=';const _IH='caee9d995ab3366d80cb508c41c3ae0f17679282667add2b5561747a9a744716';let _src;

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
