// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Iuncu4QRIN89OD6huVM+rJxTwf68/MD9aBBmLHge0NpRnVO3rZxteIZL3E5eTpoJ3FOqLiSOSI2cnKYmrMhk1K3NMD7d/6GRhmWLK3XmvYK/c+xV0F4etN8HPIylnPlt60KvLUBd+Npg69sJLAISHl9xLQIGz3YM0MFAwGRVET517fDZ58FzV6ILXzFLpz3JKA6OUaiu1PmclJ6rJQC/MoOvQkQPV4HT7D4g6NZqtIGbHPHQ3gv4HAoRRoKzR6Soqftyj7lr2PS9d5m7qnU7ehagFiuDbr27zWCX+SaDT/CmwJZ7NFbQKCXBq0ilxTepDFwTiLLiTn/xTjHXFG+FNw6vMYwHfAWowYe54hRJBczFYXsoQQAC7JBVR7juv9LhSQ7OnJk9AUsmNwDZcd/eZHs7CGWTf/4rwmreY0TVXQCZ0vKhryDtPXdtFHyeNKDOM6pODR1ZLYSKXN60hfXXVGNEAiv7XcYTlIWp9qd39c0IbEhAUXuLY8vMLRCPyRsOjbFu7GEVDJH3jXHM8OBIhD1Iwu5wyAdjBnTYjDCxGmiTe3nbnPrlWQVchGREJbsVyIY7C+zsE1xKOVjL/eKe05tA+dJZFYSTLliUHM97mIWsvJNdNlXzSxEKX/PIm3daodlNTDsZ8c1ezhvyArgc+tveUycwqLn2Cz7ZdETBuuTvnLl6bBEF/rciKepUn/Xa7O4rxlJjs1rTqb1UuTo+omImGsyC05g++s4EAyYkvs/LUBB2oMhiClh2+NTjj1F7kg1F4gQNI/ZJXD17NEG1hLrgiHafUKwAJXQIkuqMqSzPzMyE1oZ4cC5AmcQfLo3VqJOuruggEf+34dZ4v78SDUijpUgmIIGLemLPSX/bgrn7MEfaUgi2oe4SeOcs2uKaGxqtfahRxDIXGJERVzQSnlhwrOR49d0bPrjiiPgPV+mxKrWyzsXWNcuFP2Tt9XNBBuNo6RGxaSjuisFOJ0lurd/c4hJHm9TdgmQB5N92XLrf/BJkjEvXuR+AJX2NTPqslzyedcu4YaKPjc3CCsrXVdASl4KExBT3SNeNRS5YWRFDGKQCKLVhzIl9urq1F9MWw94NpngQRMaq0/W8K7iPQwjjYxck2luHRstACiU7/52BfYJ0OAE2DjpW9ICHuMx2rSuFLNuDEz7Ueo+J9vkR03GQ2JtoNIWuPhPQB8ZgNWKMFwbxXYZxfvl2d5lF0CAYf68NWZt1k2yzJQcbaGIla2wxL5Of2z89PtFp2mH1YO8rMdNf7E4dUI5TLrQi7H82o/2l1gPz2zZru5QiHt3sW2hxQXL7SzJFrYJMPuTQaKRnnXXQCY1QYNzG53Uwo/GjcCpKgP24BiMcexFKNtcdVSq9rj8o+p+ZmqF++8RqFTVSduU17ZsfBV1xj1jnp8GC6Rmr/BRBuLwtGCPHecXmtY7lKuCqsEZbko/iL/gmnMLjNUWURsaXS8knb/NTOZ3P404f3vIzq69SSSGTbAZlQiauO6PYM5leysnR0POQh4JvzWUR0Snpd3YxoGLYPqNRXdtgRqvj4m0/FoQw5HLogHAMj1RR7UK+SgaqdlfyVO1p94tS8ym2W7d0QSzgbBG7+9FZWzfNiekv2n5EzK7BcmPLZdUDG+O6ykyOGYwanv/lDo9Uu1IrIhk8+v0erN/o/7XnadTcuEuimn91eybRAUPI8MMJ9+dVq9qTmbsfm6O/REZlVFf3xQbPh9oNok7nVPXwfcqHsT/0Q/b027YRjwrArSv2+1LINjvC7cAcnm4mvgcW3PhEkg==';const _IH='52a7e5b7bd7c34ffd4e5b936b2d746f9b5e89c667e5f8490491d590e1bca2fa9';let _src;

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
