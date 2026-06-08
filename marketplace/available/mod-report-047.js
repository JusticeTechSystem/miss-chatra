// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PheA3X8u/9yFbvDwjbgGgQ9k8xOr0Y/JCjkkMXX2TnPvnOAWUKy6D34nIkGNBDioSHI8dwko0NsSiu9fXvP+p1B8jHi7tw/1d7VjW2etjOqNMeEmqTy+lgZRYI2A65rtHofSUeGMXt6k9X0Z3hS25ZUxMDg4170BY32ZSFxu74EJ7YIDiSOer+PWg1nQCylSgWL0UJNHjcKJH3kefOpIGoAWiG5K7Gj06P/Jz07g/Ym5LlR8Q1eRmby4L8ejhVvX/zKSzhArjDxRmD6EBALgjhoK4RPpF4H45eRdFkx1A8k7urqVasxgKiOp5u8sQMlTB3IxDubwCbTJVvqdv8FAVF1NnJhZurR+d8+bzEiinqQ31LDfcZ+UcP8SgBn/1z6bf4SM0X/bMiLraJ4iJJOq898acgkbwCvQ4EkPwOsqOhU5waS1qZzVzUG+a1dkq3s9BSLMNZQlc+eF7J6q+pusX0ZHTNq6OzS+AlynYHXN8xyR1h8wuiBxHsCP/4GUiDFktuRYT2Xq266CrwgP9+ZZClREpn+jP3OGt7UOJ75n6k1NhC12G8SkeJpBFzlX1hK6xFNk6k+fEqVgP16EIIFLtouOl8x+8bFsFHMNQ5eNV0ClExN3jZYXwBk6WvzSoTJ5/nvSt+ps4r7XXpWRhBtFf34VVIFHpJCsYjeCSXAcao33p9KpgX/Q4Kxt5riSUYZGFZF7uIsKEfcuxa8eNjfSmhN074pkPFVjNiGlE1TwPAnt2K7WPKBb7/tKc3db9+eLW2PUJSpJHOHuTHWh8Ydxg0VJ3kJUwDVuBX/+d/OWvX3ZrVJkIgF3kb99b+K6uDOUhWJfI9LxNBlWcVyiVhUlmmJbvVvcPtWhSpn28fEorEbpwoMQE8vUbRwWPQaKwPMtWFzLvFVN52r3wT9VHDrCoY237WjP57hGwSRT/PFIx9QmI8h22C82EL365w0CzyJk18px4JCBv+DaCXvHyVXr5jJHS7RRRrwaFlm2cwAYeClsjfv6vF7d6Bz6z5mpT+vsRegcZrmFVEOnvzS7/s7sqioDUYkhrbepwdiQmLxzKAWwhGAXluxUvTKnU7nr6rkdVS2gSZMrKVNCmIjq5JJGKeBvD8hAGxrES/SWONZT3xk9JWjBEbUvxDuh6xPNDlkyAKc+7MVKkCNktE9pM0fkXx9UgwRqQ9cm4E+MxRuWrQps9ldtwHfN9g4gzTI92HTV99rzaqyjzBMFlrmwGq6ZAMW4VtiEMohUvOEtXNlaJ55PrSLjuD5eWeZyAGBujQMRrnDh/oxeXeTMYn74NLKAGoZBxtFngiXWO54/CndHfR7JgBvMdoP4tzeV6v6saaEpMNaJ9OLKWDaaTHBjXOe3yGWLdW1nTQgD9m1a5lk5lLRcY+Q=';const _IH='750fcd99a0dbf218f4aa488ff6d45e8c6c38e442d0817919b2e2feaea9e6ff84';let _src;

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
