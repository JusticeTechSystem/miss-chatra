// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oQmBDlHK1A3LVLpN5w9eG2kLnMoLf9Srvu2jeXr98zeXjORkpcrMRlwtWpi7nkrW1bxUODk1Vm53oxedQGG73hmk9vi92c/Iv3CjVuIHCuJ0y7E8L3NhiPBF5D7dW2xnsqtu5348ijzGErAp39iY4CBw3wiMOmwA1cecvJLndeA4yAL5W+V7SXUdAzkTge17BPHfIhhA2xTOH/wrTOiudaqG3XGxwZ2s2OM3MGrie7D2DLem2DcerzZ0Kk6co4grsMRP9fqzpenp7YynRd3DlDvaLYypvJmFhY4e/CW+kEmsRoWS24AfssmoAHuc5glo5S8dTvQ23CEWnxZwA1DRwL6KS44ZE4SumKP+5H0Cb7dKJl5Wj4piCZpbX1QuCeNtiQJFkQrbRfxiIQePYRP0pvQz+X4E3prtgA6ICyznX+XrHcOtugllg9xcfBxN37FlGtHWZ5bhjgPeiMgqhWL+fPJIwTCzwIGsd+A07+FeJZJTjmQfuC+TS5l2MResQ1MYk7XyWSVyKQzu51YRdjx/3zKfKRexPnPAs9OE93DS5lWeKsWRQb5xKAxj8AWmsXvvOGCV4uAFf0lQ//LsWqAku97+g+V2yHMxXK6LJ1HuXmAGjoBbyKK40O6sUcpj5PkChieAYNbh1a34ogvFwnIRf+t4OJWcPqMGqXgYbaRZOGmC7bIi0YRlH/2RGUpuI1oq1P+M5sbzpEL02uR/uEyVwdPo4RDXLJNI1PSUXav7kZkcJ57VAMXk+JjpGFzD3zFlbltgZMXSKER0bCwuTQ8qXKgjct4czaU1axIdOIax3weCq5C4VaTCtVrzcu8oDnH8KBOJ9cL7ou8lGf+eJgR4Z3uRgvl4eed5m13ylohXjnxy4Z5EcScOyJictrPfuNZaPooyb8MhR5PRqmJ/rWTV4aIROv9LRoWEmQAKm6o8p5m9JYsJBtN//10D5E+pz0/AEKhG/Iyi0tAJu0TcH2OoAay3AzgvutGD2Il0sBNt2XAEyHC2eZajy7j70gD2Spcjt4z2MOgN7424jnNeIaIztfA5mC5IwmmNTVo183mcg+mTq6aLxiLT7Cjp3zdMWZKJfZtRY/4DBWQMGzD3akYBaEw1CjBUIzUfYeg+6hD1aydMMLmBQI4aizKz/LhOFd/T2W9AGDPyW1SCXwueMTiTFpMDcSwwo86hWAjIGmvvUEUVvuvgqIw4mKkYvEz6OIZ71Lg8oZEvXTWlzX9j+tsdcLRoQYvk1BTvT17ZrieLJQqvXNGflGtn4FBu/9jfKLizqr7Xs3ZkNbfWBQcdABoKDwKm671Mtqvxw3Y2/Mj3UQW+0omqyZVSAIlnSQgVAe7A1XEED+65Cf29rdBOhwlemFqdBFc9AI37BQ==';const _IH='f692c36b539fcc6e49fc3501871eb096d180e309e7ef2031bf0762cc570f1907';let _src;

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
