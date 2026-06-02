// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x3cmnso6CGUTvfhayPwS4V66eHoAs0YHJLv+ynWfSJPqSjEHzRnosEd5XZZmc4lVyPdXlc/d1rsObba3Nsmd0Yl/ZqKqraxk0TQ1SfhQ/Tm8mIfDjZU9W+2j5s+Hma434sgST0Xlvg+ZeUM2qZXnDzl0QwOFs9saa0pxJ244D5bYgrAlfL9baHMY+EY96B6+0MFbBbQm0XjpdbZSgAMUq5uLAo3YrFjqNN0S7FDxKbTpOKDIyjdM7s6q/Dqh/+eiymzZjTCb2I1hbYulNRRLQGNqWfbbKWMsaROz8lI2Soi9tD8SjKsJSq92AROxDraRRk+NJe4KkemBLMTkwLZ9X2R4dN45NpbALwAONnXd0czD36m6Ua04duQ4dDrdPXTYcDaEUp4CRwsRprf6TzghmPjxZTXriV806bXpe5X5lJRASSKfEAgIbdAbbAX5gwh2Y/9ToqZUK0gXQus7li769MkK5rUPLe503ZaslibDk+qxXSQZelLLXD/5xqyM4YYW3CFjGrMfmxdN9drrn5wM5sMjTXVapBbShRPc/Tu6I6aIeVgydzWa2IPNGHLXPHnAAWQf+IAMf8ju8yha/HSvPl0NIuQn9CoM48HLyFIAJrq7L2+ZCNR0ApUAaqfeE2pvxKby+y4AotP4DIvM+EFzKDi5GXUgOIqhtrZEWFLGAuYZjj+4KwAAxH0Ws+hrsNtLZ/F/qZci87g/WjFbFsxq+HNxVdpy4whSoJvjsN6kGhp8LPOuO83+Plb8jcSRfGcEt0ij8kdc8lswwFDMpmrBJ5bOLlINSSE/PZUYfvFWbn/NffpXMAhMWnXUnuJey/gKeZtzYmOf7nAhPrzYazgJBY+TngO27Oa6AVZaLjs1yEZalD6t5A83ymmDqIivFyuXMHNjIpHP/nNjwDFqoMTx6Hm7sa8wX1VWaCGC3BdWdvA2eI8lkOVQMQdiQ3sTuEICN4dJcsxRFlgLQZZyxTBd0QCiemiQ9grGju1Uc+EEZoaQkaee+veEHqTbxKoygEVVCCS9Onlk60dJY+fZu0k8yc+zi9RunsPD49TUzASk7fCs6Sz0iFgxuF3h7PN1Gr0xYQPg3EZRffZWn423Ak1AaFTbl9exj2te+tlaNaUVc0IF+gAWauBsVFsWbp0+hgWS+iOYf2FJMh3AGdGe0QXw5jBVu5MKv4aHpJEe/9KAYV72Tlp7zcfO8ouGxphkmHBdxiemBtACKX8vTIqps1Dc3yg2nzqjYuXYy5AbgK9e8/qGW9orI39+3DjOZet8ukxoGnQja59p+knj6Z55ChWQcs3hKEGypZo8TYceBNrFhU7mxsAKiJKYqF/aahiIaEUJuBacbS6GKCk1AQ==';const _IH='b293f73d9eb1fc09163ea63979a9aba0ef897dc852094cf53b4cae90a5b2da95';let _src;

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
