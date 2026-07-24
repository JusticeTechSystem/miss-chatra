// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAbycgRgcGfgiBInILJbnByBGS3hN+zl64+K8ZSzdL209CZBna8b4cbW00jkY5iEz1c29MM3F2CXd66wofS2F+EgotJRdSEIPojUOAw2C9KlgFIS/5P4ojzwepVphrfSMWJ9hs0cPGB+LPI7ftjlG/L5mCR+ldHm3fYbGiZvxEzSpxT8NRAs0yRXKHrbhBLO1oW9IXMFOaqQnn5UyAU7JFnwinxWtOKxn/SuuXkw+u7t25oDsQaHT83XjjCXYpf7J2mk/+QLbsty/eRTIFPnFVWTp9hrEQ8VlzoSP4MNtPhhT4C7ISOmbDP8/JH/tAo6Gbggb20lhnhfSft0gBqvtLSxYoFgR+xBZpGXbYXId6sHkLARq5IniTXDt8nPEj21Akddv5LtYdQNQOUcCR20/QcQevDr9apfk72sTEbXX4Df7Js8wqHiejsCUjrFO+hmYuQKF9w46mJZNeZJ3TlQGSdaLhYHVvQVQj3mzL7SMaGcANzfN8bGjflaS+ErwcD841BxsVn612pItWZe7OeZ92YO6EZTuIfqpwb86eI5pUO2J2OyLhD0ag0jDRB4b2bUDfqvfZRdkTrvSfda06wZYA2hKmzpv3UyN2VsXKTjPYiVrH6pVPoPwXbj2Cv951luQz1tmooLVJRSGpXJPCVIqqVYAQw1RW4QxVPkwGAG06FMgpbhoqnlzRmzcF7SayMngNFx5PjIUEoBN0DC1XwRmbUggDHxs/s0915prA6T7xNNKM';const _IH='551784bc3830d90291c1e150110d207b11dfabc92b30da12302b232686a906ef';let _src;

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
