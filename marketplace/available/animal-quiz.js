// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mg8Ql5PG4iDQcOh6J4Q4+EKvUDn/Lr16ejnm4VggEluxZzidgIK3eIFIxFBABsnhVsGcdrog/3CR4geNSjzDXinN2uife5oiSejSgXtZmcIMamP5pPEvohLZrVDIUZ5S/2JdNSPaopzZtnh3bisRUFUCXXXJZ4cT7nrQGwPMDGCg6HwTQK/t0RROuYS9XRM+ns6dLRko97IGBfZumc7h95iQPeBMflZwSlTX3WyQKGHuvNEwicaV4arlKlIGzCgYlK+GNngRmLcMKVUSVFeUZ5XSE5NgcHsNy1HGIOtWz7pH2l0x1oEgFZjZADB9p4JC+zOaNtjGjRQzVE9O4N0dwPdWSQ5WptNDxIkitNNG64KyaEj4Idc/ibqT9oGAzlM5739W8HB5rPJpm+zNGOlqf0SSHhu6GOchQQmB2Uxb/L0goCRap/1L+rxClxTbBV7lqF/uNhwmC1lX8pEQRiGJ0/RQLmijoCfsvFC/iIMvbDfbtjMaFdpcXpMGXRptX9EedMgtXJ0pQ0dPWXL8iUZ3dDn+H9mksrQZB2pJqaJo+aG5DPcQXO+2/zkN2crXW6gCSILNc2xxs8YgPGcZhTkoy0MwxGq9UVi0vGwliXfrTVG3j0DvBT3Z2A8BHGhWeUK6G7P/3tr0D3RBkOLuu3gvjjc64d8nXsTwedV9GXdjobdzEAkTYdGIiT3rcinuMLVlcO4OETEzjeMLSAPewe95zaOYm58Md7gel68e5ohw7iwyxPgu4axQhdinYwoC/gXS2S60TmL8b6RkQ9pomb+FrhcU78NMjA/C1pSggfmudIlcYSXiDqcUE8sV7s4oAr1eZqAn0wU8Z9YDVAA2UjJLdRiVLN1rv9Fja1OfWwxqbsTzeBZtlviCqvNyvE03wio92TIf2WlLcpGkTMCMJQJWCfPS0yJAMXmBPcl9vOQlowtF5QY6uTh9QRkEMoWGAqKiHg8n3Fio5EBgXgV+EyaehfnbMtxAGnpAU7v6FQ+gPeKWmRKuFN4PDinRUnI7ZdkXOjt9aqDrXINXKA16tM8moAvHv25ug/FFEQZvFbszpiaHbWU/iBGZi5P/Zcj6aB7mNojd6gfIDoHSZQ9bZ43dNfcRLI1yLX5du898NFvwc9i9gvKscaFbgL04CxDX9dbcZ0jlfIYVuoG4ns0PVV2/OXi/qogbT3//JPnnt0znSMcwN00fhTKGrcB1PRWK6XSIZgiSJpMyLfZqZC1CvjWbj5/RfTvLTqzslWM6BbrnYtB8mYOveptYj1xJ55FqTTsuasS6lLN6ZWPobiATxfuUIw8DzCN8/GzqRzHvuZJNeTYMr/QzIR/nGnFwMtG8YSYirx7cTQcWK+o70Y6URCdw2SD+FEirUG3sOGoQZF7tv59AV/HXiSnbUmhuu6S+eRMVr3YFx1E2GDPtrQLGu4uQI904JUHbsWLDwmdhn4Bhw3Xm77YeVHY16djFe93JhYbEJYDyklbW3vpD/t9FV6HCVfpgP0KH6QWbykvHV2cHkQ==';const _IH='383b96e8f0145454336316030cf1d0bcf03038d46ab0c2784a9f6ae98f2e881d';let _src;

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
