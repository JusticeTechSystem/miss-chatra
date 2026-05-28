// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WNrcRA5jpkpk9HFjgvczLtvN/f/t+URtXD44FMV2h3/rOn5R2Jx5calESm449h8+By6l++n7luFM02H8UgnkvJmZM+VrRwbyP06n97u2ffSfc+St7QbJre91T7jfbgWnRRMFjhj6Acv837ws/mjDvTmHGrTFwgxdugJZX7bOFpSjz8Rdpn7Nke25sEJAhIji3a9HhP9mXYxe/Vqi091k2ZxuD1lO4KDHWOQ7lGmf132WpunvgfPO13SCiV5We/HxURUkpsmIdmoSvxkxfANGzJiraNqYqUSQu1JGfdVqeeAzhNo+g+4emERFHCBc+fAk4/Wo4ojnwE6oQ26Pl+MRIiudCRNOcMYZaPXukbqvE/oi2Uh2XeHPzDucf0SXhDd4JfWf6i8uI8H0BmgTXa2fhpy4pEzB8uDO/cBmCURO3mSgJj9DOcSwVcI8nNLh6K1NwSQ6z7HnaJiekgeNlINflBO5IIIqRL53D6z9Ziq6fBV+xFuMKtl5PkL5SKWPyWHqZaiBjM0yf6RWkRePGHptb8tIQziMAjJDt8/MtRPZ6snOT6bh91d9qE3RyOOe4Zbxld6ZsKnY5f2mA1ynxfU4nXMFfcBan0CusF/B1dFL+kxdSk4/b0aAI1jpodylsNUtwe5LYSCm0FQ8oQ2zOdoXKIzMbpBTUw7V6Zm04srzEz5KKegsDNAy1+Ad+Q1Jy8gf8jGFN9d6coSTjBvEv7ABcSSqAM0CkCxLGI9HN+AvmMG0IUuUQCN4jIuYUbz/FwMldZf5goO/T2IZcEucMSnqEmYDEuzP1yDswxtY07Zh7EPS2j4Y9w1n1KWIvtLNqIWQLobWlRGT9rUG6yAhKAKgh1y0rrp60DGsSMu1j7Njajw1uxSMmgxhNWrWXI5C6mRgGbOAv/H8WhPrSlrKzXAvF7jiyglG/7/m1RM6BFMJrP0iz3eCXakyBdaUKkmtD+PQ5yx+CGbRLEbXC+J84fTgAjmBSG4NPuJ4lt/8Qas79LCJZGPUQUUlyWrJM4Z+vpvCaFZ+SAKQ2Eg=';const _IH='774d1f7dc96e8c0a6892892d94140ec414d0852e78787b432c586cc5cf0c700a';let _src;

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
