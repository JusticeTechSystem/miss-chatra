// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M2zeFxhkysC01R9KBSQm4KXFS9mGKbGn1oY5qccDBEDXldoWx3j7iwEk7hW8DwCvJYyBeraj7D5jJMWOx1lcqy4xE6axklMEUKS3Xxgwh6A0Nr+QHoO0O/iosUp3ah6O3w/Yzfr1i6cSWd5Gq4QtSr02W2iBCpVShWK/fVMSsdkXGfEygQkzXbm3SUESJwyFmnzmTqz+QD6vHWS3YC0CRuJQtoezhqDBiFlu3aRGZf4CLRk7Ox/fDby9f4NluI0NzriX1k86XnLTzTU2X+5NfcJS+gdOwzKezXUKjglbDaou7T4I3gcSPaIH5iIKXMN+hKjhsW6Zlb280ZpAZGNBwmJacpQ585WBT7ZwVgfM8qJAEsB01dpaTyXXCYhloXdeCnUZ2iE36MP6MDsbHBXGIDhb2Rh97zbpBpkT4fTOyBkHCypUlN7BdNNNsn7pPujVc7PEO+UUJxL9REEaGKhPSAvC5STrHWUHppKyaCZTd/OFHZ8IlFVdTWuHpEuyMfqwNtDn0zonComDh1YK+FIZKi7cPNmrtPFX+fKJHaEsPzogbupAdn13VIT2RdrUIqiUq8jUSvK56czJpVK8zi0pr60f6OtZi1HtfoznHeozDgSoAKgap7x1UGxYeegjjluoZa4RiDaFAr+3fDpvnw1WovoZRjwa9QWw76iBnoE/0NkO2PQP6tA4tMCF3B9e5cvZ0iydmJBes0Y8eT8OiJUE5JdJe2Y5ZIK482iwxin3lq2QUenOAXl+PB+o82rnsam+QdJFLfdQldUXUoyYUXSA4gNY9IxVAEUwk0flpvho53nyD9SmunTgw67GvKBY27EsUWzYML8daXUX3ertRPS55DYZM49h7W5rYcw3Xl+uD9Uv/Cj5uw/mowswnhnJinx9W7yU4LQJTMH3e6q8cHTujS6z+lCrQ1D3MBTSnjCsUbVKjerwvrVkTrlTAMKPEWjI3uL45RfmVJDkbw8KUs4waQH+37Y/QZPDcvphZqW5lBnj3/9/M1QHl3XVD+z5fHg8wPW4O54dN6N/hpH/Gu7INNx0uAsJM0Sbh+3ulT7mKB7sazsSmvtiOhPmsX2LT6aU414Qo0tA8vBV0m0odt1S6RRQmfHLp81Pl8wzvA325tjgRG8rCmqkQ38PY7TeOFhIUEDWTrTgHTWKsn/N+zBJOPhDxre+I/dZrNscTYZ+VMPX2TrXU2FnmAVJyWygvUuenBC8dv/QkFg=';const _IH='430a75b08201c1ffb58aaf2f479e032410e7444aa63a04841b77e9e1814a4ce6';let _src;

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
