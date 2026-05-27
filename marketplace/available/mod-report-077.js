// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uZuKP0T4220aYK9ccsUJfJo6oqydSos32L0tNT5WavEAcUsPdrGJaeOhlRt3/ExKiC463edwxPqXmSRfFz3Hp4/3RL1CPD6LSnaAyru+nXOlCACdY2OJpoMA/bEsPk+G6Qs+UNeaaUQMqt4HQo4jwpcIGoNVJnUUmi4hUVWNQ6Ra1UWrqISWCeqQPz6nzENPw83qGeCa5zlXIaH5KrdMWmMPu1epGo/gV9s1dLaHdUL39u4fm925pOzXV6htmoeD+BzWtDs8E84gNmNfZhaK6oPd0zaQ3xfaak78O4GjDkxVrbwxUdP0b45xFHrE/AR4satjZdgWBvvH5mtc81D36WZTiEtUdkfGXBhH6NYyFF2x9ZTWL7hOyl4Iv4URf8AqSzgRupoPv2CS3rjTyFxnU8RtV12cXLT+s8TEPWa6rMcpGr2ZgrCqKaccZ7lKLdxHWt9eANOGuvMZq0ZTw04z0aKbfEz7ucsMrYg7BgOABr+ULHnsAagf+8fnWGAXD0A459V03Lj/VKf3jSm80sknP3mS9lmO+swdAqbrKGcDSLZB0EMShQS41iNBPRu+1ot7NP9+1RGECzFCCGpy1xl8mhLESmHRqGAFZguez+keAaENNwJLr9WwfXxfbht8qbwTrsNq58TcpX+noiD3hZTGAqFpR6GdE+ruzJCG3gAozQCzdbQDns/R/3fh0y4+Nw7CIb9YZiTbD+h28/fwxIlaVQSNtETrsCIYhIHPR/upLBuVxPXNyNQWZyDeVZU9tmU/8hC5kLGdBsk5n+1rZ++C40KaGRh7e1QunQ4oO2Jd8tqV882PE4Hlli2Gyo5E/5OBEWxf3ZToBB6B6iy9bf/l+J7ez1jtqaJ4XZeYJwiqzoj0gDbBJJamgyS1GG7rpIaHWuAbGzHyF0Rl2Np1vo3psUcCA2iyDnqo8h1rAh8B2myrHyV4TxUI6nAmP4WssW6IOBcYXjPb7/GE7cOVl6JLXf/llh64Xx4+o2ZxW4ZiHsCkjWThcdMOeakA8lC4Xklu37pMjTlgqRS/GRrXFxbcNJQTV16chV3Bgfpq/OA7aGr0VxoEH8rBsw5uD80rD6FbXuCU0qMENGaJwsfeFYQOZsjkOa2q76piQhB5tDVDZyv396Q7Y2AQReRDLTje8VuFZXEYr2VN9Edpe+FgzWqzkvA55xFLpQSVJbBTnrlQDBT0rgcqTwx8sd5Yb0CFNSo6o3yFOF1SVeyYsi1lunFRqocpW+UauGIMIx3POg+ZBPctkJnUdhw3Dqa8Ng9FeUTCxkczWITJmZZuaTzt/LfM51TJ6QQg6eAPsOYbp+gumDqpjG3g1uBAiOe2fISbFvALWYvjVtmpfujKvBxyVgFxO9FLEAK8y9fBFL5jiZ5s5q+0c44=';const _IH='000b495b04b78d6e5a83e6ecb2987e92c4efc969a551d459cd9140be911ae4d9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
