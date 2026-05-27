// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Aat9OX+iiNba69jMDQ/mljXiaib82w8FVhpRPRipVSb9KWz9IyWGkFOIu7JRPk8X2HK367HDz25AMs75uQQC3zozNB0Rb/yvV2h3Raaf7IQfF9GFXJ04QOBOCP/jhr0KP1An1GdlscYY/v8z1MWvRjqx3C3+r/ZqEwNz3ARLqHAk0SNb+lXwKoeuUQsEr3mbwb447jNHAgqMFrKoqer731y49Xx2eIPGbrP+wLpJD/QjhyN076HVPNHAHpNcyskg6SSQvchXJ/uynZ7k+u+Bx5sTVWPhVxo7lpZhB1Mjc0pbBsi+wHmNMMe4TIMWMrVWwEJP28B40Id+3RMbRP0zXeiJ5mTTNJBHwF6dnnDeCtQDzHQPpaaSIAxHcG7l098ZEvBJnSVOXK+5NbICNDDudkMGwVh+6UqTwIsHXGOXLUi1uTpp5jGSUZ08B3KgsQxcLNkOACflPmoaYdYM8JsWSlQIOpXVY6b3wBRAzx0jjzK3pifV+m9WR3bxLIYMFGiDt0boJcmEEI1DK3673cLoDIp3bb8/7iGEI1sWruMqPaut7QxQLSZ1THkp7Zt46ckS1aXHsDnbbWXLfUhmbGXXVFj/VkGyu4uOBt0dhTl/GHSxLGjqp7ZL4E4WSdPJkleYi12n6VPKsd/AvvFLYhPCapbUFT6LENhTgyDl/Dvub1x4VJv0EK+/2bheW+bd5gu8fnHQSCeY7VSmd6vCe8KjRUz2u7u0wzCOImRO1VXcYogIxeiFr0PGzr7c4C9REINbHjsmelbT8Wfx04w92u7SEzhhYL22ErePq3a2AXH6s95KHdaTYjRONNP+le/nxw0NzKEiK407nhbsp/xmqstZJl2VOqnNe3vocZp2RvLnS3vDCg9iQeOmITTcd70HjXg62Pim0nacDYfe/WsxumNmobm3aUZAdCZoqhiKjLnOLd/21SI6E8foAD0c3FzDbwKCMr8nWKPPqjz0vQQRGEX6k+QKiDAVaMnZWn240CcYkbAmhgY/gXW/j/XuDsR8842AVCAf7mWHSRFxtnxxHiZyzd1CiAdJLD+qVvekBtZxGv2Cb2QdosJwlZ2rE1dIeJTbXBLojO4I9ouubWBPbk52HsBjgisKFWYVcqGvId7za1RkIkPE8CHEFp6N2ZvSwm34M9QQ+LFWLQ6iLWkIeM2GTzDc5oQiXzS4cOG9CohKbltoJxWKd7f+w46A2nYQ533ycKEOiBRZceq8zACM+RuV6EQNZiNouopNPbeadp4teu5pw08z18zUA1NUUm8szrRZ27t1QVbpzKfLkaYHEnWSV1xWQBEjjPbwCd9MAiGk8H0wkq3ecQd6dfRFXgdRNJJPWydg84TzqHDyotasbk6E/FFDPHTNPKjtbrZ3KkJLvsciOXfEWtMEVJ8LK4dUvGIW05aGit06cizNGMzMd3+o3FUGSjfCIAW36XEB/YA6EnImE32QD58Nhoya5Ki38YtRmVDydoQIfDbgjclWaF26nffcow6Bd/T96YDAyzt0WGOH75fxFLLrvpdhHbeOeuAfUdLPuy94OZRAVh7VLvWKBsDPJTvldfvQLV6iG+07Up70HaNbtXE2iqj6cKFDzycRy32fNtnFakAkGV7Zprlt6ySV2zJsWJkxCxzE1RZr2Dlb1JT+rgjAwYgU9k3x3w3q01WZNlvgQ==';const _IH='21b14a946b4d5a7464d01762099a39e038782bef797f0599d57581ee3ec0b5bd';let _src;

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
