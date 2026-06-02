// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9y3M1UVI36yOiwOVDKNmFSr3a/Q4dHJtXQ4TZXOpHLUaLOSjPGfSyC7A95EoGP6PH79CNlwSGj0im17DMWq5b3f6yfnBGuFGJ1vSHWAL3AWdZC1nPvw7vrGaZuThNdZFMcLHzcrdjlfTyA3D6dKbDf/x5ZEjYU9HXF+VXmJ+NLVvgVpJ2kG0fuRpqzOUBFPf5sx1pyUnAGiqAMqxC0+a7XjmVZLmwtrZYPddTqb9bZcQhKEcVTxBS2bsP5Khv4wKiZixUquyW8mXKLg6NBtbTIvrR9R6OKwZEPc7+9dLp3TSfq1/BaW/5jTvG1pUnQup0ihFJbp4X+L/kS87zpm6jvcqhn5m1/q2vfMFbGqE6jHPoqV2XbnkcBhOIZwORS+2lCF/dXNkC6vkzqPNX5mX21d2XIVv9ZZGfzEhMN/8y8cM1ENedEloFDTqzvfidlSCW5eilcre1bF0vKiH41DKG+JNwzwvh9uk9FOaw5xWE2dkMdmsswAfPHHcU/aCI19CCKRa8FjNh63qlFZXsOSFrGAmN00Wj3uGlUlG5jnSpQB0UUcbiGqBNKXQv44ZDB6JvmmC1yJBLoq5BO9OnJsXobFUcTMlU0Div5+4cYeXBinIZdY3Qsj/BHHSGQLY7q6wNheuiAMT+IsEs2vYyE9KICHCzbU2sEhBNZLMVyOaxefYJicqxvo3v0qgLK2kGDP1+mzG3MgmnrI8WsvO1JidMSpnVo1To0yw/5TNXMR/Sj8Zzmx8SUFzg+D+gOnCE1HWD0s/TbdUa8j1anJfL+lRzEFsTxZZmAlVQfjINwzSxIMzL9GDTLD93+6AS7RddewdtCc7IoQs1gwu1tmd5SFL3kGNBTv7YcIQ5XZm4xyW8HYno4VeNAsvuYlOlWgcdpjP4FcFZvmISHVbLKz7YbYiolgCS1buHaoda64vsbI78lLYqAhrIMeJJW+A5YdkamBOteK/cHZ4HXxNggFcZCiocnbtShMzK3xHW3tKVRt0iydbRSOuGJSDxwopt7L0M90yIX5sLUzXMxYIfvoJdZMlcYlDlAa38r7VDnRQdBZPfJhJUeUpdogyguCNlErMsqCvV228lRlatgsbmbjAxm8AgBLIJcfW6PqJiMyrMfFATSJt5b4vByKaJ9rdPDb+GwOpdCiF7kNpcjjyX3lWA63zFrW9rkDzIfxFLLyBo+WlTQ/fF4+Uj8BNvA05MEOiksHMjbSJnZYvP2wL6xsYCDWeAk8H/brZLb9utdCYcls5Gugmbzge/V+pmXsln5Ma5JXzgxCB2rk328kjb3KzMmmqDHNdM2gAOPsZ9jjwOWND8yZBItPw2DDpxgre8qZTHFk8Ai665jfHeWs2+dtki2O6fF0F2gk=';const _IH='403f2de5b5b0ee16dae68f561ed9a02f7fdfd7113a7e95cc0bc0013918240710';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
