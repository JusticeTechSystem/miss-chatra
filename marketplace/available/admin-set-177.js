// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7tuW9mcoPbV5NdGRN7nslUsLzg2lToJgGmFH0jwuuyFML58RXTI1vgRScERx8+4cBD/n90bwEDWw0LIDlU+HCnO2UNn193lIjVN5c4oA4x+gC2g++LhdMTbLQXvzOCvo+RpBwzJqMiDWL4aFLBChPGy/SReT6UzjKBbsX6nC3ehQgim1y+qZuMxseNtPUhAxuCa3oXk2h4KXVCzI0GbHhW/L3ZdxHWsvLwDv54PtUj2mSTAUrBy+IqOIdayVAhWpF+fdUzhfM2Vm/wOaC3oWkwC7Zt7OAmYtBD5k6tg36WL/gol/mTAaLYlV9TuzL4pzdceaeuOO5xCITEe70EdegnP+BtSqogDf/yu+0C2DMAKvioqi/zZvdZ8xt26ct+C2CxZ4kUKvVJsJxoRwPqCVTrbYhvC+xHkRgLS9WFklsskJ6iu3n9VZmOvU76E2KHDgZyrhhjGZyfgHIKhztWzHa28fISOoZwpodsRtcqfjZHO5eXuqYCtzeJuyOVUMEGX/Tx8p/3XkTfl7C4GuX6S2/PHtWQv1OpuAxqV5xAegY0RjyOVjFBWm+9pp9tgSufDe8s56rYbmTTsIzo8+IOvAIRFCFloWlfMsXNE6oBDyvUP/4z1xDZuyRzO0tCuMURuwk9yvA2kLgiiEyuzFQluyU8ryNcq+m4p2V3uIbt2U/Xl5M7Uaefx2MFDlW9SypNOcOfnhKPK7cewevGF4iaWwbBVn/2Ni6S9jejWo+D0WXc98tay/87oizu+g7ughq9HvXJQzt/sHhHTcohSUwTszzIOFxN2ihi9Rp3CMuzZEPBnMMKncvwnwTZv4TuBGtMI5Na0N5xzEPALtuWeC2HrkL3DZAly8FCkV0QLtgD5eSn57SCMRnzLE0SaqRwLyARQqKrxzSvI753qzr0zZgQy87tVxiPzDDrsw44yHMW6Rg4y5VOpPHYbPkpi4udJxRV3p2poRCPNkaiMv2jppiIesTPWmG9sr95Ph8FaEhs=';const _IH='d394cba56234f6be42febdeaea2a6945fb2c0d7733c12c08a59efaaaeb7a69ff';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
