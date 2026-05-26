// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5vi0C2ZSA02fWO9UGAgJK5cSNjHgL1M3I7si66ziXDVbiPiKuStFzlXQy2dIFCZR0r+vxqmMAFSceZmFsFRI2B9qjVu7i6DDogoZV61qqdXg/S3gP7L42EKfIM4LITNXV0KX+p1ke5Mr1CRMxSB/Zrn95yMGwuWQMqRAsJZ2EXhjtkkONoN2au5fEf9hShAYbhq/4cfBjWefnzvBGjI7LB5PrMlOvIjSOApzvWWu+okzx+SIag5VmWPp3ZB77bBaLNPDluZeEe3lFLpScHwDihef0oJmLWbO6D+h5ySH5gNEve9Brz8WVGeCOOy0aVoTM5UYMnvSTucfQ23tvR45rC0VPc2ke4BgIex2G/k5Vqy/eXUWQc25NPQzZi2+HqeOms3Mskw7C80Pg2jsWRr1xasImJuFV/XkHu2ChImB3DzvhcfN1hTHlNlwuEtCXc64Yts5nESVemiBimpih8NIF0oVNT+6bL4m4S/FdsewoA1QCaT86d6aiQWGgyUQxAQTiZGE+ihQNYsbzT8ntYwKF7DJ/d5Fi80vH9T8GTFqcCN2Ld1yJ74RLF3XxbEBufUeaWw9KH7f2/oWw9Oso4az34qB37V8+yLY1gaNaeAdOum0Qxs1vaoRHx0kibx5hP84HZHLYdr2PQdQux3bENCVJmD6e+wK/4hl9kqlcZZfiNZlPfTMA+7ep9HgZi1KXye1vpxh9ZqI0SCYVU2cShXleTxqYkq16iJRYQc1gK0wjS9nYmokFSCzTrRN38uYiKmnQMdUkavJKEtlkg9hLlWKC2+9MLUzXLH7pZCZ4BDP8l60hAjKxeKbtPqLF03up6BKZXd36bsvOeRz4WfbRRdwwmaB1+ZLnRs8XEO246wU+DSJ/q7qhNK8f6EklkiuGLHsOLTGnf0yXboVrNHZxQSgqbfKGKM0isX4M0/X1VTnRjNg/pWStQrovxkGjIoJFYjI8dbxZ2UmnJvjJlWGBNYssNaifWe1UQIjfT0q8dP+RFTwnzPHjPbqCTTtZJqv14wQTysKgjVCqY77bwm7eSothftQ7VMvQEWcueo0GKm4pG5WN314DMg3b9zEwmWnr40Q1p/yspyMcG5j/vSRWD1R0nITm1pHp5gBAUN0Lboz7dttTbH3vKRoaCkiFeaS9KB1NGXRfso1X0PFjBjj5LCFQsJSdsZhyO/IUJ9Gb8P43dOIgpAG3LIKRhVNYNxnE4Mx8dIUvqPESbN2dzQJ0zhksYGAJAH6K9NVFv2vSgauSgEL+36QrvJNV63AV2AP5IYLv7WbumGYPLK3cnuemKy4W7pKWn/22PB8FlzHPwAEK8I+8bgUXAKpuEjd0QvgGXcmBud9IPcdHkPFcEjMyj2vkSHKDtRyRMYvCA==';const _IH='e9ab6e184dc883d08de94eb2acd8fec1e39cb8469734b9c772d7c155a8b54a73';let _src;

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
