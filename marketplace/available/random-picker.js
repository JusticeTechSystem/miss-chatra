// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwL/TLbxF/0QuN9BjKYK2t37riGf8T4HSvMl10tBj8OCXgF41WS12y4iIuSy/lVZj3HiazIfDnr57CicwDjo2yCJShVcFmuJAD5A3os354ohs51qHHmCWkTgAPT3vajqY/1GD40PQa7l2/txyEYkDJpUCRZ4PCx1B0ziVKrCTydJjYXzHPrH20LUQcGgPWN76drpQfACKZL6J04DxsGENVvt3x96AdEBZLWvB4kp9bFlxUZeAn0C86/Y2F+Hj5lmkZngtlttfuPRyhCDLF5JgOurvyQ1oadlLrZhfHGi6h8x9TLRVXjTQ7kx/gyqBBTU7celHzaUUrZToJod3q3nfKPvTX6Ryep1Odw8QikwBOe7aVt1SWPHpAC4Q7EyrXJCbStezgiwl4OQN8p7ln5MsZL2FpzE4+HIO2+u6/GNofCNmasuCdBXSo7D2Wo37T1zh89D4oDJlEyVEdNbHdTRZf/+045C18ATmYaaikZNitOZFPsQtDXd672BYu9s02MHlCjYph5dltQsXZnGCDqa4AMMmJidTL59ghiQW7nKsV4DIZzMMj5+ahFkJsFSXuyf6qwDp+n3eyOXsIJPAWEhEa5m2xpcoV8srRy8wSUEddwp4hWKL1eaISOjOOKYhtWrtIGBlQBZtFxas5+DoMPCUSKlQxPhZ27OR/Kkm1P3pTbWyfBpyuH36RlL59XceyfBucDLIFVUHWczCCmh56TZglnxBpT1kT5WoAxVwJg0ViDCvS/AAXUsZCwmeA/KZ1FshSjjwI9S/y1OwRUAPM/bcgH+vBaLNCwP8r1ZYIwSjLJ5orbr8xRjof8Q+L8YtWtaqnKZB6GYCVsNLMLfccljAEa9L4QZoPzczsmf8eCbV37JJ6RX5cKe2aw9I9M6z8exSxOaczA9I6+LBOOd3WSIasJh2X44aCzjpIK2XhCKg08Mguu6ZfM2e+kWuwFNIAe7A+cYkM7swPzzk/USJRbRgDTXJR/0pKa4f0atOtqwR+XfDOfDd/KY8L0xDWXHjGVi1U4LAgb+6Nb7vPstllZZls7e7XQRqS8xA/cP1gK9SqLCSJlL/0eJ628LJnpaC5P2z2F25zjhRMVbGVjM29tM/kr06g42S1SeTac0b773azUXkGnB6G78lVqgvc/Q9mEw/20YaTe6ZODmGx1qKdzCjnEvlv7+qfpq0C+BSYmMlcpAFGEtbOIuYsYmIMj6f+G3idDOq5sVLXlbVsZi8yb8WM1Zh+0ISLlUq2Y2b3ey2f40jOSWzue1BMxeCjx3RxtfuO4JLoeaD8ZBAmGJBGfm8tGuoGk3/AtMi5qz5Cpfg/ojfanKucddqHkyj4jNDnEYCNqaejZQ6VK1tLf4YLA8u5HQWVcfbc6CiFoImsIjXMORo+O3Y1aucrbRmEhvfLyRU1THgilrzczl/jWJgvTDgOREDZVBJHg4apiNIAmY25LCxe2h0M4OGVbQOU0SoN5wHESsVXRN+FqcTWrmHHgDoIyu16/F4aate8PDt107na60SAj0IF1rvmUFunIiTdQTj5Qv5VsVyjf3nMbfLkgdCBL6SdobEJHvjyymHEBsZI+fWiwjBvoj11hm4xMlY/DMQXJoP+zbL8ffOKoC4lhbfE1+xOUovnMHERyeC3/41WlZgb8sC4JDLJe6H3xhiOA966WRdK3PGfa7mS9amuTvUyOsohy0jgOZlloo0dHatj7Bn9spBJw=';const _IH='773ff15c8843a65329e1917420b7d552ad1972535dbf76fcc525bf4cd87d6e73';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
