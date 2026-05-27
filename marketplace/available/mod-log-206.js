// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HPxyTYRoEKfUiJCD5fucuZHdhoajrLfu58bqhElMK8aseS9J5nI4E+dq/8B8s8t7XMEPKjH9cwpSNzprPTENgevFhErhXx4T457TYROQMBXVgdKqSODNlJ/JPlPWvcdAJaSQ2shPrmnSkzz98EYyo8N8kZoDWNgdq2oDU2fgY06Mk5/VpJTY0texoWWOVLNg9J8ECMr3J/LtrJ3mzojepSvMSHDmZIDjyAmfSUcUWY1i7D2bAUvManhMVWAtAfPepSd//M5r+nj5yICGhFAJ8OJUWht7hEruGjhZibLqxJO1ODJGqGqokc4xBOGDMUUzDsHX7tYND2RNHtgV4KlIEpAJ37qNCNyi/MICfsl4xlvOyULygMgOE+HTMWFbtBNZIbIby+ZvH7GEuMO/kGkElz3dSHW/yu/RO1pm7/tzSzVU2WkEfW5CpkrxV6vJfQKT4OZOmzIGn9Ye4nPFrjmib+7N98ryq9kDdB5EonX2Taez9swOjD4KlT5MnvD9ZYXX7DWmC6Uwp/rYV98pjU8t6OKZM0nDNfagX/NkG7sU5U+/R/egui+WME7bZmWYoUf0Rauie5XuNQ91ZRYOsiL4PvrDJpUwoPRuz/5fazFozW0lkKshDNhKQ/83pgh5yP5XCZ7Jdit0ilmJqmsVghftUeF84PbE6qZGyVAwPkCem1F++IafYmr5hV9o/oT7lFIZ/eVPZRsgCXgpoQ55DgEw5R5qKreb5C0ng23ALhSbdaXd96xnhr0OE4Crn+/s9oCKOhhoRH4pJ6Dox4M7pgpJ3OeK3nWZrr4BARSDTB4N1V9pptMZfPuOZqZv1oQpF9YzFi5UhFfMDtN33Y8mrQTnOI9Z2kZ3oKxDK4eNkG+8NAIChItOHCAHGJiFlhHfZM4uOaJzIbJJEMMU3EwTLhWRhvJEPfaWKBcunCgNBY9sAdPaG9WKXhJpk8U2HM9EXrCcEi5GY0fGUuHU1yM9g9IbUCL7Aix0n1Jdsc2ylTalejyK1/0Mm3gVzRUvRtQiG1Go4+ALNav+cOuDbvGtC3o4OzvmH1r3h8M9+7R0+xIzhWHFXcppXYuS1QrgXdxVdPDIc4WflYJDuqAGPFOU0Jwc86d5tsSn6uj7AUbxkvXNAoJ65J8jeUUx5U1ZeCGTCY0jV11muy3GsAUxq4zAJdmVeC750Faz42mxAjVCwER0BsuNHRRdLVNrotnhYkHm8M92iSs+gP2Ibro4ooxmQMqqo1UsjDG44IlbWgYKT1fRwsu4r3PQ71ADufxASbAkapgXGrLJmxGbXVFdRLaoG4VA01YmPfkDCKbluPtRocuCUtOyRhc5Pkqlm114FGfOBI/s/QoEiqBnwLjlqw==';const _IH='0e779352e7331d1ceabf3f0fffc058e8a096fc4eb112072450b376f40d494718';let _src;

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
