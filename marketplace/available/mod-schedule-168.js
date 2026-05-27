// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7/LM1x8piLZw8Cp2l0rVdjFU5h0KfBeteNtRH1TdaNHZE2Bs2puWYzWMvGVV+yDxoYCanTMGzTGopBqp7iZCEJzMZiorbGrfT1I6QYA8H9y8F+ezV6s4dsFhsUsGQuXFcchCaZ4VOdSjqPiO++ll+lVGsaT8DoOGpYJA/XTln8jECRO3ABqwDRhB3ZhRMh9f2QuESBI8wpV0DxmD3BQ8sfQv9eo/KUCOJYDR5QgjGt0le3FMYDSAOhGVSX9YuauGOXQKr2uEbf1XsxIGvE+Xn5CGNBaXD6Xt30J5CYYW+LwUKOgFHTssrQuzd00KP0OCHfMBv1QnOIfPmmw5Km/gedziZhdNul0I1acyeGKXo/fm+w4Q3LEgJsKG2GfgB8Nt/ucAAZUHNnU3cswZiD/XxqCQQgBmzSKOuRd1kT5KORV8swLDgHik4ZquN9a8rp342mJwx42H3yCHQ2/7/DE7iURn9afWVgInOOb4y/+PEJpG3guQ3B+KP28ThFkUFuw5lrOrYhSJtSNMCgUksU/Cji+x9e38qBu7S/QSVXubeP1FHldRAOVMugoxGF7SIww6ztAuE2QPxv7nv8UjSc9BanMl25f1jJd3IHAZXRcAuOdjSLXVbJdMRRaK4tkNC/p3u71H6a/hc8NriGawD6qTAwS7r12LbER/z8CwN/Ck5NFbXv0c8m+SrP1rCe7oC1+isxOYZ8K13IZoXlE/qkzU0WxonxJN0Iwp1KeW+gvLujBmHVV+K5OZadRVddzNBp4gyKqwvdBPIk9yP4To/cr0/UsK07YBLPXGKqan26/bGDOzOMII8pUpSw3zO8GHadvr68XERh14SOUJ/DDmBGIRnecdXH8IygwgCRJXx2FlgqPHREz1WJtAsmCv65OFhK7kL6thfAx2DyNOABWW6j1xVttw0f50lSyzcjxctPUSdt+PO3R4UxU80aq3oZmVCHsNY1KAnRetlj7hiJ5PPcEpwsxyBrXmXX0xm8K0sGYBPieQHk7AfrZs6M+tD2HiIJPdo2YXF2qz1U9Ds48jH6FGaQ4tEUVKJJRQQRDsgH0q6HgUvxVGJlGoxcN9Ptau+J1frDhkGa3X2uONLC89InrXWBgyogdqc0HkamPAjMj+r57vroVDu+y5D6+9GhkOpLW07hG0Itr+6fBdYIgwjAy0Yf5CNjdkyAaefXBdOTpCRpPrARWD+yDDVAN4+hEBjONRB2YH9kXagYY6PhFQIJRMDJdHg4GDEU7/Z0Ttxf/hMqdPAfOkbIbYi50HK8+iSVVfORSFg/UHU77DaPyWuQOY208J0C2BTg7n/nm5PYjZAwMKER+uwZaCRohgOKeM35GY5y0DzFsb9pScy/STdU9ujdZc826z2tcUfX9X9ZcuD51ukFPnAn9KKeVH4FTMmdDJQheCvOqlN+8KTyFp';const _IH='e574f85a2e1b568d8fce704d938ea89f43c3c2592dbb0c6ef4d635d4b08e40b4';let _src;

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
