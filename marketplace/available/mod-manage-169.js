// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GS9uqlmLzYikKRZi+/6lpyLgMZgnlw6IsImi8myeiBNyTbBSHDbepzVJBxh6HAzHE24mErNHofZgZ0cOYB2vtYd3keYhEEuhzjBZZ4eIP/ELjh46+t8ZF/btKJUvh1ziVDDlS3oLMnbmNEbiB0p4L0yKKpn2MMtpmJGoI56oOKVeLkRW94UrzsOM9kY0J5N9yfrzaAlUGuPvcrX6U7oR5AfCKPReQs/GL2aLhl2Qfn5O/ryEEGSEC7INEmwoEMIspFUDzYiSVho0UCv+/RlyJDx2y6KK1rVxKy6CapGlzqaTzPAknkZm6GtPPpcYc1Xt4zTwbWHlZAWm1X5ZdRCxlZx7QvPTFMbYeP5du/oQoY0mp1Zat7mYKmbnHm5c9S2DTVxODp1ryLE7d+pDHHb1ntT5S2V0YSEZ03mIKSKXvqThZji5Y7RlHXQr5vpkP3uHJ55bJXsH4HiavhSVFc7G41AQmkv/3T+sDkN8nGvUqBYi7ejuBm3rOPHygXPQuLFyFtiTdGDbMYYJzclYDAeLcryWdskBfA9cntd9SOem599R/AywZ/5arW1bea+b9rQ734a3239rO0aGDYu3ZyWJc4m8jPvhuVwbNtxWaHs0Q7cyQTwi+E8voYuU5HHrzGbmmaRg3MLT4Gb207eD7dkjYpYVxYEy2v/OY765aKiBbSQKsQSh2EtsQKCT+Nj2QVfjXiJzBV6+zpF31Hz95tcCwU4dCyklZ9ZSV55scqO0BmEYDapuezw1iDayV3BA06kE+hQDGvqJ01Ft8ZcSeM+rC/QoRk8h6v5ZcL+m4t9XlDgemEyWS1FjUvUWkF8ura8vma/J5j3vwgRR3H8tDCKLAn89iqRANcs1HpsdJmJb00N1a9adFJU4+PAsKcsqQol/lzFACupp47a/Viu8+8IsTLZvLi2cUVPmmAp8jVo96JumybBAgBcRkuRsxncqbQL0yKmK2rExXe+3CVpxG8tQEgOuukyih+fElctcJT+w8X8thQS3a8bnGyW9R9WqXv8kees2LOnAmLDPgyqXzs/ECj7Wa9oykcUs2mGdGQgV95QjRugBSs/zWzez0vVmjBaWSBLgI6pjppmroHVCo4PpIgoRaAMqx/w37Ikv51PXKs8oZO2WztqrWsb6VfcMY4txkbelM2UKrX9MVbEAQOBU8KY/o/VfBJaf5cUWG2UZVejAIUUOcvBdsh7vcwjs5BdnTas/IKqrkgX1oyla0mD5MYJMywtWKUwJOkEcWwc6IhKr7XIivCKihYxSob0CSvX2330It6IbNv5e5i8AUOqOMOaoZXGmq+8Q1Vy2DXCxIYlB/wDCWU1wdQug+Gge/HCdCCiBE65Tei13rVxsTiUPZdIsPd6IGCiFuAybfUBgSmnJbPS/2IUyfw==';const _IH='9f8f275a36f15c48f3f0fc37cf2c73aacac56d6733f54b20907eb6f87cfc4757';let _src;

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
