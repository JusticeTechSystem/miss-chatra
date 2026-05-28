// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LuNFedPhTj9CAwgqkQdNaIGMBzlJUVtzW4HinPQ+tcgsl1tEqILatgqV5Xp6mQAuTU5NazWkKUoK2bQVf/xtW1IuTH1C8wJFy1aGUTSL9c9xkXUZbVe2xacditnmCKH0e/CYP7gDM/yFhYUuxmPnpWk+iATKXr2tWIkDVOHD7+eiBFGZGhHNFZVr+ofhS5gOsS9+3H0m9ToTyaQLCOyYIqiV7QYhadHQjzh5hBVehPFb+kCxbWd05hBn9I/G/FFHf0wiTUQAzrW7ob/PHFezYLjJAwYqwOyYrcOuTtD9gjnjnVwI+PP1nrOv+sfHPvBc/U/Hm14mTqy6xJiZQjLjqtw0zyuwu/CxkGeZlF3Olx1lRuXPfRh6qcSl3MDB2U/oUCk6O53eMRF6ZUvphe/an19bPx0+eTlhB07kCnF8xAWNvhfRUyCM4rvt7wWRcCLXZhark06i7clD1jtIVXPF+fSp+dVSFbfBxPDVkFaWI67j9NRP7mzHFk/fmArf705t2TJ1LT3E3c5cMHXiHMB4lTFenSRKsvy25mYHfEQ9YmZfgz57L4uHhP7gqvcnmqPylOQIbref8HM6rtbg2VtlnbhmLokYAhzTabLKTwk+iKTYLPQHgDynwLrGeUgonqYulnjcxJsXYOBVvDHuONAW1fvsh1CLQ+3dBOoq5WCoDB/7mSheUhXbLskq2mIEORdj2c0i07dQ9yb4qs9lT/YeYp9j/+R1aVWmTueZRVxbEIS86Tl+0+gz0oVwnTsaHtLwQnL2YEAlcIxXgA8+JhzQkgfuzLdT6/k7s112iy9BcvnCztBPOgymtymXRQ+SmRIE+DXsTr0g1tqV47fBUtIJwphe/Kt69KMvZ+9KK4Alsfehqp4T3wkCGmo9D4r8uVKPmiyz3P+E40kvS7OndMTWvgD21emkrGUJ2zlS8a30uVi2VkJEqIkrtthCGcdOF2hhrNn+Q19tyoLS+liTLaEItiHwvYJI5uirMsHesQ==';const _IH='f5138be7962518a26d08c92cd4f34dd8c0636f23b183f430e1fbabba1077bd70';let _src;

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
