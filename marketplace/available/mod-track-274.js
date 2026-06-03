// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2qsf49FiSOYx4JaO4LKFsHZD0DyQ353jnu23b+T3DO8Nr6V/YrEIsdu9QSkM/3rQtduVQNGE9DbetK2oSIiYfD+oQG58CPqmBqx81cTDRVawtMJ2Rd/K2M7hEOYHEsL5HfrNTW4Gm9jDTmPiziQ9BUrglbrHyyFw3ykOAsWd069sm3zzDhX6ryjtkXbfAxZHIzdHfHMAu6nEwRLaIqwu5VdwyOmI95l9Ovqdoi9ufYca8lnpiBRF0ARXXuiZH0iF6k1JZfcp0KexOhBCO5bttkOt8+ClV9w76oLH78j0XqHt7taqTN+4buY+htb//BjlyoCgblQslhXuiGFl/fCGpPZwStsxR/8iUE+HAzSIut8IrXYCd2dQ73L8MVX4ddeDf7hIEAFIUiyw0dvZsznFkF9WQ83lt5g+XMd8W3mBw06BDR6Qdc8D2kh716aWQKAhfMvPtGXD2915jTV5Bsud+MgQ2In34k4O5tJLxjoAeHk0Viz+CnAruj3vAsPsiqzm9Bjt+qkq6GjNFiG1i6dLotN2k7NEtJ4Ey/J0iuofqPD3Xfp+4o2/NHjlyyzpMPmH6fb1fLGNc6ylt5IyWvfRW6W0j+rUbI9QC70XuRCd7oZ5VsqlbSVr7nl3RwxLvp8Svz4Xc4IYyBYeHKlU0OOlLCb9iT8xRQTRnpKQXZ20nDIIQCchelkfI3lACsDkEcMSPSXR/7Wd9i5iH2VEItKiMqE6e7CjUod2+3YCHeFEeK7RlS7kR1vnlJOK7YjfPFfN4g+fT8o8DrB23tqd2h+ZTXHIJw3jLQ0DjryqchpWLxU56K3yxLKw94izL5pk2l36d+M6k4+FW8H9ESW7+1IJ7r5J5AzVYmDJXTdSUaKtvqaV8obIdpUeC53QQbhN05JRscQXnY6HHSMxrMRb6YwVD4F86FWnZzgpBnD2Ri7QrGDNUothIwbG7Lh84lJ9ed73y78pe5PONah/O+cC3DiRqZ1cmKikysOCQw/2jNgTPWcPwed/0w5SmK52VUiLyHL2dAwoVp+Jksd4wTUrAd9sIH+27uyUwKzEHWGRDXOWhao9CDl5YOtXGI6cN5fBAueQTFIqg08V6QV8OSzo58dfVWWp7s3NIwwojMujbaRp+0LvAfXWkzxy0XSPb8s0Mbh3T9OKL+M172fWeOJdM3IZn/U3SqCVU6CnczOZ26b++JyfNFonLLOI7DppHhMfCW6arF8fLEBGU7kjC9cxZd5tNe+j7PdBwmnrhqCAhYeK0KcMLVO2LjFWKR8pXV52w8FByULzTfe9gN+Wpn7AphYnK1UmGBHmBe0dYfzqLk0fN9AlX0+qMdpsARTgLe6H3Bv1kfIegB4Ywn+UbUH3eUuvdAuWgz4TbJ10aCzPj1kN';const _IH='275ad2a899971dbc3725883fb59003c63d4c24ab6f88d218d914224001886732';let _src;

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
