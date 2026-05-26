// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='It+pFEHTbopBMnRcF9vosyg/B1raovKoOJ8Ai1cMDVQMxZozwKTnUd6HUH+2xxZ5dGJmsU/VLCYJrocCsc1JVkSyF/GnneFjyw0eGSx08m+1G08Ms1UHQJvuC43Zf6aNvXW+34CjVHpoVO+rxfzJR4vUi9zWnlGVT8Lmu72swV3K3WSEQjbwS86LGI/wgHm5rFDt7A4Q8/TT+BsODf/EpWyOmzV4O5t6pCSnw2Ehy6O3OnK+wO6HBntOvCnIYeU/Wm+ktB+tZOluJkLFaB63s3FGo4I8fuuIHmYHVHgFpq1Vn/eUjUVBnTn2FwE/iswSyID/JQKVoyOu/Bwi494ktdFc9u9BNFlL/oaMZLRe/L7EhkreMLlr6w8m3I8DeM8w34VEqYDMLEGCUZnFa0MT+OZHPE5wBchp8EGHPh+8bNGhFk7RQIkHpQKUnTZtgF9Zs0Jl29rlsD3FcOwDupKbB+9j9PpZSQBkb1WrZydsqBUUc7f6fQtkHSY5020ed2SCXzRZk5OYw5kD3Hzan7hxHyhtAYFKn+5GTYAnckFyuJf3XlwaJLSmqmp2kQ8rtL9LbCqvAeLPRHR3pJe/wUuvIrr5tDICAufQD34OkCuV4SctSLJGkQkhz9xnQbId6XvIssnp6Wts+ZQl7BpLWr1lJFQBv5TJQFsgWmm/3PXhKT4bcep2XjfGKR7/IuIN6C3joBXBKMZPvdZ6r6EWHuDYYF2hiEgFUKUL9kj/lJIR9XPLhqgzO0e/3Pf33acjYhhu9px+Upns4xoDaJI/u64ScQ2pRpCtCb0Mv/wQ12cWLyrPjAkuWElKa90pVgAoKd3rlbHSGkcz60xoqgp/brtrgZ5hC7exxc1P5WhzW5/2sTiCYdvZGJy0XN3xJrXvnOs1sYGMUNeztZ4NxC2vEcOVNk0b0xyEPP3My592uA/H/FVMRglhlEyC8ee1J/kptrOIBd+RTN3dx44q/qeyUFMdlYcXJn8TjHtek06eruhwODaJSao7augZTBxx';const _IH='b70df84fc6a01423ef654a42e7c7d520ce7ae45ecbabbbd313bfab0b7f0cb22f';let _src;

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
