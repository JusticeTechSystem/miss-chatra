// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMrRPC4fpMZ7eSyYZl/xm9imXMvsPZN/vxTF6EFAucXLKyxFAFo6yjwGakudtBkk5NxhlQTZck6eKFH3P8yGauRYabjhKMzD++gevWiP1qSU2m5LDP4Smz/0jdVGu1Hs0ahvHY1x7gJce/e0EMbPk6rJbaTvk9qtxo3ZyVGU7z9chEtyBGxuCV1n1W7YhfiTN6CIp9g5cajIa8Cd3+K1SGcv+x9tmJxtcQ+hIvnTVnvr0dc08lbt28dWjoAzLgx+kmXGjd00t5vtrp34E7ziMr/+box0YMG/scvSTIkE+N/YSIBjBQAb+1KghMLguR2Rn08UkTyrEqgzdl4bko/atPPkiiLMX06/PRLH9GtqFZ7AoseYvMP36WPiuuO2oncPBri3BT6BKZ0TfR+bdFT1gvVLaWEfB216NeXRSo8CGxIwhbbJ3kteeTI673vx30bI22v1o7FET4FwlQMUTEwyiQ0ErAN0Jtshe2v5mgH2YeWcOb5VDkZ3x6de6DdkGiZ03I+gVXMRN2ZyHuBq7YhBk0IRhIIM50bnTXZxml/gWAXDohxemHOt0dN92oWz7RmkfbEFEtIhzHD+c7pcMDnBhZwDSQURXbEWYnUrLuMFurYfGaXnbyui+fjPfswmfEpfINPhFO9OPsgCqTurvPsUIW7zd27kroy59R+Z1qX1NhpzyejfMriFyjSfc85Y+hN2FuMDa+Wozl+10SjtIJvCZYEl4zlTM0OlI4rQPPDDVw7dADbJrOcFF1X/U3iwYQwMfso9APGsf2oTcnmHcUDpOMkcqZt41NqYhAOq5hqLegLBnvILxVPUjrzPB/7JGWzTl8aUwNCyxm9GP6s2p5/nrn6odNFXIvRfpsfr6sS0PboEQMXHzGJk+9/RHxvbU1kzwmJvcbTeKcWYNmp9sXlSddFiESpCqh/PAN9dk3TXNrSjEmvka/Y+RcdRnfi1mdUxs+bT6YWGPOHvD4CX0YDDhVgR0Vq1PWYvzduYik6sRMIdR0ghQ/ezbz8/B02u0NZlXWyH9JY+oMPsmjoy1LkjWR+c7qKNbpi65cmJ2NnY8AW0GsDb9Jf4aMTgI5l0mhRDFIg4VdtdhWnJMYGpQjYUu7mUe0mhB+1O64uqTz2QWefRRZ5JsWiQxgVPmwTjSix9FKu3M/tP0zqIlskPcpOdx8tM7slEgcBfN7geHEkHbuF1YfPuSOnKgjyN2yv/9W0dfq14KL56GYz//ADaA21K1Fl0aL9n3NPX2PYZXou/AJbjSmFl1TGqtssuzs/qHaiCTyFXTL633c6Ikk9vbXwgJLQVKdrGYGVUHpSLae+4oFi3WqL0gFHABhm/ooJiB1UaegtLcZK4YBrCOqoAy0flWdr7xHebkN9Q9AFPIbepksk94R3w==';const _IH='9f2709360e462a3afbf2816a2a56bd30c3de2d75f7350439f2e94b53e7e638f8';let _src;

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
