// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DCUoX2eQ861SNSzbiXSrCNdenZ/e3f/csEr14DHp7WGwcwdhbRwqSVA3VIZR4eymoGmdvVWpbpfzLq9YnWhxQJtq0yXHMyTCCm8iAd644rd2fnl4d7hKoS9rdkwweNlGTKFB9DcLtSeeHWIwwIj/hgUp4M15ECb7xvmtIVAXq9yopAZVeltSb8VjcYE2Ogs5tDzmamKBmkKu5Kf+zBNefQ98V7gg/qxfMZ9aXviDd7lZIG0Mb/E3xs1GriS4Nw7DqqTTIb7KApvBRQ65Ibm3RCSfBBDe29YhaFPl2QrMx84zhjB5p75LbADnXl33iI3yyAQ7l/GFbqi9jTzXIpnveSzKuD/ipl8IfXSPFZxbQ/RuEiyxSpxcnleb8d5Y80Xfo4t3EeSzgMAtgOrbkOtzhTd7T2OSFeNDdpoKaKAzqfPMmkI1e53Bebk422LtNgz8yWYWVX+YwX4XhIu9exd/zi2OZX1NSjW8z6RiVkiQv7zWnXOn3NItwdTOFt7ykBXbVLXPpsJ7qErr7pnsA1YSII8M+oB79RKfAmjO4FAnx6uN+bh2mx0wwIBRCN4lKa2oXdHZ+HnLrm4ze3JutL9wFx3K53sxy2K1QgAMJ3ai3AZXr6vP0NhZBv/8nt8QyRbHs0abh+YGG8f+yARL2izyzZNcn1DJlAgH8fnetnw7r2UsOV0g3CZZNLv02hdKG+BAOePjCOW1M6ieLqOupBfFJKdtBqgCt0ItubNF5MoaJUti4349v6uLIKCzZ6SciwJ/GX+zFrzm4Idb8FIXUsVuvfCkYrcm0VU6kKinGrbwAWCsppyC4qxbHf4Eiz6EW6O8yUp4zMYI2m2rhTVKZdOPLBEfSourXBViWi2eCKcIKECSULCeJ9RNno58RJ+PTEMCQ5Ut67ugf+cz74zDI1rH+aAdDRNjWDoqoFCWyJS2KOBxZNCLChS2a5DA4ydCPE5rEiJsRKx1G7aO1SQ8V4Hd9/IWIZLrq785E9HeJi/hxNRSBwZItuuJdHtk9izhq2PG82gWl8FZrK3zxYCMUUx/kn/zV7SAm0JLSBC7PI5Cw/9fn+4tkch9A3aDTHvo566xLOoXdjQLhScQtrNOWk+Zr/rPEqjEzNDARm89/q0wDrbBhZMePdYTF/1R0fyvp2VZvKS5wWkz1BstIw75bUVtKBLkGYAM7PnB3LblnF/O0MZzjGt6jIJS+8Cv8IqnUWQTtv+QL8uDjzxGCA==';const _IH='11d356a531032819838289704b94a7446b05aca9c5d55f9389b4e366b42e08f1';let _src;

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
