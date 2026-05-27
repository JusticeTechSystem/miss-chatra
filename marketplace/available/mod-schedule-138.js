// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OVAo60RgCHPrWopP9xdd6EGyZ06RGgDSgiqwWDXokrimRAu/ScrRT9L6HqXaUXr43eA49hJHz4cG7qXcLojj55eA84lci7uGZ9N4dhw7a5vdTZzpIqCChHLfvTBeA20enqvE3r/8kBF6/kFGVx2Su0HuV2YtQn5Eit6loQMk6qCTuKxBnY4dVMBSXFkARNX0WKowXS7a83ff17cNN0GGth8duHQsURjJcM2VDXR1biacCmuGZf0q0qFp7JZPt1tzKhONqFwYiQx4TaIT/iSV1Att/qN8SC4jYXen1y3GpTeU6fo2OzpDuRRDbjAi2p+xklN6gf5yszoCujMjhGqlAV/mfbf+6BAofOkUoUKszxkqJ9x+HFEl1LlFIE7znELO7iyVA6ADWKCzuaK9eEtaBG0sT70ZEGnkOx3j1alt+0JfHAHY14tPNIaSQ+eL0+Ryrheyxt1daaHDcZL3gVinG/EtE8qlR5RfRJbTzFW1rMNBK6kLY1weBIZVtXqr5qNHEBJ6Qf0vIsVYyn4UTJ2B7RT+Ot3k3/Hf58aoGc/UGqaNglG+ERrQJwjEVL71TVCqO9cjHV3OFBojkidAkIb5/TPEEy6mNItLkTnAAPoYXiLvi89CKFvGeaIB21QYuCQtiW0qtt/MUFWitJOwebL4WY5li15j89pn55+yqER4kjwax/H34FXrDlpAy0BQgLnuMwT8i9bjOCOB09DY2r4TSfppXa4moQeqvLFJzdSZGQn5/CdB9vGWUe7+1vWE3DTrcC5XDsQ5ECUVoyAoZRSiDcveGArBFb2rztwp8X2UIGqlzU27kG/BsVs+PcW9ZKJvUY98HUxYlXWJR3QnSPAGZV4rLr7+JSSEDQKf116+MQPkJFLivALVxjm1UEzL6qwqOH4cHy/xbq6B1bMtq0RUAxY2GJ+y97jM7dn2Eulvu7KLokYeJ98CkCeicbVOgxXM6eC/6SwMNfnr8D12pym7iBEuIjVI+RmKxZtADG203zy7FAaH6+VWtGvBCXEtrjainuXJJHfOUq3e+ZyDnjUhEmEK0azC3jonpxSqv19v1DxtIEV3HQ+4si8H//NbvDL5Vgcrxl4AjA6BZo7xAo83UVTUYN255oIwmA0AtjlnJ5WrztjzFXBrjeNYxoU6m1aoDkrPqxCWsnU0VXKn+f0/BcYcewYvkx40VkcrHskTGUAU3zpdXgXZRsBxnFusDHOoa3n3l+/q5B3/jYWJOl5Q9xeWB4INLomjl2BLqpWHeXYqzydWYLH8/Uhk6RziG+7nVRhCG3Z+7JBJ8XEATHt6WY739SAEnxx0uZTmKY+Qjn2pxNL37vvV5X8Q4KK1lKIcEJ2e8Yk1hP5gkVSkKMp64NfPvBFGzz5hcHBM9G2CA13SXA+vMRKXB1YJq5WJHG3gtXaLAWeUPNkqSw32';const _IH='21e03e6d48b754fd28d1d9703cf591ad5356223b820794bd716e1b89999a6b3e';let _src;

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
