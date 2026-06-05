// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BndWbx1VW0c7EZtbDWyngPmLjeiHhExLihOQKdw2GORUzsZvfAGgz7KNM8MqT7uyr4KnM9AZ0xbSXUt1JssgyXCixOVVgohSBBdRxNXlr+COYHuhYL+bso9TYdrGH/janTC+H4Men7JHtr5QHTWBybkuZiysz5qFBYI7+dE2jX9HhLQMFLrhckAYkO3qzybAZ8um3DyYXxxxZPNeOl+GIUIj/5qUjP7U7hEl5M4qbn2Z20MEvbr1YPKW53R4i714jE8kUffu7yTancH3mI54ynMPYYRFA1QPFG2NK7jvcbHLlLXHjvNq8Aj+nDeyhy+O5vrb7lBKL52fsCHYmeArDigBdFmcn7U4tRZ5SR+cE1v9MLP/ddtSzEppyHK+37KVg3ySL0ofwMUBaK4c155SrUEslp00kpSTegw9ZGH19PWIUVLowkdPCwTSNtCraB2Np8QIavVxwrRkPbnhgJicdm2SXWFHFVjC1NewsZrCX9becJQgShr/RtEWkTkoZ9vC2TH8lhWjhDF3LTfTM6PBlhL2Q+uQ+Uq1P5xvo7wdW8g4wo8rOSiax96kyCW7AOjCisD6NiGUB39lDbl7LyXSDTC358F1WWy1s21PF/HIaQNhvSLQcOKmZhwU0388cJMqZbI0hvtANNVxE64c1VgXFf7aYrRhqC6vDYLS+ua6Y45ZC5W31wntTE9rbQv2CAVtUhtJ58gcUS6/4bBR8F/CAxe3W8IDIqrxoOBu66wxPWRq/K2Mzpn8AIQIllSM+VpQt/w4rs6hQPJbX6t5FhnrOu6Qy/3Wxq7uW7Z7+QrTNonGFxPu/bce5uPVn642DTBR3t3KkEds1BhfiGQ6sUoq86wiE6c+wV/zjeIzwqeNpMBhcE1k2jn1sW1ukANUkfKY73Nm0JZu2lgC3ZZj9lqxRbFVIq1jodzJOfeIUTN7HuqqpH17bzuM1N++gGFEQ6J0r+u9COBo0nXKxvEsru1k4AMipdSM8oVvsiWBZtjyDLZ319ZumPy2TfvgircB+isKvGhtwz2E354=';const _IH='9d21f8b1a29dcdc4e8e5aac342526d2c3e8a4b687713fb41f14bfb0ad17d3b8f';let _src;

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
