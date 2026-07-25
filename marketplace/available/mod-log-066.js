// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQq1s8tAGtjcwvn+TZ2SLbGUDXsPbjy+Ts1ssBruhwjLpNJWLVsDTIwi+dLeTPASQBPUWrsmmXnudu2nMOckY/VYY5L11UDr1/IUeXFk3uzkWEkoHniuaJvP4k8QwMRe0Pgy/9SmmPzZ02+w7Bgak7hCsicx4m3TibbVDXwO7PQRd6RMm0hxkn77n6z4GiHFKCcZjO9qkNtCrxIJF9LIoJrbIbYbe+unFeUKog+YELZTyH+hsvXrxnU5krOFHVWf2yGVKtJatpBAffilNiP9swrxeDC7ru+rwSVgfznooknFZNemAG1lcpZduWC+8ZbZd2mrawvKFtVb6PvtOadyWDuSz1mzFJLTdXz/Q3F0FnUnPFN7XneBewNP39umVqrQV4r7EnT5HYb0UetNnZKJcqQ0cB/dNWFzgYCAgE9oB2s4VCsNBonVOflO1YpBHelQQeE52Cim6/8fLvD5U9PuFJ7nxt0Jy7em1BW+fVSK9ZfwTuKJALP4Zgad+WyMywT65Xzes04vwb/afmUbddsArLK1eG546Z6Xs7rY0fReDpCNVyb3ACMmJmiKzqvrh5sXtVteBOUSYcdj1sAVfqV36DdkY6Z5/D3LEOgZ/Xvw4YycPzAChxbxSNsBKxlTM3wTb58Wux3MrhrMWJ5U6kVbAjbS20soz0EIkFeM3FAwUqWKeR2qxdwy1A19KxGjM0imC3lWsfJtpPe69xhal1L2t7SYT/lChZSidxmi3gGMU9tAnysf16U5zX9d0TcvMQJTXGrt2hJZbaYpgMnidrp9JP0K15x3UeGydIgtiqKP2YxHmvw5QxH/INsY/6fvt/RUy3K/ZKi4JIt4aiKfYSXgEoYbNz0nkW8I9kGAixa+tF46xX/ZmtOxDvP9YHbMzuUy3B3Y0MKSpKb4kkn2AdEqtt9vdFNAIQiyApxQVf6zAMNn5Us/Gm8FqketXg7137d+Y3qjYyYGexj9yEmEegex3qaUyyoKCD+xBaQlzI1mr1rXPTpZb4bfuCw1qKNMxEy7xFSVTH+tlEwXPZTX6AZx7exAvkhyDh/7h1+JxAgS/M8gI2732D3Ytt3WqNhEcnPGQ8+5nrCz58pZUH70eklCzjg4rz1qXQGKs/rDPOvtMnqW0te+KXYYaP+Av6XLEVUKJo/Ozh/EYX1b22M1ffFGkm0kAPH35QvhC2kVIWj/I+jWcaPs2490d95MC56hED4yJsc2NApEdOSIEuDOG+d9Ed151UT06wW+JfAcsMre3vCRD5kob/Wd5SOxY4FzCwYlH+uG/2ldhHKxFxgrAij9N01XwvFEo2E8pLTMpX+w5sxAZZ+xbk1RQDpInLeYzgm1ihT+U+xow==';const _IH='2cfd8b0a2d3bb247dc2cd3057ad6e950754d8d26f461a38a2c10aa30b507aabf';let _src;

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
