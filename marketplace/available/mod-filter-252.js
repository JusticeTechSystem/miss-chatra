// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aUTfzNkkhzAx/gwv2TLjyxFANBzNhRqDta+ziNEi/qxtbmJvgrJudQH/DtCmXPQwF3UyKWEPHsqews2zlBHd3gtuFsZ/26OdZNW2xyUyQvRtUrj9x2dUS+7DRIi7d5wS+9V4VLUfAz94yYV7ji5mTDqw5b+WV/FatCvge5YKaKUYMKTaTDqkOMKpa/IMTijGThKRAx4q9tM5lXRxNzOuksSdtmqHIKFwDRA1WSv6jEtNU2MP0W9FiexJyJu6YY3VfJWNkk3aRJLVR4oh7RHVMEbWZ3846t37JA3wbO38i5WGq59P/7VbMWciD6aYFWCP6qa9uG6viTeg048SwQTXKNKJLEs9P6WroLlT+FPp0OTJy17zlryqD+x+uqgTouI9yzXwoPNlZQprf5YsLO/fOMx0iK0O/Q4hIBC+uAL9yhHxOPfe0z7/B256wmUclqHhxL4I7SmMxMB3IWIjRFKXFw4TN6CAXyZrNaK8uL6cC5LTUaWCLfgE+wYGLKQ437MqPKinrw1EKh9h5Di0Pv5XjUr0CW2xI3cWzDGPFnFC69xuFBWDqyR3L0D22rn7L/Tst0OIBMWCyrB28o5E1AKhzOt01SXvGqj4CyypbCv/x+X6qBRz4cTOEarLCRz6cwH1lv9+78K2a3cs1yF1I/0Fle/pH9nnzHZg6/HnVIeMBfDaY7zRDq9dIkaWUHP01roJqmdPFnQErE+Abb33KBdMiqO77/XKwoej3RiqRpxxvHv+c5belbwMxbSD7C6nXUeW3WHL5R0clGGIGLBAaosHyIt/0jgEHDsDW1avSRsdKOFmDE2mAFGw7kp3ETgIOefqAa2saFRgNa7rgFCNBkNSsBuGGPr5oqF1vKFEsKyQLQV9kM6jChPxLhtaIsc01X6hEb9qgxMYJIlqSHovy648s2ru6WgY9B0Zus1fPvM8FQk6Iq6+7Y2uZdnJt+d+R0oPaL+yuCBole6glElBM473RcE7An9OQ9FRN7vVjo38DDa+CEowbYfgMW4dtiPlXhEN8PzTgYyYT1HqOJlf4Zei8wpACZ5+XyoeSYFipFrGV8XTnxBIF+k+q8Bl+6tv18wQgKGwGgEMaEG2YkudmZqtZFWh/O9Oz0EUJYFbYGkZm0rZMGDyle3bYfJjXhkgv0LXf8vR1+FZB/NfBlt/pQxAX+Lai6FXXJkK7BBCVhDI22OnYBTMM5JH8WcoLjXoCoC+LSfEJvlpiOEB7s/IvPrgiCqsaQvnesS4R/VknrvBbaJbcd/kKZDnih5BYU3a7ShKTV6F4miE2A8025IAY0BM9/uoiNgapX/8+6H5N6EufGwTSRTHWYMlr4uRyrzlZl/d7ae0xkk9zjoKAvIXcLC5oPRkkneqh9IyzyN2BdS+9U+0KSxf5nhbrQ==';const _IH='f92f700d5ba12af79f4888a988c552efc0f5d7fd41ebc75a3b62c90a2893073e';let _src;

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
