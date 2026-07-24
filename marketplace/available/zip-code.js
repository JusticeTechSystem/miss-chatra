// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuPzT6Ger14smdudctkaUxvNDWhivCXCIrWAWO2TStyn4fZrIhwNQxlEVJqQYlfVb/JXXdwzFo1YVZcaC7rUQlPuLWexn7KqD67tpuuqucNbflfhCMMd3meraDFfVG4RRa/J+XNZ/hrFQ/txJzDopsfH6Lij2S6KrBAGyge+GSJZ07rfXVWfQPRcHCkLnTvqAJy+Iehr1tYPBZ/w7YE8ebpMgti30lym4tKo89AXP6t27J2rlJCsmx8++Iao87bcb181qJoermgxf+FFA73h7YFeu8j3M6d8d4h2kt3pl5pzhq1jPejHmYide6LETvoNv1Dr4Q4Oimx3vClW+2QIBkgNniucN8EGe42QhCE8WwHoW0WGVccVl8VGhe7Tf08f4llaT8t0BOG5Eak36YeIfhjKnlpKhMW7+Av5Bsg6ozR4mo8lMHj76y7FiBFlq81eWEv22hGqJToWzwr1mIFeIqWi8bxBl7rxtsGRGe/0KHb9V+6XKoRu91MesHsXUAxiKO4pegtnFRT2WDstgK2nwxfUuXie2MziqLMnmlLcifgp8jX+j5Ox1UWBDhThzMSsoXhNequ0jSPVZRB66gmin8fHB142RKm71uRKsNmPQM+XoZbs88/v/9lA2VezPe7oUwWQmddqe+/9fluAyruiemuAwjd6AL104oxVo6vGPmjakSIWkHBmSsJ9BCE4XKEPQDV1uXrFXAqvcUi7OQ0Yrc68o7YOa0oXzFX8k4C/4OAOVJAgCTV1QB5V7+XgZzSuV7F5Z5GxUtH7bSJqhPvL0W3FbEn1Kbcr8cbP00BdfxzTwb49VDqH9uipi6e7+D9pnWxeda1AdK/Jju2ogLPx3bAncInkXyIeNHsqT7Qy/G8OUUZyxPWP7yLq8JfsQo7bG5COi2XDBYZnmcQT8CgIEPLPr/7yiwAwc44vzIORnBcHNhxw3Q4FGMjH5zBRhhBVL+4kkmvak4jB2i8z3dMIy2AQijrz4SsgafXQQ21DaGwggMe/4nes1LEjI4mA/wYTM4Uv5ET1FoKfZC945ftizZjWYAFkbYyNR4xjpSp3RERKulQVxmA+UppM6anY1p7IMp8H5GYqwsN6eKY0i0bopV7ii7ACmQJZ9svcYePetawQAwShu6QHu0RQ6xNrBo0aPvwiBn1Vk/nRep7xfyXFuv7k4GMIYcJ7vz16Oc9OdFD87MR8mqFtxtWRG0Hmj3/i2sWETq3JCadebf5l23d9iWwzquSjZvC3ueWjyuoWUg/jNEuTPl+vXpT76R0aXXxb5n9JFKxFVVNFBMfqiWytbML5pNBtM/KN3YWVrpVCTvlaG5gZxUyPCuYEnwlQwXHVDmTZJJP0gsH03Wc8gr5hYyAx9S/ZAxBLCJp5QrPM3TGMeQklNhzrCEr7aQEqbkmDCwgYbotxSaZc3hsQFfi0M7V19UfKvd0qZ1PQFK8WuPZ62AZD5+HHTk5ys+qRKmRxub/sHMqzPxRGG5bdDAuwpfWS8takNK+Egbgch+X82wuZCRJBfAgKj+NAe23LImZmlK2wFNHxTy4rvKGkIyohpHVZaS7Br40gq7g7iXlpe24ZB9lasrz41MAuDbHJoScsEl4YidNqphI2Xq';const _IH='9f7507275221d198f57c9a1a8adc1fdf9fcd5c3444377ba2b7a9fd4e11697b48';let _src;

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
