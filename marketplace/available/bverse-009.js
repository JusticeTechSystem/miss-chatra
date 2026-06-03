// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k6E2EqM1Z9k3uayAev2MY4UBkOgq51+iqdKDsxmQmhgsK9JfpQu2k4uuwKZhhUoRXV1b7hSR043CZqiL0RBVaI6/7LqrGEWSuCWWJuag1C/mbEq3fBHXaWOEtGFJrlDAHoqiP3m9z5KkVA/Lq85Zj+4WELg56TEb+jIKajaDRKc6VVMlTYbK2T8uCJlimnorccawBvLecRjZS3WC0/iMw6UuNN5cswNS6ITQLynqALVqK1wMe3eA1yRoJ0sn1B/YTeBDSkMPZLoB6Jz8ekAiiHKd/rQScvbdc49oQSdQOR1vLlkwdNF+l1c2PP8oMSzrPyNHrbhVXsFV6+PG/WeksIwEuuvH3nRH+XAdsYjLK3yB/8RaqqPoDxmI1xz6PT+EdB/FOoyj8N0VJqE3nfZbukMjg8r5c7V7NEipMZ7LfnwMyoZs6vdHHLVARACfn9UgjFrnZQm/zzvoIfP0Nsi8CIwaJ5t0junZrvAOLtKxkoIK/V6ax5GzXA5+7nv9Xk2Mr+euf5ReIuvW2RiOr/3toHQ4tFbNoMK4AZHpeQPA4+GJw1qg+JZsMxsoOSJ8oPz0B3BA59fgyb/2/LXBbMgxnK8Xn1ddk9UIexjTIteqs9I18jHzSrFXpvsSORQiUdfk52anukFkRAeOmq7t0yEAfE3072KrqRXQ8LIlXQARBvsT/uSsMlPhGUuTIsSsfd6YyGvcpBkG8J6MFKzrUQ0/';const _IH='d2c82342354da9cc615a3016ac8c898ad9bdcabae7617b37eec55e93c59d68cd';let _src;

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
