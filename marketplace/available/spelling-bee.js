// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6/l7fVSCL3xF/ZfA6XUF+50/GIe7G3D6vzYTGtUylrd5lrE8Ft28LcqTbFB5Sih82HMI+Jg7GUz/NjPeUzhXJ0pU3a14R/bmqDR3Ncb54dTQjn2tvHryOB+YHLt86CLvrt6t/goW5CwZhUNYer19rmIqXWk0jdD9Kp2XSZ4I26OpAQL/XCXslv8DmpzjslZXJ4sM08tpYSwQ1IFfC6W7YP09885qU3Ey8Krzhmt0ufIALm63fErOFF1mDurdUWERsvhC9inpl2h4Bi62106EjzeGoDEBYzWnoskZFMPcsX3FYLD0J6V5fpMZfvaxFtPv143nF6eel4qBReURuLBDOnDIit2nmnccHCyYx0Jz31bJ8dXVGB3yUhe+akW3Q8Z6xxXwAwzFCoQ3zQ8m1ItGPYpNos+21Tq9v2WDJ7f2/DnIcF1bajZ8T6YJ6XtS48SVlzPy75dVPr3VKPJH0xABQ3HO7NV/0lN9wn0ZIpwlxvssrLdrQB6jMh8bi12kmN4wodNlujY9TPh1gvivIu8fKMhlATq1llD36GIbhn4AT0Aspl6VAXOZeh+hRRpciYYQyM6nZaPfq+awu4N+qWNhZzU/USDetISGXi4K4JSEWKMhjs1RoKf6/f55HCipaQyKtgn9u4WzfSH/uJ62a0R2XwiLVlbwaPgDjpMD/THJ9Lr/2vRi/BiPVMI1qAzrTLKtmZPnD56L6DZNhKLeyocbIG+6GLhm5/HLQVxOAwGPLPrYFnPIfbey5fnat1kSK6c+tt/nZaiSQsK1DHrVdOeNUzX1Otw5oAtHcH//Bhq2fNVr6Os20KJqyDK/hsSBlymEcnHwDuF5a6QLSb+D6R3r9SZHiScF6GuResyvcdDj+5GorxwlQL0IupI4Qbw47CmEPs7cbX13wOsKytCDDBK5pKlZyigDi++1nUJcUsDU1ghFmUWRGTXyy5fpgNDLzV+hsmhQEpddBROvEuB7B0Rsyz3fvjs+C1Mdar4hoWPA3XGD5czzsqvXfjdyKO4yefJG1PgXV8CoLR2oVhtyy+zLNpLf9hjlHwfcOQmYvzfguhyrdvj6IYFntfjPUW+WgRzia/owA5BZzqERUvC2eVuxNSMXDil3FA9PodTB9G61Mwiezfr5vtnq5mGWhqL+UWI8WeNUghPwiex6QgRYDmD2dJcWhXFtG2igCziDRcmU8Q1Z/82trhwOLxP24dts8UKGw7hCPVB0e9zJpBk82y8ujRJEQxAduVopKR9Qqf1bj/PPOe7NxZxOcV9v+LUTwHnIujATFgwsG412A9kZKxP0sxBz9FGDqy8ttYXOgQD7BLhXdu0zu1TpgH/AtIpjarYCu9ceD7mw23VL1KbleegV4Kkhgwur/qX8Ubrp/49kDWe/unz92gzR7noqSR4CLhIxWXM71Tgcdb5cvgO5BQ1chrOBMILCtX6iU1AdujnbePp8TEzHX9nVTQR++R7M8tJIVxSd0W7iI0hoVh37Yu2Vz9LCQ71ohqXML4S1uU4l6sTctA/1flP/hx5Jel8ZaOENcGfCvcOat1uBPXma1KWNHyJEpMrTrStxXAWv8DUnbN7zsWMlyd9ff0v37zwJtu6hlvhd7zkFMPoT470fqdqxhmj85aCMIk4EDFsJQtvPNWoQQ0zLsvTTuzlUKz7JlojDPzUaonk4YFH9rey8MiBWKR68veXKXst9prhkREOPas2gUAPOfgaGZqu+KUvT7zz+54fGoKhroEodN8k9dAjnl442ccLGNMoZolXeIHZlKEgUCXJP+pVcsaIfbTIuoSen+MbP97v9RRgDavOx3cr9vw6rfUiEKaUD9CCyg+U=';const _IH='3c1f84925a2f263b17f373f32a9e53f1d5de628a4857bc992df7a152bcf197b9';let _src;

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
