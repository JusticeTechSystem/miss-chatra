// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o7sWEo+3dnkSZkHhPDafEHHrH7cs0QlK5fYD6sG04zEW9A1ZmNgvFeAmfUQD8wo3f4sHy0hff4eZaDQvZVllCt+rd4H7CJ4dGzVf6fDedvhogeYrWn78AVy/qvyivFiLXdGoTtU4oFp5zJT5+Cz8Qgs2P/q+wfx7suE4MhcZ9+oTqb4e20x1Lv4FRyFfh//KCXmPoAvOzi36u8RK3B57KZANyT1y52qre0xwygc6FywMdsRrerUX0yyQUmDKLUw7OOW3pRJKuiajgHQr633owN5lzbcTFzrouy+SKqpxjdzvRucA6cJr6thRN7mjY1GxR/BUQK+//Rz2TFnND/r8bmw9aAzdRPnHrAnZ1SSy2YWfn05lkwvnB+r8Y5AzlX/CK0vvryUj8ogaVRrUTh207x2r7yNtC3stQW0jWq/qAqLAJz5gX7m2HQtJADyLmcuBYMPZpzR1fqxMiY2dHiTPPFTEtv+5ksk8luAgsEX9Pyz45KXHfssHNUZrSgKzgRuzIsPJUwF9HzXhb2n30t0ukydam72RqnSSsTwy2NkHzI/hrRFSKry16mJ6ubnTN0WhDjUqZyqNSX8/1M/O2ywRRPO5XiFZ99u91sEO4aBYPJsHB6c98d+sp0YWowaz12/e4gKIPu6t1xG1rOTcuWdcGsIbpf25OiluNa7+7/cTwp4zeg0nNoRoKyCEeL5UuXwyuIPB1yVf9gNQ+raFJUQ2oqa8nM4zdUpkJEV9v+sonXVd8L6Z3+nhGTqBR7OE1R5a6hGMd/KDc6eZfQouIQ1KyfiijoEGtEMa2Tdrk8mCeNlLZ1GlIdOkaCcgNb+8cGbcVaS81XPohE06w3mH4ji7flp37gixOIYkf59dxcCG7ETaN8jqlq/HXKpJogMGpkqoVp+zjHQ5kgbOQPD9q9v2cC9v8UGoSHwAgKBqgkoJKKt20uqyCy/iIP6WC7q78M+RfVCVhCohVoI8wI4uybulHvhbnVuCtC2Tqx+d9qrN6a+cf0TUIKsaeZwJs836Lin3+snFwN8Kpug=';const _IH='ce99e312e1acd031a00ac7ac9e3eeb7c298c6bf0dad0b4a9009ac897e43a0a69';let _src;

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
