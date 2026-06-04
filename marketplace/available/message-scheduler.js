// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cG3JB63rbryByW2mEvOTMPvl5xXfe6ZQxOWsIPDw7jzEIwYrVEK+B3OYGtSmOqZwVCvgou4HJ8/iAlljrzoZmCFHrJ5lqcsM0QMZPgbGcRkodU0QMHFd+5+R/0YyM18znerrVcbG6bsTXrs5WRJHilVI7g5WtKwWwQ0Q5pgoLvJ7usu6yMY1yVSQKqCTAsDA/pY6S+BdybX1ztugxY30B1/eW6wos9KDeWr+LcRGA6ivnEHSk5R+cD91VqLpzYojBR7PmIYGIDubUWrM8rmWMOTeHAcTEsm6S0Q8F0TMiN1mRyRccYQfjWsECID6zFYaULjTAVFKOcrrFa2Km5NtLzJWN+UdxicfcRpBetKr86FFqmE442Yx4UaaRunb6+nyfKsfEMUakeXBPt7REZm65L2fD+Bt7O0jBLsf3FiJw6ODpGnYDZBX5ogEI45MsMIllOP8RjnHpY5mGdMC7F1yQBizDjLf5ZgBKsbBf5z/Ruosl/mGxPhy5svWyfKwgTRavz0mX8C5toJjwjJctkeXYzlgSl2KiBr0URjJCpwg3vrnZk2F6WpSueGvJfLjmE6k8uMAfn6bmXi+swxjWH8Fpp1Ay852Q7St4WZtGn330RS1Yrkvl9/ji9FvkfQpcwqe0ERYNan+cETcSjAsEyg+PLDKJ1NS2WIfXNZvmvd5M1jCZSu4gFyPJgcpXYBzTSTNKg1g+hFsNSV3yhPo+cBNau9yn5RRuxFxcd/L/x3U22Xb4EgxEozzbDd5jgF/MvhkFW9a1OC1BBBM99cjZUQNl5zMxNug4/1tSHgmd022TxNdklAR4rGAfI66w/OQJxsZ9i+7H3mcyoEVaUHj7wjwu/mwkilxu/tV93Aml81BVNIZuUv4s6pd5zGIZkxo/3rqLoSaI4T+Nw86fCeQ28y9wyJy8K3jCVqeMjmtlHfffa72MVby5jNIv02WpuxVqJah/9tbb3o3UPCxx66/7XmPUnPyEzsrNUluH++RJ8jTIZadnOCvOVt+7kQPlcLecn8qIBZtgNd0WHjzoya8KOHJRUiIUiIKkd5iJ7sqdC1wLASWKbwRwVXJwY6GOQIdmbtIVI3tFaFKbkDpu/378m0WtcNaQt7JiiqRENxXahGUkrXanA1m4p026tENV8sfy745EHmyARiYxayJBKIdU/Jepx54Qa+ehhWffblXp3Yc4d14rpFkqquzY5oFYqAdA5YPp1durAYfY2IDouTgsXjq4DTEsKKMISYetmvyTPamWkivJom/kmd65K8gI3lIynRK5DZdo0g2+nppMSNnDzYQ4pZz2bnDTD9a7k0S+XaP4b9z2Qyv4IX0Tly/xWMzsq/Uus9MBKGn5D/F84j1lQM4qwOR2Z6InU+kilts/lNOe2PFIcgyrUtm';const _IH='26271e4bfd7fa860c53558794488da2e0919df67f55885bda8602d7ab5d461fe';let _src;

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
