// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='971D14zRe7J8G257fODLsSqWB1xSRTYemegGfT7pDOmebqRTrIuqsnvMaulrw0IQHzrKfm+62cIO9x7QuU4i5LJ69IAie1RqBBRGktg6tB3BkMvtZmNWjGbYGHZHNEPWS9x3l9cI7sO+FLu+zK8I2MtJEanSjPNH8E1zMDpaw4iVETVh6p6rYLKHgxxgc/Xb3xo7vhiUf+twXoAfvzWVYV+9vPn+L/4yggKk70rw29EaTeEGVDiCW8cMuUlIY9NVIF8L9140Tzkbs4YBVif6knX9e2EwWg23EqIlib3XgkNSng+bQNp8Qe8WdOOve3hyYIci23npheWurLorNMMxUVi0HdqqO42c67vlLNLnbulndirRPLH8mY3Ok/IB6C9iGEOP7VtICSAj9ikcSYedANGEwdP5rTHnV0uBEfpFva6aQB5Ygi8EkiqKjspCn2wXhs2WakF4PslZKNhMiF74q3OA2d0UtirQDJglDZC7ix6i2k8+Sw6VxWC8TBA6/uNbVd48QZyDf+pEmdgAUSIuZLyB6vbSPd5iFEU96ygbExsT6JiD3RmcwE0XRAB1vEaqtBDwgvGG15ViCL1zsWqmjSiWRScW89EYDaq5dAjYf278NmjzDsb6E6eb53UHiElhMCtU+Zp6F6DYzL/m6IWHSGPp2Yh7Fx0IvPofzo5IJGiezhXQW2XN9CVl9GJS9qFjv9tM/SxMkos4Py3PfWkBHbg+y2zjcSakvDDvNXaFjypUTeU/CMk84TzF8rt17j8O/qtY0OOXq4+1k7rWbj9BAC2t4SP74l72i1Vo+dQwKlS3IimrJ6GeukCJ9/XZbIjuJFMtb4EvbH6BNTGZBEND+zgCmga/QJQhCRqDWGPeFofFF79aK2EHIYYfgnvCkYE7VMSOioKhUhaCoNKxq/EVQ4RQyypR2V5EbBYWz0mfBw+voXgcwlW/sP/FoPVSlzWOXXTvByc4UegZ2FE7f9I5lYF8Y844u75LTUSYVDknaCNAa+JoXDcLPrZquXc5rWtiIHVXI77QP4LWqNYB5g9RuGEkm7Lq7VpKa4enmpx6vzhTX/sf1pfAn19oAZGAzWL+TLuRL4ei/UR7Qahp3X9I44mn96sScqiPHCFcgTKGtbfQWtCr6pHfgHS06dqB+M952qX1nx4CURNxMw5BpCxVJahRqi8SKbgSBckQTi6bbwWoPAdFX8qymIbMvuW53LfLiuW+Gj0cxX59Njpnzg==';const _IH='384f0ddecbdd384ab6d7975827b0f9ea3f4d69603685097627b20742759b7be5';let _src;

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
