// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yUuYl5vVBPEJ/USmp4dyXdnKp9z9Du5slimMMhxnNLuDnH4Zdf/pjosF2iwgS3OzA4tPfx6gxWedzs0pVvVMKZ9sBWBoLhwMXDc5LTU6yzT+/ZFKqXHQ5Ym2+RGZgfTpGg/2aLjXUkaDWLqem/EGayDexOUwFOlQu/5QMKMPdyEujTENJTYhbCNVhOyOk3hqSJvw66cbvL4Dw5xYMRVM2EBBCEtpFczSscK5iVSCrYl2iNO7jyUkXVG1pTSUmbylXAr/zSpnlm1zTalKvCkBZgFBxzjyY72Q5BzFmmGTcARQmUuHZoBzzCMoSK2XAvwZaJgT38WPG97sXUpDN0kNnK9wja0p5vDiIrQNyopiRhuj6XBGgCoAHtJs+GkHJ1+iU2u0A1BfR+k6pAqAW03DNr4t4vbFHytYdNV1UdaOAyaDdl+zZqZ+JzFWyb3bQNxjHVWrH1Y5yByVrlf8b97/+HAHKqjdwVTA5yiN1/0DN72zME2rDXb+MC93mjgBXtIULKZfLXuEqNYMpjAOQPqRFM7QmD9IjfTHtdN71BKY3Hmg0dVZcHUM7fdK27F/U/R/clCH+8a1WIWzheOR8Sbw8G6Y6lp818oyLplL335JT2Xs3tD16UEwQls2J1lXZSlwUGaOOLXSk8+F2BIz9981N3k/hcbtgwUJfkRl+M828Q7LuJtTn3AV37/Z7mX6vSepb03WkIGNNe4JaFiPQlAHvlUgyo02MbSDereZ';const _IH='6ef071ab34d5a6b34eb8b226953ec1820cda2d02541c9a452ac1b250c3419fc6';let _src;

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
