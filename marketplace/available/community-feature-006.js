// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BviVrX6jtCksFAH8FCbFM/VgejaN+KQbMC5P9+FprYdGe91GVK1rY48JnjqbteE/vmn0QWF8lWtfoAipnLwz3d4eYd9hW2M5ObzNP9hMthgTby6RlJac2Yq67+ML0GMTuE4NnwflS+BiQKoJ/YAMK6y0G+GGF55nG1lJlsmMCoFcdp7hQhGqAGqI5tqEZjJa/wSbPjNKmKXzGdHEo5za7FeIsUj41o4OOj/aTa2MxxfuzRW5wgoGqZTFq2/xwSXnJtojhmQ22po203SXlRoO4/lXbvRjA0OWKzu4Vbq/xCUDBJ9aJ48ilMNaRKlQS/X03DcLszhU9P0UxlmCdiA9dVuosHL+oobKXrsVyBp6VOjqsyL2xpXvUa6PtrP8NTAPpNaQThFNIEKxeAsvwtILxKjpCr6gPiRXsiWE1BDeufX16vcmGV9AyIXyTdI9FA022wYhmMi4FMlKjTi5v2fXfve+jHDzAlsBS/GgtYeID4cd/YSE9XvXc9LA2zvNDXAB9sM3mdiWwLK5tSmnNUrDpPFjvLakQcMxsw1swHK9HAbmt2U+SPl2F3O1l7NPkBcnBq+UKlfnnhtdlcE244UuN5+kyJjav9IK1jR2d1LDg02PdtPbAdD07SHdwhRUh1OHWxkipnUADJIBIc7cR5944seOvPGxARqUcn6ap1VOmXk+A9GPhlBl4wHSrQC2rVbuCGWWzPvBXZg0+fxARtzY8w==';const _IH='6eed354f0c7c05ac4ba4ce4b7447ff547eaca91d0ff94a25ffca1eb623c539c8';let _src;

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
