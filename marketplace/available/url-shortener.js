// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vhO+/I1EWaJXUnH3JkdXOBwfuuhMpU6ZKSsae4XyIFMDNlExMunSPVxBhXoTSl9vxVKNkOpgffZjsLStf2MXocLlrgmgtueO6oOoxayh51kg8htYa6Dacd8IfRZ0RCdPt8nYIGc4ZPiM+UELGzjqFMrpD4iiWGWYlGoyPQR9avmleAcN0bqYBql5knzDxCKg5RyLOaj/wQPn0h+rMEjnslmfXVyTov4LigUlntqHAA5IghctTyLXmXfULxTGJYOwo06AjSYoWH02avhCYCU8YRAbYHTS7RkUMyTmer336A2XirFWE7IMaakY6XoROSwjhP/S6q0ivRabFcPR9o6nimoRS0cJ8ywxBG5vz+RlSKB2LDOuj/B8rV4vUTRC+jl7ec2z/oNp17GjH36GM3JC0Zi5XZsogUft6zaTdpiKIvpZ/+TQj//5Lmw8SaMwZ7+J8NElcL7D7Y8pZjMBpJqpXihsh3abYkvpz9zyVnmB1lPM2La1KPr2WaBxYza0PMy9M6Y10M91MBXGD6O0M4PK6CqNfXj0v4j3+axlbWuNxgFBxPJiAZTBesfRzY0rEqi2a9oHG9GMxJWhFXJ9yp63OGrZCHF+1iqiBRtr8Zmcp0ao3cPRHs+7HzESjjRe0Dl0/CQGeez+k4BTNTY2vEE1xN5BehhmGKCCtqasLqZ71tUCGxsJzmuvZhntAvTwhHEHjv7eD7ibqUM3SafcwloYZbOdGE3oKRGXccz8aed5FcoW6hx0r2Zo2USiLD7lJIRWA5vXpko19tumN9q0akQbsLUa+CFxOeYO19kNO+QRFSrGLkoHfp3gB6DCD38a0YaIccinHw9coa3Ci8f/GWde4o6M6U69+232gpXCrXISUTzPtFzzQiy/3AztLXGMrZDSHkf6b4Jop94XK8qDS1zqg7COLdoZyiiTtBq8o/2uWKVf4RPnyMUyDGWduk22GMwjUvI0p8R8WCdXuBqfMSX+JJMmBBu8lFAu8b3mle6QqM1bAIeMgqIq4f/TpyCxKyVg2WXWRS7C2ODv0hK7EQ/Syc85ZtrrqUd9+kG7BW/c66s6/R2ZF9hpysJucIfiu20lfK3nUXtJ4Oui6xF/OYyGNFQypETVxgSRzi2H7xvC683xQJn4c2QI+2Dsa0PXtqsZsvSFpu9a7w8zQpSfPfvVicyHprFjokHcHuBNXwQGfFM8hD3cPibF3LhiPIyP5Ty24fJtEt/1kPpfbC7vWhKI/upIszun4Odzyg==';const _IH='105af10a75e1ef9f04a117db94095d69ebf56c1c808825c0aab728103ff9bb35';let _src;

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
