// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UxKgWFY0WTKSXwbmIkQZWaW83j74mntsq7krCjpTsm5vpbEPC+vhT7HSk0Bd9FfryqdhRlr8ld1t6pw39UirH9rClkJLZx674NvgJGqD+q0Ixx9cyrXHxwZGAa6v1/whF5iX/0d8nvJzTGcDwW/Ow1j4V6SZ83ZRXtI3QWhgUA1d5qnS7EtsePNXBiE7fUYNN65RGu/k0dM+BlYRd/XPTSW5kDP4Lk/Rzsgecvx4bhM2uMEjzpMdAGRVO9m5EpX7oojnZe1E1jzKzZ5lDb/u+J/liY0MKVRLVVYyht2BdV0/Bxn1lWBFjIU5CKIulTeg4c7sUG7Ch80HIWzgyy1Va7Q0R45ko+Aa84h9GS99nX/nT6ZPXWRj9zF3CK6QSPS8oFOQEjwJ5s2ccf8xdanc0fnjrZ3RhUMsp3wjgQn8hS8j4aXhPpCJ8d1k1s2uSfVksXVPr8eQ9fdyLRKeviyb3SVI4NK1+1uGnZK8UwNxumQ6//EWM1PBvKjNGJM9TPMGrVGTK4inUvGqg3LtucOxZCtrz3Tl046nZpz8Hs5I6ZbOxqUyRX55Zy1vBUjazbsquDHxqO0zq67FQbBXYq44kYalnTKJOHkkt6S7w6UcqLfhdM8I2fQUh0/NwehMZHqFIWJs+cAvZ30RIqx35eauJQfx/5z+DWNySzQpBLDcknUDriFHA6G6oyABDwgB9Wm9QVvb4fUd2FoTq94jQUvCeQLbItRLEdcpu/OBZu8Bi5IW9E5iDKjqbrz2Ai47cyUJLO7Yyae3OY3iwa0IiOOzf+2tkHdpee8KqS2i1vpP4Y4d95uwBBkbi3ODO6BN74+thAIeqVdPlr+N4Z47SzbiCb97KbViAH0utqrQO6EfR745oyEemgfn4DolR2QRryEHlYuatf48amPvQARD/HZUmbblsk3En/JJ3GdTN777q1snW24hvcyJPCiALvijG3XhddDgm4gEuM9Nr8SCwRg1++sEtnZ2wE0PxLDbHMiInrhxmD2xry+ymwyc5qO2+5AqEWen8lfC0Rh1Ryx0sconcJwrOFrC9LFjpNfOmctkfIN0B+CoL0lfjxNN+IEnwdepzbeyaMfO3IK5hGVSWgRCNkkZlxwiTDopcZBr3rbPKK1EdxT+MEUPi6AitLyikJX1MF3Ln38Nx1x8fKM7eJTz+25ma0mDWzuAybGI4AJTQh3Au4eTgjE1cbFyCd/GxUTFiMUpdgLRpZGUM54sblYiP9nw';const _IH='4ce4840e1dccc79fd54cb57282665707105f13c22059c84ba0afa6c7109d1f4f';let _src;

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
