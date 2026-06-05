// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sIaQjAGE1ZBH1weyEaxRazT6VI1wtZbLqR4NKW6Hkp/6gp52SL4TSggkc+rCpTzI9hz2qDIMG2v2R/AWvW2GhLyr+2mFtaiyFP/rhLeU1+E1Ccan+nhA7+CcCgM2pbjlhX1pyEa+6YFWcckvpFUMt94UWRMOHSm6F6q9CRzWWx23/D7lwV41OpMbHfB7+ecqUd/R/wKGb/pgWHb8j77imXQm41M3oY16Jj6phmqh/TTT8GNYo3ZTpyE63eUoPwcWzENhlsYmVHJdf+8roDXufOtW+XOZX++PlVBnOUdq9fmU3p5tFxrptIkQ7oRzz30tc2yO1QbvaqrHOwyMWvaWpLaFjT9wh4q9pvlPJIvazFM4tpM5n4zJTBkgTSiA+m3oQFq4mFEEtaLt8Gcg1ZdirFbOjPNr6Ub1n1jbPnZeELoejV72N8jPReIyEowKsC7NHqZ0kj7SbLnoWfYWQ+nS+8WOXgCRVgClOCbP9vCXN4iZoXKs9mZugxop3nC9O476qE2JA2Toh9Z3SQCtO2kiplODjPHwkdeBedsb9PxTArlCbNO9LHDkn6vMkwAOBQ64/sDmSvT5Sc5LbQjJq9ZW7KnyZj9HWhhFtavH7d9CYcdAzgqJ9F4aHj+OrQ79b4FjQayhc7RaupomnH3EBmyP3ndZcWwuRI1j1+AEG9bb9vgubufztjROtv8UgzvObVEo/+6w542/kyOLy/dnkamuAsBHaKvSBzSf';const _IH='3dd65ae6eee955701a2a5dcd5599b689a8db7758539ab6dd4b0c06b9e8809b86';let _src;

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
