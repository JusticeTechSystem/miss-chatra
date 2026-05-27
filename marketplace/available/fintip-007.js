// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XSKDoOFWAadX66lzSA4UaEgxpYM6upsFKghaDSAOLhTSfRXTGubKM2/p2IdcApUWKzhytGb/BbXUHCWLI4uSeN2U9d0W/nkLuA6M6cv6HzFsPdjWVw1ICGAv91Y3QFY2iAxxYYCbAe2xKlfg+Ki4UbMOLQ8Ty3+329wu0rpseN4OZursXsguyQ1xQa9GRS2XU7ucllzVWzYxMad1K9O6amlykaxB361UrPIntKMisPH3K8MDCv+gAqZNohdwX15E7QvsVVsFe6VuoToAE/gYupuDG8Vbyc+H7n7U+r3LmJmWmLXIFOBc+oMyt3oMLGjpK2Q0/y4awyNcDEYY1rw9FOfig6Qe4hWSqbrMuaPTSswGzpPn+Xe41lktNHe5ZGd9se8Cevu6gSGchXamvNQwUHc9zrPaCDRyXhNh7AO8/zopRMobIci7pujF9+or7vtJlmeW0kk0IkYhT9BSseMzUOg4akXBJygBCuBvM8syoZqUZ2waEoCKaylnbPa4G85YD6PTkeZln/duSLpvcT+G9Mdbb5QJFsvpkleW1JxB7Zcj3RDAJLi3Ef3DmkmVllNVWnPclfU/cP8y3rpjMYEd6fWXbtlxnFI6cW+uH2En1uxRLSLK5rELg5W2HnBjbbPSV+5ju839idKQ6LoB7oly+YoDyxftaKz08otxjDojbJ5Y0YvRtNPGCStgWnhOnGx99/nXetosaOiC1GGLt3KeD0d8Yt+EomTDCyHEj/7eJznJcYvbSLaDB9VBjlHo0FdrXygYvKsrqX2sV8jlK/adAjwm2JlI6RZFOnIBj49Kss0W0FWpz92DCcRRgFge/AgUuNxHwkAZ+R5ChBiWjQWR1hsgxr/7aSOL/67dt2qyLHSs45GcHfrvE+pXXTixhEN6O9zb4gEJO3TGG5Jh4Y7cNGIARd/iE8UTUF4OCXdkiuslpcWfj33GbJx5N8teZfMe1PEZvLz1ipsxgUtNpiG/jfPuqfGpIiwLh+a92PRMMUCIwZG1eTfImuuG/pwc9y8TWquthNOa+tEeLeHusjlylVY51qMUTorthqJtI99W';const _IH='7dd580da3af14e395d1d005d2ac541f91333af2d933c6f69087cb53cdb36c087';let _src;

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
