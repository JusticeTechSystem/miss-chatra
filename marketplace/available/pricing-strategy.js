// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJ6JyzUhauVufwNtfJLW54seG31Enjb2L7xfucxCjPe+1Vvae047C3yRs8MJ7uYigKOvl8HXq4NMcgy+n15T0T3wNLZA5AxGtvDLjDSG531ATQ1n4HbGSlxA2YLwABZSaDApeFgwLr+rnZuDWRmXBuUSVgVSO0q6sS05HP5+hFz2o0vrz0nIjvCt/+J62bLJchXlCgWE+TO8pUzQsPU/xWvBts5KEUZnSiDQdINC+DO8LaLurwwugkfHDVTzwp3k5uPecxDFlxzqtWj5pf1Rmbga3H9GhdRMdC/AR5fVQ4sSvr28W2zm3Lz5edxgjWtqOTcIvyImFFaKdt+ibGSsY5D9QosTetSIHJ1C9Er880oxH1pEhLLZY57cbhLHio+MzlBXgEx7nD6h7vebAVw207+EqWhXho8W6YC87UQNVTHYi3Zu30SLdonJ4qkSYCenglVJ7r1S+GZevLncZq2+pHZGDT904TaVH8tU0w/VlVbt7M8+XJu+XOYkKIxmtNRUXXKwgrT1m/4STP+iCTcmJ6VY5c8UKa+g64xRWLIAtdQS08nS78NmCYglfti3M/YnakN/xYr8dg32XenmAVj0br4PTZac03UAZpDrsdOoBxXPpYM48A2NfCvzayqYTcbTaE1JdkVTn7wdYR7YEAuAuU+dzcuagvjsD1M4+bpy0qpNTacCv0Bqjx8C+0wDtuR559p16yhQW8ryi38nKI5JfdJVpxFXz1Nt7STgZtR1gWUxtC2FQJzDi8mA9AFoZdLSb4wyWtxhSHPsItry+rhpJ/mBcaoN8irsnIwhVuUD0bX54VtMMU6YcdK6+782q+8kqbnzXZYCbnfdoV0t0vL51AkK1Jd/T6vArrG6IjZ4BitGvEhDy08xlp+o4pCrPCXdCWTEprb7CNJKK3F+tHBoZFJZcXti0Y7oDu+Zqz4WhCnfzFZEmJnioCiAmTEc8IxVuceMKLxCEUQk/ias8S3A4V7hW+EttRoXQq4NXnu3iDfsMgM+6J2nb8WqvPEHGQhkzClcUmMVnBgxK3WFin7XboUKeJcT4Qfuof9imTr3CjUf9Pa0KkrT3f/R95fKCe9Te+LOFJjT8GcjAHDDtPl5fagceMNNwvQUyIcNFCyVPuFdkAJuuo1mPLqdsojCdCG7SXiGSGxfIoWmqXdoVdWvltRMojFP7/c2CByCfVV4uTEkWv/4UYwch82BLDXXz6r5T3tColIAfR/qcM6idvD/jB1JHhb9UG/GXQ7XIWhER1Q7i/2m4SBY0pxlQQxnDCpfeXlsKsbag2TT+E+vxouy4zsEVOHovcrmYJD/2v8E6mdtNaMOMGNDUx0fFUuwgxi6U0igzKOy+emhqTecoqHAgb3FrKYbD7jm7JfYWuAMbMTKbGpZ00v7c6yPaLYVRRd42y6mMemisty5zXxn8e8/+L0/UG9S/ee25WhAP/BBlLgpKy5Aq+M3Ckz9XyQ0CmzHyOh+Te/OxOaNNDgs/MkBoLMESMWhyhRzqk90/zRJuPT6IEiZuse6NgCBoQ17EIOmVIdm573V4ACBC2eBsrlbI+IXh6S4JgLipfH0B8B8sMwT03fJLaRbLKkhK7RacsS1BpDGfIyjHXH5Gjc0+XnGQ4zmKxMuF6G3+8dhKURCHwxehbHiEGdtYMD3IwXRjU19x4Pi88SzWX';const _IH='0e536dd10d50fd37eafcc97019b9a046cce20d650aed37db9249a17927200cc7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
