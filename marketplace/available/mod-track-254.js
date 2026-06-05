// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IK86afUlfomiM89L00xlzTjPAENmC1SdmXJ6eUGFKL4MMvNj7l96JN+I4YTvdXtStT+TEEwMd4/S1QWQAum3ExXtIZRvQKuc8q9JjEVxlTvpauP8+/Q+bHx0cNny2x669wFmilXrpECI4Yn92453Lrz1624XI/B6ELWY430mhwjBOkhCzW+jNROuZgNbNyWilQ6+B0wqTIF6QXGpTicEdBLDXINBYpENTOhQ3nFvUQnRQWzgwK8MFlBiFlCwtC5s+hX9c37ggZxFEyQfKNywuGaB1fRgWsBnK1yHBaGYOATxfbVbwHn5ei+Q5ysCQcZrAn4W2Qor7DCQGYcBDrCdSwSndOq+tzaCe8V7AV+n5g3lA5T0J+RRrKYtO58RpfLnfrnbg95J9DgipCkXpjWtUPWNaBDHU0gFj9XgGkEzJKqq6iSw3m86Kb3Cf0JMtXaTyvLepSVp2VxqooZOYxwpWuWhKjnSgo/QM/TAUOKqFkJxpqyB5YNbxKQ6tCkq0ciN8VQdXLAxS42/eRUtaqWu2UPENbODEzD4463MDTQXq02xqQ1JiulxhX9J/blw6C/HdmMPZ5aR/Yx+ar05hvinGS/e/2mxgGErT7+ZfvK2DI+DGxO7vbACnpYkf1kguxBWSzMbu+8S2vWrDgg7nFIril1IS8aaEMPTrHjxe+F8serkgQIZLKMku11g+jhVzsk8dKfHgFfOASbO+p509AIXBd8CwV/Eby+GRyCTakgoe4bTUDt8VkleLXKFBn7zpd4LX8nN03/1dt/x8RcBQvGrEZBaLexsX4kDTKFktrfhbYczxZoEuVFNpSEXbh5+K3D74ukvK2FQSyNObx1vqql24dMP1m8j5qEVUnLYsU2ISdQcxDebou1lM35F3dRLOE0Iw6KzSpcZKo65lOUcvYjzsLw+vjlyxBv0WOxhaWhOa3U53X11XxjB5RBjb7MkwaFCgTgt0SIDTVJ8X5ZGgdyhcgXJEy5cWdxZvC0ecleU+dkOR5EwmxK+84JUhhjpwpLP0LRDl64OZcCMkMDFCW7Z+LCchSkYj0hDouSySMt241PB78ZuliQ9xC7Y9Be5MIk8UD2uk9Rl2SJ600vO4PHON8k8BjD8k/A6T1gMNFM95hsNzOBjfglfXXwuMcsg/x6zLx1egJ0Oz+3Gy0AtF0o7YAGR85uiAZxIbLYiXdVl3LIbwBLbnIbOB6bxZ5yAVYRIBQkk9cu2G19P1i5VDpteOHJG1dvCf0PmQMAqLGi2lTWGNwwD8nRoYeui9BvVeeVt/MQUHG8ATbOsno9n13VqN4xpuJUlR8E97RmqwWlwh3cfmvmqeLMuJ3B5lW+1yaERGlsSlwJOE4+KrpQ6F2qVzCdcg+rcSIUp1Ajzlmuo';const _IH='40cbda45ed2e6ca1adb909c97bd86832a5d7af35551b6e7bde151e35a20a9a63';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
