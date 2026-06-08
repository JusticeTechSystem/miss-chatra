// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4O+oxkOfvNA+wta+fOXoJ+O+FFe7CJBuDYbPw4zwc+NzS1yZP6tsECSegKTGpMMyTQ1rPMgTtedCIMYYE3/YlLC7G/ZcLKXIU9JAY8yybBj+JHyIPYOk8lsnI6lAGowgnwl/HXuhxqVGFv7JNVvQtbarxpBMZtwmriqJ0JrnMWZ62fDNVM1ledWomwNptYUvlEmvMGrOAWBf0f1EskSLw/3e8dww04n41DEuFbmYGKSMaMYQJkezhd/stRSxNS8HYwfAN+U5xSCxPfqc4IP2uwXEusYuHj9InMMLoaz0xtzPpSOw1fuTXu6k7W4wokj2mGTn+quDg8RtiDucuWe2QPCSmX0fcsMZXblvBef23cdvRhNQYsJdEkMazj0bAPfceQmferLUq3vQvZa16ZPlcX7XMBwepEzWMF2m80cCjmBlEQyU0Dt1pSJVU024wt1jsttqEHxP2EQeB6fX38HD79jswLdSKmAcCL1OB2st7BXZzTjA4awEKue/X5VG8VlKu7FgfI8fDIp5b1U5KCaPZ+hl3GfzYGBMxzS0uOXhMVculsebNC6+cNu6bOsX06EMYXs3s9SUTjVHs3BTV6o94Rx0wY3Q3KwIHAFMaD/WHFsPuALa1VHfPOGUSn9qXhwOqKyBuUfdmNZZ/nAUJV+LV0UQiaAXg5qKk6JU0u3d5bNE/1PuI043xgN9EBlhCCzN3Uc+Iw3RWv1CktgYuymgRUNSkCmzmcIHPoPe6CeqUHraAXLA3zejxFedJWSZi8TQF6wLkcv0Zc7cVBLFxHGMKA5/FLKdKtk8FTXf90r9VzlTI0F4QrK8f3HgEyEmyCQtc/C1vfVW4OUdf0OWx7yd9ayvkvaSlTmCQoNQdHzkZgwltODvuNyzuASf40QqMNLeDwE++TDDc1V0HrxS4IVq5/qK8DClC1XkFovVzf+ZySPWHpFj0VNJemokWNf50X8fW4p/RMWPK7k+BRU6W2vFW1Y8hRGhWOiI93SiVKJ8WHUi3LfMSs7JmuiO';const _IH='2454e5eb3441ab502b702e36a0a0798c88162305be1fd13a0f84848b5dc8e117';let _src;

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
