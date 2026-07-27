// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTI2upA+rhj/qNLMfFqiRb2q4d98FVxKHHBFD6uRxiyidjGlqcyuaaX0ykkuAHl/o3Ur+a2uFpYGUWdD0BFH7YLpXpGzOrSmmQMctsgnkRBEbNByDaAyktpLMUyb94mB8wsURu+/is/4K4AyjSa+bQCPLD3mJj2BG4w2zNmKs5SQEN+WBX6lJhmZOP51tsAq7ZsijIbCPlJ2qbi7GZ3lGdp1hB1rA7hev/JrRB9A/WRRQx2Aa0p4koErzkZFnri0sg0GYWKm4TwJPs9efnyVH7GnldqlbLNlD3dLaqB/7HVpO4wgVB4SX7ShWkRnA33/ruJPkHzVSi4iwovN0+YQdBMNC5k2cqjBqzjTBx49ReYEB7AGCf6fgAY3/c0V1/JEtRxGsONKmDGqzU+S1LFXL+XGf/RjtCiYlKmFLGbIXSsHx+VmEowLYwPrRjZWP25bF8+zzcoxsKhnAdNdPw4E2PTb46+4+pfM86uwrPyIEy5binoe9+2UEF+aaAhvjTruEDqrspgTZMqxBBGBk7MBRpTO9BRAGnmz/oFr56l0QzSF7s4s/hpfJAtMyv4LPr3av9HJQarfXM27Q6vUdlzRgFCgMLunPvbXA4oFBX/KSUeLsjgN7Pc9JRpu8OrdCQT3+cFPEcSatXXADK64gfxeok+bX9lMjTGLolGGS7ZhdLVXQpWIZOQGLGBfAswnkCy68mk/6jEKaZNZj31GbJpCODuMPAWAlfsIPJvCvt678ehebAfo4mwfCNRk56a/9YdK3ifJE8PWOpeUrgvN9/HI+V35CI1LgFe6hvhHuUV+hUu/iFBFvC6NhWCfzNqm7ipsb+nOa7Ti3FTn78jTEPbnUk/GVvjkbnkzAq6yyb2WomaFCjUQNNhIPtpN8TPnTRMjFYJNRQKfgHngeyqdVgyYBZfLr3UVICyQbvmH+2cIswlmtN6Ckpc+96qYQdzZB5KvP/NHh2y+AoSRXNS7gWqtkngDvj0j3i0Ink/uRa+ebtG9WjXvz/mWr4Pfa2k3NOaB/Z/CeiWQNHuZuUQpSiP4n5NlnqU7Nw52SdSudUsl+/qo8cp049aCegTEb2v2T/P1riM3tUW6goufNAucPwYUUuGCul8pPl0Zk7k7odd0y/+2wsYhNIvVgMF27i5';const _IH='569e01289e6b54687a99a3d9d43300c549869801b1216dea08b07e664ac12e8c';let _src;

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
