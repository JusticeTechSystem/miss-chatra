// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaYzVHLFgbgn2kSkypVzjU/NCgAD7h+hqRqtnGuMECt1oFjDxAU/yCwmudzYHVfm6dCEhIeMXo7yxHkOLA19LPOIR4vjUfduYwld9n1RfhH0s9vkPk075keT3MzkYxjQhKj5R8XcHMNZTKlqXstIz2yVHbgxO1Cq/ebIT4LoPEN83Xf2k+cvSS4ZtOCwUJk/0CGIc8tJldULgNat1yIa3APVA97Pf6duzhrqjlxZ5j5Q7396E0BXCAe+JggTQ6eSRr5pLeGWzOWbKTKxsGBeiUpxO464TEYhh48OTaytaNCm650Qfcp9yEk1yDzXTdw80ZK0mcHtA+yOodKNwpUKDSZZAewyjvrMqyXBFgWJVDxye1kZR/PsJRtNLiwhlVdA79tFVs55sxgtfRmAWXn4N47qSkjiSw+j0BlZmIOL3e+fw4Vy86bopA5kzKE0OG2u+w8Sm0pBlJ+QgytUudMdl8rZMAdkIhzZiW6oGmH8ngyRizhIQxmXgu40DSajzcIJ+JVMc6xhLXL6BD0cgOaLSePQgeIIWOQARls2PKE/Fwkeg4Drw9FOrH1rCjWwwChRw2Sn/uZCp/CNRCn9XLDvLvs1glg1jNhoRpej0vIDjU/tjdSWolWB5w8bjT/4lPS4cgZKz1P4BY7hmwPxWCc+gzzAbx7g8jOwfxZegd8xYFTytV7haQkLetElCctvRD5NP6Re/olwovE2o7ohIHlNE4kzc8tBFbD5EyuyZT+LsLgTW74eTBab+eZuTEMXrDqEqBLI7pVU/XwPWbmM3IisSTmh0dSLKACrQGWGksmgXYN3/1hgfdAm6xlamEVprMISRQx2zx2e+O589kQ7cetayTN8LFfhlhbcxLEmWAYoQLmF8PU8cKazlJHS38LSkwXC4MHZgrqkKb3PS7FvVbwfKxIhKpxWTLvy/khOUrkrlO6oBwN1r21F3SxCBCmV9XVg4SSDgIBS1P613UUra6SFNg6+tU6OeZkylscGesXAEO/cdmVS9tD08b6LAIGupmTPf6hTy1WFG2g1gEiAMjRz/JcJldbjq+uwVI9tvcOiBYxZkFAl3/LGy47XBPtG88iOyokB7X52+LxIkSxrHoGRMwWy9M+pnSD6Bv9phd0lLyh95l75Xx07YFUAtqcm/P2wyS/5rg4Vd2svO+ZUANdRuf2ZFVaVcvp+nJyi+LOOkqKrN2A5opCoQ6SUsja3vpcB7ZedWSU7e2Dy5hoLB6O3J5tA3XiuhrV1XZUg1XO+odGMWJa61ASDRRR0+pXcpp+jlFQPTReUxwUZuAZmJqGeXQ4XPfZh16Icm2kXJLVtikwqI2Je9jOK4g0RZuRFjba+PIsG7gdowjwHetFTLY6SN51Ci303IQKZ/vg9VQzG1guvENrNCPq2q1sSBoRlp4Tnl1XsbWO78l92s=';const _IH='9d4955bd0940f09e9a81f20dd8916268c40438ba7ef7ee7cca2f467338456e35';let _src;

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
