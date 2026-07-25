// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrXcXb3zO3YJYZKsxArZuudi8RMtNpS0q7MuJ0Q2g0R0pP0Ctgt4s6dSIo6/abRDIsZiGP4wmyQKwhbNpsu4YAgpmuUrTHSKbLP8IZoBoRZGVJOtq1pa0gSZuvKaLsjcaLoJVsFzLnoxGahdMqX9m4M92Ll/SOUf+zs0IEXpD//VdoRtE566+2/gyxTogeehcgwRmo0pptKDzroH/BRiC+pPVhRhgwQmuLFRO++Fjdb5GOc8ONYnrhkLBNbzvx+gMxSCRa+bv/YduvNJc4QoZsxSnKxE4wl2wbQYjnt7OT4gD+/sfGGb1R+WqPV4tWGVlh2f2e51ZxQcHId8tsxgk6btmH5MOTl8XoSSZPSVQD0Jihtb/h7pr3vXV3pq3L+JaK5J38hnFN5togZInQO6/7+qhFtgFIduLgMms9sueGeEA4vZcBQlLcP0dFrcjkAMnslj6VxzZVW+tVPgG5dOtHSYaiS97GZlTuNeIEgasgm85QqfO7IVnkIr8miSHw5M6WfIbgQfWnZI0IT7mVRtzcdpZrlRB04gjJgkhhKTfvRoj9ND+JO2H/Z6ZG4vAeMvjHMhNNr6fYMXofXvMlC4g7bdMkuW/VCk8lCMVhF+BDU63AxIB8pjiJTrQeYpjtPtRAnf+MQ2A69gc7IgeXWpbu9gB5o8Lg3pQGz1iK6XmH2fAoAfxmSyZOb0SRvsvjsih7tOhpPKWYRISgdoa1nRXKVGMMdMlWDmjhpN7VWIlRB789gNK2roo7Jk3fgdcfpiwx6TcjtfqBTmZd66MXbGZnu7THrzFsK6la5/eXKRqKxkRmN4GlNk980zXSyQ2NMbDOGsm1BvD9+KMN8+arHD762txYSyw9SqYMdoLO9Nv0fTe7z041Ni5iuwuaokIlvz0uR8cuzMXGp32Z+WG8fG4qSCGz9uthsORTNDXtzMaY2ZE681LlqlqORTaPGc/6TX7wlGv9EZjYakAtBdOVxhsFnWbbSShorQf6BW1QvtBkAMKWARz6q02za8u4K8VD0HIA9FxedyzuX8Hwl1m/eP6QKr6QRwm22Fa5AYpqoXegEksDZwiZ/faj3TVqSyo2P+k7uSLPd2HFfpcvQtXgAdLmdLxLYQ2R9y/9Sv+Hx1rDujD+CSNaue2syOOs2bcJ7INznqwvlZQi8SWX7BdIN6sy3UmDH/ogyoVCESol8BKhLDMgF2WlD1H20SQ+/oY8y+yiwlTXFLiz4Q3Pi/6ZYaxS8tLwYVlX4nbFnJN9yw4dmc1JtrtL2YQ1/f9E2SSuEVFfHApioEHvIVJ8gsGiqRPOYa4cJq1DszzvHFBF+e3fObR8IWDDa8gMzE9M6MbB3poRG6d58wlMYwxYAwDcx/iJsMOoqWXKkT02NDAlLHfA2Gr7LG4sQMbx';const _IH='8dcbf87205538c16103c132b9936ed49c5fb6eaea4c269cf940b78d2e196c28f';let _src;

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
