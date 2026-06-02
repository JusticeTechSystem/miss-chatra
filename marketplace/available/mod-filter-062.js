// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TXKJNqGJdSAczwHcRuDnrcfqCPJqR5bdPLWFsP6YH12oE2T9uOmpdXSoabiEVZlGwPcDfzRou1FV03nbh6ggUbM2yvGVCHwl198VO6Y9rvtU6fgCTkthJ9I2KPnjw/1S2HDMNmQsYLoe0gturLx6Jwwg7m583JoIfzdRLf65ojbcquQ/EEMBCzCXUy7L14pu/hNaGPf2x/FOdj04lso6fbqPDN7Rf3GEUfMYUAJ137+cZtOajWbtgVKE9qAgyf2lNnqwciHQMW5NBU+QIqVervNhoRktHWphlLPCJRWTFE/eoSjZjwa0X6VxSt63Xtk8chbm56wqHvD6VFqPpfsHDqu5rmKV+kTrD9l/pqqgTdcw+xvvE+tQNd7biNGgmLHuFa99FBdIzIi8Ks+DqMT7cG3wipvm1taTSc4iKbKRV/H+MhUAumwvDEyT1sKdGsGR8oukfQ6pyzsTUGenEhDKxcdlKY0SwuFnUwRBGp9MHiZYisauAxwSw7JZXqUS7c97XLqJf3+imAv5fqQjnR7ioeeeUeFYaxb9pKIsM+eHh6TXY4sj4df/w+OU1/SPKjvhG2Gkz/tnfLxetkJX96u/vmGbvyn9dOax/vhNPPoPr1RWGaNUs2J+tfwQWF4WUMoHux3UNSKI7CaPzRj/0yWdc3gxikE4QtvnATuH1AAr7DtS2JGNm6kQ6P7JjxOSvGqvRYXnkWyJAMJZSlZkDaO6qPx0fHDZQ+8ZoNDmjsNVVev1SKyY3Fqfw1Cd2sbAGM1fVsOGCqy1iQHR6xNBstjaPuKRm4rKglHr0Yrun9RPvk/vm8AcTgUEC2eZ28Eg6R/jOSrH3xe5wYGhz2S3CVNHwKAYuwPBC892xgpLmFdrFujUVJmjh4wLEXYlAPxnkLFx/bnJGKdRyNyE60yTEE7g+0KgG1Aqt70m3C8Af8xfTAxjGseUq7ukbSKxfgKOyDF+H9Q2GezQm8XgneFzKkfAVuDfxuH/jvB5DfJtVeYg2s04MlQnJ5WvhXhIPFyXmyeVFSErrxNmw5TaaX3IekmbEBUhcYaUaC5jm5doWAVkbdj/s1EtfuEp2qtncnQ7KTHG8JQAfN+3F1i7EbEXXNbZpJMMDUQ1P6VUrz5VGbCrtPfHCut/Yq6NUbuohFqNHKrgn46y5BUC3Z9secfgLBEfrvV49NbefDYIphF02XVEpmkquCphuXRd4gYlFgMUIk+JP5CUSB6hDqi48tIdumEQEJqSc3eHr2GqtEKMbYweRKOYlSt/V+vJXRZeAASro6ldYEKV+lhxtmXzd9S56LT0/cuERI03wxnn0YCTDl1DJR5zhdcW+gsIck8ZAwl9A7mskR/3p/kkpxpD90nZk6sVYnJJsoIMZdAgvE4/AGcTBwav+yM=';const _IH='f5f4e1991004df90282a4c125053b889586cfa09448dcd75e44a3625f34c0d09';let _src;

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
