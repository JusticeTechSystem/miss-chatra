// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VWUCm16bkrw0SBjx+fv9Uqgtbr6Rfzen67+sWxd9Ut9XPX1+z/uLYJgyM7GfxUbiiaYV/X2rwmsZNo1k2l2/Bcoz7xf6sWIolkrFpb7qG7f8KWTcT6f4DuQGwheJDJCtO5nPi+VxJehw8wD9S+FrFyhLQek9H5wVWgK7vDiBBhjJQJJvPwHC3eh0WHKYrCMr+hLcHKKqxYOMGczCoxnNX19IOEd0Sgpkx9AohcBERnInyZC/XBIcHKptMXYJYndVsT7AYC22zkwFwOvlHB89CqAAjTvg1Odnw0jt2FGDLh6sMTeYEFfhUaTVSFSxLKTI4tQgatStfsvb5FN8kCSBvJJQAFuu+pxlqaH+Qh2aLok90Yj0j5/uWqQPM2t/l0+v24QiiTMZ2z5gL+wj2g4n/I936Buxzczec/CBZF3UoTcmpJ8/k/d+bsuXBAjINDRz5aFVL/be4Pq2EACDtH2hHgUo1spGDpgVRcURN2GWUHhhpT9nTgbRB86SwZmZqNstfPiJH1cKZO7V5QfZWjORYX0KUg2NYjuOAhj55bQHlh9A2LDdWzB97r01Gz6QCWNv7XfBqPYZIp5sIq0iIjrfvBSKXj5JCNgsdFByGkUDhtL6MbEKOBMOmQj2wbuhjjhxYIvDVEzgIZcB0gXnwbjo5bmzzwuUX65XMpvMN+pjmzV5d7Q3r1LRkesd9M3pWWrPrvv7qy4XH5+TjUWXx4UOwDGBNfZ2aKTmvAYZs4gwiiHSiu4Wgk/pfr3UuxzPvZO8gvAgiTUYIGTLFRv5A/jLX4ea1hQ6LOgEiyzFW4pHEl+shzyIXfvRI8hkRPzWdMmsDv7Dvw12qa7PZYW/0kcrI/JCK5gtEYPoPRQJ6gpoDxjC8wOl726MQzZVKim94KJ+VUajNNejPpwQC8txCHby531oKfkxpX4Phe+4AjkHRuBRUKyWpwTAlJzIfA1OvTE9xTTKhatxebzGTP/noqwaVRRltoWatjR455zL7Yoy1DdI+gAQg6kkxtlceqNywGAEbdhNf8DfzpnKTVL6t9+mwA9Lp7WrpZKkVF/aSoXXxcjqGp7vvVjAb/lx0u12Plkx57QUmS72t8Bn+0qCyK+zJp3vEzdPk2l/7oBEKeH9dGMbbZHuVrtlsVPAm0+aDRDmZbpGxGFn4AsaTwnO6blqd9fQ+Oz+GO1XwnJUZk68pwdvDK2SypgeI4qS4YLAC7+ssnQZbYnZZP4ni4yrEw9rj7483jDuspm/5mb3eEi9qCor54/Z/3Yipvqvnvp+2B7Yc18Vcu9n3i3nBqve7KimPFMKM5Nz2ykupCSXIWv2mAdtDMQoBjhRwYn8W9JYSJ99easx4mYdpQNU+VBorAIhrghxJ4q6VQRGhQ==';const _IH='1ae0da7eb51ea258444dd2bd8bf8ff73cf0cfceadd52d5883d84cc6029a214c3';let _src;

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
