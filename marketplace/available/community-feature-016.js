// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PWnlUASjgIPd8wDD1gGZoLOLBc3QecMPnwad4c4yucM8rVVKgf9FLoXJS/RfqBMTF9cAusKvdG7lrsx4HIt55G9XWwzes5L2vKSnA/EPCv9GZZqzje+WrwhCsi/OLVx5Qimga66DB6JIVv7waQzKmWB6QdtbMsvlZhfmleKtXtn6sFxDGqwznbVjg6vu2rJJmF2mXT6oVihiP4dgdYZXQT6yxRUc7NVVLXGmZEOZrNwGJUdMgm+rOOvmIXof978t+HBTwJ/ig5aLCPrpFQoc1d7ANWlhmEAcot9R+Qepw/+Uu7Ncvj26gpFhJqY4FtOZZNg5NjxLrWXDhryii72tflyNP32S1JYMs21X53/lWqvKBD/s9ENJeqQ4zry0extb9eKwcQASGCJeCOfVle7OqlDs76KQ8L86cgMCXmr6HZY04SaEm+ODFAPVYNGzFNFSLUMfyZoSul2OuGioQHtfzypUkBUfTA4qXKf8iqZ+gAmSKqeM5MwUzwa2VERe4weAEZog8Xn1VEYRZWPLq3r+kwJEiz1lX6ITQWEzeK2wpgaaRKRUxCM/erAR/0UnZdvP+VCWhhU3oa8gWWSpCtt9DUBZOIgPn/GSSlOyY8rCuE3t6cDzp3SrTVuV5cqGv5rn81K3Ooc3Jv7wKl74mQzBZ9jNoIAw4cTk5qQHWwtRGMCDX1elvwu3T8i3/s9sDpN+P/INn6Qcq52KsQhz9rEsT1ZnKA0=';const _IH='d6eae9d68b6cb2389fe246cc6d7021e0309793e008574f2632b818b5987cdc0d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
