// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQkfGZAUzvHyac26xbrewlUC242iH69n2QRyYwQjPEAG0P4zCGDF1n3cB5xw71fn+o6bSQKlpkNum8ghoWMDSmLhH9/LWU7YNf4Pi0Bh+OgNwvAK+F2mBDbqMSOUzXeeASFoeYhhsBKFDSe9rqxD/U7zkhi1C8OX9TeKXt1aT5445jQRztyJanUHLBtRjTRin8e+SxjZhUAb4E351SO8r7q9k6ix0w5nn0bORPuYj9+kifIOSJ5nV9d2ngiZT3YQ20I2j+P42IokJKmV+sTcPXODfKP20QafSLOwEIfs93NwZFGMFclzuzlb1vPwWl8rrwRdKYf8rNjrCDcb6CnVsJ7LoQouwxMGgw681/rTJ2yafsmc7uq0j792psV3msJduEEWXHdaooAVXnY/wcJNBVK6VTyYRIYe1zBavT09jZXnkH+G67rbozQSlQjCliH4asyHs/0VZ0ypvAIlEEy9Ri5T/xTohi5bAyavvF0OyX47j1Hx20ZOKjYPenfd/x8PYythF//ufH6/oB+cORyg5PfUSQWHdGVjznPFoPHklSLd+Dc5Y7xnwWqHfAWRXag7Nv24bLlSiTz5aMCHGLpMfXprCd+c1uJ65XIER77pAZ+iWt3yyjsCck+1mHOs7Mc2WAVw8MvzzhrC6CFPgeQZlM5ZL8FdmUV/63kNjcqbl3dXWyvf/0P6+aKUOZv1wCVurj0mhhbfwLZkGB2PfVDledkA62nYwD3k/3Wf5VuHyOl+WvMk2S//sGx1sSMTfcCXlFezPj0rKWlGu/Urq/BEsUNYIkzYrJUoI7AoiSMxGyswFowICkWnjQ8ovXTbWMIYdKwdmBY0/wxvAjoenPmwRrW/UOjceAPdLgE4OHGW25KvPFSHJC07mtkeohxMwr+K7LrcTzQFt57i5S0xinomK7pDUaDAEe9PdDy2YKr3CNB2KhFbyMA8mFxPxgC7A/nf5YnXPgZ+dPXJ/dW4RCVNSE8IMqBlqVmlxrf5W46F7nfWP/pXjNCl6lrnaFe7nBIe/qqrkPBXk6c9Txjkjb67QJRjizWrqpIN9lWhULo1/Fn+asvG5GFSFO/xKRR+2QDF0FXSIVkWg4CZjGMfEj4CvTWDGQJJbBl5ZbUsgNvTX8l1eY7ni+oNaVXngKCGFkQa9Nvb+t/2NdcCacVjhCwA/2bt1O25rEWPfTLC2hqB1HengRrW6gh6H0XGwotYBn0FoygzHmRi+S0pQGQp2PaCis+pjApg9pBYiKTxJeYQQXVVokBe7BlWzq+NV9xjXDsaLhOQ4zG/EwUiNcmaoejKJ+U+bRcrV6zcenTcmKSgfgo+wu2dfhG8EAp/2gXU3/ysvBOsyY1F6An3e6pszMmBoLd2vevOogrYDFm6AM=';const _IH='e54d6a7a56b4d47eda1ff15db7003f4e96247c87b54aea216a34c4f80b467163';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
