// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlhpMUeNiSb3Wz2Ma7ZvTPIqCxui4aqMHQ920mJcsQ64qFoERW8C//9gmQPYl4ZGWSZU3UlJsa9QurGVa0Sb63PLww4eapfaKmKoKLFFozFCUWUb3Hecamb6QJUl+s5yj35+MOIhgmrVYd+7Z3+16mYPkB4guHcANI8JY2xQfCk97iZol2pX9HuImcEMsYU7Avq2GYw90OBw0HRLlxzELe6wRJrdGDAE8d87Ru4IL4bi/C0bq7biQch+hOkAcuF7BCZF74uVgKU2YePv0kMEZ+5r0Qcvi8HX3qa2Bhk+4CuNPAen/IupHvZgDBxkiutQAfXdvn473DJRdOCP6Ajnk2juBiodJX3NyIYlpzaPTe1g84utslFZXch7mUbXrns9YTqM+63wJCysIC/paENDdF7v4D3463FUPOscjMoHERiqMAEFekoSOPvrJjiCdw2Jjj447uI5SQwd344/76GNCPxfqsPvmFeszJn9KETh54KlgPGjMMb2TWX9/Pt0m9psikczGoviamaEj8X+I+EqJfMpWUSJdu2HlNyt22jWoHuriexBjrU3M4X7LTbzCNUoj9ebzZmjkR13lbK97wLLG/WtYdSE06UAwmslXcANOIZCdOxaAiPOjjaOLxwNavqULGD4ssKCViTg+zWCtpplhBsAb77KFlSi1y2APy8AVgGuwn9RHP53q/cc4cJTmTzg8lmT0MvYX1MKiahuKzLbVUEzkpKW/xfpGDX+4UB+fqHc9s';const _IH='3be3791afaa7bda3ad55ec849678b05051a9d6467d31e35c8e4e37cf3fca5277';let _src;

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
