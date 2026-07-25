// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTr+nncka+AKaTW2y8KW5u+JtEn+fzikJoSAINDh4o8jf83c0BTz9TnK213RnHYVRqeb4LqAtjw85cHs5Cio/InTtn7W3m2tV2aQNGgtsNF4zJMO0Hc8YV/haQGMfYuK7xNxmFXNcVsTsD5I7EExYkqq89jxhVO8XqnCw/PsjWZURQKQj/zF78VjgFw+JxX8AvERsZ07A6Jmgg4SRuTMEz/8sN6QoNAwzw0WuJ/7CcOAxwE8LiqzQXdhu6FkAzABY1mhWJXZbzoaLuQVZDJZG6LLTrwnS2RU6V8Z3wv/PptYp6BhZ0HfvXKOJySXuZO9YGjlni96iVYLYZ8q5vuoBkPhMVnYslo4W1Kdgcdc1NmlP5yBjrJJPuTSejMulMwe+g8j9P/S0Atfuh3VkHM9wJyGJDrgPiFmba6Lx0RWIHYHIBrCZoKUz3HXPkL9+68+4nkRR/3Dt/XGNY8dJzshLxKLPtQiEfeFvJZ/pS2x5EeNRAyEdFZXrlL9X+ywxF8FqcWC9Kuag3vHcQ/s9OyTawP6VBSWKGhY8mLNizQL/Pene5GymFnToIirQKGQCmZAP9+fgRdPVVUm2NQKHPuOxM1F2ZIltERBezSeWOZwlKOSw7VchApQEM89P1UZoHC5CW2OfJin5uu1dYAb+ebbj189khLYeEqLdazdr+TCf7dWkTGsN6xCjwgHX4X6tdLxPNemV8oSz/kSar6/w7uVAzyHAp2pI5Ri139Uzl5zvlsrR8pJhvFHZcZAlqWTCbX/MNSpMIiHFxOL+y9LpACKwWLvTgJxHDZ1JL/+vPcgdhxNTX9nvs9OUmqTp/3bVB6F+Z/zYe/7CrBQFBnKEkJtxjt9o3pYb5wvPSUc+B+uU0p1GZAV6+LMkE4g2rRL1FbZMS7kl4ttXyRTL4Jq/E0+YOTZDb01SNIRq2S6OA2APTl8qqPRT9CoQLAXDXxfeM/1Xrrv2ER3yYlM1OMdj9nlntuqN+tYMRLJ5uvRD3706OAt/Dculu94Ub3HoCKQAuW3qeGrE4aDZyfLEB+v50RwL1RzYpzkf3rZKIQlTeoZB+WMvMOpUHC+u/tv+HYD7xueLTm3yKczDOm0/N/H48FFsD2n4lxXkrrQZH+2/nq7XhZYYauwGI70Kr9UdgL/PHcj8hWd6NSPyP6Mrl0i4dxA45NsWJJh+0ZM9XdHajWxKvUdIe7mRyKiqJPNSKDYW1q35vkmzjxt5aIw==';const _IH='3e1758b712524a4c42827334c90a2f353c41ba3b3520d04e7b67857708ce0002';let _src;

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
