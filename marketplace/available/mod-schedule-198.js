// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4fqvMnpPhpKbPVByxixjHUPCmt2896I3dkicmHavJG/LW+dsovCYU43WVG8xbaNSzRObmWe3T0FJWz7NPBngZfeTqXGOLifTecSh/nZfxd4QI9cmCQfW4YpzxnIIikrZWtMTiJ97VM2JYzi0WKLwHxr8j+d6bIARYtWCwyliNp+sDWoDtbKhP/WKH3trN6h4aGJqRj9nFlbnj9sFMxDNJyPCDozueQmNtm9topnWs4DMK+KgobkkNITOk4WJLjXLM6+Zl72DjHZkdl1Gb+UafNrAiG36zs+z55ZFDT7g03i819f80k69KKr4Cyd5iyvn2JrFWOwlS2711ojOr22YV9/yy8y0eRy/wXIf2/yU6oK5L5eUTUn+X3mvl0yLtJl7SbHx9A3OeiCEhM2fL63hubZCT7Tt5WmSdmWwVY+YVIs/EM02A55aY9K1golhkunyxjdqbDVm4CSK0IOTdXEgJhbQPZ1iGOwu1IIy/ybBxNJEDqGF7fjKG6gVQizoj9H9B0J+6ke/GLuiO95jDK8iWHqFvajHdBqgu6nD+PQ+zxpseWJMdl81vHv+Y42SGkbTIPeiGvs+XGhM1qrJGOHKf8qr/dk0qCeCJViQ0f1SZITUcJD53gG5kKend0vcLdHTSmK2P+cJVB2VZoIVeEYJXBj8tT3aJj4yAIhh8mAaXtckprjjUG0SDU+P7hOKMuPkrzh4Fy5V2ApT9GuzcFcG5nzx2SDbaruKeGf5vGHD1e3NAwQ20F7Ei20dNYV4f8TEj/mIW7aLNFmrIvX7OkEGWGr8zChFkURaZSucYEHO8lsD66Uhsa3lcbmGisXtwSXTvtZGxbvbMUfdzfoZVFsJH9D8MOkZGQi29AoCbEvQ/3jYJW0RuD9UtfZZ+zyesIlPdc0ncXL/KB39X1QcltHlTH8xieKFxcijYVrWoVD6hsbiWuKW9dHPutrt9qqG+e2OD81BcZpltVG35daHS0Q3Cb+dzFf2yV9U78e8UwRCB4xITL6XVqQ82aMjsX/hvgLzzBxcZz7Ym+aYPiyWZ6Eljy+ebGFqkGiEpOP8Z4+QjwKjWBp9QA1sHeTdp29s2lf7sVU9yqxgfMNOmEePiiy0ex57Tv8LSaqOSwjLkxAhqk0KG0WiolGdWiGrw+xc5vhfkWM/CuvbW/HNQuqwSfTI41AFZJL4ZIVrORZNp4bZDR7pj5HCiIHdRZwMaOqmrkTLexU3CaVUaO7eLibsGBtRKivkgkv+jR5YYn7CC+GPdvoTMAp1VZ595iPPcWjPXxNBANvVl60ZpxCGSXKCL0TEKvDUWpDYA+YPuu/Yo7OyOwFOKaGFvxtlE/+Uc2u3S8JGgvXBv3P0JfucDJs6Re5HFtq8Z9QlrNo+tyVwgVtq6PK6V4XcJDO5a1gi61fM26fQZGUvNpJaalYKktB4w==';const _IH='18dfec194f3846ad4f1cc59db8348ff82b85e24f1f7dcc865052e9bdbae95d0b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
