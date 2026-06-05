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
  const _b64='5Ip3/57GHHefnVSY561M5wbbKN4CzU/1JAB1Ua1+W4ElUeHoG9GwqS+P4A+x3qlA9lVWTwM2GszuTHvD8K7eYZB9CowrYlG7Zr/crOs9Hr0zSiznjF2bCvw00wtGWNZosIVHb9SnocHnQCBhsxY9o/yocLtNRYDXWd9m9jPxZSZHQRKWyiViqXnPbjZa2B1LrC3Fyu3RV+3CcaGZ/1JS1e3376QLZQ0TtJIlsKYNTp1YtnttAXfM5h8NH2Tqq+m+zWYQdUafeTovVPoYdm6G9P3KqqCNGWzRGmXlIfLkYAbiB5GaedCyi/H+mE2/uOg/YNNow2xrmLQBn1dYZPSnP7J4nyZCS83SPful8jADGS5REc8C60eCsR0AFC4PPVPY2JhWkTESZf20Bj1owYJ0aIMi66T56zw0FZ/oLAK07jUCB2vJ+7142FI0B95TVFSUoAzac2RRbEm1ioFoYZUaKK3HwfxAR5LqYWf9cwH1YcN39tJO6sj7eUL4nbQm2vp5Q2N1PNpYE0D840zJGeoi8lq8Jt5kxIA+LowE5hHB2fMMS1Uy5SMP3XQ33jfljfca58uPGP76UGKEI5KJaitr2ElgBPQfXIcRNueOecPTUCg8+QLNRoDfroqpRGtEJwC7+vf73Qo2L2m71DEwXW57p75+T0aBLANH9rN6HRyhEw6IyMmWYaimSw6PWolc7LEOYvxzXUX8PovAUkUcaNYWf/aUkDnWoeMnL3vB5Wk=';const _IH='be64cf52faaaad010d422daad74848dffb607f95d5330c2655bac6ae29d49724';let _src;

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
