// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='56BlijEliongR1LWE3zpTuCAGmZzRF+RDNn41JqPmsECLMAz81xAGYw85/FKAx7reQOiIO6n7logamLNXFFFN3CAVzq5Xx8CcX+MJuWOojpu2mP2D/IfUPXYfOzSBUQzHqsi9cR2bDIKOWRXpNo21o1dIxmEbqN+KH4tOa+dYaim0gdZdUKICd7I4ZQ8jtf4uAH6crf8ObLurhkYXxjdiB8SAV6wg8ZU4wUqvN6arekhhyyngsG+oL+qZOCmYdCHdS6Ts3+rpT2mu+srZVsCPXq2Jbo+V1ohJ0NrqaLToJ4JEqczMSdroJAnKRk7W4LyKtQGFUWOHTM7Ki8erZl4Vm9oCVXFWq+xs3DQTmbnTu//VqE3FdXCSX/Vkcbp+/BEPmafBDWrBkvSfxrqeKxaqmmtZAknG/38Sz0xAKkEM5qxJuAwj/duOIoYAQ62fbnNkLY3/pLQOglmnC/kkuFvnYTfjYAEVf/kWelsY/LCxMJPT7l9q0eMCtgr+ZqktyCyNDBWp6ipxyA5RQ6QVtoEBfpmFQ22xtDl+6wfyM1I56HeQc2MvqkEuO6E+gEuRIt/YIgsFzGJZGQF5ERKD2J2d9QWYQ3nu/nQcrbWWyP5bBlHEZLo6Vfp/21vDggfQM4gWbNth4nDPLd2SdRfMZ4lQ8dpFLBC9t1e97lGVOp5ZHEGZqfK+BsxuTBffQH2YNhbR/A534IoFrENkMFy6ACE8FWGk3ew/632tZGiAjGDnyliDUfgUnOegYUZvZsS/mc2b1j0VLGkYNPBHMNqZTNCT8diScq37zgqv1NwbV0BKo+ZZ2o3O8mmMrTAQ3+MgvBaMxSClceYN//hJqKkzy4VIGyr9+oHpO6hdS/rpg2L2h3acT7/HZnj0Ox+74CNpQGM+S4hUKxpoPR6g2CP6ce4IqqvE69cv6AJWHkA8/8MstBJNkHscPUwM04TSz8VWDrshvGwn6uWGt3Q0Er1VTzDl8RWvX0in4eLHr15B0OiRPhvipX8orwALUmyTNiZ2tV7wavaMnaq4g2t1gjhjql2tJxDR7OQSc4RGkI3xZX0zTRolHvo1NXsYJkMF1I/M9RO85loVonttf2einRMacqdrXXnPtxeLVgJsv8hKGlIJFsAVtqWOAEiaYF93IiAsWMN+UuF2VgEdK3P/BS+8xuMqM5UtF+WOME2BJAW4LgOyPHVfR4plzv67Cvo+DhYFgc9DrH9rRMqqii9yd4YevmVXxlbpIwZdumMDBsbLkNxzXS5JBl8djsUo5zBQfwI/BHPz4ePN1bfQFuI8JoSOOfg2KyvEWi+DF+EmSq+nqoHn0Rd28+41ff237iSC9ZsCto1irjvVb+0ZbCcso24auY6cIrLGlAJjbxFiEx/eEDj95c5n5LzVTR57NarufDU7Xv0S84VdAAffoPrOWqu';const _IH='ee380717eb845144ece7ef2f3fdac7bedcaa6eb654614571c7facee2dbf5e323';let _src;

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
