// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTN1DjtjuzJy6GWhjdJsPQZ58fnThLbHuDzLaRy/q8rZaqI0kGC8tLBjM0xSrSYYwuDNqVRER+5IINAKt8bWinCMPXWO5XRepnLjDEN5uMGKT61LK5LTchfyogOhlDzsvr7+JxKxm5rSHZlrPlt1GzPQ6fLd2v3aykvMWG63cubyy3RAobDh2HTR3S2A85sNHV+5CY3DsT9cbKFJANJoQOFd5wmLA03H1U9sYgMUFS/+Ll4MHdTYqZCWwPVfXvdmf2BQzvcXQ/H65YC0qFm+cy0yyiBb/eA7YrArhrtGIZYQB/9l8VsbtwlGqjhehJh5Id80dOSFaUeunJibJF3RqhLX3SK5Z3pxRqzygbAquofjM512NHgiaoszG85A3UhYDX7sncraQ7zsqECbXD19MbRWgNUmaDtCq8VEEv+qaXPwQj+f0GGes/JKAYtwMEI6iaOsuIgWhuGxncnluEWjBeMId/XTdeS1M6PnmLasoQZZmBesxMpJ9mJKOQgmFMPgsAf7wydaQomI3MLhiIImlFIQOpbNBjpzu9lpf37uQe4/AHHe99TuOdbaXpZu84suhRt3PWbewBYOVMSNfuAKkXUEo7+EAzCHyk57zRmzC/BoKyva41yQ7phlIv+sFzIy2/Oorsc3sd4hzWS6CpvCFe3w5SIwRlAYCghny4lgeaRA1tAkkft5scZVkvKERZAv69mNdRKcI6iX1IZr08L3IXgo8WV+ss2P0iufPNYrreqXTaE0E/EshRGF15Nyo/zMDM3sf0i0DNrfufPkj9eFmvtjJ+dybuBt19ro5erhtFxKtwpCDKjcyS6HhsN/dY1J3OL8Gq6/s/QK6DPGnTrlFjKRy1ygzgk99Jl9Ou5ATmkZJq2sfHMxv+FQ8tgHjMCAO9WBWMyWocUmxyVKquLF1FBYAAmyPDswiLiF+DoVz5PUXTysxMpO2b7VAhvEiWt8lujAdJCrvf8c/9DO3jQVBoLJZMtAbuSTwFb7FPJeEXGgu4/bhyy7DaInBRHBtjLrC2UAUV3+Vczm3FhS5KpHchSByrVhEFRaVyg4T2W3ARWyWykn2QRDwDuBTBHR0RnYT0HkwkI0GdD2lSWHxzZQr+8izEg1eceIwZTGzKciv+fTEMmlLvA1Tl1HGp/SfpKaHZz0fx9uq7i0RWO+iwssNdlOy75SqJv0vjzGw++3Ygn/iEGKOYjACRiJVoWa6hTCPW4XAIlA==';const _IH='0def9849ee289383a04917536f603d03a443adae7d1af1f6ee27ecda95087825';let _src;

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
