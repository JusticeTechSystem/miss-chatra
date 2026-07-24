// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6UKUfJWmST+W75aWmjocssnpsNRFzjeRpRC5VEAD5Ikq8/zxmNzVZVqyRhmq4iR+wsBcanM1xE8GR+63pCsV7P2FY8TE83HZ8+ueak4sGWUPmOfNRpPEORwr1qeF96uBHTTPp17KiGXwX06I6dVK/Bj0RNcBgRArWke+lc8ZxFIk6rAtIVf3LCbPDOkz733lac1F7LvIAjQvkmbxnjatQYzIaVJ2DL3pS23KBAMDmsFSZ25wZ4bhTaEdfBi6eDKOM/67TPByZx1aJKYR3x47Z36bKd9wLmtqHs474XRbb2vIFFQg8g8EnCrpKHx9oU8LZRy7ONMgqqgEreQrj6tffrFWbNgaN/+K8ZVL5pG2+ehSALebMV7alkSkGAiV4G2IeWtS4micwzGXYDYC4vnCFV2jIe0u/ZgBkVTEL0gLMumipizSrcU6W4LDAYhKK1UMAN9ajF6TkcKmnf8RuOEJLZPO82Mz7WVL5wNSf3wMRO4Px7VZnrzLJ0ThGkErl6I2qfo5qcSXJUZS60ajsTT+s7aMhIva03XE8VFfpC6YqXyh866EUwlwz0qxgi4bbsFDfTkYiuD+1snNop+kJwLUJ4x7PgtH5TF0z1JL8X3fAabVDhS/IzcVTpx1cHw6d8wdNzd91TnS6+2G9BgN9x7TXQl0/FbqF+jW7dQiex03WeENuOUh/hS5Ez3uDK+FCR1D1bOZCvnffiXdHhaHj9cpwoiHDA3hbZOrzp/v6fXu9QYMeU0Eqd+PdkNWWsiVkQhj0jXD7g4c9ARXdJnO9aqv/8Z58XtGXb36/TDi8YVTh7GR7zWUnrm72jk0AwdqXCh0DGingK7ZECzuGX0pc9Y3B1hQXzSlMAn9RKpFsFkxipWvYa8aB69Mlx1BunxTy3mYgPyrXkzt1h3z+muQA1BFVH4Ww7KLUOIfAY9/PbXOOpNi7e8RNPISyWDJnErKG43TknZ1V9gfHelVe6qRf+fehbFQ0QTPFmEKJvqmikEbhM7UWrwHd+C71ZB30WlQ43LyOlv6s3cUQLVnwwTqBxLohM78VJv8zepZ1MEdkICXDv03WwtivXR0J8S1RV8KjHwjd5aKNQcnpKmV6XFHH+2W6ovq48ddopTHRd522KBwb59BuLrUnNre0WJoOrEcsYInZ/yTCn0SuQyi00QjM/9SJgOlb9S4VTRS/1G0S5TmaGsGVptRFjr3hJAUu24MuDGcELCi0agmblUVxPiD3u/9NYXvySOWiwwF8WlKMQF5XMkBcvLzSYcLLFKxyyq+7OtjkKwL0rhvuWNORDxl0ghSXsMV87x912Y20sSeQmpKcdeQhXn3frF/DBQ+JNY4Vw6KmozIu0pF6DuTQ';const _IH='1fd42b711dbd1588b5bf84174f2b5d8fde37cf75a658db23c79b39b2092bf9cd';let _src;

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
