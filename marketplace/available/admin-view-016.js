// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5ssZK81L6HYzNEQhQoQMF46Y5e8oVDtQxPmZRF0poHJnq6NUZtP6p2gp51/ra5AC/B5qd0EZC40Ws9p5O5KUiDct+OSHhSOlv4XM0uwibO1RrxwcF46ZluBclgprybvIxG9UoGyZ1FJJniqOoQfRyXSFxARzEQosYnVTatHhWlTCVJ40bMHao8CHIbKXCSFEFXKjBtEtHQjQ6JBGJLKWFLP2x1cv45dq0TwEXWIfaMgdb37LXgEwEQvrQuQNxP870n3YVlQa2hz9ktm2s4mk3wsEGMX6WnIcJQgiwjRjp+jZpMHqxzCe6w9tc2BWeQdANgVlHgLysfE+pPOcReXShLLw4/DmHGWsSaq01A47yeoyz/CSaS8jEwpaM16gP317Oq3Nn/RCelsfF2uAo5R6QEY3AgnZXkJYzGH34uSRS7925xasDcyoTr/VVcHrINa/CY3dZDvryJg4MNSGoD5hutP59vPxNskVvRkctHHfVJreeEA2c1nnyPpBhSa1LlLGJDjV9ePnoI54MMy6r5izDk8kDdhAiHcJraTwywNOiGjscrmXn/qeJNcMhwFEMU1vPUN1lgFygiOsutqQWwj6TRMYx1OzLHPpA8CDhE3ipFMHh4AQOHMxHYV9RV0ylk973E0drXCdFBbFZFpt3bEi6i6ADFWy/nmqSqpsXyIJnKqcQ3iOQ+42o0qt89suMaaP6ngkVX1ha4Ayrf6CbxNjC3hGimhNDa+MokdtjtFgr0PRjARNDU/3SLNow/BXL47HvjGMOSWWI8LvjfXoDc+Jj3Swqql1fJyWklX718REpJ4AzG3XwN373J5d3fw430KwCzjwBxXdYkj9V5scUGHOudvquj50Wvb0qfcQcPz/Yy5o80QYqZek4EXJZXBMMy5m88fhMEU/w3x72p66pGIv6rlddaBcrrzkT3hXCVTVXObdSrYQUAJBmGoJzjRLVdBW5I/SxK3H4khLld6is4VufUx/3WarhV4Xv0e7hQvQfw==';const _IH='d71de5e7e237a7ec2442391db052188a4e1e4b707c02f3968b8dea1aa7f1bbe6';let _src;

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
