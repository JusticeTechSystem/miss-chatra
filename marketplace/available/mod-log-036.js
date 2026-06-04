// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bqT5o2W5b2H/5M/sZ8mVS3GqNnRux76X8P5/sp1L0ke4FX7NsLnddq1jSqwHEzjYzkA1WakWVhZNJLEnNCz6jMkiuZvijGK77jhiGE+upav8rJP1T/bY//4ugoJyu12LFiVhUWbHWBJmGnP9J/W+GKpTRmnCDT6s7IFfB3/3HVniF5coDrhMkGyr7NqL3LWKXQDEysb0pc2KINLlTuTfDZIgNzN/Ndaj7r4soc9L7v+HEXS0V6yM1sEARzN6sXVEmpEFks5jY11TE9VEJ1IdYGnOwU1vejeB1yQccuxMAbEIe6NA63wFKbkns0Q2d03mngoSfeZJGbFmLGF93ZYkiMfnzFw6iKmyTgkS6AAz8E3fSIQbTIpShOX0qCBiHYFrd6J94tD0DMtgr+mIqmGlQOhKZcyInt1Y3Ex5yAcaBaWP/24SFORsyXiSNYh14Je9bNAJ8Y7d4outtpKChtSMkhwZ+yMVwnkodlhYf+g+pUq32/8IaiSWrtsrHg03ICm9Ug8B6vSVdZ6mKgsQ7XmtLd9a3CXfJ3Sz5ZouiXKhdb5Rv9ZQAKsgHIwuAHmCAZk6Wiu6khECUxPkCPbLsa9bnkncwhOj54esm0HpCVXjM/94gNJI63fzNZIKUdIkn8aFhFev7gCxozeKLo9OQFwWOeFjBisqX77EX1GMWVpeK7RoU3/u++dWB7XgbC7litvoruGIEbgqWoAX5znqkv8+31xI4a6yfSA6XF2MdDAj/C6AFedOz6GosE1Wb9ROGuLfbmE7izdXEKv9V9EH1scgxEPZ8p5cy5YS3yGGyZ6fAhcqg5cjt6YLQpQjdVAnIsQtAyBCKHPYgVzWOAGXc6+gAhFTSekyqwaBtA1QFm2Iarq06gQmjVYQlwSbeqtyBfhMffLKDEOZQ0rA4kAz9oN4NOisJZfLkhTAh5vx+13Qj9D+c7QfeHB7NswTppZKKplE4yvs3fpu2lM0yA03SsHNrHaG/PhbXuMvJocW6c69jrRPLYJjWtZn8E4Rreg5supxvmquQhxHrJXv3YM6RyZsGUpAw2DoNKyHUH34ChdEeQfiiqHN1ylODgCowARV5tlymo5hbhMbX19XfL/2hIfDQK9MxlRLlaG03kbzr9Vh2iEZ/tHNO6w7d39GFxwdV5lhQqy3NShFyZFxEXSwlQg3xF+/s4lDjUQpABpzWdTuWtqmbYdS7YSW3qsWPphLzU2QwEEBKrglf/vlK2471Ip50jFiSsLrGtYSbnS8rfsrYDoBwyKdz0cj22Owa6LrwnTLTBUZUxhVc0lQMPyPa4dYQoXsRvM6wTapToKuvQhUvAZjCxdW2LxlkcOYSCqcHo/8H1vwlpY=';const _IH='96ab30ccb3566626868e2376a0d1669f7df0ec71d36ad4eefcd2db14a3900b32';let _src;

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
