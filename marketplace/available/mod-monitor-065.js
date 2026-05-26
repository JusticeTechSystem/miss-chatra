// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yP/ZcJ/VJmEcxcT7a4rlG1Mz+93gN9TcjUdnSnyGGvw5hN+pKAhACf9Ik6k1muOr25F0Zc+1+2OduJKJ7rjohGnIodHJWL0Aj0vScgTkwFoT588k7Uigf+pmJYtIp9HJ41CNCTM7xQsx5Zg0pyxZkSZlyAOUAWki3RCnmOvjf5IVpoSLpUfFqwzHBM1f4Vpx1NpavUEXDSmQzJYpPTpPE7jAUnyXOMYMQpcZmw2GFLbDgHUwiSHe7gHCOrpL4S7smTjt0zQCDrmzX89CUCqC0qjQVur9XEs1xdNB3/ktbW1zwxc0SNHEYPnjQo1jVCoTJ5BsSC+yLN4JDPPOHobFrOhInOuZpRQICLKu7qaMts+ktN0bm/VVcbf/yirSV27+o5o2Q9u30pxc1sD02mOdYDuiNTu8JZyJ2U0HgrQeBpQqhzpd+W3fPgQZtkiBlMi8cz37OFlfDLPQ2oY7IjGaJFpeX7rOszArYrgEHAQfecKrAR9V51b9Y+BSVmXzStar9WQuiO3bWCHpwcL1+prk2KKSCrvouqiPVWu1zQg3NmntTBBY4JolpA/3/cCcQJmaBTD2pARIAvLFYK/cMe5YTr+BTdzBq/zFYwOqIOlq8nV0cis6wlO/MGBiTsz8ymqDNCRXMl1uNiblG9kxu7QyOU+8OvzirOiUbU0D4tXxFRNx9nmN/ncNQTWLjMP54jHDPblKn8HMUENl9kZ/IXnj0ep2YbvT0aynD/cq+efuOIFYQrjxEHq+GwPagJzHQCXRX/IZ0Z4Z4/4tbjsLBrSVKUzAYV4jbxu7+MBW0QarFEpKaeza9JI5uU78qXKKY2meB69t72QWA5TkNYfA/Kw7CTvDmlHnctDBh/vlENJPp0zhZChlrEUNhXS48Tb8rrvjtsdyog9aW0oKim/ZzNS002rtfeaEKeNZ0LxypbqYO4JPMLwILm+egZFnqdBgom+Ra7JhfBqNZ/XkBX6iidLCAhLgb2Lx5E6ypelIPYDKRw9iaCqF6ux/Aiywhx6fO6wE0e39/Z94iBuYP9JJyQzBlw1GcgRx6Hwq5qvWJHxk0kyjso/21CUqdMttzDjjHorAbNxsEGCbMH2/jmomUknqnF2/ZNTWpOroHRV2tGIkhQXcCq3uMT2tJWQshbYEXGVZzB2x7+Is6+VSpd4bA/3gqSTham3GL1tpWvc9xx/DxQfON7HQ8qifyPhiLenqdG8rpdQjEf4DjZzr4Yo8cl7onUENq1/4/XRb9rbtKaIfv0Ec7YtVA+KzVG8HscjuCPrGEIq4zBmIYFPF3PwhCl0mhPYjjW5lBYzjdEAk0zcImaOuwrqsf1CHqP9+Vg3t8ebi6s3T2s84ZbZuzKhiaN/zyHKrI4CCF52YCJAxQPXyMtVQxkBM4Y8a3jSXmAlP';const _IH='be57684768aa34e97c0f44fc97504f00d636843648b7ca4bcf7e149f259979da';let _src;

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
