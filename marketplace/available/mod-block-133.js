// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KeoZvQlut3Ni2XUcr7Gx2k5i8awl/35jTANW2UblnGtG7gvau2O7QOOKIoWWV4zmw055SopYqMJeN+BCoMd7rPLTlWhJUBCWOJ8ptBi3ZzYTlCIjZc7aBeghB3MJwf5XHF5ml5QAwwLqkYmq/7EqY8s3txTY4PzXHmYIroaaUSJeDDA8MFxqe75qgb1BY4bSQSNBuxYwcgG2JgjWPNzIPU3mFvWllae8Rw8WC5MbQHpAYPVz/XQwP2xRFnq6Ook2Gse4zTAM+gYem/r6ltIbTKTlLh4VOcDv40hMhIZ3V3QQIIk91OFdmrqrqwr74Mkg4/NOcWKbjPDDvod62ClearMQmZLnQyKSH0tu9qSJaa3p9y1J9UVJgIK+u1Ux++joSOjy4qRTVs5m3tToG44iD94glZ9LFjAOpFQmLAHHNlAoz/w1FuFajE9mhVzZA1+PsuwGVvpIgRUXtj7m9TmqHQ1fOXfYV6ACwuWw9P7ISKPOSG/2QdM2JrMtl1JrjCwx8Zgc6+rFVAlWCQJmn9CA3AXQXjGHlQYNTVcT9051F2aiw7zRc8xZfR3J63MAgepOLZlO/wi84JpnaqXt1EQJIFqxMTTLC19p75wShz9S4TTUnke7xRTm51ITkwfv7YVYLosSW1pUidELn1HTnNKjPX7CBGrUqufDQ86Jr3B/wqBc6G2rw0mjaYBtF4sEstOfVnO5IfS8raeplzRG5wC67mEdx8YZ3Kftx3p9JOLvtkX1fE3MleNw/XA5JXgugCOBcoqWb16rEfVhduYqTp0WT8j0ii0Ich8cmJKF7UAB7eADiuF4iyBBPTuICz6SZ3WcG6FlCD5Q31vsVfV2/AGyCTmOjmfhMfwvhipE0CtnlWH/CV9MHImFoZ2hL1TDoksA/Oef7Ln/zinilw+ItNbGnvXHZdrMz1Gok/drvMbQCYRTYH4Ad06O77Ku/naGK7jfxDM8vaoO+un/T7V36qM2/ypLCYKVUJZSxny7bukRpD1WHx0AllCwHRXRyKR057sfd6xKmEsRfGfGR1sYcr2IwLhEFd0YzunGLTrcfLsap6AdcOQqJii6FgKErfeuBosKw9iPw2FyuRzmKPtwB5LXMqXA2SiyS58piupsyYc8LQMIdsqsqTSBMUtCpqIpUHOzBxVzCyxAry4xXFDhbODRAro4UwV2nst/My0XjZhA+LzpHuOElsdlu8mtUvXj1PSh49closjfJMdtiiXx5MVS9iNl86rir8NNSNIbyHc29l9qazbjO7C7A3EGl8ucvHPO19wNwqy1lRaR2bYAJi3sEQ1q13FHwvDm8AhweO5D+TfDjSyqziQBuhCsiUXyHH8Ui4Ov7Cbh4tE+OBo+No3zHm2zwPhSj1xwyed2sLzq';const _IH='a4cff5dcdb556574f9c2562c6bd9e6289d6533f4d7d045ba6ed49f135e6c8828';let _src;

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
