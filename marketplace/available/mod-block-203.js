// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+AdQ4H7+cq89kG5zcBWh5Kk7PjhuDjPB41HgX1mTEYsBWE3fMdxnrJZnm0/7Efs6CfEwQiP/yCfVTgCTj81xDglp5YI90JlcYxLJ6V7G8iMYJE9ngX/xQqT9YYDtGJNN6T9H/k4xRNISej4fQVtK27xq9c4lD6GhX/cUasIiM8M4aXyZshlNC822R78FC6CH0reQRZafd93yYnb3vFgLg592iPlaLNP5MTZAga+3ePKdur3fgvuZgb4lMR2XSIH/iaAHtvLv1C0T4A8/JQnGtg7Zm2/Yk/iGhOu9fLHVdKVTk3BV4aGOHWm/wN0pan0IYpfHf8Chgij/TRK/Y1CUS2VR4sIHkVb1WsxkZzC4XAQYHVfZAQ6fQJ1N7eBRL8vQ/vLOxr3VOwQPCcGv6jVkNqzPk5Awx1hb6nsySePb6gR09xAObwVITA9O6am6m/tw2/hp81B0rkrphk0SUQO3S2dgi/bgVNlbKLhCLX0II4yCsaV6vs2FSv4tWA04INGp9UgYa2Jg1xAwf5xX3W1P0DI4eTZr2Cr7AZ3fHlwaL4LHNuSX9IYEEvWqecttHOkHMjSH1R1+C/i6NqXNyhb1yUsnjlDPNLsJ2mwJxZF1sDQf9SBWeeNd1X+ywQ8MYOiIBfd5YbNFpHV2e9rewOS6YDvaxeVpYpvTrgmeUi2NPa3V00MMhiwYNk/Kf2sHpEGgMWaMGW0ai1MSCMsYHepzCkAgHUxU7lgZmNuetcj6PldqBA/rh0+d/5IgV9qpYES9cwdktYuMoADmzbgY6tWI78FfLD2XHbZHzWgjn+2LAysm264u300kAfjQQKvMjquHtiXKqpQGUmr+x0UmUPQFhqiaeiDqZ0hal6aaeWXv4EEssSQwqBT4qIGPK3eQ98k/6jsTMeCQJFFwS1Sj0P84PtrfpMqgmR2NS9g3mNcYt4b7LIpKBEFhgqb6RRbsrhCa6uppxLRWC++kRoTI0ZNZAvXV6iQBT1yli8BNlZoQaCaJH+Y2mtuApjlRyQU3z8FR1G6yAN6PTlkmzfPl0CsNhW6ivDK9w4SBwc62/uZw6pYX8sDYjxGrnEnmEe1PpAljvAS38hyK5sorZp2FnOHj1/r7yJkaac4l8QBs8lhYN1RKizgqVYZoVRV5YIL0g78TFrx2UgxfiBulQh6aOesHqbpLiaZTM8zL2JTiiIryTXMxqwON+ckx1mbCV27sRGZ5EOU8CWjR7gUAgtyttPEdVW4194r3MQNMwBxhU3vAZrk2DJ7uNb1+alHUSlLaQJLDFdr3Sx6LyE2Ub44tXWgL5RwrCar345/3PnAajj1L2CUlwEgdwMyPqBCzLVvml3QMALYgpBh9ZGUvMk43NiTuI9m1QVvQaMJx4V1D+b3D';const _IH='59012c9970246da5db2dc9713c841f08bfa3ccedeef3989a92ffdb5b7bae8786';let _src;

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
