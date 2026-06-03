// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jXPX8KUaL4Jzb1ztnDDhRhxzrCDuZxVNF/g6z/oZZ9j4vB4/B1e8Rk/a+LAkphYU3ktknB+eshOxtGZalKcOPcR/fKeNJP07aYbzG8NxDe2VuZpLNM5++LR37qdRLCJK1tJlHxO85VgSw2jCfndyRRZVEDFwgen+xr6yVjyoso9WR6yhxgKDYZWe7KcuHuhDpj5rX9bLCad6hnqyneYngWbue2snmku6ITz10A+bgMPIpJ47oB38FX7mGUPQ9X2Nc1drp0FPaZlug1mpTT2GjFuG4MDx1vgKvp326ee3temAYKV2IL5IOVS3NRkQdSPJlOlzD6yD4RytjVKZniTAQIKhHDjSaKZnBY2H2o/F9vvGSKwpUE1sfwo1TF5vj71AyxlX+umBK4xFg1cH0eZyCkTSwGGuxiOKmK4E2CVtO34ciXXEQet9gh3IXT3URbTeaWnzcAqUEjnZvHu1mVC6ryYmZQWQ7fuS3wX13aQtFtQtoI6ynd0a1L7JTLMWM6SNjkK7ok/G6YDD+jsEcFnmbYwg0OLD24Q7QAsf02GvUfm77rM1oo9oc9kZbTfIjqvb/68VpO8jfyaYuUE/tlh1vTSeYi5v9AF2L4sIlQEFb2Edg0D5bIEOqqHwE5/RCMjLpfqm1pjvoXn1bjt6NM1/HS6gXMpWDC+C5FR1Oxe0ZmnKui2VU/JWIVmOIRbprg2fkiWtzzkPvs1g+xKdVdOnLULREy18q8AEmjv0bNIrhihpwHab/WL9dIuv1+qZW43xAsrDPPchwBoaOekn79GoP53OKbnp+eOSNjY2bSCXqwrGLSuMwDwgrmcsbBjswMj/cEY1cK9Fux/e/K7+6T5LZQ+26RArrhwYWiQYjE9fsoAk3b6U5sR4YRhswQlEt2uwSpYRYvmSw1yf0WIhv9Q100PACD4WRtaTtLb/tcweYarTVpzKLNl52sgzkGK3V/4+FAtL7k8UOf2KL4uKl/QE+9qGUGAqqFzaG9NeYizIq7wse8owPl2xJGcHLpmSZO7PDMpByghfxc2WlzbSzPkXV4m4Nk+0yae5D7MzFJ/W4XewMzAJ9mfM3JEIdc75jHwoRKL/L/0CgNtGZKIoy769hLlVgA9MpD6M3eUwhWu4fFSJCu5OdxLWzpLThJtFhv3D+hGGzuz+Z5rmeaAI66E7UvHypYZGRJX+513RJ3si/hiBzJkqWBAk/WP3IbCHGxf/cOxDYFmAvsCRW+dQDtulGNGZTjHrnF1GIjdGyfJumLY+xx4Scm+mNR+DSnSbPlAt0e9411TMF8huLU6wi16PoA+2s2cpL9O4PsCOazylVah1JY0a6xxiljhPrU6PGBSMay5MQXTv+9d+Te5WnLyxOGAYX72VuQbwqNbrGTnpSfsA4b9ugqhn3mL2dDg2j42wNYDilhiFctJ0ppre09ILTDRXEtqASBvNkfAR3hQ4U14mrFL4LZ2jare1dRlU6l0/Jfn5IKrExYaGYIN7lXjQsq/0EuSZuOVMyN/gAxHkwHDABXlkl3h4ZvKtma1dGAokh/2sY3zSCxABJeNL5RONacx3k20Yzw==';const _IH='67baf0fe808efe2eb7505aeb7b8b4cc068d505b68644f65e18502b4a04660de1';let _src;

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
