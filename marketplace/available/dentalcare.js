// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Ojt64G3eg/AGZMnrAUKGsrGk+K0WzwVedI8QFWxuIAAFDKDBD6S2OF6jcYO7DhjVeAq0P6HJrPi3G9M/iCxmzjJiLFowA71zixy92Ddk+8QCUGPHsx0tWIyeD7l4AxapPBjl+PU/6L03/mE6xuuoZqeqvpRmWOFQQvKLc22Chy6CG4inVu5l6aJ8NMI9wEXxfGRu2OV5suoNe9/F0bszm/+NBvvgSwCI/JdaiaPe3yli35xpokB6q7hrFgW7qNwhpIXAPPsuweasQxOjBcAGEPFjR5BS5xO1gB7DJcOU11+toe7NE07xhsOmtHuAXmdKP1Mzpp6jk47PVuUI6GXgsSm9qXXXgnjelqucCD7LT2cVlmzFzZVlrzX4+9Sl4JaH2qlNn/4AbA6+j1pFhKPoHL5bQbMGZeNsAfa2eeXSIwSmiFDoJhu5/CNXbeMW54gQFxS4FougKgL+cHPZtrLojxvj3pYEExAVRwvnR89XdsCGleaRj3NKiZc7MBjxIid8tt5PXDRDGDn2xfl2iH+6THHC/BTK8weMYfJGTDXbM4D3AqwumOoQ/t5GKDg61piz9NUjcnthOeunFKJZh/HMBLjYEgFIRHYzRD4bDZBln7HUrUW2LbdBKprf1zLRPsC5PNK5btqO4gkwo8mCziWQ9qTTHg8prML0dszzmXO5h2SOMhMev6baNHg2O8e+Zwtz0FBewE4LK3WESVRDPA5iNwueEhehWScfvRxvqS55SmfB0Ey7sSSamtKJ33xwBVQoBiIaCSBvO05nmctkw6v98n0VuO0kPevRbqt4ss4+K+OMfgZNzGt6Emr3UfYKxpmSsD4lSDnjTer9Xgwi+l3qJ9iCaP2gjSOFHC8+dS97eoLQ6CIsa2hEziCXR7CBTgpBbTIlo2Py0WHIsIJzPjYLIRcjOrtKyWw4L+N8VeDEsux/SRHLk+I27GrCUCk24CT1ok8nQJFWNMXGrW5P0krMOcRA9VtQ2PPdzA4eoQIgpFoE38r726yMv1msmwXXxReW4vBicc1/8pK9y2EWh8sbd2kAPijuuKpQAYffhkXvHLUFP9H8KRoQKvDyKrrnuSfAwTcT8IYXQxwGJ/JflVWoPhASqwXk33ZEAEDVVuPyaQg1Md5d/vihjOFM4uVIOCLeF7/w0+Kn5gDMBWDQozOF+DbgKNTJAHGDXGWZnD3x8ftTebi2dA0LQchtHdJe4Ow3wL6';const _IH='e23479d2f4479c0447529b903c97db00d025685d863c2622b0d8d81e578df0d8';let _src;

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
