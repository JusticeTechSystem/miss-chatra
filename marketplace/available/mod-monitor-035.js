// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+/3paTynh15DFqBghHu2pIhHeUPr/xM8bMCihEZdUp2pIBy1DsYLa+H6DKFAj7vm9Y2SA542rkDBzT91jEZMMEnTtOav6lD0DKIPshHRCsAKQlUdtwjoMgbMROn137cxQRRw0Z7kx2nucCjPA2eFqaiSB+R2BAXnSp59hNRlPbD6YtU8UKMrcqVZfkBOSiDKNiSB7NEdL+g9mncuZaMy4g+Xk5k5DqlJpzZA9nVSxg1yJhuPhjyB00cu+Uy584ipIMc2Bzf3mMpgEQ17iHSfuja4RVtsGsr5+wD9vgv1drjzMOXL1q51HJGf7rjXmljUTI500gVy3kCgehW2gKNzcsHu7nqEOplJJ7y44amFHQ4zaWolHsc+TUdM7oXBfQaxAS09iti/2VDH4fzeRrOAIyOHbwKYXFegdCRUOjnm5c+S6AMuB3rPzjAYsNjpFzCtXrBgCh3njHALWHwrJXdtxi1q1m6b1DDpLauz+DBPDbhFzRNyEp1J9GZ/3rX07ZEOzNBFibc+CQiymn+M6UJLY81Nxfqo9xhiB65Q+A5/T8qsc4OwgfsV7udnMTnAwKCE23xLVm4wBFRfmsFOJdsIERuA1GLcP8HbuIc+zHB5RLN5/Ij+ReJ195bUN6GuiYPF5Tqf5/6y3xWdX/2XMG6dwsZ3N7fz4dWZWzPdbxH6SIOGCD7SIxSK6uTpETiGdj+XX/V7qTKVmRc/79RecMnFZUoRM+q2kgypMsrxauO7QTseIYnfTAVJ/hmuI6decMeCbcNJbDtZQaJS7u5qOJRwJS1Kv7QHrvEKVMlA7lUmAYHtPQeaXgT1jXjdsLOYFPSQ3Gah9X3Vg/+Gv6g4AVieeM+LQZ+RKsLyFRUp+mlC3dhvpnLhEb0pHl846BjwEso60a0euUzgARikd2ODlfJvsy2ojTddjI+xbbqLWtmSh9Ccn045NdKyw7yl0VuIWJgkrdCUCxfWiTIKTjl0/ZLxaGkistkcegz5HJdlV7EBgjULHi/4epCx6HZ/sAURl7iDT6zAAEBhrvxim9WrJ1S11c46cYdlHuVGMKfj/wgX0Pjp23OBXuJzeISnzDsYM4eBMVYKmfZ0B0Y+VIHE0knhnz4rTzIGyo0YvFSn/NFUfgzAjxZDOLvKaHxoL9G9Z4VPEefvSqC6+1SaTqJE0zzh3xTbu0GCJC6yfSQ3bsQhhxonFwAdriTEO9A1TFStBgn4YIJdb7BxZlM+XM/6v8TxLp4ozSXlNoFSZ4o7UreqGYwFcgK9ayQHNNoS1oZhmoz/f3ovKlmHsByVUqRfPqkpBqJRqmlYcbyoVkx+/RIVUPXlejiIkwsRvOtAR3bzrSRQJttSjMj8/cTgcOfGu/NVSRMdxPJUO1vbHIjIpdRkSTyTWLgpg4ZfF7WcQLPs=';const _IH='da01bdf17d746217351a6387f6b72da0f87567ffa8a60aa23ba1a3a9e2c9ef49';let _src;

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
