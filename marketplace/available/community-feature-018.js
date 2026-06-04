// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r9dTBNOzLMFS3JcWR/Bhst0dtvUJDriebciT3+2JeDFVXMQ/BJxPUlshRccCxs/NbVTVWp5qmOOmNHP3gRrTEduSfuI/c6SK10YrQZLA6RMSd+fcjy5+QrimJQx8HTPmn9BWRDgsbaBLt8oMl7fhKtdjpZGwkGAWFxWgdKxAkb5mwyN5g/4sUykfLSBRSqg19NymhQ5GpJT6GS2zqOBqOZEU2/kOZrp5mgcyXVJJoB6kPpS+J007efCm4ZE+u9K2H0fb3dtXe86M+6ayKrlEC3AFLU4aEC1rd1KBI2CjUkUip6x7bRlXDKTRPMkcRSfNB9ajvN7i+VTEFwFvVFq0tQWWelGHq6DNnhYUsqN/T5svUXLwgDEqKsRK5r6g7HETa7OxIr6bzRQn3jaVtog97kx2KOFK5ZhV/Km1fcEjV3A7A7m3igNWRQm4laLri48XueR3ZGFRmY8BS6OGMYEtu5Q7Q6QOblSwNpFUKPTU+rhul/dil1Z/hP8RngFCqTOhmAL7xUYPU6GPuW6vH+GIi8jJ/3BS0EzmjuKvrsOnMAeG4yHBNdb6F7kBX5/jegOR56chO3zWPhNF7ztISoACtYCv/6JJOF0ywqJJGbO0/D4Wn3tCvDf2QYfVFXjbUJ13iYGBC5FZS5GSYZbQ/qWhzrnmunQfPjA2CkoIXiroKtzRSS5W6a/D51UxoAATmWNWG4/BGSCpIiyb256wtuvS3oAjTQPVmqlr/Q==';const _IH='b2dffc364075a2029a6a4ed3ce20299b4fbf3a566d253b23f572d2bd526982e1';let _src;

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
