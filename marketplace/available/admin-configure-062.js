// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tihLvAa3d3+pyfNto2X8QZL8+MRq8b+gLs1xua+dh9HOFpNLQ/gAibAPAMmH170BFq894i3hRmRxwT2Xw1mAvxfdY0Du980BvpHfGQM1K61iaSGAtM5bZpoAtf1lcmfhbxPn76EewEBxJUsWxujaRfjc9tVACX41HokW4O+qltFJqRpLTGGo/TloNXBP5rf2KC2eftm7ruR7jPUHX/DNZuqB7zp0Yyb46QflWrfMF++mQ+c0bGImRu6Xss7ngroreERstb7hzZcHaG382NG09P0FocyN4r/x0xdmKF7e76NR6VHIhB6fmLgEEjcbnc+GYzA+WaKBgdHHj6iMtnQEVfGydYal7vvtfyxXpfNIn47HGQykfgYbHy22ZucR4wE2TiIC6c0WY1JlkNN93sk4WEFSx74+ZAeKNy7Q3J0eJpSEiVyLBSod9gWkY5Ao4ukdICxyH12BdMeZlcdD4IHMPja0EXVIyo95OfoKSz+YvoFXgUI9IQiRRF5YMcd4VmFQbWyAmIJU4eyyRlX92mJcd5uPsUgPlwNQ1HtgL7BVx5TZ+t5eVxwIs37Tz6f9dXhI+YSeYt4dBqrf093brURnpA2415VPAEvyNHZrGgvOOLFwcC29c/yq5ejE9+5zOlv1O3wByEkQIlWFckCX/ml2juPCpqFPOjJ+lnZwFm80BE2eGOIh/9gv06yOmZf2RK4YdmEH07GydGq9+DGseGvDFACVSj15Y6bjeYM1k2p1/hV+LokrkkUqfFgKq8pSMNMy5Sx4F5T8c1ZrHVzKAN6khwVStDtHk4mnU7uTvgBVfMbhsasYoVkSjzACQz7AogBIUCcH6MQgl/Zg/zst4GtjIrzvJlcvgkrM4twXPn+0BWbYsnnq4VxYjSuF034iD2RZaU+I0lfnhq0KZDISbdoF5Ca0UkXmYWUheE+Kf41i4ywQ/Fqz7OzZrWoj/XN2YBFP3wPwz903j2vrlnq6FhjkiTcFjp//hwVzCTPgq8xrz43k0rIrArbbQIc8v9ySTyRDXbu39LmV2Ko21UHLL8FoxmWO';const _IH='989d5e5cb3f4b5102bd88795776e35299ef5be26808726a3ee4d84a2cfe12d2c';let _src;

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
