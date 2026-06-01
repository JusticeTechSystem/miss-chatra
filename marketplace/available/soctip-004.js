// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7ichh/7Mq39GAQ/SUNBydIb6HBeHZIKg3Ig55nUUQ8+H26/mfNTHfSIg+Viit9vh3tLKE4eWDofChtzR30V65D4lHMo7jpAprQnVfKANeslGuPfe1luR9aNFr3OwICRJg+y40VI2gf7lcQUTtvlpn3KmpO7rvq8EtMFtCa4kXqFfDbOwD21/gqi9gEZS2bpcDaTsbHG0zODpe42gqY89c036garc1LkvzFskYEFwto4NrT0kaDXaQr7hNC59pKf+FCBHrIPDkopiPnXt1rP5krjn6gDmh6XvKpUa9HYDlH+LVZB0xaFRg85mblJAHpR8ns5bg6f4EX5kE/FdTd1S2FyNc67BIf1u3Kq1wTY/1BWTGTNiWN9Ui3YjBdZpuQR90cK3gxmeYlRDAXBHcyv7q1xU6cDABMsYrbzTZVWWJNjNYQqM7fcRwdyivqlRCBmln6A2Giv6L5LNAaRKPgKdzB4YGp+1hk9cJKFGgoQTQeRC+zHgkhWFfOfGBFGojM7lKoVjUOlyf/FtgdsSyDkPN+iPy0xYK50W850OeSLnRdPP4e0CIAwcBHSbUabtew68N5Mb/U006Q2jrW52eapABGR0MFgiCzeS4jH6H73crsr0ATgLWA9n379hrer5Pt+KNoviro52RkWIFWDNKPcR70Re7c9SWqI1twFkWqr1gNOcf+VvWTAvtxdlpARwXtuwx3xtYYBx3Mqwq4HH7t2v0jlKFBuCPi9CJHrYQOn6baHLAAuDh/WRtACrfpVYfqwsKZSPjk+sAlZDvXCcg/DurJtkR0zDCDCK+wWm1WjwvyfAQlhM0v3bqg+PIVxBvyisQwzc+qLcGlt4M23Xqv7XL+ofnWlOSJ7dd1nc+ECjR7nTdA7vNG+iEQdg6UABdw97qwsk+XmHrioWAchrpM5zd0Xo/cMfXxMaXISWOwsFna0z4mmjD0ZyZ9h3ZmyRq9q0FDz5Q5MvQVVC+qK+eU5GgIkSeJHoVkJ5MnnxTn27o5jGZ+CsKKWePyXdhjvCpkuLjTownFCX0IAxW6dlYE/kdiagab5ady6V/NYDcXIzVHDcNSSB9YkwFoAt8VGestdNb8VeSsrVrRZR9MM';const _IH='a87b115207df1aa1a47058ccf33396240f97454ae71bc1f8dab7c7a1e6873cc5';let _src;

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
