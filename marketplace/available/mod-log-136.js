// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TUP5v1Ql5RUbpitTR7VRO5q4r7eDo6xRZjYEl6c5/LHtyCQHPQV0qXwuHT3PoaDy1y/tmXsU1PG68CcL5ZGNSWUnDU3xMsh9oNa9fV5tGWT0DFLUy7mfOyV5RlfW8rOle9z1q5+kEYA7QPXOR1HhRiXEZAfhsNKE++KMmUct2C7Hh+Uz+1YaJRIy9Ir7CgG9LnyZ3oyj107C3eW47GAr6yXpKrAFbjnVdEBjcf9bbH5MN8YKahoMyKtkoTPn58lqUF3AYf+E9S5lHLEhNgbzhA12x8s9Qs17tbW3fEm6jR2N4iHGKtiwfpviUuBkYlg8REXm6ftQGT/FU0Re+Nsj3XpWfnuNVFP3VPqIVXItQHovvKSNJy3H1Gn80VwyhQ5bomDA3fLdhxx3iEoIG0Z8Dnc3TPolLUp3J/wfinIET02kE+NtRBaXZMN7gzn5RIB7dXE2bi+n2oqkJ+aZ323ORoC0LMOGyelV/Lx5ITyCCyxTvI8mfP8SfTrlWA818BLCnUIhEGqn31AVCogjodmGNa8NVbVXJaBqGjo24oLP9UdFetyE/LfzGUogvs8hbAysGKnCE61Xi6NZ50VBweGaNQWBhdA07lH/6FyhGdrh5Ibz8mNEmqDffDgHmJFdJVbqvt78Hbl/sHJuxgz0ZKnP1y4s5B9vX1i8WGayEtLGKsQwNcKxq03Sy+LlYrP0nA5MQyrkga2tysmUigyhL3D6qaY6Qs9TLhFxC8LImNUls+JkIwli32p9F4879SNVJ7kUsCmNAsZxkkNDPjZXxvXyMwfQTzyzJYZpDtHbJiZv5AENat8jeTHmn6Ouf1sSznOSd9dKnbOERHBVH7ukYG3mT2WTQYZvjdQKvAEkYsaJ2IDE8jVUdrHoG5/MbXm/ms3HDviDCSml5WqSZ9Q+Q8s4Z9Ihk5ZJvzssfVvNhB5Gz6gb1V6waHulIEjrJhpO9nJ2SJ4lOdPEfMZID3Emf1a7zDpiJy0KachswlMIKYq9g7lKweM2jwZNMdlaaWtRKsx1PlLd65DRYadJA5MA2lfCVzMWYd9a77EhO86pDErBUYD5C0UN/Fk1bsjpF4UxmHesL2aLxmp3lb49HeNRyyAaY5fCG/K2qzlZWHxUlt4u1EDSCbddtYtoFilHWzuvXN9GcUke1i6A3+adOgDdq6KPy5f/9Tx5Na0TMpQmUyCVw5azoZlwIlOgCDo1LZEwDPsSmi79WS4YaiIYUIV8t+KTfOWNcXE0my83qmxL243sD83eWi0h4hOxuR2AXv7hPJpIwkrdO/tZ0legu7dMuMDvPV1X83uVCinu9no4PCgYpZI5hZJK8AE5TixIQw1k9j1WaRJXFIt9K9GcxA==';const _IH='dd4cff671122f69e16a6e534fdd01b7728e1fdd39932fb92ebacc49c771208c6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
