// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zxSdApsMYxd96nAgMyxiUdsC0hqa8ps/LEmJaB3CmpV5FwpAbGiCA+U3GDml4A4rAvcCi/5kVdtk6HTFwQpBsnwV677GUEzmhcbcVmBNA7Ie/iKUTjqcZ8JOUXMQo5TjAAGGLXpDD8M5ut9xVYPpabnTKP5qt4KiZuMTqMEcqGDOHrYcGvy8Qa6VUKEfI3tUcNdfhmwmze9gsdcFY1NPOfbVjHfTmRqUvTtqK0RVZY0AquG7G3vGRnzCq1QICeIpb7GLXWzqH2H000gRKgRAanMV+BOv5TnnUbt/nYInlc9qqxm4tibjrk6DTWzFu5XBbwlu6ehvd7wL9Lh+/ee6acvOpsnWbA1JGX/quNn320qg5yxRz/KrjaD50pBENMlLO6fXTMXzj6UcVJQXkD05MdhM0O0cuF38JpnE6RGRpyZQyFyIfM+yBOcS06lZtutK1b4yrkszELcd6434nKXFSOZILX9dO/SHbtsHKZosGzucJLPtiOYx5H18wE5QvQSx6RTzXaB/WDkshsIqvTLgB/skF+QyRJ5Lw1Q02HDapG57fATUMWHl+4GwUV/mwFXP1huIDx8KpBDTembaco/rud2MTiJ8lOJ4cZ3UQbl5u7JX1pmYRyUKiOgy3/eYgTENRv1ndlwglSsggjQfZXrZHokdTSbKF5SdgvOQSsoGR57++3li16dd84YbiCANB+o7YUnRv698vf3OfRWixkxmB9SlLn9rZD83DLZ3T/5eLPwr5WS6vC0=';const _IH='f3b850efda0ad633d12042877fc3299950059afc52594fff1aab6592da41b726';let _src;

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
