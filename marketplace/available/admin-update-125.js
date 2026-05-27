// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FgrrCQaUE95iiyna7rVWtWuI/e8a/ogFFS/nEueKCIeWWdkze+4qCNyt5WxjLCq8NKyprwaX3QhVZg/3FQP+LJfaeCtM42lBy+hJPQhKmZm4mbAaOxQGFSmpYheIwDFSWN1BBdOFspr1vYVFMn9ORKdlJPPllGHsUaQ0OetYcYzCe9M18oAe3jraR742dud6q2gttuM67+2xzeQK84ex+mOSZgIl2XAMmRQbvusw/v3LvkFjSjN5kRkqa39TZEl4caKcdFVqNwCqdUDc60M0VUBBf4E//zcMCMF4+0mFOTV/wnpTPJyuanF8K1tnee3gbwcwfkGZS1/TNi0m9w7DlENAsl8NYmwmogta9fuqN7/aknoQHb57cdHuAeU+ueHuMfPGJ6/DE6ZOCXgFQUnRgXBA12pw2DC6Xi5REX/wuOCW71pbuLoP1wN2NNMOupDq9Do0VWCxWPMjI77IjWqkTuAesknWTD5aOvKUHOTGOnUZKLsiTGs7mpkSSYbleuSjnXoUkTNKaxmgJHFizj55ZE7EhSA0oYUeFIuXTj23lSYkDGxr8gtfoXS3Nd5Q49XWWvivUzwBiBACgNbAeqP/BG9juN7khjAULxfvFG+Ceu6RAqoK/5MiOLm/gGjZRcFtnDXEYWWTPMP7o2Ij1hEPxPO/2aQrU+d5mxfHsqUbHNqiTVBr/xUdw/N7FDLJQnLMV6jho5dsl0Sa9FwTvFLlfK9p0PwnWOvwlNvbJj4qcvAiCk2BBxnDa4RuDBwcXc2un+GXM8xBl0AdKcola5WdDT1sRM6usmLjP+twTcI1x4JczIKXF0m7kMYNpqKKs3b5IxORl8stLPQnYv0RMaTIsZ6R9GaWULaLcy2qO7UWYciRCR1AtzTY020yixbhkbmEzGBOpNeqsuvMDC6Af6Od0ajF+pwflXzzJmczkiXgYbCyQulVepF65MgoUWd/KFiLbivAuD67vd+9I2SmnHcMuqJXm6eEY3ztu2mYhlNR6cW6mUgIDO7BO3C4ZJ1qh1ek4w==';const _IH='d922198bbdb9c467f6f095a6b2fd309c045a011abcdf475fa2a0865472cab87c';let _src;

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
