// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0K3OT73wtR8rIDQFdkdCsm+QlU2aPHCerSwSBF3E541Hyc4unv3s069vf6Nu5XpPeb/a7E+RyQW2e/hsGFPDfKLdXzICpzK5KgPR45vuWa3wDwuQanH6p/RhikfzkMUrOq6cD54RbO2NT4jk2Km27YQp4DIcXk+ncAZwI4AMRGlt5nAY88wYuVxgCMVVwP0C9wzRLiERj88XcrHN6wQqnSk9QaM3Zs1ixfsnssCuAqP8WvrSfMu/c7AEifries8aevFFF8JxGVRD3Wod/uH+rFzpHZB1IScWPZnikX9UjQd6hWODASVg4T4QDLFovBuN+C5dkS/uRYufI110AybkIROAUNN8UZcW5oJH1CTqRqZItEpCH8VPoWNzsI8WkVgqYPQuImPt35XcUGUfoUptjKA7xccsf/CXhtlc/pvWthEPF2WXFlYVfC+EALVYSQyqoUsnVpK70RmUGdVdkTikzncS/vR5ZAl6z2PV0Mjfppg5ERrRCbjpsSYO9VfbAt9/+3UkjZwLv1rGW7wtui7gQgeN8wJeIhwiFe6moWwTfb3WWN+xFAeLW6ih/T/cciT9GDJiL7GptpuOQ/JAI1DiTRWs1ZlqJ5nariVHLwAXTuZO2xkTdKer62tJUnlI67PJd0UEWKDGaqC7n8ROvLUiQnP0BcqhlqSBCl7KIY26RbQGU/1S1r1SC72UEpdl7dF3eD7YM+DNqTYMXYnSds3Igt24IeLiZX8bPLNwV3HFDHcw3PByIT8o14V3qEWV5RUxP8dYxsBEnlp/D8wbhu2xY3S6zix6Dv9+FydhITvIYr7eRfyNbF3nW1r3Iqm/cIak/0vut5253TZ9+jFC6mIQclGBivORMYYrWr8MRTHo2rvftrMxXsxY83pxdDhtcOTmSbvf434UJE0JSbcpykv/oMGfW29ZygnY8RQZ/Q36qpVJyUlbf2ASV4yDiBy6Cd6hleI2joW15xjD+5/OIL8q30sAp1WVFmQJSRYckRNw2H+KA6X6/oEK8DNN3gw2FmXgmLIWfhK8qLo4of12Hx2jgsTCW9NYHyr4tqaRSxoO8IUKYSUtI4TYjjEBrkLZr6GneswY6Ar393e100Ku+cb4Ek5g1MWSxHOQqzS0b7zQChY6xaHrx8EqlBzbfcQuRVK2K8u1ccfYDP7p+o95HO0Qwwn8/2KfuwmtAmuyTgbActWxX2W6n6kbUh0ldcnv1M70LpjLINQHKFbqUswTDdDvfaDNIcuesZIbXmUUCTRZQAt8IGAn134mzvmjrgIHgeigAHixlGt/m43G341qGnTSNaZMI40Aaui9pBvsgo5KK0+ozL+u9Qc0hf3xY3F8F5NoBsNY3QcaU1Y/03nGEtHNJZKKv5xLqDe6ZA==';const _IH='0cf02b31602f9a58a04de508cfd7ce2630d50f9e9f57a3fee17941b799ab9b7a';let _src;

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
