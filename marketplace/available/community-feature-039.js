// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/lumBi7at40cl12ez1KeC2Itv7wTJspB/HMOMQ9UTz6qaXZAsVM0JY6cUc1Pzo8gii9eADrZOlYeRZSDbBP0qAHFUIzhY+6XwaYqyGqF7b6IPyJSZSFASbScyU45EhI+pukC1G4+C185yT4ySsHMHEW8n2sJMj0XirNIa+yfSkt91ulZLGYOXeQy6xTFIvbQADUqXnwoq4tJ3m/7G9MwS106phUVzahM2GYXaTWEwQsP88xLgaVPt8ldThsYAJREHxrXO3clr141/E9lmfOjjcRSmz78/m6/z/RIEqFH1o5ifZdyyVOFZxFozoywM9vPSroloGxCLawAhPEEUzVtz5u3w+PNRj6zWZIeAWv/W0x75KAmgAKPnH42sdGmD8QmyDozU56UlIGfEtr7JJZw6LJMd+jfhgoV2DV48arw0bQvUWeR4nT4d5KkdT1qlODJWQMGtp1YHuM+fe+VKC34OMdtL4v9mywh4yjPS5yMGkjxqFY4w+lgeVkArIlYlx0pdfskyDYZPNNuqzXZ3gBeGy4rbcn2aGkrjvOznFOyfMTxACTukJ9LPv4IIsytRXZ4vtT6ZujBxtRtq4GjWn0e+qUnjM9pu28YOhkrJfIT2QK2R3NgsNOV0i9zp3OVPp/ZT6e8Ahg36MBm0I2Q/qYul79Q06Foe4Fx+QsXXa2Yn3l4Ki9wpIT7gXuZhDKc57h0Ne9VjN2FxHwQxEOTL8GXQl6nHwJO0hO2Y1IaS9LkMXfxj';const _IH='2d46d492d056a0cc48a652036da6496f36cf9623347afbaa3d1826c728770b5c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
