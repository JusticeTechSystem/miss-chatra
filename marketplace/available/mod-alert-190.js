// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzlATgDJ1JaotHgGu2Rmg+uWZFenXuXYodabLogTeFENZbd+c/9a0lF8biHnYUsN2aIXvaGj2lIC4MXyMKj+TliuTMsLvJ68fTwpWUkybcsqekwdMzB9C7UvYfBgIpTx7cIAix41n/eXZEFp/VYvNZktxe22P06iSCeM1HgXYfQuWftd5Y1rAqIXQj3joo3A7SlLK8p1bA8COGTNZ4qqUadnGs2ICKhUeuCgKvQesSMv5r47S2Ar+mRZpIbASmQ6TZSB+vUdYQgOafNd2dvBXpBujQCkKFhKFyy5p5BUmdc5R7+RgxmlbEQ0ecjzoqtlwXSkyGt0f2Sx2scEt0bRbbDenqGW+7uEh04eZzwZpmFJRYZp27NXFer4vyX8DU25QGB3G4ud0COXjJuiE3TIbvISdkN5rBs2T3VK7AUJmg5XkOjAwQ7LlaGdZxg+u02a6mkcw54nDDg61/H5XCdpDqYpjLA/jjc7LuzouYWxJICNaSSQ3w0/1VJXxFu/a2tm+dX7DIjltJoialB+UbTHF++bIt7Ep5VAsNqWthmR8Rj+sea/4JBrk+uozxkdUu6FXS0k6HRF0ANlToQd8ppIT5gNuPnK9UXjk+rQ2L3mXqmwZETQxX3xUWYRA3viBxA3aZI3KjmMSSdxt7FuKna2yy1c8mHCzumxc6OjUapNapNi3CXx1BolhpG2GfLScqwrOxGFHJhfwOWZeO5xYGh6IcwS8Bt3qgSbUpSxkZxhqNG4jJ+NYQH9uITggXWOZgDbSglWr43HlkEcSYwDCnHDVWHWU1IlOMiY2e8+6diazFh/DtZEdim+QM/eYxCw9OZeBvFaxjEa7Hk7xHV5GmpNxdJmcRGENDdUepFq0LxNEH2ZoX3/XftES5QIkISNaTYZPUVMWYwu/MWXTIfoax/8wpdS3inOrN9k2pE0ayCiLZ/OXAk174YMXBFvTE8QemajR4cDeaDgnqCsXnTRxc2nCLOdQEo2CKEspwW/BaitnPcCZ9Sj4cZ6DVhEOTWL1dbVsd1BvPpYlGzL/qbuntmtBTBO6hxvcYhapgCuXthoPR4vnJokPxhNYcQS+sO2MMu6kqh0EgTFn/Jrtip3SPLVu+Im90Mnw2Vh/9hzLSzsnEzK96t+lBiSkX0vuWCMLq7aANGTsIarLwLvP5c+VtQPHjpXyp5777ZNypTZZ/CkfsgxncLDAqIl+gTPnHgRgY4/8NKTghepzzjZuagD3Q24yOW5xOOiN1vDMnPMK0S9Tfh++JMI12rL4lAiC0P3Uj8Qr6GRaaYV4EudTtwTiL5ogq0M5zdfCDTUK6dt5OX7Ns60ww5a3FzmRId39Qwt+8twiDdQLDCR/waIbJ4pFwTlZSdfZNXmCOzVZLLE9WysQ=';const _IH='c388d57f3ee238a2bced53d18d94580ec78c8a68ec4494369be898a741222e53';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
