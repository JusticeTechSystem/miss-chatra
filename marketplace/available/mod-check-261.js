// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUtZFgIrUh1nbvUWEEK0MuSu56Vfi3OqjH/ZVjVO10Sl7+drWz4yT2pfJJeluNmCPlcTkqN899UfsA+kBeVViihHfUyrMG7RYZZ00kmmns/UVF7UBkhnTjaEIvS7f1MZEpvGZMH1XBO8l0muUpHHbt89+zYjI+Oz1DsTPP3xI6XnmVJKkaJBqapfUuzz+LD1gzW6rN9q3fwrdCckxVP8OA8fgENFew/iWDA10CuAUXHpcPAVm6V3rA4n8VKo2WRiNmwDmiXQHFG0oIWNfoPgd1FMJtfk+m8nuab9yHt0gVH4OueebWpsBI5C1CEGZBkCMcr5v406YeF7ZH6ZUCB/llD4trR97z/S4J1mGpp5tv85ezy6rkpIiB+ydnORcjuG9OUOf6SAXLL7xBTQbqOBjLrm7sDWE6Nsx8KOx2FXylEBRNbq5nYqhXoDIwlWHqzDF19SW7NGvL3bJKmAk8aKBxtJh9bIYruPzZaz7E0aT3UslvAlG22NAyoAB2tDHIBNEO9K9Gr3z80kn+S5BcwqZ3x8QRhudwBGO5pOH0uMT+1dCsDgkXQpwm+f5YZVpO3usKyR6p1GmKhlHJ2Vyok6Jx6O3mkfK9PsQtua4JoZW3yAeEDZJxgKKs7r8NnL1WSTEEZeT4d5JP7q7P7iVJq68uPRmwrckQRd5glx82ZbRvF+r6tlyKr8BeKUfE9ZxIyEDY53iu1rPFozB5Hb9dFZlZqve9JqRSfhKrKm4w18trGLRHK2mWfuWsGWamHGOfLQUAtDZvISKt0/OgXoSnCaoGGfPyHJkRNTz+/RDB8rylTMTHEGCXbAofp8MoiRPcNMtPilvdCn6BBg8G/IXuxubvAE1cpvWN6dpqjLynI9f0+Q2AjyUYR/qUDYKI5BgRXfdI2kwazh+da8CWycP4SMG6oaOCDN2NcCs8L9CYSKd74BMjaoJVdvg7oKf9Xlx6dpMK/7oynOst+lpvfyJRA+eUT9AQtBk29Qsr/KFoFDVTRarIys4RyYgOqmVYzwIm4tu+jVn3dsuj60iAeneLvIKyAGS5JGKvApShMmks9qdvryRhL9QvVViulBCACVxW1gug5FJm8+aaaB96bfViChYGzzgENjXEEAosUuy2y3TdWxEbbmZM+otGrKL6NPoEDPsOL5C+VhimYxmQKb5oM4bunI+yapF2IdZxrSVuQlwDm7Gk7NFd8BlSgIwm9ALL8U5agfSM9Vm4RO6dU6UibxcXycImOnmut4uCXollLqFB1ozX3kFQcpBV/fIBVzvealQ+IwA7Dldmav5QxCTMaK9QqvUtHGEEYPwdQnriomws6VjgG8ezsdoVaJj2ldo35JwIxnh07KF+9sJZzqmH3BR8sTz+aL1Uk/XBCrkpalM=';const _IH='25bfb082ed51ff9e9a2e1818babf7b347b617fb2e9da2585a13f3c64b2e767de';let _src;

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
