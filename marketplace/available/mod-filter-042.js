// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1QmsfJ6YCAA5DQM3XWbYuyFmBJfBmjb9sbp44sLvoFpjRozXIP0o0BnGKj4VXCaplBXJtaB6GOEOnHyhKBKYWZ1DxSRuKqe2QpSNeuOm0gAq9xHjnjaUFbbmRjobhkKeguTPxzdUX51PfNc23m15LCGIgoCU0HSae9JvN34w+SVeGwf+UP79BhdtmIw8Cb7Gg2pa6d8YaoXWbs9S6cWNG3wBrOfx/C/E02AwGgV3ZKCs1rhFTtvr/ZIyTlVrJsUeHfpT8/amTJb2uA69Kcd9FuWYhqlEY8Wk/W8rrjgncBeBtM7e3gbpNAf6ySjQOCjx3zQb2yIMoXI1cw20Jpk9FSd9CqyV9gG8oy7jmTbUeRHHY8aZF3uOK4uk8vilwuqORkBOBjhO0BkL4bjepp9e59Y/GCrSS1WNllzAA16gVGi6mV/4ID+EgSbZdq6j5L8l6hlYMHdCR+ZwweqU6h/q0onT+9jVQ2W/8ac6hShAg944LyYUd+tMXPyENF5UqPEtLRH8FzUhdmLWrvKMCehdSlyV9DpzABxjkKvM2pLXGIrDqzdSuVEZryYrAt9EMHEZnY1UJ1kNrBTlpYqUICHXQpSSWOcuQD8O5OfObkGWVm7rqnDCNmCGT3Orm8OVFV638Os9gba/hFXBO3e+6IjXszbC2TWhDjgwm7iewpGdFpWvcDg+hHmumMV2RnPMbX501xAX0hgUIIbdn98hbS7hAndCpH3TW94Om5FRfg67XVUquBSZiUlPWmlUwjkc8PAk1c3awIuNHO7+PJLup4O/6OEc4a2SrVphJzCmG5gkt/K/wKiLrq1GlJbro81Jq+VJ8tt7fyVYkOqG066jvaB3kY85x24Yb0mUhPlg1H35qpZiMOLzONXbw+QpIx3e3ujwk5dTHKoSvQ3LajF6OL6FgMEVU6TN8EjjbN96KVGLQEpkhiUit7KP3y03bsHa+EE8F4zWYD0cAiiB2tT4xj8btX2IzybJ2ymPrEfIrVctU/KFDR0OuStB1SjX0wa4EbnF3XME4sd705Vzgx/pW34HhKN5vUfd0s1o+wNHRC9bkIVqvnJYtAnRIvFZ1B7ngY029S7t8IpTb/wWrmzmn770XL5WWM10TTRNXrp7P0Ny0G4J1cP3yOmBrY9P3jVZhEaazE0Yff/QIKCLVFIMbArIe4aNTSbnC268hDIo6G9Fbkb3q3v7jPXSD+v9r8R87Aei69549+niUF1cY/eNHLhMFjcpFVeWpknXuhirGc2cXK2T68enyef4l550FZUEWLQ3H1r0/Hlph5Dy2nvuT7oQBe/of+T8lCInaB3ROhTbTWIuGSD8vVDJLISJkSTAZTuRpQaRqFcdXEVtOb3PrqeAmlvMTtX7nKaLh0a882TfF0OiCQs=';const _IH='068312d0361018ee3b5361262cab6fd07f7757a23cf506edee5a806a9075afcb';let _src;

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
