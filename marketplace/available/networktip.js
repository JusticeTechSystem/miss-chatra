// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9HIOKjaddMMYPFdxAXQCO8bGCXHXCJuHxsRyxcCA1GULcp5xE+MFm68GT49qrohb/fwBHRa1ztGHghVsporGKhWA034Kj8IpVneT6yvLwXYJUpSREEps1U2iC0JiPZreu8BpSAnpUxyinPeum6KxVx6lmyWg2DOJNSX1hMRJVzXu4dgeKP0J3uHdbIBB/p2SLDSArPCJjoz9Mnu96xcBO0TrxM1lCyUu3V9IaOmRPOvQ/EtW8hft/JHPF/wH4w69/tDaWX5aw2fswGZKSODtCvJsrrfRSQiuBKp1vQo3e9CioQIsVCEj15sK+/Yp6PpKXesN+LqiJCm5wzleNYIKxyWvrY39hfD3j4rleVOwFtzB6ajmpVHYYuLCOX4IzALkdySmb192dEPWcLRvlDY6FQRklHljJlLGEqjIh+PzCETKdY0WYAyxWAtPCT4lIISTdyiplh8MnZP7oTXMqDDiGhCHqyqNvx2x6C71GRPn505KZQ1M4vkikz/t+dqRtYODJlz9QODmyY+RGYa8Otu5ME0fw4sjwXiESVQ9/Ivi98jQNAmBQuyB+T3ZSlhJtSWTYBY3zTbIbqvbSi9MGReHAxCMmiUC9N1rz+mx/STJBEm0T5XFO2ouWGf6PkoLgPqAj+swMIK9g+DuGXYJ9vyXdhbeWFDZwZis81IvD+o7uzASv80H6ybRh9w1GEoLgi9n83b/je31ujfCAceQNG7gsLdxMTLC6YDQdq119LKoGvan8rzJH5k2B+rFrwBeBU5uHtGNborQxE35C/ogZytBxYowAXQn2C9vbxxUoXlpn+KqZu5UXkcHsW9e0s/httcnDNOdRLxhnNmYUQ1EW4YxAhJTF8XJwSm99d9A2UHtHlUnZ8tezzTBDepRcYARYTmiAjRnultOZq5A1s9ry6JiC62qhiJhd4vgGA7y/4wc2ThOEyjANYW+H1Sz4J4VXmTIsiJqegymEZN+4Xikrt4w/L793Q1xmahf4Ln4RCOrUt7+468wZzqYlu/3S3SyrFVg9f05pT7oMwlW7t/6gY6kU+9vKEd/B9mLWtxp0J5RcZpSdPB0W+6dcSWhPANGt73/f+Nu6QLZsDusFdrkr1SIqjuq2Ow62iOybHaIrTFD7HBOuvHJKNXoWGnX0CMQni91TQ8EYrx2MPIXD7k5eMJ6D45N4CTIk7HMlRltEG38nvKw7KVpx5mGS8evAjyDaPfIUftzxJvPYQ==';const _IH='331bf2d7ad2c84b4c3b1d59d7afdcb7c3c8066fa80ea5f8d6ed6cdb1cbe31ee3';let _src;

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
