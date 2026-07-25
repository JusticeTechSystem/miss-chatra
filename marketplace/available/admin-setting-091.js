// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQS08AJw69K9HoWRY1V/hy92ipz1mSP/nPd4ScosSS1YqeSfMmK8Ay6NPGlspJtLRZNgKxZqZAbobb2hKAraatN0OE0D//YUrYjYT2evmx1DlN8qRiEEosEtocrzVll3Ptmp3aanDDslbdcmOTyQ21X/uwChMHwzODWzsrC4YKIC6NGQFIIDQNL7CfyOdPfovxMz62gInI7PkVcljHTnGw6+OQj6AIWYKQTLv8B4N1SsIC8mfUlex7e6BQkQseIy/8NfbyhOWwo4FZbcjUsUvuZiIL7JLARX8FkLXsGTZgTNDuow7zf/Bdb68LgXxiNN+b4t+kxJayWOCjclcNdn2Aj657AMeb174zgmihoDZzgu8XIeJFt8n4DO4Z6P8bROMJogNyI5ACn4kC49xuNxkQyR88x9QbruLp42+MtMrxhd6XJzIjfwmFodtALmbyoZoMTqN/+/UATe0ovSBZUXcIWq25k3QKB6JcQ5xlD1N2KqreWlv9mc6Xd4N1XmxqpnXzmqaPMmpo883kM5r3KgvlB1cceZezBluPHZG7T4rhfaXWpK3x5IGP7zUJNqFwcef/1aE6vkZjS4TFEUEUV0KndIdjowGC+s2Ur27dPel5yJZOrLbIOJS0VD7DSLV8ulkVJOTgKMMgpL2PlCf03J+042dBr8CldeuJrvkLzOLZryLCUlDpxm5Wgc0igs2akmXqhrMcoxdbiXKrnKfzHAluw1i2Z1rlukmPhMZe680ELVV5Nad/MJGKG4c4DCWWZeOG+19jw0/+xE4sXd9KmcQsviVFgf5JXBehVOEOacpLlKbNII0F4WCqaXofGNZvjY7fooKd3NoVKg8ZznCKnB0pKdM+wDdcknEoFd/i1kbU1gVeHWNQShJvbPSV0DAIAbna7QzkQgLdPqstKxzHscvnK8J0JFpci+L8sIJg4xJ1S8swAP91noQ61/No1NiWB7FX5IfiyBbDtBylARivTsvIEK1oXxZloHZXZoBvRqQWeLIGBOo0J/u1nMHxVLhblYuUsF3Zf';const _IH='3d83d61aeaf86f25d5d31e3e34eb89be16af80a02a58a24513efd0e3dad1b3f3';let _src;

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
