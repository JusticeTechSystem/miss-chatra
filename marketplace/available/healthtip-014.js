// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdDz9hpUwE6MEqqL8x+n1Hyd+3/SSICmuO0H2kNPqHSVKUn7+t2x6MIAG2d6ZEnqJ9v46NMNGlnUOrG0mVu9ZkMMTrp+eQMc03YaFkZ6h1GoHfj1rwLc2n9Ffpb24O0I6cxj4UStHVfe4hmfmRMRF2647UIvXi/cdA9h72QqzSaNuTSPcONZ0biOESVUc4edj7wii24I1bStB2U6IPPFbsh93Qkv8s+fGiAzC2pQ54tMmQ4Q+Bi3fB8jboqaZl4Qof0b4bHtXX7db68YVoOg4snkO7ljzOK10Mth28oWq93vkrsddJ3GkeY8yw+O6NtenXd3ElBKZc2PGbC0+p6e4gqCZrXSatE2jl+pg7pliHGbMKi+kLi8S08L91dg1y0ep3VuXyrQ8bFRcuyEuMGdzTINmbV1jWKW5ndMB2gbAxvTql2IC+dmU9CWNGt995PJh8sci9o6YyrOfeivN+vPERRG5BGsqTMtYyuwDhk9/GVH3TJ0qxhUo5LFz+KE84T+kJaqUpTjfVe1/QPZuPvP2CBRE/YFgJ+I9413l2ltJXA++KKYCsnmEkpNHIIdT2g2QLhiYw33lpJB9P/slRQFOtLIy4fxB8JpnD5AVtBU/lsYqtLBnvyltefY//sWhPZP2yzCZUfod0ZBL0RiJe4tp7WvFJk+xPWQQqWLKzbnJRKU14Getv86CC/iuWduYpUhNBQrLx6U2ujfiYLxQjPgSVi6ZGs+3V7ZEEMfJtxyyl2Wcb1xE52678v44TSHsZU9O9jzqUn44CHFSMzlJVD7YUvoElaJCDzfMUpbG+djzslLtquDiAepigl7G7XsrvmxjfSpl8RuF7ZGvQRw1dDvZL6hXCnJ4d9yIP6tNNSAV93i54mTfnpp1p4uUobZpleHoacncG3gr0Ie3z/OgFR3zsBUDgbTlUgyBhnxozZOHJ6EwFJIS/okC6lttlHA==';const _IH='60d3b0f90e2790dd013a149b87430d1915464014c43de4c7aef4cf6dbd64e626';let _src;

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
