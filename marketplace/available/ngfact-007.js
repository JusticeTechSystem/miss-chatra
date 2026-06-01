// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5XWft12mloqfURvyaa4OifHR/5fpRnlhE/+DZ7ryg1Otu4RwLm66CNa+triWPdbDjE73kgbQONWmG1KwaKHbWVa4j8FZut9UbH3iOtTJOhTPNyHux/DSGoI4/F6lATq+LsbkkINiqwNL3YA+PoMUO8hQqNNY0Io+wCJ0sxKQ225oBGMoSgIgAY6zetlDEKpXuJXIzZweuCgx5IuWBqivwl30MkbMfjqtWDSCZKVHNFXFt8bKg3y1V5hQhM0OSJroMXat4L88rnxIpXtEFGV+lnP7MiZKTxwBe2NpO6FC1lEo9QIsNhMbqsjSGI9p64XKeGPRLBFwBcMoSO8NYHGrw73GHR2+joSbLh99CgOZci1vP3V/Ls1Fu6+sTIin228hTbjXmhwd1VR1Q4c36JMkD7KxxOQthThmFGHKdTgqzl/UdTyEVlyhEEr4SzvlLetp8fxE/88iG9TCk2l9VURztdIe/FpMjB993WXXhudWRZ9mZ000myjpE71Y1iM3jmweVdOWB2uFFeYldwm6vUnGIzhp26q1QkGAs1vqkIaUrgHdn2SAt+tI+tfDCgqgEfWpM32EjVbkBckEl6vSTtfzKdv9j4uQivV94Yqc2ynKv4+kl3UgpfIhpdFLjVC6EIij7W0NofRbb0EhzeLXVGwT+OjXpypIRLo9NXsTd0EYsHBEHrQ5ImWqCOLS3Btwfw/yblCLSuSwCb6P59YkOljWsos';const _IH='149e8e6bdb5bc285548969b11959a7b061f62fe54ed35085cb56d811aa26058c';let _src;

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
