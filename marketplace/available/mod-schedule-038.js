// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWMCmyJs2lYbfO+Mbr62E654pjKQpVfcwob3eJjWR7idhsHsb7rJ2ECo/JD2N/ZfkLB/EidgM7Vu+IWN5c6z5dkmvuAXVJYJiZ3PyGq5nDI4bls+nRmWQZXcF9Ou1Hm567W0yHWZeNL081GLq9pa1fBp/P/9CqC6s0W7S9DN2NICEToR8BID4EcJmT3GJRI+gI/ePIiffZauZtkWECfilM04isNSBm4OVoZIc2zBeVif+OrkoncIhmUM9ZYlIQJsDRmbEP6fgTu0e3mQgAMQ7Rc1vWoR/57Tqwd7jdg4rfsJ7yE92S9LpFn91wz4RVEaDBn47DMquYuwI/M828GJQPt5pGp7dmHVJTQCGMeKSSN3NyCCn3WH3b5z104pPunD6uEjgq3iUZptdF6OLbQDX9R5MwNBsCBr5MRL4D+dgP6d4Tkr7oVdE0XIfyI9g98oWn5FwnG12flQR8unXM/KNP/kZkczU1OoHcaXPQZ1O7EqxEGu7mgZoFSxYYi91W3xY7EFLYW8CVvSgrDYpXtijoeYuhsmVtGvVMMs53r1ShliKzUiEmBBQk7c/MVLzNK9M0as/HY9CpwxZ/wj7HNGLLxeY2Sdi7kF9iXrO7tE/H/Ui/s6RZ67aEEgVsszpZqDg8GVKNf91L4VwWYMCX9bOXR/8KHHp0BE0saTyhZqDvwPWm8NMRypmCHSixdc6Mat8XLvex5I19rJYjtzVYDfbC8co1BrCiI77jJXT/aQkayqFity6i5jsWEt5bVVVWY87YdLnuWKt1c6h6x7QNNHO0tuWG4RTqSUMvnSvdg/ir5a0Y2omgrvcqx4gt3Cw76TInNqp2gcQSLgANSSXbdEqfuILtBkWnDL7RLwRuevnFWWlDQcVdYwCuKqVd3pOscMnU3MOonnyYOtSDzrAA2z4xTKlR9bqBiFzu06qUluYcuUedPn3nOYo9ToQr54pJNyKgvxp0DL+9NI3KT8gvMhSHfHgWaeTux6YpAK8sZ9+/CqIvG3jAKoqz3+4p8kRjh1DsRIviB0jxUab1lhu8/OC9tmrrdCSvXRbwzZdH5RxAwJovrJqY7vr+cikzWmmr/TCcX5H5KROKuxFQw00gU2sSpC0WKDUDV0/is5bly2i5W5kNkdAH88dODkQ7IaCWuDwHNhKEMl+f5wCa/jFRzpO2kglbyjoCHrwQ5NlJ98CVUrTAdMDA5hHroT73fQfX89TVnRDWjdbzYbM/n1ubUmolwcqAx7SuOAoxrUrYVJfKdq2rUu2x5TQJLEKR7cWCq0fsGrGtViziHE5NO1wUZZWe7JuWtBpkusgQGhZ2XlY6qZiXo9Ouw48XuDNgVUlCAwb8/06WKftFxJDWwBURMzBos1KHIXIAHjGq9Kq0d1MrzGQRKT+HvegEOgdu36lqPiaaLZknldwd';const _IH='fd2fdbef3858f86a0f71df606bcde48ee53af494d0d7fe060d0e53853676b481';let _src;

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
