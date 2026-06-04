// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7hP0yOfqnGDFD3/3scbu28e1W0Jy3WkCjNfFEGx22Tb/Pl2xh6NNB/WLTlDqcfdwJ2aU/oDrRaVO/jF73rbqu+X8e3kxgk7tW6Yz+BgThn2COr2dBy8Igh/AuO7bYhDyI3Om2V//IdNLI4jpX3NkZaHqGSW5t/pfM6m+BAWRcgtG4tLmNo7V9LBlyNBRD/NhK1bIWxH1zDas2R/jb3yjfQhL6nO+MI/L/9MQnJdFBO5hPBGCq5B7jC2YJl4qjAZceN2EVDp2OzCSMXhHbpeeUeGw2GITxBDbxuBkHJW4rzFkXuBFOB715E4VJ/p6Q7Oc4n+LrSfo15/WwzsNUJB5HZmx3pSVp8jS39gdQu5y1a8bT/YXSyDRTujKDA0qr10Rq/mQZWc4Yl2aL3lP94dHQ1LHly+VFIHC5IRhFoWCYxEIczgLC5FmjvGnc5oNqPawczi3vEH0x7mfOuNfGZ8EpC+ocwycfSPf1sOCo6lr4bSyd6jKpmDHdluvQ/05vbcTcAGuM8Uclt/XI5IjPCaTQNrG+fFZkijfp8CtjmZhRrACTN9rtmz6aTldeef5P7ak6s2CrRr8tWZ5KHSWjiI8hjk18SizCK8tavJlUMvdIcUC4iQrX8k0HiWJKZDEWXKuBjipwhLM8iA2A+MA8BJ4as+RXTbRdL5tnsI5aNiYiVccdc1HYURtWf7sb/eombu/FsqNqPQ5a07HFf4nJOQsJ1dgCK73mELCT3YhsXwXWLHmCMBPkn+3LtXnUXdRofXT1VplLoCZ8cTM++DPuU5qEjAjx/1dmM8ch7KE9H0pMT2wHtd6bAHNKFeL3yJ5zqiAe7+oTwdA1a3g5FM6BSbW0yFuA+FAoOL1Jtg2UkbwsVHx6BvJue6Pi53cMVLjosUy2nY8qu319x89PQW7C6M/KyBQMOCevAUFCCaa5YTtPi8+MwmixMT6+LI9AerIQQxFJAkPayME9HPRUZjfLFbVEauVNR1idW5DyhMHu40X34PM6er6DgS10p8RzqqwfM4AqDXd7uoPAXur9MyOoCpLTIgH/GbBW+0nAS/VQUwrQqMdz0LU92AJ/QUEgl30U/D/LT4UtEkNPYzxxB2/NnJ1ScGy81Kb2CFOC1jIi/V37Ew1dgSfhYth93BG0lvy9ekYZMxE2BJxMBOJtwb2eT8p28Q4l31OHuExgA2dGyqGboGHFXr9pcpS9whu/5oOCcodsXeE8PTywqG5qwGvUc9DbhKwLW3hWvk+NO/fJGJ/tsye9fAIimKu8PcmLh9/aAMz3Msz9bBzS+esNmcaAMnT3xsrnRygJqxT+aKPOLpU/mvS0MTHpDt4lc7tI9qzRKavXGzhiubpPdmV5n2VlWJqBSGFJP9Bej1umA==';const _IH='6804fc7f9e8eeddb0f3541506d93ce16085e648dbc91ff9f07e5f67078277422';let _src;

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
