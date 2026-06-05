// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X+xbRzW8K6A1TO2Ia3Q0oM/dxpZeTDiqLM4D8uSlZwAoMRfrf+rMlrG0TPtWN1/z5mUtXMgeXvqJ9RkCd5XjeC+6Ikq5vnX8QYO6RXlnDFer+YV5U/ZlJH4zCl2+FIKjvHLf2lz8GEoBZ9WMjNE0mnmAGJLUEcANB5Nz5Wh67yZmwzRI8DcPmZiVvoOCeWMKJQk6nJ8wZW6rQlLGZcosikaCduTfLS3wAJ8rIBk5ZUyYpZPid5wmPl+o4UeCSI/s4pkFwSwHJV4TdLRGFgvUzjRvpls79zeC5QFbxOD0i4qIDQPljKhnmesaU9J7EBbm+gDTZ/auoCpYx0KDAUThnea9u+kTtQ++JuDYb1mPw6fZMvm/cqa07gdYWW/hgpIITKEoFk8RQP3TUe+44NmWGF74sHJ9HuPtnCqV3pvZope8RMwg5H+WRgVmEfPwx5+cGQ1e0zEJzU4yF/HHdlneJR1QM/oYiFX9WzX0a5qgzfiogxa3CrdYLBrGPZIYeQ8s7AGcUQHNKMsePBVNsmdRtzKjRVsmu5QjicGpAArzKO1irLss8RxTPIJnhWF30RiUyfV7Vy9BuSUou5dFqMHYcY0EHCnPP1whg9T0OeBd9aHmoiEHtfCJDPK2DG26hKjas2c8ewwp5g9C1fPUCCe5Fpx7q6/JHY2zbL/cRJUNwlgTIN28FydTaeUZ/mLLKPIZCeWWNdsvzaeh0op9ddXDgZzFEJZs7Ua4vSJ64gpRi9VMsAU7JGkQatQ3ol0/89o5mn9aL5TZB/X6Cd970ouu7qu+/wHE8dB0iHCd6/P3enrltCyX5hpj1CbSkYmKMN4uAt4l3sfrr/Rf3hZJUWLrLNoG181T8t0s991ht5ZSdXqfVG8lX/H2Ux0+cukWG1+KLeDeKkoL2mY1skabJ+ovqkVAlCFvsGlv+ONMgKgtPxSxFXqsLGn8zxgAXl1u7IUizDM9ak+snGFWN0icfl3NEXi6ue9PCJp++ziisTNfwMZhryT4qdsUYUibrstNyepWbLeAySpWVZcYMGsWm67u/VN+Puwz7IR32spHiss8BARfJNHRk6qboUDKpp51dKluxoCSQgP7IJuLJ/mO6txJhfs1JeLeBYONh421uJ8Oe2RFw0qifsTv9ZO1C2FEHEje0p5Wy0qoIr+HFzvVRDJIWxf3Dn+Xb4TVrndv2l8aybv8FpzCTOjkJHRStPYsaf4Y8hTBwzGLW8CsbPYOt6VtZBHXqKPd0F1DCXv7xc1Z8r4IpqANaE2JIxUr96+i3y08PCUDSpGf8aORQ5iz0KdzUOpruWcRD3MbXzsXuKe6KNw2YrB/vjtQEtMg0/kEvTpANreeXqQ9X+Yr3iPmDkKbYg==';const _IH='3f83dc6382e949adcac15f1d5a13907726f28ac2704836aa4a64ca5565e72308';let _src;

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
