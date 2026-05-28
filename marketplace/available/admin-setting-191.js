// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fDPSac4u0wPI2TenuVk6jF+Yrn/OEEvwK+k0JbtZ4yoe/1TMoQwaMxl4tBTr1vgLlHy4kqDwfF6RosSGX0gACBQGj+zOs5kiNnlLAu2TRSQ61MfOYsvJXs/hsacI2NFPUoHKYdMphueSIBeuZCwZVYRmRuSc3BU8r1lQjkTc6H51zcuSNbMnsKNDdgeAY6oh9sron54R9+0+TdG+smfB1qJoeijAc4wfDUj1mMoVgbt5lvsz/WqvyoqKFKT0T/Z3dOjlauC470V237KKix3bo0xBSKLwWsYBw/C00Aws2fT+xISl8tlMdgAyY2H4DtXkIl4+fKrzA5mJraeVroG6s3gSqfDMLPcw4ySXbHOFUn1ySDShO77YsgxbkxP3D4syrTMcdo3ZPK4pkLHOeXcrDQ1tW32G70SohyjwcAT4P6pgwU+7h64SaXNmqnbHITdNQMdjivkGeyZWai3NnUEY/qNJlLL6ymxqrfIeMyCPV/9HK4Ygaya6tKCCEh9c3Ue+Xzc3Cca+A1eWl65DL+fN1YFotaxhzC6ciK7Xf/ok1v/rZzxsazrjcvhEM4VqIyUQlnL4xjsllr0TykJT9vXVlrr3R5TxOFBO9D4VNN9AEe+l9hsqoB26pJhZbacck8AG3PsyKSaqystN7jXbuUeARY/i0nqjBgPxCsxxaRxWu4WoL5YvJcSBS4iVaWA/ucVwOc9EjlhfvawctoKeiSnZNbDgy4HNyhVjfO8aaKJeoqYX0K44m25hKJqA5EKZLkjomEQK7frbBNN7Mo7fwEBq6p75QhSClp/t1A6qWBnMbGjNT4ltHuLP0UfP5qhGT5WeZ9rWSSw0nTUpBtULqBYINEI/9+ehwv4SdNrTqAzzhE1C+c5F7DTl3wyV+n/EGA6DYLqO+REg1EKzVEzqFPlSRZiMlRAWb67YcgUeH4FtlPOSiUrCPmOyAeltC+iZWRXDP1Vhwf57LFeS4oKci46IxYrP51+0Ynod6XxUclGVrlUMj9Qtmxrsb68B13KxIuN/eU3G2Qu2MoY=';const _IH='bba47968068b9ac71461e337f11391474a0d769ff2a9add7db135ffa11345e47';let _src;

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
