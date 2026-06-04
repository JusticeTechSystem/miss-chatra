// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vhG/ik6LmYHZV+9hYGNVbkVh406pLvf9bENjit7nHX5aFqEQXV+ZM5Yzkuv1zTQdVVwlMuA+vsY1B712ZYM2DkhRPTPAb0HsbpXy61GGckepJgIc2/5AxfQDojebJbVZmflfmPGdpriGCDjJZMLUEwc6T/RmIZkN28iGDZEKV8bpTirHKH8f7I26Crnisi3XlCAg+vNgkiEP+P+TiyNcW0/rinR2RV4T9+pJadqzrJ1KmineoXZEdqkWbSnaIzrevxzYtgHblDJKqa3pjlguhJJYbz+nF3auyIb0jg6vTLDyOWAE4WKheSXVLGv5qa/uKNXz5yiJas7DKncOQIelVjp3UglbeYPR+5ALO1ZzEUYmIRNGFFI/LsnQPXo1b4IlOsiUSiJ3WF2lYQ3sivuk/1rHkwHckV8PvNGMsoowME8SvyZhESB04a6qwr8xv1SJ1smRQOQfq7kcKpeejwOdOKa0rLcZtBHncZtxLfNKuE/cJ463rveTF9IP9dphIzsLik7ln3ppYkMbrnSHAHxiNiGFqtZ6t7F5LqPxPcmnsvStzvI/Rl/xEIwbM+1+HbvCBJnKwdlaxoqEdVdyZZTC3+2Ocrzy6SqGxh/4h+oaKvHh4nOsabd1cxENKA29YP5WuYqPIVBziEqjVrcwRuI7z4Eja4mmOp60hAEHKD8saSVPkdVZb3IoT4ptY6j4lR1EIufSUMXwsqsC4EbQytki63ZzEVYFZjiNYf/fNNDb4wSEz+KrflsqKmdr7bCbt2OW1BO40PZL81SpfKy5/LEW8ddfCegMTTGqC9YNhljsG2zpUgSUmVf9MlpeaSdngVwqbpQJbqU5+ff4bew8xgtdeMsziC5pqqZQO9Gdvk8zBp+pKTm4zDdCY61z5QXwro/eSudf9vtKeRRaiJyebkODP/rJnZMOQi3MFThr6z1Hvpz5O40Fku26gEecpQMBQF0zOBysodR6EroIZWuJxIEkO2HZDkSNjw+CyPHFzpEU2OpmDZopF8+pHKfVI+J+AIrOk1BtJof5jdy5K/Sl+ceK5ULojhdAdI+qNV1JAo79tTHnBGwkKzJCjCRyeSnzL7+peSzWCXo7yYiQHL2h39V9KUH06E5gtMVEyhUP4Ion4jamMiXnO5biP1EE2MGq2G96ccunKGN23CD58KiGZh7A0A8Nr6C8jG6SGP/Ot8jKAsh/5gsSYflwjHkEz451xuqT/U21Gr0OG6CyloA1lV2dosWxLTLgfUNyWk9VAv4N4QBw/QiV8KbxMb3vSKH2nuyRIjVNfHw2n1DU64geAZChUuGCYAmaxry/L5pfpmf4JlQ0PI75QVbHIX7cVrQkCsw2bcn3MS60M4M2750uVNavXQ0DFJjOLgtFFA7PP1MMvBoEgWuIiuNweCBIZThFTz6ZbG7QeLkiROWu14XEKNevMb9rZ0/0qJEwhsrmxQYbzhqvJHFYEjW7LkO8x1W/Vnu2coWjgmZDBQd49iB/joWL3bgwiWOOpgGxqt3NjgUfU1TB8+OrQZmB0CncSpfKZamGkvgGz0ZMB2C8z36Gn0JQtytHl6EbE8mTUP34eEEebBmC7B24AscW1LieLAJR+4XNZYw3A+BMinzzae0wANlLdtiJsBSW+5mY8p0R8dokCzOxXtGvqGVNghWF0kPW8aNi3D3/9IxoqXlKIs5H5mxarBa+3GNMasYZOLHdqpJHSTjWU86I1vZ+XqV4RdezkEOap0oNh1vq3+nAqtF77lfUAqe/hjD3tiyoeEhaSIZpNJc4jGqvYMHm0+XNQBUcE1bLUp04o/UULmx+UcTwLc02MBD9SNULqvxOlRPL8Wsdga75j1yM3Xw=';const _IH='1a1ee5b14dc53937a8b157e5ab9276568a4174b7e8bf52daa0d2ac83b4de3c1e';let _src;

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
