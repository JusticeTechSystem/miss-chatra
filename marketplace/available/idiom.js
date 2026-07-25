// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0IJRYRoO9sow3N1PjxxxJyfFDlaySBtpcg4rX++XwbhV57on+iDMLGwN/uRFGqffAgtYv1PJz7hN9jVk/qdb1ovdNeE16AdWN8rYEt+MFJmIfdTJaBAwZNtL8wLE1gwf1eYVAI0k/NT2NHgrTsEekkUZZSD+m+bxrk/xFt3sjzyOnDVXCpghXC4jnQkHixNIblnlm8tVAUy6Gwj42QPLBs4lYoPG8ozu7QHZ+2qZMs3JHd6d6PdPe8uNvcZgJSBGAHaTISCyXm9CfKvEQ7Qyq4qSShJ2vY0VRSg103CCBVPwwJscbj1w0t0iryYJusj9DV0EbkYjP5Waj+dyAtKgUYYadVnCUhGo8lkqxUtPQyzTZVyDqN6lAz7UdkNMfeT8L2oPuMap0G7Em+jIHezSX3l3NX8RRhk8KhinSwPamg/HlpSir2+IvzZDaQfIHQGvq46wk3YIXfYxcgFixBfRA03U3HgcllvEpmJXE8t4592jPldBevcwWg7145YQ4DtuhNm8NtPZXemO9GD04uf+mx/S28pdug5Hx3M3zPvr3FuYwAbn9d9ckYfgaiFreXHsY4SwRgEbpNZsuWbqeZMtIdZCtVKeHf/gQYgS3dBMHo+ZwZXGIEG0q3lamExj0gyRjGDqrdMW14I/PQM8rOv6h5muJPnVoEWgHL44QZdFJsNUrIYgXVM727ZzVPheMcd7uUKylUyQW7iUvLdi6iHsWUlseoCek58Cf2tG7aHeS2HH1W+CUTKNGTtXT6C9lQBLvZVlGQdR2ekHnSJJX7I7fjrIprM+x+eM/LTDvAj4505pQN8lJ4Op7w1KWZCk/D1+8uaxUCW53mttJEp/S+GQ1fwe+2f6Z4tA0MsLx36GE9Fvd87GRZP2G6grPxibbVB0O0+3KOdxloBNuRaioaJ+xYXvcsyZxbLyIWrYl/1MnQ9JJhCS8G04ZJkOjtSYpc/d2ztyyorqi7ncg7n+OS1z1ZfjOWNsz4D/lsLUdV7M+L4nnOSxV7ld0PSNyNnur4ziU1TN4RQEL3x7fo7Nj38cVnkOSofYNbUXcSskIUoCjG8J3O4+gAxntmvvWrjk9TTNyPxAh75vOI88Go31FYVdGf3l7iE22TlVV3YLqBILQTSeMBC+RvR1VT9IYQIjI8DGnvC/XYRoiKkwNZ/Ld2MlzjCVrJ8s/dGkcb3ldSnN5J7EqJT2+ROE6Pj8ATg==';const _IH='86a8e43fb4c06284b4e6f9e92639577f428239ad384244b4e345cdb90fe5d817';let _src;

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
