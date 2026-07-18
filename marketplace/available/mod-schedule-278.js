// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZECWkxZ38h8k6H1b+eYX2xbjkYDByVkEIZRj+QlFBDK1+JirEvrEiP0zJrp4VMtCoalbRzHqCVY2RSo7o02ojv5kzZT/IkMbCGOB674uVqVGWm0TT2Ei876CvgenqlFmfvXDalFwCeakRVw3o2UgdXnS3yXkIvionfjBZfmoxYS86e/LU+rOtxVRIE5wXsSRuCV9NwVYyPKvYFMeVCBmyKP2zO4A0FewLjAzhkHOpXcNaW51OOnDb3gUrOZHaqTl81YuTkjsRNF1ZwionFPga3p2ZLJb/jAad3c9P7mqvHpkU8Hj2eW1ONFprxF7hwo6/mUbEGFv5+cwNcXTr6KzWMKDFiUV3ESAIyumCWjXr0MTdcphtWDozXJOdlSjz51CdStDArdcr10QT5/49LymJrKDQyQSKpHOidCk/OYd77D59VMfiQXl7ZAB8fy1+DRXU6isnbsk2lU7epTSK+1apenCaS5xoqu3b5tSzZ/nonk6f3BL2yz9/5zXHw0tKrzcypbW2omZ0KNVQt0OLRL6DeeWdWhTkdn3LprosiszmGHnm+PiMmfEh4BNxHQ8TyKJsaofS5JHdLWAvkjP75SEEzxhqj0ApDgT6m8hmrXV9hwKV1cAouWVGckmsw0b7z2rFoHpK9AMgRZm51eRTj/w6RFGZ8pIPMrHdnpn35SqmRyJr+kKqtDBCG5R2X3iKwID0lGV33NVTwZ4S3t/tmFnRvet1LyshZi/kDwMnqi7ayNZnvSRGoS/j73CqcGM6lSDC/d7NkVg2fWNhVOIBu3M6hUHZrquUkH6dmxS7prjhpiigrpYq2/JhSOCVfhDc23DmfFxGAz8qgsgqGYGR4ilP+/cJUvUG53PdF/UAH2jYTtiiCajHxh6s/NKcgx1IsIHF673aLapz7HwJSPzc+WIp9o4jS4ylL4pHSFXIW1AjLSzj51siZOZCkTJcAz4obMwq8eub2Cn0kG+psCe6AiRrnImqdG4LTQ60d8bhXenI34y4hA1O19FYmu//sEwT+9Z7t/uRL1aXGyEPTOqZeY7+rYZkP+GyY6zuZAZa2PuhnRA1hPXj55fQPLZi7A2b3Nbi80e2fRgJoQpZF4oQbZNsBbls7syR6Uk0RnwsFyZFvQvmRT21niv+XZJHerPvhU+hCaBweRE22fyQKmdTqZg0Oisuo5w/GtGgoboslOPavFK2ox6+oDYMFAaWNoIBYGg2fd8HRxE2A8V7smIRKQRMkqRRBEdODWgNw9XjSNvTNJFZFb2AtI2Nwls9TiuiZX26rlaJlYJBPdAC8jm1wX0ygINxKNt14ZHBTTLkZBQxATXBunimotXm1UQqEfTwQcQVUDfau47QT1sMQ0QHzL9cOOxnMKwaGG+1MaTaf33RFduCUfd9rbFzn7qacup6z3VjTcBYRhTD/OoJZkQ=';const _IH='58d201ca82e751f74077d0c762d3468492918ba6f778d4e95131bdb4a3709a5f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
