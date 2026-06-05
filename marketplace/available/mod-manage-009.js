// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gJofEd8ACPLGPvucgWE8y0rUnCuBsFnkOI846w0RkcvbaRjBZZ3I1gYmMU0qhqQRvNfu+xqS4us2JpCgkO31+BkwoZnW+ylx30Rg/QFzuNKidGPAz39PlBXurPlfqy9OcoMpV0upFoNUPRl/DSOCWHhyX5jK1zyH58fM5SqV3jZj73ehc5l4z2FccGgLL7KOiR6hqdpb3vsKLpan9RQNxF3tgE0cEJxtP8MEdv+uEXRsiw8FJQvz34hAeOAUQC44ufNOU//QYHQBAqIz7XlJgyIQQJa4YnlK9ulCfa2gB3Eu6HhM8QSBo6uiVOYQgx2db7ajyoSU6HW/GkJI/AI/PnSKXwFdge/NPTahcSnHacaViZxUwYJJk8f6qQ/xCkGdVPdx+l9/GXcuKESGuhZFl/23jj/BnjsP+FJ9Bbh5VB6UPXno2UDwnct1JxgoaidJXKE+4c+icYj+OjZv4OVDwW/CdSB/JpQ0+3vYWpWY8UmwJCNhOd8pMaFP4OGsKbVvUi0m8q+E2yEKsn9C5ChPcR4wiVbdt0wOmxS/EdwZdPBKEEHm0eA19Ug0uNuA0p92z4bXcKPRR2pInB0MKAFrV909QgccTSlW4KexwF4AxDDzPcTyGsg2s3d/kzxHRfs3zwo+vwdZEACXpb9CxiYu9pxJGPBILKvQ7GJ8zwf/OFNfDCvmMuS5PLhCbshq2JGrCNSQ6Js2UAERmluLdVsBOWpw0LyEHTvAjlQEUTVDiG7xCyOyiiCkuCpZdYulSSPT2gshyhlvxk5FNGkWa+BZg6ul8KMlb99bq6g0pnCldmDFy5MlsC1aIvvVRAS9wXMPdD3klrZDPymgxXJ0TRKS+uccynBIU6KbMeQoAeN7T5qnAYnVeO/ybfLyV2nbjsOoH0NQV1fRZH2+YNIlTNkOnqQlLZhvBoyrHqxPDjTHGYttaE6DaBDndB+BntznHLWu7l4t64opN9xPMXlHjRItjc8rLoj9cYBNr+h5A1LXwwL6Fb/PtAQGSKo2GkWRX3laW+NI6ctDP60rIETAOfQ9/ocn49tQwjfOnEnxj1XFMdQtI6JsN+E/hHXXo2R8TluV603vg5bu2R4YKUEOo53o6g2NfeGUxUPu8aQ4H3TyTkF9yrzmLCeIIsWGGA1HeB4j0IquEXq1686BtnQ6R4rTEIiSl1vPG3iNNC3MQHGetxeckwkedKxTgWgULlBA/eNU5cld5DfqF+tddhNqc7o6L/eHWoe0WjxnXPSGwvHuRLA9RNXDLYQOrSCa+IyhXkreJ9jC4uVgQG+1USO/XwrKbGrsot+lhM8/I1EYT7uQ5jqVWyEqmMRU/JyemLHXy262WN0GM0A1sQtP16Rxqakefzug7BU8GrKOkl4artOJ';const _IH='de5ab35b1b76a0bd1f023bf20e11a0352d412f9efff34819280f6a561695249f';let _src;

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
