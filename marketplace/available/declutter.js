// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+R3cflp1vbRMRRcZFAIMckFv4nuyE6lN+8Un2EQs1IZGcVoijNMtm5EYCh9hWhzvdSDzBHptMBBGcrDLg9vf0xaMqfSvWlAtJoudLJJbLvey3ihyeCwzcdHnLGF5BADrwtbC7iujjHSQzoQcAdmeiytBJrdClxppKwriuPQmbruto2xf1kqvbbzeD5rbOYqcHk9/ZRxEo0ir9RigCTIQGbxp1b1donxesNsZWxhupcnQSOovCViSCbzXI+IbiLOjgZZ+2xBkyK491g33SgzhE3I9+PQ7wkU7snyi9FqEe4WJPxqOhtheWsy4yygMqk51HIuvPHT1CSx3/qNQNXJMGxCIwAMlX01WEmWaND0+BUPrU9c98Q/eYqLtnXCxi9HxFyrTZXvRSt94sChwO/Wk0WzeD5FrxyYMbcajbkS/q31sVyLOblxHl01CxTmV16R6F2VvgHOdpgF2fqODtqj15cpVA1SPxttTeCWWt0GzEGV30kFB0GteTOYPYQxpKawByvUjYyvQOlIMZ3FFkufc2jf2PB6TqVfxAQPGbH8nX8BRup+MDSWacprHjjPAsVVUquCBFwCREz76cn1gJyKZ7t0Z3sKmQEHNLx+cZc1bbu817devZ+U/3ZFN/wiFCNGGXXWzcwR8GajuzbjXRzixNq1Z9jZCq1uL35QglmdYUZl0VELUp7djiO5HMWPIbd+h1Z44/8j2YQSzsMOtOf67aCMPz7eN7YGapL5eJO0vlaS45zudbanKKQ8QKBKLhJN8yJQRnqQW8GzoVTGXsDsVRjiPPIJxyv6Wtat8BtGyAVuyvkIMkI9RNjBh+kNlnWe4ixmM4EB9oq1s6C39Ktot0mxj0ijIhDNrJhyvM2YcmSkPY6k6m2xNTDP9bnegOzRGbfrvL2k+f2dpy23PlTNynl+yid46tFePSetreRjl5aJFddGhdONT7Bw8a0JqZDB7Laog5YJkDwUx/hilDdX9k+eoXTjAZvFEGtx8oChD9h3nVUeFqUZzFyb9jsno9oZ9p/T1YK8/UzJBcJAddAL4KQU5TSvie3c6WPBCtWxxOrw2wJ3QilwDoNT6Q+wf9ofJFy60Rn9I9Cufh89M3LdqAlVPf8Tf+jv6bVpwZsIq+/39mu+hkTNpETp2MKSt3X5xXqWWzh+NtsPqJLDNYzx38BzYXkrU9RdWFhjV753pBro9Ssja6nIjO8mZTxKqe5BXcqxM0rZ20eH';const _IH='b5f958967a166f4764a928b1d9f91960b54f63ae5d4240bb34520acf481c6a6d';let _src;

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
