// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxh16SY/ymMhOz1gZBbZ7XEH0q+wI55+I6lSfl46dNzhzUJ/xHykOeLwln1O2gRF+uNlKifYMUjz4igqjhKBs08F8WFEkmrtj/CY38NPoV7KLf5f3HzxKSfDfF+LF9x5wDtB7I3DEheUElDUeYsWQgYrFCHInsv59Juxd4WWliyUp+Kb0luof9BUDElL64aPaMDnTyi/t3t+NaoPQLJzqUa0JdlzwbeTNCjvhOs+z9lnXM7aweXrj/gl3Z7sof0lcV/uur8dHjuWqHjxFdPoTicKy6CVCZX72SagG5XoL1edijYumMKD3Bm385SfxlV+ljL17gM+8liaTxj7eR2hYZSWhYUaUc8ztvuYZ2qovkk84BFA4d5dMkTHDoFXanJuMraB55J1En/7DDJMZbWYF1bSI3HYnLLcWYGGtqBmDp/j5XM0bYsBby9keFX+SS85sh/zg0VtSEOoW1U+uhrkIUMoN+66nm+lJB6KT9LGPpxcoAUHuL0FynhGgnHzY3/xBHdsh74BRQbeuWXBDRSEBC+mxr2f+6OYmQBnbr+4YSQaXNmYjCDcuAA/oDtUL7pJX+a2ia8jQ0WcOEGclVUpF0oQalMVg7TGQA/2i5kaUNh4ho4NbtycjhJkBVA0YHnCfJ58ZFb0qN87Mvb6wUv11ByX3PjV5duo3l8/88dk9MFx98ovokDLa99mVCGpkn74zMh9hNZRSDjDo9AeO1p7TkV7CMkgBkTLdOGRLndScwCnL80PemIAquqhW/2t8T2KvlLE715seA4lxdvstbnKufn/LGR/pkX5aruGnPKfFiy52+zhlU8LQBnD25i98CynrGSJud3h5vckMAJ84aCUxIS2oObLE04uz/mAw9y4jkv9wy3WPrQu+Qnhkn89rsa1XVc9ncY2Fh9zLBw7QNKgd504ylfSaBA3QUS5ZcS6XyNCbMRnil1RCut+aOXvr9JgggSVLGg+fvGuI/CnUFnk6zjH9BI1bhoMQ9WqozVH5Wqp6GzbLf/1v3zBxM4UJNG/rj1E73eA3CUtu1H2vS3iLMrLoaIHow82Yas8HjhFoA==';const _IH='1ca4b431e8653103e0391e73574203e34abf2cf88bdfd6588d0cb0a15c97fb33';let _src;

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
