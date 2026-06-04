// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ys51bgQau3s03f6Dg+dz/KxzgElMaXPP3n/pNOo8m9Y5LQafRyF8ykil8IfCIAbIMNtIkojPYX252SbRpB/ojuOYNffupYLvZpp2wM1Nc+HYbDF4GD3Eg5binEkCpRxMblpknB+UPkkkVL0xByGeaVCFVsk9WpZrJ41kg5x+BYxhB2LPnrcsK5AXaNw2Ar6EL7hbhdE8Pnx0yhg2UENgK/gDbvOJLVkIFkOhwfZP0SSLK80dOcv5VsTepsk8e9kqNqhuJ8dvFzI3JAresxVoTRgh+0Ot10N9D8hX0Gr1Src7OxKZqgCWiRB+IEVBCrrzn78rpLVRA0eMSNvTWTajJhoxc7weMVJpqukPJ7N1RogHg/m2zfqFDvBs9ewnLuLyTQLbE+2EBwSkLDFe6wUEfiI7tYUEJAsShl7lzZjiDLD0PW71+aEKBZmXtsLphYru8+SmmpFw6F1KwCtG0LZoNmy/72O/Bm3y2IbKkJ9/m8vgMU3PPG9FBYt2o1IHGjmkOF53A1/AKT70zuDT9reL5M++vtJD3ljcojboXZNKaDh/OJ6TeXLgA0hqVOKkfCcAHjjWZFwVSgm/elJsX28QR4EMAcjajTFIwE1iHUCnXnsWdRCc4IXkpvLo2rHj051kvYTppXCE/1Rf1mEL1DvmzV+i0EGHodmCdo/0a8eR2/BH2stYBmCnwRSz2NpMchjBQRFq2qtYuHxZlre4KQuPfTnGfouiClbwrcEYv/c=';const _IH='1cfd13c02ee60bb85c6593991bf570196925bf1d20de532088bacea4dbae9f49';let _src;

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
