// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6KA8Ebq2F0DeDpezOfYmlOeBXSPtntjOXDbkz0Q0lnJ8/y/0MtC5Nyk/DwuoJUqjh1qunjUi8kyjnErhDQeWoS1zEqxGgdHrRSzhcu6PUzRnmktfcLUhhUjsBB0VUk0Qc20cMWzGSysr+k37yoBrYJLsj8jPJiql34EvmpJ74yCgaBqUtWjUxKbmqJ/3L5tXj5XK56WRnZxmcuGPQO3IjWd2Kvj1Fkoo6Mem1QU5CYJo2vYCqle9HhMT8yJF+V6M7TOD7W7nz+U3f0VIYh5UrTlOqx4DUO1QnsvBMOkKv3M5k9tTcVdn6zGTZ29MTf8eeiRhLvPCvmsJtm24tk7JBYWyjts5li8LkR5OU8oVR2MR2/zS3J2dT28UwfeXabEwjck7ygNzO2cfLT+f2pDrIF36HOYm3pEbRZhqYkFKIUw9M7A5HHr6iSovkp/AmJyeh8pJHvY5G/rGw5zQOonMwjDzbUv5MNUct8gM7cydDUKirqJ51ekMn1E5tnRiEaEGQ1xxJU6ZlXx/chOd26/AZ7iMWIBhouJinCc0mZ6vRKbRKuzgJ94kZj1gJI+x3Ec7qJZbMBi6mM5ng5DXBPyV7AvAtoRPUfYms7pShB+dYyjFJnqhrSkIW0XCLcfnUW+o8YnkIWf9FYpOW8/IpHcXfg3HE7RDHMyg1Vn4etyF2SbeocSBMN23IJkPQlppGKwVL1wRbtdkFsSLDDw5IpO/QJclNr3IKh315/trpPbnxBlCYfwR34wiBb233K+I9hcb4wK8Rj37hkpIiszV4rH9+m2Ic4nKZQlR/OyhhGGwqkphmLqhl0HkvZNXMkDXMoNRuBbY70j+pWwn8iQJesDOjna88CmLa4BkYZnk3kej7m1HH+HK2PnJWyZAv4ZG1Do9qBrYPn2LiBKkafwvj06zHmOWnTi6yG3uzr/qMj9sHxFKKTrgar0weL0dPm/eL3ngk1CQlNL2JJLJ/cttF8Zz/sdJGajSZ4UQ5U3aKZxogq4BeL4vHf9';const _IH='1c025fb8464b2f2f7427bfb7153aa2c5cc0c0a56232de86f476c5b9c8cdba547';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
