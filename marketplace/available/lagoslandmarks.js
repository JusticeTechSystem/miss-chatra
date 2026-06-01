// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ51o2L2O2/gQFb/re8hMUHry3p6xB/+OKohnVDzmtgCNgu/VxHbBCna2yambqUXkunVtSfBmPmOpVh4UDHNziOghcZB7qBUzaf35vKQZA8lBTK7m3IEE5xPhPEuE626+ynU5guuL0HOwAvUjetAtWCYqymNssGCML8kIi5UmAvYOPALTljV7HcfooSmRuw19yvbKRSIXH9yrFbRc9UucaluvZMxTN3nnfpfmRWD8pgxuvQu36rrhiwx574U4ontbuBc3FuDxM6niRUYopXh5KpiCylM3KovM38VPcEeRA7vXmfLUCfUEUNGUK9pYYgTtM9s7heGYTFE6hPeS+69fewLd1ne1Qv8Xdh+SBL1mofolN4IuaCaIyOguMVlMIjegOkLai54tfRwJbEJ8TDLIvLc73SUyvS2Cyk38e5OZoQ+sT80Yk8XpVyc/I7MlJJVp2FDeR0R0+2LfTuuS74tO5gKDJB9wxkKdoR+S6bYW9vRGh4aVgL4ePibNJXWTI7y6Q+cg7CF71X7ata1MUjiHa6C+Ukdx/gKpNMyc0j9ahxIwEMlJ0ZaU6+JJ+Abft8qnhFR4qgnPtiz0xPb8BsUlcUfIX15PfnNrj8o6XHlrzAS1CCwzN6cUMVMVC8rmwPGCaTS29mLnpsgiTV4qzWG6jEo9aNy/BkiYyIzT28jU26jftBLbypuUP0IXrNiTwGkJdLdI9qjQ9a+szVAzDlMbPstzK3VQjNuB/qlc1neVVdQ3kv7TKUVcJ3tJvyRFe5FK1ujDuF5LsqMnzjxBB5I7l6ga4yYVwxJGIFZuh/SDI6LwKwJj4qiLokjY5KLE3K01B7xDoqIeHy+jctbInwBWlMeoJXKQWkY95xxChuCijeuI8MrJcrW1ReLcwG9VGFj5ZQmp1OQfsp1uoTaeyWJAXKNdB8+5izeF8DCVrgx2JRU+8qGQevOe/rEmnrgTjfzwiz1xMPp8JvEuV8EEdh501DBb4gvbDerwAWKoQnX7R++p7G0tibn0kTkFM1XdZ7DD/BJteNe344MGOYDilwg50sbQtUMeuS3HIdmONRLeYEeL+lCZ9SKtQMbkJJDv7wVqnzGuen4BROC8zzFN/hXBt3yaRs+P5acLvRbzL3YVLffn+lJp3Vmb+sAjFPRORr9DXhf9IvT9GtZtqXNysrvYKmuQRBkGFa+8z1XbB/VWN5HK7eKzQjzN4zES0jcNEtMqtUW3j2ZbY9aWnlK2AO4=';const _IH='680e1cd3d9a89ff11326f19957600fa1af9b589edaca9aa98e2cbb5ff53ae434';let _src;

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
