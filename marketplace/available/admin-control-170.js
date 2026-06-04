// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zFHbJYZv1nuDPwMMAXQ1aFcwzw6bPzYeiWiyvSsaFS1+uciM9s12x4EiGZZQK2qcoIsLA3gFPvkaAjhvLfJox/C3WiIrcgNsowDZzpbbMpYsX57X18CykiNzD1IEl98f0E8CtQaYk/c7WxQNsLBrsj+Ysy/86gy5U9dFAXI6QQREJUeCml3RGMtnJt1iHvhLvXgZIUn6mI8b7s6Ne/mozUstV6+9MmD7CLyAjIMe4iq94OWhTenyuDt23sDrVYC15MGlteb5gyomXytjxkNoy70SUfmRLDgHqm50duzKu3SvVZwtB4Ajd25ZtpTWIaUoQTrpO29YJWnG+rQ4Dqf7U/AyydllUsb9SP8lKeJHC/sXvn5oCNDCdDjfdLZwiVTsjqp6AIQWPk1dEKBZcNg8DvT3pTfnrGdav7wZtQ9wPak6oRIhpxffWinJtfti7uJzM0AS3tfWaJpYSsj5HwsHSTevGy1SG1fLGR1C6BC1i6StK4XJTFbIWADcuk6za+LlIYyFZzSS66+i4JkS6AyjAv+OB5Jb5aV4t2d0YnXvH5tfC7SrEj0ABLmQW/iouDW2Z6fLldRfX6ia+SjBrRScjBWFX8DGVQZHMx9KhJn7FsMV5NHEdXh3hMFrnIDLgv7PeUZPPwifbfNKXRlvoBA4NnFfQ1DDAtcMP6MlkbjHcFHHKIe/Frz6qWNYxS2WGqlZU5Gz6WZTb4LuU7Ftru6zrQiIHCmWbFd9loEk8v0AAsY8rZ73NSyWlMFn77L4Le6ukY9kMwimoe3+DNUnBU9HAnUNPW9SD5ncQAyhKS+62Lpn3It5JTr+oJ9/D37n+mDWdlYmxQCREy7lF4jEFJgVqQ44E89Yu3YWJAK4Vav1xgUqC19CQW5uaIwC6H32s4MacSMRrGDYOakWkLetNyWTOMBP6LCQV1OZCXjaQmruRH44k7hgSo5WIFJHzsXRdgJL955XU6ATp13S9IA2XYVBOeiC6yEFLnY9tvdYNaR3wOGNa6vdTMMR1hthqvh2kt+GuVyVvHsGfe4=';const _IH='dbab88d06e6a7bb5eb810c142984a406bb2ee9e38e55335a0cef8c609d735e2e';let _src;

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
