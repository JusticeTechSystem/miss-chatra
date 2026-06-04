// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TdAXpG/UH//NjBr/gW+fQ02kXlya90/Clmqv0upTqwd7sqtl5izjU81xFOg0vU0droy1mCPMl10b1ThCXW0Ta8hhtmDiLmpM5izwXn5Wekauz4oS44UDY0/t7Mr5tSRI271hrcGR0o1+ctfZw/u7hNpQbkwV9H2RDFRg7oh0peKpwtFq9QIfHpPd9vOfwi+8H2ijGYs0MI2eJ+B3/5T1nyWVZlE4IyLe1PtepKM4vh8srNrv9E5cvHnZLexrkIfylwR4CjnaB+bPZMn+W62HAgD3VvpJoFUPIRHcY9DSXpoQnkm2IzULvfV7yW/NJR3oNoLM7pyfYE5mDTmbax8x7CLUj0pkq2cBWsDwdJR8RH+nZMIU09KascbP/nlpgwFoDJDLKQojPIebsP0hgDbvC0m2sjKaGieNOKv0R/KlXAzCVxb9x2Wg3pD1wy/m04tCw2dNLY+RENxGYF+HpL9jhsL0hZjSh6t1phPdWN4ZlikFSVeB3RC3C48TlQD7Om3j5sY3LgXqCl5IjO/b2tqqp/Bb2lCuuwjGIyFE5d9FGgAV4EJi8wYR5O8bRQ8fWMbgaw4v9z5x56buDxGwEryYeJaHQzxF95J2dGSUyoAi1fd/qcFxIvunDQ9X3eSB3dQYtnnSOYxbMX+kfLa+bmW+IwkkKgu0+kNroyYT2iI2brRNwm6tAQnXuBw0t+YlKlHWPBUloKyQuFfVmXNNhri6sGcSiJcLlJ3UQbOSn372vQypruN+0yE=';const _IH='ed39fa539b82b02a0752a9b432be0af5a4d2bbf9a205d14d612b3adbbfc228fd';let _src;

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
