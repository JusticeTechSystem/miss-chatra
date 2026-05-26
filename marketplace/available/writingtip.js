// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MxLuaRr5Mk+Re+G9uv009oLl7hXYAgwn1A54UsISh1bQ/CJIlJp0Wt+QUGj6YS8g5kzA2r0dfdoKqT5E+Kt+8JxbuNHX+ssrVObN/OktCjl4gHF81F0Lcqjya1UnkBjFwXbgMYXcHx+kDQ2RLtqF+yod2/eRTHlP+Aj/0lhdlZIt2/L5HqkdT1y4lrgkMiKSTBsAII27UtNzrNPamAwYbEBbLFdCgVMP+7F8ka8UGn9SlWj+fmhb66rUfT6h5bzRffWA9aagBEYrE3R98AiHYvUAsS1YzmhVkQao3A5lZErL+PUcS0aQNot2Bb2nAGBNa36gIaHPKQnEOGVkMIp/H7bDxhSz0SldNE9BZolqZ7V/m1Yv7U8cK5vjPzKQYsnqPjm4stPSkxbF7VKYvrC81FG4MrQ0tXO4VfYrm4INAnfNRMGdIYuak5blBtoIuBuHOSTM8W85b0Zt+LHffpTAU1WRl4i6hdu6y0gFhGvyttYhuoLPOA+67PaxDAdKEzM6w48U24FE2Bj3Ls/U+GPdU6xJVR7ZqTiud2QJ4UN/L19DWhY0FGu4GVaPt4bU9R30afy7SJwZNRuBt9POaBik5st1xkCJ7447KIMKQbeQR9m06d5AkK4EZSH+isVCbZUPekJkuynffdWd9ISiEwIG2Jgr1GfLydZVFBU0d+H96NEk543wG8uKZ6umPpeOzr/6PS9FaGqnUaZyA34c4PR7XWj3c2JiJplZNeJbRhvCVukoizXHUkJH8yJQzD6VLJy0aPuDR2ORALjr8iXkwg69MmnhuYearOuObEkPpSsTVMF2+p1cMldwx5/h8ZCJjfopExI4x7K59bAVxLF5PXdolsObEye/vA9jlJ3h4ABEU4Kpj0V1o+NHF7h/sgYDOVrwmamEqAAVJ95y2F08/lDoEl7Xq6Jz2bIWwBySBQgcn/0pFhpeBYPmonqimriHGL4pwsQ4JBfHEno7gnU05/JoNhkID+0t8rrQUWXhIwL62YG+0B0rfNCEAaXe2mjDECfBY258Bf03cl1d5rIL3N9V+OmNGQ7EvHNJq+p0HrYy6gw8DMLDEszG0RL7BgjrwoOw9pVutxGfxMxSCLCkpsyjO/DPbwJ6X5Q77bGxOlNMoFY8QkdEOiw8U8YRayP78itGrHuXUOubK0qnB/uye3hbF7fJ/jLCM4nPfH4jrt8vMUb79BG4cU6upfaam93GydfrV/17zae6fA==';const _IH='f1350151d7f039b34cd3a6dec0a01f372e6741d1d2421b597165ae67e08d2220';let _src;

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
