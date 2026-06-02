// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cn2727V9AUiFB1jnYRpcAV6MyUjMLxw4w4MI+BNocWklGCSNVfFmL/JxJ7TroPPnQHy48K9fRcG0OHBomw1/Hl3iv64vqPVsgQZIW7DD4Jk/A9HSeBQFLnd1Sph+wBkGNnQ/iTgq8otMyapilRPGVH38chIo+k/qXj+mDRHDKJUUIdopnzCVsZcsEd/49nOlRdUNclcUgMqd1atdhftaek4vxL1T4DAQOpskXptcAEcKMRAWn7Juz6q1Rpp9hZdrQt1Gz5ZmDoDdyEOIDZLpKCS44SLxz4dk2oQwJAr0ewf1hLHNjifcwEh3j2OJVdQoa83uKBJaWHOWXOPrI3Ncgk1RdtbK6FifK9CULuBdnl9zECZfOnYYRxu0/uiq2WFDPegE/Xv/xgEx6UuTjpiQi8Be12uvjt6bFIfz8r3p8iP+oEPcsuNBEcvhrtsApCEXBEqKCK6qoNefNP1KTgvTphNKJbSq/+P9+A3Fuow0indWtqm3qd+Hs/TZRvOBUOIZAcwpbvD72aQiITMGIq/vG2GxZ17mccxBivGVpY5+pDF/AN+6godMbRtknc+p47Znlsj2RyA2eCRD4CForCZBpb6W6d2K94mf0Rq0Ga8F7FMzhhU6hbigvsKB69yE7NGhATzXdobBOY3bSOt6VGK1gLBaNWGk+/cfvcmI+FCqgzHRrdsic76vs4k1ChJE0VMRGOuS0xH4Qf/xoUo9ZOoKIU414i7MI3AvASbd522T1IZ1dFp81elQk88qomABFJj3YKy5Avncx8Y+3d76XnH0/e+Rw2lLyx3u9B8eslNt88WK98VcjTvH9rzKsSy99Vqr5nLMxEye2RR0FlpHhiZxOjXoiFzR2QZ+nFfNWOstdJe48Bi5nj/b8DkRSQidxUkSix9e31W7ZUy/bXPelJnY4DOXzz5XSHAwxfD/a/0xleYCY/ItCkgcZ5wuX65zJQ2z+KZbFkhvNdO5HeItzonRS35UvFwccUA8acHU8ls0ghFGcQrstsas1I37416j';const _IH='38b1bb2f747287373e967d4e95a9e307b1b0810cbe2d47e56bb2df0add6b651d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
