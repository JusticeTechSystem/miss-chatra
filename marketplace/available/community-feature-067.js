// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9zYBpqm6gWlDi6ETRDk1r3PJN0fGWz3Iay5mx+45mx/cw5DnH7CGoWmHmmF6DzM2EWdQ85Dbu2BqSzvRtfEDQpKenTLnRpQfjCDVR5z86FdcdNnyDAGWE0lA1Va0E9p1Dtm685o+TkGBdORECkTcldfbEfLjKRbI1imtuzzUGC53xqQbvfkCEkgbAQdQI3i0lvv3TNbgGuv1GgrUo6Ju5n2J0twEuxsm4hwSjdlFcSXzphtX5oSXx46SzBMpuHTjR4SXP3j/FkD79MjqmsfnXlz/TBN8EjZ23o60HbevIUdCUyI4qVs6AV+SD+WV8RAkoFMVaMRnhnGcQ8hxtqcBehMJeUz2qz6TYE3tVI2VhtSOdd4arYrM/z83R+A2R+wFBjW5OfcfcjiMUmABmMD6PjOK3/hBoqliXq80xmrSY0XdcHpw1Yw/mkjzeD1f2elinnIphPTHWVXr5E/kCWvE5sZsYcCCxhCkwKts/1QG5SA+4Xwnk0XVrbMRTleIxJuVoxzl0A2ec5kSj6gjfN7fPQpo1dzucZ5xs6Gj251iqs8vbmuMR7NHbr98i5CP0Dw4Ux+ExiQKkpxOvUb2z8AOXMhTPQClgIhvunVgMSodeoslGv34UjtKdxPIwr2toZcbSMtSWGhtRIkglpodA0vYENDMRhmiD4DcfrqHoUyP+iWDkuzi1RW1i/ODUYBMlpbQxaiJY7dkmrRGESyxMWDgV1Zte5tT4yg1717K9jhlVM=';const _IH='0cbbabcb4976776f4435e2b062c69325e3e65b51ca34008e0e947202d275d4ae';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
