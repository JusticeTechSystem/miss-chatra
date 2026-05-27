// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KAB5rOjlPoOEiRkQuPD8WHpFYoU9LqB8aNZWHhO6lEmwKjbHz3db7+ulksPve0cWEnRZiAwvgfHsEiMQlO/qjLo51y48pF2lFT/kWpK44cktJizKSIy4xPIz8K9Gh7g77P5MBpnaiUFCMb/Co+BKmpJb0O6OwQduReuWPY8CUmsIDCNCxnIKuvC8BeqO+J+j6DohicXC8+LIww7s9KU+EKaPc2lPW5CZHCJBhYYq8sdDsIyPU41+bL8+aB7P0y89CKz3ZIpAtO/v2rDX2WQ/SdhK75uXM5eoKVz2JTsvuZ/V0dRG32ZwYcLtCxEj1t2gp+Xi6b4spSmmf0gIjISrpFPm6OProddf4g9d07vSGJs0mn/FzFmI1lox1moxiKpQlJyFH65qXfYe9M3oackZFXH7WJYdkFKcYiJv+UQm39IBbQxL+U3rfLeSFsazoS3DIc/67YogZiO994j2rDSYSSHqQu4iuP+1egZRmxIg9FvXEQaGLONXp+GHso3pW19pCiA50mtTAHSOrI9+r3kUozFTfHHjKIupmkYf+nFWhCw/vzNKzNCmH5WMxScyUA6capwIIyHacmahgSMU4/uzOqpPnWkJRzhoTu4sHFxGZ+G0YouFBOfbb1f64XvE+wNwA0D337yf4svB52W+drsq5YxKNu+gl4wJFWS67q8umjr38DPF978PCJUb041gwIDjtqYDs9BADi9aFI9Dq4Kftw8sdrAEEKbF0YJv3vg389NBjBiaQsV33Y5RdU97j+hzKcUeulp4qBXD2eXPSWPjjb9qizh8zB7vF5+SmoTepBrsw1uf3sA1oeSUAjqqgsfcYyurir8jRz0PW50sWXAmT5aGPQ3KSXoWz3xduIYMPZY7SKeOHimmI+YvCtEkLspVrCVE8PTDk+ETAn+Of2A1AY+z+FJ/Zvpa45kHZy00+z4sN4nL4PRtC/rhVrDRo7gqNNh/EEq4dsvLrdk81xWpt2/uHUJIHbDDi92n14N/nh4nV2dmND9lZx1cGyzDzdeg7hq9wMpN0ayzV/6jy0vXtrymXARPrQ==';const _IH='6510924c909df4161ae02e60b2a917972125b46bccb864073527f759b070ff63';let _src;

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
