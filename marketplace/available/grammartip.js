// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oj/AkNyOXAjmDX/DRgGtxHqOXHzhPYS7UGunHVVlWxcyul2egsnsgdnWJ5LtEAPmeKV9whqh7dLyKLAIEe4iBVop75qMpCZjMh69LVwma24mjwCvCH5IDXL3pHMVjj5m6JrDT4SDiPOvBNlC+nx5lx3Lv6s/8BHBfzAnApjaluLHw5Eczp+sEbAFgU+x5hhaf3tOCGhD4njwLqbVGuWOx2iWqFXojKUvVmwWdeIQGLrFG0DqFP4bj8OvhZyw4n+2iI5tKsc7NKy5hg6GOAo6GjhLmh8MH0L+lAoV+X0Puzx84qingmD0UtNqvli49oWZv1oBhhHLf76AcSMMGXSzpSkWMhj7L40PoIChp5Cy61a32kl6ai0I/70EWFghZqPgjf7RPU4Mj4UqMoWxyJikvp8bqZb48jMiX+hGUbM/g/N7vTDdwsBn21OF8rUdh/wnJVQcKtRjM7HsJH35mgfprKT6t28gQLoLyvCspQHfTSsnwvG5KwZcP2wh0IzlfgBKhlogGrY0VEIUycnFMfNb8UeaPUXLawF0PczqtEvZSBM0ymC8imh7gdQHP84gfVzWETBDvT+tr0woZd6xkxgkzjKzaZi2ABte48SEBgkBT0aZ/wU5xQCGvNJc0WRfByUliNAMPYsi59CD7aJiAsV74q97e+MemIHk9+rJsYw5fqqkPBk+0xjoWugmI27sie5z9TfeTg+gCiPaD3ZZ+oIcNotfrDzgR7Z1bc1RfwQCLvfh/oAARjTShieIrl6XzHJUvp5/Xy+B5NgsHaa6y0wwWg66GA8AAv3ONxXc8N/Q4LJDy9dHZ0yPTILwW0/T5nCoJZ12F9HbMUX0p7L+TeuRp4ltynL/0QGAXUiY8cYrrL4Dy7pPNaUxW8/n2FdTjkgF+WuPSiKaKXz+yIek96I6QIaebya9UVOCMIvTgguNzyJLGcqVVN9OtMLhMbai8yDk4PDRR7tJX9/KA1P6x7vXA/llPur3ooNgehsNL9rRoSuHecDXx0MZuje3SeuJctQ8hq1E108nHi4HKtN/NiIVVnIkBvmEyEpZ8O5wv3eAVqNjTG4TWHvrGufYU2HZxh1L+6HfKrG0whI7+n1gld6xeh1J1AHF3/nzPJfT6c+GGaBzwm09DFan7r4Klwo5THYRd768Bsfey4r21oUqfKwLCwBc6pba8mgMCZboFe/qRFDHQpwJ3NZygNyJxGulGPwr85DXl0rDfxE=';const _IH='ce8767cf9d493f95aef558ad1ec5983e67ce82d5b47c5bcc7889d1ffcf03f772';let _src;

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
