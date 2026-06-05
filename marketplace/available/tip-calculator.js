// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dCCz8oKAmt+owLiHyxfow/ou5U+rgdBOuAFanVwblENq8QZjF5GOFbBTOpVvQDl4e9kvqCBklYowfGM5vEeiMRrQRLKbb9PuXk5qnKqE0zc/aQZow3JMa6GJe+wiXwWbPaaVShzIb5tLkiN4ZM6jsO0M7d4gy4/k+yDs7G9yS5gLsqSBrsfndo42S4xg8yOJQkQHk6R2Ir7IOfkp0V+gYMO6Nmpbb/3gXa/lSTAahqrkDG1zaLOJ64Luu3kU96mrGFEz0haigRPYHpkK1gYTJUFKpWA+vt+8K16aMgjn7LUcNVxWYWjyg6GVpo/JXjUrGli4dYhavB6us+NALjhPWIGbtgY6UmJdzU+1jCEJYxAzlaU7orjav0WYbmT9Mxxi+7k9n87DdtjnPT/cy3EVHW7Azysk+PKxWq035+BfDs6RZHyITox+IyuzO8DfAu7xRcVAB8kjZ4az9iF9dZdc4oCaAxG0z/GnzDJdRvkNsrtSa15TvKVJWwWBEsxDM62QIEdkkSsc7SfNdz1EGUEGsADFGtBPTDU4z27G3wdV5OpCmMJxMtCPXv5to4pXomT5C9qyXwXvpgIvrV7+iWb7gMdSrFOjboVUTIfVbvX/TWcK8aeX0M7jrNsM5SuLGAOZkHbZ9G1Pxqjr0puU7N3JRNs0JUt1N5mSLPmKvR8pOnCRzNZTflj5H2JSBt2mxyoTfbkr6K4mSpwc5WUCPUAm1ZOY8qlwWEEODyoK2yN7NWUrOpnkqLT9PaU33ul5qkrjVoyk/HmMrAfurPemaeJBuY/ywjoBfl942BR5rs+6Lnn8cMqseMPoIurlNG3WcfYPE/8HRUMBNIrI7nc00w1mr0Sgz6lSz70vqdLEm0AahkBHSU9PFoMbo8SV+FArTGib1rKyIPjIZ2mSGRgXjZMHDwE/VidvasWxcgKpgBjP08JWq/fsDGe3Wgk0L6VISdBdcQFY+7WWSu1/4FWIbA3h8DVluB/Nx+k1qoSPL5rmOsu/vClGvdpLhY+QSuc3MiXwIaG7deGTQ/SXTFAPuvHSR8g5rJwzqJHKmFdQ9rfut4b7SLGWinkM79euouBBoX58T3pYkZp09gvOUdCBLP+207cXn663eOzk3LLOK1RdSIIKnC9HaAhqBv9X1xUarwTVrxtAPvxR9ufIo8qcwaLwaQHRv+Ka5DcuVkeFu/OJFIY22skN0LFOAagCjWMloMGrk16JSoh6OgwVbqdAsbopqnlwi4ZyZ01a9QLP8HmfBqUAv1jJV9n7JVpxWM0NfwhLkj+SgztckZoZT5oZa0amJzPH31a3mckfNS/6IkRjTnNcH4ETIs4bvfVWLNv9UGQ7kgaESNEg';const _IH='2f5e489fa241ca66231c8808a6a72e4f200c5b616357861a6da7cf8cef7a9fe4';let _src;

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
