// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CjSV5/lZNTrrPvy0BcCtDSoc7ad7hm26sLwL1vrfk2o9m9AUuDreBiZNqZdS90VP6cb8HMhfUQYav7pUrsu4SCWvzWuay9/roV5G6SgW5iuDTG8unEhPYCbT6TAb799FdWUCAlci9m0fPfyAuZi+McUEp/nxLB8y5Mp5/vv67ApszCsQzaTdBn3Ub4GlrLPx48C53MZB9uS2qBANUlpFdEeP97GvQE0uFhKl79JTX3c9fl4RMZag+9lxxLdOb5rHepThddIRHzt4ZKWDsq21pjCpJNv4UHIzjIM2pT/5Gc6jfPl0t9oGBBnxtFBxSmYZJVlvhBTjaTUPYu0uwETdfeI9ir6eamUDbV3U1ntTlD7ESHNnGcfLQblvWvMFv88YJt7vI12VFOXMk+4HMQVYPZ0lh1ITtk4LxUrFaddqlhxiLyRYUhBqmji+TSDuWfDr4w9Q2A4sEMYKFSX7hq9q/HUr+nSqQaLve/rGK6iIUfGdtvz908pXNTSb8mDLSjYdTM3CZkBYrBrzH1LlHwDi4FQFaqBhvtnIVRHtuiad6KljkEjql+9Af3LS+whXYj1XVgiOgaUCr9V1ix2zHlYmLZYfLrpGQUE+uzPeWaxIHk7pET4pmdzWy09gxo8KATJlSxEVX5ncAf59QRCJppjt/AfY0rpRaFKLt3aDuytesS63PloM1ti6YQWMei5NWKj7/BN2jVvzCsv2op/NxSHrHZEKR92kSMt9COdqNFkNbfn6CRRSYZ7XdzAuxdCMAsFKGZU+KNrqQYAl71oi2LDUSaAaQfeIfzppulsJdQJWuvixxNoGIwlf0kNOAgYrx6H2jYuDalm3XFXoaKs0Onax0Zusjs0VR+RkPYKk6Qc7GoYjH+4sTjxD9nIYjoV9MLyqnQBllCVw8Pv62amqW479stPJPk1H2pnd/3sI8YN2PXV0zEhg90oIdW4pjU6fd0Xs1Yn1DPtedRVU0zRjJBMnmoF99Z0pmAKyl+7dhEz1HGuxy90hf9nYsaRk/pylgyvR8A6S0Y1blipMq0kclqPM6FVaYMbj7argJbQ0VNTxourBQjy62PjsOVJvL4Xh0sMEu+6mEq9XpmgpdLPYfAluQi6mPY0NJ8vDrAALRsyTXqFeLRfvKrndMxQ3D/htiTokPadvNaQU7yy8r+WvXUeu1QaWqP9RpT41+vX12Es1Eo+6khbjjx5FX0k6GlNsk8O72bvtDxbP3SYivM9BAAyJN0d9IFOuEj2Eo8Ie7tjciI54wGeOTyS4Elh23zkwnvT2Wjj5ZKVF40VRSjHJhuoAVqF1Tw2c6O7JjTBrEh3/msWy/k6WQ6tLwQ2Mps+nal1r+U6Z2AGtNC6Q4hx0HRa/NORHY8jpC4PyI6tHnOFRtDVU6cVQmNgslQ==';const _IH='729e8191bbe384243c597d6ba8f3f6721eed67efe8d2de3aa2ba150f00784559';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
