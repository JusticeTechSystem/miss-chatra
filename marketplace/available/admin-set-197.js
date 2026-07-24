// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/PyA/ZGMek7A4swjMAZ4coLe1Tr2Qg3RBbfMm58gh2J8eCl1CI5dmRMld6URg+29fuqOAhNZbt6ZUjT5ehFtnOSlCpHYlIOVE7Be0+xa9oV5JK2qkmoUmnh5R/YIhQuKFfGdsiuPoBIr+ugyXdTlnyg42olj44H+yYbdS92W6SnNYUZHq7ZchZMCVKgZY7W3RRvjsVLuVmpA/GzQQmOfZ+80F2WdCLHOxExxVIdaXk28oIt/MSkuFioSz+ePRSTbY8riFOM5VjzulbC+COyU/dfXrfri4H9iUIkq0056ev0o7enX4bpYDESadVbq5BTDGypvgJCMynH9uX/f+7vDJivf5B+kZechr8HrtJ4XA+UjRroKA46i7LcJDHbZGQBcNKEN6fUwn7H7FXa1h8dIEvnxFGpBLb5ymefauwWTbOOtGLAHLJHLZtEDGWvHS480Gd2sjYoC21CY8619Z8KexL3n2rAqgBM9RiKwo1QpNzuxcSnin1Hs/K51le0QMka8ukANlrTEKbBe+4xw6tAb/7atGeaXKtgEDtQujGpkSftKVvMoEM8cIS8/ukNCB9vLQhLL6sPFfhiWhHYN8riXnSsS65abvKIQWbYZNB1dAY2vDxFp0lbl/qfyu8YkWLH3i9wiNo+xZ7/X/GVZOjY8ggGptfcZcYmWT536j3gmQhAAphtWiR9UkH5EwHA0L+fHZYq4b8ITVOlrAX45a/feG1oXVWKwOpDI1vsIrUB4B6o9kpcufkF50IjcDlYLA5LxT63CM2UePZyxd+FUwW51XMQLfuWZd0PSOR69W9FrFTyRnqnF2yzQhc270Dy76h9WSJjeIoj5cd5kp/q+GUPmkuvgVWdtqO2kWhZjHV/CrRuyTU845TiwPICLWK2UG/G81J/Alot5k0V0lDeRnZ6LPVJUd70VwYZ0LunWyaunlYDUX27pDnC6QnmUGWW1TIJX8lsqWC68ql/fH9CSDqP3umdne6+igj4922LWP';const _IH='f9c4086b45625eecc457f0ffc39327f0e44174f04baec94a62b184af0bf2bfdc';let _src;

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
