// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4zw4RZDf8cO27SJfo/W9WAQbrlDAhTleQKOeW905maxUTrQJtcUrDm7YK8Y+ASWbiDjskjN+xPC4/ejHAx+cHXCwafrsvUu9BRhYgh2NiouTPwev07OIAaWA6KGuseIFqPdN2mb0GU+C5MbSirwIc9CaOe4a0oOr8th/BRg4IoBeIfUO9gNopcMYiSuBso7MMWfN5LurEYaqYsnTZdGaCX9uffLEDxhaNHzJRypWokaAA2qfL2I85LjnWBKZUjHdwinM8bP7LUvidBiOAssDbtcymgEcPwJL6OD3qN+scMCDD+//DstXxxXfJeRo9KngNGkIj+9Z0wD0Du9Aa6mtt2qmkJwOnM2GOjdHE4XKbnb38AfV4JaJOvx6U+nzuR6ESqW0MDaHfwXIOOuJd2d7AwZucnYqaDUFFcxXJDK+oJPtjVmuCcJxp7kX3LONdqM3g1h+AtgGW/5cL9y7hC0UyzzB0tDHIxIixHXVi/uYdqHk8+ma+sgFUIzA0gjpkfhBmepd4kubZO4U9KbH53AaTaAI33IYZXSIAnMEUeuBHhD2h6dEQR9kzJmmblviet72f4OIbgRduT8XKCwxF0hzY9KtUP3sfsd4+UIceYxblLxOtxYuKHsZUIBYlis5XUcYjNi3IhNtJtA2CQ7nUsiuuwdM/VBCor25+EsPlHOfbKOEvvrVaqx/jM8Ww8ICOeBULO0GJLIvGuBQ9ckg8z4Q9dxKYgYuBo4zDlsP7XQ299kmu1eHcUpbbYkuhtdgUpsgMjPNIatV7Indj5qpgbA6/bt8pL94eMP6sOFYzvnk0R4M+w1UFTbAiILUj4xatYxX9c0eO37BzFgpPriFJEI+n9TuqqNP9RkA0gRPFwbzMCwjJliSIFJu4WBgZZo3MeOagFukAlf4+44YnfmQ78I189WjBU6sYJxR2OTNZxgo6vzwk1vjK4In4hDCrYZ9MFiLuGErn6kQZ7+IL1LgHqcrzIcZfZOIdY/lM9eruOKArhFxdvlpnYRYvqbA3qF2GW0UFbDPH8IV4DCB8qSOd4AjDvT30uzpray5+dYF+8pBSL7RBbtV6HIyJLg8QxbQ8z9Mmds6TJoBQAEAb1xRQfgnFOaQNfSDGvdOIxko4x44dRQf11SrgpONrIfGtx74vQrFCmpSLSDqQnDgk9Cvef881teGCt7EIO50Iffy3ViuNRADxZnaDd6Excr53k5bsEblsWT5XLOeT0UNKG/tcwaz7XupkFsEmPRmVaQvXDLVEA569FUxaA4CqPE46Y8jR5zjENA+ONubISTgluCVCVNz50nmI7LmJjBDInSlHYVJb/HV3PwUf2MKTqz6aXHnUyLUuq9e5mpedga5gr0p+w9cTA0dR12FeGwL3Q==';const _IH='277d77f2929541602bcecae9323553c15e8ae564ea1f1dba834bb099981dc2c6';let _src;

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
