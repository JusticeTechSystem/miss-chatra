// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9Zl3uNBUps25tGZ+f3/X4kMGtnTmGswje1sdcg8S5IMhBbFN3Dckynp7VzJTpZOG+qFGZhNf8ZsxjRv7DPXId8cOlXYso8kezL9wnw2qzmEU90B5xZFZpGm2XFor0x8PNWhQT7o8aKguE/Uw9AdyiFp6p/x9npt0FloCH0DCx9L9NOgtqDzafDlTSggp00BwK7o1VQeav1N3+jJaQHGJAtdYAavyws9M4trF94FHR0FOGHV7NUqgI6Fcmshpw3WfdloJ4Ap779hlHzkxj7apABrQCU68rmZBj7RbMc9g5xAjoz+2KYqxuUEHzFMzPzHpCurIqumpNb8wCqi8Ho0p9ZrnaVxkMABOgfXtu7EF3l9xIE4SLsVQn1DYxAORQ+F3kggakPUqLfF7TbKVaTL0iW8rxF8SqtfYSPkM6vvbJ0nk/MONjT8ddr9SLLcNFhXhIgW8Eg8HudEm6gCods3WQSKimx8QaEmN8+JpuQxzMcUpe1s/I1V2O5PeTuNVY9x63jXKPj+FsA9hS97dZc/2WwOlKndpF31HxjyRG+9pFYiio96Z3daMDHheXBX0lB1Ji8mQIf8yNIeYe13678Oxo3a69wvulPqkaUeZvgHwPIkNiMwXApLV7khL8n1WwiN3Se6Tg1NbL7Q1AdF2O+3fcdXFysfVse8s/ALSbJx9fGvlOqsa0dPipzcdjJn7Rq7WvGJ/xtN2xRDvvsQ5Io5c39srJ07LqP91AogxwjvJkTUvKa6n6usSvffHE8saJ9+U7guQMgyqlX630RIDGrVh35NqpS+jikj/XnEycIZfu/1iUmNGr+PtmSD3PsOVHYThMsuYCmo4zST4UIeLS8SbYhbI/K4wW/eCJknhjRaZQCU3IuZFowz1w0Uxdr3X6t4Q/PYN7jb2bJKEXV6jxN71tkTKeIBIRVyDEy7QGUU3FqpBzLfoMZ45NgeYAMyjOVVL+4NeFbN6flmDjCljBs9/mF9HqV4V7ineqZ+Aby+eWpPBqaXxRzHiPULCfQHENLykpZGOZDC5MTfmkUadoJ7zy/pGNaDbD9k6tp1fgS8UV+GkBfvvQfSaFhTuHOVPeSU0YkwpbBPrm9uTYpy9WzFYeryQYudj6SADC4ItbVgeDW2OIKeEW9q6II9P7KzLKy38gAn2q2/ciUY180bjjT5Kz+/XtLbeNwd5UomWdBQfWs9z+v8FTfnabdZsvQ1sBt2WophudDHShFPrO4s5NKjeJuqalf+6d5lMOGOCvm2dZPFAVX+EXjFDRy6d+xFXclVMqDIApXvWsgwh5ELpWwnUvNWJ5FYAaH0ecJomFCItS1KwBydD1Th8qef0H8UFCd5TnstvnFcRBhDyBKOD71uxl50TgSmui+B2t91X87VSV754Xx0TYLsMaU+eQYqqdNf4/wAG+LW0rDsXAz48UyIByuePDAM7oG7fx/GMPOrHXPWFG7RW1F5LDFLUQtuJaftjeBo4Tw8KQjULCSJvmGrRGW53PVyg=';const _IH='15b14803deba140e8d9fc4a323c536b1e930fd55c84f1f1bdbf4b1dcb2b88fdf';let _src;

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
