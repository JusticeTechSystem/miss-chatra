// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xgC4WEVKrkavzBJYYeoGsLjPJ00GiAQJf6u63NJXpcmKSMlGppOQyJscTGvCS8uT8lXy0yzyj9Ux24jf2CTuPZtDH1dMVzPwwqHuBr7rXuxL77b01ZXPTbIXRD2QJdRdgsLi91KoF7eNpgtRwr8smcvRIrrGWS8TmMF0SEcZF2Irp4i9dzQwmwAWiv5P9xB9pJI4fOv4VJslAJcraymL7Bxlpe0tCF5uVSXQfSJtUGQ7jBStyFZ+v+R+AM87CeDrq/wr4w2DBh3H8nJuymwH87YaKvLVl9mHIARljOcfVw3H00DJTlcTVjrLCsesP0+BN3vCQb0e4O6nP6p15pOrNPXKu3Sm0Qw4AbghFnScbc7SGcqz8MujWk5s7Z8xevp4m68w/yRtIU3Q4Xt4oMGIINzw5b2cWqzFVj6WHN6NUWB/v8GNuvfmqV4jTihlby06WpLmh9MHvr0A4IXJc1n/GV4x1QxIkRXI9C1Ebz+rAD9pzhv3UqwdXtgZNIZvwgRQjakr42Pm6/tX1LwyWiS+rN49Mc2pS6K9cHX5yAqrCJ7/46s1K8VddG/bDTCkhcSn2oKoc5y3GEqZZFaBiP88ctEYtu0hNM7PLv/14sIppxuEH2IQrp6nIG48XSH26Rp2Q0B0XHNWOtu1luN312KRWFhM5cmy4UH101OKwf1bwxsi7H7cxuHVey/ukAzAnJeCIvwKYuAZYzmt0GFF4j0NLjzaGl/yENm6fkir45MGVqkocRcE2SpMV6jR6o+W/X4YbM1r94m0s3AMF1934ftyTA6UBxTxW8Hn2TGdunIOuCxufJO4odl9AeqPOf8N/KGSM7ZfQlPLneEMjg0oncxwtq05L9tZDgTfRNuD2f1cYZuhdfuBUAi/b7TxIdNsM3sQIBHQ73gx5m4AzTdxZyDE0oSOrS2v/RxUyB1kB5sPke9wXYRk5JJIAcdr5QlliNhBqqchezrlzrYqEPX7owk1TB63CsR4ETHcBDAW8Yz+sny0WWTU5ABrPd7wC286IqeOAg==';const _IH='9e74e63c36580e2ee69a8c1aee40b5decff36bf8bbb10535a0df82dffe630d22';let _src;

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
