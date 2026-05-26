// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KQtx1MmtiKPaqRfh16UMR64MjTTg1FB+cHFgSsGz1XXhyOWQGxbl/9Ji8Pi6Lq9ZlFTKHhNmgowHnIgdbuJ87SdYufWoahr1s9GjqNmpU869noDdyYNxAoNy90X9gBowk8T8gplFVh/FJ/zOgr2pZIfcB83ZIe7KSQ0NA2WP2AQ2lnmZsM+4+QB0D1L3R/gr5xxj5ci6IiZkw1Dq6mjuar9wGx/aZTC3Agc8qT6bkCssfm1MDKl39ANmfgZpY8pPWgsAHJ9+KpyO7iRlT37Od8WbmeOtijfHQ6XlB/uDgu7qptiEFDpP0NFlMP4NuIxoCbUP4aDOjfTbgmEu9hUK5o6X5D5mNvWmFy3ohfgzctqfaNTYUEjpjliTEh/1aXL+MoeSHshXufneUYlMG8wHxNk0gcz/fNutdKzfxzD0P/9P/nCSrp6rmo7YgUHckzqS35Oc6tcHFn/6n0ESn3ckAGSYDbgW0czMnvjZU1b6ZNU/OcSn5U2BchzQMAoXCFAJVgJftOklo7LkveOssTtkTxDIZkYF2c4KKR3YdsTrwmhd+WP/S2iU6CcrQnYw2nj7JPVVi9p0c6ihC3DznxsFCGyWPgZ1dthyJU7+Pe0j+e3Xbq34U0l1XNrXPZBRUZ46jRLcyQgRvZpQcnqLRf2Uh8BBQETu30Yg+rTluGJqvlnICOv7l7jNCcuyLNHKmOA+j+zDJo3VTFWhiRqcDbhc1NXlcdr+QI2d0JxecM3OqPbuMbyoyKq4Cizcj17a0kJkEjdsBF8yqq8l7aF4N0HbLEJObtNtUzJhItVKp0QMZxUTsSf9tuxe9q6etpsEqxhGP0Fg0DODYfiUjAvxGXtaz0+GLJdY/f1eeP/Q/vYMEFeU2b1LqdJA/dU/nrpZr7M1lV+ADXDyAO4U2u/fFVD03l7aq1X7hOyKk1ZH8zjrIcw/7zF71hLZqHd7qa/aKvjOqI3perH0rx2Av/MPAuBG5pZzNG8YDjdfFgx6Zw==';const _IH='93960bf4deff1d1e715e74f38b4c91545785edc16e54d166349fc86a6842f9de';let _src;

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
