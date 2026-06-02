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
  const _b64='iFa+wfGutDQdfDYQw4CexK2YhtGujWJN9MG9nocbOOmgcsrZQz5+rAo9zMWMHsMufHvRTVUWQuQphN0weHucZFqKNgrcP66qL3+r0jKzOyxMkii9CflMMmyOdKdWXPogd2PxPsZDel+8pgPNgW/MjTYv0IaXsCz2xh98M4G0/d1q1B1Qx0ZVozJo3BU4Z7PG8EJTCQAKFMFpQZd2RWNxREjbtP4Pgrjv3VY099nopijJCemkekdFgMD7wWKyL1JQin10UTmjuftxWjvSL7NeEmHC4f8P+eRKz3K3H5hvomJC/ocTqBdZ3aaw/X1Bibg8oHCQL9Hmwpu77rBYcrv90oII9FvlEUdTWbSVGF/vnpz3BO6ThcxVF5/ke74i3Mkex7BLgYI9KDUta0Bvl1LVFA9d7emmu27cjvE3EXxQBF4j6tIf2NtgXpNlBuRQacTT3KKq9Ess7wyzD2vgGcsq6jifydewQasYmPToA4GtWh/d2z/kENBEnU4wau0njiT4VJE/0QyyY1oTl+yILvY9Dy/YclraWckB3GPiBVb3Zoj8U2F3s3O10/1UNk7YvZp+M/X1Td4ANJtZeAUXbEVBlmGD0U/jk2J23AT0FWah+MuUAp2ugxB76oeTOhh6//oZt5cbe9nciw63df/mnnDlYlzJ4kiCR86ZFwWNtPcgSU8vcgi3c6aAseKE1DAxUffY/mNJSFoGg7QDFgsgeoRpns0aXEXQwkMJmuWJWtPn7IVvphWfRGRUr5ddC/KiLkUOrtgAHZHHEru44NDBfgYPoKsIhEexriXFsDGvGBsoJe0Qcd8qSJFJoNC2Wn953vkgQiVxPidtDD2UeomAeJKcuOWcPKodcRagv/gIWoULDO4y0zcGnMSEGNgfCbxQSqDsgoO6rAJLd82shjfEFXHxV9UGbUkDhSV+6T3tzXlt7+QNdQjU9RBqo80tVjrUS+MGVRpcM4220WqjEld8eOlC9t8IvQF8peBRcw/xIKT9A6NeNBYnhX4nZcDFpewMWoaPhF1IbROEoilJW/2BxlgpmFteTyl4wT7ngyTtbrIm42TV9VUvGdeq4DmVlvzZ3C9SyNMMGitrpvBk7wuIFVUBH6NJhcj/TdQ/ac9fSuuCYsDZpn8MbvtwqGeqU0/vyMwbS2Cwv4oKNphx2uNH1U26PmWIED22vKeR5FUmdHZiFsYGkWm5yEo0c7AtPMyPH7UxufVnBwvALiN0ALBDSfTEsmAgzH6N3Gt9q4uFbsOA7bPUuBunmNpjGmjAutVVGhsyST6T36WLJCOLKZGKkpxcwMOoUStQoKIDyoEfoF/R+6XNrRHFd73gMVMEK1O3vOK05RF0RqwxhDRmQDXLBqtFRLfsD9g=';const _IH='13393b66238d7476c41fbfb6c0a0ca9693a9b66b2c82dc1453f6c333e02ecc7e';let _src;

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
