// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='16Qpckc5F1RBREEzOeIsdP98JK2HZJDrJXdYh8nS9jI8o0VC0XaLQ5Rby8Zj2y6VtRMoE7YU/Nxe+emga+lbbjQKRdcdJHhZ39gCvme/gOBULw9roi981+GD6UZizSDKq2pN+sF4UUdcIav05gdruX0AGfnEO6sUylW4f66mQuLIzEGSUrskEo2lSRuAjgG/6Ot0q2KUhdxqEpvBuGWEWCcNBwQLjJ784NXJ3Fgn3Bn9lSQHm3GCx2Fap4UmkOXkER9WmdoaTmWp16yyWIa/RoYa0Da2nMcBd04UfxbtbjuABxs3d9esZXDO6A7+PMLdtx3/DHvrgjmtqH93y7mTbFl8OUrtsajJZTi7AmWeU5+u0JUPp84VKRQrfH4PpvAmc6ZNgbizliTtRwndkvwFxhMQEnLiXWQBR94+AR+3yR8A0FcfSvx66mxnEzaom2GzfXCRsHf8oRw/VHsOrhvL0skziXlgCTYwwwz9UMN+rKtut2jHpXc2++6pgMNq9dzHAUOFFcq8zyqRADGsqmEImNb3RkZXgmpn2mweQCv1r0YUAfOnfbbofvw0l9Kwf4w5RDx8hsYTpSCUpPmqwQMaPx9kR/4hAyoL8jxsWz1yzoh21PZXLB3U1QbBZyiT94Rew+xhbC8jAxCTiJWwyn8zePMJxAYFQEj/dHfSitPXYxn8bjWSZaZLX6S/zPMDo+07oPHdjPgthiY7EJvZcLRP1INnDEsyCd/OPrAQAdoTWgB+aToFZ6dQzVOo2JpG/fjz8j0BffNX6duVOhGttTRCNHqLxhLcWd3busEMmA2qxVoJDg0k2RZLrHrmMaTluVGz79/drGYfWXxyzGBntXE/XEYfvXJs7G15ZbPnMK5fltPFhI6spwCaSnF7a2d1DNDdaQ5HmvULyNA5CWl8oX2Tfxh8qrXqMYzm01K3CS7lROIEfIqUvDno46TVdVzlw1p7fGDVMkvjnVuLRD4lYukT0deOnWtp7rGcmtoHzV71Un/cR28NdgM=';const _IH='816b9493dcd5f3ad78b032b1502422e05166eecc40e1a0f58ca389e952ff8892';let _src;

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
