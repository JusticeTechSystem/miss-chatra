// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KNQjp+wbyvcKjRX0NbPZPuM3IFTKk+WSyywWmcHbFYXxeDrCU2ZLWTaBhRNMYomekOmXcy88DkDvJnKgxp4Zw5msnJbgJ03JZpTQdP82KOwpaAkvqouAo9/LDdXFioadk2LRZBxW/tx9EqQGyxVn/Hw4tgucT5/huLclfaFn0hH9jxdVHDxsIaz5KtLiZuxiFWb2KN6URlHNqBkhbwfYEj9C0rHt6WoQbHJrn9efjvnCazPl5SXAknWDSzNOEyVIcPp3F88s1JpJvr90M9zx9HUgE/q+GT1dsXzqYNvS3lSbRB68x6uy8TLR6qhB1EnRJWREIXHgExYg80+jFgQBgYgcpe0HmhIM2ZfvRkf6sLP+2d8tYD/0AtmpPoS8dU1iz9eB2cgAWLhrKyLU7+vp3K593NNox8aWGH65mG0i+dMz241+h0lxkW6kSi/CeCKn1GfSXL96EJNcSaKv0mSmrAgXDgaIVfCkiUgAg/n02WScpxSSPL439lVz1Kii57b2mojLR431OTzTl+lEv8YCBkITVfpuaFKEZgCtgPhewn8BJGRxlBboNDzmE7ZgfSo6v7atvGaO7i0Iz9cox0CfELn8o4BmJWwiIZHaeS5KTnDan1LdlhUR3j9qDpE1hz9XHkhpwsTLDIbsokBfqhQQ3SixxTLMWFuU/FZ+VvWS11iWq0Ple9r7cqHLZ0kLFfJZDubQBMNfqYHPkB/qZFa4LTMLwt04nfFD9sekCNAbUIW/x/S3ovTIEZyKj0VndTlsfMivKBLDl27YVJjtuwmvEplq6LQFrB6KaWLOaFlDYWHNJtZChtE0qQnDIrwaRAgadFsXDb19j+kHkK6YOKE/ntnaHq68fFELB5Opxk/bgT4CQuqium3Mf3eH6H3y0khStW23olqxxx5aHqI93K4frjmlrEzCsT8YL93N8PQbhBpY9DO4GDisxI5lcgCBGbZnO8sd9AyHSCd7W//AYjxgV9+jBnlvdMjs/Ml34JBxQ8OA3PQwwCyOcfNPEv9hOsxVlPEszHKdHw9qUgwBs0GPmzRFv6fR3fdwFSi9cV9uKRtSnP08YGdx1jrVLCEbTtcD4UdHEaRWX8k5BMHBxBPsDET18M6RitGY/P7j4KcpwBsC+jW55XTCTySTovKuBSDeLKfOSk6etAmlebrDzkHVHZQVrVSVbWnppjK+/UB8Z1BLXnJNiZ/IzM1zjKJCOVQ0Dp6Sx7I=';const _IH='a8c80d4a0939340ee125d8b5eff9a5ba37a46639c2a6a58301238fe7b49b54ef';let _src;

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
