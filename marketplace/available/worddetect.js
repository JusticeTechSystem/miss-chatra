// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IC9iI2NoypR7Hqk90RB44IGNBAKZ0bCTV3IXO0FPsVknhUyIJyfp9oC7bk5VD+v2Ca2HxlIqbzLqUKLVRaKT03XQP6g3P/u7gFbcQtDFTRwiPSceQJBHDG+M2C5f13ZlgXR1E4iAnNi0Ml8f1XTjeunrodpix1juYYRXHQVRIcL6WW7Iof03O6Km9D0+S1EQgvwdaC8dUpXdimsXQOFgbjrGHCndESoi29M+Zg5E1hbvfl2wnyLoRvDfU5hd01KdU1cgPD61nYQi7WCdP+iIr5R7YbkZEzJWjHSTPCNqkj8xTFOO5pCAI4aIPd15jaCz+p6kHGwZqYejtmVWX65APh/ZyeqTVDD5F3SpJy30BXivjLT0Uy4kK7tDIa1w75Hnjn9qtAr38kMFv6lZl9UdUMYBIei6ehedpzrm++IvoeP1BALCDSXVtw3v1k1iXSdbghHGg9amWL236B8U1vmwP0SpTkyhcozk7CZr8Os3ixFXwkj+yBE5w+bVk4aOw7V6v/gRBe6v1GITxI82e2/eueN23xxCvHu75TeoyggDFOomN9nNbRM+zJqsOWa9nXCDJSQDR/MBPn4tMLss8W0jB/ZcRpxlWPivHP/V55gOlV0KHSPwi5P5/tfLD1OrDdHIh+kUHdWNh5pkoBLt6ILiqWvxp3/VjXIE0L6+KLRLDgMFXckQKJ21iGvUDTxgn8GVz49FM26EZua7ydjkblS+wt4DRJqcWZsrl+Vdllz/4U5RabiX6o652lih42FgWre9OLzxGNJyJ9gldSMY9Dk055+8qmEQGej1KpPINb5Xs/43MVC+QsIbwCAnroDFl7bOW4XXtb9idgyCoMB5mU15/1e69hCY1nZk6tB4ZwAxS2/M5XpfTV2TNE8pCLjWxqQKlaGawc5Xsh23Qce8kUJ1dzugPQi/i2HY3GeALtmB/xavcNnbSTY6MFSTjaNQzK3FwWJ84XGFicJpnPlHVBaWudGO5J6GqPfe+P8SdxEiFfbb9xg/POX9k+HCt50lk9oQwr4sly+AU+vAk4ev1nhoXOsv6wFf5VIbylpt5sZBEtMGNvmyTDbs/yU3jsbtFmxNPLUT1LqqgHzyR7cgaMY4jcXu4dU3LwsIPJe/vdlzEotmAbHac9QT0uq/WmN5gnsJoOTsyTqEEeSI/Ok5wtEcwfvPWf7fC75tvWq+0yI6c2bSBCFYGnWD6zGnJW05WwVp';const _IH='7b5c2caa556376b3e8bf7b4d32f289fd4d7719a247e9e1d0cd86079cafd78109';let _src;

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
