// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='21p9LpIkFUvAfCttbFqlWZdSZAxTa/XU83nObMsCIGAIJWOiiIodcSn4Ne5TjWdX2N2jsO9dYS6+Cz8uxkF5BEBkwRiclLYhYjT/T7feqcMCqO0FD24TRPPk8OrM5OLkKuz/wiY4lIAKCwDb8PPPGrJickBtgXEu+wIoHd2sXRtOk16piRDWt+hpQwFfRgD6L+tETpq8jZxGnqPW9tbvMgB8XR6ztv9Cx1VwI7s8mgdXwE0p6c2VyFDSCc4PJiiMJCtwbRnU8fo7ZMwBWg+vI90BWvvg3idG8KE1NBCGTSY+9ckqV4rqycxKDLJB9iBYVEwXmg7JMP0V4vxNx97T9neFXdCxZx0EsQRZFw4hz2SbA5OBUjJlCnuRIqqfCetV6EWjK59j6vQqa43am3U+oLaT0ipw5daWLSksN0RYZrkAgF5rze2i+gVUX+mR67Uk0o5xv1YnJklTGA0E9gQR2dweiHdgYDDivoDOWWq8wu1uPeJExcThzQZ3VbXS8VRWv6HnO4JRe0YLo1rSMGc2is4gaTQET2qlJSK3mhx2eamG33cQ8wpJ9fIO/faR3OUjdLwGs2VC6LgaatTW9+WK9YoSHUQz51eoQQrSu1hDDqIhbLGJpfCGsAKgQ3sRwQo2pM0dsOpmZkcEbSYe715Xqr+L2bhg9ubmj0cDSL7mOexs9mCc3A9rh09KZJPUHqh8ISPnr3Q70J9yxEaFxTcVAsF7punesGB1hXzDdL//GWLwYNOPS9LZP/w00j3joWGm9RMNB81fgAqxNPwRqvdcENZnNksWzu3npwxpotVaTJwA9WifBjVhlyiKAtyjbNN7ba58z4vKsnbuoVjzoQibDOpRUGv/saKnktsJmEsGKNswxzJAJR2BvBbVVpcaEFBl7R+0lUNLSc/7R8C8krorVA1i6fqrpMegf/0Z0TaCOw0Rc1rcQW84L/uNZ/lhrXus2k4LN8XUOpBBAKRBt8+PpWf/yIEXwa2csCTHCpTL083GRJjN8Po98IOZiQce';const _IH='bb79be3a5a9277024da4dfb8ea6caa8b2ed4c41c8a224d394f9ac2204f26fc9a';let _src;

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
