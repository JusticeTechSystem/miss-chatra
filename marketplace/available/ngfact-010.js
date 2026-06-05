// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sHki7pDN8u3WG88b8NoXNSSV7nd/9UpY4QP4QACPSwsYw92IiLaGr8bVefXhth/CnRBBi1l6hvIihj8hrChJVizgrOKoq6PkdNGt+jaDHvxTdNzldACVCi9VuzvDkpYiBrzGmeCfUtQWY8tR4lfcxY4DK3maDg8FWFhbJ9ZOIzN/nNFHZ8q+jNe3janyRH64G7t2SwWkSTUas85heI34wOK75jFBHneoDCoCwMKV7I5dA+W46UOMFfSLZEBIkWSOK5v9B1/KeDjTWDIsNDO8XX25bMQxBdWouuE73shFaCanChTWfBSBEErrDIvBiJccocS7KJnDI/fMuC/gbXK0J8zpE1VHUcRP9PVncvE7oScXU59mvcldSPf8zsYO8HInXCvmvE7hd5yJj+P3DSh6V3I24Yq+cas6o8m3c06LPEjQQMbU7u65Nwv43yyoLv79tQbqfT90GUH07a7ukEWDtazCj5QKUn5dKy1XYSeUZ4D+3/ED3HgqKxALUt/Ne96a9OQzRp1r31UfxB39/gSmunC+06XjqjqQs7ON2gayqbDPLkV0lcUnAqIBXB+ZqN4BfLyLybYXCSa4T2ylYF8AYTus+klvAhuPvRGvtAIpteClq6+nmepPHoYS8c7kWmUHteAkLoSCqMBcV2u6taHXyJjpQSBNUjdurlYZO487V9Zu9tRBGFc9lE34pS3h3HCnivyoaMw3EzE=';const _IH='cc8ea294bda421e764a183bcceebca3be3621d2b5addc43ca3b1a8c50e6d56aa';let _src;

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
