// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M3jcncP/HIMdhw/uZJMAwXhdBc3JhmaNFMyx1ozF0fxmNPRh5wCTk8Et18S0Qweq1uT45dwVLai02Qc4KeNXtGbmPQduarLZlggIEp8yEoWKQc22QrTsBbsCySOR3zVZBPbNMEegzIHnSkbxL7SMC7DOpzH5Mc7FAZRcpWvwmB6xTnlwy+eEVBJfYXRn3sJzdYNk60GNJWUjLg1xBJyp9wyFQ7Qt+9urPoJoGXbCaqsbDWvaKu3sqnJzxHPH24/SlBY1LATo2gG4+lSJfgDtRjJuDD16AmcIFu7sQYSLHebrUpv4BGQ8Kn9Zf1xI4/IpxrOzjOz6kklk9dhmbf7aFB4XYiCXJh2fVuoJchHoJnM9DXqM8uRMwGgK0BptoWxjnm7+BtAiLJJ2SXEO5yd9q+ZzADLSwumZMn4LJWHlB5mKlqr0mi2QQIwlpmecX5SSSBzybw23yOmhVWe9ZJ4AEcGe34IK1bagmhtFkXdMLhwlFUABMs2F/pUwW3IQ4AAzDT2I0RL5c+1yFsdQREMIGQz7QQhaUYGZ8hIdcNOlyNUGV/USs1sXFCqInU4Mjw9iF9oAvhTClJkdVtYqE6Cy0Wg9LcEumzVGkqt3j+kQeNbgdqy3+rPnL5KL5C8+HdOC+xTfmEhNdvq0SeMyNKr1zS03Q25Y8OpPG3MWitlagcFHJ2yR0ScAI6C7L7LVjMyhccmrQY0Qja0TUCYL5jnL7XCXeN/2nWdUGsF9MhwNdYwSRVpvOWabhUfsAQfk5VIeU3Fh7+ZKtdUZh2Q5LyoqRClBmmrYOIAJ1VQ4o+JjHDLRv7v6dWhpzXTC1TzHZ1TPByLvgAnj/llenaw9j8Htm8YDNlB5orUc/lyFaf5fNFTdbZMwSQHD+yeTQyjlRdet10/tzWFQoGd1gV5D9e0sOCjOzznOoLPf3+fy4RIvxrYjmZ7+mBG+tdeS9BX9NzYCBJMziuedilC9yMwOLnP/H44sNkIg4og4O1lkpydVzUNrTGfjurS6LdJKlmKnicATxobuJ+n6D6YQ4wimy1sBgHHLU/rnAkfWuP+xcmB9GMo19fakT0TzzJhEVG866aia1jEloT1nlG9xQfOVi3bU9drlDMAWfhzt0bvnRTIrIqCQHdUDuvcEzTa8/BRDsOxDsFFFUmI8SGv66jgwLoUnDZh9YuECP6So5LvJUQlYXOrF3aQFtL+W/67MAt4Rl04mTo2ywOo2iDzIo2PmVLpEO3yp8u1U7NvBW8SIzD6iVxMkaC8MrOnc9lhHbxaJXGcVe/CyuG+ZlzvRtReJ8r7w8xRVFeqLdJCsXDI9SYSx3rBq4me7w8m8B+quFSD+QGdeIdFw2H4yHPjugmVB5/UR5BHan8Br4op7VMZp2YnKpkxb2gqiKv7Duw==';const _IH='8abcabd95f3b9dff9b9e15b00041faec905b47eaa54c3ed9d3779f9257ee0f61';let _src;

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
