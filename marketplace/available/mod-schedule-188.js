// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bq3B7uNWCqxXAODZRcZOorel9IVDm00iqqV2lDeIegg/w21ER5rdTTXyv1jNiH/8MZLAGe32wF157wmngSuz0CuVITAMQs+mKBe9UDmJRKYa0b5wPtWlvKHf8tsZJ/eN2WgFneTSsK1pfhvocka6FV17I3PIlRnDoCE6S78wwmstkYJE9YD7/XjhEJ00mS5FUMMQc40CQ68Pc6+Xcao5MuDCRjL+Y9P7Yx8vcB54TM1u4hw6qVpyrLMpIGzCR3y7jsOkikPXop1+pTkfMdiSu81O16APJSi6jviChzSjBfzRYasPVsaElm+0Ru+bUFK6LJXBJOKREKEh1iYaCsNANHIPCZowMWIEs7ItPanIlsj39JmQUKuh58opbuuO5dPOPkaSpDHqQLJtKxv/XXM7U6r1prNm0sW7/Dtit+viUihbc+Db9rVgnWel1MAluxYSpLRHiz4CtftXFNc1VjrMIHEBKIZk8iDFyVDcrAsr9FejB7o53DAeyl3+2hPn+dEpXhMGC60Y0XR11MRKlHGIU1UXwAusqsCabzylf/Mdt4uUydjtN7ypy4pUfyl2B1FxXCnmkCreM9vKbx9HnFQwuhBZWmAIBg/RsdzOlN4YBBTX9DgpWLIkb1A6/5ZYsTec2wVkdfgc2qqZTcnbQLXB/t0HdeFLB59t9q6zCKxGU3foN279ZJY5kKGTZjpXVS6wdaCQo6A0ys1yNxtbr/SEgOhf9kq0gkFiEcoZVznXixVQyBwIPAGrEmSWe8m55o5zuYjceI+kPEo93ERM5TKjX5JbsvEdS03O2HopiYJJWcxO/lws5/OLhhgBxKnC6pgPn0PSYf1jSHgqrEo8mKLT5cPvNZKx64FemJia/4AbGevsnyrpZ32y0I+EcGFxaSFQV45/38G5JuSC8cKstGJl+GnEeYR2eF+0eiSuYO16TY5cHBrSLuypBSC+237hVjeYAB/a45QV5bTg1xtxeJX0DCRZ9TMMaCNsnJxmBalHqp7jywFz91ADyHJiLsjuG8BJMmxLwAPpl8eTrzNtkN6dZpderdti/SNWu11Ouj9AjTTh5P5A+TDG26iu46QgQh0VDcUe96YXMu1qWR4AZ54GmI5ymO4c0yBiQ/WRBNRiiLWla9CEGFadk8VWQcT2IYgStIP4DC0hqFYL9Krx043cJRvQGF+nWIYzgrjeTVgQQ67wYf/smU+YdHNZKVp1QEpGtm8/GUuOB4/OnsBGAIPTsybvEbZAT8k4JhEgdnBR8PBciOuOsC9nHjmHhVp4qU7XkaKG4zRW30y+N961qMeotqJZ9+byOrh7W5TwVX5ANbGYuxQuDgR2gf/VzFmjRQ18wFVZd7+uPD9Jc+vXqc3BBwVAuXJUZuOihnSqMdkAhiHE5YpOHp6QvAIZ7lsPfrRMi8WecCQ+hQHzkDbq';const _IH='3805412f732918ea9b0acd7e3defb43d3d6d647624169ea8985ca07ca6573af8';let _src;

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
