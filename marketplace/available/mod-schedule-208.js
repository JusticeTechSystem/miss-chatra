// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t12U1YAIEiQ+ijcK061vslznI9GlSs3+Qz/ioEhDmWmkD/5kr1ZYPLcp21jtCEcnBsX0KQfzadbe0krB2beYO4sHcPPadmT63jPxl8DK91JsXwBuT8yIjTVS/nhI6haihyNl1GKJiVraMRjJLwiksdfDF6J+bvApr0gEkyjtuRMpTSXLxj3Wjw/In9PPTbSTclwFuQqBR7SOMZmV99r+jNwKweJPDbuF5RYFl5aFt3/r9zN0xrIgngs5zNgMfWehRK7+EkgE55/YqLoARb0BSDIooyuNE5PXc1rHNG1mFSeJmNR0gqMkj9F/ms4VzSAMJVkHhRuVdwg0dUoyxNitpBj5SdxPIiBDdp/mm/kGwYgCvgezcvbOraJ91FeW5iCjYNSm32wprL4dEQM6SM7H1yAqxUDE0/SYyLQATiTgyIhkXG70gj9XSK847WcdyOtvQn1rHF+wzLes2ZTkVOwCGBi9DhsN+1mf9vg8B5ltQ9UrfX4pZGmj3Qs81RgCDn6ua+4N06PJ8SaJ/0yAlg+MEIwlMeqdnAD3hD7+0heiN34iueKzTb5TPg59GGX16dy67l96+qfRV/evfmmyzvij0f/TzKdml3M3SgW6qDNLZdpuh1ZHdBX5n5pa9J8lFSvTnt8YjgVd/t+aYgy3R0h71TaK6xslTwizvPcw/7kW1/DFi8S7dh+wOR7GUiy5hGqV4LMZ/rjyQcAcHKeo3Tne3Qm97/MPMB9+T80DSxKxx/MOVLN7Y7FE2AuN+OjQScrXbWJ7SlKzo5YPztaN4HPSAZ6nc0UzJ51lEHIk4zSlMghEWfnwjtr26BLH7M0al97OglgBHFvDOe1exmoNsSi2cVEc3KLxeAtXlwThGD1uHUqGplupUs1RP7Ums9Dbl/JLWZNmXdC731m5065mt9I2H6Lu6kBXZzWFg1RKULopcz9BAYmAadngF7F6OsNeKdgK7NDQeAeBNtzcSccc8887hmOVjJRoVuY8BS2EMMBRmTX06EhYsfuDgHLfIdIXWV8vqg/tdrt95UEj9Zhw7bKll/U3si/KEKV38TYaqbx9jREvoQbbgUfxnn8w/8PdaY76TZVnh0pvLid7CavQ7g8kWIwYn2uA1uYzQCXEScdW75USzrf8j56PnQeCphvkbyFvls8OyFZN4H5XJjtJN1+TEAK5JdTOaWIKRdaPEPLqya1BJ/SPHVW/0R+x9N7Jrp+rtc1bu75Vwv2m5hhkRZxRP4q3LAaEVO3nalf05bx0Y725DTLjswaF/KbOh+JQ3Cwi0Vfu27Ii2MUfelXFLzcL14QpcZwQo/2S0yp5BhdzVso8mYOU5I4oCKWCbIjdeRCe+YM6o6JxeyYViwYvrbw3ljy3v9vVeCpKTVtZ97xkq9T4bYQ3/6CAeD8ARsTOeLG5VXFyK5MaUKFxvG/0';const _IH='3ee84561d9e3b4cfb964b1f24ab47026d15488eda78bb2ad158b9d142a7090dd';let _src;

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
