// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='icXNVQ/zKK3Aiv6Y6RvtYr4MuwVx2pTl4CgOcLgLBlfunDUQdRsrMfNzVlPRC69j8YhzekmpmfzcI4J8RipqayCfFnvH/3uzbolg6H7+g2k6RfDlbDN5jLmovRRlvtGCk6xrmhiTtbC787L0n4IGoJTolK52mY/6F+INQhitvB40WyRVDwNSVdIwWSao50r2lSj8hxHuBrHGls8fD/c5cKZ+bA00dW77eNgWrTIB4C3AuVp8+ONVa0YNGchQPiob88JhxDsKkcVD7UzDWbh0VsyHC1DzyhQpXsHBDRvnN1f7fw8qTmTFle3+WllD/gYO38NpJsQjK+7KacgNq+YlY49UrtjLZCNHa9aOidQnDPIiMXgtL6hvrVQoxjY6uDdUfR+ZTwHFTt7gaHGSGMhwP1S2NLTpEeuDNGD+igYMoi/gBRRU1rYib5/l74bpufZ4LJVWkkEBbF406yGRtZCh1xA/Vic/58kXe1DaedJPdTNenHXi9BWJG3ySFumcowI069Y0K6YAHip48Oas74K7i8ryt599vXaMsTyhus4le6XvMLXCR4vCnLfcr5tnZsBYygklWFQuyeqGBwunWyU6GTLSEMAwsxoiM0xYsEVXXoWaXsv22HidE6TxMCX/XD0sWdcjB2gVbS03g++mc4YmeItVbPOtoO5r/mRVHu5ROEL91CKVdzAz9niPQwSzk/LH2WjQ9SNz2MILi7OQuDycxEPmbfDcnCTp8p/KESSFjvHwvCjtGohxsjgYZpfHSvZqGBekX0iGiha7aGBd6iqSs6eKct38uxLr8e2vDtWr+GoJ4nG61Kg3J7zfX/F7/XX56Ws89kZJW5A4B9GpSjzJVQ1ck4QMOVQuJf0bf5D6CyhdjK4dgaSWYHne7ZMVg4kdwuCb72VwM+9fe1xNTW1AHNcq8leG3ZGxZjdAP01Yc+COq1K565znLXdf2fdDduCbiPE90C0/Md+tu/DFyi1YEdGzD8XORBtu/FvzMXxlIJ+SYatkd5zCMKOC';const _IH='149c1de844f8d18a06d5456a69632e3ee25eb7233bf504882633a74180874cd1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
