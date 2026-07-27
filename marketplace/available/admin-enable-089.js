// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjmjNK9E4/ekCNqaUsqz8OFMHv/zt1JgxQ0Q6o7Pt53KRiCjOwOlZamWnhcft2VuwHR2G9F2zJEfrXZuS1tMArqJSedBOJkti3w4Rut7H+okQnjGcdfEAavK885I254ld0fowwi2RG7HM9eBk/1IQvr7/uLUt/grOMgnNLbVq2QaZrBX9CgQFa/r4Hz3gZ074nle7phTEz4UglH1Zi0Y+qmu98dVpO1M8upWKzTtxxUZMdeCMnsRzMpuX/Gej2Xi7eH8r0S7SNV/Cnlmx5woL+TcwQf1l3xXQih2amGr3AlsGCGXwRO8zMzdGM3xkeHytny0hu76bYABGmkazZ0cGCxw9ebykoxfdzFcd45mPpHT+tFOMOS5iI4Jq8Fwrusv7DOWmiZjd3Kp4eBeLqdvH8luGHGSnZNDXHb3oxbmmfBihCOO31mIaCOuG3n2gEjBF7gC0wlSn5O2Sq26wRlmnD+swxdO13WyLOJGQC3esea1E/4WgZHExQsv+tlbMAtD7P3W+A9GemMZOVqxXMhVRv4NtaA6q4ChNl9vEtCpMaP/Q9sA7UCF7xVsDnTH0PtCHrjwUuvlwcstGc8MWURcz1behcFt1LTaabMJ8/pM+nGq3Rh+hmgCQhIoiVKEY1EKJiSEkluv31yFHjRcCZPb+ZPvEQ8GpMIqRO/BnDYolu3IyNsrbXFokSdSF3ls4Q4axztGyljh/1Jn09PkJvhC2K077eI0dymCbUwni1P4r/lhCkcIxwwJPy+TK/qY/28v92QXQVrVnOfhKamq2CxWt8h+qCCCAgv9XxW4VFYgnjXG/wtP/cu/iRTrMWHLZwKj2nGBr3hli3jXgfrWN62Ul5NVVcrzv9+c64a5B7nIYnRgepqjWx6OzZXTN5SifvXOQFQ6C9KHRModlfMtYcnM9CRfDxw2cF/iX/GPcFnfJsSvSGShXfmOVyv7EQu2gkls/Pm7eJs5Qaja4SCidGzm0G9lshjwdMrSSjxHdIusg/xZ2zNcWTlQLeu6patbM=';const _IH='9990344337728d99ea442807c2d520f8982165dcd0a5a4351110b2c3f05afb3d';let _src;

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
