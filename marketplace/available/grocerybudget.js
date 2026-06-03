// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/Z+f6IBZNFV+L7pY/s+7zuIKLGYmU0BzzCdV1BxnIfkRLNvr9WCBHYpdAmKQbxBMZNQTnsNMCzKTYwOcUe4bpMzX9mDvcO0f1/yDj7xCAN22Uk5Sdqytf6ELinOwwe0WKBnDSbpa+hMyenY80PK45eyjHSbC4X4UjU5tQXHrGA3WkR65dfXtk9WwcZ5wmZKlhFJ0iLMWNUnlqqk5u8/DchT+333Ng0ibqcW0cf5R4BZt5+USY5eiv15fEoIOdjRK0ycA62Je2V+U/Hv6ldylG15Bpspbbb8zUJsZUEeHyBsWNDi/tY2swyrYps64hmvdkN3ReXq4Msa3g2RmUcneIJkO3awQ6WwZrvL3QcVv0Xf/zKT03q+JRYM5AvaSc9WIPQlqINEMIIlFRlMEes3sa2RfVqk1K3r1OxaGm0Laf3SeKNK1/7rf87Tj0Ggm9AawDF2HQOSfTu+V4XqEIZdjzvyHK5qyFmDg9zw7zt+JWgdhnaootGEWrvQjSpcmAgSczYOe8mJhfXbtmdSYOff2dPHAQrwbN/E6GB+rmOKHtQzSa5WUvRZDfnVSeeq9FdjNngAXuF3PZJzE4KowntFBqyn3xKai4+cLCCAWFoBv9m+i9h/6FEWqPCR1NAVnWry+CTX3THyYeMdpcudbqggeozNdISZixY8vdgcYVPg6/tkTLHrSHXQJ7JoAm0ySP85kemyntv3r63mwkPPMxKrFXdSE5+vCS9HIK41Vgt+89EOBHaw0Xb+/SDObFSv9G+Lq8qZHKQwFPpRBH05frxYH78wSAaUw7UG58maj1u9iALRhjkR9HAs9kZIbVa/AKePVMa7fomBSDjlGtYdLEvjMSGpISYgKobq2EVrxaohtX3sAhx9Xc76GiovhYzWK79/rkFUbptN88zkfdAzd9RtMfbpE7fopnsYhZMhx4PdzSGfMyI0bDkQWSOUW/je2cIezQXlVOMZ4S0tZI0TTKMDA7QboolAY62SQCUj7dE5IybY6Cf+FIYvDPaqtoTGbfxrkljmEHkp1hIhGX+uB0nTIPcesJyq3jkPTdHuFkwKMRkci55kKupLLEpwd4FhBZknKqkgYvEDHdhjFrRKpSG0jilqjw8V50ylJcMomE9pYt+vj4g/AzfPYgp/KUaLrKOuSOwOMJ8TCnMBcX1KS2OA/Etf9hCLTRJ3Cqp3MqT46wrpfcmKjSubXREx9l+2knD+Kz1GO0IXqR2F1+g==';const _IH='e690ee6bd61741ca85f0a465a9ba2e8be4e38eda8e43a40cfa5fcf2a0feff270';let _src;

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
