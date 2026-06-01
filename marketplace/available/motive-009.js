// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+sFRVSqPsJhNI1uCRAKqOoOf4Ed+MQ1N6EYWIfntD7Iv7ww+5jWZ6viw3Z2qSruSwxEBXI127D8ZSUG6i6CC99svtUJkMxcBB7D95dHUMqMnmW7Pxe4Iw+YwUpRxHxrucYC8OSm1FLMHzJp/gqOJQJlQSgHR+qcP6Zhcmh1vT2NDCKpNqs+VHMtO8UB5kiNpb+ywyBteIy9nUrLUwowjJ6LscyD67OT0cN4nMD9snxOh1lcaapE3nxT50KxXfnBknJvsOVEQK4rp91JwdfjHP813DxHUpQ6NnAatqW3HhNbIxyOX28mao1Qbdb2VIAY6vOHoxYRLt2MHdj57MP9gFKzI9EeaaJI6npt9ESXYrvdf1GFvVfTua2wHq4U0JjuPpVHEoXEV/gFZw3r2cWswR8vItRHrBldz2F7cvgVYEZUaMhlLnezX+4iHU/3oymAj0PGgen9lfrAoBnntZmRmQ+XehwfUG0yYa2kV35PhlSnTcK54DCuF2pi7YTPmEgLcvh1szSKqSJU/urjp86CFEVwGqP23SFPa/+PDbcYz4FIls7J3fhgXhqv/PQl2kqWpo0xx3DTUVuBXcgF3N2et2S3ysVdhrXBMH/uVWfgxt3uT1nJ9g1oyhIKrgL46VLDVvsqHkYz/jKslDqunKIjaScS+RXC+l03o/i8mwsZkNu8Xbg6MtAMqaL6EmX+wPU0K56/PTbgQ7vrIt/+jzp4eBB/OrpRFmznyFGlZhqH3GhqHItY0OaGsNP7Rx1hJ3ZxgvXY6zefBS5GBJTc9EgQVywIJzEEm38E3dDSIAkObN7npzWz0U5ljnPtnqLQBEthXoxJRgLyqptJeAkitpL9y7tnCH9Y1DsEW+k3MvDuUcOpSlwetyjv9KNklBh98NqoYsP3gUYYd7h96gYvNjOc2uAW96x7ycpZzXjkKBmRzEny811rUKaMPBsHhc8NpZEmwOjhUadwi8qEr+9rrC3CyVYK67MhvbvUXC7Rv6co0TCS121wNOJ4ZQFn3+GqjAe4kZWmNyWHVeCFyiWfnMH6';const _IH='10ac476a257874ef447a4a70c8b57e631eb088daa458578d24a6dc5d1bd0798d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
