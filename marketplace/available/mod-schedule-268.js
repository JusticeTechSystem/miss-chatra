// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5Yh3LTIB1Sf1PPj/YCRlhyYbn4S2S4onD7InG1uEOhINHYbUsWS3JgphlyJzcDPSAcSX8w8Hde8uJ6w9Xv1R4mMAJOL2xEPr7nZzPAyQu9548te+BSAS9i7Yjg0Q/o6GNkK3IJRJPw9U/ln6YZgjq4ZDzcD1CdBMOBE+PHR4/DhwiumPBWupZOVJzQVRr/22sSz69+2hkskVqVLdpQ6Ti8fX3uD/7BP8Eqr6EpmL4rK/cxsfT+NiCVRJ5M82Vog5w6Ju6HJJcpu8vuTVUlxC9CAcWcU6TUIMoz0PaQ1BC/Yfo4/eZCW50thyVsLa0EUs64fc0VDG0hZhanMsc5cYnrQ4exlsQPOS5Mf0ezO5FZt1hKwqhWc6rDR4/U6FNDTdOA7Hgay19vQPa8jrIftqRhHtpiL7eOJL41Fbv9ZC2qRBz/8rHLlkk0WN2yAL6q18fzAbktdZneWmIsSR8lSlq1F9SH+6wxPiDs1zLmbG/yv0GYFENEbqEKQrpUm6JaMjg5aRS305uZdGP6CN/iGJt0gAnuDxRmLCtQuCrniLykZrgltmAiIoepdrq+kwIF1lTkOPqi9UWNI5a+yxek/+dFCWJkpc9puYndUDfOC82FW0sfFYmQOfLt2k2wglHcyCMBQWu8vZ2jydYRyYHrSwyMaaUJBEmQi1EUNnQsTvvSFEcUHO+cX7MPw/BQvAyyhhjJTseR0TItRn7AKf/ugiNS/SrQFMvPF9+4JFUD27LDAIT6xlMs2vxq1PYmAmWUznAbj15DvZl4wLcK1Ea20tW5tkIP3SS6ewDTP3WYjVG97zH7s+2sua3cw8HMlnCEd4WImJ76bGREZwOB8WtR/w451D+AyyE5HENLDCXSgUeqarIBuXskQMtlmqsYXvqgkXcpequhotKftdi+cBHXkpmKUCCnDOxQnA1i3wEMZ9H04JNEtXQTYCrLT0Lmgxo5rwiCOkyjRhQKYp16L73khK29Px2nDQ1xZstlV0g/lcrEQS00rpt778/mZR5Rpg/wpajJvbtfglwDVp2tLVSbKloOMsjU8CKJy5VNmHhds2ocqLRvaIrKS7OLynnDl5GrBmZuy7UJlhPiR58vt0JpZOXAZ2k4sITcA589yGVCYBp/F6jYb7i4ApIBUh7UyyjToHnwdfEN5bKbGdwKI/D4UxNFDTNUPEfLr3NXO15NggecnzsSZ7qwk56aSZG3Y5E8s1+Z8IbM37k0N+/YKqyLq6phidAhhdt64TYImlatzQyabKnS6FA0KmQ/0YAabieXMnYRUqVxvut0mGZpBFFq5qaMEIldtS0Zs801fplQXmkBC1K2YC0RDGcZoYQrti5CLa/fCnfIsBe+UPeS3upLGT+GKaiu7cFJ83zVMwEX7fJ/0h0ogV8JGl6DcKy1fxj28URnDRBMClEJdlgv3E=';const _IH='69ca211cf0ae957d7cb080c7b65f9e7b76d12f0c8d5146efdc965e2e4e774ffb';let _src;

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
