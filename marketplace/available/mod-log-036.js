// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NC3xZTC0ZKNrFDWi0ASCGB4P0IjFhnYwuEp3GZWWFjXMCb3Qnq5w8J74tv0Kd8EH9mShJ7ZrTGOhvz+rYL83t4laTlPEGxX+TjO7N2+bURCpH58H4DWY6hG/oSOaPaEyyA8HgfDheeBkKu8s1MclZAfF+TEtzm80HXVkqhy5r3YgmaSj8n7GdDQj/bqcVgqteyRFRltktVoQv3f6Abtgxg+yyH5HcnEgQ8CxeRpp+R3ylabq+EeecPxWEsyubljtlZY3A9u8KQN6H9tfVyJkdy9BoW3gOpekDMbJwIRhUief6QZBxl0ygMpgrfBCcG21kU4fO87vQSfvupiC505hfagHqTO1/yW1VBfX6GdQgRNUcwE/b7OQwE/WJUwbLaIeSlhFRBmoYbNf8zLlxATxMaERiH9R+Xk46cwmXfXyd2+R205C41K4pYdbOQomRySs2W/PyYZHof8FB2aET92dlcMBjIqnXQgLpO3nILGrmzg58RfHyIZQWMQNkjrAFYe3bKjg1vEAmcytkmYEroP3QGaAcnGr8NTrbW2wFDM7zWfmAMqOe3iTYfx3UfMWYbFmvgYHB/of6lI/46Zs7S5CKuJxuJ7QmiP/HFgBZBsfzOQiBiRSASSAqDmRKxlt9OPfYDkRYTJN2xrlfd+/FuTCLROdZTvMZColbSSIiJVGpbWMSIM7gGOLXPN0cLWjuOukQnE14+iiloe6BqQ006Sn7xTCETUH8deOWS30nJE2QKOEXX2ss/VQaH+6o56q1n9VkFy6I36P2kPRt9I++ILZZFD7l5LX3q8zTBtlO3GhkjM/Q8xE6s3qeOfN0Gy6JUR3OiUJjbN7x6kT8KjuENbo8lZzQmM03aOIppbph+Si6BwNGA+y/djS1wBHMawXRlk/cThm37wy1aCvAl3lArohcCXSOQ17pOmBeYBB251uRnGVKCVarFuq0pi9fV6RTON/SqX1HDDH50S9bpRoAs6GuwYmdLYtAqYdKc//o51CqM8vohl5SDZvZGyt63b3zIsnzXHWN8uX93IVlikcK+MPolb9TEuNQLmhtZ35rhrKp1JxXVe8rZR11yXJo2N38IBSYTfgqcnryfdz1cYhKvApzArSTjsacWvzngyl07jtWuU3xhLDLLI1u2KwJaNmFh2XCQcP6wR9GIh34jgPZSXGZdMF+h/kNsJg/lm2NbQcjcXmcCX4syCXr0iiFvpMdzK4pnkRfMQVjuh7GDP/6gKi7xkdIhejuy/iOyKCIb/QGcr1uZyUJROG4wAxoiomlJmfj28e1eTwdbm9wMgopI/gdqYjhhPyqulxGwA2QgbTokwjSLPokC2e61S9gQ/oeIC3kDDInDQ=';const _IH='e8405ae2b2b16381199cbb6730fe51e08d71fe4b62a0e16f45866c6cd0fd5702';let _src;

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
