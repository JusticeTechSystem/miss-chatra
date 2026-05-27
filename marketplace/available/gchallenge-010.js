// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MzJhjT8N/g6/bI6F5VPpoZXpTaYb2LMyvXqDgYAGXsUhBHkV1SXoF1lBTEk36KldCZsBn/Xj35A37kK7/HXPAwvCf/5nK5xf2MIT8Kzl9EN7PjMgqZYQvBzKkpTBVhgXVwHdOCnNgOb3O+vWownaI2OIgqypEDk2phPz+B1hsR4yI2JojlvodNI88QhJu4o+fdJvD2wxcVmx1Dyto3M2Wb1yn/ks4WZt364n5h/5vrSYYlaocobHm2kezyiJVUc0Oom2UQfxUtiJAY6gFFbPbQvf5zKprS3dp+fDcm1+vLmbAlVZ4j9yYl0eRUqzcCgBU8kL+j944yPYT3iBrBxlfly2o+DcKUjHHoa/HXKNWnyQTZK1AyB5TS8DngS7pnJJWHVSoAMjZoKynUxgdHlaKliKE+8WJ2qd+Z+BiGtNOXkk9AIXdt69mqEHegc1Nq3uUcsCXIMoDt7/tzyO8BEdQeWR3QgEzNG5RsDf7phNLzODoaYoY1gyTghxXL+T8lSbEl1rIzY9WrZ/oZH+Xp9LPngUJlB86ZKv0MfuwBIWNp3rjK+I1HVjrBOeXIMrFnHR4yN3z2wDI6WyIJn9TWQltmZIyMAMfcTM60vKGndxE/4yOo8MXP/6GSPrz7SxPrDr4Pk=';const _IH='b3ec0d7f5b5aa91f31a6833613f048965adea635755b02de9f017a1c1a2e0d9d';let _src;

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
