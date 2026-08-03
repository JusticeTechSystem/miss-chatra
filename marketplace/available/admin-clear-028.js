// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR63VrBokWpnJm8wwhn3h9Omi49/kNLRFa5+GNUBnDsdWCcIqkI+tJgZPmImEvcuZmK/hgQ9DHn+wo1Jfqu3gPBrjiPFM78r7T+PyP4xFI1aJNVdGsAgJ06AMRMX9hKs8Fs6WxXKhyGggCXgdexBOwePMFX+y6sCWl+rJmenQq2OLMlDWwSUeFoyeYdWBU6UrDuHFTsS8LiBRfrFaSDKGTvYCqMb6wUG+Xl81iqV/VBMHHmA9rtz2CVow+xLUWCBkMv5yP5etNL5qZLAf8jHmZn8qzlC5UxaOgrcrqroL1qaZHcULJSdddLumBA3w5NT4MEiuAcLtMo4fNvGQRRSeCQFLKnK9sSumdYF1vZl/wcSsmb5WprwDbTjN2r2EqYdnUmPLlT6L+AKClQdBNYbgHbhzLwlt9zk5S8rnMwA5grKPZJwls7uqwoYRacOWNu8BH+F54FCj0/0eNFvfzDMdzuKsm9sopSRkm/ON5+WYZDxfvqCYgFIr5QRN5k5aDzkn+ny0kiXmdJVSt29LdFWXO6rAYOg9pftXGtBjvaulnSYSw6+K2/QjD6hmCLw97QwXOT8zBWqQU7FyP3jeetA6txboKN1/UfMilwGdGlv42NxMPNrMHNFElUZmeL2D8FEz5bUYG6JHyzXShmUmuBbr1kD/zwLaZ6OZJ2VH7R3yhL/DO4+xFVMlSDNh8jDjM4SMROwx7AFTx+djiMTWcoACUj7LINSj9MgsQoP4OwiJZco6kucjZAycc1g7bPxQwG3DP56ojg9VQwCc03zNgJhLJTOMtB9bfUo7CBMUoQlbmPHbM3R+7uDU5NjW9vd/hlExO8rzLlH9kngBbyfK5jo98ja6tcVJTUAyLN1aHhJMoeqiCRHMgz/fKHGwaTTS5oJbIB2FqfpyZI3Jn7MTmON4J+/m/DMv/kJ+TsKDd224hmnt43BlY0BtcUXtbKcUBRmkSxsmyq/Y9WbkVGe0ERVhud8VIxWoMibO5xwypwvK4HnWAcTxY=';const _IH='86136a820bd60805bb66c8b7f7e348d51a22608d5d9885898bd42e52662b336c';let _src;

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
