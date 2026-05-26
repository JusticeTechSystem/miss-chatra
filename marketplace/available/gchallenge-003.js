// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WoSvZRoC/nHnR7nI1y18Boe5uB1kXwG42VviF+g49ioA+13hLw0rwPD/yWlDHwA+C0nJ4qaKlJp9uLsxd29mC6W9f2YdFUK+l0iu3RdwBqN4s3BFmUwMwiW1oPor0XNimnS/Dj2MZraUpnHE7d/BUC+1mNA6FtUrk5kkEYMLXRCpX3dGlB1cpN+iEsnlZROLoh7kZRMZkgeRWVTN53KCK2ZcqtEKT8gUc3OIYNjgtlYnX6sOKj/eISexV/bnkMhwi1NY8u5AxrmxLPh21WMUWt5ov1MSve5grIZDESJ07tCRdKnLyDiB4f9cJZjrcwoojQv0KEclpu2+96J6ggGt8+J7NTV/tSOUQPMYCKEOdXdKZsPMf8xBdadBMvjbkzfAPr/o90KBARDyuPZinTW6ztviPOACS7qCCRYdySjW7tkK0AQvAwAnPSjrcAg8LTRKWdukz4eYfk2B8gcDIlYYcBo2tmhU9moiHOnrWrRsoe9oGeDeD309ykH4OjM3w+SmAskv9Er5tzSru1gtplDJs2nmpLRcBZGvX+oo7Pr06M2lOjp8nnuM94iy9BuEw7kvArOLRhjvlCsK+blG35+BnU+SDrkXbOLHhNgO6JfC5kl0pWyEbHGC/qiblCL5r/d2/ewV';const _IH='6eaee05a6328d52b85dfb7a67f0f4f06f6c367cdd3687d4a0b2677f8e42d196f';let _src;

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
