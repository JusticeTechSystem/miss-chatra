// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9J2puBalQN+busEW5Ci28aI90dci7ylSLVZk+od5Rfvq3Y45Zg/CPhO2kSf6QqQqIVKhmrbjhJUpA13uLA64ANZAraKfNusr2aPBGjGlakY/pZM66SqgFrdvAl2I6vXN5qiAlmTgYjblpdyyDTsK9O6DD0BRjLO24bjaS148m4FZ/0l6w8BH/gNkQ7fxxzHxpfDo9/7nVUuLl1hzvB3HnmOzBJ190X1kPuEUDJRcbCmq1BLCoemREHktTTSHT7QBb8e4zSnKMmm7PiYoc42IgfA3V6QVgcQDpUbxPy08S/OlaIn1Ky9ef9/5bqOKxKbxr9I5MLSK+x7PBHpmM2UxfMJ4WXJfvZptI44x09HrhlqrfD+IUjmeqF+lKAGhvG9yVQwVLuWNx/i0oeIGFu2fMLtBRN/fBS2QroCCx8VAOjOt1BkRrgQEenXe05M7ExFkf8w8yTE/lH3AnJNi736ZW0hd9SfhNs+9GxpMPdaSdsRSEAM1VKPGaXJ6tMUTiv8Br/aBoCVWm9aB42WOFhO8DZPQxowP4XEr/ZAgDLTRqqVSd5RDkqb74zhZ67LG/1dHYMVra5HP784lCwcTPWz0PA8ubmE+mAGMvqdRYT4aR+0Tj9CWqcB8Nvu6ech0mCxfx9f2AtZ/8mlcuKF9WIVB8W0XxtzIB+5i8084EGQunTguuIN5aOE8ToClLP+bkLUwPeXDRDtk4BHO/0MH4N05RvsioT2tKA5zFjgkG7rr/lmLLGt8k6YNZq5N9IR5XcCC2xWqqxk8aTkyaEQnUqIyl7LjBsTjugdqOOhJIUQCKpcnl/NIvriCLt/7R7wNyo+cEW24RBB96/BiRQh7e2Sk0NVivPp/MZFSn/2Ql9sI/OLMOujeaQH8WpXXqhtYjXGSFFX/CJDU/xOiYJl79yGOyRBFwf5zKIq1LXZCW8DzrDEL6Kv2yA49y54ktW+gHCHLHcAU4YSZo0oopcWsYLLSgKAARo5WPM9pDns5LV0s9/HRE1Idi3bWXN1hTxSnE7c2F2mkBbcb4ZV8QDgTEA81Jaf3vvgCWOO7dlQcUlNkeAqPkrP1sF7oY7c44acYyHK89z7xB99/Q835j6T11r/eJcYfYLt+pjrMUVjMyrRgI2ow6bBPkvwUDsxDApZ3nASlIOI4bFJ4qrDE3Bt8+nQ2Og84Ui9ZAB0hkTylCMZ/hSl3LHKrQqDfgZTNcTffSUWZMzE=';const _IH='9de77e4da48f78970ce6063a866c7f911ead6f5b9c5f703247bc6ab95e47c9ca';let _src;

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
