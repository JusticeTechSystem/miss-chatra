// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cPulkL/O8egwcBxwIOmnBwbw07O4VuRhkqXayqTArypfH2GxlYFHfaF2QuynzngS0cC2kfXbeUN86wIAAiAZU3SWXOomlHGYINW7j0co4rF/hE889Al/f+OgVy3BO95wyUlQyJ067FaHrj89z6e06BGh3edULBu442Hc8PkU0Pbqvujd4ospYjchguus+3Fw9Bc/+vDA6Wv/02MWDn2pARN4cfrzXnUOgiF+R2TkYTRa0tYU2YpOtBErLwDDWWNcjF/WS/aYiuWdEtEp+DbUcia7ikwnaFlhHx7Gp92hnTW29/EyUA/Iqvz193FdncUCdDhPh1Lu/CvXMgsXRZwgv7mHKLG/b4u118wTiktMc1t6ufnLf+zn7GxHrPfDVmgZYg4MX8KiKmX7J09DOU/iG5RJCD0pV9dN5SpnK/to2pObPKO21lSq75MeR9ei12pfG5I5TmuN2FSB5ct1m+Y8DmEGAGl7M9nGXjq2i7Pqe/VMtdd16pKG7MZ1Tp61fa8DB+jcrxi4D7OCv6G6ZXKFvlhnV01julJZF9M3rquGNCxWgsR6Kmo69OqWxBBboVcTXsV5vLX0nPfqtBj604B5p71yWZqz0BmNCLTVV6cW3au8TLkNhB1O38hCYyNz2EfpHO3HruGiL3c1d7Rm5glfBOul+g9EVxi1iINq2MojwcHUlrOWn+cPqBEXFLoXZHiAgoFSDfOzfTdGHzjDLRlirDQk4ER4z3QEBpSrEj3BmbRCNF92uODnZnpvWzit+qIwUiTOpmlF7zVaFgOM+b5L4OvCBN/V1FIRbrMtOQLqkohXgEqD3iLsPTEnXgz5JV/Q97Scki6izBe+laqKA4IA5ATzn7YYRTZWu8pSLkXQZ6sJErRaBykQz2+n69ohzayjOKFxGqi9laQFBBnAL6c6JJTTFU45iB6b4kHfEzLwgLt2c7TjoXTAbYQ8P6G9iU90rFsoyspW+obuE2l95rAstPOlUwpd84e8+d9fr/lr23tc6dfLoDFCp1aXfRrU4ORLVqHKJsy8wmE6J24quZsW8+O0eiddW01nJtFWArMh1B56VIKkHp8E746GjJTf66LCRd9aKBufx68kpxdZZvGubKCJoZh2hi0JiYdqKJMwgJzSkTU7RGRApIHiTYI1glmfVZRJksKyKNXJakOXt2alBLKylYSu3obcJHYQocDrxdLDuSBKH6xp5dmIaGGiFLrI2klv4ffFwbDbLDoLIdgopG7dNnR93NLm935p64JT+VnsDhxPx4t0f90vDQ2F6Zncb33bjLrElqDoGuqzGXihsys6CvY0HSox5Ri370rkLn7lm+WFb2Ga+cPii1RIcnFiwINJasWpJgEpYB6aENI/ytcbyCmMUdMOAA==';const _IH='798383c8314a1260d3ea096afb07f72bc1e5aa2c11b5e9e557da914e1bee0b4e';let _src;

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
