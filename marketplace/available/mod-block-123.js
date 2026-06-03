// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W0F1qA2x7Ex8DSkoHiyqmDevHb2eDpmpAQ3LQ1kyIzJ3tHsz+ghbK8amyWbx+B4lmfSHkYSXGZsnKssg3brfntpMhB80x17xMVbvq/4WaJuQJCRnbsgYFpZzfk7OeFSwfCr7kAEVX1GHd1nUYj+W99uYZ3BwRK6/l2GI1H6H9qROp/L1q77XFV2tiEYCzQxra7B6yLgKRioiJNhTJjevB0tDwbst2OlQUWynd3TN4KTYnD1bQ8FGl/MrTybjCHrCYzoBRqwn4RaKSNVfJ5iYAAd1I7NLldw9lfq4Sa7Ao3prlVtCx+DapwRNw2KM8tu7FlLq/zUJ5Fjs2F8uDWBqZ1N5HU3zWvCkk45Oi/S6sMM9zZ7RQj6f7ofuE7ElJn+pEvAMQ4u4cWw1TzloSKFtZiXIfuvzKWbbv3JIMitZgU5NEdX9svQbiDEHzxq8wNTPDLkMLmlWjzb7YKB1iZHIdWMdxGMgWODoeI4pwzZ1VkakYU9l64YCJ4E3BqpOetQVaGsBJ1R59QhiUqQw0DYCE7MPmMQBtVSV3A2Y6W+a01QtpBqSpwS26/mT6yFG+SD38gwqVGd/3vRzHpkpVxKfaBYCE8cgyDU7H4CCwbLFMgtyMqPYTMX/WPsy2t37r8nNG3NhNUD9ZlK19wedLwYvix788OnLKiSKNRvBZtceajm75fhU0IKLBxviTXq28aXC92ZqUmYDBPXXp2hdsUFSrOTysbblyIIt7kESBIR7Lxs0F7CKslGYPXoHEvmJ2f0myype8Gln+Olq53O/jOiwA/lRYa0fh74k+FJpGFHh7p/bgEJGo8EPko+20h14tDKabuSncXMvi26pNR/aK94bffCnSLi61d5AA8VnADGl9eNj0ziWNW7C9Y82/fafiZx2ffyyc8b1b1BgHVLYRH0XkC5xOv5mzvKFm0ICXEPB6Wk9fhhuTIHbiF0QlNExQYuUYSrJkYO3gPsVSAVsszVIBEg124civGAbQggc+NozIS1SlPXoiWITB+sg2K5sxBa4LADORHn/15rKAziXHNYBJH6fMKGubyk1Z9XLErPQcuCydRf5bxQLq4c6TU3EYxRaO1RMAah3Epa9jjks7oeVvLvdUWXGpDlRaKqKjT+Z+c4o1UESvqTtdxBPVOEEjlNJLezR5sQunGtb2Q7dqLtuai/41MNLCqyKbzOiCFCajk52xUbqDS4LmEoMENdLNcQ007kFBtgOwWswe2VieheTqQO2d+ovMVETHiNf1ExLD5jExIlvTfIDl4nxz3BtkOk0+EczqP1UiV+blHdZZm7/jY9l+K5IiTMdDFo+PoIsKEojQYzCKpB0p4aS7L3rOsbCWBqF/868ZeBovtq0liU+6yK57QmOwmxBL/ZD9iUs';const _IH='9e4cd33d83b8b61801d15f0f0b86329560e2fbfd17cd5802307335df78474ac5';let _src;

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
