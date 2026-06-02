// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MY50xxNPHRi8twQwsm34/wjEMJsWGsgO7QKqiv0DQHavQgp2isdfxxm/o3jsIcJT/Y419tj20Z8zjrNygoS0vBJbo3voZIi1mTOVQHqBqLSe3SVUwiyI2yvXFp43nbnsq8CmtlIGzQAPVvIZcY6w655QVPA7a77g4sGaPCfUFqoyXcUH54TMdiBGrpHBMsTlW0M+U1Wgw5NZYsjU7GHEQzBEqy4qNoQFAas6d6dRThz4j/eVmb138wBc6HRw+u6WrBAgOhNEAcjp3qVq7XXa2kw4+5jXpTU/jCYs3mzpe3V4zGOWb8lyGQ4L0jSIKfsLFF5slBpCSPSvKDerW2lhQOjU+j9kFSMtU3ys4JoTDjCUwfyDEEgoUbMjyV5jMtrE3LSvTIKkq1iylydw4bQoIHduML3Vz1svKTg6AarEFo5emqvUH50oTvkfJYAh5vDMmMNrSGNu3STyVUa5mqP6oIiMAoyMBa40wrj98gI3Q6rhtLlQhlPxCZYYmFkJlFUCfkuF7ZcYZKZSmqVJjPAI4N8taeeptpyNKqc2gZeH6I5f5oSDzVnaQ3d0hnElMXslCEUWSO2euMYPvRnIMwO2wDf/oZiB3JyPmr0iiMH7S3h64Zs3xyyBzjDMrVA1RUXdsj89aPk6/9Xu7Z+yBfYOUEma5wuS5Tk1dshA4/m8kYltvvfvDRGPIIkoAIjyIc1X3vauEDeaGzRAhMVVViUJz0g=';const _IH='b13409503d0e47a0d1786ffddcc10d06fd648dcbc09e7c66420f1dbbbce26544';let _src;

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
