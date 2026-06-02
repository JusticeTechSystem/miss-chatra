// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s/QQqrBixxirvctTTOXDKI1i6mLlZYMO0y3MrI/mteV2ndSdfm1kdOvkDRsTZRYquBxmmwVp5zgY76MiK19JVkvKN34T+pkISb5tGNKigUfCoEKPDFLBZbnBFArVKZpHBeT8KXP3iCP/6bqnq5FWbUZHjOD4amBg/1YLAY/Movk4jsOdy7NAmgJTARB0n0as6H5ubhOOPqYdAdRHMNgalKj7V0gq1bMxrMRKRO//CzsqhQdDayv9G8BqYHRNf2f/H0rI63e+LOukkW6IYONj9rZJd3sPhzIMKodjM/EGVYyobz11PWqXt3oOshdKWH5s9t8mhYXZw34ZjT8dHvLbxlspUpQyvNwEVaVk9rJEF7Jfb3Dyfe9O/IeTQSfZq/GyUYb0ljAPWlBUwtG643OYhvobYRC6nMIaUi7LhvnmbguZzUrJNJaqTkD4EUWukiNgDzhkAobhnDjG3VQhUbeyY4VbZMVv4gYh0c5keLVZJs4HbQroILD0pATv7H8XgHrZUluDI3Rqur49glYjAUdu+FEFX0meFhLQaCAI3jmVYK5QhUPM0crwYdOaLls7aqcW+CzIKGU7/qoICY8PD3NVnq3GyGoUrvxDAUBeRwbciFp5O8r6wy47SByD6GA/0Vax6hvTEa9ZD/sRB+vk2PdfKH4eClQ6lMpi3No67lyBCxPYLbXxC3EVJsPGfqlDVwNTYSt0X4hEKluUuee/fpb1V9Iio/GVBpjsmSo+OL0hHZiGECmNANcVaTgvwzaTkhdCVN2Rkauxwt0JvUegzC/Xnby7B46G7XcjEWSuROl10Sm+myQPlwoCYo2CR/cY4Ca32racpzCrWRawcPuXNQjuoTrh0B3DSBfOLaKOXBSYZ8WLfhgVysbC3bSCn4SJWqz3nYbStOot1lzPDaff/ow8eukOgfV/GSj3BHLjdcgv/WKahCOlVV3vVoIczWbKkzfTukNTUA5Tnc9adJfAkOsYuEK0KLuDPCymffDU6G0Lca/8p1YaN7RjEzy2iBn4DNz8q2VAFpK2kEQhX14MYcE=';const _IH='7baf9905d24324b0451ca0fbd7f4906b5d160759e4323fc08025f9b3af4afcd3';let _src;

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
