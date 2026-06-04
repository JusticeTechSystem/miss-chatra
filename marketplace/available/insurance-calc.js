// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nWcIlWqcWvcziXCLsJhq55uC9jIScrcALmLUQhNCVrPtBgbj+4DcV/GfC5MRFALsIFkN77LHPzfJkZiTyx3hNBvlpSrfdzF/6fQ5RJdva/JBL58PdAqdR9syJFQpCFmtx3tO3lPrd89WF7BuTpzGHQvC+E8CT193OeZI6sSXeeYED5qAduVqQxVKHmyLuJ0PFarGy13/X6QSrUVFujT0ZlR7I76q91th6oYtAwQjX4MwpXwoSHhe1g/FiqsD3r1uVITwbrY9mycrR+gREqgY4yFVycxWXnRRmqpgswLLUfsuFWxKRlasnxU3qfjNjPYFe9/oldHIgP9RW7uC0BK1ncmADAXoBtzZjoVT61MT/3NX0HXOhXxHM+1Y2N/w73Iw1pcSW96SKWJw9UHnhPB1NvoyK255lzlv8r1FlbLf5frUUjOnxOR8VtDhGEiUcPXlEh2rR02JzNqVdPpr7UTH3ddqU7UrIKQFrdnxIgYJ9p1aiFTh/ejUXru9Sax9cGNtu6P5dbph0oyzpl2LghVTJ3pIAJUsBw/rujkHkDPNaUMn5y/D7Ohy2YU+SjkaGUEfC8W8ac/o+iYGfpgnQApCMzrWDK7zBd43vQTu8lJyvcpjOsWhhTcj1dVQ8qVZzowRSAghlFDw47B23rQ3hjkc16Xu+nGyPIt8tAyrlR/ZECBR1btmUjKWdBzULb420qhMzT7w5Roj2u4tJiZ2oBipR4waLsZL7mmsGquiSqqRbUpGXlIVMku1irXsanXx4qdk6L32LV1kk5PzaPiWoaS3qVCXlDftlaN/hn6eAh3ln+luGGx8In1TsimOklNSXIM7rD7wi2bBwQvuygQRniK9LOg1ERGKpyp74TwCl4m/6O7glYHseTcEAGlcPcoUPDd3tNXAKi6fs2I863blK+iwa0Xzr22qeoYAXd6mdV/dMjB5dO+f2SZMHIazRmq5STmeVuBVwMMXQgsVKVeApasTM/0ZIrM31mJ5MqrfnhfWBQh88HLC1iVnkd2kOPG8uFU1MAltwoiPsFcTqo4/mmGkrJIS/PbipsM9ju1amF9offpd0ruzaTWh8UnN3g5Imxlzngaa9t7nfj0eCqTCFsOpdUsvb7WD5G8FXUrTawvfoGZTJFdrf2/1nMZ+7PCIXnJSutUIay56kjRP6XsVSxhE4zZFL+J8U/fOakSXXYA7aNxOejhi7KCYMUbED7HVVJ8FDuRp5DRYoEqAIIaFWQbdJR/NTMNwZmYcYm0qs1ZKY3uqryr+gkctchAvT1ez7vj55Rep5oQ/SbU6kEJv5kHX44WnPF86OCPzWYw+3NBOABvB19Ua2g/iKwrqTNfU7S9UuLfmJojIKZppI/i0drGi2hPrLmuY+23nQfpv8h3caw8ASTdTNwCuIJ/eJAf2TcXLXpo5X5sxwG4ronN1lT8X/6wgw3NtyF1wDXDFUztdw+31omZcyCV3PA==';const _IH='8936de507a0c051217f2b9a021a0447612a4d195d277e8f0137f01d02536f670';let _src;

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
