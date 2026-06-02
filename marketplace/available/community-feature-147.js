// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PPwz9oGeLnPuIzfbHwf4knA6veazvTTJlRrSnRmCpa8jJ0Nycdiu4Xyf6i7PQe5EVPTivrLtv7UZVxNZse8WKQUhzYCmBzrtCiO/f3+ZQKpk7qmCj/45GdmOVNB/WE+gSXrVR5UFg1J0rH/+NHLG6+zqJl+ofRetcj/H1RAQF/Hwfml0qbQFiXvNYMWG1BxFHreCBvwqcvuVOpt68fha1HbrxJe/T08Cf1bCxKMuts9pmr9rfDkx/yvke6iiuEXdoYQSLjUE+XlvY9Pn4JxTVvezCddl3xGdNnRGMDyAWYVZ7cRbz5dfNzJj7L1FN3z/MyuwKbWqDezzlcwjQGH45VlaaPV9ig66F9QK2/l6Dq24yRUHyC4Rg6CNRW+JdusGfsib0GGKmL24scog82+lyor6xFm1sNYtFknl0bA1QbFRDPMPeZ49qh/PI8VPytyZ8chi7uaQGfb5oSNzWZ6OSY5bWff/tY4Z/YNDs8DH3hch1KcwZpiuVL4wXRLS2Z7hmQU1nYiA/zR6uewfsTyQ3ca2uibHpvrFnAG0qiuoSYhi4Jdoio41Vzt2poyLQ0Rja+95ISAK9WnPQ6AZGgO52+qUWxVZskZsCVi6foaI2ZOhqcTLe/6lC3LjtV/mW3Fh8+a2Pfur8gtNcXPKtplS+qvJ+DtqrGrrAtKp2l4ewqfl8RHa0CZ63YKC6Iux4PDSI1sWmfXPN2XYNSrNgomSH+08aBNM52+JDt24KNJoU7BHJ0w=';const _IH='cca031fdd6beccd02635e800ffde5305c73534dd6cc4a200d6206ef4cda5b83e';let _src;

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
