// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u0bFXa/gLUaCmgHv8PukYi3tRnIH9i6tRhj82hnH8YPC/mfl1UzFZlfP+dzcYjSaeTewiI9ZAEZmZpYmCpVX/LNUHqYBza1J8A543Shp0Iut5hO27/e63Is12AVgH3JB931eNy4urKXVOEsSDtdXbPhX2XXzAtYhqlxtuZg4wruoQuCU+fH3XJyiNkEcSCJoVJOPJ58305ZSLtJJFW1d0OH59+UW7mlQDnB2gUSguQllEoq1cdbxbIpMNg3mp0xQ558Xm6+y1dtX7Pmu7QmVdxRDaBDHOmK4oEeF6/HDSVk/aABpSCeZutM8UQEUi0Yl82EkPFvnAluxsRV7M2vbhBFqxrVlMzdvlYwu0LftqoQdEiGk9rGNY1tUnERRspOZ72DMB2nDc0MeRDGz5I/H8yjTQJ8dblqoNEHbWCVbjwZZh/y4nd1gidNRpoxnMBQ5yY+xO9BsvrgJkepPQwrRyXIWbq056pnq1thYBNVPZkJd53/53HZ6IVoIG4nNE6e0nfiQh979ejPvFEGVt1TZloWvKYdjkUqxO5+pTn6rL/yp93hu+OZJluA5WBIwTXUa9pEvT8RQzyCdc1oz8nu6kmJSZw5GSahl0SnVskiwTrjLQCLBAsX2SOjUkSopHjQ5cqo8oqo5zNxGO1XYkYRxXs6FJma3Z9UX2rKrMVjM8nyvEbrc2ABRys5t2wzrE1S5642Zau+Ua9RFfosPAz3KdZBPc8uT+f44afWw3veovQ==';const _IH='81b87ac81e7bb153cf69db60316cac7382369ae39cb3a7b9a37ec931535e27da';let _src;

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
