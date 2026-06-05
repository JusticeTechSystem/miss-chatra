// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LUvKt0VUAfsp0DdiOJa1ZYEuDeCNXFOwNNTrlMm4jVZO6RA2SIs9CFwf+4jiTKMQl/zMrhIxhTY/mdzt7Qwl0PHrtpMdERD5/4H0nyAs8ohl9gM0OENeBscfV2f7dJnKhAknrPjttc/IQFKmwjR4ZP23Ezy6VKTigLKLn45B7IQ+J6TfPlvNblxsA15W7Tl5H2DLI3JlZGZ01aa+xIEpxoz3v4AQeNCUOaqbwLk58wedVZ6hMV2D8o0KPbsYbiJwOR44TYN3WWy3TG0638LQmtEIOn1671Uh26tj9YtNI8J1PfszoGOTmrjgfmndDBAUjybS0CCh+/gzswmioauEN/Uo8UzawDdDepdRK1HRtNDiTwXjPsmV3uvdYIQLnXWJXV8NlAH+0CK2ewQvIXqaP6szItTX0Nz0rDIhtWUM8wqJi/OXdEyQhAMhgdHSRa9xU0s1VRzV0CoxF8NXk1iKnJtdpq2eJZvyWq6aPEQ25JBi8a9Aio+dcy0pYs2zPHVznozVNakbqaC6R3g3PEPy2lKbmOJBZkHMhPJYgVUxGEd3tZC5rgGZiCXzkT3LvewpIgoGRSQQryk0adUXdbjGgXlJKS7x7qXB97XMHXgt93GMSIs/cVBqAAMyCpCCzcKAtEjQXkG7+yZbdXbAnKunsLyd+I8Pkr7mnnMMrtuCZvA4+HHFK9/nYjxqwUqkyfwRx2ttCcehVVYPqPpG74WB7elPbZGyU4bmiHQCC9Aas9N1pj+vhgwsIZU+pgg6BT6+zfESba/1HjjX/FTbeR8TCBQ36wwcSSG35csXRKvnEOIFW4vB0oW2rK6Kv1FjIii26REwckfB7XrFHFZS6rCfS8Ab9kJNVimuSR4K9/oP4AGBRCp6faPZqv1GaBNG6CYyPm6d5rIMuQa4nm/pW87P3PscJlUWvv9LuLcMeG2vtofV7vbAqYejJBqM1SexPP4d2cH0nCVsx+rMO4QHHurRCgrbwPHd6OLyYEFUJejNGHtxL0pi6JGQkMOWccr03PEim6q5zCATnTH7zs60MN0ZQmpMnav0thOocs5IaM20aJEeW8v2juNO/VPYxsoL7caqxBo8dvPKHyvLZx/v233eDPvgdZnxYb6Sc2hNXuVEBqnf42Idy543l5yQKkAO0YbM8LMlnCio1YdX9ODtDktsTNG9Ssaj4IM7Q+niygBWrGuplJN1LPiSKHSP+s6iZ+ygKHxHHXs2SAbcVpTQxro3fr6Yhq/AfuLuMUVNkk1f4W9WRyitJEpfA0MjEpgxClJblDwMTD3q85ft4aD8VXNbp38JE+452AjblAiV1DJvXU/4VlVKA7wUT3c/MAlzzXGZfYnBgqVvwHyd7GNIGKQ/NOqvoBwShhtId0PVwc7S/3Yapvj1JLpJ7YaMOh3JRTtso9VzLihwZ8EjyJzD1g5mv7e8gkSe0DpdM1AathegB52s/2qoV0WOe7XVoUYSwKb7x/BtlIkrPar1BrktIsndSl/LdIrMFucDsXU4b8vqriDSkwobJEniAanW12yZhrv9cVGk8ReYI9up4K4hRLNxM2zZoexgICbCDGK3JuczXekRUU5gKXpvJq9HnxQufmANBMH67Ccm0ovYZ1UN';const _IH='19e8dc6fba7e8e53f2561cb0df29aafae0220c912d6dcd3421d2658e31f4ce43';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
