// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1TrVnCOFm/GGbl2QNOINkvHg99MBf9W8JSqxHwt+inSVBwsfktIWmvY8wpFRl2LnHzdPWFQ7tGMNOImn3+XVuM9rJC89aaYRK1ODUX6gSRlEDwcQuWxbjdE89QFJsZcA01NxDVnc6dtNMk6YM1JUZXzRdPoPZPURAkjeHuA9mAeAhrsRb7RwWXNfnh7eYRkZQQlZ3mcK9P9GUb7SoXO+mswzv+IsF5TANaOtvFxamYF2dXZG7YR1/2zKaVzgyN4Os7n8gtxQLQvWXXRHtDgf5b9x8ZIPbiTMlKqtfrC4RrXt5O4fE/OJH2JiBcTV7Nasz0HtyOeNtldVGPnhMoB+39ddZavWnQiQaPPw7TiGB+e8GnpzJhbGmR2z7fbATLWeY+urKxxJtFhHQNb/oGlMQRbruW8XpQR1gGkRd9gTYhQ7AGdYAwpeNgNDTPSgSmwk03WIBJndcQxgW/c4LkeojQH5CVWk5IxfBwsQCf0vhYeNGSWLUdcx4pXdsjeHH/HyWLE67CSPq+71q0yX8eAKvUmEXg1QrIXkTdU22Ezqla4Mg73dJl8+iS3d5PLXZK/NBAVP7/sReQ48rGx7SyKsIDw2ZhyLNo55Hsi2q/uWeMr42h+/9DJF0Qww1+6A6zVX79tgu6fwo13ZBKW8M0iT7N1UQptFWHl7';const _IH='0e5072293c615be84967b9009286ee80136616e937ce9089aebb5eaf9f784be5';let _src;

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
