// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eCVqD3sup6kxvsmyWs31sluzr1DhCKPlET2t4ec0p8G/Bx+fB1lCzgLKahcYkTcZtZ0JdARJF/XZ18wUlJFG+Bxx676arRaziN05z7A+z9kqwX/9SfXDbvs9bL5W17mUCbCNd9wTVSr8I9Zy8ry7KLTsxYuiVLm0HxubZ8KArzhOYFgUw0kIUg2QBAC4LHnNvew26RU+yPbyMxgDqbO+QRj/Y9atN3nKVeTcYAn9zFhrko2b4pSMDkoPnH+8pPArIgrtFL0VkD2flW0zoSGuquyqFq98FIWTcAaRvcdzNrrQoWXTizI9v8m3VvW3n4BY/MDmhLQcnwh2nYqkVQfuehsj24JSZqP2tH/CwKCtj9sMxjikcyZdOZDhLyYz8ckiXHTfRRmU6f8Q0t7EaGQTQ0qR5Ldyx0CpfKPvMbLsKLRCg434YLs9ShAsfhivBmhyLvBvpXhTPmLQQgPZ4ou2hIiSGgi6enOgm3uTZIaZ4DnJWLgxkSwBgl+2nEl8DygLbI5ohw0bZSJqEGKsZBRNfIIjGs2pzWVvJgfPkdcdXLA7zwdBWIdlK44fSkDUQnwTgFgj0rX95ATfTdBuMcmOW41l+LfEmJiqnnSXagGDxNHeURCW1UwUVokg1CuvGNW8k1PclZJUXOC1rT25DGPnfw7wIaHad8CcSZsdwFUkZnGpAdSwpSsppa404f6Tw93ve7mfeZWOKIRohfa1Cg9rh4SB9pnu2S9G3cM2onLe';const _IH='2a0de69ae3d579f245402d0c5e0b9594556d753b3973f8c9ab77ab6dbf4f7d3d';let _src;

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
