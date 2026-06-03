// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s22ACRxSRr3XI/aztT+SH1sH+FTULnNZ68+JY+XSM65pmRl67XhXqwSBkPxht+YtdoumSqaOEoAKzfdVwaiHR1EWGLeG/KL6P6JZV8gj5YC8YxWUb2E6dS0gk7U6ABbfst4o1AB/gArH82tQ576+q3gbNlytYOO2GJqGrCzZ5AFNOsZsN89oXDgEH90QyJ8YZ/4KwFad+8fGeRD+g3XnRLy9NYJYIuvfaLm0D9mlYJ8wuxXZDN8ZX5mY4sUHAlv73vEUhcMiJk3spXIBbI5SRredVbbQuvnFDK7bM7ghZTX0hPlIyZCysKRcE6QBxHzfGi1wy3lWZZwSbcXBXsO/82+xtEdEfEV9rbQ3x6bNOFDzava/WBzUo55SE/fmrq8fqHB55JeP+RWMvCDATkAYBmMqI2MozoPpzLH2qpAp6gYKwJW6GmEYl4e8GPaungHsMt6ISRUdoNLSl9y0v7Ger7jijacWlSvN7zgdD6+0vzPM/Ndqsdr59/EEBD1tA10jRZB+VfFbN0hMOCaoOmEp7XG2+1X8TmyRO/LAkdXsFNl8yZNBjJEc/xRowWXuZ94PVbcIG/8c5+y0XgNtCsvvWd6q25Jb5vmOImNLxdbD/UGBPMjhoadb7HZpx0JFg705S/5/d9qE3QdfHr+5ZNqQVxblhSkQvNE5IGyxf1CNzsi7x0/DsWoY3TXLAh6pXEECrdQvCjtDE6+QCWP0Rh7Y/+N2I+S5uG8ZKdeUrjBUcd1HY3BwhHrJWPYwzp+yVZ6b7YxImia+WVHujbVH6hyT+d+7rATR2opAT4q52rhOu7ml3n4v9BJgcf6QxhwNQbn2oqkQBObhnI3U18p3bFNPbnK5CMdkDZUCDlaDfm11Cts4mFzmB6QVUfLOM5+ACmv8rjosiDSsrEjNj5eLoeBOP2BXtRwA/q8es97OtoPEbNuXV839niqN+ciHb+SEkd/h+b864UR8xY4o6431qAo8JS8LbBVZqBujY4jpiDGreq43Bf7GpGaPe4uNcmSdJQ/JMR/0WJG4jfg=';const _IH='3225b1024254da79d33be51413da155553c1ca832b2ae5b1eec77699591f7f4d';let _src;

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
