// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LtWolT1hKlBxcEh+7Z14KFbrfN9vxYvtVvbMiQcAmHPAecH/RtimGzASVaAC4ik87oWp8nweqVZej0k+gVfcikpqgrWDIkKFNkcXqA0/ubF87KkAG9W4TKkdT2mqWwO6TzFvc7roOVUD4Dp4g/BYaZQXglG3eq4L56Kl6XO+MZliQRqt5U/6EgQk9pnzEcEYutZAgDDuD59hhE8g69bcvb6y6QS5V4n1FKqVohR1TWkeKj6Q4dPYw7JSkQR0dP7P2xRbxA6AjEPbnSXNpz3/5SY2lUdlzu4G6dKcrwPEe4YVVMrKPyfdaT2wUqVXw5PrCwbn22vxwwQm1XtTWPN/wdZFd1/7RQ+hCciM8Iw4Wie6HGv5zsUoWWk9WkDSTnfqVc+yieDD/sUEXflL5MRGRnM+EdjLsEtVzl08rvNPMjt2JqQ5mx1KGNd9vf8jfbi5cfnLNNeSjDUl5w15OCTAAl1qCbIyLUHE4qF9QWKT1jAotrJxTJNaRlYFc+tkmoeM1B1yy8acOiUD1D8Ir8s3zz/paVfn79xnTlullMwr7Nak7rs3Yvoz3w9pk/a0D6pZFuWND3UMb50RRnJ/s1FjYM7Najyv4X5YN9XCqIklwOHe1JJp3oRu2zMIaQitKwpfjS5ZO9QzWBDgSf+/Qg5l0cipopM/VYwz8/oB8vEgI3hA+4tPJXOE0SITXmV1mKTYtN2wnFsu8fZjv/GsxBXBqoVxLRO3IE++ziod6z1DSgWDn0/Yc8yoOmXuhxtCJjV+PXeYS8e9YTSw5m6jPMlPQqviX3SGexSbPRqF/G1jQ0JstmDTXvdMcr2XLMrjPIHO52mugCW+G5dv1Z480ddfs2QCs6FQYujNCModdrnY8KrXqE/EUHqQbIqaFPbw32PyrK+GkV6aL6wUFYVROqSXcgYqXdZupNCPbRBr5VReDDmP5OjFHjHwT4lusnw2Q9EGfvMW/9z3WP+Y9pZsYjeQBhiaLn8n2A29YnX7r8Gm06JJzlzNUicEeWicLhQN48BDwOnKmML60QLyK5tqZ9pHRgEfcWJG8YvX3hZhc9fkAK1s+pWQNoDAU1lgZPZQJPISW4Kpd7ufsSheVxvv4Wyk+lUoq34Sc2BA6Kcg8qiWZag2TIfFBU/y8PuJFpg+I6IumkAm7zAoGujVSVGRaT/vS+udCwU/eSrlD59uMIM4YyCLIC6Dg8c+057QMo6MpAqNtuNU';const _IH='8de9a7a941b4b143dba1c5f3bfc310ba7583b07fe805887d157792e0f838f1de';let _src;

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
