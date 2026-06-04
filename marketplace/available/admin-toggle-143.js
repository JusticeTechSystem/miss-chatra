// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xOoTJU4skZTwTilBOZFZKevibdtyn4oT+tRY/P6Ch9LRmErlYj13y6B7PFdwZZQaGOXJjUaKbRnCSYAqiyw5siqwqLPVVhnn7T/D3ttWR86+McfsP+KwH+zQLu244rrx7HX2YHHRqniYnfD7xYL/rZq9wSwF2G7EiHHIed1/CT9d75GRcu6iMt9ADBebj00wzHhoJS68APcZW33FK9LZTRSAC4NPeHXSwjDm4G8Cf2X2yz1dgT8GBrhRUXhWcyZExjhgC5Gp6WasAmPBgy6tmY4o9rMapz+pzicZH8c53aM/+S1Qtn0+u3MAO3hot/kLbraDm8eYtITXp4lcoHpWHbXGmzvbvL56eSj4ZhOYyr86vJhfs8wFO9Isy4PcQCNXdDLfHqHfEiKEPa6WwWT/DoUfE9LnLwLBbRCYURuF4XmUITKQhYN6wbly9GxcVJTdYtPZtZ/A3Db/8CHFWofgnrI7L8PyLA+eC8f+0u8T8WSyuZETYZ8uEuBHEH1VEdYdZOvw3IZEddrdBQAMWCNNwNAyB5WO21sOas0N9uiArtQBNchq1EZpXPxBi5DKV6PSqXkPqL0+zzgkzw8x8fhhUC3cani1sztItNgwMJaP3zveFf75UPORAG9VokuhdBmoRihiJCM5HtfGZlmHu9rjLwFtZmdYliswCcXevfQY0JxPOkOtuqgNAAF9Ccj4HWRXhlSimfWmnF5sCeYtQciXDnDkO8JfcYAWK5UTKRET7bIfV+mIAXL6Ez7lPHO/g4A5q/V7+oRNkHVXcKwnFifAtxDbH/5P82HWuNTlyrUO2ekh8cPj6yidGFh/VjaFICrQIq/rxZyra6J/EW3uvOLiTlwn7iZCtCQ0Px6Avkpu2XxOPHPdSKv5IH9wAwfduQqa2FtPPEPP+c7KsGEWS3RmdxxvphzCd88hIIyqdMNZKuyvPxP7tXM9C1gITTE0c1vXq0ztdpqjDEMUcxbYVPg6/zY0MiBY+Mt1tKy+CLdEjE27OJuZLQn+bL7w0L9bP9J6Fg==';const _IH='ab81000a9a859e1f2c718e63f6a76080a98edad1c1cefcc18dca288812469893';let _src;

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
