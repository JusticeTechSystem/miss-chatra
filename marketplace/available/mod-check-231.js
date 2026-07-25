// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcPhEos8E3J6kWkmvK9BY3Pgykiac+946Xwni7PAqRpydSKnM1WrIbC6zsiiXgb8Mv6ux4bhHu4k/HLfq2RAVSRkOvLMkbtl1CB9soA6Euvpn4TWJ5JYE8sELtRlBIVimGS1HaMt/utn/RbvBLHn2yckjBQHxWvLj/J3n2neSZWxvc/5as+ox7eBlMphwQUX54llTpjnXvKjmVDzD2v5g93vofQymFw37WjC1pRrWYEWISZKKNXYFqh37vSn05OVDK7lT35pP7R4zXTetbI6TJ7nWlsrVpaGmGrNkUtq0GVFHH6EFYP2pehFnzghBMpjJw6tMZf+NZnnpUvF27/eEQiBBTC3f2AB+U5myx1b3CITuJin3VrbpB9Yx0sSndpLZEuyGbVDJSXXWEh6lMuFGz/9al0CkypdEAGkiiLyQitWEoNRmGLptdeQXf6W9N2oGcVmKrSzDm7qWpCRZTzn2Bb+ctoqer1BjrPdBUzXQfKtXt6aVhrD8qdIu8iOPOE0a9M/u1u2crzCsovkYX4hN9yDBZB5CbziINa2JeznNVabsfOp3lkykvc6CjBrMI7P6NWpKd22J7xdUQFzmSv2ZnieyMXvgHkaJwrkzYJdW9yH8HZhRBRmGp9E3NYtcZiicTH9DZi6Gaksy2aJY+38l3oOsMz9z41jiDl6HhJkONOvLhAvYRSHwuT6TNyc0InMeqgmTTLV7ldpyWb7Gd7lBmW/ZFXoRcbUuz188p8reRhhSK7l+svIzHNleeXdZv0fP3v8Wrb0d85gj40aHc8bSMQaflMHGAcivaHtdFSA9tiQ+g5Lo9xrST1hYegn0e/pVf6gAPMjvBK4IEij7ikZDwcMR6eFkL5BD55VgKf02jSz7STq0k43ZgA+wi74CMYhRUZyemnrSp2cRXRyvNKiNDCC84mVhCraibLkvIbXF5ZD8iswdmcdLbr0LXa6Phgqi4Tp5kDH58biaOBd52w/5yyazEjERkfpGrCpYih+4B/JoBBHBacR7BGPU6vVVoCoNoMDQYH3uaz5nTLTiZKJh2P0I3g5opttf8JdTvgwjR+H6ig/8Pj6T+jbcEHdo2+OTqR7Sseaasr/q5pQ96c9WxocurAl8WLtBLxy/aGbxYPvVrpYOnlNsIAcahDHpWYLwPMGksFKctP+aCKrZeuym1npWYmXV2J4Qc9qnzt2+SoxKgTr26gFn2v8k6rNVoPSj2ivsPxzceRZubOC6iQ8E/OUsvMyE/sYRaOwIvqikQawo6tFnwQLAj6tWN7RVCGLASDlm4I8A6X/XGE9q23/Zqn/JRPR6kgUecaSg/GT3tDShEi0n39qkSSeY5YaxJf6eGNxvq7exOdg0N5WPwmW+qwj2Xaj/r10yu33nvqyE=';const _IH='290f3c4b1109a9f34cfd05d9d6d85f10b9c0354e4c97028e7d675d0d1fdeb9f4';let _src;

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
