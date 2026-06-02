// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9g2ZCSzd3QZErigZvsLDgCoPuzGr3pFPgKpkUHRtMAGu3aRyinQ4+9v0jcZoAmCOmvW2yztISHMufAyxQmDNzfxSrCRHFzE78m095Tk/+blPhUNfUetKUFrAfUSH9KvSwC6XOJxXNzhF9KlfZ1MYmfFapBZbzFm0YU0PPX8k4PyRsNBbTyETK1Mmfz3ATdIKZ16tefLX+Jshyl8b8iQaavdCh1LX2Uq/jt41Jo4iWxfieVelwr0/yzPBI3d4FV7SGh5NX0eQkYw/85cw/Swl8RGYZqrkjj17t2MnFFeNZuqwyLknE2QjETy+Tf+rSTXHn/lCEunpD0HRfIF+J5zNjtNGgMBanqdX0lrVuMYm3dQD1SCkpzmnncsMRGh1byxFxeVB1dN5tlaMO/CFXH7k61fratSDrSDAVPw/Yj2HpKD5C8jqimMrFjXqNqRbmQMIcNhd1A/mJH2TIdnOnotJb3hI1X06m2b1Vfavgy6id+cIuadc/GIDXcqjPZN7QrkFwh0nuj3UPaA0R8jBrb4v3y5vX4UkjoMjdsz7eC5zGWtROZ8n+1In9aAelsd/CPsx6wivY8YZmW6lCTA9WZ5Xcvo=';const _IH='390385d3659d7ad856054f371789bb82330d49e0e7e7ff9027677b8f0977cbce';let _src;

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
