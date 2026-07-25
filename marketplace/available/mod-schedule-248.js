// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgF69yKBB8XpbO+klgNh+Rx8XUcqfFDtyzspTonP2pZ2pZyXwacK7J4tXpcRArv1SWqBeLsH50aQK1uhWO456CuTuBS0/jW00yxDx2r0ihRuuYS/CTLmZVy9+EoI3GjyGgaFfQZfXa2Glu0Zgi9/xQXSTo/QFcCKHXtJXLZs+pl2OkLokkZDBv3dS3s6XN0QIzdMTawFdojYcTIwB1are6U26y6YaZdzxYj4nvb3p4PPx+ZjVuaEzYLGpGdPQzY66YX/kGU9SKXdWkzZ0h5hDnBbj+breasz7/xVrtZbuQZmbm8n5crbO777AbDgXuzJV+3CCeXZVsyCGuV7UFTr5q6Eb5T4Js/QTBCGzup8VNH6z5skeNvfhypY1wu3j6v7SpDC9hVnYrOnNcjhiYdYU8Pkrs4mZJWreaYP5kDPOqBout9E+KHzJzYQYthKepOCEHD9vpk3f84q2QCALDH0fg6CAt9GTfwCoxpAKEHEYx8J8vvXDi7gbJUypEvn5HKnFjWO9zMPHFNxZf9N6SfAaNXojc2tFtHGkVnY27ZNbdi3XucECS6nsXkiibD0/Oe09ZIUvjYMy8cA3CgMoauGzDg8KfK9Zy9X6/MuTCmvaOPi+xQ8eS6xkCcPRDLzVBaiqs29wHtvIat5W8EDsqGZJqhhOCGB8izVzRx0ag0GMrqrSgD/4sgSXj7JidlhqQVSh2wpARvKZ7UT4q7hADSaM2ZBdvGr7GVweObj/wz9TDuFOxon3IJuAFMzk+fpGuTyZz4b77OUdYx81ZmQY3Uft11N3eCx77EcHMX0a+ZZOqaxmPhbgCnNBvFJD3seTK7TNM7nndDXghFk3keWfl4q5xJJxn7aJ+PV2Iac5l190B/BtfsNB+DUAtnK3nn8+g6npSoWjQ1LPUnSnMiUd+oRPPxYFuOaAb//XUGwc4kk8EHBYr4WzjOfkW56VWbbHmrBB1wH8wdvWP93VTDtg5372/GT4rXLowwez+qbvOcYgBljflODr3HIWhBidfkM9OeHJW1TFVKGPjljn5WytPHVtgDz97D/l6tHWpzUkjhdvkZVkJimc64fB0tkiueEE9+3sxBgANhaszLgm43NizvY7KoRy99NQTmAqqGyI3fyhGulmsgPOshAltAerKWpdLEjpFqIb7s0gVG3wuip8bIop8Cih37uZdOvyRyKWMogzAZabeku91s4Wbu6Ns0NMFUEjZSI0tZThgE4O1e4rfi46HCQcG1bzHfTuV6g+36hBTZCMfSIlhqHpGcLDCV8Jj4kaA9fBlJ0YESwlpAPBlzsHmpTQniCW31KiuPHMuoC79IPqM8oBon/nX4721M23Z8DIJfuheY8PxtMPcEx8HtnoK2Y2dILZQ4RWEPVQ/hdjtHEK7rXvwcOZsPIhidydD4vqFiqugNwZwelW1XPY=';const _IH='859651e432599645a83d414faf5f6f638f678673ec22c0969ffae3b506f9c2d0';let _src;

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
