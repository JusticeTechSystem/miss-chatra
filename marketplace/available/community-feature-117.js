// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='183lp+TpSWgy/kKFzVtWrKoEPJS/W5p6CAHv7teIf9ejic+PW9jLbq8hZW3WNcihdNPCkUgRKJz0EpfKpCA+ascvLJYVrPJ1s/BnokrLSu9kMWPU1VdVjOCCWDh0XkK3YHfLLU3Jdikd6RCDwNS9uwmI85OGkhDsKpqKzmvvDv/LckIIvuzuMOE0AuemuYIMX3xCesNBAoHKIiCMDLGEPLb8HeVizio0JcJJYFA1kSMANl/uLf48a1/ZrRhhdZXIxObzNjK2CGvtny3D94huMuHleu1W2IPtkNh6G2ie0rfSYiwm7400U2Gyt9pZDXDvkKyjIeltXjBH8wPBDi/dFz8Y4rViHw5ebHhlHUZ8cOg0htuNnjK70P+RljiOtSVwaVvqSxrycddWH6fSo0Vq3WaqxFQeaFMcmARFKeFSSyEtWHOMB16LUzgfPs/rK2tTjWlzXloTZjqRAj375EtxF2rOyHaZHv7FMVyz0vL0V1cjahqAb4Of9d5EBlZbS9LDWyCEZv4PXrINQ/oIHqEUoboj4BiO46snAaA5v4HqWX8PT1ITcCEXAQDdS4doyPtC69AlAPaj+verX4x/GFYHWq1sLG8KMpl5hH48EVxyQ5afLV11lzsc9FVUlnEJ7AdC2RM0Dc4aEUoO1W/+4HdRXnPUcL3U3R9EbZegr036PhncKGPsTIVAgBIsv6fNWCC+ad3L27i2VEfxJHDSmRqGL6CSoUvokl4COk9DFUzFdTZpgIM=';const _IH='04bda16eb9a76c640dd1294f5b10ed44cd2f028210b752ccbb4b0bc6ed326a42';let _src;

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
