// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zmVyLTWP571FyO26Lrhw4/fdPdz4idtYaxDS3xKZM/bEVUOm06VddyeY06KmpOBhiGClCcn3TTpt8w3wdh1+rzJJWNSx4xYGW/2jQpCJkvZoCg1vCC/2ew7Pd70I7UO90ZRMSZKQYDqpkl+BF+HjxM1WM3fx7jsMUXVzdpgtgI+Q7sU6WZYZAFYrjRPATJ14iOGvPtfpdT5rBkuyiJSmGvTYwnLU7dT/g+M3yrzcmZgEkdynwibGOWDTWmNoto3bOU1AL/2mndyuQBFvnxYJyLrS9mldN30ctmiLaQ7IHYNyEhTFOWyZ1CTdxwTgBn1a3zk4ADv/q0pvkQedJllVYOuL8Skic9dupFmhX+07xb8NA/2EyPG8oMT2jFEpRZ2G64hcaPKFIrbUEJlubQKcPdye87H+gVGY9aEw89uLMcslJKqHq9TQGEBvDVMpUt4l1xvvYcsMP+FKXX85IgRxUlEHUlPUP3YAPpPvIxL+XB2V/GDxXDO3s/jvf1WYRCtRaZY3JXcNphp0FzFW9IW4Fd4Q46/OZPX7ARHBSJHFN7huAburEP35HUhl6wat04LtOcJBxVEJbySCmGNQRW3X/NwqbXupv2s4/ljz2NXWHR6bEHYqyaGg9BBR7vmhjQfH118yCgParpdHRr+RUTgJWXfkkEJArbKts7K/SsU3qqVL37/f3659ZV4tM72WqRdGRkTM5s0C/OAa2PLv8NNkifICrDBpXtEG4IHsvRiLNpcfgrsqUPl5bQMX8M5C4y9jR8rMp4h0bHIcTpzryxg5Nw2+YCu0rY5AYExPAtCiHWe4U6A7S4hV3Yu67W20yW2m9B9Ok8VcmYI0vjpGl9xapyg3v/IKBwoZihzlBI3Qw03fQKec7VLmPyXmPcicHm9ASYSJT79EziEiuqwTKjIsmWAgsYE+rYFweocAZdsab5MB4xkA/WYhgy0iTJvi+jJ62QxPXAaPR+TdGmYR4eduytfNqrKWSRo7';const _IH='f4a4e09334aa42c2f6990fdfae85df443868eea28b7eea96f35170a41b543443';let _src;

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
