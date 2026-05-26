// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tvGxRny1MGDn5y0JQF1aFBnhDMfTczqt8lExnKoO0mnOz8nPns1CaKHLarw85/9JDxdm0ptq0rzRMHFI2P8HVpy3w/bQnQML45KozxaqiDpIZ9VdOlulr0R+NrEUMbEJhJ4DWXBolmYNql3Vjr63jFqlY1iON6rWXIdGOKP5sxjBToBYw3qiM7SHSKBhTWcc4B5KmU8v7spcUWWki4+0VFhcSXTz5cmPynUc77lfaAVQU0QmeA87SeOrglkefP4M5JNb/+W5e2ixEpUHpC8Div1mKM/a8315KCxQmZs31nF6+2qgeMoz6kcmw1g5JkxOrOLhaaZUssyWx8ncWW7VtXdbGXaLmI/tjtFVcCNNi7OAvNLEhlq6teJUulxCl4xgGgLM+u/RyUxsw7EBYP2WWRrkwKsSWw83oHsoHysc1FIBExYzvyCAuAtCIzGg5TtW5NYKr81k1BBY6eqakbrJEUuWFzH5VqwsHjFsuEZPx0LfCEUFhwPrpCtuMqRyxmkWppZSDNRxa0T+MlMmJBVCE9W7PW8nh6IT3C5cx4FsjO3mbFxKiyvZ4hBLtxZri/VcAGsALGUajj3+nUpEQlzvOsZJb4kJIGLTucO2NQqyOgcM3pCmB+dCADvQOTia3KzspZzQBFvq4HE4nlPvq87kkezPJa9FKAHceKVrAtnCe99++z64yjuaRoUSbzcJqLh3OUw/5mBSLo8ryectrS3uXaf8TmBuX8z60Laal9OkZBYhGo4gqI96BroPqVc5XBzG+IiWAyuMYCyoHkFztLGIELv8Zd20n9p3ks64evAQVJZojHB5ie19VF8qyEAwqn1sWpXwyccaQbR+h0EvGnvsGnZXDdDMMBORBJKli9KZXQsN/v33QZCa/uB11+QWHVU2nFdhy+MVzf09o3mR4FOkpmdhHLnRn6xU+PIa1+k7Mb4IopOm/gP0xsyt58wPUuYRZEi5l40uz2pKWJub5kJIsLx+86UAv+ZI4ujQ/rGj0HE9XyYEz+xo1abeoZExmTTNy7rnMxfTKlR5EkTjtkQzEVUITNfDzCvdGt8z5SVaA+1eyXKWg4ctgd5pivkawF5MxsGqfpodXgleWPr2BXlCaW35dgPn4mWfviNJXH55xUJ/0bu2M/um5JOUeoXhOlubHeZyBZ+pkrPLIC0k+mjiUMXrnODbyu8b81Z69YcUTEUd/v1R5sJpaUWX7zJxRrI+YQeeveGCMyQVGVbqBYTAKUXDrpysbzJnFPBbNCKNDpqmv5iL0WDVwDEL06RUzXuSpO8qVXZelgRvPHZQQfZEMIu0Uk7P+nHA6y+7rvsCFfeowmUHA53dJDeZAi8rq9PpTEta0AR5ADR+++OIk6ycTJBpU9NSj0szBOV2RO2y';const _IH='4d6cf4eaaf63093636af99dcad0fbf7cd8083ebe34c1c9b5925ffadb562b3364';let _src;

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
