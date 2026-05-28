// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U8QgAoW2zng+EdxEG96JJl/2iBJGjPIFketA33SKbZg/FZvZXFrB3utSSR4rLaK5MQnR7/8bLsxRR95D6wnqJR4ODpNE70rXtm7kQCjCW+hop/r0rvrOo5evy2Fjg4BDY7XpL3BUR+r4OWNeo5d+BUWmoHiqeCEobX9P76FmLkKi2aIR5KVdSSMiVAsOT4y9iG6DEw6gGEwq93eJ2NI40GaCiTGfh64HOrVx6UX7qn/Csrqkmzu7qZdAZbd7my1a7N6nlQR6j1gKTx9DFNj6yhNV/qIQ20LrqK8+ljlkLzuwwGE6LhOSstm6lGnqwPRqbsjfFP4NE6fv3S9CD8P81vbJzWdHVFtX4J+n9is6/eDzbUzlHDRtlTPdUE74HdCPKhgurc7F9eRvPFMB4NIaltn/08qVIYCYySk7+xQkb5SaI8nHdM2JnrgZVwWhcj3YctEb12ptXbA7yOlMaBJVxF28pJQfPY/hOucfvmJZyG+1s5clyVPOs/M172zJG6W2kK0IGLD+NcdmPa/JuuD3q7/3yL2/RISPjqIxmKLaw1ACmxptFnPmMZ6DA9VDWl09sFN8kSZlRsO0G/YpXM9MH6IlcriYLzCPr/ALp+jLU64C5MjvHQbrgmHJhUV1vEDBLg0t5h+l7zxzSHbsZkTRgEXi7Xn+xB1fHLYIUJqUwKbppGU/KKqSSsmm/Z9EKWKwckbksqEP+ZqN4KUmoKs69w82nAp+ZYmdR4vWRqjrXPx+EymlAlfeQmTB0QX3DYE4mhrqsiSItEeM7HUMJpfUpOVzMesDXp3kpcDxT4adJIZ+4YlZeFKtrfYChTtDFi+yrzXJcDyuEzEr7yCbvpohxWiEchTVDfGoVp1p3RlxNTRda4UtmXi6sSNdzt2nmLoYdb8ssXZVhr8nuUu+OcDMTLcwNzGNJPKSroBUwhy2VF3fGPV8UMvtYzGykM2CmJKL7O6w+yTcj2KPU8oaa7DMtl0htLwGh6lQoL9Y0oDBJO7+Lc/lilm4S8tn0ASrmAbrS/OJ3YDyLncgVK3BdFXdo5mZcPY5CutbsD0+CX2uMkgOPWdLCbcy067/3UQWBI42fnV6J8Kx+sFbVpoR7mWOQI4bFXGHa/5EmvCtKCi6EwqLjFgWHYujFVCHgoaSriT+E4gC8bNiZviH5aAUuJUL1btlxaHYt+rX8RjQAS6uqplyRIDH24FbTx3rzb0tmt7WhoSwj/IcZHLq1hCF4g+w+tgLjlFqbb58lvY0HXg3LAWAFPycTySAwnv65PA0sPCT/N2knHN+nWYxSST0tdnLFgJNVFZjiblmqjDZV5o6W8HYEH+9GxqpnSpmdBZ3LEp86fKjJkT5SUYwN9tVBQE0WfAxhkx/l5ecOg==';const _IH='798cf79e761f4633b512e631decb8990b5fb2b318b336f7a33360745641c6f02';let _src;

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
