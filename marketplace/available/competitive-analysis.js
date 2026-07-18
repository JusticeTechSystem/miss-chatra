// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDr9Kr0fQrQDAoyjvisRvt1K5XyCqnpKGj5IlAv/4cHVuS9elV+opP0Be0mQQ2+7y40UzQ3uhGWJTHEme2Wrjt9g4opncU6DwFP4yf/AefKdeNQ7tZMosp3NCaaYUQ68pvY4ggzw74Fh4wxLhx3xZbPu7c2S0wdZagsChCEBUbJuuSG4qm8ldLy7jEgrzvBmlGV4aBOwqSKG6mokkWkW0ifm75ygAsFX23TkNETuheEe9opVAjduzuqYQkIsGm43DuoNYJZfFkvXv0BBBljT2Mw5lZDuQp+ynxf+B71fsPf0A7RMxYr9nhTgeVpPSDwqmIR6FdnzSa7w8+g9lPQ5PVi5Q1mOWG8j96yMzk0cRVyWft+3cwIW/IWQBi23a3opNpnB3zSYXxt/XuAK1fMDsT7IRCfOLvED4bduyfwc7ctoZVEFyTsIiOO2JS71NUMsyp6CKmtpjHJ+XR0Dcnv7I6ZraeLXQv2mG3l1AjcrPoTyuX8+6GHyQdnCAka+pez3ND8stc5vZA8LpP/qQFeFP5S2Yd9BotwR5uUBBFPCRQ93udqcCFNKF3qweNKXxKgN82OsL8/C9g4Irsh0ttNJ1y3PnOS+PUtWdzGa2FjJY4j7eXP55xFr5KS04IPgKg+7+xQ/++ZJN28noTDSMwIPMmEfljl3K6ApGnLGfnkMPH3I2eyz4ck7KnLpbDQkwWowbFMKt64e63IO7k2g5/5f9WaqJdkcyn9uKK9COYYJwfNYmGSVqp7W7NWQJN5j+lThSw6WuDMN/r/vLBMXEzBJ7vEA1qdGb9TLaBKTrDnpvseSZ73+/akM88TDC7+QEfor+LTZLaK59wQcMomlGXo+3sFzbTkRxdTW8+jspZlMJTIca++XTjytHBKQ43jGLtp6XCdDhgun/Z9bvVNzHWN5m6nM4hy8GjUCPoTM5fnEoIjEUfIk7CTDYGSMBnsoMcM5XOCtqHLReaNsnqaD6KGdz33FJsP3mR6t0de3SzggKmAm1V3Z/ktl3i2SCN1g6e0p53hXNEiduiuwCB0nyLQXniseXWBxc0Je2L8iftUe0onaxhBtj88vEG8XLJeZtjAVDq4WNNegfeX/CglBG+W2Zzhq7u+N5fhqVv2PNUiAuamjY5BATEJVcX+bdD3x/+V+0H0VRN3+pfk995W0Ex1g2RrpbGKO3n6vueIg8BWhRcL+Py7FarzGPm5wzQZp2Ahwg7qEcTAUeJi25RdoEY0LEl0Wbu+47Rw5bCyNsAKrugO2dpCDWNF/Zl0Bew4br0rgtJ7zRlDIciwwi3fox3oEy6hYApIl+WelwC+aXfls7E+UNuezJN1hE2NBFTfYECB/+MT7jWiWJuOqRRrhyxHbYxqZ2xA4UG1eYzaEL2IXlkNsDMw7PJ9zHSfNBrSkX4Xc2kRCvkD0kvjekxbVxZlqxjfjPGuaUba2u0DbVp3wem/BVHSJ4XhUaHH7OJFREeTrtHJSFmvtCgAw/FtldzCKQLpTVzV3SgHWA79sWw5HGYz5/OD9PQ7FJl6K2n8MWm88b2kfoD3QJJ3WbQzisqmOYcsU4U2MIImnBD2rb8cwZBr6uK19pMiZeyiQ0WBgOiNirhdw2uaZydKqhF0mnk/ie4mMQOYw3fME0ibJCcufYcuL6dEZsIJg/bmIvbESMBSsXbJKGd+exN16le12JO3uSrbixbMu/cBxjIc6i+TlXd+dtJw9mUzvp4C2gutwu0MsrJH4xhFYa4wa0EUzDQ/1FMjXqGXfylKMFU3o9w+GO3GYisDAVTkLaO';const _IH='22df028ab2cf666ba8e8bc346c98379f2af32a2dd07da096c9730cd118646279';let _src;

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
