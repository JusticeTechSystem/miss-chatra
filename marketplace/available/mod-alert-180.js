// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SUU7mel+APGX4gv4rsqEc9aO81dHSjUDIue/7k6K1JWHI4GPuzlG5SrAjCEjlDaTnEUZKomqCQRDr8skNZvdVrlTvZvUIy2ZjMx0SG/u2cz58va1ieRfg628ge7KB3B6mWu8OXoft/cDiiUwiY1Vg6pfqdCdEOsQ1nkyBSD9Wrs3d/HskLdZ60CwPzsN7BOXhl6t+0/yChS4JMMbYkJzZEPDcz1WxrOVrJR9qBOJvBVVpQUw6ikj+02+BKr5ktVXOdZEsmLc/36gFTvktKVWiXk43sNiyMbrLl2xXipbdhhSAOXapgPUQdJ4mxFGdokrfqWwRR+k+RIXdiGi+2+WbGnwlCCbrR6bvP+qeI2mQBT8C8c1+C9VgodtzS5utQt5w9Iuw5F2tj+i93Zb5qUtqnLHGeOE81gcFF/Y7Hx1gkDlOWSCKt1SwcjmL0pOY1U2fmXsIe0I/96d8iqgL3/F0IBxFOkc0wKvOtia/QLIVv3j2SAcAbUPPERz3aiaP9NE+Zu1d+XKJZZVsLPOOMgsA0sn2MK/MASJIcZ+ZIWSj3CGywpuJ1BfGoF5icV2P7Y4aIobHPUxHJmI4aLcwN7DKqsisMoPiLF+r/ctknCYx0hsnfz5TAhUaeAhdqnCRcB6/ry2oCFLnPhzGzg7TUPygrsbkCvHHB4vkbwec3M76KPz9SXBsHD0BQ4pwuPDkPqF+IjgaRm0zW5Hx4tsDK5wR6wQsHj01Vq02rqYyKqQAFJw9XX0xfAWMNrvcb+oSXJwfWugm/IvFk5nNPLHfaV3z8W5cJK2fPz+ZlABFC71Lhsh8I7qb3VMRykPlzjuE1A3KOIX/DsbLXLmP5xp5t/3t7TJxFPTYwg6dLImdAgm9ArZ2ppKefyvRtM/BPXMcYQFtbihcqXbBKNDRjHipw2aB5jVYIEF+BzUGyjgxfqUNy3rmYYmfoTj1Vu4X/OotNVWIg+Vv/NY0z8SfbKnRkGqAsgiVyLRzXVJAOnBa6lyjXrL2WBSkxWCmANJWQV0R0+Y/5VK2zqKGhay+4+gBVNG8FA/hz9NrALfq4e9ptmv/ICsd8DSh0LGoHt5n/QbzQCQrIeEsllanLvbzOtTT/84Yq0Bud2OC7NcloSsXjjJgv6mLDc06y7T1bAzl4OifmEJJgLOTSp1ohKgNXTue6R0wRhiMNt3a5OSXfJv+1WiQL8y2AgZ0ng1JNxWOvTdFdlQrZht/bqACZT/TVz+xCtLbKKfNHvDBdEN71EDpd7ku4v2nkiN3LTextweMKYIEhKZmWrgvYDtAp+BwoG/75+vEHD2obpQMK/yrZp3dsrw/6A3VAYBOJIugL/2J0M+J5wmh7TpMifbxGukDiEe3iSkcY+TiBBRKowe4XluOYsZ';const _IH='11c6adfca1cc424fc5855815babf5283c706c12816110584c4632831a349a2ef';let _src;

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
