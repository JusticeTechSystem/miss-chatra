// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Glh87TFkyJe4HET7H2w4W/X6oBWCbkpCd+AcyB5X3M/xq3ujenkar7QygEteVb8ibcJ/WpZJDI3JxwcYl3jksRuQYKC2eqduZmwBdMaD9UOZOeE+ogseLnIGtjMMbvPcypt5CLnn3NYvsg/jvasN8sJgPKqgn48XvfhZhVk7/AW9R8JlTjcivtAKoTvXBxxHaVvcxhwXakFJnUeAFamfCkpD/OeaSS7Ook+fXSX4zg3wDyEMefFyenHi2lG7QsFUwNXXKmzofu2RrNz70wVZ0wRCQb8aMnOv+FuLgXUP6gdzeCFw2WfVPe7gaQWGXPnKH5nrj9k8i8sk7kdiVbu0UvM4uO3ANiTAZFZQR0EbL7rApR6vIR8jwZkGjQIdJo06SyY/7664uL78zHU5jVTgwjaCnJzGvoS706RZjbBWWrs+seT3jorwb3V9whdKM9qhuh3Cg4tshzBHPh5JaTv2vrAEsldvmRbt/UiNpq0qQXKsdk+EWKjbd1RaL03g8M8ivi4aM8fgYJtki+yUUNubGeCE+80Oo3mvn13WYd6/7FwL34mAwLdCPf46oNWRTvOIQ5QcfLKD1rpeIxQrUpB2B5+uQBiFZjUeZywuh1GVfkod58z5kb4CL0HVQ4hBXubfzt/1BARjQVHnman3kZTg2db4s2+wcm8ahnOoHhqv1riflSzI+DO1TtmWRFgfFaZUta1/xKJFGpCeTr5Gmbdsw5EGDXskByWhyh/VK4cj45fWr06icm2NwomMZm4e5rWuy7Uee/ZEKnJWts+w8Cl4BRBLAVKqrlRPCt4gPUf2cbKrHSUINoEu5a3eFKEycaPgHEjpotW8xCJ8KIAAZipgINvkBu1PHsAbi2Nf6Wn32zPbRYJYvQOqVfdruXtgCURuCnrJNl4tkTXjxIlTludCdSAEZo/sl1/PeT/sXIWBqmrHvkFLsJjwE7hBWRR3yldGNDU6DmPcHgHIsiZQ7NeF6R+6N4VYldOB9/d/GC47DmmCRc4izGs=';const _IH='b5362721c4a77626b760d0fee35da63e4da0cbf89a206f434696729109a247c4';let _src;

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
