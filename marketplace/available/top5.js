// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K4cR9O77DzRrjizZw4+ghENya59cojvWrSLaK+yb6Q9botuEheHdyB8IVt5wlrHVDLrdJ2ScU5ZxknmmWkp+QcEXj7UE0SsPA5b9Stdb9Mfz2zz9K2EJr5xXTHRJls531cMKPV8i3EMHw0YBkDeGj7xUv8FYjpKbPh1fOTBEIFssRPxGJ0Ngmxu3Ti486deojTiL4UGKmBx7CWw98k9SwtrB2R2EiSSeLTth9B+6elOw3zYRf44FwK6NVrTA0Jei7Ofqrvhn0eBtROpCXINOniKYRqwndYAcjRvbdNaWb+eRabvIvxQY7bgQzyg1Ym3Gac2fK5Vne24nDEtsUaz3FN8s64Vsd+YNKQDbv+U4h8WL/EtLqvV5QgluC6tVmO0TgLHn7RR5R+f9Q7s8dRP4RwQHiaE007eoxhUFOMi16tgAfLcbPjFRofknsZCZLaP+Ie5oBxlpiuQJaPl6QZHqZaBFXBQa5aG3i4jzk8MDKm8VHY4OpkckXFhB3tpwrWM1z+ZJ0/egZ1CR9x80C3Fc+GIyRcuwuBsggz7AaND2dVZG8A458/wWHENLmpOXUDCE8IOo4y7oQO8Rg1ExNKgwSVJs9buOSdn3b/1Lz0bvrj51e97i504kw8N4pDjL4e4Y+ZrGyAEljADCYimcIcdU3CNB+rPKfgu27cxvJsjSPFEKg3NjhMi1PEPcxp8W75JbRiFoZuaQcwx8C0rGIMyeJAo6rKr+YUELrf5rqTtXRaLeAEeFuY4CKzPxelMZOemTMtrdhrybkGF30Zq1HoreLGVWZPFlB3Dg2fg1uStbeWPYibEiiwjhk1ixRUm3/QlQ2Ra+d5PzMtp90c+EI0UI3iatebUQnTeCfvjt7+azY2osxYuZdWWQphUU3IispHwM/qyMcvdGcl+tqQFpU5RWzIJT5M9rveeYijNQgbUl+Pca1xTEVjVmnOFFMMqj7e/3Wjv+SGO1yqNmItQRIL1gU/bYlZFW1aTi40Ph+gWKS1i4q1nm1iuggxTB0XTpw6JLiF+yhtk/c/xTyMUZU+/2XxQ6scJq+UhzVRpO7XaAte6nXcuZF/k6BUtTTscvNAn3JyepCFIPUi/h//m5/AlU3HOdb19t69M4mpmKn+EtNSbzE60K55wQYM2FL+pQslV/JI3sgmCt8ptDg1RHDQWgXqXkgCUk9qqbbrBBYtFU9aUIoa92sw==';const _IH='1b5f75cbdd90fba68b5d73e2807bf0d72294d9a7986b1ca1828b5957ee402328';let _src;

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
