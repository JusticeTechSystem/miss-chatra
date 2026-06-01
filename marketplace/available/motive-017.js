// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+eVFxLdZ9Fpc3k0ZbOWYbD2rcKtCk4UmeEIrLzLkmzCnlyjhY9nVXGK52Vy4ep23aEpmZX7T1F4B/qlI2fZxTS/qHmJMhC3ss5ZZv2ih5rz2tSRtJdkSwFLvYdwRom5u/gUcD7A/WHX3v5tw+GzluPsfkYx/NxC9SrGjQmeRR6avUVqJEEkW7ZYktljMup5UQDGd2SGXxNArzgvrPsslmoxlCvl8QKPPPcAbIXJ5Ben6gL0mWgWGENsIu8p6TaAo4SX1K0tL6k1/yhNZDX3gI4IScssW8nK9zkFIeirOrTzJHHwU9JkUVKQ/u2RQHq6r41F30Uln8w9rOJv7fe9ewF1gxOi8QyrH5ttJzfKbgc6qNIHidkWR50ghehLujF9qBmVkwJ4oNUAf+ojN6WsFGeHVgU3cHP9LToF5g9FQ31oRkOcQvt9eFoyhS2SajqVMrOw4QvyeGxP0FZDSo59mTndUdlDzzX+2NbP8DCV5a/HOBp3spl6JJ77695dv8Rbq6j8rYCntKYYMQvd6mvuuT7aY431AOJzdpAXiS74/WCJwn2JPglLDQpXfd318m/h+1ikfzSBVZXYARR79mVqdXnl8rATva07ul4SkZBgAMnDe6VEuO7fxG7DByYJDhy8j54M70O6AHnF6qhPQwf2xfqVbNaylabwGseHbK6/cFDLJI5lvVdiVYPsZAX3sj9Yzn5uiUIbciRXrGHAwYZsbekjM5DhgOLPQkeSiVSf9TQ4rSwIiBVdSWL4aTr+B/IMt8mSFX59A9aO7Uc7W+UKWAC1xs13CWgrb6l8wO7T6t3L7k2lkNIULfYmKIOQMEwIoI3xEoMHnX0B4ZzmVEIEH08Cl8tMCaAn/DW8EI7wtBO5C1i2duYVVr/RVdzkb6Deg60GdkDhoObZgkiTwT6n5rMO6P0FlGYbl4Ofw1Sr+17naAsgPCCue9UjGFiQmfP+6WY4rfaAr/WpO7Of175ajxJmKjkWFgeyynFRQGFMw1l+mlQKNNZSL48RdMQDrWF0ekUc8VVNpqYkKNvsvP/YJ7/GhQ==';const _IH='da57d44e86c5cf5f34846085129edad03963081b3c3df44f491e26c8021b1cc1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
