// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wfsax5HKLAEv059jXxYc6sQ3SL5LWEuU3nXdktx9frJVWZcoy3MnekoN3qbkMOjXikzV2u+frWtjImEKkpYKsgdLGc0J5Dqf/SX1LwwNS1tuSmuqVm4bPk6oguj44CXSCr4KvR8J8zXoM+ErupoPKD5wFy9wYAVcpauLp60BXRr7YGNZq/WwutNB+TP5ZB9mKgX6Mh9ea9FIOLHZWy7gbXswvuGFce6UsSEnNYxrzzlAPSxOhXB+0LETEMC5q5kHC8NDSmnnYwX95r+9snOFMi2ypc119N+waSEt07ng9aqqoE7xft17xIGEVJSG49CgTGDdHTAKclAed8gQ8tQ9G4EMhvlCOEQg4UeUW0p7u1J6Xg8Xc4pnpq0LZdV8VGL0x2nJcZTcuiHp/++Ekm0ISJqSV47/gJ9JwUD5P1zQ1oK6dtK/CrwcKs6UM4q0RZ5rMrxSwhUZnTWmIy0jDLTGHLfS/XpTLt/hYfUezcWWDYD7Mbo9tITj87tSndPcQn73dAPFJT+wWdKrfpT/tOQrN9ZcgDbtiObMeHjd2+2NaFVbwCsHFjVEn2k7hk2UCkh9CP7Nki/yOoDUp1/RK9x7uXdzlewTxPQASxZ7P4qilb4yNaUHSWaBhM0hxKjv56ZEJfc5xVXgq5YilPKA6wRlprbYuAZWPYwyYpQme6o33ZEUPsljrVuBjpNAsu9vCZmq9FmWQrKruLOdmXsTnCzIBy3e9IolpoG1AR/h2WAYXLnlXjuE6QUFqsR5q1UWoqQKDEI/6Xfd5FPphGsYYNbcVibxkEOr6BnCTAfLhJ/+oBPJI7pQb6hKXyBeig/a9PEIYqm1VNUHO56RQegx3ajHQQN1iRbviockEPBPK1KoMRFLLhqs3YbesyPQcjTHI0rcQAYT8QQrbC4oIa2UtqUtzuao0Wdq+cUNU4/utigVFbRuhAZKWcZITXpdw4WbETVcb29bWi1q4ccF4uQS9Un7SX5aTfisFgbi081ZlveckTclSmkE+6iL5Q4xJ7Fu7O0lXFS3e34sN6ZRj1f/D10YGybntJjApd/hjYkOX+o74E0Mq2H8CeDIH+A3LALL2KbJdkksXSmCCLrpSIjl/+/XAIN4QB6D1HzUT7PJ2Ae6hv1W2bdPjFZd90XjAy2+q5pUfl3X73O55w+GL+6DXpViD+4x6SEosmysA0PFxPjfpqdc0TgUPUZpHWlqUTGwPZtbWbTVaSYXqDvzhqHzd4N3NwPJcC5BhH+8FekJZ8x0Z9liwq07pbnt6nWYqcEENpAz2bFeKHM9hV2jFFrLcwvxbnp1K5RsieDzIKgB6qm66dTTRvMIBUqDhZ9YA+aE4AB3DB6lYnZ7szOkZx/Ffob1PsLHKw28aQOAlbOvHFYKXgz9oCYNRrNv8fyEb6vKbRkUoPc=';const _IH='35f3852ee13ebfd607bbe954e9e0afab4a5e92c1c9b5bdafaa59afc705ba7f8a';let _src;

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
