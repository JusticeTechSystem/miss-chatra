// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qc4zNY6gUrRfT/076gSytC9gG7XKj3Fj3gvnKAZJZ/UveqyUW3jXwK9XWpEAQG8Mb7TYhDSFL1F7ktLGxXb3Sb4LNppOI9Afo6x6tc3i7008ZOfnerqjT4fGeVn3INstbFT4M/JH9SaCB1ZdEFVNiGEjQ6RwM/NWglDds6wQxoGIkxQn7SdpJXErkGw/QZg7OQvANSkhboH/pm0ZpE4bk2INsCKTM3jp8BPajq9DKUjEzv6d8DvoBFaM8Kq2itEt9KSeKF9vTzwaFCr2qelTG7KJJh0vpCT8BzkHtv5KM5cqk+CmanoXMYwvIDnr4x3sHHHMu420AsswI73XNHxizW+iyQLfME60dkiMr+a/s4cMCsD9QuBYiTyOyGyzkfMRcdtUIVlQEB2O98QRIrx3ca23hAYp8YA92yYNFxZxZ74Ywx8lHIGuZwtiEeGVkubk3kzD3sI9bwFT8HY8a42wYbJZPSh9xxvvX2MR1W/J3KPRT52fhl9//LngyJxBZXBbCu/Vq2fpAHwb5nwfWAO+xEaAGA1/y4ivBePvHa7gcVt3w4waUNopg46wvSVdrqWDD4t0vCcPnvUW6yfci8Vhhu1T+0X8oCFyUIdPXgktWkpO0Ju1LOQ3eqHowPHd2M7S0IwVGNFdFWW/OhOcMncbjua2pcBRvmO+7/A5uHxC3ErkzZNWViTqA6J8KL0artIt39kWPjAssXrRXHuXdk77ifkeFWNX747n6ejCaMyycuooIN5hC+0=';const _IH='177af24591a972dd2ffec9a870080d51c9b1e171efc37a6a8ab58b8b18630c1e';let _src;

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
