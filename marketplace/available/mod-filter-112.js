// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h7i4G6oOJ/KJPY0PqpuBHxWzQvHKGf63O7ko7Ab6nYSNUVaQmKMn/xY+CStHjKm9B1MjFa2LjqSd3C1QLQw4E+qwqIN3CjoJfBQz02VmIUn4xcNxPT4ogiXuNW0fuQphROmCuGVZZhKBgRd/wgKXfQEayOephyZp/hSLa0zNrFCTjG22WNX98dvzEtUWjLpJ+WXvAKY5gbnQQ/BNY0749FQ5SsEXypH/oMwfpSs+JfQXeX/MSSTSs8D/cMdfuzScxAkI77pvvbksuR6hq1i6zLUkzV7OvwmqHZkVqDqAQ+gVqkjmgjGFSoD2ScIp1sDhsQbxtnoacD1SeBpM0Gy2lvpdn/EyvmMx2ssc9JEVm3wEs3XzPHqfgifKLWve3PJVNTrdjLh+rR0kMvmbGXhf0LBIChNLk9rS13Bf1y5j/7g0iGLeUnBO3Fl/hjFQl2ZtsmSl897O7Twd+lXtLhkqZV8X1B2UcmTob1wjRoxTwvX+LkRrxUT76IlG1QxX/ojTmN9bXdixSCf6P99N7WYTn6jS/W/IMF5wxTVKWcUaLDnM+fQ58MfiyhpxCai+sOlGUJL0PE3VPHWfsMtpKiws9Q60BHOkBFPzWVf64v5JgfGjMHFhLiasBRg3M5kOfhGzbAXk3yMAnBtM/4WyhEiQxwfV1K98bD1RW53eZPF4NNWQpNDTWtm9ES281aqyfQ6bc7lg7qa7EIOrgvVuHcyzOLVuUQ/s0YaMT34LGkFyOcMWpPxHYhKlsjN7Y9yudBV3LFMSTzPfzgQPsZ6o+CxgeF+RIvq3eEyqpkn5WaCHJ3I9XzEGJVpP1Pdt2l9JGgpGLQQt5R+hawkwfFxN88NwVgs2uNhxGcBHQtnrH7r97/IcxoRC2wV8EP5Lvj9TTW+CTNn0+gD3KWd0KPdANLgXPCiUMFjmpW7ssaRLGVsk49FZJ4XHwlp8mcvyF2eLhOZwSHIExITO8jo3Bl6sDtPMDsTck1EzBdUizi+Y5LXmqCVapMmT3rOkIE8yVm/Gx/CxVs4x+8gmECRmeWPS0SxkpTOn9W4Wj6tcE588CNkFURxV4Lfr2sE75h0V3UbU5dLbLuAvq8c2a8TxFaGImtCo6n4tKJuulT/HqO/qNF4LBowDLpWrPXSoGUpZLaZA5eb1DGKDKduwz9C+9zMlSeDlqu50FGL5uhkh7FrV6EX8Omn+Lrcga/ARt89Nes34oh4G9xIFJRTTDCJ/fM1q8S8/1561Gs9Tiu1bdimP0qt+TqEwK3PsJ5dEwmHj+bufGeNRO0Hvs7gNiulVA8PdzUvAB6XLbBHMvm1ViRF/uT+ezlu8tAOBT+XfMUUuCkJZp7KkfWKzpXJ2gHZ9Mc8rZf3psXorpJxB/T5RJoc3y1dpdDGdWvxV9EfEUw==';const _IH='dcb09a519547fe27abeaab7b3ee3a47fa85c785b205c934313b7d9c57d8674a8';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
