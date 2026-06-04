// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IwRyNwrsrg6bhPTOfiS6qF8AAC+NjUjq9HYXDCfXj4Nsb2kjebIn+1ZJq41X6dv3E6+aoyW23wMfuyPQdbhyRHzjEeWhP0ca9a5/+7PYTcjZ/jdOCRrMRlx0wCDmdHgdJkGM4NyqNKhh64ycyYNvS/nw8scSaGCL50kCfDpPiJoGSuu/lwLVnCpj0hfGir06DCRWhf588JKPwaUdBuv7i3pujXbNEMuNaO42vtK7P/nAbZXLQaCsWLbfw9NNUMFxwkRGQbo45m6WRvdWXdG4opWeBxguItDO3tpck5woOLBjzR9hliI1HehUkEe54R12ok5ivIWrdjHrLrfDn35L2sopOfgCjtZG/djLOsFIyelMoG0+7SPYCieD2s2xU9c3FAGcw0i7B2BzyclxfUrzdagp2lSj9kZostc8CCHDubIDc02HeVgaEQ1TqL6b06CIXa7KLidLGSyF5OQlIA2ZnHRuSmAid6lAE32H0ifqqSrpvjiHon1uD0yyYKlYXsabxw+wu22BEVQtPw5MB5tbcjcuHni8uDbTpU91QOtA9b96R2W8DUaPTUFRCU2Xj68gsVlGMxA3KzIAxt6tf+T8OeLPquoq5tQGcuIzPgnqtTJsOZK2dUYq3RNJBEBl4+0Mn+bBEhn0ClQycwgZWxc0E5MkYHLMDOffo3gX7qejTWOupttVl052+0ba/W01nVrJg+Y2RbPv72Bfav7+dWVA1/k8pet5/f41y1B6ehdNkjzf9Vt474LwBfRYnT3Q1Pt8a1MAZfXuaUVitb3wX61iNcVj6QT5TViZt4EsxNEXMqhfso0ZoSetGL95h+WViIOvI9iGhdzg7X5sG5boQsvGvlHMLzK7t2WjjfrqF9j444WFDL/5gydZIg0mqRRakAxXyOks11IqR1owegooACOiHqLvnbl2MoLP27roG9bFAHo6n3Zx5HDy4XaK15PBXWoHXfHTJben4QLvT/YqWxAkFtekYTlTjc9ntAj0TExNUkntdk56XWPZee1bCs0hxD7iNn7K8o6aes8=';const _IH='6d7f829d72960d4199fc6390166bda3aded8ef5a7e9e4426552aa0c7620b22a3';let _src;

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
