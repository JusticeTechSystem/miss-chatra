// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ldu+yx+QnsH84n2+N5xVHprhaK/Dy9iB16bSKtzDDHlYNq+mjEgXT/I2y5A3IJPlvW8HKKQGcbQJc+Y9CKYb3Lux6A6XVR+LgAkEVyqGs0CftjsK1QRZsJJJRZaERt9dfSt+0HQ/Ne1f88WGPpOLRoK+MLdB6KEIFFKGrHHPwNoznDcGM0eFYfz0w+Sj2v1o9rbASHqveBXGD74SLxZ87A3IiWyECTb1E86jjR/GpdfhT8oS8UJJtULpRj2lcwuxMi58Fmv1OZ4LjQewF4gG7PAKydXflvtGFRloGeGbDqbqnyBQ4haJkgCt4irkLBNfw8Ykv6MR7ycQ0msFLxXhaDOeOsV218gErTU2LVw8V79TqxQENqI3HKB2qIVN4i3wPqDqMgE0mGK0HcWSHQ+CVw2OwBqsxKPheCyMNemxxcTamvtlZmyyyA0d4EHaBBxpeYqP3ACpRF/hm9TFTnewNox8Iv+3Pi8ewjHyMnVsTjLYvP55jXORKl762N/BTNbOiStcphZELjnhvtUyJk3JeJ/i+uW5n2bfdvimrW3UxsrNTeZT1ZVkVveVkqRuzVs+6cU1qu3a2z4bam0Ne25N7I2eY/zD23o6krIP+baRUy9lWC6fsDOmQYAV49jHpDwvFVtcY4yzr7ssI2IGkfsBUTrMjlLe6o1AfeRQQ1s/zlqc0Vwbhg8d2pXZ6AyDrYoWZ+9MWXPFAw4zd172Nkb+Dk5o7eVExWIXh87JsmI3wu5YyTKXaiU/KNiYS5+u1bMIoiMl95ppNhTOyvx+MFAi/hfe9W/hYpUC0o0kaqkVhHKihUd/qcraWfC1lbo49bODtjtINNWwiHmEysQSdu+Pkqa4/B/Rm8mL+GQ9CM93r1VL4Nh6o5u47NZx0tqUb6xxQqkw9LRsi2K0IG+MfrSOxd1TzuNofOQ+KuadokqnGWDdnyzjLPn2NmtXL8yZwBxaOfeS56mwk3T/3Bwk+L73G38bgf/idIoINaDGLbL54xJdtWr180OuvO/63Q/3Zhh1oXzXuUFuJ375ugD/DtXLA7FJ89xw75slK9j/bM579WbKdwgv2l38gz/LhoUaCLgrW6d9kO+yx7YtxUonZgeQRNH79aP8giIl6/nyVZAQC7YM4KCcqvyzqDPFFXuHx2FvY87fpqSODf6aX8eo0eCMP5UMWDGO8oESOhXehAHDEKZae1QhLgQYUCSut+eEWsksPN6eYknHC3CmGtKsBzFh6xGKfap/34/dMOzpglW0rp6j1De6TQtE/WISP+hgN2rAx0/k/elnxZ3GQQazstZDHiTRSAk8Ue6A6EAccSOdiZh6Nzywd+QHUt0jfWByZth+pruXurOT9l64sQ==';const _IH='45662a2120db9003821e27c956ba5aff5fce4097471206b03873f1241d00e27c';let _src;

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
