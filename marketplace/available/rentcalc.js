// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Ru5YzLdWnRG6DlTGqV7qz1y1GJRkr1hYIJNA8kpWhxY0qThwzjpCY/BFW5oZP4KTaE4pQlIZ5BzATCcB9140Eu+gXOPOxhG6rVm4MgBGCsLnkZDiilyJINd0WnpxVyC2f0NFQbxXtf7HivGT5sUYj4DNqpFUSwpS+ABnrYkI9KJMv4N2gP+Q6TpfHkOFnpYvFNu2ykolTKKiaGIK2uJTzkT1riaElz01t8+ty7+h6BlX5MDuDYzsSYgBPYTfyVweMmfHT8Zei5QwthCwxlE+jq1UUkMYRDXgX/9KEJpcwbgj40WpddtVHC1ybsLgXB0gzfrScGTMhr2jFyGXNU9PAZDDrO6+XGfUVbli2zHoqOZz5zk+horQF/XqPHoxN9HXL2CiX7degIwpKsgPzUHoV59Nc/KKKg7wd3jbv+cZ0t5TyIW1lSU1VR+iu25OkFsCnREeMwcT/MCx74d2FetgLcRFGXCqHBjRvsV49NHWcHCQQ89+LNk6+ArVitD7OUoh0t1ZgCO27xVk/5xqRvlT9FP8lXeO3lU7Q8d/KBnieAG88H3ret+QrTnQRO6AQeGyk6j8sJl0h7r2EdHJRgMP6/3xwDMplRKS0AiPphOu9C+iU+5vCuxr61lLGXeSp+n64tHK2appnrC5fn3KGtpKttic7v4AE9FifcxsZysjwBw1/tmKfeK7kQbFbyua5erwwnVJxKj3/tp1R8uLf8kE4x42ty2tF1JQ4NqJ3Bsfm0IWwyCP9jSz1M5v/9I54lzL53V9T31THlqTkdYHUNWPQ3T19NJ86moXzAmp0Ou9u+tYI/8XCx1VBMZhfHCn9eUla3hUHkDTYhI97TamXXOJW91NjKlvL/3hySrpCtIMejHCXB7yAJH0D7g47j0oJI6qBTpnGaimKty8H7rhiMYrZbq3bQ2XvR0NWU/C+PR5h/OZr60ebAGE/g+O5ibxoEFOoUblL0LOM3wYd7FzQhqkg8k2FRkkPvP8CehTiwOgRENeggDXw6e+nuYR5xAf+SAsdK8JK7wVEJghlXjaLas0CUkvwn/UDsEYRCF/a6OnWYlXCIuyPYOA+j6pqWsFe019B9gdVPRQlYN3BRrmNaBnQZhnC+ZgGK+tD4R1tqCbbCC7KMKIcsftD16MGElYJJcz/gPM4vo7s3oQiPrVsvswjEEAsE1SKe5Q2VBxzHyo1Ul9eKxrjMPNEAvadd/FhtY';const _IH='3e23f38312176d061b52007232346f9e790b2005aa66a5ffd5344814694aee0d';let _src;

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
