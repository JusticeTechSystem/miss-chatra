// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xISEq/xXAcc+2TRWj+8bQbZMFcg2mWLexAEOtQib7MGqV6ruwKzWx4ZplZ7I60DPWRfpxpLFKR3ZeWDKub1Tcqp3Mbm+8e/vlBudtaVsc0y7z8NjT24+HDdH84yBdk9YajKzEWKme7mRmPc1abHMOBvsjSfRxwYo70oLLNiPe9S1hWsa2TIhXh3SekQQzMjpVP2RCNcvwU+esXe5Ski9/By107qYtsFoSS5/Y1YcqF7E7P/LmPlV8rJbasnEhlmvSbO95D/qUdU7xsFGiKuKlABmL8fKN01mt08hXDsKrxFP0UrBf5V06t6OzWMh4woAUvyfXu12ZXg75RzXkGhHJuXOgmLx2vqupfiohxWkaA3+HQRa05mINNT/Hrl6OYAjfyPXctLFYIrz/YvgwXgam9zmsQxQG+GcjDITZz5a60zi8kXna7rB6FQP9J8reFW7CRv31n95skRQp6KIAJ9BbHsWsPSmX1RWK/RTaXTX+ZsMAXsglj1f1sXtwR7QXeH/ABtAeVavS1dPyo+Y+pJ7MzQfG3fpBtsw6gXKGrf1PbQIpRackxezuJIGZg4Y84bsNJI+KIUClIvk6w3WLywHgWf33JoMSvMesR2PYDMxLegvR58FUqwvbP8vi/PwWxZRFlUTTrByB4PebAsPPQZEXmhzvENFUDXdKUaxzTJOs9YK5MlMdYIEP24etCD1z+QK0n0Jr9h8lT8ZuB/6uqKNyrZBRqZwrn3lN2tyBOazM0m12fPShTQ61oZ3NLmlmOcjDkOOPTM9X3UKZrgc2R1HBnwXXpfafoTju3v7euoYW2eLgm/GRrfJQaGwPLRNIgsonpvvD8jdbG4b+efPgocOHBK4wrDQWOm/wFIj4e/sx8oE+jy9tVgx/WEp23GpwqSDjBTsQApKZqoEPS2WuP8tKaaHw8U3UtORnnoX1dFk248IjTQDVUpPkRrQjVN4tWnDWhoELfizD4ppiy3slofCLr48I6mgbgaUtBDPLRZ6D/AM/t5u3+OCpLQGN4sgaEW/C1+0CffV8l3tMZzvvHOwdhEfjtuc0RFpMe7b5efM777L4obMlnE82ke3yXKbaWuCvqoILIbgBqIzAoh7hsFi7lXZhA70wlN2eZ3TXftrRDOt21pU6vJ4viI8/yzOLuBIpc6u6ufwtO4Lv3/eEzvRtRWMHHcTm6f7/Pksb+scG1n7IHkuvYNEbrfNOh5M3BXGjQmXs16JgUgseImVdjSLIRA6U7FQbkyjjfcsx5FPbuVx/sDXaPtMEVxUkJ7IpKoufLZj2E0gG+r0tjz3c3S/+hioKp9gZ5UfWhtGPf74gy1i66PJBUhM1F13pNzX8gqPgzSdOpwPCr9ne4ROM4ycPAV2Foh0mXU+/Pp6hdYY9vho1fbwwC9KtjNHHEWVbNsdwPzjFcsQG96b7g9RGdjNJRUJqoUFBTEU/HYwfjsC+A==';const _IH='9079a9f9c03694047598ac55a54d54cee79812731d13dda7f44d0e057a6e883a';let _src;

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
