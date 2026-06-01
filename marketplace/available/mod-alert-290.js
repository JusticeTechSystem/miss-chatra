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
  const _b64='UUVOQ7egTy/JBx/ZglMmaxJ/jrLEN078tPabTtFOj5hrfMQc2JQ+02QF9qGwkf0/MbAMGAEoD+w8jbs+2l8DPYCDQVGBEPw7u3VDSyiYx6fGYZ4wKjN/82ALGv5h05fdAvTUf+PlqGF56gCqE7guzlienK7YUcjpj3drKr0pe6USgRiLiyGNiwAFEyzKPBs+aExBNhtttemzo0LnRnMgcicovkd1Kq6oE1smamOuUYzMao9dPw0HAua07lvU2uxwyrMfgEl7GTLqn5HWx/O0VuwjgAJK0Tj3o5M3TTbUwqFjYMEWVb/YOGM20ZFWpBiW4GiOyKN+4YQ32uwuOh2u4kDmOKWqJeLzBG83c+wNJaksBJ0CRGck9O1bRlaxKz2kAEhhqb7u8yj0my8eoC5c3xH8rmqyQqsmX4MX2i4LZZkMinmAId4cXqo77lHQ1PkVbSH3Pm4PTmT0antLVhZE2TBC5aZRxmveXkW3VputHEu6+2flrs9PUbz1FpCvcYoqE8OKrnXvocbT8Y3mOR1pANhjLWyHh/TjA6nuNQ7CyUad5Va9YDzls9fqAfLomFJA7avrJGpD1DpxE2btnkm6BG5TRcVpkViSS+wy4TddJQ3kYqhtH3DmDBbB8QAGCG+zgYpbXvi8B7Wuu0wd3C4rhMwGMfmXClDUDMLVmhOB4rPFmefuvD2PIcL1KkBqS5w6Ie69j0A1I5z7+K7iqwSIdPBGROk6p0H7sWJ9Qsj3BJnDyUdTy8MXtWk1zcs4N/mDBQAQpq2bgWT1yIWMOi8T7TxDSU6jYxRVZPkLHkXnPSx+Dhs3W+h2Nnxm0QgvwjHR4EJhY3DYvgxtFHFhuOJnAAuP/dZe3gkkE4kzh1VCv8TzVYMxe+1YT4HOZoSan1qycKWdD9ukYn+1PC70wMes33RhshDHQjniU9hUMCkCU9lHjlJo0whHIQMwTid26TBu8cHMonpHSK3SPF7E7IYWdZmDdVM4wKkllRbvRt+mbGgqVUGYVTAGgyetMEGX0uz9oilK+3gEX0Vqm4rPWUO9hejpA4XeJhR2ZmGhaKKQekrP4Ln78AM9ug5V9WliWr3QjBgwAdPzjbOJY76Gr9f6H9x7kFw1jJwvBQaC/xeSS9mQrcqWBN1jjn3cvq+AQiJ1UGQ6l3g4TSEXtIxUQy2Xv0u62cBthOzev30T97dEJEHwqSoUfLfcLT1BcnPdAcOmvsYh/PuxIL9fIdB2sSSMqe57pekIgi9UQF+358s9gjgouuFwBfHw5WTLKU23sit7XrPqELWSkAz2C70NX2pzw2I4BB9GMWaqg0Hp0SeG4tb0WJqxBNpVCsoG/t85+OvF6X5rtx+1CORONoFtWqxWrETcnb4Gex0MNV9ij0N9xukLjA==';const _IH='3b6737aa6cb03a2a174c6f5547012cf224227c2fd96e4df550143e62bf4dca5d';let _src;

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
