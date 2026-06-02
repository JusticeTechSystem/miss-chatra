// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BdJW2iDoEOLyZhqMwj3wBLaTmPzyb/euIEW56N3tVI9zL3qOfUBzUNnD3+Oa9Ji5irqOnj+8aeyh/FzXhMzZqN5b7b9CX1cWWIiU/EgEi9M8GSqJxLk199YLb06mjDpsN/ng76+gY59tXviP/wBbThYfMtHNULcq5iidWeBvlYmFoT/Tgu5Zy2+xMz6+q0rZX+2DyhudTTblYBrb7FCYf0iEl43UK9Q3qawXYITKF77RqcTLTzt6ud8aqjVQLIrv9OkqiqH2dqOWMZzFqooBkQUA86XSv2gpkO+32ZwwXHi+KyDDJyYOkCH/3EJUvfJyVyTy+vX0OEbHERo2KEr1HqCCwSeOsix9Dkh+0BRXu3gRUttocOKR754+42mLjB8hWR7D3clN4DVXxhvK0xmwk8kdvih51mWab8uuGW+E/Ix6U4UYfQZHnEgw3FvTBcwmv5J/utLJxHPNUl/t3hPt759tnWnrDK6zi8nGUriznQ6l+lLPEXTBiSRYXTzP4fQk1DdQCyU66PwDaBuNrWGYhb0anG63sqYPzcjdp37W0oMCpk2hbHoMu6fHKcOnidyEXA5RZWsWCn0WgousmAtEiaYs5xHyqO3wAishygO2CRCls+Haj42b+xIkz2p9Ddf8NqDnBu+Vcl9H1P5o5YaG2oV5QcG2eXrRwqoOeyNHXy0NyxuwD8dq6oKEf7KxM1ZwucDCZr4xZcQZrD8H5+HneZDHLMl8/9AlpXDcMUXXDobAWtsuF3LsyAjFhfy8KeS46cLnaDHZ6RAdBYrfExBCF2V/47mvquf9V8JVNrejJJTleM4Fx/VxAxAKp9yP7f+EVmv8XUDcwI6H9q+U2NFEtZIGW5CinKEj+S8RiUC9fUtjIiih9FMNi98cx0ID0vw2yB9JSSIewxI9I0REBuDqXhqxg2xR8urqjiIzTmI0YDrCLJ4JhmY+PPLVBCseY6QR46de4LWT6uWxUjpqHnPUWEXaD7dXH5Yza60hlrj2dO71tkpM3hkGP4YmF1fWqMxo1a5Bnm7SvXBM1SIO3RkDHGI1WrISvm7BzgAJqYtAcQY5AgIiZPDQD4aIltfZc4oo6TJxqjWX6l/AfMnf6+1/GAvhL9U/xT3PLr4IaLO/6L+77Vxnw1M1HV4XvVaLUeEfJhMjEfxs9u7d+d9T01Xj8GkkWKurT6niauypuRHYkW0tCzfPLBc3SDsQvUDmsJW3dcv4rSqPQN0=';const _IH='44282cbee9c2fb216727f051d3d82c508532e47d1aa1971d411f91fc211ba583';let _src;

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
