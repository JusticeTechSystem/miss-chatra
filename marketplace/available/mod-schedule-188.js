// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uW6cv14g7d+bAinLaLOV7FVYMEu2FQuYuGV371D3AjA4JDTrTdw629gXdTmSAvDRKum8JpFKObc4C6Nu0/7IEFLwVIqxP580K3jnl5ZzUoIMpr2uXrR1FE5EMdEyAfBHGyI+lPDCIlhOek589rcMnDcV73rXA4micbORSEr+A7mzzQmnjMIYJccKvZM6SY3iRHbnwytNenfMkMQQFy1fxYihqvpfQecHo5RZilnJPJOK08hIHoaWm2lJ8WvL+EGMThNNhTCn1sNBoyXOEHw5FzY818gZ7e1Gv/AbDK+1JHrgb+6qkTJui7LtdW8Q4eojrRw3apgLBA7lc88UP5FdXShVRw2cVb9Pnt6F02qLFJVZ/RSMawtLblRtCxLu8JX6Ncxkd2iiDkcyTZiL5uGkkX4iaLUDewCzREQfj2TIZB1n7gmv0dSRj1AnrM34n8Jkc6j4+ufbl15g39MA9EISFsYxf8wnjnIsYBx7Hcwi9pOhbiOhi939ndTrRqDz1dyjTryqbOPQ2Afmnu4ZH0i3irFNSBvKGY3qUFh1V4mQvrDoP1gyE/jvbG6PMUnd7/p01073BUmtl8uhuwNlnjixj09Lol0U7I6In+h+DE54qmJdvM+SmjQxHEar4/SKJqsdhYizwTDQPSfSM7dfKlhMoQ8mbPPvpyh9Uef9fpzMxQ4mAJiDHCfgcb4jC7eaDTxKQYE2BQCSUyGcIIWwW9aZ6qj6bLpX1xEjK2xdSz09ZuiHtjlZg60NiD6bcVx+pmhKZSve7jV7gY6cH01ci8z0pCF6wwGzWaakU2Htb7rn513tBUpv93G8fVj6z19djbZHrRB4WHq8UwuT920eMTcVgA3oNKuLFtWKTssMC3zKynAMklTcYNP359eQ4n2TOPKn9g7VwNJwXFFjHXcDHJcMKFemo+dTCn4yBsnez4yfNf5KEyUYtKczFB+FM5Hh8BxlhtixnCz1sxKLzhFMW+YNeV+pUKP5xpo0SCYbJ5UPnjWmBWF8bvmw8WBD9pb+bo9gkwCYYxDvtBZmXcajP+pucTkZO7SM8O16B1jeLPLHCcJhGgZWlMHGHl6GRH9Dq7SON3663W4B8S/j1ZkjJX+Kbxh2bAaIyRQbIUrBwoXxo93euT5JlpRUG9aI+nZNw7UXtdIOIXSEIwpMpl5GrT469xFhuMHnfMeNXVuCfyVKHShxwrSRpIO6LGfD3adcLadh+r9HW1UY2HhUUaWRs40XHbmyEVCV2Uwz4Z6XBwpVGJpFhwjVyg8JosC1KGpykXsOar4aPwxJvKX/KGDOPKuawj545llgk2eWKA0zqsHruAsbjqGXggNaURIbQMFtasrCbYGwRYYdcYvLgHp3AcGZCuse9ZHDEBLrGaqgbDynv72KNycOX8Tr8DGy/mbc9V9XC+R2Vt7UJwQDU1VY';const _IH='02032dd4845e058b5dc77147980405b6bfe4c147b7b0e0eae6cffd782fd2dbf6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
