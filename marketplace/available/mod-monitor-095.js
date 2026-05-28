// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CdDWdaephNW5hnVBralWWonNTrcyZ7eGowMEQwf/oz86jur2LWTMtVoIDLyJ9ladTINck5Ib7q5bumBIhwX5k+X7/7MuRIryuSnDJXaYD9kVOYOO0ywJvSa0EItMWZVXvAOeVofUmdcu0L5XF6yllC3RQrpXlKwfRU1jMgnQY2f3+UJIdTaroIj2adHO5tzwHnDa2P5Zv0r98BRPaL64yvFe29e1zpOhXFEAAm2/k1IEbt+3tBemJR1xl39JAVXwurAr8wr+ilVRpAUYJVms9SLNy11qFhF3TkRuXvPwKyd889bD/lfIwOUefvciCrQYUEuKhZG3uWmC5ji+xg7qCr4wwsSnNDJAjno+silPv8uG9brPiKTwOGSggPBai8+NZFOVgunF6AT1SpGPx8XPq2iyG01JPuK0gyJv92wIyTGRAdckltfRfrigK3+P+4sp/fdT2D9dCrp1VPD5iHMupxF13PlDyL6rZdM73GLILmL7VlJG4KtwOxTg4dgQEGppxU+vmJS0zzLq1E1sbG5/Su/JMhWQAbDAwBHnqEj1nbkrIeF2kHmAEQ/eOv0rnx4ekeU/a1feKoLTHN7HV6qJYro9qSTRkjEQ2myHNf/I3IIl+2yx1RFpae9vXSOfRBlEhxRE6rBDWaElvyNUvnP78b0X7l5sdKYCZjFBMIZtyPQLylPruXJQb8r98QpPGyxJESm95Smv/0x6ts8hECv4dxH0YJlUj6qJG4R9ICGEFev1rJeMXTnbTIUlENUxomiQnm6fMcfTKfRlYWJtDD9Igg2ONXlb+KNDn0pkrAJo9GloPPZ/waM0c8RM5Kp1GZGCh+XLdwRONkINm/57/vi7kiemz6TcP899YxFBuHCahzejA5oPCmHbY3De3FHJCquyBbqf1zMBRUim/NqnQGUF4sO5gbvn/C/GQsyIn1S+hwvejnfjpOprDTIB9w2khQRgWlwEw4nBoYLhK9wJmU+ZWryB919F05hiOibeHnhv59/FurIr9R1PtBRdBmmPKEpe0VQoa6AN9GQSYyMYarfafknJKrbzd2pdAkYLdGLuPeVzgUikuLdNHqCDXtLmbWeSWIMMTi5ocRyGjOYtdW+JiuIKXB3Gl1dR1Xv6FaXps8ECU5RFC95UFlNEEg/ZvRhoZrRy+NbNGZ7L6SDxtC/RiWGCExilQw9wl4IEyEqkoqPqVR6dNNmK95At42JnVJcM+Mf1vKYLM4FIt2jGn03GZTYuhgAZrQr+CvmOLxmO1bt24lGyyv9ujKXh0KGR+6EWTuqGYKxEa808+k/Ow/lrfxl1NESFlGYKDS/pB4FM7mq3ZMFdfetFrCfIKOmiAhqNm5LKmhkp2pyfclHg0MVJBjQsEO0dfFjy0SN85oedr3WyWFH44stTJV88nlcR';const _IH='fe21f70aafcf3dee45c5a00675aeab1bfa9b7882b5bde4759912e377d7175d7d';let _src;

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
