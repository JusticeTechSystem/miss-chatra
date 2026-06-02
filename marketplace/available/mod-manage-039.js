// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MzfLRyCTJ9CM3o558tRx5eIRWHPDiH4GrwpjsvjyWmqSNSabJY9ZVGMeQ82tliTOKAyv/jP/EzAn/SlrzqG4CObtR6wOhlOQnYH3OmjcDijZvUWTh+Lvw52swqvkqFFaXBfGb4Z3u/0Rg3fuCy3DPEMncM6Tcc1Ccw5TTrYNmis1wb5rqyhlN1HkIkjfyb0M9C+9RiBwlQOHsFjGtffOE8ZaHWfZQmEaR4sgSU7mEaufUZbvdAA/PNt0htRZgfasA3dLnqR+gaLwnAQ3UDbMWYGRRpzx6eg5cnXrEbt+etm/YWbSHjJOAxYBMAVCTijZQaF9CRgCxX5nCBzvfI5lcHdmGmjvwCvGIVxPEDlfzCOVjKZkCUTW3z1zOllCeMuUbNkNtj9BojzXoilzjClKrLA+XvOLjBR9ctyqjB0iDykZL3NE2I1LMCqMD3bWBZZ5zSuaD2YQ0W4wh7wkOkZ80K461PBQ9BmizLczoMlfb4bUvsK6Wrc7x6/VGVLeYNIbmWeFZGkpQzb9BesPE9P2Yfm6SUvcHIX2f0bwaRv9ij15l3HmgLru26qNaPpAFuFlb9oxurxbXeUgnJtWO9ay7IwDzPXCnCjkz4wZc7nw5fKEXkDwekup2J5gxB8+KpJpEw8kqdnCcvW4rNWmKX/7FbuRKH9Jz8zlRAf1o6nEYGLm1bHT2xYnmxuMcYIRLXPlXUkWVzlRNRV3P4BoYyYiO8fmu14oa1saNYsgCo9VA7pBPeBd1WHZ0sSjLffpNM9KPJ/fDbpbuB6JBO+s8p46/m1D9sBY6AQmJVWCuKK1tm0JxTw3z0+BTFbTyTLnK7/CkVfNbMbrpBdhmJ2qaJQwlGO4/QAiFHM8BAeZniQGV204fzF7VeE/KQGiJq43+PUtRgn/OlJXFPdrEsUlkT82x0bL580nDu9JOGlcw9Rnz936WrB23GMfxrDF6MX7g5i8YywqCPm5QVZClaB9soEuFFW+AWiKDcJcT5sVRip3v7RHNI344JiuEI+HFRIFtRPJRYFDpifT4swU97nPYYnf+rHQX+wYKKhogPvk1ulNmfco3qOO104by2ve7tYIS5yKhZF3lvX5kgvUB7UO+wdek3Jvm1T2kU+1O2rHegqmb4kW1GiY9aHgCPZlQUQTNxyGhGV7svBbkQWdalfL3evquH4v6iCXyvP/rLAlBLZr7Jut4To3+WYKdCUjN8f4zrldkiqgbowI0x6FyHnrce4v36GhMa6rTrvLH6a/NbN4KVwaevwvzdPQIfNZlfRqi4MSxdmakpwvan/GD1wpfmtKC4rvALPgOJDm1TzpcAj3kJIuPJY14QuUlYhMhcw6UmgHVKPEYL+NvDEM/BmgFez3SmTHUUENVoi+KGDknvMLcvYjTA4=';const _IH='6da2e3ca2d621e56ab875bb1c2b9654a4dfad32080f9d6f118b5cb17f6780d65';let _src;

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
