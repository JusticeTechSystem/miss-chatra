// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2FOn8Vex1t2bAhlMpEplrCa7RnpXFspiTKgKHHlreLyUXbLqRzJ9u7x19L6CP+Pld2kmUT+UFhyEiRHFqbVmnWgE6ZWHgfh+7A3YASkW9bMecUJgiR6hxymK245gyV4OIgQE+Ok85Kp57h1e8EKRJWZT/EN5fY6ZWIXdknJuiH7ahMDq13AuS6jwBz3kmAWSYIuLav5fKeH6fYA6BTOlnVv+o/aFGjYSpwMdJQz3xcMb6ggqDSRk7sziiMe//RiCkulPkR2ciJNw3r45AwfI+jBlK2qodobPjvsBff0Jq2aSQ+Zm2lYxwkcHbghWDsywBSx8GZ20fmCA8Fj7WOsogWiqvMVBkcpfe36+eHTbOa6sI2QIEpuYUJmGT5qm+798v0kXuAwDn5stiuHQ4GmDdc+RZcO/gb/92btL8sPTVJcRlCozg2ZH5DVK7Df7ioGxkVxCgl61EJ4CiNMZoC+aWe4n5N//I5PChvegmDOf+lqb5Uf3UY248oUIT4L8qQsZmOWGZ5EsHw+MH2GZRkjBJBc4gVqPnRpG4QtSgjUUNiZKr/S3NCTCq+YNvR/lNyon5BRjsdJ6wqURDxeSo1QiEmnVssEHRnKJvuXTHC2OZ1XiQ35Gu4itwnxD9JEeUSNdhOOyi3kzZsKB0Gy+CioD0xyS3u2fCOi/T8SsUFb/iTeEa6ela1HpSaFvHGFrs6WolAyMvfw8/0SVPQkCZ/G4HWWTmNcaWA4u+v+YNwk4TUC/0QO6Y4y5JzuQeFooSsXRtCECcYHD3/QNSLakJ7GFmRTYFss/JGw2hZgv4jwmFttq7gmRbREyIGGMwAF7uLDD4uqkP7+4HTNz4xq6XQcLNX3izpabM3T7Kb7s0Wm/PllOch9D+ld4tO/REYtLfEngkBd/HjfukBi8H0KHAFDBCh7VZY2fAiFh5T17moPJT0JJbtvSXs1JmZlTrHa2dxXiskstDL4i70ZKtAWiwh6xH5M+BZkTUhh1WP2eW1EoIyeM9kUOT0GQoBKgrvlmbUxojExAR/Ov+NSJWcL7Yb+RzLRwnXDzS4STfGlOcWEpgKlAH45LoG/yjsK6hcBrj2LGJiqA5LrREvR8i4j6OLWHZ6/Sq+vHu+0CLrVbfSYKI25l2Syd5pSX3UOMVysQUoSlGBXsvFiPWbeUIxGx4ZkdEonRniy8Z5AnHMoLoXt/So+U0CYufQ/axOK4l4BMY2oCkD44FnFCSHuwKG04KjDETprMDmORQH2zNdysptGIhk+8elExuBDArJeZyGDWOBxHdSrN/9YMmE8ZLBBsxa00pSMPxvUv1uwdZt9N6chFODmEWuxnEVdG3nGO75SkzUyzDufu4T1u+uq7gqDv60tXwrO9Rr4=';const _IH='7a813f3002eca3a2ec27ba8f8c5f3aeb18df618158da5ae0983b06205af1da89';let _src;

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
