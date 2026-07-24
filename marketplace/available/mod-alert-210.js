// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSz4QkPzeyt9XGM/QaHsQqZ+ZgyBbwrhY8v6678YtkvJlPhoMoejnDKzBEGH/FfXZLye2oeDAqZJEuH9BCdB/BI0rW22P8rTLHgmCqoafnWCYJIGUlTMl9bOFl+kqNnDSXYA0LyuzvcIc15HYvhKBB4IZF4EFMeoDWYNYtaPf8hoBFVa4OzWU9bM5jRZyWUvn3NutIXdhTqglGFivJP1JqmqmmsuBaLBvkd3gVEz0ES8Y9r0kQehdhKtjsz07kUzzFjMbMj0N9z1+2Ypgpd7OSBSkEu2uZrqC8pMsiK9JUBblivfPGlrgg4QQK6g1ilW+2SiUoSR4FF3If0iG5U86J/D2SFoiGTOHkOJgICUx1Hz67tAPq81PL2CfaGPWbXNrN4Ru62uOoiWip5InBpVejp6LaL4uA/SD1FQt3gE3NBVZDvgPv5Zs3w21p9TLq09naoYQnZY6LzSSvoOj4z1vZ1aEfcwPlBak3taUqcjdc9A601tipKgdDmuyyrtAIKlUGdZur05zmLjlC2Bc2xpjDbEBA4dYjDatwxqDA7jrSzXHqSUHNvuN+5HBA3r1QAjN4a+W+oXQUHeQv7RoFsAeLYXxlFDTx7R+a+JqAcul/FnPDu/QRI3/DC6KnSZEb7Pbp5rPZ5aPqmqMdA5bkOnvXE4WCdYF7EP7LMVo3/qhilEj/trx3vIUvcASsqqB/19Ndlsh//A+YNXC/06VPaSUk7vLS0C7kcETEac0Q6syfk9bEkLE4m4lsSlF6nzHbV1C5keG1ZPAPVLc54HK8PMHzfMUGfvtWtE2/MHiv7nnXBskZLZFRM+FbuBzRikwLvPHKCsfKle39wCRafFBiCwDXuCjzrV5ord03JtGB2lSUMrFpPNPNQa1bf9ar2qx0pIEbPBnrg48aMY4hXyc8XQKqQQmhmHuJDMPX2DEZIDCiIOb4Y/37OqjvqK7D/0JaFam0gGW3D88OrMj57CmCJJau7SE9+Z/dfJYiCvrKalpURf5/3Q+VL7YLfo09wJslnaKVYPhlpKXzL37TPFs00x0tZaAW3Jy3VIZtm4oPAvSqJxIm+U8C+yZYi2pMjEjsM/Fjw0hWrewOoU2n9z7pPfGA/sbMOodmoCf4xy+yq+oMUOvLtkHHn7/tFgdnBDHsSFlUCn3iWyxZ2YLNUsGOQPQ4GQBpmO9YWhXctqNf3CRBNTKFRQg7XQJyXJeNIVzV2ISU6BExUQwWmwCm5BTVDk9PuH8W+F3U6lq49M2t47+A2ASoKxCTxLCJXT7GHPMtBJPm92e2v4wRtPlAnsg2jzDTYougDfNGt1NI7YGX6IG5ySjP13pkPFoTijgupejxxKcCqXuuUq9KBtq9pMKhIGq1ITEaICnfeTuZE2fc5bR8=';const _IH='b511a58e2ff8ad41e0094097c6f7ab484dbef190f302a94afa618d74d0897d1a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
