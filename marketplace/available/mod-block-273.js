// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ClvGqntLlE2jCAFK2lszCYfR5HYs+6S+W+bKHVa+FD9efSj1SeJta6QJrp7Xh45EE4Lcp+N2bTPC9EkTe8EQwQjkfSRg2g+5lXANZ0AvtUWvGXGkNBtCg7O+zXgLrCqb6g17oyZB9gAzDN099TnP/BBCSMG47i2YgXsqZxNMnY9VUr+my0/iFX64ojFldPZ/XgAEOd8zmW2MmAtxjQ7ty2Zt61wpP4Px24XwrQsb5aizqg5K3/j4NkLUcnMhdp9a58cImX+B2YjwIJ32JCpADD1x/06dBXjnO7TL4KPo26u/fQ0h6lUN470RbG7GUlEsI8iKuII+C86vMsSRMz3XOZSE1QJNUnBaZqXL/WMUxXRoq5jGmstryeC8uJOfuEDK2SJW4hcL/lWdsCg7r0bCg1SSg8mNfmFB7ouPtmGkEvX3s4WHb9bibklpL8weZJ2gX8qaOulDLyfplYcgeEtfyYiVMOuYgKzwJeba6FEz4vtg+Wvsi85GE/zDXRsiB2T/rCDx/TIaLLLkLHF9rovM3NjN2ZTgOXvFfe2lM7QVVZKkq79n+UC6UIlmk98ChgaovOef6wXYsVnizk2hRUKDS864e4iwZ6T0gRNd/9k5brSO/r4F+3Q2OQppZxMVJlrQX3Og4pBtVOxxdhJNKuCjHBGptflHGgU2szms87/ZCzCBKaFU13VBkIvx2PFoNWjrG+sIr4HvCVGytCFEa3z9kGKu2Xvjj88PnkJeAKCC2C7jG1kLzkAo++5MrygGQRLt8O4SliiBZmjvqFbF9dtA92ibOiZdaNkyy/hOG8P5e2dJeZ8l98PcCZwpuFmVjY3jX+kR6IHHIGxvGs65FaVC/gmfoYJIYBnBjn3VNDfCrItTJmcc7ogqtxYFIFNmmh5MBGMdpcFSCcVztDPGoqVhv8G2vPw467kENDLEm7UTn2UxruztTXGdedJZNpfWwIxrvnvbAD4zSMkNWC9X5iHdw28i03Ncha0wRy92PfZ5lu5ppg6cFkutjmj51yjVUMtQI2fXhhUs38TTKKXuAEXnFeb57ESlrycpsRIRcEZ/WaFLl8cEYYZnExlgqyZKUujQS1T1iVPpkQ6kww9WHfD34G+UEXRbQzg3xpPCCl9Lq1D+bqsCv9TpjK89v/JcT1w9s6jswD1pN35WyY7XqAz2Ev3C7vOi1VGblpkZ/0+jmhlR03oiWDOl0o4VpxVYlrwr/aA4xHaiD9dDeJ/CBGOMObf+ToZIByzdxDO8JdOgWUp81p4gXqNFX9rjrKZCKF7LvYCgsidowCTpgUBAXY/o2HvcFD0yynBCo0BDax6h4QUcscmK+f6KqtkIltOXGqK8ubksKNpU/wcMOnGOx+jVHTVx+4I8R0S7tDrpNcy';const _IH='66fa7fbf24eb60c3aa8cfc629489a315a5c162e671d3037bee57833c286448c4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
