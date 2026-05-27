// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a/6taAin18zgNKT8YfQMIPZaWjLr/Rt8u6QMUn5EQqEIhDK6EtXbYZc9HsgW4B9YNzK/XIn/jRq0UCrQOPvXV2jMr02WXwxb5yKiFuVqRgdlI3fimsheCDVxH2p0RBGCtUFbRJ5Wtsash1QXXBspoTeR1uIzRGkUkg90ZdHQ+AtxlqURHgmLOzCxwUMfaR6V5zCP4djf3o1Bfnmwjk3aw0UfWSa5VsVOMSmL/XCDE5Ckwj9drxMBwsQ4t4QoTsXt+ks4KNfI/KyZV96/2yjCo1d4Zf2SUm2qKknwEM5s8W7A+GZR4aysn+jxJ2gg7L8zTlv9fNgEcXDKK3gKywSHfOFJd1HdKO64wwFoR8e/9LMxCX+Zq+fxWtAnBIFif/exvWqRxaT+OiX+7Au9oqj/xb2kClw9G21wHwKNlvBMLKaf91aTsrPicKoIrfQXJmYqn14edzCD/1BH9mtijx43PC+KaUP7SE6/31II6EPPiJNsePgO+G221hf3W5Or6/Yi1l4c7BMV3q4qKnKl/zWtZ/lLqDiH6Zf+t8HNsUlekjjY7Vp6UCMPgUYworpqPixJ8JZhL99iymfQg9hL38+6BC1GmZsSPtljE5G8F5EJbRbAcuH1A3YyChecq+9lieQtye8Em4biGGaYurYhV7aozSZW4vhSX2pJe3nv4Wy6OQf1FFhiYi7aAQdbrsflLHHCKwFZCqc+7g2chhZek7r0SnLwKnT1a5j8UPEYc8wB4xvEC3kWJErzNjQmWDOuhCwxgngW7iYSsKw5ttNaeHmHF2vUYJlMPFEhdPgk1wnNsGLze5UsmAq3QmQXA35G2UNaZo1Mb3Ykq9d1TTHYfgcx8CcnGECrwqiGbgezngEDKO3qLuyjBVvoFCWq89ZvZAKnoAGpJ/g2A+i+EjjizIRaRs/aA6gZ7Sw7w+KHmvcavfAzNNvbCQF8IG28VGu9vTb1OiPZC0F7I+MqgtCynpER/FTYlowN3RZU6y5sZvpbqWjbZEQuzcPclrUFPMbi2+3PNA==';const _IH='75b4a24b7a168c6679637f604b33a713f5b07322d0b563ce000ab2843dbab74c';let _src;

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
