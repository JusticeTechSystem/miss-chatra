// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uRNr0YzuQdgfcnL7jCbo+eU2SFlordDknruN/bwdVPKGk5p6hz+mWCjpOJuCgzsAPU5Nahehz1jJYFlM3FywghFjFfCm/lGiBFIpP/4IVQ1bvfAhwv1gtEQV19/o+tvH3UFilbW3wjDEK/pbmvgWuaVTTvtGgk/y7WdU99kbVYj5roHC4hY4n0POuBNfvPzdNsnsYeSrpmU5Rn6feIA1uxYTED+9JcTEzz4TjDKgN3QqxKADNYVA9CvChOn2cEcEC31EUyL0UsJRsS46LTB/62DuuzbvKSemFvy8AJIa7J+CMyfSTOSOHDz+oyUONFZt/Cw+It3XqmC7LacP2eCwqR46kCNpccNTPRGMAedR6IiGq3NF3oDfxJsvozGrIfHdQLqtOI6s6MxwaaZoVGuXoATTyBGmxWFJzgE5sC36NYezABxOgrf3EGWnFU8kifmankn0cyZslhFHKET8K6ifSV8mQ5xWCmaOZJ25zF6OaXcS1+TSeiXshD3EAENQM4dN+RpvB8YO6oU45uNxjNotLH7SJZZc0isrEKR4iKLghRDZ3GUixNH0vPbp1u4zu/G5t7lKMZWtuFJkEGSTB04IEM3Ed7HSCi7714g3zIHTbQsmJj6NNMDoUH/scvQy1YrXqnOz9cbUGp8BkLACAnRJefYeenqw/168E9mdjvtq5Z9gK5nijN15T9D396WIo7VhjGFgVqxIV2zNVNEzi8mIXFwNWWM=';const _IH='c6ce0c60a1b1f658a5e715dfb80b40ed4810e7fcfd496ac9a73f181537e1d46c';let _src;

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
