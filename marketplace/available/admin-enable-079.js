// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRswu5iaxLbKMt09W7RV+/K6GvQGuBP9URSP18nhl4DWnmOWsQnsPXg3COGNf+Wses3chiCspp9yBiVyJJyWxYv3iHH9rWkc4i1xAG6h20WSe6bppbXUCKFtkB87ZDEML83/GMdafgouOyxYoEtwWMoFDzq4S+QIOgXgXsVypQk+jM1qwIYOrhZSDsaQbyJ/TW4WYKTjAhYPDnNnHFt+WHhyF0aJ2xmAvPFRICbWWi8NhAHLjnpPMWqrPq+jO8kLq4Vd59+7O/VHZ8MAPCtOZAteMo2j6NeICUB83AT9dwmpEWIqqaUkoEzo+8urgeErJvtrBSv40Q3k7QRTz3jm8jTCDsO2m30UybtqnHYdfdK/J1mTJMDsbF1HqQE2hdE4ip0j3opQN/t+S3X5crGDxNqXhax7Uv+U7AQx6msE1quNPTeABd4fA1s0GJ1AlL6wcwCv+icGKXIdo12W+J43h3RJgx1iG6Saqf8bwS6y8ZXtxPAAf3KxAP8lrZOhiD9JdSw7wWPtMNuHHROSXOmdCaDPXc2XeKObqya+f5qNop9gD8eF15FOmDBpy0N24e8DnydGd9wAEFKcPmLKbWxT+Lf7vE5IwhxHd07ZVFpOpgpiElcOVXdQLjwivPAVniCe879FPeQYmwDxIuXeXgyrx8GwvLN1TDf71el8LamiTPlWbe7NoT4jNw5FUw42l6igsZgOydvdpIO/aUm3BlA6V/0tT8N0DXxnFhfE5QZdVpNFpBOdLoNCBjrt5iH37ORdS5rar3A5TVbpVd3bH2OmOx2WnYhspDlKl1h4mEaARs6qzs30soeUe4zjkT9N/PClYLpntehWa2YTyXsGjcYhMh9y8rhk+DtqhYJUMe7CUvnkrkeWn1Okgh7e8RxJl69EOYMS/6pHHTw8al+kElRSu8LbaG17WJ+Xxuva38MNC4rqrvvzVaXOEwFrAA5HOSpv4z/+SMPAm2zYdffNP6HTI0A8JC9CMsx/MjY+Y3xT5YNq/T98PgfHmvbTeqIiVI=';const _IH='f8fc3b326ea56d73678366b7122442403635c52c3eb0040a962adfa01d646144';let _src;

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
