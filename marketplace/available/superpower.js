// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='96MDPykuc1nBQHbfdwgpMSZvFrTxfOxR0STGWD9cjMLeMMWCzyP6PtcpeQnWxMbTFGnJA8HQt9WVh/yhUcAjGYfcclyUkZFl6q8wLHaCvJV80TiVjRHz/kGgkRgWBecQCf0UTBO+XB/h3X3lgtvMzKWnsSdP99Q87EZcMZUFm+FeCd2WwOzVwZn/o/HcQvLRN6cHYfDlBVAPqz0dbEWNNWJlyYUSiU4V0jCYYwokYpCz0GbxKkYDiHYgU8Nooapxf9CmxLUg0gojtoh1HLSf2+ShbraSF9GKufQ20ovo4NBDy/Ak/eLRrPvLYhKJm6sT3v4b0ehU2Xhc04cykhblAbIUk/97BX//pcywilgaWqdwaQncQihH6JnsA3fKjRNi0X3p7z/cccHkfNE9ur1HBCeOhBvxNA0ac448T4OxGFLtrBV9aPFqgpJfndkmqyXrA3vWLsGN+rTlakx+TzzpZO/PafxLY43VYGqoYwVgT3Y7fuTPGvQrAkbL0FaiozTWYfI6fkC4I+n0wx81RgN2a8Iqaq1UwBN/81k3PljUkp+BfqeclrK2j55MBIkFRmwOqlKhiNDEmZfHX2VcHzcy8Y9YgTjjbzt0AY4C57etmFRXdjozL6108OJMWD6ius5H9vzmNvZjP2mC2Vyzurlk3JyfWvLViYL2FOwQfhBnWXd0NRNQy+CBU3yuBhfkkZ5qta3Nv2BmTcOxKcJaj7xsgKMcv8o3xDPauYQjgx4A6RTEP7gUcJ4nG1dEV8jnqM8/naT6qslrPrNxvX/bLhuBPrSxf1vwTXGfBNHeRGARrKfDFsavpLW3V0ntZlTLW2ReAM8DW3xAqR+9dWvrv2yCL33WZyH9DLZta38XkZVxiCMkIbQo01PfVx9vqPOjxGaub5KU3aaCLwlpYuRsvlgJN+Ts9zliLJw2MMIMLXLQh9kQhe1pTzbXlAbDBgDBLQOT5zvXI/DxJx4ysz7BuD588HqIFU+h7DZ6rDHJJNBr3ChWupqOynXQ2B7FT3KUbkeaUGGx80DltyChZwn4B7n8ULm2zC4Jju3gk7O4O71K0GzIEymPYOy4OlhJizHN99fzIkYGL0RTXBR8unDKpsyYVYOAVqKlcuvw+U7AqCntluOg+9c3BAiBX6KzTJrsC1my8qcZgQclNzF/mESxr7v+6ZeQT0lnGKV9FkhM7bw62ZFcSdjscUljtNJSyDYMPz9IQRjJ/Pvnjijq/XEh0A==';const _IH='94b261bd72b45b14ffd57ed8520364474a8ed06746dfec0ccab25551ef61035a';let _src;

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
