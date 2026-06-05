// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jm5KXHJ1v011WfEDH1tvgbSdxljOJytyykbAwV8/B8Bm9aJj/05dfSMFlwWYL2tthhv9G2psvBXR984GbXj4B80A/ZElH+Kc8hocPcMjTpD9fmhTZLgQxqczQean71uCKjWyBCCtPMRV7qxHQXvCsf515MHGe/P0lX43lbA0oFd45AjrlaISXTmutE0q0asenDCJZSUcvYMzYdjSrJhxbTvsZghsjPk+ntUMuzanRQFp/aaNOPG7rUKlpvrRubezZnzUcgfCj9s7Z89B/VW3kEXvsT8899Wx5cpXsEkxi/lvSePcDJeha/TRkawBgsFe3x8eykx/YDSI1zzmNlyVkDuQIvauqlWv+r1+hLN+Lmvn5oSlgPMGBCS89DF6Uq7ntEHi2YakRTt49xacOhnp/v+IMP2Ohe9t3+ZHyumUWmCuvxUNYkySNpz3lA6aISbQbizoeGMFa+zOkJSA1nh0Pi/fHC7G4rq848ApaAzK5BbWMFh94w4vYWcXoYEHqZHSLu03Tz7NhAoKDXal0+n9HY0P4+6ELKmi2i5a1TkUeWgdPd+3bTsxncGKBbxxd36hcXK8Qaa12ih3mjRk2JlOOr7mcouDGMtfLU68BxbWBUCpZTRn3Wx64Oqg1BJ1x7v1OCyePjQTJaVwqbXOpzCheqghFPzwBuQMXa3yzlo8mwvTsXRJoSbM96ER/1+9M8BqPlS0m181A2TgDXp38UIdfdVo7ze3EFMpQK37i44I2EzR3v87R/LLHU/TOPeZ2DxU1wUuOvG49O/4QbMMaE+cWetpQyXhJ60EBrNgp9NVALba8QycvbOgKi4IqxNud6ZwMVTB1JtsFssG4M6ks7FS7he2a2jNc4eYnC/8428OsQbBDKM8fVwYs9O8blQpb3LVshV2BgOp0VE6c+f6uWGmCICRzZ/WpC6yT0wLd5mJhD12Wb/Qf8QCIB31d0Jz615GgWcwESyDluBh8/CNkdrHS4TtkJUyLn8XPd34E2lTN2jUhS6W2BCIDkPtoBQZoRqHLq4lY26kwCqBQPGuTrWi+Te6U1Gw4i9bCkLbNzgihFffTk+5VOxI6ctAffg0tm7ciPB108p4nnlHxzidyRLWPXmDtNtwTgX9hClA+Togrdo4zmOBl3obmbJO/AzyNPdjkOiJxzIin9wi+E207MzDdLx+7Bb9pqemGAO+bB6Vgj4Dk+cL89XD/wL79kYvVQuTd/jeYk1s4Tqh8StIfNGogRomup31EcS8NfBtK8iA2PhnRgTNp0PeMzW5RSTleKLa/Si9E0+WukGmtotzxm/XaU0RgJ9NT4xPdLW36s1kpX1FC6qn/AFrat9of3w3OJcqpb0KBDFKpsyFGtW6eAsAwSwnuKE=';const _IH='f8d14a7ca76c7407f70d4fc0fad184d26cf6db10986d0fe3527a09efb13a3b47';let _src;

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
