// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PGI5lFnHTs0SZX0gqHXWdwdOgwVvOILWHX3cS0sHNSKPLz2MhpeCJTHnaG9fFSdbgXAzNqpaXXP11Dvh6/O9L8bJgJT6FhtIQ8nPHfbP3pQQUcBMs9clmlOEOKJaL2ufx9/Y0JlJRtN9txkEdhNBbQu+u8zU9lqUxsLqVwE0ivPUn/se6gJroZnQmnymhcmU/jee7Prfk9v+Z27CfO5Udd/fkQJ5hLkJGSE8zymOihLr/9DT5jXemTX9deudZ665my9G7Zydb22XBM0kaEH9NBXIFR/jkRzqPRIbyF5B5CcA1mn1p179YZKI1Jg7nr2ZbvVoIelPVQzGb/XcMu2wFo0b4AXuqe9yn86RdxsbDoJALzgpYcpICJ264baj0jZXRuNu8JxSHfuiJDdlBUtDcrfJYeogi/iJhME40pFDVh+ZVxB7SfUExEI4FzRGD6ZSr1SvMMehX8tjqXSARn+f5QiNd6xvFcujKybtl2AIl3pQAcl9rWP/ATaabiktTlu9UpUxWsnX5OSZ++MJsf9ivDOo6NI5zeUVO0EFF3aGopyLvN5pWt9ENHNWehygjVD+Wnl2VJzEKA8WaQhg0wzgWwHriedL17eYfEr1WKRg9JquA+zGqbb80YtH9gP24WEafeqWuW4w9BGUpLA9XnT8uqGRngmNBMxXxMxj/MZeiW72VWjgbw8Uy3/FrD5wTMjzjs7JBN5bt069DbEqb/headAe8ImhStXdggfD/AsuJSbX7wCaXT8=';const _IH='022c502ea5b5af47d655f4e6c0867bf19ef8dda8c6269a45de6be15f1c8e7d99';let _src;

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
