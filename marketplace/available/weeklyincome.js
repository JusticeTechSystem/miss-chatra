// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LU10cqTKpMH+G8poXZiPe/gD8jGhuWzA3AgyJYWMtcYylS+ZscqY/EFLmFOP2IU82idEJsHHkkmPsg8n3Bfrjc5ucxS5PHSPMI8THdelZZ468LBiNea3EGA/V9gGQWBxZyzW9RYayj5OY76ohnTjBSDSlsvpXiPv2YUFvfIOCEepVqy5VSqRArMGz4pHCujj1/wxO0z4PF+oQuLQlRcNq3CZ4dePFXac13+keeFwZTrByRgs6A4URQWGzdIgkBgyvUxWZNOWnjgigFxZMRT59XfZ07IYQKRxe4qxvv3Ycg7ZCQeM4Rs3DoclSqqN2T/oYJr7sC6msB+TgcsOepBDADkG+W/lyt2jNYfr/oU+mJwgHQx6nbwnvXLH4uPoyZItSOLpXc7mE8VQsaHGioYPr/Divuq3gQG/q01HHYJmg+eVYOmQg9wOI/osp0U9aXtF6DFqTkHocyEMd4HsGfGbGINkiaXaW0/lIFexExBF+lvY33oupbfew8RAYHE1wmBmt4DK41VX9N5b4uORKLnRVjZyN01YAMaSz0pLfTRm2I3PdPYxW8PmX05jQ6mOA3mHtLu+B5mvs8dhf+vyHKSwiKAxZDaIaU7oUCaVBoox4WOFEUYCAadRtIkdqO+5OJ9sUfK6+PnPFBkrINNHeesiraaSSJ0h9bvI82/ew/4e+caHvomMaWJNESb/jChYX4vMJAJofEZcpATx0qL0Uuzsl8011+sxE5CimD6DYTEr9ScaaayIvU+KYjs32SVJB6JpLBvWjlhEF0YYzvNwCO9R2JmeRXUpaM2EukVJypHTxrN1scCmqc93afNdy80pdV83RryNtt+c15njcolwCC3Qx4XcjPJaRTQrY3DPfHZZwKjWRSeECkBnyu6w45WpEAQWGaFZ9k/dIP0GR00RxYez9amJZMSsX1Rs/5sV07Ikw7xO12Q5pfMDvNzuB2wvfwA0uEN7I/ba0nWp/sDvaSbuWPAPzuysIm2WUMPj45KsZX7nwJozmovfZi6oPKifDJRX7e82at8X6YvpAuZMirFyeNFG0sj3q+MrV4734GYHcF8aZ9Rw5sxwvrIqtnQpPocbbUXHKNDySxUWWVf+RZpxD0+I1Vakf90Xf0dPGPgWDHwyZM3bm0F/2cJDkvcl0IlVd2kWFUxULCs2nJL/AtKz9E+mpWVXBUMrZOPHv1YFUobI1Tf0OxaG5iLku9H2FLNu8oNSP1OUxmE=';const _IH='e7e1552a9d74e7e1f8048a24b1e020318426f3e983dcbba6aa815071599e8de0';let _src;

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
