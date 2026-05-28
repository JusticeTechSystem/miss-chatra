// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wVMkzx1LzW0o4b5D/vCpDXMNFUqji2Oub0gXfxF4jipRhxAV5hn4dIvWZIjQGPcPsF/Rd/EIA0r8Th9VKGRK+4Zl69mqkGS7PcCCiQmbgtV3RcVObClEQpaDx/NXOozWD/4/9FGC+UeOldrbuBcZMPn1AtkVEq3qA/jsgmIxdtMsEnyiS8kxT/e57opQQbPUGkKKnJ//vgu7x00wZd+ID6FJ23Hk4kTAjmOiLLQZpLJ8sKmQ0YGcYw+e6WwpocmbM5588nHFbdmDdTcuZ1zT+AOT05PsSao8fvalW8nRzU2uJETL4CU4jOZQi0Oy7M80ZuiX/nu1BgmCiAzjjox5V/GnMjbWD7f0ZN2tVvVRbrXes3eAd5AZiSTXrWwlx3Cg0hOe2E/qdUFtD3hlzOG3gtOl2Vuty/S10d1wrcTxMkbPy67O8JIcL4dujFcXbMSaalGpLljhh1v4cIaFTTVoiFs1grCfWO2RwJ1yQmF+D/sUm4r1XJDgXf0LAJjNGWHBnnCPDuVBbshBhVjOHZq+ExIgjpOk1cLhiOhCysmsz+VrZUUfBytaKFxN8IiFETusE0ymNDop3P12Kc4Xy5dcU5C5i8QN+7yD40/KNwhSeHDE6susS3doHVzR7XofQg7Kyr01v5yk/JHJD/ewNO53iLhuzhC+gZ5pfffvukiz9YWqF8qnSC5jh16GIoRglrzHpF+GmaaiSC3Y2vP24vmWMOOHZ4KR5A==';const _IH='bfcb4148c5f8a461d91454453f8963a9cb61b06ef6e41acd10ecad632547b93e';let _src;

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
