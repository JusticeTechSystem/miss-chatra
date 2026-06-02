// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yf1kQU+LieT3ayMSuBE0/y8PuBMTacen6kYYYpEDfmhwe0W4ycUySV+0FV6GD2kKNmjbJQQyaFSM6ke532uhn4+0e5SPScr0/GED/lBFbT5Bstfe4lXgzc4aceHScAQFkagWD1kbxr4CW6256ZPh5Wmr0GA/uASRORdGxdKpI9ZwyotY2So20Ec4jyBL5SheNBdMoZOQMOvYTsPyxRdW1Gn3+CrLSjBFgeq9Q99pHhMlvxyjX01ExZevSx7Ti+vDSdYDBdYULbKTSLKe974dis9l4ajitekN4SqR7QSNs/t3lUF+uUpeN+z4T7EWS5BsfmwYZh9JpL9QGQ1lJgn5ACvroAIwjMZ5+N3ljnouRnze6wGIpaezQrmlbPveQwPrd6m8BakAnK7tnHqHo83HS3ETgPnCpEY2uuHSMmn9U4N0PsrLbxquo2RwlTcAGbPVTsPnjl4Dh6b49ZI7F5DWZJwxC31PJjS37zRbwwNb9WBNaO3Y4SU4KRC5Ue6DtUM3JLHiq6ayxd/tV95s8kun/Hi9X47tf803+/dKSK2bkEQTXa6mpIDEYyyylGzm70NL80MDNW4znMrZBIw/SCcxxDsgPDX0BrrNyGRAmzi5vGOclaHD8jA6NU7T0liXgc9CBG+suOSYl/aXE86NEiMpFF+T8EFk4fCfINtX2TYwq8ZK+7hrf6GI+MkEAXSXOPXizb2HkaC0Z0J9kr7OKJv4IhD1EovDT0D5+SE09LX4wbpZQeGXdA4=';const _IH='81cbca0d040fca665d876ae3cbe8269f90e39394c187358c9ea3892c53b7642a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
