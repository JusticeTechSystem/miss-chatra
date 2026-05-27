// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FxVo8v/8R3lKjVhETwyprCiB2r+eEuehzbY3KqCeDXnb6zjkvvSxiDwP0Z31fmdX9gvqdAHHh3ByFhl5Qst8i/0E8y2OgZLqqRqa98EqBLuEDQsU5b/BsS4OqOmW0er1cfpeUNAUb4fRy144iFUQLX/1+kGpogL6kq7iOIaP/Nybe+4Qa4a4W9G9sLEBH5/D/i7Rcn6ulsYsJLBXKNrHqtaBfDk5oQw+zG60tO2Pjk/emYXl+btT0Q29f5DmgS6oOJ/NgAJEqHrxwWRbUASG8mA7gyjqwJ11NYficw9eGpZUL97moFuy7ZUhW/80XqZ4m8Kj4gQELUGXuUiEsSQlk5isO18DqxsgmICmCIOriSdMUMLAMegtxsMgRtNRI9UR8UiSCtKpWwSjqzMoa3c85jjsDrb2aOfd1FrO9JrLU9qFCEyOzncgLqI6K0CezkwU0diQ6yaPy75O3GIGxMANJn7K0eJVbfUmwo0xEozZgjWf3EdiDcYDlv56Oy8XkYfL1infq42LBb8NAZ5iAGquBejGMiWLfYPKCcSkeuCxqW2wPCXvFuHm6zOfF31SFSoI7+YS6rWI2FQ9FYCefng+BgpKQ8nmnELJZBkas2ksck6TrsQk5zdiYOWvmYXDkPo1By8HRJL96CPdiqrHidxpyRs8aYDXsnqIOkjXUtcCqbcDAR0QP3y2/8qzuhrLgXjM5mX30VQoR4ea/84/ZtOgAtuXgnYrHzOnI2jaYmgsfUn2KsfIHildRrCheuQavEdDWknuCDoX29LU+dbbKq1IMfpndXBl9owjba+SkYHdCRLXF08EkAZgY9WKgGnYTTFzi4zyOBwORAP4ei5IoF4HGTA2J8fLe8NPz8YkDf8TjS4lYqNMX0sz5KDPIv6fV0pvnmg5+UCXzNB7Eu1bQ5XeY1qXHgV/0bd9JUc/oTJeHyVSkgaYWYwqQYU3MXi1p1/5u6DMDjRlci6zG2ji7EDSI0KQ27h0cWiJ4L/eRVL1X1bXDp2li7xiBY2lFySvFRm89Ky+GmVKK2yQtiDjUCv2qiPandUVeYJfuAIdQgff2X6cvg==';const _IH='7433fc7741a0ed7e952a50f59c6c0218e0733df3b655bd518b7593d7afa7602b';let _src;

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
