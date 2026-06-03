// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3adUUXydNoGGjxcE0BGEB/9YLfkG/2coQn5TPa8LYD8aoq+MsAGE1AE547rOokJGMyCnWOXzNyVk/UttvyS4nqh60ilBoOws38+hdCi2RHS8NwNmhAsTypRrygTwOqnWS3jcMMJq1H3goQIbPOsyrEZshaOIfVaT8/wWjLBYQBrkuDocAUmVgEUabfpXzumEMIxqc+/IBzD79MLxPOP5A2jqCsXdegrl8jsUFZzW58e9426m+H+K0ZYa+klykKhQK9FxwpVQ4/9q/8UyCpIaBXwM9JnH7h9khKSTs8OMvM/syr+lzzSB4M4cpUzzQZr8LC9iQvF1PMDo5iKGHoBylHDKi3bfoSwIzgGaTi7G2YZwoBFxgRhsFqBNphbC2P+0/I4AHCDVA0mPchHtjfNuF+wAxPtuNoq0hJMEYEXMFmlB2C6yYKXDKRbjynh+B1I+NOd8yq3GfuOpzMUD7U5D74gHwTm7fhqRDFP9YsAZzQEONr/wLe8jLlXm1R+tjShNNMgv1uU0FyMLdQR44gZgZpVznoX0LgJRU+bs9OhzzJUfwe65wT5oPGGVELF65Xvy9FsDoYbNcBs9vZm4EH/3W7+i0T6y6nBtwN1q+VVICQS0AGXQinT2Ph9pS3DbFXrWLTiZJTzYDC/b7SRYDaiqxFdxsz9GRpf/vvm4vNUk1Pg7RJvqygkuyyhU5GrGWvLX9vnwVZVFy9hJctwijUoLcIrtUjzX9Gxo2OuEf0j6VlD116JkJE89yKxBS0T3/uK0m6TalacvHk19eAQY76Me6dq8UVPiTkHe5mYi6rzj4R91mPV676t5F6PjCCRrVdLeN5YAUUk+LOi5X5Zl+IKAc+yViup280Po93e3jqysQXUXXwnGsYh4OeeiEuyAb+gpmuRyeIq04tOhFrAlOdrQr2sjCT5nWge0yLZpM4wCietZpLxT5iNauO+m5QdhIXJIcOP+svJ0IfCiItCXD0R/nzm2opXkezYE4IVOSiJGdF/hYHp/h1rGAefglRwoAE8yCa8EnwFL6exBdCTqrKxdqiS6PNlFLp2wdThcvJe5SD6TQ0BwKGgedakK4Ll/dxhYMjZ5g9NystwRV+JuzKwWotNLf15VgiRshp1DuazKwCzPxrgzUb8Ixv8Yd6w3Fts41j2T3R+NbXwYxV3tpN3qGSYx4K9gCpzI8rfy4ZHOFa2yafQTNsHG2u6Tw4xfG09YyxcjKZA8Oc79kEbZYl2EmJ1NgVNnRhi8A4SWFQ1wS8xtfqr0jwxGSQ2bRrrXZe+vFjv8U2sJmS+hJr0R6n5O/g5W5xKBnitkrqdg/rAenvtA5ApeITqLglTLyEyYUUb4kzZTN48vc+9c11BoTSj2FkdNHPPsxwFv7A==';const _IH='9cbd40286bdea05b42dafcb422aa7b428b24b82dcacaecab689e4e4e4b60a2ba';let _src;

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
