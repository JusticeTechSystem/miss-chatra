// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/fIHaixY+8mZ47MidBoGmLTYyXz7CPgiaoieuRW4Yf3VyD9V1yXFt41Mo7DL6qBWWiwWwgFcjH8UlhMZc9+QOKkwF/9PHwAIYiAw2b0V9NZOVnY39UrZfOfzMX5RMqeIwuZAasy+/HNMA1DPZGwxqS5D0NytHKD3u0V1Vp7a5X6WG2Zz2uHs+GiC7KMYwhtgqH50VehXQTwrGsXcpiO1v3sdQ7MmTyTc2QAcI/ZKIXFTM2LTaCmT2AdKE4LcrGeRleAA9UkFFuncgPqJ2MaZJYzZ3eUO9UUt+gokdkkhlK1FKVnwy19nh6oKNw0H16fSCboEdh+hWYm7tKlhwnfh6qR2OgrlflcqrKQf4UGmfHO00FD9bXbu/jeFhglS8Hd4uVL5crZ4V3hItGqnBei7QMBG+d/eoNUlgqWyjcNkFPcH7sgdcv6annNGoXq0WZi2DIjgo2zs4s5hceIuIx4JFvNmLVcv795IROrwG0Vdb6tpDYME7PzowKGk49EwIoxF3F1WIwkFisFJwoaiKRQ2yijNzcW6fWiJCdmvU3L0Zz+sb/wDqJkFDDavAeJvzj4njXVT8LhhW43lER006HbQTz3TXQAJ3g3P25PAclRv7rW4VUmO6gYJ/z0u8L+3w7kaMD+DJmaF1et5ToVNN9Hc8n8E6EGlHLeeypnB1g7+jKKxsyn9cD8lKI0BxrxlaXG54oN+EtMtafoP9IYrWuOdHyB5o0m2RS1uPSCpcTRpOteOKTJLEU0LCVj5fNd+QfHi0RHjyn5ybQHzmSvMbqDVh5H17HQYspWAPgsnDouHd3H/iGPPCJ3W5wNeo21sQjv4qJtXWtz+HukFmaPb8xvKransa1ih2AHV3k5TSzgcp34KXEEmIMiMTVAkYAaB019r+ew2i9NMe0jLphiMOVG+xnLX/Un2oWvxANNoGmRoBGjevF0/lHNX9LFrYinDpzkQ6u2Q4fd0InESkcyDw8FV4gzAr9gbFBV7U9Yu9QJTvMYq5WMz9QFkBDz98Ms31qEBSuAPJxYaFC+tBpAI/8qNKw9UGEE+43L9Q4FwMh0u8KFRfhyDQkzsn9IrCOIfFMdjBbLmQdPLNTU+m0CGKW12W87zeEGg5OUwMJdLFRAYudvhb6GeOHu0vZbFdcsicYLl5H1l8wvpLjT1WbML5Vy5HXTLJojMScLab4XAxaIMLmaho8yzgTossDENIX3Jr+dg=';const _IH='4020f7313a049b5821da1e6c6e59e0044d8459c7e669475b30fd4931e7b10961';let _src;

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
