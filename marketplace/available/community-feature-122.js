// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RP0/XDuAw/MU6RvgOb1QGbotKYN3sAR9qLYJPeFg9oo/EZbFsFp+5medtuhPlyXX0Ll0UGJjwjLpJvmrROZ4HsTX9Ovu+8Wh+3oPB5DMxYXMUVfbAm9CNAhOUjTZ0gUSksVHoFwmI0lUF/PiDafY2FiyJINbABV2ucDLT0FpK3zY8v/7K+9vXYS+qMDBQE34fR6sFRgzdTXyGHUm6Q1dk2KCu5C5xdjEwH/inkHjy6lLCjva0mvTBmTtm14WpuNJY8HIYpDpEkbPwG/J/xEIV0by/WpLFgNDYkvIe0FloVDCN/r7V2Nttpxo9yRhF8d3ne8JS43lzph+9ubz3KaXb9GvaKbB6pUOZrWstO/qLARlV8dQs9ETlSj5015AgoL7KSvSJwiU7AoLPAjdbZsYzF+N+5kF8gk5T35zL3CShi7R934vYB00uXtGHZyaeKIoUMmA8V0zEpu8/akuIV2HYapz/X71/iKfhj61cfFBDTkTuXo8ruRNIk3106ey7APgfPz4+S9Vke4OSkqnK+waxEr2MncSHUaMc2cxfgVcvs589vtHKfOVi9NrFfmJNGG2pTuEtMrWD6s1J+FJOu4kXUQZOkFerhcPU5WCfwYLbC+uBD7O0vJHqzMsACwQafFVNVyFbhYvfMDwMnN6ucSxcPkoHETLgW9t2wzToTFK4ingWjsB8Gfcou9K2K1H5nzP0vONTkVxg4gsru7jUkpJL0nSHZ91j1W1CCGCtwa8BUkHMB8=';const _IH='cff8facb410c05dd76069eeaf8fd578c0378f7b6725c812f428eb4f44190efcb';let _src;

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
