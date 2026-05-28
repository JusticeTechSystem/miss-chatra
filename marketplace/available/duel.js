// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lWOQY+UuX+c7Hjcw4uoixyyCRMKZgQS0+Vz5vq6VQUj6PHVcrDUHr7HBhT64q9ZBIeTzXOfYfbcVi5pro3JTYb6bk96MYys2ylvHT+vcjFNuPnbHuF8berfgGRDENDaB51TFi4QlgGfgd/8zXRZiERYGnuU1wKSIoP6E1UOj1/ecdZzkuPkkA7soFmxFYyAk546DO+LB8fDPqoFnyHXTQYXJVni+ZvwTBxGhRIjFZBd3D+yKWhuonprs6ivXScyCtnGa1L4/cF5801w7e8MosVuCis37UgWd3TASI3XgZ9C+X7WuJ/eK2JiOjo6Kw6qAGm7hZ3R6ri+gugL/9PHMMKfVNO/UADE2s9vlxOi29odj95F1TzRgwJlYSXcvXsXgtCzjdKX5osAu864zWI4EddkD7ES7PLrGFnsi9LwexoChlV8Al7U/ub+cbdVatFunXRUAuUttF6DFQb0XaKuEtYzEU6Se7JKmRISVaPezZV190bPcIkTji1/pmtbsv7VB6pVGJNCySb6pcYqA4GyBuRpsQuRmemrU9OxIkPFFwMQDy3sipIxubAG18A+tG6FgP1djo9ebQL++DqH5Nz3zAMkllPruBlrvHWiel1pelQzXWFsC2zS0AsCV3sXeQBvHJgSAnDluXh4v2IHDUAc8v8IFq/nAxAnwSKPf1v+Asj5by54Ao99rH4YiElsWLOGW8DYJ0HjseHTkLLNcpqMxp6f2sCxWkdfbR8z7D1L+FPbULQc4vei/svSQ/kuDH+DLzkUEQ7UF9fldiWw7iu34unkzZCdfj5a2EZLzXlpuayzN6EaPcMpZR8FJmAwRQuyIdSnXDPYullnrOksHypHEZhfElEXYEz2yYndTKuwy39xt+XIjiov+P6KVAuXwQhkGCjo577DK1xA5h475ZkW35e3qA8m1b6uQYS6HMdpIA2Lm+4rGkUrRaqbcCVwEOtMx9kvE5suUVxPJHDQxWMvgmqdqI+TJdHuoaMkXwlg1hXV2km8QJX77I+XMo3rTXcZm6Dvinoz2m6QP2FN+HcSOU9+lEGrzlKIHuWi1ovkfiZGLuz7TKUlW8PvjfHaQB1+Tf98zsHA/xuY9XEa0ir7dzMApSVVrpQdpsHdZ+WNm+j4C8DraD72PmKAHIzWHk3T9YwXK4j+a9urhM/1Zr5PKBwdda+ZVpYCrjpbEFsvyjP9MuME=';const _IH='87a354ae996114e694276379dc59659272fbaf7178364262c1dab9d40e9c2838';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
