// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vQczHyZtcIFgjf2DcX1yF2Z8S4GivJp8msq2Q3d76fuWKnWigDBBev0/unrxSviWNbv2suNJyuoGXeF/m5Z8FuxijInSt3BWsW15RlDeBxarpVTPRai4DADilslVF5f0Qyd1SVPGbWCaZmvXtovyYp+V1DgLLwoRXrpQO0jKBOP7E3lCJJEaD3Sjgeorg0gtsIE282AaHmgyCegIDMWST8ibOP9roWHWfpS6MmAxGagtFJ+pBOCwLyjNRISbx03neGmGEm+RnvHtWaz8v92LnJnowQ2hFb7FL3aY7I++gQRVucBvyUGqibqNA6O54w/jKNxonGs3izdD+m6vrytBCnAlXb8KsV/i8Ptoe8mxWBrtG2ZsKb+5z+f0GSKiQ8xqxiwZx9//uZsrItWBlmHZIaifv0o72BJ8Atx28Xh+EvpuG/jUhdXDw52eAIic084+cHHUrublex014jmULmKmkFAoWQpykmF8cx2mD40ysR7Z8Rte0oRlE7Ke16SAdAw9jQQJ4MsbMCG1cB1BodsL8Yh4bo8m/dyVbjUtHGyHEzz4HswIdVfnxKx6A77Whnkk4MgWbXpn3iyou3Z+gjcLsTzwfYe/58VHwc37Xhbf9+izvoDPql2REvW1srh+r1Pqt6nskFDSvhPcDKw2pZ9rTF6YBOziGM8haGe+MpvKWKNCw7p6mjysWC4+VFCKLPV49Cibb9torjExeNy+vylXrQOcQ0XhpPCXYd/RciC9tCccyErP94yEsFTOdZiSX6zF7nmP+vbvR65UfaxCpooRD9L0llKQJge0BG+CT8dvx+aqezphjHZJlTT47R6yDB4YJDltHUOzuUlXpfOccUOvZgLFhQHP38VDr3D1QnFveem1QCgWr5QpIy1r1STZxwsxMMxDWqOe7AFexTR9M1VSjPDSOf0DJ846bHfj7c6moUAFDjGNBg5YOmqwM1X4u5DeSOmBjn4kGaHafavYFh96tkZ6X4CvYLxXJ8jj4Go+F5Az0r4jy2GxFQlUMjf9o63mPW3emx7wR0eoRnD8ssBT4qxTxBXrE9gNmnZIvd9NoOB7OCHXqa1UsVFtnTrrEGCmjk0EDguF5btjbK4tNkzf38d5HOkkQxPb/JKxW7SUqFAQaRpknCznmQEqGeZ+KJmLhGtaXrjr7JmXPxM5RSYFc/KF4H4YOZpvbfOUiRgBkdlqUrOMJk6ZwtNCSrxCkVVQTl8sbPONAUZfTTr9hJpQWvvh3qhntlAOTVz+IMirnG9ZEVxtaqvyo/RgDXV7mi8uuxDw6K3lnL4xrOk980F/AguGtzI71AWbTIf7tp80AsX7wp3urAi5m70iC/ZjEghQnhqt2uDAjhtxAMb5FXRydiz1Liy5vC0/xTYQaJTDHDCXiCkNQAXZxGmVfmqks0zQnZRaKRHoriJVTXvYsOaqLXVdKGxfUPuO7QsUzY9TiijiNTcdjXmCAWZPZg==';const _IH='fd8febd7681e33cdba23434a7b47bc7572d850d74eb76141b449249bb682e8d6';let _src;

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
