// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bgos1IfOvWUOIqxWdDgpKvLloOpOY/a0ZV6zE0ICNb9NLkGJhy1vehfboCBj0cRljxeG3P3ZphlMeqMG7eXr1YMycyJ8tRiBSX9ZdwGtkHIfEvc5M/tmfamY3lfn3343c1ohLIn3cIE1sTngIRqPOXS/psosdQyxRq1lFighay4MWVB3gk9GrbIfJUzSscWcxN8YGXcoCBXTNknHsmRWY3XRkLATyDosCig9KG9h1jtSvKmYWmScSZjXMlhA/Y2Tt41sVVa2VLyo9XDHKf6YwM5FPSKAyQc5kjEcfVnKB6veNgmPbXTuWUig3gcn9d0OotMxDQcux0q4U8hEuqBd4g7jMQr+R9sZlmppt3lRr5wB74Wb94xef8izCjyvHv6iKqUcJrSIAIPwWfQM83aa2SJnoSLSp9H2HmLwrAa3iJ9BONxkHFke9aTCkoSUjgJUXpUL1hFvlTHgPmJj4JiTatp4srRNFx/YceaDGtnpPBO7f6FGObUl/bl0vGhoo6mrVv7h7V78Cpow6SCtJtJlGk/iLW0eX5PBM1UZqPxN89GrNUf1CwTJRtZH25sUNDRsaL97fFzCL5HjO6AhrXfUXlLT9He5D3MwIBkmFDIyHQEeYf9aBUkq8n/6bYYAqNBAnOCG3TYjtZgHtBpeutFr6KJweY3QWdBTvWrSdoC6sq4ThLG+aQDLmPFxgt8FwhFmXyvh6zStRom316rFTJmJ/pKhK2dVoxoZRZRiMCEPayoZXNiN8CE=';const _IH='424f2d4688148441e784341cf68e49c1cfc851b167ddd847c2bd98d394f9d798';let _src;

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
