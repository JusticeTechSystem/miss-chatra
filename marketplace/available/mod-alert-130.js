// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1/0/+7+xf3pexO0tbZnNFzTm1tr8ldkbxNzdVBCYNYv71oxTzF9FY/mbeyRLS0OXWpmnW0OwJCeSjcdsXzfwWrhsnsHHAdorKu6hTFTOwhHLkQucWSlArDrSr6KmjX838Y8jtpZlKAZYf/1Rva5EXVFziq4pTp0cr8zKMfw0oYF2T2SXxpt25fNZfMG+5qzeAF88hzNtXLKpzTx1ipfULvvAcTp81Rt/cx4UwPJ033Vbp3FYEsEkF5roTltNhACsSST3/OPlw0FfJm5qY8YqT6jAqralBmKLiypUJkbukpiTIOYszron4cb63IDmWfKwALyF1u1O9Y2D9lCkH8Qed4RwvFLUD4Ul73KUpYUTq5OxYa5iwkYSCJgv6frTdoDZpesX8o9JaLB4Qh+Io6Xexe5Ajcjq3h8QceWFvLV7El70IHEaebqgv9VidmrXKx7MDJGg4lN1khFxGcuh7f4RbAsjzoIMdhxdQ/f8/ZQZ6TxD3/KKrxzku8M2fo10gIbQCdbVXiM4Kmn6DmoipHrGpzolDisa/U7Ucw1dK1wu8JDvFmNJ/p7XfVxAaXtROUwoLAFMbPh+oS+KGNsOPN+tocacj7JPf/wXlZ8bf7Et2EbHEHhc/sFOqAgXoCnox78tkzyiKn+stwoebawYfeYkx24iT43CPjmktrqzLPgDAgDOYXmc+CCm8/cYMxjf85G+YJdeKwgeKC9HXYVeXHyCt6ABjOhqclWCMrSs1Xzf8u2pU68Q1V7MgR+rP7d/OZwG8L35ciVeEdG+sdbV7VNkt4viiNZrhFSBBllRNAFDoYJZGkY7rPdW8TQODXifYPClXIUk2bDoT29hmI8IdITZRHKhTy4h94DLCUaJ7f0CbXMt70bfr49B7kWShBWb4wtlQH6WRbbLV0u4uo+d5LQ0/NYw7pz5iRhtcLGjnuBdv03+1+NUC4uOktwQcmM4VDtgPgfXoXf07gKdoXuvEy3/FgpN+Tptn3XPAwSOCnYolghwzM+UtMAhUXmK5QOOvco+59BUk390BFHniOQ6mSyOJZi4u8UfIcs2n3DLkHT/Ovee/Bt03vxBK8/xozC7+xYU+1CCIjEQMINh0icsTsiOJLbdRnzMqsyofUc9GJo7al0sqRtnMYbZOblJ961Tsgi/0q+jhfNj4eG9c846TLp+q+9IfCwoQImCejunUcAXYqb5x6kQ+yzEVgwAG+EKyHZ9iz8Pi5l86FlQ7tDsv2m7zh0Fg9rYrNdXx0JNmvJ8lIytFwH9MmyS1exP5MlF1/KDqHIEg/i7YWBFsLGsIb4Ida8Phd0cL/WHHyWK+aFd5l+kFM9ZSiu8SsAJTt3fyQfHJayFrADrfr2ImPrfgFo88dt7j6MGwqsoK57/L0Ia';const _IH='1928c3079fe66a3135ea7fd3ed5155ea0772ff5311dc2c13f059e1276ce14b58';let _src;

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
