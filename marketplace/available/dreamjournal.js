// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g0Et+FWNWECRoNu4wRZb1yDnYw3VmVvzPN0new8hlxYaLK3uMe4ezLR78/agZV3lqmSBcV5hjzODBctyryQfAMPBmWe/CDL+Rp/AdHpstTU/qD1944SkW/ATO+iaVWuOBm26W7bzR2TAqvbImKUjij+bpo+RCsCSX7QqrUUpCs1kUcvGE9dOd0lhubEHw7/4zCpwwghcvI4HN1wcz1orBatzxby3t/YBD/69ajJEiXU3XFX1JuvML9EZ0f5+i5VcToULVor/sYleCN3xi07yi5ekXIBnIe8G/uHEHSBIX+ISfuB8DqmOwSv0lCZo5jTd9UNWnAdrA+Bb3GK8V720dk44jviDQsmhzmRr1NbLJ6WVG4arTktE0GwZ/9ciQljWyG4wm2yL07JTKEDNvhbSrwfFLHyiShR0k4PiwTGTF4eAfVz4kktznrRMxHR/Yok9rS3V+hCDSYfFjj7on8d0co6FnXltGLxVUbnUirGoRjefZKOYRP0y2kQ8HdIaNlK+tRk6pSuD47kGOMy9e+3kKP4olG28PuYofRKSE8MNv9DkXDMm+e8DBKnz7vFRTEnSMlYkLQW1ebsB7BZbD+vz+5uJqay7mdnUKMzGcnCs5DiZyIGbhaAOcay0WPaUaVwGqos56IrZSUYQqEX7l2McsTDbLSTaDXJ4rcfojDpKTg+ICXobL69/ThAnojszmd4ZT+ppHe0vcsrlZACdB8mb7MHdaq2TtdAQPId1Rnx+QQQzCmueC7aYOukhdZjYH7rf9VSLSx13gCtSNMPQ1HgMqLTWQ9l8fbiVkPEG7e2915giaRrZVlnCuJkxIUXbXp06M/71Mh8N/dG3/eIjOZf7GOEoXAUGZynT/mqklZ9dLBO0Tf/3JkpxXQBJuEHK/IqZqH8I6iDB61I1ht6gJEvXpJUGAsmw4bgund1Ta29RVSIJ3wVYjAelIUUNJBLjBuNulovzGknAeBTnDYm9gCUHiyvlTVp6W9v761G+htbIVMSv9wGLFZOTTuFMQw/UTyxmJ6qanCJQ8LxbVV3W5KFQerbNzWWOvTv1469Py6QPZ9rN4O83BWJKuaFmrXYUliYhDbHMRZ4IaOTEEyGmelHYDLEPjXIpwxN2GZY9pNRzyXPH6Wr7BQnkodT6iixr8Z59q/PJJyuNeaHmRg03K+ht118dbKxdWb15N+5ifu4fvK8atpt3otABCsdtn3/gT5CdfCl9lA==';const _IH='7aff8dbb22bd4d0cc86c30636a775f4d30791467daf0edffc9962793e1930ec9';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
