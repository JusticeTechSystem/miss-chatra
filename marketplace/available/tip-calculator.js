// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W3ckYO+WGX+bg1gQkX9byaT8NW06M7xwMKAWYnoqgT3lISvLi0a++X1nlwUh8gxIV0wGte2rbNJ8yBIh/Jw9gaxc3cqumqRubdJ2etNP8o/qV6Wp4hJ2OdV/E3P6zcJBV6pKpjuH0sBerdxJVSlSD645GKvcTpTWkUeFdSH9CNt4GFkJSJlpjeO+9Lw6wQP2z8mTpvo3bd1G6CsVHG0VR05AaK/k+6Pvh1Ge0Fr2/hA1TmZD3B4TGXRQ8aBVK7hT80G6CywDqMPrW/+r/LuiI6IqoKJel6xpB00jtN3MhunxIGZUabPZlyaBkxOic2r0xVNpCJKOK9tGn7oPewBAL1zvAyWWuxoHn40Faz+s9hnRYyKV43l/V3qLWECu8s5ULoxENv13yhReslfl0wGiyts0qRwVj/I8ZP/KneeSilocxoi+48yv6bVsCUq+dYYHmAgfGqTxg5S0gJ+OWH1emoQCFovlfmoisQWbsG3I0mzOskin4X0t8+HVaGBknDVTJoxrNrnw/cl3JJrbdZH64gjYoVWZ5ICzQX1liguYLmpEYGmtCF24CfeWaN/vife9v6OIOwvVi916ZRQViT3ZUnSO+s2aET2UZDU6eUv1yVNSzRM27PgQBK1AwrXKhJgy3qDg9dRJBPRQL/7rhYk/qHUjYOLe9E9Z+EPtGwbzB3DoEk8jSONp1u2eIU+y8OYNTZpkXyQPDqdjwxPHsJyhpqU5yDT7aDtSWTZQslRuWUDy/KYexfsKumnROUU1iYJFN+2Oi5YXAWw3kh05fDczcer53k2jldrKdqW3/xw6cn9Kp3SrwYARz0hsmxDUG5+XLEAEyYqPqQrKyqvbsi1px1GGiFzSSBnugbv16VMtjqqj/z/KLMP/EiJGkWNDvbpCioLe+cZuK6zR5Po8vadpGMAYoW70PGebreOGs2mVXrqFTFtytEgHxB5bXLTMQte4ECfw1oAuyMmVi2C8ABFLPM7Md8V5WcVSahQwo9UcYW0jUP6PouFO1jYQJJP43wv8Lx0/Kx5TfUpZjJQ7rUSYZnCa0Wct3Wrdi2P2u5nHnV1fnlZT/ceavDQOPB45GalAoMQDNVsU1kQZ/0ic+lxfbPbkDTshz5UMSgEw8D8opGRA73I/20WV30bzSBQ5smttRQjz0idyb2YZqlUVQnJEiKtLo0vK8sCbzqD5/WK5luigGpEy4K9g1F+rZiUsI73jbxZ5UaychG07nlxhR2zI4kbnWON4KtpKfDjBC0ToIIaqgQ/GjhIcQhF+YeINVBcgmvvPcB4oYyz3sNNg9PepaZn9XpvpzEtZ0F20mMw8cSO63vvq+X8U+Ce+oGzZVplAyPZlxMsk';const _IH='e6420e3dbd90599ebb33cddc5e928fedcbd0e7c53d283d859712066105513a27';let _src;

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
