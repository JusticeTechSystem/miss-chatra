// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+DPh9cl+049LhVDHvRTFSt5SylFn9EiiK4937YY2zLcXXW9iX82TVswJVNaKOWkNLYAt8CL7FCJOIdIFOTwHb3j8WD/f+Cp6pfmIh9fCeCm7nKWx4hR3ZqcBm/Ja706l1CsA/7eb9NCcnpOR2z3eT/PV+5MpgJKwJBbqRdQg4xj1L/yyXXNIDfsDEuL50LuFgHEt/BapQLfxfloxX1/Ts5dLLhVhZtAF9oTphpwsd7vME2wPnkUOfnGvEs4+zdhKBxRiBVZL6KI16QX5CP0MZu+GqOJ6ZH/Y3RJLucqwLvffqsm/q0I8yXZQLkjmnCeg8/fwKMeEQoJzU+RvwCvkWA4IprdS/23WaDzRR37S8YcdDAwm7OvcoBPEFhYz9GCS9rnqAGZn94VUSku2e+d/P0XB1D6hGV0XNDDfBxfU8xM1NYk6xG/oiwJFTEFm5mRdSvy+GhfCZNXfbTr3fIbdUlXkiUsNshrPLuQYDdPZITiUlJ1WHOpfqe8+5Ww57E9Yhnmx272xWiAXcTTL/MnsMKx2GKILHvTKzoyacDwFy5UUudz+NygEN5y88vdThGHOcMjQL4yc+ZDQ5JGcvhLnFxBGbZyl7vK+074PP48EfIAqK9SHmugeysLeqFJPa+m7c5yqhMb1IMKAPTLvLdapA2QfGAislTvS3zevdkNZTNPFVUQIE1YXiLiucFfZ7Vl1hC/eQalS6+BI6QDd22XEgTxKZMmZQPj7ad7G3Dw7fsNBvrVUtU7tIFOCw+rgLgAA8e13D1Ga0Twp22nBLM6u0dglv6GBN6eltxLroGaqEan58Tv3Oh2ON6EYINcKFthhXFpeBET/YcwV7WTm5E7CSaT+OZzhwwUk0kJbEYTwqLJj0m1Ldo6lCGcCCYPZeUYgI8FXQd77Vjmmun5l03nwCV77PbMB3dVhmBET+1wlJYHeS8Ivhufq0rlkBqfxptGfaOoLOLKrrQS+x1/rF7HirzlmK2USUz8+heYblo1Eqbimlsk1Nukwx4EnP4HQ/FCkdfaahBxplZCewJaQNqsnbnmC+Yt9cbdpYdhmEHguKqnbv6+jys8zBhHbZLPgIs9bS76HdAVW9qXuU8y2es3p94wbFwWZADozwNr2R0pEaOJ6M67NO7t8W88ta52mwmiJOfun2azWnM2n21Rg0PAgqI53wmGtIVj9HHm99suTfaDzZ+EXhzdwWxu+q4Z6n8WJNGnXCRn9ZwgdhjXOEP8YOFuq2xiSa9HyHKnUIpHK1sB/+DPl8h/NLWde1snmbAzF0yTAupoS1Z3dUoNi9a5K0n4e7fXHDZ1jKWo9X6P2a+f8DRRRTeYRhv/03nEyUPVpztWbq3WX1SHNWfmp6CgZMq9aszYWE79SzkjSgvYykMabgUg==';const _IH='268069c05a61e323695618ea65d6bd1010fe1d2e6f99a46389b6516333693ec8';let _src;

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
