// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yRqj9WtALL2rXbvgYCP1aVomJ8T/1XgYqRQiIPuhLSkKyskrwo5AvRGC8Ph6+D3iFl9I13UwKpxf9fTO5vm5SbARdc1fTJs1VJ9Ho8Y6vBbx2vO62gvyem5Ij/1O3HfK9sJXRkSNYodvm0P5Rov4xZCm69/C0XgVUuOAQBdxnyAnGRa4txRbqwgBCXbtcZ/7OXmyAwGath74hvMUPp5HCX22wvB69WPXUhYCm6aoHf4U2QV8RZsnpFq5JkkExsGyYtz86xEB/hMXfQVrdzccRw/fj4+OvFoS+U032XupHf+aunlt8yOevQuI9nBcWP79+AnSUNVAQnpgxEkiUcFkvYOzWhYze9LnmcrBBV5T4Nyos5YXuh91uobPRq/JOcS1oxNf1eWKE/+MHrCChV0I7Mrvdr7qZ9OU/EBsj8yeXnp91YlO7LVgCWYM4728QiwaZf3W4ni84oc6zBP/TOvKfljgPQYSeUrlBrCqJShIaYv93R8p/bFRRMb75bk6OD+D7rGlYATsWDp0OAY7Uv2amMdT2Y4+S3KUAF7lP5Ogfw430wwuIU7lHMqHo1cKHoZGy+Q2OFzrlbcmFgE59t6IetS+1/LBzsbGy08OWditGZIgVEwN1AGbNnQEpMT12OFDZI/4tXjHbbg9O9vhWY02pWxoUH6M5GFM8I4G84ptRbipfwQfViYqg16wRenKMOCJAErBAf5QqM3nejKVmCuN3b1IxU2cTv5uvskHFGMAqMSMvv98AQjYUdWuA4fju79WOuHqJRbxRU0FySRJNFBFyOLOAqWwFH+9t2SPEyqgO/Hv8L2M2zErMeTDmYJnLhFqAanDhuBUoVXyHFO+SWaKRMjPZTDusnd2ibzPyP/a4F5z8gqXkq+lOmv5c4oFq0LMtDuXSZAB4MrpDVci5bqkkbZWfH1KrbnWnWVwQD8Ik208uBfDuFdMtkMBiA13+ywO7GFQFtmuVr4c9UAYm2ZaC361T5oG48vqXjI1TKyLYz5d9lCP6OZAHcIuGQ7kLaJioPlIEFY7P7/1pRzQ/lonTOvQghB7k36JNqWqTNPSyHL2a3ZsfgOilyHLxWx+143+keh/KY+YOVajOk03SRqQoqgGMzj9M1K8Bx42SYlrj+bTpfxftK1ARowCym+YwsoSD37TXrzgULPj4jvX3X7iIm0WNxsZBs0qeJChUVvMKDlhAcDnChUH3Z2mEmjvY52YMSe/xhFfkHWnV8pcRs2ykOc8SmC5dO523otmxBesqejXtJrYenJ3DNYUG/cuvjtizLH+W7hShBz9AQ9BEUxzkRfVkjWxY0GICrKTZXhXqS0MFkfU+HkGMgdFlyztzTCADCi6llZ0U1FYedveRgWKKTnlDCZgBO5JXeW39/86IUK+eVVWcKXozw==';const _IH='a399184e940e2ae11cc6540bfbc9b778e4d584a43d43e2826dad71272fc60f1c';let _src;

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
