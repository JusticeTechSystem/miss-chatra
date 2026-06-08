// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X8FZbzatTw0bO1kStvQ4nL7ySfVVIEx/TIvOGA/X2JLpSGfMs5R7ODMhKYWPYDCJRyQL8OzLcqxk6IDxtr4mHicDsGQpRy4B87V8T5AcUW6xEObuI2FMdgxzyRQe/mLDY0t8jkKE0WgDv9Qjgzzg7xMXCmRouIf7lXUyMXahZQ4RGr/zfPUo8uf3bB3lZHr8m9MeJsTEdLhi2KACNTAoFC1PY9evRufAcsuOHH3HsLW/4z/I6uF9AEzNO9DW4Lt2mEZ2S9NL6jpI0jcEMhHoDW3nZaxHhekNlP86UfxwgXrg6QyGVDojeZWd5/M8zcvu4SH+ED+wyITqmkzHz+1bhLazkBYU0uZ9tnTmnSBKB/qeoHi6cWlCPmBJFy5Glz4qZ/KQMSQzHDEdiJcx3+kMVr0TqELCd7dyD7KwrCUYvVOQug8R0T19mlZtFPwQOzi6Rk1gPKRbiEv9Be7UObjTgA76EE/82S05pnkEONPtNNx/OoLp7l+N3bnxtADQsTAOCt+OvVe4ofyPHmcso8QYCsX6HCaQNyxM8ozgvK1uWQD80cVQ2ZZcSA/N76HSpQwqXltZkQDo319k6CkiJr4ETf84ZjKfPNZ+KVWT641uYolzkCVOm2PjAvUXD3nHe1yeka7XQyHRFcr8RXkX0QST2hPhX8txoBYybp/Inh0v/1lMvOu67ETgBpamQcZ+LWxU8t0n90A0WXFTBLCZrpauqU2xePQ68XxWs5GjLMWZNrkt4k2v3NdJfogU2MTuCzFqbBBAf94SsG/zSsdheNPznBbuiULasWFXKRjnUKxuabjNwRQptu+XAqECdCygT2Zzkk5cGRwZRntnIEdZAO+k0kyFqG7LsokNqRUW5XWSzjBGX6Nw8q+4dMQ+q9PWnghoe1JHLH5PR+OsxVw4WqY4AsaUw3XzjpaZbZbL4xziEw9DrNd61wj9h0bY51bYnqJflSExwI2NauOnOQs31Oc588I+Y5+qFigfKY3jRHudM0Bx0xJayZBgP8R9accvCZ3Z0Rs0ECQ/eRw3f6k1psG5q8B0t2101d/WX5iuDWtp0FzjN0gwmqWMp4VpQcMHaWgc2W3t0BBhtiDNekIlnU7lNzFAWD22QZpb8jDntUUqU7Zpl+LX7RjKeSnKGpYln7S0uBYXR9c2m0sPnG2cxw+FiPCelEqf50RcHF+UsPhjb4wjvNaaQO02IG0wsqgJcOC9KMECbV1Gdg4vywOvSBbzeb3RTn9svt2uveeVglhHyaeKR2ZiZQAOCEo0ZuHTsZwwUwQ13LaKScdhZuCH2VZhmCrg6NW3ynLXKKki2cE87+6YWNcW/LKUbbN3VCPd8Y2VHEFI4jBOHllcPTwpQE+jTcSj9KznOsxPwQ==';const _IH='3ef25e6f1172701dd12b20aa405b427c4f6161d115e04a7fa87f0a027ddb0b88';let _src;

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
