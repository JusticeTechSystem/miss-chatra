// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oL42b4loE6iUrhZPts0qP38mNod4ZkRwhMtk+goH8mtULtx1aMpJCOOUfzu0zj2r9kv60w8dRGZeLsGWnRTXX1o4nljFni4L461Gc3Q4YHeC2G8IbNqc5JifpGma1IPWUH7MiWGVs9s6s4KHlyXNMjkkTFzTsPozJX9WTXkeu2SVSeQ9gFRW9+AeZJGfpqUcOXo4W7lfUOgBJFgt9vb8PsG18Vgpb5psKPV0ZjgXz2O9O7QazNAb8A2VK/NRQbER3BDZMzOzbBPDMebwchmE7S+B3M48O45R6CG8Lgx5F0+OmT0MJh0Qv9o+cmIBWoeruAsl4E3iGdFvPhqF+x1WEMdozyjQEmmiOc3iSWWDjtxH2E1G2kPOkv65pX2WtkyOVVbUnEhRfBIPmVvkNR9rDkN3m0UstbNOO3Hbzsmk+9Ewhg/STzcnPlzls/dywLTfTAHGU9KfQH45NFIs1fC8rbWnGnwp7S22xsBWFO4UWAsaOkvRHDRVIvmLXj9FmyHBXolVLyHiKUKr3D1dSo/0fTBzMuGQNHgEoQ9hYj1zMPmic9n2vDXqnHnJKbiUL63QGl8Tx1uw3Bofq8J9Ec8cHa21JDHeX0uP2duKIPMT74GEB7uoO+oWv4fA/u2xtm17c+qRwaDEd5g6Qf3TQEqDNBpWUNLQOW53hi+PonKbvOpBNy/XHyhmf6h9M6AnY991c5Px3Lr6OMnEcTYts3gPnKyWSlt8TXulB8yXxIXrelOlaiYehi4j8e1NDzFkRzb8VwNerMCxClL/e8lZ22k3tpWOKq0kJeuFGHcZ/VToZHwA+WY/QZNVTY+kgCOXAkHSoQjwbP7GJW0qPKp6Mcnr8vgAoWy8BEVLW01Bhc/ENghfSv3N5Kb9R9SH8h3LI8VvZVGo5MaNfEnC9E1/Zy4yMR6tNufWFrTfOPPoD6upxNbs6J02As5W17LCQiNUr4Dw00gJDfZV8moSZGSSNDG4XSjgNXuBQnKefYEcosYMi1HoT8otIUIgqOQvOkqJlAPTBPuh98n/4xmGamGODeyxoEP1IJ40w/YjLhkkq2X5/aBkNMeezmefsXR09/iyMlPzCUc+Wsd8UiSnsqTojUJs1LMmzK97lCCn56DNSMk0aGECqkjAeRMBXa91OAkfPwYEbSp9UHHqf7Yu1ZUe6NGiEnkOl0rzm73hO8NWUamQWCXG/DP2Kj8rcbjTMhzpP21ovO5FrNntCHiV/ckkkUJfOE/3GtOAquPNB+ZAreCrY0cjUcQ4hZcn2O4uyc7g5dI4qnDSK4jsrEuTTq/FuVe9aJvmYNxc8vEE8itUJdCftKx/foqJ3ysydMn1qJNBheof8GGHOIMbUEmRDIsIFiIbZVKNcpsohweWHzmDZ2m7Vo50ieQ=';const _IH='4c178c29ce22e1ac14e169b874d664b61ba21d8951afb7ecccf8ad18d1160f26';let _src;

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
