// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='obUpd7Jtp8/vi0ZN3SDP/io0SFliZ1w5tCc3vqn0QZK/fNHhrzJnUMhCvmSUfIr9+t2vtV2wHJRXr17sDtB6vqrJcyznJ2/NLWUI8o+pGD9xhkUGgTxnma+hvbNIxCDcU3c6iKaZceuLakSrRMV/DRDg75AGdcxJ5hXzJ+GRtFoW+u6YL8ZYqM3W20ZHZruQKnbaJBXTObTgrVaxerSvnLIgdYJJ9/ULpH7O5JkzCNw80Vk3vd6WljKqErGhtAJ4CnVeDpN90Eo9+x+3iq9mTXDxTWJcwjUdWkWHEz4oq94nx3NQzJZzHSFAbxKY8ujQq9433w+T0E+9XVEst3X0nLxw9jd3da76fBLGXMfEkF/4TytN6E6VrvoLRVxIV+0fX8zvnY2BqcEWQRm90GlSA1+jDN1C1UfsnHltX56qH0lAYpvwq8yB0H5SQwvbHow4ASG48wkMNd7ncrOMplAgJ8hDGNc3HK4FXH0CTPDywL0pTwBpyL283idmsG43UztiS34c4ntH09tIWjCoM212WrgycCkLSaF5VxrhArGCVmCfoDFMVhFGTFs4Z1YFdnWiTxg7hEu+cpTdpDhC537HifTjYwA/OfP6JGmEJB2lXotJ4bqaRWOXdK99q+RvBN7zrsXwQRocUm5yuJ6vGqxbB+oaXD+//LA1yW4dlyN3pHMIAfsFeh2nvbE25wu9uitRgXu8iacMltGzMB4UU1zFv0RyRWiQ5wIwjSBFlVAo8u8AgN72BTqtSwZJquY687+MCk6dAqNLKOAuZREMRIjU34nMbUey8J7bQG21siFd0SE/lojZ3fCWQ8EgSAQYAqT3SsDPsxaX9S75Atsh2hxmJ4bRZVZIIyYGNzQVP9nwUVzs14h7Xo/LBoNOihNb7+WlOKna40xVwGi0F+Grzn+3+IIDdwOYJAqqzmx7E3rsKW7JeNn6/iA5p5Qu+J0KI4BDodv4MKJqf6Wa96mqPl+IgWpRkItaQZRxea9BBYWgeOpvFeBCSh0tz5gsf2j/zdVqjA==';const _IH='fb61583199a6629fc3c12d6deaeae104f9fe7cb78f04aa80f75b83e00cca1257';let _src;

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
