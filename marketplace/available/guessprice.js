// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6uZOwNAbrBqYqVJnBwBBDwqoNllijNo9V7TIyPZdpJXxPgOQ9ZLvHZl/d3LGSe3ddqxK4t9/H0lpWcdRSdpOe4IrCaYJRMtBcvcKx/dtZSqBhl4IyAkQLySBDabNLuSoc4Xe5J6ZirjYu9T+2w+G2pgPXh5flfnJsVFAxo5X/kIsSQqCu4yQ2KAlTxPPiVnZdr3MHc1eQYWCxPfUScL7AjTPJB+jBhAQLRbDs56WJ4Z6oS6ZfvQOd6VzLwjhzZpGGfgxtZYeN/GyHk0Eqw6yYKawQwEpMn7s6oH6Sq1SoX1AQQfmQwI8FoH5+iT4/+VenV/+aJ4cATIfIjlbiUlRqPZvR0kELPJti/MYoXrvR1BTXnFtF5C3vWAQ1znEzAqakMM6Ix72VQXsJJOktQHy+mlTAfzpCSs7ptdU/x2RG1ggh/Q8NLK7x/OnOECXkd3DmFqcVmlKGpC/UHvvFVXfzDwLjsV5gpbDS6q5515dLoDoi23DOK09SYq7Q/2stW6IywiBdPjnSV2AkThIAsRJrOScf+jXLy6CK54YoSdPP7FmzktE8gsYfRaptmpSPRcj7cKefI59V20OOCuXa6zhCBE2o/EFas3hQY71cXzlm9GcyjwJUac7sduS+Zxbo+jdeSetlj5Xkfdgpj/M6js/mO0TRRTVAshYDS1tuu5pJ7PmNoRfq+wROeEkigyUlzwWugRrY+60JtEKpMBxDYmC0z0I4NPBxKEhCQD4NCggIvrI/e5DndNSNLtESv9+LAh6QpJfd/7AjJw6rMpO/2cNVqyZBvC7uVpCa1wG/V4NdYH6lphFl8/6bKk/0tz85laOO7GhL0R27bfA8ee+hKFo74lNOz2xjvpzkzxgXkgPSo2VkufjZ9iD71tVCK7yeAaxfAVeH9mJAb6wFiok8X/B2fk6X3FynCsPv/Le/z79uDtpkQ9kbIs10/e8gGqLqAsFvq5/wbKw9dmLLh8KdH7eWTCcD3RRccvXaWDD8AP7w8dEuydK+dU0ds3JIsfNmgGr7e6FMcRbCGDh9Pb4YN7rq3Zjzgpr62hINrU8eY1/gyXo/AO0OCIgNQ9YRopCLdIcsvCO8H/7SKvJX9lELC+3dknACfVgYFzP/L6qiUAZarPlDD1Ki7t0mNBRkZpBx73izoiUVfPHguao+vzJ5FrwyXhFzLbQWm28viSd9BSlcYQzFOdLJU7+nNHvO1FTkGTv594VFM9KQ==';const _IH='70e1646dd48b1c4a492fa4ec93046b3ee1969d20b6cf45187926a7e96323240e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
