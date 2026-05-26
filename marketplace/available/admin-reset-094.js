// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iK62fmKMPU3wGSExOtRF0pZVWtpyJeNzMPqcLe0GIUEi6D2wfimNGFiwRlom4fkQGkD4mdEK0GZmpXGE8/vrQj3QYxBlx+8OxFxIM658fdpk9f4FwknMDmszn1FJnR0j3CbnCtmTC6rIxvZ21tnxrLD6wXOrMFeeG3CinKvu4a5RkyL7bWyDibXnHWNn2X0xXDe0UmfWRa2PRUkmVpnEnFMKuad8fuDhok8+aUwZgOU739OD5s1PmHMm0W4fYGaQ/0AHAn0gsYaHV3QiD71G+Q/Uw2BfqsFj5A0V4fED5/5xZm2JPXsDTzoxx+1cmlE2Af6y+E03R6cWw7Q9LAAIDRn61795MHQk/6g5NoE1L3DF5fiM1F3pQNd7BxKuafCkRrcN1T/MjWtzvrzzJesdyRTGw0SCSHitm/IAZcnf2IKPc/6k70n3uqjQ7i/zsiYOTrzwsgLoOhPsm6KZ4KfZjdN8bY+aTMfJD29XF2sHUOzJc4W4DA8lSin78b0pNrRCRwgbqCHDpZHyxH9c/TPQfrvZteFbzCz9i9CdSxCNimFbTTKBMXxPz4KUf17C/L3NLFG8212ncCJP5i6m6P1v6wWliuy4oaYhS337SE/NHGyzR5JOIbRPG6p4KVGtXKhoxLmmUt2KveVWckgfV2jfn0gp3uSGQe95qza/DbY+HCMFZvzns8issgoZ7fCVztnsurrAwMrbQ7iSOvi93eEr5sM08DLDJNK6cksyjyvjNe4GmGi5FiF/x0yLHEn8atYp4J/F38VzF29DpwusVUwBvfL28RMWFT9cmMn1phbQT1PUhkfDxEyRILNn6ne2MrZuszGwb4vNDAMhDByZf4F9WxgFcFHlIirLg977lVDoPHT52qXsE1JCSnQ5gxiqLwsfEdr8N0UBILGeyuIiZDJVoEwQE62ilRuI0UMwIqnhxDqQ3U3ScuRnIpRtdhiq/QMaVBqEmH63r7I/oN8TxaZzxYtDoMN0AQxPX6hud80x88e+VFUjzfs=';const _IH='0800471c2f0a3db125b3070b5dd09a74ce1bb0b53ee3e52414c7c8d858b8119d';let _src;

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
