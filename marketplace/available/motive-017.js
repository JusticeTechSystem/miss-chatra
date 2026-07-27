// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9R9IP5gO2aWZiuVe51dlPKF43akRdF9bmvIFPN9/fK+k0hmu1K3dwBDczdU5WhK+aygIDKYTGWejfH/0GYh+c7bNPi41drSVJ5ssM9xKmSIA3Mhme4o4N5oK4ZtDxhUHgIwSG2bz+CMiIVlGp/UtUdXIWvS0/6LKrwsCqTdDYN80pxb9MDUllEwH7Qvq4YGI4dNLpS+B0NI//j3yFt5HrRGXKegXdACFfVfyd0RddGke8RVTV2X3qgN0FpRzSTlUaMTy7Mx0GYbKwg3BLFHf6NEPf6zBA3vR/J1lLNBbV288J6JGVWVlPJhnUmkZMViECl9JM4Fs1jgbqdKJlnWf2OUymXvIfvKZ0rKIUxWUqdUaN5rFRy6UWVlEWQTn7sUAkIoqO8N4imTojZVS0+9/rhzlVFFfnywmR+/JDdJnIL1ySgPR56a9QOu8lAgOT7GKkKqqDrJ64O0KaVLcsLJgjU4VP9TTho758mWYNk6Ul6oP+LjzO+hlyPSRVHyW88Oplp47z/ncZenXq2jRx0Ht4m1lbHOaUxRTnKawrVvLPcgSwFiAvEYeHZpcXJpGM7xYTjywKeeCYPYEY051jSLohlQnIysm9iWAE5xyLGdzGRVTkwj/zZm/hcXyEhvZKx4lJj+rfgo1S9G+0vu1Ng/78VjWY3b/zQ6gXnndC02GSJgbluob5U2tEuXzjIhB2u9PjZMGGIRwG42AVLicZ1+KwX3mTx8/0hOAgh5qSPfNQPILMURdoId9+NiQhzriRGm4VsM5YpfqyEsftBx0VOweTLVxoWh3OnfamTkPlYLMRa8XTFytE8ln5HQ+M21+pamR5X7zrzZO55OL3+i3opIWUF+MZXKWodHUt2O6bAnj1IDgJxstG19Td03KJl33golGqD4eA06duzAqU8mSWczh9LxHpL2NiiXh9i2MqfHu2lVdFKgAedb5TDbpnOMHAxK/zefj5JvmDunz4dwnUCKBecvWtkzkm/bFcVU2X/lk4XXDjodNQJLd/M23Yb7V6vyRPKZSq9IUjj5vJZlx+JtCZzSQ=';const _IH='8375ad94fc956d44e8df09261cfe7fcf0702e8c0dcf287d88c899fdc28a7b9b0';let _src;

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
