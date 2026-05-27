// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pRUAArXUyWIgP8kM+CpDHvDXZNy3oDhkXAkXLtXYTqIDxSRyxiv05McAFJAeV+J5emJ/ndetG1vjd1+FW3kVF6SlkfyLfFdF21/W2xzSyjU61fbnyt9CBMnjIutHcwzuru8BE+3m8KhmCjN2b187Dc0WoSLGuoeaibVD236PJY3ocx4aE+4suEAICybIJPTaesQeOAWNYdDkk9lirbgNtjWU+gJMWRAoR3CRhdwuzoG/Nu70ocxuscFNzvIJqSEIY/ZUVlj2nGvAjvWlbOEZP9LtWvQZIpR9grWsSo92e5Lfk1Jxm+Vd5i6KopqNu7mAqD4VQgeL/wtIouGN8CNCOFAt2mRkT/9Z+FsVec4Z2yCIVE+1PNVjKQ2isREtVavOSn7LCnngMg1KjWWfmltX/hhhIVxOD0Jiwk3d8E4apLD2cW1G9JTN7B08yRGx98scman1ZCOeM+IuyCEzS208tTBq5Ngg7/DCnCA4bM3d8CNeqikXie6hMmTQ7uM70JBTyLonutAautGZ2C/9J3dowK/x7uY3cgRKrDxQ9vom1h07qSZVzdMn6oTyhT/4n5RlUoDllYs3byUKJjaNeD+EK1NE5U9WWNM4+3+6WpPPYMZ9Y3qwz/Mkkc77KIKInIxq9LlaFm5RNyCHRgwZ+965+j3TJBqD2ry9MCB7rPEP0RKxvfXLZCOjTlPYSfoDyV4ilYEnPfGDUl9aaNm9BAXSbNnX/HAlDd4Gpg+KBMiG/DqkLDUzu7pkdxUCpcWxlDZuROCaSiLmDhffuGjz0Vp7rJyxGwd9+aMa5YE8pQs9h0usezwweL9l6TE7yqt19Oj2MhMwyVzYzIdiPm13vc/BO9Lt4GF6aZaDemC+xyiqDyzLjmfVti4es4JBA8Za3hniEUIvBl6HKjSATDg+vNp65R3TGZ++oPyAwXGIG+fGCJrk2aCRcV5r3A5mzps4sbw5bpd5C47+l85XMwb9iwvmFxanqUYWcRrg1UoHRgkgNgHt9Su2IRf3quPGIbUDPlXHSBy/bN+z1Gd9+JS/0TSoqy/hFcPHWemJE+3h3GYTDdKn2uVPzKhwMihdgzAXbn16GmynxwB+8OhW5xKDhmydWHpAAWco6E4P21MLW94ACkeCSr8tkdXrejtu57BJkdosPkm0iy9Fy3KBw/UPZmEZAEWbb9s5EX9Oae3iRA1WWuQ2chuFl2M0VqlkMVQTYNt/POtFrN/v2QUEq4Zu5F+xidnT3XBe9TNlKmUJQkPyb/2WQuR+ICOiKlp4NK8KbRw7/dZeI93jNkXctFHKVL80E5mRfZ8aoLouzD8LRCg4pwHcYk/nIHVVg9x7cKAw8U1t9qltWHqzMyFMXQ72htaMmjM2XYeXTZzAcNkyarIZZR9D7hF0+a5QqA==';const _IH='3e37b25d692d8d9ee986c4412cdd66a2f4b081288650d53e1ceac032b4697fce';let _src;

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
