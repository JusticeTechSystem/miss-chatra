// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRUrfl9VCGBi1QBa7Vv3SKaBVuuPPwU5xwLsJ4mXpHuv1ONQazi8971NFvWHrtL0kKgt+Qn4AYLy00EDLv7PKR6cw+ZlIrVvC69O3T0IbUC/z4cpzFHOI4coabnQrE2E7RT714DV7io+uPlfTzzT/80XEKjcyhODtJ7gwPyfQofhWf8X88x+AXTn+sOCdQ4e0mUrRYLo6Q9J1flcW1nRXHCYxfPfcbmM6tBM5X1SMzNX88e+epdEixGdjv5CvTzYVXrnHg8AMg15oRnnkstVfXzYmplzi3uSI/uKsyDaKpMLQsOz61s2IoEvXsFNCfbs1/igOGS50vDRZ2DUpzk7cITGmD2zAneA2BL6qxHd8lS58GjxeA7fAAWZNsSPdonlp1qTGdhzl+tQH5VnuTANWyIvoqAJgEMvQqCp7nU3IemV/bCzSpqYU47ZUEkCTNBa3I4LcJEIInkE6mH7cA7niK9rF9IFEueOmPRuSA/+CYGLKzHBQCvRPDPg1uuaKmOSGAKPKk2otmYy9t9II9YqRS/5qQyDrFBVhfv7Bt/s2vBjCEG3DY3sDuiaHlPw0hA7KCy2sPYVraQOw3yfENUeCVossXyXBnTcFECJzcAakRtJ21Xhsue5lhxBRYyJMmpmd8Z4iWU8GBQqyJmh9b8RlRtYbmeCwCJk6HhLM7RBIBlbK1smPjGD7AxGHvBa6ZYL9uLsrA1sVsEmGuZcWKA/4WY0qASH3im48x+hA9s2LwFqSSobHARNPFpPoC3O0W1c2b/JkBcSjgJkqW2W6UoyicoRx/VtkaC/IL8R2hxAOwXBDKS9WhCKP8BLt8WVqkx7SE9Dres6YoOXIKGd1OjQTWbC6Re6LS+mp1JRhHs4MNiC3mmIJI90uh6uTwLUhSBk5ihu95HY9/Liv3cqxVsK2l/bU8co2c6vWG22wl3CJZIZWsBPZH7PCGj9dc13rsJnvJnYBoUkdFd/Xo4rFo05rD6PN60i7lQhQwJNIiR+OxpYhtMVOmc3nuaivDhbDjYdjy/YzIZ3n8h6ACCD00gM3R6d++F4t6T+HHGLWsR0nosHpm7SZkNKZt5x2vkN1SKw6WwEXncFH0tfVabYffFN0Rw7WwSXIQ2DDO+fyYFBroO1qeWcpfqjS0xKEo+1kCv7UrAKz1uIdShGuAKHYHsunNBF8uG+jiLkhOC9gl931wtqhGz/232HN5kBPnwPiaig/tYBZVcqCIxFR9bfZugCSVUAuqSUmspD9MamObwDXTXj6WgHlP58uiGGtNhXmND/cOvJCmxEi4hpOjrSbANjQ6gsxl82NfKCt94HSDQVkz20+28E1YAQ6YW9T9zChaTKZkZVi3/iordfZgllcnaEk08PEUgqCOq00G5fplAf2O0EfNRsNIAyPKy9cmtx+vC83bN6oPr/3daRaw=';const _IH='7cf8b5262a91548daa31605f5931d692709baf9396e5c3bfc9019eb998e6b7f7';let _src;

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
