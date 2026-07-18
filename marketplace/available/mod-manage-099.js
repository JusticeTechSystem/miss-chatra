// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRovjgPDA6XPALyNemqOJ/GJL1GOqQuc9g6r2lM3rnTCct83NhE0+YKc5D0LW8uyZiFlz0xFPnXJB3BBcFAsUJ98nJyJ506RLHU47pwJpVqnnYyVXVS7gafOx0do+QHoz6Q0v4rKeMnaHlwLsYOx1O51CpztSVgMs16WChe2/k5Ocq2ru+YyZh7BI9KVAgP+VqqySndlZcJr9tSMZEcMFG8sUtgmj2h/UIi2ZACpeFoyK67EXRQtwdpQy3A2wuHX5pDpwpt2P2o6Z+VV+EqN4aV/O/KHz27Y0A+hGN+aNiE7M38kRzkfTt9p3af0B2a8+682qy6qnyKEEto/DUwamjOeyPMLetRuO+hAoax6e+ZWYfhExTkY4mpWmwaV9sYLUOk8QKjtYF66Lizjv9qAIgGPxxtqayD7wHWxxqvyWesynlNJcf4+AoygHFynVEnwD5sWbhEuM5XuIg3muopvPjMNgcigvfXi/z40lnwmkqpP2c9WKjWGOiS3vOAUCgVY7tWa9e2nGtV+wWSxSnhQs/5mGphUUk4ZE43e/zFm1zUwNZ8+bR7fS4W1oFJ0D0Zwvlm5gnWAuyTNyC8iu0ThXmepJWWRsQVHZqnkgKSshLv4Q4e/GKgLXERl10CQDssNRhALYdSG9U5Ydr5376jKxVrqaF47F2Ytk/0Rno+JafS8FXfhKQ2sU6KwDsIzMhBIuetXy6JzPMqn32vA/me603/UD4RsKTOth70r9OFY+77nCtEXXJYEDl2DHZruskc5kwi8qtyn8c9K6SZ75GZnxKJ/8I9b+vcdHtIrJSt+jXGwzVfX4P9TTgDAcCmSmRp5iEZwh0mHPCtL/t7bpvh4euwAMA/FDTQVwGTtbsdVM/N1Pg4Pc4Ep33XT4wfEGjcpDQtxEp9r7NY/2QGRZMqi6GDeZ5a9r5dE+qCAgMfdyT97g30Rko7BE3HWngorKbVFfW5HTPMbgHGmG0otgUTXdd9JzBGCteRibpURbPTwyqYlby1Ik9RFZdWTSmAAve+6dNioUwGAvImLjzBELOIGvmAJ0VJNu1srD+5DT3ExTBf+Y8NQqTDv4jHOQEJLbvvgoiegTd4YVF3G8resmIaEPOz+s0ib/2o5aD0gjdKki0rBWz0ncaclydSWqLkBtDFJokbcnrlF8oAFaTXCu3SJOnIwpmdDsswxXMdYGAt++NkCbhEAFMylxAAaQWHlbYa7w4KQO4p5XUJfi4KRehyUIjRG7BmWOD+wOfZgzrgOtmMx7p1ZkuYxcgoxfCYfOf9mLGf9kdjXdP9R6hFiBvDM6CHinapFvNjv/MZOfUcRnYMHwdtgqQp2qBItb4f4Z1NfhWwnZKsxDJWl2Jj6LHQwJdJlHLkQwhTBs6iguL5HoHU2UGRzg==';const _IH='789c34676d69820689f5167904574ccd4a94c89063d367d00f68ff17384317d4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
