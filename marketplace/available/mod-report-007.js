// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iZzRn8Ru8xMcLmZCBHrVsyme7kIlzXZFA+giBQge2E2o0x6Oc7tsXfq/o+yRg5DejPUX2b/DtbynwhQryg640AXROwMZ9wuewfa+9GfldKvBtgoWb2DPLoKoW6rYMwT6yK2MQSE4JHKAERWcShKtdTMb0k6mHBESbPVaHfz1b/ty/XLYE+MsvLYpgh/w+h6nj2qfRCKgXZAbp+JqSfnRWzREuWWvkVtaAmV8BLCw5MAkrUEUTqPBXiHl6Gyumf+S8W6115b2CJpLJWeZUvoX/1FOZ/VNa2ND6FRSiDcxoosXdLoiiIgnd6Yq+JlOzx9MlFsq2AYNheFmEJeawWJD0r6CHegPRdkplOw18Mr80nzuh2h8LeFnDt3NwEqBUuU699Fdv5iA1tvNRZ/e0ujMScpZvf4LLzgbfNaNcy4XwGBcdsFQWKqlWMFn20SvHY8uyxL5CSGklwEuE4kotsYsjuvGGf1QOdlGACmvPaWB7dWrZBVRdAndGHBpt1dYpCbjviBC+GTsNCNxJmSeLr5GviD07UJWAsnqYZFqMqf2nHO5myvvVhRP1qJqKlIN4ZBBZrP+RYUhPzsoJEmaIHKXHTnz/QfpwigVltRp9110ZAE6Rpr3LdCezMQKo6hsO1uFqqNu/8GruCrSCfLKMeafFWTD6pQZQU20EpCRTCnHPe0lTf1ZEzN0LABPmWpyMN66sh4mO+fPqJZ/1lHL+o3PN8mzSC/iPLu5aADAZGVvG1shfQlwW1pnja6LQbkUr241pfCA9qCHtmix0bSYreLnP30MnZ85UN/BhBunPHAAybgkZrXszMwpFWbZbBeY2pD0IlVbU20w+MlFoK7sCaWLPLZW4H382xj/qNY9NYGfDz8gS9d+NY8z26hZMWWHIMFAROY7FcM5r0rdeZ1qPjO+i8jnNwyTfQMZ1s5Mejc4zmundD1llSVLnQnoFQDAVkHcblujYRdK0Uqt6NIBPVEVFfJ1PxlCPhun+ug0TbgGIdF1wJZiMO63+xQnNMnTWOjYPcv/9D0xmaILJ6LEyimHOJrlwDwyg8fa9fQsVXmXxyYPqypzampYcRMnOwqPGVoBzaWLTQ68OVZ1ektfabXY5GcdUxFyIXvcYw2wRAonH/Qc+YZMH7paJdu+voh0BHEr/26z9S1o54c0ZbuMBXUmpi0qKgArVdA+8jeE9M2R1l4MTo+1gpxC2X/MdTbhFqQX3jvvFqoD7DkdIb0LBssfznvbE3uXptttyn1Q8TYZNXuKqEaezW06n2hfnwnzI96Q8TL/k6bJXGU64eUGpMTZ1SxIPodU7HsIGCw6TkeGeSmVsbZ011wx782zdBCbh8pN1PMc0e6HndAokGRZbezMcLwUomKZzVaGu2e1j1Fq';const _IH='388c265a43e0c6ef79d26377f1328004a7150f8fea795686747c7d15f3e00887';let _src;

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
