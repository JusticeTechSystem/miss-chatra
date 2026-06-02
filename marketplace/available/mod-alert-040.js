// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iOQLzmAYdM3pnL8knyBfawsrJzyloHSKlDPPfaLspRELZzOgVlb57NmfOBMbO5g6EzhrNTWDrOiGY5qNfex5Ra/cDQRYoxbX+ohmUbH1CPEJnOAL/e7L21NNvLaV/gMc1Pcv8cDdMkwLL0pWXuscR1N12pT3l97vXXsOvKiSeYR3RV0Sx911/sUvXZvXwUIsrM2+wpyffk/3hQS6SJuqb3SFKBU5ZI6Kpq9HfTAhxj/szsNmFAopxk4nMTofiKvADDQWdHiIDF8ZBAhpjE91NDQOtxWv9eHYaOmbW1b0av8VSlnCb8WKfUHLeQbbFk6PMj3SChwwZXw/90BZIHB7STszRvzLv0yUpRLl0yxqD3g/MFK95KPdKEpVF5im4bdBQ7AlmHG1WRQKGjUYNADqC6wZ6SXfLs/7/H1Hl78BUWtgTamcRZuniPSE3NIanrTxQgXYyCds3GDme98EJdJKyiZ2GJlVYuHkNdXg/ajeE6dV0ktVWKm9Vxd66z4I9D+qohVf8apksqTdMFAK0zXOkcj3HomV2lfhfPrVfHYMKDewUzRP59U8bp/RV2hiXoyXtGzUsaZ+WpL/oAPGPrN1LdFGeeOF75GkNjUhgA0+YSW+bhdMcduS+p16FMHKW+68apyTy5JEcmcKCAj6hn4bFQsrz1HkAATw8hABbijGfhIRrkqJNZUeoqRBDsGpw0bQCAGXpak+/kEJAgYru2IdtORoaEwbZRrgp25ZJYnXrf20lugsw1gcXN2OxyrQ3lKs2Ewv1KvXzdSSF6vTk6hkoAgWvZlzX9sFgVYtOLBQXBzdnV/h44zOpX3k7ea7ZEHSM7CuPu6QXFDO1SY+J/mVgW6O25F+RkzAAX0+1fu9RLY4i3XBs64nD/Q8RMmq5LZ2ZyrzyqzNm1hW1CislknQCMB49H1Ws6Q6XsbLC4beiXh6/4FliKWnQ/3WT1pwSRyqTFR7L8Zm2FL6MSTKxEI8o8TbikVR/B1g7M/Ghl+asr3ov8WajpXBoyX9JoQu3lSyiRsY5REDWYCK5O6JNns1Z+08xBUwuTGFzpcbwHYtbklFqL/Y3i3kOf7ihj5nS16HPU7NVDgra0n+Azrwgi/pBJDFtWCZXz3tkVo8O7LpGJ02LqG7Z+o6qkZJOsSzAFrUCFKyhovHqPEdIYNWwF3JJNZXfyTL63aVw9qqsxGNwDV0QN4moLS2D+y135gDsQuHDVRMnZ4l4LN02v4TJsmJ1PGyDQ9GR7212wH3p2fyrkScEO847PblNAOePnXruMkANsTT8SPR/ehaE1bAVillAk27EYmeh0lNnzUWbtJyZFSRIOMNvXcKSWuyqgUrfAEmzAYMeBkOYMoRJqeru/az3qdmTdX0HlWUSg==';const _IH='204a10ce9f156d4e98233718b3a614bc4c955ce6fc1797a62ee586480ae7ed24';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
