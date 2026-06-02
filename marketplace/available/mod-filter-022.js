// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zRsOseFIcnOxB/hYybRJV+ahRFI5HAo9utf73yqv56otugxm/CwhR5yoWXqIMlJr2x5ikvR9I4Xi0RY2WIyYbEQZnBJfj/kiDgBlWq0P8rL3dOMY6mg9tdHoFYbNUWNu0qiufiuW2k+S7RxG7JzEkJBgim6/zoA+0i38keSy3p2D2a+CUwxQbQHvyBh0vNxAi6YH3M8M82oDW7gCbCqvZADNGMFbltRl7MAu9TxlD5PCX9kpus4OSXP4GMUm8ct1dHYDQE+YGBDIvsnr6DkTC4v76KWAXeLCG7UqZ9M27pck5DA4itGhdVrK/9z5fXX7wRnjGk7ZZEaztLsTACi+FNnb0+oH08FblbNsKf3Uah2BkUNkie147W7yiT1gp5YNlsP/0HvAwLg0UR7DTRNcX14ndFkwkazjqJhKxMz5Rsl9WfXHFPG8t95HSXgRUuoTgoypYvF32RQ2HhOhWb12GZPNP9rr8/apv4Le81hFViDd5yxuA44MkXHM/KRiJq1nit6BwmeyCT2IEoGEgQSzYdPDOaIJuUxtmNVsA6oPqjbVQset5lFglXIC/mcpB8wwLvCtcJXjEDCG/KduhljMbD1jMGqXMuMYKVY4haVHn01FzrR+ClRuHwF5Cq3SgvJDGAtw0X6opOhGU1f2vGkdsAaUWo2aLr95UWA4XdbD0Ex8H5Rjqh3XamWsJ1XgBu3YMfzyDNEZy5+v63S9So3EK0Dp0OsYGm2lApJRmXfSaA8hBDEFRpfC5r3d/343DTp9rr3TsRvrAcoq5clJR0/yfdGnPQiWYJmWlSzhT+FeUMTYvxn5xMGbp70SUWApO5SpnLzoD+aWADBNTdswiCxshz7Btg+30+Nqi1ixGWKND3v0C4crakmZTWrRQAs5TgbSNIEq4w6tnOTrtOr7D766j/JGX+3fg4EqqaFdEaDPilgEZ1h614JOBvx3EG0SoAXHXBwpMKd5AVh2C4kAWiCnzMcxG6eDb+lD8SSsW1m7TBqh9QBa4mXFbFanoKMe/2d+zUxl4qxgLlnXsyfbc2yMkQkTA/SrkIRtO5e7sgPqDqHbyUkJM5qSli2egOkV9dPiUWpDfsHfZ+ubqLSoWAOPN4mhVMoQW8VSw0JkKWKbwZUr3T6wOAZP2HWXaqilAOWAJzq3VqBEDPd8lsPygmlLmm9i+iPw81TT4v9+aQSJ+3BZGsSTBJY79/tWGYDCI63SAJMA1xtn5I+QbAmRgP8C/2dIu4dz3URWaTtiBlIEEUZmIy7ezZ9aI9jPXi3C/c1lzZkH5rablL5Ynz1IxGzrzraarn43W8jF3kTlFNMlgMluIP1T6rYZjtrWsVP+UIvmcd3DIUxa843dXiDBdrR9ybhWhBz6ghJkwvKZHcQUUSXaw7E=';const _IH='a3e3176886ef83a56f60e9c605439c00eff33f2cd914e5eab66da3ff5debb21e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
