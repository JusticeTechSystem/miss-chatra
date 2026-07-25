// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcgmrUbkNevHcwcKYqWtRKh92hWkVAtVqp3+3cre/Npt/Y8wGxvv0Ir3Gue3HTdsSTsQPOeyqVlWWyZ/K1SLoO7Sb4pDqW/dR0vMLY/tZigGjeplJFLf8gNJb8zkT+RaRvoGTqC1ON5GXe7nomvGyeFqaWpy1/AcU6+9+CC8d42Mg92aKFiG1KL2ZvUT8WYLJQ/gGmbasKf8AvQ7DqmIRJKjRRMbdfFSkqsy5JJZZNcWNFdBEIecDE2OdrHBs+4jGsx3NL8YJDMZwT2RVzRmSdvSY3Ui5UrxhsfeHbGrlmiWkPezFRJK031mNwgBxNh5LE5QjVGD28jfncVWIvs9QTVksZDuljImSYuotHUaZPo+IOQlyGl40bRwxmeiKUic1aTiqbzsNSO6O7U+2HHuQio9XZ93QtGjmXm52LyLsaeYNvSJewvQMKi3L1E2CO46TUUmshtGdc1bKvlPjiBs4KXOkB5mpjjW3YiHeIrh6wZsifhpxMi7SzOMMEXnwsBWnLtmFNWi6351g6ooVolD4ulvo6tSBlIx6D9U2fRTT4L9WH+SG0onXJGiRQzvNUJDvcS0an4lb09BhV+iPpFlN+IUMJIBGWR24VaZsIWifXhIJf0PYCxCMEGXmBLQeQOc73utozu4SpYOYvcVSGRTCoEmGWW6Bu6it77K3GBHMgPTmrpo2eiL1gw57yiDhlCfwVARx903QD78WdA4ll9yNNd7aDWqmWdJ6O4VRmX2NbsWbdXZNICyFEnL6LzbRgiwue8Xjw6VM1REom9GG60/qMOpCUmeDQJ8RHD0xoERRPN4PAGAP9szgwGkKLVpVA9xFehqROutGwPHxxII6Ypz1ThoAjoDU4sggPWunmY7172/SxDcv7ShmKRyTM60MbEvhSY/3lYIOEBCxVMXoAeIp4cwWZUTL+K9+Nj9Uw4EJ/1wTkbLSgp6PfH+Xd8bHMOgZMZiys+0KnsHUnKYj9odRpKcsSOBv6e8tBrI1WCyK5E/ZLlWcF9+1C9oiLijQAAJU0roZHUW9aik5k5Exsqd2EqJtocKFzeWqasBKUCLlLTfZolPM7cvgv5LAwFpJZph6xMrUm6Gv2QVnsKeQ1AeTn9pcxc/tH+NtoGBNf6Qt5/mjt4IcVxp5XiE8TCRZAG5eYBXZ8A0yKT1K0EfJdWDDFh7CdZEtVuGN6s+d++3nozjQhkIbmf2oQQ6v0DJQ2UGo9ZzSCoROiZqfQd2IA/KZLF1thERu4vmbQ3AGQI4kn37lU3Qs/ghmU2f0yN5GlE9NCF3gS+KCh0Cmtm12AeJT93RirbcjYMbh+H1tTrzmvDnbCDgvcCKwayrSPHo3HPXFJyyGEsPEt/oCQQvzlfVjHtFT3Z+/GTcTzVRA4EEvZbe3u0UxCdD1rg+2mg2a4vT8s9YPCuKSH6gGea0laYjZUOkEZz/M1kR0Z4Y7m8PPQLDEw9GMH0ijxJS42GlfO5Ed5u7S5yR2Snn7ozb+kxpkzIluPqtxzuelvhq09kpWIzViYSRhOVez1kgKAclyHidLgkRosmVRL+/TEwqtvS02x2cQi1ybog1dV5jW4Jx+jEG5j6z3WWwAnjpKL6t0KhlDZ2BJs+ynQfjBPQjCw26eEeEy23qNQSmpjEwjtOoX2JvCYTJM7LQfGrYZNLYvYFJqZWE4I4mk=';const _IH='589e47432f47a4e54ac495b820b70db44913a036c1da8c7b4e4959feec8163c4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
