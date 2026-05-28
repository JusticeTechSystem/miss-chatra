// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x/8bjsGdKqbRhECOmgKN5raFXVtWaUHc6bwRL/n3H37vhOqpYIsrgzHK4g5Kzoxgey62GhR1K8gMXWr3IzsVan+/6YH77vqJi4YIH51zK4tdJ/YVgwTueWhqkiteoipEdCZcSPpTRCfGruiahtNVo1DSuhWsB68F0OsU42KuvSo/cvpveRjqEn2TUE5iEJhkFArMYTy1H7yk9bFRvA6oLTq+kwghslWfGVzhUSIMd/FudQylsx+F6Gv+fdfnZQ2ojslGLBKwuO/cFuREdk2D3qDDoQ6CV55Wv1+0dOa+jtY2by9gjHGvU3d3g2KZIVNwjQ+XVUeNJJET5RwHwu71Ctj05OILtvIUlba3paRD0V4e1QNcKeFH728RqHVVTuL8PhZzsQrTgHTX5ug45Icx8wpDAP4akwj6IrgTHk+2sHUtAicR3+qFpIs6vVzrlJvlf0nbWFmCtRNqvw3/FTewJ9f0HnZoF5V5nWgNMhH+lQONwiEFsYMrqsNiXlyqDRMpJPnsA+lxbblC0LXKMKoS9iqy7MKYwGR2ZJE04acNyrKPFd1PYpMdj4vHZx9fb9MUSAk47aC3K4dDiSK7wvb/N9U9ShcOiOh/dLQ6slAZBgK4wKv+W/h02Xaez60gnO2uiTd/+a+GLHOOOBSWUv4hqok37Sxy/u8rkJIw4+JdJ+2syKdjwFQacNdE80pOOuR7/5//CFWByynfWCl3CUDB8Siw4SU=';const _IH='dbb2a8d882b317ea129f7f1ceb2166dda9b7bbf7b91d8f53e1989e50727c5b3e';let _src;

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
