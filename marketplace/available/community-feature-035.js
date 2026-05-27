// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MvAWD/gI01hisfdNW7/W7Df663o1OBMPBZ5f5TXghYuVNsslbyWV49NrKemVIg6pLVwFzqAHmP5bb7LNP6LztyIycLCZmq4SWYOOX+EwzW8hX//KEYEiu+FnvUHP0CHqGwX+yn8edAXNC2DRmuSC8qw92HHcjLCSuIW/she7JcXKMrfeZWTfs4q+rhk+vXrJ4CGQN9vAD6QmRIfUh/hPGT/lieTKKPCRjlnV7gPv82vMv2yZ1WTAvPlfib3A1g3fh8uMCyyu06wkYgD30ZW4HBq0E0yfQU+ZVC9OKqpD/M5AtnMgT7A7u+9H0agAzBSjkxmgIYIdVUOJXm8F6Yhu9g0sKbwu9Tz7cKRuDLx61VJgkhnNqHUUTEzwGOX1Me1rVTeIxt1lgmQj/6haCGYAbL7MbTuMqiZqulo8RXU8uYdSnqWxizb6YgpFxAmrU+s1PyMt7ITxqzUZOhBwK7eO74srd8HdIgJF+xmHhuu7qYc9+a2P2VPXH1VXuOnqP0SsmfzOBlU54cnRrr3GVAJCtB/JPYxT0Qc1WAdXGMMOewH6v+6vvobIFbfiflyL6sLvFHkNl04nHdkt+7j4KmgGoDPWKKxTEoVg8YR4MXz2NB1tZMHy+lKmZ395I6UTHc4+sUIsehnKlnFYziyQ+d8nrx4Aah2LgxI2xx+u026J0nCWHbq/qjlMBMCeR3pbXbHuuRc/FHXXo44LF1ByNgFZwlpxQhCSWawPSpBANc8+GKowiJg/n7E=';const _IH='01b884b5d9d5950fb189468efc0c5be4b1797b35d7017f36dba5dafcc5fcd2e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
