// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hu2RvL/daI0KfatFDFdBg47NM4Dpa24ZX7OBhdHSr/7TmKA2tQidv3GnNDx+4fprfA5FclNhhNEDREhahCkyzFImMfaTVc6Ik5pDlt6eu5uwepvaDvXAoaU9F1jyFIhCZ7vX2bzvvvA043uFO17YkMSslYxRXFu/CWMg8PErbDLn+0dSjUEV9eDER/My6b9bqdqgd4l0hGIrSJi/H44TfMGjaJx0JGyCak+J9Qde8JO8TAjIaaV2jsiyWDK2qPIEZ+7fnVS/Do8NL0CV34oZeQrNnhq6/QNoFl0YsBFiHTOcVpkeVfoWtdnR5yvRB32QqdcwdHRrfR5nJJF/If+lc/oLvYoaAktHhsZGkoOTxAsRKQ+guAs/Y2v2vettxylWeh56JpLPEoeRMiFQHMCWvsXoxX3/oE6kSMzc3TGCD5RjQzScbKbazzWFvwjtsF6ZwAH25RW2+upWaIuZHJKkROdf/kKpHpK/35ZOCPbQE/UEq2Mf0TUct+afAA4Cr1KwT44TZMcnj2eED4SnGYOzmhsUd4IRhlFPIpfiOd5mecmWiUS40UYICE7XQeV/l5lL2XaAKAK0WX1TDTrRFbOYw+Oks1bqBcKdrQ4sy5dsD9PgLnDPvloQZe/WObQdnDTT/vceSHI6yVSDa7PANQp9SB3idVskc0sZyu0ybp893UVgdXUF9xg0GMaCYkLRUQd3cuIm+ZVH7ZV0JFtffS/nxpBXhQpgwb0tlM6Q0EOMzsvEKEe8Gt7UESxUujgcT4/T1sZTKVFnFrwkaZGIEsZVlWACe6VKhspaeEvPA0AjQ3dBalff54c4bvTJQzp/ieqPwf/w6uB27/LOaTNoXMzPILTDoXGoYo8Ui68A+Vmyw613n6f7cK3qWjyJijSeOg+X/taSyEIM3yXctxhXPCMdGbY2rAx421QWuZM0ASd5e8bN5Jslr4DGBc0ltYyWHGTuuqbllaYjrRT+e04nvniC4PgRCmnJh2Tn95k2RYZUtAZBVMdQQwGz3yNc+iXl5BioJnaZ52Xgyab8NulwWyy4Fm6XfqxL3zEi+kzjYFEu';const _IH='7369d2082c5d5ecc9161efda4ae4c133734ec264327ac9640bfb5a104709fddb';let _src;

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
