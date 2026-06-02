// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c/zEMjH32n42PWeSJzU+UWF1TE2rhiVNbYHc5tSwnCB1T7r+72cCaZzlu+8aqRk84L75gmbfvlR7R8K9S9dcpgyTUQ6q7Zq/U0ZYbfk7PIN6Xh9IkDlk0qZLGfhbEMYSpAz1Yd1Y518qMtv7GuYAIyr4KlegVX8Ac2U+YRC0pFMEWZ2ZrFcVeRDEabUk1mBkbJdngRhr4HefOLSibIhpzuR1C5H6FiTn7sNhyxq7hQgm9ZQhMdwLBsndfv8sK7241CkDxxLXtBRYix4FquM0xTY0awQvGJk+oBIaLnUFHQUDt/3UZyCeDNesK+O/8VBzQdb0ds1XpWtftAv1DFs1DHyy5hEcrAcgo/FUopfMTz5o/yMh1aeplUF+eAxkyYIi2+AtsBbIkz6FP9sqHXv9+nFPtyOThKQ2hqOYCIiCmMJA9TOQPhUDn4zKT187uwwFK6fXHDUa7skfRfDrCCOdPWR9V7K6PTZfP/AbveuT4nTzzDXl+1KltWTLLXH2amJIVcTf+1u+iXL2ASYOm0DJ1ny/dqZH5YzKzbAfwRlOJ0P8FbaqEPn45Apf6OdmIjB7NCV/v6eOKCXbfpy8mdB357N7u5RrwWYhI7dk85Um+6PF3EZy9JIfttqYcPExusGJjp4meJKzFNo9AyLZ2qGJP0cMEARIwLtjUbj5e1OIYPTbjAeG8AW8KqH3DhS5CCcrnRLa3SHQ2oBMwDg+aSbpB+eRqXrkdxlccg29WX8TVHcKLFArh5JAbYLL/SEXOpXZ3gDMcl0rDDY3pWkKJGOqW8nHxIWrVBk18/oHY861RdRkfb31sl4s/QEpslXuJSyL0VmGexIbD/l8IJ+/H5DSSbK6I+eN3uD8b87xAcsEKg5TeRrUtAiLAtR3miG7l7MHtl3yV94BEYnnXvhAMApXgv98d6EevgFFLvURm2eEu2sZPTZ4n74P65NJV8UeWsP+yt8xtfgYPNHkbT+V4fKoxGJqufeGxKJ4QiZaioW04Q962co3grbNWYbEYsOZ';const _IH='4b6fc5210912469e65304aa4e39688581b469e38e7766b7ea72e45f3f1e97703';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
