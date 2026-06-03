// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SLgFMiv0yEx337TBSfsGmd0T3boPf2o/Tn3rezi3iWfc3C345jhW+g3+P0akZg2tVwFzz6U+6XWC+RgJpo78CQAYf/69urMG97u1vrbe5w/YzJ+/CE2jblnEfPH/fZFrYgzYSH28KysDlC4W+csQSq0OWSYol2IoroWeR8YSK8/yWqMcxKHrCIAFICA1LQyeXPpFizcQRF63l+mAQKpJvPV+YISPJnq/VyCHJy/nBTt9PkNGJmLk6mUUTKHO46mGzmCy63z6Q99n5HJWi7hbbTnOaLMOxaGtsV4omPI/n1fqbDhhryUWDJyGIuxeklPkWtMf1RKBDdMM7FYLWJ2EZz/UG4T1w0ZYIM4g0AvnZs5f7LVyoulzPhqBIZa4aHjWrqV0ehMm7ZoAN4JGJcpRZgzMoySH7AmxiSh5khjvfzSLvHOTQbs+ySu5qUD/OAb7i0zgW5ZcBqJs372YzYj4k8qQZiEzA1g7VWkaHNVy/PrOKljsjQ3d5TmBn8DrNqu2C7AeJtF3f2ARI3Km7o7WKwJqsaU42d3dO25NiaYUc6HxMZqgC0rwoGFw3FrXksDNDzFw+sa/ebODLO2B+P1R4GuSjZKQK7MoSl7l3i9hkPYHMAqJZtVcC/NYcqkL4RBgKEdqkvnn0UYjcNGh7mDQWOF5kH0S34OawQsi0kd4sUAupB8U2R9BkB/Bgr36ZwPRxNFgJrv6inSUXfg7XCM5eSdDrcRyaea7La+s360CNYY9Z6+lY2/uuQ+I2iE6kT8Nq5U0k/A0wTasd60KeerDhXCWGVPHaIvq1gwDyn9GB4p+5csw605oh7VC2tAhMdz8IHDvNeWagnsKDI5iPlc=';const _IH='3b2e1f6ca10237ef74150ebf68359a50dd32d489ef2203876f7e2259c61b39fb';let _src;

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
