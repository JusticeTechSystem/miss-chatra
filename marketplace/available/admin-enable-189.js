// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+kSEnW14KDmp8KWxQRYohD8wrYvCpOJHtb/3sw5rpCI3lpbm0iW2BR3CYgqTAdBMc3eSdP5/BiMW0HZ7/+CKLJmhgAjxeoYxkK2tSyhF6FmzL6+RUIWZYbbxhgissVOjV97lB+RVYGZCmAFHeqV4/HWhxahCQW+EQkvXD/tVqdjKfrrCANOmx9UdzqxMKGeMHFTJJZQi3z63dIPya3few/JToAwUafKIxe9XU1dPKVGI2n0Y/Tfj9tMH+EtnxtrLdaQqvXjtlcYZZlXTa+mQD/UoiyQWLpC/qj+XmddyelKpWzkMW96ugR5oqdwEswVmCZwo6s6ewx8K231kzO7kaRflZWJyq9amEak1FB91vwhEYmwgovG6oBt64ofoXIjvD1BUjgNRcyqDdzMbRMwItA6rj/2w25QYFPLCx9lx7tSyX1WT7XR5yp2fdi/VelIyVT3T83cGO9lujfmd+VbZgGUVMzkDyTQfNvkyNhAJbtN1d8/wYzxBA+kmHXwfjJyismV+V8nqiYN/Frbt0m+WT9Jd1TyNC8t+zqct4Zfw8UOTnRKgWu31tNFLZP80bnwoz9X98AYYNVmjD4yMxnbxU4M498qhmXF5UyniHvb0P9hrMI+2+GCDgbj2ywCZsLGWGH1exxvD71gh/8rQUgI6WYOmAP+7Fibrj9u2/JrX3f4xUsWrn50HFS92XV3b7HCxTRGChNKOf3ZB/PCiSLz4mRCZUQumHzCl3PwlajL1a1VFvaJMUnxJoq0uH+YBtkiZZ1BPAp7xUK5TfEBIdSJ+Jwts/m3+rHwSo9oKZ08vL0AQZEweGycLEbiJyCsNl+Ehc8YUkfdVZiuLga9K0hOdYGqwpLxBDR7aCuEPqW+0QeKioDiwVdDi+5E0IxNWoZyOCfXTO8J8VBMWeH/UmCd8/4GBKlVADhC4nNFCxlF1eChjidceQJNpIULu2RZnDgcO9fEmOTTanyQ5BS09MfhZ05XHaoMdT+Ca7noXXmXKFdfyTG/7dIuv0v7bTHGknsKz3w==';const _IH='eb9520b00726fdea113076fc078bcac22560ab8afc9bd44e7acfb739d943a661';let _src;

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
