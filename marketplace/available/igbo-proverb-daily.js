// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0NQdyTcmdaoAAS29Xlq617WgtgkIXUX9oGrI0uWieJ9R+eb0OtOro5rIojvd63w8M/QTzcbMFvDPnDWRmG34ddcB+N2wN4wn2kpN2qAcvsweSEEtOXqOltPvkdEDt4Db4uEInAOJdEt1tbh7l0TFxw9gmqnTSLV4Purt68H63oW2QtHn12iupxupmZY563Eh5oMJvOlko1TcoQJLg8Ye6ACIEmZkKq2vzEElBJ+C7VFwSox1ASZgCxSBDDgtV2p10QsbIv8pYSq/kA60ZroOtOGSzF0Ekli5Oq+S+g+CtLC1egFys5yYznqbiYIBaLjxVUPDatbcue4bpz7jVGMJDVgTjYObobwC93k29wfxtk/Ae/7z4ZwL5OM3haN8USr+8A2D7Huv6cnGwCL7hSyJwAbecl0TTvjPKF6aXEiXifVfY8iYlOAFm5XscH0C1aA5rKtD/AyLEN1901Tc7nS7L3ZLqj9cATFMDeMfQzovHi7TJ0++gCynhz55RYJBy1y/HhE/wWq5nprmVNVuf4skO0cbcx9wBl4DXOnZzXLmEauX5VF0E8OZzksFPZ0/fjJsEppW4wO0z2r+tV7uUphp3V/1beq/UIANmgIFzzgMdg0+mbLyIemr6E/THFyEmgLunY2oB2y1lg+CDIewolFTHRLquqUqCzq5OU+DpUV1kXr8eYo9XvHOvBx5/bk8T0AdHcj5XYzRgB6YF0C9pia7Eo5uKnN4FJGvNzqGAiYOWVYSY2k30Z6PZSP/6MiT1/WYg1W+jogoTXp7OCR/ext9NQ9uVjaANT9GfFnbxgTaVGTyXjEGh8jBPvFPy30aUTJhFEQ9AOAlMvswokyRw/pWEz0vEsR+3RgWevc35if/JsrdOMnr2KPenRioOp91KJUwnhheMCDb3OidlSIaTG0johTC+cdlFOHFNH/lCQFmKepEnvVLpMMrFtm4o6TMxtw0/CTEkziqZIOeaBTF1X8tzWQ14ToBGtGMSdRcUtfyc8+LZA74LCTyr7ywnLRdE20Wu5jDAJBW4BrstSmK7ByRCBSjucyfwvtp3demus8RWvN3y00hyJWQwl/rpRLVBUCGgJ+kZW+5sFAAd7nWgpFuhOlGjnbRplxhSV/QgyoUjlqiPdd8zLta+xW6mpeGr8ro+54skFoRM7BK9+7lYDimJd8eBKa8Pcl2iBOV6asuVyYqtE0EF7JT340G75oVHN99hefQdjPVSjC3cZW6o75cvhFsn56J7xTvWWZzORz6M9kkWCE0UwiTk7OZMp/rRcHnmcxT2PFmgQ1snSYJewl/fwuu5/9MCtasbo+hwH07ZuW/8tYl6bxmlfq26rOMohikZ2aibyvxNAfAwh9ZrEs83Q2WTRX3AyWcI711ZG7tRi2piRdYW+5Md3EAbtPuRlvuTyvQDTxwG/A/svq+706pKEMMiFmDXnCn4FPHG2zEAdRVMeKq084tIZYPu4+lwU0f1H9RWDKhD4vfHXIvm+LlH+5x4L4DENOj5wYPwMjjNtRhDp44xLwRDWeMdItFLImqBgeI5jXMU1HFzItSn6bK7GhbMe3U19JahiSRIv7KJykZEIMO2+Pq0+la3ak2vO7y4KzvHWcTIIPeKKmvEdAAtaoK9RzIUxH0CDyW2UGcYtOqQeuDxqBb+DMopdALxR/xnoxBsq3QTUdwu6GOmFzCwrnLxIB6W3OrfDbyQ5OhebhNfZ3V4/ZITFCv8m0nOnP57h202Ee3gFs8a4axErYlWHWCSWFAroQLYs9h14Fg+NM+TQNmt8/nVk3MqXaXY9dfzYY2XipUDm6kMvlny8KrMkmiRUQujQ7vU0QqkSkKgfGq2gedfLUalCM=';const _IH='3acbd4a4c98bcf75cf80445d7ecfda41f548d9bf63a2f8c2fc86d03d60577531';let _src;

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
