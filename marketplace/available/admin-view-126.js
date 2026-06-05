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
  const _b64='L0t+XnPgd5dN3C80p2IcqPJJDtVRK244dO0MRSkZcEm0cvqJAlKwn/SwlRhHg10p/ocmdVjcXSmERmjFYBbqMmBMoGelYAVS+4FnYcdqQrGqXGAteclgI89VtJgy3cWWy5V+89i/DHUX+3Cb6N0wyTcoqEUiJKnVOmKVBuoNq5U7NnwZGaBMMUW3E/jxqDXZpwUh72IgSQY+g9XzIJm6hmnOiO0L4EqNsR5ojI2GeUksLJOh/BDsp0EktlYsWYF27Sxo49UMDA0SuEfnNTGa1j416GXx0nrvVVEKRET3MT5ut1SSF9DF+WIX5j+U5S3Supa92/bK2jXZ//3h/QGq81d9NO8XkdrTLAWSkLwhw4hEwzkla2/BOFQKOS4gRGVhUta8ShjNT9BLcp1Y5vwcbgbx48AwLaWX1A6mj7mmLTEMtJ337IMo35N8gqzj+TYNHNNbCinje7/PzhbExlWd5625/B6uiST5PYuT89lFG9u4W3Q4hwChM8PJ9gD5PT6T49XKf3SE94XHt9s75LdeQ3Y1SJx+v2QxAOzJUO5j32oery9Du6d0bMRV5z46RRbBAYjubwTf0vUlxHccmtzN2qMXUhPi6OCm0MEnrj2iI6JYaMWPHBskHdP53MQUy4ygLHVa5/KFVlzuRoRE7/c5tj3r8a1pNR2Y31ztC08ZKxnVKf2ObwCiJE/modJEWWG7rCISOd1+kL/17QGd26alil6X+OmHl1OxTupPkQ/5FNO+yVNcniIzBFKDvm/YkiEFjZAWsQNYmuLFRge3wYf7bXLOAnjFz2mpY4K9mrT73jaEgvOTTmTH3DACCn6WE369TQ9JH7r2x1V3RBeeWhOgdcZECSSZEWi7/rl8sOgVoDV6GTV+ysJlvGoNWddWpKNsxmtf3SK30LJJ/JdK816MaDGEK/PD3DfNIBF+PKIJjczp2bpQ8D3KlTeX97eKuHcNmAsn+4zfMZlNlrpzOZZuk7eReTgIB+4Cyb4GFkYuWD2OZQ4=';const _IH='9f09783d3c0c3c300f624ab63b597b4762501131a9225b884271edb9b26697eb';let _src;

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
