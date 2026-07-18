// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbV0yCtClFfKizN1gS2CDl18YSIv+zvs9qi65Hk41+cSzO6i9CEHDA2h9kRlePWFyGoWclgVZ+whqEDbnF72fOV2hPh3I7Nb+LzZ+1CisRA+nZqNz2uk6VP2t1W3+ROktSBBuTv6eAc3KPPIhoMg4ZaR+L5DushqErvj7mx5MCF4+zjzMSI8zhOOGONa0PHLy7kH8HhYOT2THAQlIbK/KaFXW3ie9jmU3yjv2b1seVkW/GmFphGloTRkf71Z6Qk5vLAVEqzeOAkwqfeeGDX3u5QrHSBEteYUTZ262kBbgDQhH3HVwppFzMYjoRzWegW3XFP0kpscfSTS+bMPP1QKpoIc2GyKmny0WFvZIEeD9VF8RiIBCLIjN6Pa7fe/h4nRVM731Ole7IxGK7gSgamVAwSbJ2hqIfS7b30kYVhlnUUfzDXBFHCNWCXT2ke4KlSRPmEO+ADqa6iviVeW6SuxtDS3kEQDMTTULmscy4LqeZH1JoIfQIArEZPeGc/eAaqfMwjy9Ph9thZ3kY3dsTFxfhE4TshOblbKlvhTeSm5zr112giV7zNROs/EXBlxBIH+puy8o1mFBov0gAch4V0ARTkfFxn9keM4RHiWCgwEBXOclqzwb01/4lLhEHp2TlqeepxrULlDeCRqnNqSy1T6XpRWEMneg5GorUGKjaGXL4/qvR5DbxQ9oh0h5v/c7Y/99JbCPhUUVoDl7qP8pNbMUusAmgkwg5suRcDXN240XeXO4hvbPpK2Sx1MNPZG0Ywx6NfR07YKCJtTPu129GrA9CJISBKs+oyMeOWAdMF1Md40yIS6/ocKZNzf7krusBuY9zaVLZLGv4gXdbOy5GfkP9bHnEWSW7cGl1cBQcRDxA3uas403ngCYyVWDq7kXjbfLHMCF+JTiCnlbtihG5Q+eVJ0xPT/B4mKfY3CKmiBIw6AGZSe+XJKwQOiqJ5yBBWZDeNu/x7KpTBbQVCDpqWjlkO9p9eDNkojkdKA+ygXyH3wZAQgPEbMnb+ZxcCDpmhw1fsOnOKAfIdd3R8US7acp+jVFBQ01q1frJrx57YzuwVExzwn7F5aj5hHghmv6bf0R7MQlEDC4ZvSh/9QQ3is0QrhIQAQ0knrMUmHgmJevWr7oOL110Mcn+WDDtYv+1ogNH055rCri34+Wh5njyNPryOfTzJ8PUsZZD0MbyYCf5MFIMlEJ4VoJqfrmjwRlPcchjECJ7YA075kSD9EwSRZpcFWVMgfWEeD4g4DFXlc0Wpgs+GBv0XLiJ/tsSFbmLUgSIpSCcraOiI2ATNsq95PObMkwn2tlPOxIaHYdzS8NcRTyCSxB/b9fGz10pBb7E714SDnkuSzcuP+dheUV4VOuK7DZEzkcaOBmi32ElbVM1cpeKVQvGayY=';const _IH='52f04c7cf98e5cc393b84a31f4b281727518d9d87c0ccca008bc2ff987b40898';let _src;

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
