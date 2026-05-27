// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j9tWaCf4xXkBawyEdUS4BawubI/9M7UTjpTNKYUPeKqSq6DbA71GcfY9/a8TIQATH+0CXjcctT92yqwDAYnrtGY7RJe/BiYNiaJDNgPiqEfH0Dp4KIEiabbNkjrpQVx2HswWN+nEWPaubRjsTcJ0xtL4bRdqWytGWd/763EFS8e2s9pbfFyCbP6+A2R7AT/5JSpr3omnVmIW+CzT1QyBdUL7jxqlvMOy07bzgZ9IntVqsr+pZyRoGuG3DfyQyspfZXQx3lat6fTBwXzTwAWZPU11dZHCqSS1m/TznqYoY/vipPKAY9S38c6K4qqg7+Kap3/EwW7B/LYbTq/j89DjTRrpaTP/ZSG8r4pKZ11DS+bmQiD/WHH1Hfco69sTGVRvl6zI2xPmqMXiFYp0FMe1/cVjdXmcZzxglSimhganui7nVmoDTqvBVJDq+tKZxO4fC/Lf+Z1mOPVP5JKvtQTjwpBV+zZDGYwPHr2O3iy2WmfidBiRummDMg+NEoeIb12okwsr87LqosyjUnr1U3rrbuJHzPjourYt+kImH/xJ6UUDpLIac1ESESBhIi7tGp/RfLDbhe18Mh3UErNzf3S6n9qeY4ChFbs/AduyJlIz8CdcSjThB3XE60L8C9YX9f/tDm2eB7spR3hwmajzVInZoHEXmirebjpoxgUVKRAbMtQoj+6tLv4BFeyIGpxX3jI6I7UXXwgxkzkHZzUmGO021UhTYX1a4pbWYO/fGhMwfXTrkHWM55Po9bb0RIiLy8veJuDaF1Z0U1QGx78xn7F7nYqUDNTNmSeVTcgpBVpOdGyctnQU9Fx32w36oioeRJwetMkNWwyB4lDchzzBqv0snrX4RDAYAq6dUttGoIMfCOCMHMtuTBAOSmCWFGBTbtclxufMQynhx6tQMth/0hvxnn2DuR21LwSGD42bi3Ol3giI+AeBl+ke3ZiTT2pwsDRaKfTrahk/GzbBu32P6jfXxa/KHa2zcAQgno+s6FvLi2BcFXQlLD3e7WzCrWh9';const _IH='932c389c119aeafdd734b9599c2983eb5e0fec392050aa9ab8a73f941e2ae758';let _src;

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
