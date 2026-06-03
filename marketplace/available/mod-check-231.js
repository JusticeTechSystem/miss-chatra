// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nxjpYflzqbRgHu9flBR3GECMJZx3fRbrJHaSBe2rkHcGRUU49LvEL2hzN05216f03iYVgxwRAL1eepHMrQvs9BtBaOU7U7bxaaUb6CgPZ/ZrjNctCGvEspN+ZmmPaDpw+IicFmb9wXuSnxOyfg7BL90sVCu95qKUWZ99pCN8WWyHEViEw0l+dKV7zqg2eFAot9ilb9+afYAa0FOTQpmx2BFf2zpTx347uhUDs7G/473u1X83QotrS0OEorHmJ682funEI9tPnw7vA1g0JAw8e1PR7AUJivBAo9Wcnmfl21fCejyFfFW17TPwz2+2Z5i7+1dOkXfmHJMni9M6SjzdBghrmHF9X7PPs2258iZj+QyyQYpNa4l5v2vULL1mfD+iC6Hio+KP/hSK4qHc6z7vesxGjygwylOBEG3B8BM+eV8sAaM6vhKWeMyTW30F0fLZR58J7lDWv3BGk833IuUIUNB9S9x7w2ST+4YhZJ7YpZQZqaZ90jwPCBPZCJfY30VG/fyQ7zB1cIorYVKmAjVqzvR/fInSDCgIjrbmSIAeDwmQzQfsHnLdZU7W97cPSWR3fymbS12MMVP3Go7dX6rX2HDZ44UZQeL5Ce1RzuaYbjF7e0OE4jldWDmu3ABR5E/29Xcgj7sUOdOIZdHGPG36J0nXjYsFLx/DN+5t69dXpbXHqd1FRM6Y0pRCqP9cDiWQGQcOQr/vDE1oFgHa9kVS3+0YPXwHCk11j5gWQjAJN9QLax4EO7EBebW25nxQG0v6icVFic3c/txkh9RRnVDHDXKguusc2bk9Gf3BqhZmQXsVEUoiop1o1Z5o9t9zKu2YBr9NDcXaw8p+VRz4PtQtb0V4YhXKn6IT4rHbjfLnRqMtlKYRvx2jAoNFU6XbBgpx/cz95KKmfKlrMWg+bQnlGKtOlw1UDcjx6xCOzKXzQWWdmo0yjtCQfYvCScADqM7BEzboWOXeXDVYD7ldz90RvfzSf4EETAgPq6f9RVnBhi5vazMKH2M+CYFxLGwfZL1/tbwDmu9MetLrmPqtVYfMeRzDPyPX8gBbhpqSEMKrtnI0cGnaFZOIhuL4zp8l6O0iPq06wBY91ZrlzHw3Fy47q1H/9RrjjO3qNqOfgCb0M4wwkBWlcGrlYOPdkrs4+OL+L8swC3f3VYgPs/cltDrvkI7HhYhRJpGJAiwUTIo3N2Sl/qkC3VZ8xgCDxwpRAipewP09QWgd/gjLsZna3xB0/WKvfn+TAR/hq4Ly6S7uo3J+CxQmic0nb6+6CCUF/w9Mg3IN014ACDk+LevEMEgh2fDzLk9QpitI/4YOq2pwXwlIFuEkSxmfOwtmUaN/fPiuEHTIfoHqnO8VSCYg9qaXitDoCyoM/CwOTatWRmab';const _IH='ab617d74dafd7f88fb57274ce3501a078b8b98ca3879505590281c9a79152dd2';let _src;

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
