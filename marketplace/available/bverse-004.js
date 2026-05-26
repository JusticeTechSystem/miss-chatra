// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n9edMmDouPELOEPyH1rdNEe0jJqVElfgxHs/8SzUNhjFd1As0MM3P0OVcdr9DAR+jOUorLYeyCIaGaHcUzCplV0Mhfm/Yu3Z5zQlOv0suPhHWb1yhOiFyIKsYC6V0oXtZdc1c+4uS6wtJ+CvBWA1ZV4ZT4B4THwxAY0d79tNzze01gK353EyD6VmFM1yT5cubWGLciv6OmEXehWYudwcXJeRawuy0uQjkuC7pBVEbD3UcX9roZmiKbdMMKxZP5Am/9PKRIksCdCUD7mqeKXXo8iv/BPdqEQlsCaaxs+uor9EI+fftpkP/pucnhJ1xmXyIgqjogEPmlCj/naEOEy5DcMlh5eQI5+AuRUe7ewsqFWw5689z3kTgE+nGBVnDfIah3uXURTUkGbPrfefbVfIw100mmyM2t4pYQ4MvKVKyaLt5iYe0XgqBZOHyLpN7akmLEqicaL9gP+DoU30rxyWqrce5+Y4MdNOmhrrlmXcE5zVQB0lPlyhKYjzdlePb7+z4Wz6/VKp7IAxjyvC+JQ/ZK1wC6G49Te9/7flRBC7b8NyteU45PtjE/CEqmUt64lN0d1o7uJ7FCjb/4he7b+A4Wo+F5CXKRb4YHNEWvql402TJ0sW6oUxO8Wt+W/gqq5Q1sBHW0qDpCf8Mxi9OFCPA83frO7rs4ngOR7xIhUDseQ/Dmti/g==';const _IH='70db0fb2b11ab1498f425b72fbb25a1e4ba53fd0c3d970972d58de66b2ee12dc';let _src;

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
