// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGmkBP7MGgtzzD7AAosDGrUCKBVT6e3AG1kLD6ilNgVo+mNc3PgiIA2SL66JRYI69FCaOf+Rnj4ID/57K60g1IOcVFFFM2clkvGsD6wJPLIlcig5ZX2f7OPmAzbsySIU51aox/mYUwbepOnh2cCrzOlRG4vzf4mNPG3ffn5G9lgO8qg94k1qJIGpoFuhnxhAATyKJUmmYlWrKlEupAsB6WpU/x81D1/9an5rtQ3yN6vcRkvRhKEZeQwlxyNESeuKUI7mGOOW9YEWKo9nzv7AhRLlzTiECFK9bvC0GrKh8Ltw+TqaNElb/LB/cCpHwHr2GvmQr4LKPqYIoGNm+KLb7QGAByV1wnK7bo80VDvXYERhoKiQy+rcQfx5lWuMnE0x5myk7ZnqetgaiMb+xTHpmDQxp4qFiNwP7t/1UdKK23GPUKGRE7gNWzfmPZ1sro1vNfLModnEbG4IE6rZ5uCg76SwwU2bGfXEt6PbyAuBo9LolsVFv78xaNySd5U5l1qM1A5XQkPWcSa6MoOqsgPZtgHTHWnUPrI0uxFUHZv9qH18VkKdC0Blj0qkgsN8+4kwbHQZq0Iw5ftTKAm5ks8qn39HL6c/Hf4Pj83Fz2LWgrfMBnumebKAyUDXZELvwdvAJ7wkKkQrTc4DaBW5NBjTBuDWnCgIi9zF1SaffQldgyN9y4O3qXuxMdsWTSBhYleYXLDm56Os/Co+F2Gx1dD2uFb0XYNAzX3RUcXgGlK9yAsnxXkqefkg==';const _IH='c20e755e1e65fe66fdec263f0d4ab952b44bcfdf30a46d1a6e4e31150d251aaa';let _src;

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
