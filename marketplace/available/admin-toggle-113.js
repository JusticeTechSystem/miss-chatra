// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4qVX5c51/LZYwPBj6nMSZvy2JlFOAkUBi4m/YZygefjybVqy6OdSuLQJ+AjLz4v24TsVt7Tg8u8zXug1XboJ3SGdmxJ+Z+pGFKuQ8b9Jz4bipqvmBRVAqsU9q01dHK6rd6tRswNXhXzR+mxPucSqMVmM1UzV4VR/P9RB6xqjpVQ+G8dEmJP7tdsfucFzfmn3fvhHjqTbtcOMmZNnf5YbArwLnfDaD3afGd8LCc+LH3y09UmrOqRbaTqmigdt0/InhrBMQCul4N7Wru1V3HhRFeyl+Y7Xo7ZXCxyd9NBLAaAo3Dc/eR9vNBCDByrwMsoNrO/0IyYy9Hx/LfQB2+0oj7z7oKz2g8wAOgiCJVkPA6BUn0USn0mMf7XxlS/6Cl5bHtm9OYTk+0vcSL6Otoqv2vWVNQMx2eKBhsYo25yTCwMZUbMGZvwpKeEqwvN+XbYmC2Wq+CyeRALwi0L9p/grsqDPzVnVjMI4JoQ2vmvdjvCLGuN6oCxFDjEDNQmbzZT6EyKzZPa2Px+oE1k+wLpFYhFfrVL9S6rzk+NillkaKwa7urd1622Q8kUexEf9lOXkYDTpKPpdZNk9/yhd6Kh+YxXfmv12N8WmPprGewdUedGzXBorRdd+7LgzXB37IgHvu1AEbJufc2QPTXKGsux/0WExbtH/0ME6yTfcgyW6eMJen81Ct4xvZ0TTAFUrIkZ3dxo3blEF+Kz2r/CdH7Sh2PY0B19qf9RppdWGECtuRC20k35dJKEn/1FJ42t9gE+WsFvUGRESp0P+8DbiHVR6YCSW2nx0nR55cGeUjd5xUCWPFrf+UHUo8B2mwa+mHaqQvRFLBBvea7c4kuOTt1yADdFxpjhHDDN1BMu+uBVtQme9i+mfGFgVOS/Vu+eLMCy9jEMy+xu5OPQ6PU/0TgjhDR8SItHgww/O84jJ5bTsOeApk8ybTwUcf9RbuoGPzLpRO+QUkSlAWDw0jtREFqhVIjZLaB3KhaBjuf+hLl+lcgQv4ghESNcdWDwpRUPV9f5iHU=';const _IH='1330e16ea56655e61e07978208a104f9bfc3bf32e960bb4b2d8247171447f315';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
