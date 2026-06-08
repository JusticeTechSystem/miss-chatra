// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i6QkyhiXzBzVXO48sIjWpJrlTcG3ZnXdaYrpYfkcDtBNhsM3oThQpHFaSgVRtYid0jLiWlMBrsMKTWN5H3xkmI72ZFNFoi/YC98nLxRh2PpOyd++d8Si2efz3ZtXDcZ6gOFabhQSyr8AiQsjBUEzf2M57oL8089+mfLgzfSOxg9ISr2ZfbLir16Ez+NyNx3FTIGFrA4WT+jdadCnbWUgn5eIukPkr1bsRLHXuyTg/XyFgUkkL+0/sHl0uA2hmPjc76KvKBlxVydyhhJEvGI8qYFKzfg7/Hx8LsPXTaFmVVfrf2ZHzTKmWyDNTh6EZYMBFeWPTasGO8Rzw/S0SnS3FitERGUZsAHuTHebN45YsIWLwupVAsEl6xNnfHnX0sQyK4fPqdidD2kJSmDyTzZTJN+hIRP8wXZerrbXBlRaLZpMoaTt7UH7MkTG2v73TVIbiK8MTFEbVVNVsfpxGbiU9DiYuJ26Zxt+PPXTpHDfD3Rt2Oxye1tP9UyLr+mdtQOgIHeY/j6XZSP5ITD9BRkdzR5n/X3onIzsZCUO4qbWhEqomWpLGYAZHboCKD0UgC8uom7EQzB80/mCnVQBneGl7+JO5jdFXhjcxQXq9S10o/xix7yyWsB8J6cZNYyXrVl3gcjo9dpyEwAMCC3G9XUSOUOjKZcijWOrD3iOo8S8khkWT5WXDnxmYg/xV4r2hXJbYOZP1tiVBSTv20CBH5R8A2Qm8c/Sdxv0dCNYisQ8q+ZIFt/6dqLRfmIakBwVObHykkTe7MnFpc2+duNufvaI1+AHN/hLpLLXkJkjnl0E1us1C7fafDbhDw4WE8ojKcReVhsqA8/Q0VcR1wGV94zyjareiyzUdaNAHsl7zGew1xs7X7w3KhPu2Qadu6HXILZl79jflDSKRpWiE1dLK6+vOgw265/GC7YTk7sz1Y+YDzSWEn9YlGyk5slXKEFGq3ZMGxVuVzm3l9XCULzjTZd/glZtqvvPmVEVPXb7TFVaoonqALBLYWg=';const _IH='88e65757bca6633e77e441319ca4a2d964d3499592ef53c2048032588554ab50';let _src;

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
