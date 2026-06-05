// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AzY1MWCuL+kfSs2eBDNBwlLoUlX9EmD6r0u5YdHZp1tSiw0KqNoc2RSGBTrQ+T63Gcy1kjCddQuaPYj0MlXQJe82j4u1tUSZy8JCwNe8LANTBrKebwhsuTwXirQe76usmqoQZwjlT9UN1N9YlztG8UsqXor2shvX4RL68f9GbxlxZI4pkTGvbklmRw+/y6rZ5p6vt+ebvyyoOrnH4K7gdfc3V/R2MnRuNsL04ZtOTt+xgUYlc1/sM+CMTRBxu8U13gOEtlEUyM4oSgL6h1nz0oYM6c30W2VVENDQwrWeLjleqn4CJb+yYOkNij6kZ6Edy41y68Vrn7KAmjc0Q0LU4Bri4yKD00KlEdNGqzt9OUp3HiEJfEgbEjPmhUZnZXScm4m5EvSSbmd/pVLk2txydNHq77/rx8ySkHnTzT35aFQccbee4cXDS04MUUaWk88CvRvV0dCqyVCwsgm5M2SXlAXL7ytvDwH9sGsiYOAV8aeyTOBjsJgn1QDdN8M+fsF04+Pq9g3kmUqjBPiBDVqpYW9SniSdb1DF4v9WbR20i5v4sDrm130dmeOXbA9F1MnMVynPayoyk+i0koY9vKrLLR45wpH2FwWI/4kF/vKUke3rWzKgq+jQ6ojS9cP/Qt8iDKV+d4V10NtrQheODddPgtgMB0JcxdOlogLPj4zxD46aCstsPom2743L1xzCnX4zbJFnNtVupYZ7Ab8hq38QL25YnIDihFxMOkYeOG/WBRXFpUleMQ0z4/bs1SVAQW4rMSxOXNZQg7RudINWMVEnSJFeQbgs2rDwsIuiq3R6uVyCOWlWw7wYekTKHoIrxu8uqf68/0kCdU7O/x1Ib0O2R/5inG6dxm0AoNvTyJlITXnMrfR6nO+x4jf0CLPqhpsZFsdnfcxS9dtR3fsg5v8UEfpK7kpLItzMP2yx6hb9KfAgfVYZhWwjBJMFctlsmcpYuggg2wm4QOfQkVuKPfyA8cukeLVr1FbPrt61G8Ha9DgVo25AFJNBRGCVpIS4dWV6+wIiUg3Mjk/eqpm91zjUVo8T4xkAKGypGNAUDG3NA9Pi1ob/naaQ39Fu8AHLNY42zGwLzPcA15T4idjG2oHuXhT45ipyyS9olL3wovh8G4cUkcl1JgtRgeOb2cDNJ1bKklM0YEflQq5+kWP48SdbDJ7ma7yB08XBBPV+VoopYwWAdwRF6eFHB+3CoO8DJln9Ug==';const _IH='a0aab067c20a02717ba7cfc61c403cb51168db96ccb31c75a1b58d4a93b35b37';let _src;

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
