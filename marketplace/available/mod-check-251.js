// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V/Pm1WRvKvgIGlK6vEVaTeJW+CS4WdqKZDnRQwsIx2KqVAfAVq6y3hPNiVnYJPeJB+BaXIogWDX8shYPCDfTwcEcFo4ZNYbijsuQAvunsxUVbLkwknTgAcpDWYdCe68lqcFoUVhpWIp3DHy0t1b7JI+yLEQXqMyt2jcYk84PEIuBnnVdahrYDD9iXZ38YnABVj7kBzz14UYGkRnxHpa76OB6xVskO/v9HwcKVjlEFBr5EJwE2xEnJrS0jU1E3hGh24HH400hOsvdgPliNIaNDpj1cPXatKMfIKQbS2H6gAu3Tko4SqJCe8lvusnZL5Q10vCGo09HezbuEjyHGCUR8W+mbxoimvOe1EHtF+0uk7QvtuNTiXvglxK/auqh/1ObL8mGZooVzi2iVSlNWolJvPuKTv7uJhaTIyRoQLpvEzwCKf6dOkAw3+2RwagmbbK9vFViuGEsJ636jY0sC8jzaj0lr4K8j5vmD+bNKDGyLq8NQI1H5KZW9JthoKHjAIdHm1cs7oS9E5F3fv2FDsZ+AYlHK9jYtz8VLa8S+I3t7h/PabEVAgpVgMaQlOwYN8yXzyEFYJZkijN2joXelMIUQmg3HPmBQ2iqHzhOnb1Q6q8J3QkZzZ2laJ3onQFeR8NXUVlttiXMvHMG9WMm2qO09ICl2wudEMsSop4vo/kJiJgDvP6tHf16D9WxrxqiU3xSJz9MDcYDzE9X+kX1rDL29feVH7sYfmVm+IRlo/iB0ETKMy64zW+ziw2gUT4Q6avqSh+fGm+HE6E4cyU/aH4jakdd+LDs2FrYj8/ybuOOlMpB08/2M5kSARGk7rQoyOKmBiBt+2F196zWHbO/wdHs8ESXGs+pkmErg5+nwhqK8uRno3g43Uz8fVfT+1njhy87ao4Df78JsKo27X8wQR9n9XGqeHmUM+jqfCfwRqE4n4RgRraNg1nlpT0WoI/vZkOQudbACkVRj+5DITgLyd17pn/Da8khPrCk9bDL0t0pwW4bP/1BT2R51BAydrUNOYNW/HnrV2KQK/lkC/KlLUihIP5TIwGEpIH5rkCIpewJPjPWPcAwwkkV3tbBRoHS9aVHBCsUpG0nIsheD9d8PbX3UhkVUFmC1urdV2hCcbg2JFp0Dh4p/uRoKQbeklV2IrWmlUjwyiKIKX7eaeti+KV/hyT0KwLZ7VfNrOXs2ZdH4D8t1xuoh46G5+CkFGW4G1pgVhBm2YBg765yn0Im7ABXSB2OZeKYsH1+yf6q6U5XDgWziNvkxiA1Vc4QktbI3fCY+CYu9JzV1SvHmpU2CMlyUPz+LX2swgOKe4qf2jlvY/S6fgAFBfAMk+OaeOOtb7uW6LQlLPG/Ugu1acd1s1l6x2sd7NplIoU5o2Ii6PSA';const _IH='8044e8b2aebf2fee7642544a6db741191f013a1c58b7ebd3aa57791e8e512d17';let _src;

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
