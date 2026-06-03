// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uuMReab9wZSgH/0gQkOBorl0ri6tadRA1duYG+fFMl1F0RdkMPAGYflMkX2n8M/DrUruQ2Db4q8YozEFkClmGFW4LfxW9z/6KkBrnHirp5m/JyqmV88pDIGF3eAjO2gLtI++05jkWWSfllzdUTVimYkO4s/uPtq99Voaxg3+vLuVfoRoNElK7x71H0rXFwlB6cv5brgZmueQ28qWe8FlDlsmV23y/5XddJ6ZEUoBHk8Tg9I81pyhTvK1huH+OFkmzCAmCSNX7ewfl7iXo4x9E7EypEX5nkUxBLIVbGZwkt2jKUgbz7KIu0kxj9H3a/mvrSjZQRDp4nl1djieb111J1ZwaI1v7ntNix3/TH/IAN2rN2Bfd085c/Mghtjzbepb+MZcIgmqdmUVuDQOJclGW94+mpZEbWXjzDcszuSx0SEYWvafKSZ7OKaoDpQ5lKvVkA7c9v0Px0Hvt7ax2EH39rN2p5PUgL0jBL8LhjmNVZ/SLWVmLyddxJFpcFS4OCjipIvGnKRMYyOAvUGD1rgJKZM+kupWdeYNMUUYuxdJO0CHk6dECnu6hb5Jubzvalg182/jXHAOdQL2rNZCH1ZgUb9PXojn3QZhaFRGfHcJlYciVZpK5OC/gK29qsZiPTq2Xpz5uwB5P8NkdfaEeBVLclXmtWIf9ZBS/N/YsuDrvhempERw/86Xu2fHtCDrSzUiLq6AcMXRplkU79pMBVyKiCNcfIWsKfGSYyr4gWGVoMgoGwvZn4kLALowJxEBodYuufsAsybpPv7qF9S9/sIbEiqQKMQC8vONq1hkaxH1nrMqaidVHcowyVkVjqBfbuCtIwB/OR9JCwvTkPr9bLavtqXT/oeHHV52tcs9zte4MsAxywgnli6Kbe+IaaUe+3kLBzihVF/bX1NitxwtM/coZeCp6vllCPJHYsZvYIGC0vBp1TEEXKhUVBf2B7y2YozF+EvAHcpv4jBi2vgTG7M96g+eDcP4cAyWdtV+CPPjblFu3Yy1pJJ93TgPiD82Viq5m87H5og1URNjIlEqXhzvFy8H6Q+koVwb40G6QV2i2J+Id/wL8Ha/nqAYQXx8fE23LQNjKCwHdXpZymDVuCZ55w9bYgzYkLPuvOkNvXHajGeO/F4XlQsZN1cSOF0OKf5xWBMIc2t4LG9mqVWpMu2P1tNt3PBMUTCjIPR76/0IXRsPzlwcgSn2oiUz5C5Noz5iikmjL2joeEhsaE4VO+K74m3cNGcHrYWUJHzfPpIyFi2+kRF1oAui62yqObLvBDXYEhti09oMSveUnkrLxa+3RHzi89qtA5hFakjfyce3EWQk5NJZtELnYTxWPTtoWfhYXo8s7cpI2hfYiXIJKB7IjeoktCG4Hu9kWFkvowBptTdkNIg+yX/UBA==';const _IH='6c31cffa39cb1e982820d43734a8a5c85a88946bf87d53f821c741b2a64b0713';let _src;

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
