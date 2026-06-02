// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cgNZlJwID0XIFCKtJQwcI2WmbyFj8uUaONBkWQ2crrPlQy/eGmUgC9hjfFk73okJGk+ebGCESyF5sauGfDmBmOGpfu8ewWyQwe910AzjqDkQZ32xbyTaeqEeg4QkZM7gBAl/UfAjTcfT3XmUdmnTOpMkh7DdlTdoV8JVuyalk/X0CdCm/BcRIjWt94LPBtqlT4k+k6uuZNEBz1rC8JuaEUACLn63r78s3YvZ1NdN+Tz4fDSENOMlMPt4mgsiiDkJy6ArQpyowOnYxm6gw6YmIGgcKQLLs0hTrZTphN2JgqP8/Lbo0xyehwi4Oj3MoNXsYPJEZUbpijBXvu6qmEPLFKul4cCyrmAjuaIaEnx3DboA8qV8egUx9WhPpI8XjDuajcoI9+qj++35KM2zyiqRor98OxKcR8wi/v0D4fDKPnIQdG7E+jPZC3SnXcMF8kE8oQG9zuVJW5V7M5bbYbfkF2KCyTbwXssUCkK8dKaDRcjm+bZBEOOI+1dhwovKDr1bBlnxsKg+EPjCqBGqKWgYGD8c7K05CuWi1rukWHHw4RjNdGQwi5+dpKgspUeiKNKd7OxF/mv+C6vkJ9O6SvxrI0JkguFu9Qx2vd78bF+o2M8jK9cvZfH9nYXEW7HRD+0Cp7cR5QbPqceOxpW7UfYOk5D4oymvYg/scqNOTCu5+2v0FmIb/wejJa0rQlg1QvIiQRUUyRpxVTUkS0PEwxVvLAqXxSXZBgLid6EzK7koIqWAJf8=';const _IH='0b89a7694862857db1c4325106293c118ffa2213c4887085c9a739884de1252e';let _src;

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
