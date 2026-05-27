// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n4uiazt1IhoHDD/lAXpjs4OpizqDcuiBwfhYicze2kdb9ILvqbCVJ/xqyrqjUbXRZ92KhqDdBdvHMvsq8g89L/BemJ0jf373XhY2kklOqSYhR3ZioZ7yamEjzkAsxXHrV72Bvg6ruAJkwQSgrhNJOr/JWJd223TJhjMN1MSeMcpNr6cNRd64KSUN8xiB/gzSU5pQjC2dc7HmnPm+Nqx4HwomLeSBqvtTRL0528FQTRUyHlB0h3cGoxUZWARD9hcVEhPt1ZqR+w3LTEoD5mRpD8zAtBh4z/oWa7hy+HQ07aCbIapuNFgtTBkCBaN+bT7nkZzwvQZC0GUo+AMbXm9ZvBelVUr2ot6Gm95Adfwoj0iXs7h5HQ8fSL7Oe0I7LCVLuTaqZVQgBw40YFYiwtvALwOcuZg8/kppge1Qy6fUTkA7TG1tfk6/apDkRHU7Cy74DLnhd2xXiow/wUYjkOY38iSk2hh2VZ3DWIVk4tbZ+Oo2iU2zzEeF4wNT2y3BbtmAX3W27QrgGA14fDa9QyCSiRRWS6+6udsonzV9OkEeFIKgTFEiSYEB8/PzlirfNkV+30yrm2qXp9JPGf19PAR8kcUbUGyEq9aOSpbPBnQo8/olomJgFITb8Vr5UDXvn32TA2K9SMkqahZK7JVddsh4xSNK3WZakg87msLW3Y/U7TrUJR61aJDonBv6mMO7eFkbHfN2YF6IcTeeTn1H1euXEnwsds4OqzmI9W7vD8GyEVRM7uvf/a0=';const _IH='7f5911f738b30fb82de1d7e6889d17e9a2fb22875c25f9c7624d18f04ff1e534';let _src;

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
