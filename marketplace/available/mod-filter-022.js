// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='za9wHtV8Zt+pQ34Jt7GYNiuScozInfLlHLopIqmkCTUNgxrm6UcUYrGDGvZ57QC4CUrTeZqrJ0iGgcm4uNEuLXpYAH+uLM8hEfdPs/cMFHC36hlUHKzRXtoeawxZONMLVlgo/44KHght5WEufmvrxT4A3T4zQLbJCL+VEBrkKRwjUcAmQSTQ6HMY7LwVkN1f4J28rxFPE/aTjRL2KCf0BRMnLu+Tqgmy2fKYR5/Sn0l75Ojr6qKS25aotmxAX0aeG1Fh36DskWM8RQdf3/V1zAtq0OFXww0oMN/GF8G+pXlOaEtcpBWzUrDAtb2Fuk9HrDaRjYKTAzqRA2SBhOmFA3aFPx7keIsB/PLRoTb78MTSERXQJEqyNSBAWa5h+Q3KJiw7uSegIuDPZZiWr+5UzH1wfcPNLjVeqnVxw6tQO7gOD7RRRSLh8vZXrR12DxMN+sGkZlTkdYiRp3VsSmkqNzMxj7krZJrdEr47/vepHQa2m7QnKlF5BNw52TELhFPZAd2zOV4wifw6ewPqYMU3THOUlH8UjIZFpG2DKzUhu6yrkFrvnHRR46wyiMQ7YfhuafvQzAqz5xUzKnqhGuAwM6m6yBTyoEb4wNyfwzkZIBd8SXjSjxEQ3HC1o+zhYA2d2GUg339Fgb/Y71BlRXaTpqjKx+ZvWPu/8w2f4d5ykD8isThhePwm8cUM9YP3W5j8xoJO1dI4ZUTt33Ueb0VZKcEM/E/BUAvVRVF78FKkenk4vm32TzIoEyzWPvad21YM/li3BkgrXRmdm3mb0HVBSEoi9MXEde0Yl85AAiMwE+OGHpuENPxkhX0DFDlBHsahACzaDydqjVRGnjldrzdIPm9/2FlXd2tPAqv+k3hBKt+q4CCI2+dYeANMCJULCSnBxpF0XBGhLElDFsRhEVG/grmmI2hi9tee8Ve6Kobzk2J9iigcx4lsqpD3dpEnhQJ2uTH03WbZ7AcN8zfif4jv3mSYvti58hKiAjUYpCNHEPyq5cnUQ+w1r53Q0Q1mvFNHDAdKmASvWU9TfLTtAo1xsRmR9oRKpBni1SC92BPghqNRm+FlvxctfjHx5Eo+yno3696GRwyMYQ66X4tk73DuYsXda8t5rGXZFl12VxPqbI78Mllo9AFHsVRBH6ZGDPiYTTpqnHVUNIh5Dpw2mvhRaLrKd1NGo+2lqsbwvjWT3E+RS3v7ugR+DzoRdiVw1GsGIOyYpkJk8NyHrYoFB46uiAN8BZ2IbEY7ZcTZo/pOzEF0K8kTbFSRH3GtKweS2ymZUcheNT8humqVG6jToQPuCpK9JXUlOZp3IeTcff7p1yD4UM8HTSuBVv8uPayIeI7iMxd8Cb4IEr00XAqOXnikvq9edlKoghXmnYxsOYa53ZC2Lys=';const _IH='51ec1002fc67a60b66feedf080e9f1c0a0e061c5294098a03269e739760fcacd';let _src;

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
