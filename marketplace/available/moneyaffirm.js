// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H9nzSVcs7uQtJEcuzlNF9YA9W6fJKQsYccdbTatmJz9VpAMW8zZ7axQ0pm+SeyKHT/BBf8gI0xz99apKF4mhOl8ISCT1PDIniQkvYc/zwB+JZNUaKQFajOk1li1pUAhSymd9mjMsqUhMWqMfaWAkumpkR3wHQ+lrSbxCOasUopQ6QodPXxn9YCBzrpXHGn1NWSb7E8jdiMlEWm7LhgF1M7tCuIPRGrDexw9bYtNmqd0TyeRl3eAP+pOE8TZ44vzIHriox8GSumzhL/zM9oV5Yq+9n+PoX36u6LPFb5Jm+xVznTRVNL4fYb8c+kBMIBJEAXOit9jrbx3/ofYui/7pcootHbpxWbMar1aMEp3SZAksoZnGhuiGzXgCv6oTfFvMq5zsHnJMt5fDhDm0jnEBkSdClaIMqnSOzAu4TMlFQp1+cBEOFBbZ+i6GxjgWjBSQ3ti9Pz9Ngb7kM8ieAn+8pFGxQBMD4OE0uad0JPhIijVn6VQcC6XZGqgjGgOTBl/lhsf+ratf6YfSSy9bTO8fXMIxo6DqkW9Ax+CDNm6CZ0V/Z3R656JHGnq6yhe93jvooIvaCMQ3yLKcTe3E9R5DjgAjSeGDZ9VtIrF+B3S/EaMx/u981uDC0rgvkUDL5llfS76EpaTsTKrnzifCrtyq+Db3KFlbCwCbd/cWuNH2viZh8PJnB0g2Es55rHzc/TVCoVknbxzGflnb8OqsJCoZqWkNgFU0gUtKEKLmZx1/W5rfqpKQKULKtmOK7eTH4ynBSWyiQOyLQ99EzJZ8OKgJ04T+wS4e5iiY+zE8KI5Ko9lVdsF0GIKVE/VeQor0Ly82KKoJbE9o6tvtCksuPmRrB3AnaaYTZW1S/AtfjS2VGHY/w9zHFdfcqdn1lZJ9ZhC5WxMAf0mNppKjEIWSoRPmcmfJhUdi/n5MBvKCZzt819O5/jqDY/lhtRuZn4l3vRBr1tdR5kG1qsegh6QPFyJm4GEcsoSUwn23sCa4g8Im0gQPaGfuCPgGlagXH78tfEpv/Ry/4m316inxlt070H6lfvS3iuaZYcbC2OoUG4oCa0BHlGWanX0Exn5HXgZy3KCAcIb6XZ8BT1lUvAN6gxQu8MC3NRI3gXAO3k42KAmEXx+ruRjr4CKnAllIP5noBoo/NsJlvHcP8+joc1KWE0raSfrJG401NwddZT3dChysQ1D3tcRYPC1gNwpNAxknF3O2hzRA2XYnNHv61YkQNg==';const _IH='7414b2f8dc0f06312faf22f9ea0eebf0fe1ae83eff74ebebeb529f3fcaaf52d9';let _src;

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
