// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gGvd3eLT8jGCbUfYM+KHSMBpDrAK3dkkPxbeMI2z29IJGxH4nJVSVQ61749nA7jyFNSDKZ6pgkTdfnNfjmH9nER66EaBPY9UnUg4WKqjfdgHNAMqWlLIywi6Gz7W7vnjiSrv81t833bStv/BTrxGCproeHItl8FW/VINtw1yasdfl61wW+VBsD3L2WD2w5sR5aWOYTk77bJUfYFcMsXznDrKWF3SC8JsFRlJWe0lGqmWKydvT4NRup4cyu8JsD6c+PjuLHmyQpEV7bLwekJp9oYFF2D8xGn//EolFeB3tk71fyCglBORx9KWZpZoSUaj81OMtz7lYS6FVAertn0Fd9rM5+jz8Qw3TJuDzVLrFbsj6uW4EEViNAUqI/G51tAVoJGsJHKSGPcBJnt0qtYHgkX+TfvSnNFp+HmIQWtrIbvxIZ5W83++DBDHPlHR5b0zK29TEcZezbjblaL9LTlpvHKrbvxmyIB3jb6MfN0oNrBxDBF6TgtUqaJ8wtfQs3iT7e3enqYCJyRuAgY2vyJe+ALmMq1sifPGsNkGQhH03y+63JIxUqI969ss12p9rhd17J3hTGiQniBpaPMi9d4jsqbg2WM6idZTY9/APKC09Sh5+VquPnNCMLMA9dy6zpc1Z4DEhJHc/AKn1t1IDkdD3QbaRYX04Ir8qwcC7ggcEdjkDv4Dfg0X3RYnAi1MZG4AJgIHPBTJOLdmsvFrkCZIjUQUbAgAaZj3sOb7VQXvFXU//4J57qVQxsFCkYJhZdm2LsCKI5/j1hLRjjTEgZ2V2KJVHm7yjFoxrYFs9TCRVtNOAL82Qgw8hLq0sfrpptotWngnZI9a7MAkeF9WJiXn06HLqUdf3DBTxA63vs4CIatqh91VgMF0ag3lirksslYm/1BSHL0ZI0WcKtnVTBJ+27+o4/5PJCJALZADb+1HM5UG2egaoMJyGlMP9BCzsMW28v0g17DieclXSKbZyZXXM7NcqQJCM7jBvFpixgIkAt+oqyMDw7H4gMZgaFj/8e68qzh9CudKqD4A7T+cs93P8WRHEr4ldtQ1ABa6CXb+ZJeaHLQOSNdSLpuuvSm7xGZmj96FlCtGS3fOfSz5LJwtYL/SMUF0O4DRXGxyeWYItww9p4YYypO8GE3vB78JVbEHu/l37D5UFBN7uhK6PAvz+EIJ+L07qxdjqABhkKk1Fz0ionps60Wp62bgwMNA285P906lGdpOziQ=';const _IH='c641d80ec4f6d6b35e603672e67637ba1efba5e02eedb924b6145f9b4f6076ad';let _src;

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
