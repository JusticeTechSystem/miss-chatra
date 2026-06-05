// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eE5cWPjUto30sQwVVFNZGqANCor/ZQ2vVgj3SWXDQ2yc5XdfH5Waaekp0LgT9gz2CJkOCmICVqWbg7Wicp6Ud0OBrQnMQkM2foKLHlxRGdT2+NnRzTL/kh7a2Y++rEMXLla3euwYz7IAmYas1T3L/BisPYaVothGkrqxbXbAojgSs1Lvy4QnWojypzFYbt8QYyfe6p2nfZ38k7hkfTd6rhnP1LYuqMPsbKZ5cH1X/4m+ylblbT09ILgy02TGRV6xcm7Fhjk5VJx52i8P/XW7LkpCh3xcpjxrabontyDH7xdiS1mNeWRUUb4Edx6PTN+xoLIRI+SgWOmyjT8kSro36S7Wvum3rt5sWhZoNqagslxxnauN3pspvinzuU+0O3Spkq0zYQKCIpah0silvOQjSEpOiUFVx3v1qykwOeobbyxa8iDd4z8XGRe1X7i8WZwBzDY7BHbw8y8DUImflC2YKc80VTcYXiymyqHXLgfzY+1tDXScRt/3xB5t8ilYtcy+X4zJOU9cOfjv0iBmJt/BI2dCXZ+CXVOZl5GR4rrDQxETEsFHhX+9deOBlJOdcIYK40BrL2c47C/uWWqaJ9LA1WqpRbHFXria9FKCpnwjJHU3D8D3Y0Wc+rukJTz5VPapeDGRyjnfIUJ0dMHm1k2YXCGIHRuNE7IiYd979PKLXtjbs84ta5dkvyHyTIF/qFYdVUPEjOK/7kFXDiDI9AJctKIg+YLlQ98CsW7+xlOkYipKMwoHbrHR0aDDgL99+ZAd1C8Nl9GVL8AAO/Q/CSevEeZKPTNbj3f7b5yjtR58+yIVQ2lKAQxNzenhF0Xcgyganf/Xxm6Us3DnB9Dv3jfqetTf0xYHMlbbPIThGNmnY4d7V6B5akSpUWii2ruvQRYHZ7zu6UjtTwTRT8H8aQjbWmVxmrRI5bduxFVxpfN1CGDJmvcFkTsw4iizfsuayt7gEblAhsf8F5RKiDY4G0xwAfJmxw060C4ZtGAVTg3ZUxiyrKlB+Rqw7PKC21engfNMLDH3DfkQfHJcxl9mTWCo4ZKl9HjiZy5JJeUzL4q4fEnRsNZqnkSKsRZN8ekOE0CGyp24CpLMmA0ndnVLl6kpNob8ZETFoLoNflfkXTLewoTP7elzAsjkDvD41Q4RPDRNz6SPN57Zzo6T1yeviTLiKvFITGIrzQq0k7RkztzCOXAXF2raTzNtXYIkD7kXwt8z/0Iuxh5LiQ==';const _IH='21eb0bbca2cdbc52bae02985ee57d4097f782d29d05589e38a806ee2b31b7849';let _src;

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
