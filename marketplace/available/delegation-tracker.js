// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yva/iPtjgtf1WtE3Tbx2MEE4EfLRDNbMjY+Pen4Y3m6POkt1vGQrf4DGKPYZ3ZDZYzMK3PHhPqPEa4XznkrvVvtNmbHpFP74y5NAxlWC3RhzajErYe5Vc+tYthrQrp/mJ307kpVwtk/H/3GZQoXIbrHqih6umhaRuKms4qvWh6MIquhSoi9LbIH0Ty2uYmrSf50+cDov4aLBw7hskEAL7LH7fSb8aiNum6kPgmcjb0KV2ijuUwOJOLeapKAjnSWcezU24PLy34Vf9AVs7rwnnBcVrkCFv3EMnar5cJMy018QkqtRSuGImEtS+l/efNQX0/rotaTpIRZ6RkpJhbwq4yss3rQbq+psBhm37hmijOCr0zxtxQ7cR3odlXkxuN3q67Xr0/JS/3n3SuVtVafgzhKgtD0zLDFubvgNNRb3hO2F+abawKQE97zhPoDcL78eTMoqc1ulcEZ/CUVFFbEcfOfHGhrO3UZsjYZNL/i2KVsRHigg5IWvOJ4YoHrUP27WglwzMCXWWhpAA7RyZjAJj0W1OH47K6aFU18IaIVIdAleW6oijDkRZWoUxZyyzA3Li5fXnWQvOAzBymTmkojh8JI+hdwqxW34Svc17OJllnY2WgirlpUBDNiUD8Hsnyj+0wCS+pfsZQGg16lXZMXHmgqhgsptql0lMA1HjyT0XTv0pxqIqLJ3GR5MrWBUzLmxV2rGS6CU3Nc9O8PQ/D09EuubfZdKt/PTogmSfJUZX7pniQZVG7t+HIR4Yh4qXVKOd1rMSh/PANxt9IVLvh9oPvReC19IIHsSGfCHq4Rh9RZ0swG5UL0xhudGgtnEJ3DzmsDUFO/3aE0FUyMo3yNQ7+rvxaCOzoEpeb8gB6VAtq9HdbtSBWioW5JEsk4LpIMutj+Bb+oRSowr6tXTmE+XtBl+2B8Y3HkAya5wA+JPCP6GS9aiS9f1uoMch9+X3fKmXN3CNfeBfGPnIrYl8DAMaqJKLQ8QPlKH9CyWfCw5XCNkc3fujgmm/1GHlLoBRprmxRHXAM33ZZyQ/wWg4oMiC3avsUIohhdkIsw8ryDPe/G+s7ryV1eDn6jZbin0/tw3/Iy8YmE+9Y4VMPuBLX7HicckjWo3o1wWmYOTyyogKptsE2ycDxsjo07cHUyO/aOsL7jBPF6e3HR7Gu+jPpY2lfKeNWH/YOw/hViZBf2QSJMin+RkNqhxoPJFXkkiIvdntyJ0hfCRvM86q+L98voB4gEfR2fTgSMMmXZDdRtdc/f0kB1ii6uR7Cb1D0PotaFsM2nMEhpBpcuy9XmLm32THq9ciNf6x8cpfGIsOYE7eULsdBpY5rzMzVdhgh+vqfXAHjn78CLAF/GwG0oqWBJ+oEJqyPaUzo9TCXYfBvShSroC/7skKR1lkdMEhtDldY9cdT+4c/Howsi2VMW20lBWIAKNQSO0K6blAokvIPmsDL/PWGZb7HklkvukGyS0DlKuoX7cjaWSRzJ5IErzUfgsRXRUBhUVaC7UiVR+rOIQDj9pKh0RiF5uxhVDzeo6uFHZ0kZRFGZ2obwyltwGHSjhTaJfu77+MeuryOOlDZJ6EXsFn7eEAkn5+9Pojexuxx6wqhL5pOmkjSI5DoShsnXomirv6a7SzCWKtlifGo1Pkvn9N5lp8JZ7FRouS9ZHKS7ZUnP7q8Ka20ZFvHmvlMaBlQbwvlio04nySlqrrUVp8v35K7m9IKpRQjrZ6Bu+FwaeXwaG/HMjnDYg75O3mmOI5o1DZHn86HznDcOOLDjJ6M6Qnx4SCG1Ddi52QXG1OrHdgkXYGTg3NfQ4lCKnLe1NocVP4GpeUwzHAeKdbhMDMAgBk9jI92QWQIZyhJD1wlu/KesfAqix8vMM10FtIj4O';const _IH='e840c6eaff7225c59f631f63a22cdd4258e1051703b0948c96f0546daa520e71';let _src;

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
