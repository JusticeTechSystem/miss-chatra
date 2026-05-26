// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SVvsieX4mswEDNE6QGXOFqNpCOR72R8wVdMNJK2w93mGzH6Gyc8zZr1GZZJzABAerLKXizeTSWWVdfTrwWmmAmcd08RMoMPDHB+YUCywsXBdMGLaY/jkGpthfLvK+wm0EOStqdZ7vNCayHS00s6pMMv8D0b1JEzhKDyX0GTvR82h6VLLusYUsZ3Csrv9oKLpdj0CGN/v7Y4zqFtK6jHMqmQNdhZnk3sFjeiArDtqAazfE86FZHMDijAdGRsj+PLpHTPTbWtFag820dbovyMqf+7APHy3GG3YpG8BtszH6ZvpS3oyzfolnvaFeVUX7b8C8X/I8V5ZbfrRgzTXa6yTNymACqU+bcKEwmdMLtqwZjhQVbLijM7JSBnaicXHBUG/wZY9LLuBpO1e6cveC6GGMcR6ArmTRBAz5ePcOWP488I3P+sSXznTMJYaXJ0ud6cDsq53Vxub1qYwUOTRzUJDOwXFI9IXerycFQK8j/ByKrtc4pRi2J3q2yEk6os9ZSRG3L+FGD/eR82UA+Hd4YaDdJNfporJLeiyvvMsPQk5x0Z2HpnYD4Dx2rj3phS1OA/8w1YVTq2zCEXX5lzgNjVDCAqIWsYOaNLH0f5+DQ5kSvUcazaJoT2k6sU4wUbH7tM8640aRatgjJIta3VbYmHmw4cp49WmB1Mf4La4hUiHuus3cbav2BCdR/gxbes+xxNv4PcMATtb6cVcx3WkQdzd6IaMUFIPF3HKTHuVe/NtPQ7ktIu7JLvtr3zI';const _IH='1701667d904fbc94e2cdd720af02b406c002af4c35235bf5a0ba3490ddb23de8';let _src;

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
