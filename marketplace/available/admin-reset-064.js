// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QFt9NC0ptS4uckIpNajzFH+OmioJzmHpSzQb9kyo55ecQkTDR0gkCSTyX3L2gMGnFnkcjGvyFTD66LvD3zWJb2jt7VAzLaAjMUAwOZe6C9XFT0Gek5F5eCvwzHYySgSShgzU8f2mdd3s8FX3eU56YoVdmADXFBaHJkxNsxKicJJrjnPgCbzkSVzhVdZs0FaFe+lRBkANaHFxMBmDs0PSi/tFDwUE1NRHlXZFIDSx27rrj4Xjq09CbHJNh7u3iUkIT+4kk4plIJUXaACIExgIldlLFfWrYNJz8fWu/1o/eIV+S1ou0g7RS4v4uz840Cy0HUiI47CQ7JBzjfKw7Hfo++0QtsT9wm3XPP6NAuuqH2McwLOImmofBfcybmYDNvNtzhiiNWH/pt0rg23rGulSOg5+uKlDInn9ST7wJ/kVcLtpYqdQPU9+8L8kS0YBJ67LCYcvnO7p8qzh702UnSRCbTsw5mJwUxrsVviIV311gdXU80XU+H0cI2ydEolBi7dGOOinis738SCG9cODV3StvY4Kyu5JLsZ/ZC/Gz8Z4idtB+AVwHGANwuCLyxCkR1JnbN3xytMxh1Bu87e3zbOWrmpzhpr5s4UALaEvZYyY9AqmkazXTBCzRWZvJVfAiLRcse7Ltcz4nrP1cP1QsfkwFQUcUroSJ9IJikWVIHTCxYCFRu1kApuRuXvpv57UEtewHZagWqjakCaQsPHVPetoWJHS1XeI0/Gl7NVFw1SEDF6EKk0NxnLVRWCwJXAJ4yyKyRz6c4m0ZTUcc4avJomU97BahQ5GSOgyUwGwv01Ea68ua1QUqDcvfsvEILC2tyusXt02vG5oJKHaDT1CuAs6vYXnddUlYKxaR/GorzqZqVr/y5qvk0cPXeTWTtXr7n2q7psPi3ndztG98VCgOa6fcunQd0/0ImUsQTmj3ZRMxyOxrPG7E6heFkutlxbzypA6k3PJ0Ot2Jrke+h0VXe7tUCJgHhBnj3wUKg4YHDkKvuVaueZqXr8=';const _IH='8a76efdcfccfbff5f4ceeaf662028f10a21c08fd1f64a9af25c9bd0c8804e982';let _src;

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
