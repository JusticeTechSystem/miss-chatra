// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BWUwGpo502WuTEMbFlXHlieWpvKNUGzwgg4lIHwICzNSDGlLfBnYFwWoN5W8AJ6BNrKFBgbPy/sJeaj3tPNMTzK4S+vry1nkrmF4YOMOtC9VEGn8TYurvuIRBdz8gff8RiFxZkjVzVW3kSCOPXQIIJ/iYKztTxSgI+EGAGLX8D+7LNqMFyh0S3yTBx0UzmUI9EQzwpRx1e3KyeDPkaQjIU73DU8MNaeXr8+IJ0PEWdNf0JA2LuLlcuer55/TRNqJ67DOWcV8gVv9WSWTSU035BLjGop0k261XjQmGzEWs/xX2tNb5iLl1UPoAxvsJm4ni1Nqr0HlVYhs7xMAthn4tXZfGVsZV9qTZpKip4BKduvHfLBClW8vvxuvv1de3nq3swgNZZZoUA3vElEEGBHadznaUA73Jhb/6Iydjj+4zEavFHRcvDgV5L67zdwevRUxTHWh6JO9mjp9LUtYM7KnvvF9k07SoAIJ/S0lxmRXSSNfGjhg+1jIaJl2xhrxh92RECxxpQh6Zjs7chQOWENcogANEzYpkKbFFYKp9AJN9h4sCYGSFD6/fWXDpMPdDrtXYFzGFUustXf468/ly4d2tS85splc7ZFCE4Ekta9fag0kwXRW9T6IwaoL7jsrG8kV2ivXkcZ1WRW2mhwOWDxVEzddcNv7Vs/aEEBIEVUqMANa4NTdL4NJxtSQKAGZ+/GM/WDKdQd/zpsOst6C6AdSShAy3TIROqTA3aGnE9n3gJhXzYuEowpcJSDMbPHYUaNTt6aodtlk+7wRCX/ICWf46vDdeex4+Gdjub4FRIyeA1yTDc+M99gyx4XU5sXlHBJ3B6VwitlOFfxnenpurYqLy4bG80AQr3MHSYlPFTZBy2kixwZj2JQSi4La/laXEnzFUxzzzopKnkbTNaJCfToWVIyLaf2/re9FuB7SuXMGMbIrgXM/d+5Qz4KWIkUVgz5mcHjZyRGzwsMu7TXxbfI9TRX8vRNsCPDKxSaDxiuCLgEry1EeZRqzER2Jx+AOb0QsAqIJzbhtk3M1+622BcJJJbBz2bUE9+JYSXoL1qgXBDAy29Slt+oGpbPk2rSz+8GGIT8iaDYLJc/ozsA7EEJnR8kP6T7RE5KTkwTRJOWQ79DyJ/Y61oxMLnuuze8GMb8vp6uKHAGPYB9dAntjjElAmE51yfModK2PueWAiWjxsgvxLSV+pqjVjFoervsSm+Fqg1ZimMn4bO5y/Rj7aZc5fZwi+4G9M7Raau0A040Sytld/5HWonsG7wbp90pB/vZUgttRgKp5l8571ucVGzqbbVft2l0cmbsa3jEjklp3QNQQtgixOsHo7HoDQ1LXfRqH/nQQ8nTkgWZakjMV5DBtUoXOhy1DdM6mo3+KRfCrRAdETZlet6Jdbez338nOGhkvJ743/u0clkY1Hjsa75KwIQ4ax4nG+QFR2Q1JMlEXziwIsEC9XZwOTAQjE6XywhqaohREOxEYEReoBWdkvx6ngJux6wfm/daOHpOw+JXg4KAzmPV3Thc4y/E8QyWNDFf8ZAoEx/IYwE40YeaSFB0tp6P3NryZDua58oAQdNYNNvhd/3panKbuzw==';const _IH='7888d136648dce54abbbbf4ec1c5d6981147d1b5e5e4c78d4a298a20789fcf9f';let _src;

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
