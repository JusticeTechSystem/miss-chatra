// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgSBrVBy+wM8PdFCJC+DD+qhk7azKbizUzC9El1G3ZnD2XgX6Bc87dzyWyyf9R+YYVlO3ciZzWoTSXLiB2VNiZiChaIeAhVdhBhiesNTeW8MRLiaK7NIHHn3OT0CEgFm7WansYfaDeWEFm0//Yt5RkBFHRHvVymkXuCuty76pFhG72ayt5GSO30Y1d3WVshuWC9zRJIZdvYjgje53MvL0xz67nUJo+fbj0vbERBtVcMZxZdIpNUasbJAD+X9CBqKnMtG1u5NvmHl/P25zPc02FRjnhxbOZhw/iVZ3gAc+W4owYHZmM6tHfA9mxWI5BcHN8WT6X20db0BoMsHek37fuBE6dwY/mMiUBEyphsjR13u0JTuIWjAz5qRDjRPD+UaAjoa6ezqAewO+Xb0CrLU/dpd73Fn0qvVoqE87JXDFk2CZRP9Fl+PkTrBKeqGC4GKMHcj0Tm9RS//ifCn7Lw18RLCEZiS87sdcTPU8hXvW3bNGkCas0WsYmoTOstRuOLLxBAQE9wJGLGKc6OAVibjrcpGN4QGrVyL/J9tr/W391IQjI4h5tsKC8m4Gi73cYMOMOoTViS6o2dbqisPedDRQ9pQJGCecbIoqiRvtI2BUcs4VeBMMYDkO8eRnMDfvd5N8b3xmKdwk9VW39OOwwKcGg3EfOWZzfvwGbJRRnGMe7DbkN8tBShGudYt9vKy7UL5rp28uHpPGLofpHzwpE9w4vOHE22OgFi6xcoLlfjYmGQ0gc2e3PQTnFpGBbC2njXNlfvo1F7iZahItpH7KMNvj66s8N+zlHtg5QgLkf5QV9XORkDw0NVxdcsObWtlmNv8Dgw9hAvRnP5pIBeLyLjwH6ggxVGZVfe6Fnj5So4IEO/cNYdvX2rUutaMgsGO0TbG5UEs5J3w0meGpni3sdk3q4NEHLBbtGUNILf2MP/XwBFA/qx1MqgtqNW9RUiXaUe05ycEzPKP9ypC2/4gBAQhpfeJRmH2iw0K+09iHndmmpAGTJ4GdK++jNPvhHEnPsc0uB4fRH7uxtFe55A1fuDpkYoMoR7kMOisMA/2097UJdM4WC6GBNXVlsDCQc+eLrlIKoImzbUmakSHm/O0UwNhtR0Ed96esM8SMXZydL/BztFeFVSJNZT3qsjJOvHJGIUyKz6/tdHuN1rA0WEwm9R+CkMBMy4EYYF1sRRHBzmbH9xZOJo2jd5eoADrFoB7Ww+VM=';const _IH='c361ed15845d10bd3bf75e9b676340002c42334196278c936729d797732cc69d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
