// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r2R6S3ip33wG5+mtb4X9N3GnfvqNU46rR35+aPHWWQ+2bVqTePlMwIspjokoUSBKTAXjSfslLjKGkJrz5ysWQFhukaATfaXGWmwhGfNC2cNSfKl6STwcJetRYaLTBo4StU8QyBGUl0IZOaz3NXJDGJlIYCsvvKYOjR2RJZEodWqLOMq36DyvkFeGkgI5feoRKUsQ/WyTjuuyAlIbcz5rU9XGrC6NpjGifK8fayrJPU4v5zrRYJwGo45eBJLMIn4+aINhh5lpJylY0PQseZ+wUVftdSVLggktJtazW/H83JdU8hGUkxmJzTEdPs3/D5u1LNzJx3pHpqRO8u83pYG4O9vjiulOLoXsKRa1LrFMrOGIJ1DBn8G8nKbR63xTD/mU4P+UkKvsOkjY2x8JtSVxkccpmn1EDdcIwEsjYjQ6UJXHlzN8O6ByUHk0Iwz4aYNOBdV3odOV3Ue2Jo4016ldn8oiJrhTNHB7BBqtm4UGjJ4jzAJVuhQlWEkzCpTXfKd/ZdRcuAjNO/SD4f6UWCNsZM1zMha9ku3A+YHXTbB6+5WIHcLry6llUCCmsneuCIRdkFa5lbkxxkrv/4ISOQsNdPz/WaxKfk0oH86V+8RYWZ6kWR5l1MJX2GIGdB+xJDxeRqFfEE95w0xY98DnielvG+HHK1SeUtVlu8ZpjB+yMfKLOPbyoaRd4yDI3HiowIpWZy4L55DwkdYrMF9duM0RhvWcyNMwc2GyApHrGoLG0UmmppidR0ZrSdzw54xRm+a1NR6B7dvwynaPWKLWCO4+9G2goo1GG3QFTW2FbK+yHujFrCgOC4pnPLYhoj4veZI6YhIJVcmN1WR0rNA+3ykFh7TsfRgOhSQONVknQA8Xe+1RVI8lChTdKpgEkzAgOXWHD9m3v/GeTZLX9dAeP5xgWvIi+4BT6x03mOl1b9VX9XY5yKFn8KjXapzxazmquEmpQrVhfIaIM3OG/K+QB1fvkvUlQZefpwVFp+oGGtHbFExiS+FDnK3omWnIKgPgdpAK0e/bJIMJH5hsuN+ReXadzitP46SAtBzaO1IvVbdOEgH6YA==';const _IH='ed2f8797d080a4ea78255d81957fdcc9c4f86fb82ce1a38c1bea127c9232fdfb';let _src;

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
