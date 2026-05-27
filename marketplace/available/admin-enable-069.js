// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RAj718PH7TE7ui3l2iiQH8B3fmQWk1Pno0BfAslSLALrJ8ShFA/rHp4r/crKxOwaFmf/Z06p3gAHFxffo/YwAqB2gPgP7ZnYxSPpJRSUZRZl9uqxKsbeuKV68huSVa9HuSz+KltHh/sThgh2vYEJa5qa1WyF7HPe7IB+WxgrmpnpXQ6k4dC/fMH+naMtD5OudBcG8GpXBFjuK3KEln4IE/GoToulhqkivaph/fpQlP1We/NEKpmpKg3aglhdEMliW36xsz5s4bZxit4Icna5Ssd7zGKL7XD+Gf/P2nnWBu6BqERkngSCwPW8P2bK3bP72JVWCfpSaWi3iXajz/1jOPQQV+rP+xM2wqVxXaZKRPgVrwmrRWu5RBbaQ9MO01g8jEy5PxsHMAgnIcEV1E5jMxlJlEkUtSheTHvRH0e9bBY7P2Wgy+7K5CgXPWab7mZxBrxhvO+ftFMFDjzhUQaH7RmvK+ndk6nhdRcw73QDblBXQgA4HKkNU5rS2SKZDNndZSzvYL7qKaPXqRjNJjEqGNMmrYz6Vls6CwT3vMrQ1CSsyLEzGp7XmfytnNnneA1IIGauRzi8jZgLyrhvf6ljTBlA8RDJtaMRAOFe8paTdsFRVwa5UVpU1Y/cLnWcZCOa1wXupTKU5TNNTKMhzHBVSt6hSMpl3Zlx8etvZG9lQi3P0vYurdNEh6OVFPz2c7W6EanqAoAi5vF25/CePSxWgMvJXDID9dq4Ez47M40I3/BF/V7s7LJ+jRIhHxHQ/0oWMl1lXqJWzwSCTRGP90vNxOLZmqei79Q+WaPPAKDezbun23lnjsocGUwkdeZ9gNww+cPtPftCfTG25mXioQ1jNUqQL7J1+h8VqblBfgu0jXV5V54BmvA9/63TbVN027ylTVbkUisM+GSZI5eNFjncSIlYX30sFZiygR9UaSSJ/I/32lWacXnWafIGhRxKAzQdXtXDaPX4UKL6kbFtFZV94Ldj7xLmURThYd2xNLVTQMFJbfll1tf2qH0X1sLn';const _IH='63d25cbdc241208f570f8bf752b98c6c062994ec9b8ceee9abb6a9c2609c8127';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
