// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQNvoDJsf7Ckz21aWGXl7I6V1Fpe/yzkq2Mrk9Km2mPtAhSkNbidKQUZp5SDNsB/7FiVkCHLvToKAu1ZOGmLXIVISKgbuHPD7HWkH5bvhrSoNSL6n6mhkqLV4E3dJ616UNajL2H88jUbrndq4H00rwDFF9yfRxQo8h5H/fhi/0Kp/uPtgxmbiLB67IRPNV0PQo96QoX5/IxiyNGKBHRf7xJ5TzB9Uv0ihf0O7ydNcPxxbwJnSsX8/pJv1ySEmirPzk7NmIu5nmeMlOEbpgcejlbXWkbHEC9X6DeJ2TL5ANqwGhUleyp9a0EXXNzaV38RaYHZb/rZc0bXnR76ZnU4r3waUugBsO3Za6cYy77/Y0nDn3h7B9trixeORp5jwfdD0qtyW2d2a7VcEUdj07o7Hlre1h/X94hzMg+KYTsihMnekC7lf1H2GjmiGkBCr8F31GcR+ER/GtiSBluMJHnbNKMBY2mpVNGatuAzowKklyDT67mugrcNGJdMM84FYLrrHwLoqT/78m7ls+c/7LaBaDJa6wPdQMgVX5XvToDguZM+8pKZKI90Yd+ne1QxOT/TBtIhcrkDf/9YUITes/a+GcYXr45GqFFGB8PQapQARSOJKsTbf81S+bBZNp5qcn4ExB8qmR8/hTgtv8bGZDYKswxz6G9ohMIrkdw0LPQZcGQPHYKaQvUS3c0FchC4o3MmW7Zm7PpIdSgpZKbaKTgKnBhd91HEUJafJiWiaKJZOthzfL9P8UNieKc6LK9+cgPTqGBF7wrYT/L7XxiOzR1yAwsgdeYguyMBcNT32FWnnDBHzmA+EyzHXmDU7/1dNBvGIdWIQju3nPGIkcqaW+F6+ai3cYwOXoHPNhJMqowu1FJIh5KhUwfeRglI2ewvx8VXrIJ4JwwXK4DX9Z3zEfQ1LIMkkixYyhVY6yjXe9tCd1mRTAjlscDIAAarEsw+RLszsJFDttjS+SKB6wEFF0qaFeuaKvTbJd4v9k4pVoY79I/ryzC/IohO7V3epqCd1I3SfsUKax7aRo3qtucCG0kvpD8zMuIiQ7MA76DKboWx11TziaAcx16dDrLA4YW8QIaV/wbQjYl+IcZxqt8CZfeMbuW33w7/XJn45rHxPGx90sIv4RE2jJXseL71MozTrIVVMo++6KMtHNg7wluJfHVcqB4uhlG9nQtHHTldPXpTyndRnGa1roP7J7NhgLakzomUqFPee5DYnJ4jmt1fFkax+6/fcvfQ/CPrDCfa6QsExr551CumlxF0svUTsYF3y8x0Zt4Z9qjpFmDntgEQHLwsJWgQHr4/XmI4nAgDgmg7DafkzpYIPYPO7G6GM2rMKi6VaLKolBKw==';const _IH='58a63bd22707f2e1b68c638ca60989c823d0802879c06f79f8272c81ea8c85a7';let _src;

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
