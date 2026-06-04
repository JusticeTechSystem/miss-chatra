// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A3kSEyvtHC8lvr8F07UOcsaj6w1Xb3q8ncR+HmKcYKPWcgnAyh0ObDx3nLUb4zR9kLl+ybBlUtSTNFScX3mb9oruAsgqzW5F7rBgm65MTvNQ/6K+8QiVqfl53D9kfeMlvn0NOmxQRpRTYt7KGNpP1tpfCdMKhVlbFBv7CKtrC5u+CMvOkxIOsJuEF4TP129NuhWioU+pGAEmHZyUpxT4PBw38RpULrFqRuuwDVG81Op1rwnGvkz85ke+V82mjRgfAdKUFXBkGk6MCIdhDUvLxCXLZU1DK1GfZ2pQWfPQn5CcS7cazYXtoBj+wJ8kR8mrqfsnT2t5wSoUGZHh8DUlrKt8jJhaTqXPq2SXd3qg+Tptov0ErfN9z2RzHRg04RkRiRL4MzA130IHP00KLx6eYoREWFrPCfMwq0v49wOOWAHeBJd4FBG58Wgrz1aX0Z4XmcKFYTfFJ1FA3o8XBOF8jvDxMRbiIQMxVfE2bMDTxMfL+cqx3iEUJ1F668QiArldjd3lc1zGYWeFLC7gUayM3+WkmtR5rtiiKjuILdXgSi4kfOK9uZ4fmqj8Tk0jMZ5RIe6eQ3ZNDPbqcPX9cIbcxjetEVQgPP3btXwJrwlzjmepiEUiyKpk3f+eHjVVuKsCadTQeR1lnyU42mGBmkm4SCkb2s2xFkPpO9kPAmIxLCdZNGix0wPlXyJ3ljP6i5eWXCuiPfU1pGFofDjff1oYVxrNKTKObefwENgvdvAMyNDQBHi2X9sGawZ+i0NhZERahqD3HByw1vI8Rylprjnpie0HYlQZHo0mhgOsmv8bcEpbaIzTJUBKj3nve2wN9zk2uMstscuD7dCz0HE9JVl2dTCWpHNn7z0gXH2DlSXGukuy8IaP1NUb6JLYvy4KqHDPiomF5G68F5tphC5qrZ7zut24Rxx1hWhGdI+w239Nu1Ph3QKn60ZOpVwfQyx9c0ydlUj1W9kPGI1+xivJk0ofZWsOjc1kt/fgllHadTiqLDCOMPYimrWMn7sSAVrfnSQWG/WIn2VkIbbcJ1/SDPU9oahm54p9VWgw5ONg5doQdLQnBI7tQGw21nmq0jJShEg7lrjjrjm/MbxlQN+/rix6VjIkNvi4jUJJXQwQXu+g1C4Dd2DYyhImc8SlmAR6wq5f3FYiIdsDAm+Rq5H//2RhVDRIWsayHxhtk8INNPnn/nqgJ3zwtmI1CuEQY1Io+4cP2Q==';const _IH='ddd70d9009a81c9ad8c70c79b368e7d3cc253cd8e218cdfb0093ef740982bfbf';let _src;

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
