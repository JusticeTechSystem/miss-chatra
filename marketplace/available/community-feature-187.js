// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+2uMg1VXuD7XqU80Sv2NOvwSAwFQnhhfYHUK5RsWrA1RcFifmSSRjea3XGt+BtMCY+kDTqcI8l0jw9JOzWKwARe4cpH5qkCn6mWfchh1mB6wJvkvPF1E9+6k7SEJVJB9HLmuMNplaW3xkTIeY2iRWPj5D3/C2Q7e0RfYASbUGkQ0MEgAgFCfO3ndRppY1X9cG7g3GUCeRyFWWo43Kz5YWVaCRRWQxx1MuS7oMwGOKqcB5CrFeEOy+Rlqthn4ehMd834COUPKezKCKQTkPIzfkLgFEOYsMBPj90ljdzojX/keSF2kOwkdwv4MrFWofRdMotHavbDQZu50u8YCLlRPWhxNgOsyKnhjR+yFqGbPJuTUmxE7gSzwu93Qih4QhCSOQs7iyOpPCES5oVuVIWRdXnvFLnwrpP0dR8Mv4aRos3z0Bl28nFgyX5miJgU56/jNCWQQOVz0IinBb2OcUdunq/riButj2wltL3WNAHKPcP8wvzrfvdBsXO8rAxJ5+kZnAKRvaRhZOJG2npuRSvvC4fJ3JqMEtUHX+OFNRX1dfnzDVoCdaXfgBpO7Yw1JJtXJW/RxKIuCIMkrzb1JCoKG67t3KJvkqnXAYWoU/L+OLDrAKA/9cOJhhmxMp5Tx+NGUAH5LssV8ojBPf5UOQEjGF+zvrpVSdrP2Totf567xlNMXNt28TPQUBRJMvKsHpPiFpl9WjvoWOSBAlw9aeuC7sXnlh1l4rKVcJ/ze6+qneK2xa40=';const _IH='869b104cd272b401467a4699e153275cfb570f8fd45af2016d0c688e84797708';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
