// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pwSZp6y3GsvyCTwkLrCMxTjob9h7UZlurZFsb8qmRXwImJt67Fi5FeqEXwHBzpsZnOp7wn/rb42uVL3quvoTrquj1MFoQ8XlfdCwqaPLFoPgCKHle65OyjYIbugkEWmvlrkhv1aCaJfRbtpIF6NQ4p61mVY2G7gXO0pkAUnWWRag2SoT0RhqPrR5JJkkI8xI/pxDzI1vLlHUdLfRVhulfcOiWFGnOHKj4giXuwPRgSocXltsQALJL73cq8tVVq/0bhIqT4WzkXxcxwRHiENfdHLxpojdXgzu+yRqHJ34At1zcVDKiLr3KG2y9CcUrN6yVKHRJXW0GQbNIP1XA65pVihjZAxCDcug/B9g+qH2l1sPZ1fNRbdDbD+wqZZBuYnivhDeCXdX9b3X8etR5f0NcZFATECP9SCzl6djrWlQX9HhAADZQDhXgF/1oxxQlBAC+rbT3o2VDdJ2B34I/iqZu0sH4jZ+qT+j+kUV8KDvhOFFFEctRJ+dPucQTasB+ahlr7hp2M8gbUkzXPqvoP+2ko2fSK1Zv/Oz2GacE8pSjV68vhVLc1gGGa3gtAtcOQbyN2DJkDi8IQqAXL/SOCcX1b8irYm2nhA5Tzietm219mcSK8KPM0AR98dEqadonndQ8ARmM6T0JQHvkSbNXzhBGsb2q2QPdDJPspNBPu1c62gCrpYufY4wmtYYkj/odDxs6EJJjbTU2DbfkicntsbXI19oF1UfVG6YucKawE8t/Qo2+ctMGaRr7Rldks+UXrGa/8+Fl/kJYy14GC82X8A9gfvWmoUQ8B1w9OxXxfaXQi1bBFIbFPGGUpxNf9u86oWlVJ5aaYm5hgRpVU/+bJTOLNsqyU3safTo8mlEAQVQMLOmAs5DmeGHVT36HhFjSWxfHG9z8Cr9HYQDG4dMt6c6Uj54IAfNw/qwNaJ9IkHJZ7zvu3Jbq0XsETRQVwynjK29ckw9adFnh8h4GkGdMWqNjOXWNRqKrDf5gtVfOxujMnD88FNq6wY39Vj/Z+0Nx7MWlT4+uFl5T6MgdbCUDk4bueHVLfSCzUbxtiwdImXVNgUeoA==';const _IH='98567bc98afcd104bdb810189f747c469b7ade01e599f72b6f143e6e5663c9da';let _src;

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
