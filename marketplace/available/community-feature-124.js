// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k/LgTYjqy5+MkZfEXzDTd0DOa9jOg7au/izbJq0vI0BQo0/glBRPT9cRb3OMNRAlrhyqrp7YeqDIHganRfUQxWy7borL7BVWj0dZLi9W7RkE4sWrjYpLftVqKqDukoe6k2+1pGvQRcJ+WLuL69Afp1wWgnf7US62yoZrGDRSoowj4v1byu5bwNFipSsBhYT1tnjmeFP87FwcQZ8jYdnA3834o1bLhmUGzSBODN2wwuvQ/qdt545ofFYaPbCzXAR86JF+TMUTMLPBgDVtjiRCeRpAwvGuMNaCkJb+FEUIAoiOUBXoOzCe1ISq++g4slk3kaHH2+5eHO+D9AMKdD2+OpVoGzdfTPguu1XK4W6aeWoJhC2ADYx4yPJOAaCXBrjcijkyedJ4SLxCt5M6qqi2c8gktoOG5qYY//FpwKw6BDSURKxmLCBUxeXAl4kRcjCrZvfUW/EFetnjefRpuxTyfiCWT56NJSeNR1KKl4VlbdIed2W1TONi0FZEnGv5XAryuR0r3E9DvhE56dTKkGeXzX3aBMh30Db1aGH8BpSGdf+PC/IPPjpGjy+hSC+mF/Ry2Bw7uof22sBd2xH9FCe0M5Gn/yNVxGzf34mXaCyqM96d+GbncD/v5RNU0XJOpqTE2thc7VMv4O6Sw3Azcn7e1yXH4c+azdddtyTYq2HhH6MdiTNOtvO3yB00DnaVM3KdX/pSLIMP5+UcBUDrz57bxauY/50Qbq3kH24GyE/iR1UpBr6eieQ=';const _IH='9cf6a586d509232e9c522c0a5737a57c50564626bef471144ddec2245d2f0d8e';let _src;

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
