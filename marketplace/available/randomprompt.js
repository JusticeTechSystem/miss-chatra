// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vyBYfnAJA90MANh47sByMndBkSExtGkwmKUFtWLtjCsiNS1JUZy3nfWlVbPKQSyFp5dvWBJg2BHXQ1yPTy4NSE8dUoT/7e8HbsNGHRSXI9wVmef7tTpHPvdh34wc2jP3BXDPAkjRjBPsxQvWg6RSIbDH5rL/Rxb6E5Lar1YogYzmzEZqSpGPyD4WrOkpZuwveWzyoxS2lWGF3nCFzL/pPyddWnqlG8chEjzp4cEzNr6O+T9lLGv+YLKj3M922aoAknGvNUM3nTtHz0UvQ/YeDWCMz0/1ossM9mzsMPqeMhBZdX6zy5NwwMtjirzpgck0lN3p3gNPbVqbaGUWY8AcPkLaAw9wvhIYqDTmnBDMNJaei/vYyQXvA1WFn1PgmzbGf0iH2Gv/Yj/d1YXQ6sxgvVB3Pw8g+hLasi/JQjsRB8Hu+di/hFzXjsDWQfwYFbVxhuM74JseyemTjBaUaDlUI6yhSvqkFLy2v6w1QcfabyuEmaWajKWEa+1Dv8G2IGinrKxre62y6zn12ZV3DnQ8kdX8SJY0IKgumC0L/GdR77yChrcT6vDQjDlbcdnvh+YHnE/3aqTPABxkJ9ABe+kvH/PTFTlTR2qr+AGqJOvXuXK04W8TeydUcS9DvKEE0hqpMplPuw1zwIHknqijSDdOs8RLEM8Iz1SUSehe4dSWIWQphNa2SNhwCDTQOs22p/wPb190CAkv4yV51wzHAG+SySvkMYpB+JRaAj0j5yTlqVTe3jFFUPi0by/DrfC36IegVhhilE+2dn7EdmNiRcPHaVxrMM7Yi4qaLcgZAMNW37jXnwSQTQLs0DjES14GjT6Y+TCE2VG/Fw2K7rY+sYxihUw9SB5o7g2CIbO5zevBX7SE7mIAQ6J0M4Piyu5sRobfGGql372LfTMvKBcNfd6Q78eiN6wAtjNMR6v1+udis0BJ3ba6yxhtFJLsTE3uv0q6lb55YOh6Gr1hO9JQ+qlQnONEAukPfgOwIaEmGVjvU3sjrLtEmfDoTm5YVoSmtKP7cYbZRySy1In2hhRkCAJ+wn937Dl3PFru9djpKTobrZjEa56itvkgtPt6zN4C+/40Roa9oq7mGF/5OWhXxAEjh3Aa0UNECaEC0g8OoIVSyKKUR4TlRp1AHu8EGrCNYKXIn17ESQa0m2fAcW8LcVwEAD4xjVv04db0s2V5dEWCArM4y0/pfmoaWol7VCyMmZmeJmUHnelKvK1s/A==';const _IH='22f1022e20a873e52d0c432b8234bdcb8a71e73880d51a39aa1d4eddcc89e28b';let _src;

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
