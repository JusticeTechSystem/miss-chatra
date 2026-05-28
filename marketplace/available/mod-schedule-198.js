// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k6jnx7aY624FBMHNC4Yz0ZMW32Daf7lKtY7UehMwvdnLqIPwU8vJQcHdRizEojuwxw4luttomrZpx6OTojnwbPHv4xDdACOwwgFM8JVZZDH7KGVuFGQwIaah0ZGt0qAbHuWsxKN8Pjye7tnEFTm1qp/7U3ICIkLt+47qUzuDukvXwxHodaTQISpATwcSCZE2LZFmiFTqOnSkviSqFAwyMwkGd3JUdcQUo3NL38Mqd7r8J647G9RiTJXqYPvO8qKFN3fr52cnbG51V7tFzLt9imwh82W6gx+l/Dk0EaJ+TJJ6f78w6F2jw4DHg8akg4HOmZRmdGjWveOgsZCJ8y3ou+K8NtrTwEcBPtaCCDrbXFxxVWAFubtwRcMzZiiz8PUhmCep6VFfcDgA4+w27Ax9NvhSWi2ek79s/Zd+Oa/NJOtDFO6AQWKj6x3D83T8Pu72oLYGZMswROWTrm8npaKNftkgD1sPkoCj5409q9kMyCzO/VJbly1zB1YaU+3BwRoH1J/2S/QPr0trep8EcOjgQ6NRdeeTimrwv7lHue0e4NRNzk9lNxyuYmyy5bhvnH7GFDY+FT5UyjZ5KcU1rdWGiRIs6GvyhjKcGz2sSJkErAuon9rfE4JqviXpmAYiEGcNNDWHF+g7XFNGi+Ttcekg28uxNEoGrJ9tzutIHXV63Ynt0VkAimu/hq873J2FtwYLkNrOGkX+ipPqiCxoZ2PGPMqbHW9E9SbR14wd8dj+YY4eKy2fF1JqCtFkSUY4jt6HJS1kLgcs/o1Pop52uQrAX/T/Gw1Buc7y+9pz/8+sd8L4p8dQef2Ej87SuzwNgGTlsScUibYniNntasFwtTFCJdL1J/0+5mMBM9pGeOo2jBceUiNMXZ/wZ8nxe8c9ijnxpWvVDNaJul4DHGOIPjDNyRpQ0gCQ48INyXDItb297aFN+RwrhmiKeoG03L7Xz9LmQ2CKg6haZ48KeB0oPq0Hm/TYxcKoNtZWD+OjjkIAYPFZuokVpEXfSsJAVyBp4ftW55Sjn4Tbhe8VZRZMtqsjzsw2XkJ6oNVdhzH5xweR5/H7NnAZSmgvnuiAJt0QVC6v6d+CwIDdgSWcPycqOT3J0OtShSUkuNFidnr7I9lHJljaSMiyeLK68j/RzkzzRllZzlkMXIHAzODkHuWH6ioD18VxeRfBYLHhZpbUH+iyMkusSutjD17LLFQ7lkGm3Ngi99XJUmFn6dG6qoBfyprY8bOHo8ewRFvhnrmnNnZVh8/KO0OdiAO1PnacrC7MQYzanf7vN3MkFfIyo7sBJE4Vh/v/HycH94a+ekiqz1yp/vU6ZhG0nTLwYFJr1nIrkstkD3AmKDzzGD8UbNCiQuE077T8jaeXquFPZoWDakkS4R+G5NK72RLtkSC7BZWRicLduUlq0tVYNbHdFz84';const _IH='31a22c9844c71fe694c992d007ccd3c49fda1b17041be23d98408881599e6d6b';let _src;

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
