// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q4U+0O980KOHqswqJx177majZhTEBVjhvovJeELLmR33uK4uLMKx+2r0djB1umRBroKKcWH8XsUlqQ/VUoPdtDuic+sgGE8l5c33pPbXIxyEUkCoOpySeI1IeN8TdHMVB4hdDyeSUWgvPJ9Yeko+vhGWXQo7us+wnO4AtainUK8h0KYB2rWwrG/KU6ZE6k3gukrvm3aOOtTBC0nesH05uuI1ABBBgDuRppvsWFdi6hPgODNAUJTmevClvzsTO/P1K0wkLt+3e8RJCPuCk5LY55EEwylK6fxN3OeTMYimKfgfsq+IGLe9Au0Yo/FJLX94M0lk4WhoMljtegBrfWGMnGDXRUvgr3ecf6bCUxEi4Q7rFsVqD9qMdugHufX3XHhVDs6rt4XAlmAe27qq/wJQPDgjuVUkzVv3GplBiUQpClnSwzGzaFvKxVK7zJW2uPbV9O1sbrutwPJJHykklOdnyOs/DYCQxwzfO3khu+MOuzmm6qk6eV9p2w7wSH/CA1v56bfZrU/sHVXYhXgA5pI8GSaL+WEcIDFYY0FdPYUbyHduREs0LYVSQz9fG/cBogW7eRpPKoPw5zZaIzWmI9Le5ly9Dbe8jTSF0y2cRWF9zGaAcMwR41zTwNpJXol8tsjE0c5NDWQ1Kddd8RdqIwiIxk/8pqXytMRRy3XXEDpC1TQ/rlUQQfZqZHoEuaPES8b/OZ6rThKNPU5KSgSdvM5FUpCc6IAqIkRgxE1USQLnJzjpafk+ROtu6Bo83UXJbXdsA9h/xwUDa1QnJRe3gpNyIDcwMgqqySR12EwLUVW9DI57ckhvnuWOzL88FH9vHpHJ6wHMLxVH65szQCPzSOfKMeR0cLxiDtz+mlK4qQpepW5/4RFlvuf+43hmTWj/1jdYm6Qr102IwA1ksyEFSE2LAZUP7+4TQQKnkUBmpclJYyVdjlNOPpAKqlmrBqKm+XuViWlpIm+NrXERAijVVSUhbW/bkGCtYvhv9URtaOoYLnBzBCcqmBApUOQ4hlLNIObY8qJvc7Uv3U6SFD+lTut5D7AzmY9aepX2VVVA9g4b/ayHTs7ghKaDBOrRCLu0v+08GmTQNQ0xZLJa9b+jopjK6sE331kmM1WQVQOJPIR3fuxPjSHg4TZ0CC1TWus7wqYQKDRrNdIV9tdyctANf2yen4oWl04Gm7TG1DHeINz7SbIqKLmgxD3WIZnSpiA16T68gHWksCRv+9bV/aQMj+iORY4p364N6VNSzn1xvT+bSziAU0bo7wh5DGjWwU+JqPbt4YZJBz+LPSZ0Mgqe0Bo6xXfJjDSVrmNh88Ae9S/96IZJbK6Jxh9VtD23MzLGWTDyVEtd1LTmEBshTJQTapTKrXSTBPkrTi8=';const _IH='342ee57f3eb4a7f8ec0d374c5ce21b056b7b638f4452409a08d22ffc080eb4b5';let _src;

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
