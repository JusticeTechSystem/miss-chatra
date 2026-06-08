// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Km4dFXNUcMmsq/3Bgd44lGZKcFphZZ36fJ31Ci4WvkKV+7mXJAh7//G0JiJvOmp3onvRxm/0TrU1Dw8uQDYcCjtEQE/OKQwChin/nRCJprkz8qDF0do80YLZ1enjhx3TcVMAH+ZwZTBVhqyj4Wo4M39PEKFFBtIi9fQBKd/vhfjAp6xXEQLwXC9NE7/UVGlF8iCIrMqAr6EHxbaZCTXKIl808VEHrNIQLpK8PgJ47qmn0lBJ08jR1/sR2kr0AskwztFnmuJ/xfKF/lrKQU2hdRgILcDx+Ytf9nNsql5XcZ6NZDgfrqWxtl9zsEMxrg6uVD8+cYuwiHsFI5LNW2cFMdOEaXoJ1QNovoNYt0tKYRb5Fqt0H9dk8W3uipZo0+uvwgnv0s5S64sh4ad8tOLxA1ZGJT3C3+PWi+gFP9wPETZIkFI2/LZBn/qtGSZrI/ZbhsVtjppCeAcie7V0VQCTgwNf/sLhmAZSRlnNKhiwwvfPYlXPtznWzHtHFGCtIhNn2fjdlzwBcPZQj8+itEytACq18WUQ2RrO2Q2QMawp9Gydo+8qZ+XlpCIFIm8bjOfdL5HzO/sIJFXdvkFxXa/7o4EllVaiiEXJAxTqpcBrDyA+MqtNPP/qeVhLfrXeCvrSrmNxrsME4/kv5kaU3MzBNXrnmvJ6Han6J0ESC8X279flgwkmzi8xLfFu8EgUCDkAnJdYJa6k4eqx/T53lQMnXZMBiK440Cme34LmfDd4';const _IH='f6e24ce07a32b511047214c7b15b339abc0475a57d0668becc5fff4dc78e097f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
