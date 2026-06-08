// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sYYuzjcGzK0fLIGcLuqYyx5HdhR1Pm6utWNRCTG9JT+GfkbMcJ1pWxGmz87PRYzWZbGrzZ42L70QTG/eBmUXQ+LVDP1V2GQ+MaMDJ2I9xk16O5qcmAO894AHPAqCyLYKH+NUq+ACzaqlO5pbRvgnYelqF36bsAenCc/Upnett1v9QkWQk21LOGTUt7PXb9ICc52LelzUfy/4EzRnbqYIWevvucBNkFxsMAgh5dsiplN5cZK6iQKWydBG+K1UrCVeOsb4X0r4JgIcfpZ79IR8kjfOOYjS0/Cm7HK3XENWTJPK4+MKkLxL/x/JQ0mjbwGCAI4naZWyYgTl8MI5HJka6rvobg33aCUSBR83Sr7dZ+W56qrwvWjWT6MLFGXSSWNOkUtasZQ3tcRJrT4gGwtyLaxwiASs5Py7jmKebChe89V5YKs/ra+FhopR2u0M45OsHM7bgf2Mz5DO11elY9S0PHb7QgX7X4wIFlrmSD2zt3kjsy/gskt8en/oVxGX/pqcg/2krtjgMvSmISNUV1/EGs70EEaWf0EpFoP6iiO8M6992O9++IziC9jvW66lUBGuXQxxuxrPiqCzCqUmiHH/oH6g6HnRGBcJvqzI81cgvvH6p5yDU//uqYZgbAhD8diX1WUKUrGBrRJaNJWcO6pjQuGCr5C3v5IgPj6tysEsBSjTVbwcyUriqWNOC5ThJRLLaE/MnGFgB//w36jEuDi+npER8ts96axzwr8yGS4yn1Osi+OPeiWAbHD23lkFsggiHHEHqb4BWmgJMQ8AP5Df/L+WI92F5DAL2P58SWgfqLA1bAPguuHSIhEnFk7aZ1litNDD24OMiiADvflDSWgdAsgHC/AcOc7Zc2H00AXDgLgXcLxlNwQbDDDlswgOfbHa15xX69Rr6rc+lOF4yMGlZQAyWBl8gtFVMGhgI/tPgRnnUZgw/8dAwp/B+4ZbTLnDu4A7Vh/bMVHQd/AAJUSaQ6Me0n1pqH0T/kZDjWzjFcsrYfs=';const _IH='3f546d19e21fae5b66797f72d08f112fb0e3d9c30a746a93cc63f4adcce9ff46';let _src;

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
