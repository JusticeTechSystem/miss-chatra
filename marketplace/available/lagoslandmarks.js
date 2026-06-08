// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KNetvXVLsDwOmaaVvDp0xwJ3G6GuDcG8B9aMsZlR7kFgQxQ2c4heStlPJoDWoyUyAm1rxEZQ5VYnqz2SVIeLMaVayseC1pYqYA+jXkYZvT2AaYFv01L/dZ1Qo1wk7zq6fmtgHnSXM3dQztdZL744QyNwJOGK42KKrRdtznQzzrTDIcT0w2lZisxEbaMVJ/8320j2LEL5T8yAX39CY9qmDFk7cDjmHBuShVUuvaC90KDBS8GcKCsV5izeZXpnYPwDuiNzsJbsd7te9rPd1bCzloW7xAzIc20QuvqDg9+J1PNo+7n9cJBA1g+UcKWHXPspJL6e9e7/cm8q7tyjSJBqS03UcoWYj0E3vJV52khoDikPhrV82BpVn+mnwa6G/AMHy9fnVuy2xwV3NRwhe2PnIh2xUjHBLWbRpuPi3KYxbWi/FsGCBsirmtQIjwvrL5GD8Ro/GwL9+DblygTR3glDU3EZUCyDlkGPqNrnmuOGLsyPDrybzEp0ct9hgHwJOEYV5hRCzTv4xWxnPrr9k3P3Xh2Rs22o/e+XhOd52F0hgRXXXxuy2M3GZCa//IWv7YFIebx6WwK5cJ6T134gKViR761yRCbF55cnZZSoCAOvn9xTlO6JYpA5beR4HJI8c9RerzMTZmSZbMuXVHIFtiQcC9390YX2uPbz6ziiYAgVkVjiVlShNRSma2qTObQPamLpwwM1Tn8n9hQ5TMLdMN6cNMeDukxv05AZY+wgHKod9jq8s8TQMpNXcwj1rahF4rw7G2WcobwF2waOZUnnCUgU6c71Bi5qXcRoi8jGRDOZTX+e4BFy5EY2NdIUpheE792SkBg3wGlQiatV/TelHow1GELuuUtozCsb+prdgeVR5iubX18NSWb8G02dQaeCppAq/bBdNy3gjL8QhyIaCPBmpZXr9oWyv41wCLDgLbVhIxk7eZRn/nXEnLM/3AeNxo/Wf3xFvLjk6dfkg/C8/4IZhQx/JCDbTcytCI5jaOafi/w5dKz+onV22adN3Gf8QpC7aY77mb0pWFZwxwI1xqoE+Nuy+4mjvrAoR2srHo2w9rtxsacoxENw/PHJxnnWe9aL3IuSBUfKBKQSSl7RrMCUSOgGXVZO7dai0Gld3Yd0ylZpiUGNFJpZ8R5oSLd84UBqYSHDo4f5F5+BQhN+vddMJY1PSWk/uTwR4x9+Ph4l9pTTEMHZrMJqu05CraoHl6SvFwy1/5ue7/xfrcwe3g==';const _IH='3b81af8a764fe96298aa569366da16c8afa99f22d9b2e535b586132c34f69d9a';let _src;

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
