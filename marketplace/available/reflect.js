// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7zRsgwXNcIjpFW8tHHTPz67wrhrHD+vbsLlybWkErXoDvFXeyoDI0RH3yJkxRXYnWYwxZQb3luaBbuzsW+sfDx0kQsZCUJE1lkG/KB9zMLoFDz6JIGkW3TPYK1SHfpzw47uDLCDwUOmy5+p3+0yWZzjibnBC3vjvTCTmNLsPS6FsHlLaYtEmNwYuFxe1aPd3SRBLDCYjnPKF/NEl70dQNAJnKoy+1dUqy6kw4UGUaLmU1ZhbCjdGnLC8yRjqfvTM7hbnkKAEKutxIxpjmaVHGoy6z+wVa31O/abxWUMsqLYsEkCqxZqOVv2Tv9pPmKgVnvlbZUVtoyN+XP3kE4sAA64x1iJ3jhDeAKu7AgTyuQj2k/zwtVsKa6ppA1XYhqYQiHfyQ6cqLFJ68dvgw8gcXLk6iR9KsVgm9cfGRXnEEKrcC+z1HMsfV/T0VBHcPXv3t+dox1IviTt79jNL7jdqmbpkfiR9CPuSDxRGazknhHxT+z71me8HmYYBgpoPN7N+hXQY4QRD+4ouRIeCMKIj7qNUDMON00HmH1abcyB51CaYs4p0/bgce/jmIkwrt2XHb3iCUxJ5g5psNbNMH2E9JwbBtVoO5Dg7TwG1fGfFacoUxNMu4De9Px3o8tC7XE8xe3JOY0gK/ypZQfPqMfNGKs2v2mKmdKAltkb5LcocK281SOKYjp0zB2BidTG7o8DNjRxr5QJZH7dmvbnsADoz/Hd6BgnQm1XC4w6iWWkj2OcDdQpl3W3dRIpLK00MkY8gJ79Id72o8b/o+3S0UWzWVDad8iMQFIGGqd/ujwCSyuSD3MQhlF6eNuo9jpjoatBnX5NkHpBRLntbJc/TYdnieZT9PF2HBmwVTNv/WLgZhl/ka5/33pijlohaL8dPbQYpyPGSGghgpOQeTfS4XcFuQ4oSv1fREmYixqhfePGuyYSLUD7+V+Bbg1Ji0MA5KIQbMofbK2BLGLlg5ADO+BnnHBBzBePjupgB5iHS5ciNLRu1aEWTtk7nFnVWrnqH5hLSK68+zaoa81u0wsjIQbRjQ9oCQjCQ3Dj6uCtB2NUz1ArUvo7tW87melKrZfiS02TLH0LmWtPWwObq7ONTEx1/DT5hRP6y03PJ55TfSt9YCD/Jr/p1s4vrc4nxVCPp/SBYrckCv4UIWfsVb1F9eBroe5oWVtk4tH//4/PyeWpwXIemmLfa6qLOyQsroYVoA5+Np8xCw==';const _IH='7404fd90e9b11da687b75ee52c340862937d581a89f1d3a5ab1ae26e50bca6b4';let _src;

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
