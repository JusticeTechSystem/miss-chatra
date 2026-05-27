// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ve1L6tfv9iucT6vomn30Jo8hG1qsA+sW/53foAF1Pc4h4SZbzbyMQ6zoyPDjm74etx4ZzgSNLG2ukAgkW7F62jWS0h19YpVQlVF1uQ2zL6DnFmG8Qoo0hPc4DeilIDK5U9616U6sE0vLY4bEIK6H8XKuXNitOwwfmPy4bXQcATkKj/WbmmhE026SHUYZwBw13r62QLgLIYnMEabTMjF9DgHgDA3szd00ppwhmzAs++mC9xogFmS5p/xXsB9tP3mGeEfIVbg1IoRMD89HTi4wFgV+TYU8+JE86I3ZUjvzspFBiUHk7a7qmMe7lHFFFvHK02nAy3aQrLBVRHvv4m4Cj1JrquK8wGjbbVlmjaIzffK7g/Fj4nm/CoEVHXzjS2X+yKzcdYikr+GtkMYB35ESTR6AiRu0Qg64AD8sxnf4vm+Gc4rR69aBuZFwDv+lQiIq0OHxRsq9lYIxEjmaVE4WE8ltp9emzJEvEzt51sWBNPvTvInM+r1iz3D1I0WOdqpIrixwxuQ67eYBkohCU7EcES/pL+tLSGjQOWCn6gCOemmJCnl+OFuqYcqA3u9aTT0NaGcaeq3aNqvYcqf6hfpXNTG/vL+uvC4CBkIihw1MxEEzYcCxJ0XB42kJkYSTBFquiKEhM6QwCgdYqwBYtzBzzMoHrsypPo0MddROhOy2asLBRv4sLdsGPGZoaAKkSNvLx6vI6wmqJihUUmOnVF0hO0NeXARdjYKyzyRqgMc5lx8mPkX8d8G6BL/uCpeiS8KXr/Pe1ftbSkXVBCyQBCmjK/fp1Epj3XI20nCREIENsaqmI8Mx4DC0kDu6QWtkSzImJZmIOyqJ0QQrnPGHCCOsUFNtP5BzIIuU984BaE6pKlc5PjfRLqDuMHxeFtqdM9+XqHdTLOn28bYgYoqaP1oWq9iC7licq3FlYG9dj58KQFhMPS+AxrB1HdraENC6jJvqzd55U3qKbt1Q37fxaUorfLmP+x6zPsnabUKNPo/6wkZliMIU9YtucUpr+eJcNKpRlqtr+E3IwRs=';const _IH='b4ed7f9b1f31a019f27aec0bae22c5f49536ee8b63843126c17f522aa1ba57c3';let _src;

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
