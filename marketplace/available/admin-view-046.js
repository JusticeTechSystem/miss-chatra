// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gPQyjKDuU+JYxmU6QD0BD3ZXHh9/l68Si6R6UgPoF7IuIUnIwBKdw3DLJ0iEZDRm8y1rUO5dgzm+BWC51s+oibCilKY2lyHnc/kIY0VXjaxYrbQYmH6o+Erv3t5cLQF6wOz94LKjquB3JG0l/wIlvfI2CJizm123XstTKrdZuDmhR3kok+M+zEdPnQFbajTyOmtx13sEahFTtFq1v/PhOuqshmNSkw/oByDzguAqtE4swlKcgxqTxULpNvfPvf9vxmrxG4f74uPd2E2Kjy2Euz9fPhje+a7gD+hHnztiPEhi0DqbczNYczs3WrLpKLPdIysXAqousAZagg4L9BBPqc8QvUpw0OsjCMGT4/8ZMCkVAoXZb+Zd5tYu3tmCWbo6LM9WB0acHM39WwEW7qTyIcSG4deevAzUS1NHWR7yja0xGSJBEy8hV6ZKhmiESzc+KJbOzpkDb/YcquMQ6N97z5RCvwbQftuBaBwkmjIhe0pXMaP72u3ffmJD65tDITH4uqzSF0ybDmw6lYJwaB5pfC0AWDh9yZcSY8FIAbr6rMa3MKkMF1zngxADB9N9IVthZGTrR0kf5/1mX2GNavrKHmBzMGnhtLfNjYQdDG3sQeJjObeLaFu0VwM60P2vCm2M9HEGrhGmrIcIgOtqektWPE5yHtf9uURQE7OJLBSoLZQd4PChubQLv758YW+jUtqR+A+Wms+U4FPbYlqqXCjFal3nyW5HefdIlO1mhTIIh1Ic6/uL8Icg3ROvephLBY3OyOw1DiB+9CZtsoDRUoSMPwpDXFUa1cKPlfImiBj7xmcw4oj570LeOcSURPylDerp/vG9iD3RvsmSrFpmTfRnI3JY7nlegYdSZ26kH+19MTKUEe1M1+Hb8x/1qqajv7EMdhyeZg059xdiE19bnPxcaTAudQFbCLQZEYvpTpc69MlAj7Ov93ez1Bi/2YNsx27Z/Hg8/ySnp2T4CWotk4g0+wpGX53Xjd3kiVJkU0k3NQ==';const _IH='b928d3f5da33124869d6a67e046240e9cf4735eecbb7ee6ae7dc4ad6da4066b5';let _src;

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
