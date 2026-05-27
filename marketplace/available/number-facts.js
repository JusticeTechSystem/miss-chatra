// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nRJMbQUUzGIp1mC7Z94RX84XQIacAJBR6lMalckIdWyWm0DhfoasdNxhdFQpDY0j27pWTjTU0TFn7NvCV2BNi50FT5B36t2kJ6H4poMHu8rdgN0Pv++630EG10VRggkrdqa5GJQXAQ9jE2R/jrl/vZ/uCRVB8XU1nHo2tMNbrzpaReDfFdwb9ukcHoLiA1FaTvY6DcHo6Oasbksuo9V6ebyXc+VfFM9vEofCoCTkHRETlQ5400dfQmdTElfoaeifMg/vJ8Xt/PQ3wTaNXQ/2dia7Batg0rugzSd1653A4a4hX4ZJe8UBi/rr/cIjPwo7FzQ5/ijLd2EgiwuL4NcMmLS4n2CtHk9FkCRkKJq3F4DDmUgPsvZz0vOCsZoMZmP50hT+2DMzhZ80LHcGCicR2VTrD8m9DcKYDUB9z14Nj2UQ4yt/iRGILAxgO/RnfZKXVAgots0L1DPuaEtRiJEwqRsyJhc0WO49GrmuzPm8eAVCbHJlg9kIaj/O4EIJCUOF3HoVfelRMBRyRMiwlykCCexJ1R2bFMKTw+cUokSBj1aElAvdfz/ZQ0D6ajDZ5ChvEq7XGzs=';const _IH='2b240a4e1fd99ba4d35e82edeb6b391d982e16735ad078ed28cc8043c82fc177';let _src;

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
