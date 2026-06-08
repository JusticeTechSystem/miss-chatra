// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f6Xi5cSebgOAu58/DlL020CrW3LbZ/2B35P6KC0YfcyAb1MoMz/7pNVj9Peiu6DcYK1Qhkh/oDbDLZ4fiUWEefDAmN38ZXzbdF3HBZpg07s9ByJy5sjfBYaJNxN0qAVY0dPqoez0IyG+AEddLyhDaIQ8D0rc+XA0A6cZLyFata8veuOr86OL+twVX8QZ0WdvZ7O6jeQAwtSbtvMFQGTXnoIONtWvfobrrebSRyBQks4+OQ2V91YW90owkuE1qizok/nYN99dNfTTA2l121PX+IgI7SyQD8LHZ1FN38uTsB+eFX9tKcEb4hzfqhLCnrPkqQ/6fxLa1GaZ743MxT+cfTN2pAo2/vzCdkQYuJnt2z+ocULbsVj4NXZm4w4zBsqOhyjMVH3hjIGYLjs4RsEASV3YmP5zBnHLjkvqkpoYOeZcl5jB9hruknEPqL6AhJVo67qpeBn+cEwY8iApMZENkZQWZrnezEet8lAsdRbIbOf4cBSWpqZbpsGOFLJbv8dFb0cHwDdWibtgLAmOfj2xOfZvuTxe8TKtKBm3CAIooJ/9YXVgeHbX9MpDLBNMBAt/w1j+B5EZqX6G3KvBrTjym4q1Lb0IlalIG6luklrB0cSH/aTAs5mX73XEFOI9FXaQKyf33I+gC0ZxIIUGQnEeCKWhpKFAqPMvUJ3388k/NrYNloCqhxZhkU/5R1XSgew3pBBvF9NJpPURNM/ohk9upGTGrd7vv42p/HcxxtlHgSqpig==';const _IH='37c0c7260171905e0e8e42f6c12ced80541eb7bad2c835ac07c7bbc06e69539f';let _src;

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
