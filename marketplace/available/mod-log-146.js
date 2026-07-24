// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQm/PIlbexsLlQ34Ozh6qzzZ3+vSaPQWNlCXo2PXbSXjF6sz4nF+IA5Tum2kC7M7DJNwlp1xT7x5QPnW3Cx9zqZ/s35n+pDmaV7E4x1y4JCxH4gHtsoIkxbeZI4qjXwdrhw3nEqygUZkJ87DciIKiQ/PQJpBt5XgGuPz93eQHtvfRV7Jun3nJb1hJCAU+9DntpUe03tNKm6IGRBPm96b8i7mAgbIwzu1Q896pckgXQtHVd/SMdW9uIwtw1qB6tcuWRqkE3caIj1V/80wQv5Cy97wQb74MuhcUEImextcbeVNAp7rFoHO5Y+b0wE7U1LSlrxa4q4fXUaN+yARdC5TLeTtSFcpMPtD4/pMquUT13zMpftf9zRQDZSjBu05OxE+vot0BEi3wtitbfsfeTsdxc0phdBf5meYAAAbPgVRLlmLqKM9r9toczwgbpCL930DxobQyz38MdvZo+CiUPH+nHlHDYYUkWvkgrdr6RwA0Pv5ze25IxTkkY2KUsl7Gug8dp/tqLF1UB3SG77CTb1NaVGeMm+mJc7cw+m5cLVK0/Wh/rJrfLiBoo4ufbfTOZFz4G1Y87gT4DHnV5BaeH1JRo1kYGOK/dbqt2m1jZIl3PbSob7UlXzN7/sVoX30/rWnjRxJgieL3V7ynxvUqGHouZLiKMss+abSM45sCP0gYcr9SbO5ulWr0zHmARnzyA6ZNDnAcKTQBm6nSVN8vU2iouEXi3FYecp25tYMmwPkvdn1RAubbOYI/2BMXjhsnhDXWzVj8qvqWRe69VlPMVJjHEGGOKuPYwLgJeNjr4bjGGt9pLRUHB4G1x4GYE+ROK8h3gTNM/2CLB+3J/7J+xtn/USILQCmg1Peps1Z6iHc50RyNMhIgZXaI0mYJSxmCU5SWuCkOnaJfl9QNCZnH79Tyvk5O89Bhrlwtzf6X7t0oR6K3MjhdD3Yw/HG2AfN7Gb/JSq90eLM8QSAobBLUfkXZ3VmrRmKTCUbBLJivEIlgQziFMkWlWCqW78ot5CG6Pzlnne/ZKYi3L+3dMoCZReLGKVJ9gp6WKla25NSsCBYHMXeGQQuuEqXsq0dnl/esjV3xHL0IhtCKFLfXjmRKibWznpCLfuFUspsRxgWY/hYBp1bOhD28g9CmDLtzykrqtvUqGkgbMPm5D52KQ8Fdrc5lCJDf1sFc4nrJWFMCx33e8HnWuaSXktZDeVgSpvs8TkbbSLzdzlCTrVJ8BwJO4d2Mo57mhn05P23XmRomD+7Fal5vCPnAIVZgKKpSOOcQZJWE0k/4NyJBrZgbEc/adhz+l1tQbr1ITCDt69M/jw0u6yLdeekSHICW5pz8BoNHdCjY63qVp/ijwbtplE';const _IH='34c266a85b1f911b37f929df135037a9e32b73a9816875583c97077782015556';let _src;

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
