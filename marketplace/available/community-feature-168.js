// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hwbys6rlEi63kuUQDEHVtkb2SLs78xhpEvr/MOw9rLlCgiNKTJZTaYXZa79W8CVGZvNIcetTH12rzwFFL40Kk0y4laWR3xFWg1p0m9AYs1jLKu6W/PKsQkWGmzdM4OvXMVQnvTukxZ/v1k2oVcl2W3fMO4qhfsXr91tBmpnQBDU1HZD3GMPoGY28/+KvZ4q0PmJPr449wyxKwL7/aQ2061khO/v7AM7ZdrU1R/yksupXQo1N/PHY0C3YkRTswgM20XqMH3XPDH98KKGPWjTx0TqxXGHKjWRIlpwx5uZO5DBZgwJJoqEi09A9Ags3Dg4GQE5xPYq3YrYO69rhrVnv/TLQyI2AAXSXd34xN+0C7MS8ALyriejD3K1ddLaNR1FKzsPyBXMW0IcDqwfeUpOrLmf7Vxh1H1UW0LrSG1FLP+bRecLrQsFKu7cngxphv8B+Dw7dCIeEyC0j+KqUIE4p/oZHkZQyline+tO3Tl+sfJkL0lcgOnhZ0z6q0tjc4PPlMMGFzFbzOISOo8LjC4FZ85IHByNNr9mmvoxcVRafHjM/7B7/NTbGjGktULSmer6IHQAl4dopCm5N0XhvawirXMaKXq8pbphkbYcqGB4EFHpL6npTMvU/3pIA3K7ye21HEoRZa/xPu1DpqZ7wAJHKrpHW0OWVrb1sUPJMCM31+i2DLVdodCKFzl2DCJK8wRp/AI6l2Whqr17N6NKT/Th2oxBaNGgkNgEJQlcE/yg=';const _IH='477bca65d1d3f2a2fb8d5b8ca41c4c2a68e6057a51ab977d638dbe70b5fb132d';let _src;

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
