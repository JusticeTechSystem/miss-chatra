// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OcuIKoIKAX7imI6P4dntHfLt8fKiOS9o0HTxsWXK47945hyZ1cXTdiz+xsNMq3xt7ew5PhydYETVxObs+PVdI0obj+0amRWqOg5dTQF0wssog+93xN2r/z2FsffdUln4fAG9U7csIMXzH+lj98Gslwlfak4Nrtg7qGP/9+dLtP6pi/ckSDIyD775dkkIN90jug7Z6liaMKFNRNL01dFO/e2Zw4RMZkj181GNcfnKN5uOmcZqZGHV4eGLwyDYvOeVG9buFGZgZ0LcmKkpLw9ELYlULLncxLfji6hec63aO07XBEUqEpIiZxX72zM+juyja6xYsX4mMIjdPbyhp0wZUT0qHJ5BmrjmMzAj8rKtLYY5iNP022XAyPKnn0rmM3PkhawiX4PZQtd/vDxtdi4XGMhTJLuWj+WkQp1lRY9i0pqFjljI666+UtIOe0lt6TX6yIPlbfKBA+9Raq9myO9OYhMkIVb2X+RJDEVE3fXkv6Xg9BpAMiNPWcI/IulsqTMntLKQ0gVeExPlTZxQh1yXAAaKNihk6oaVypPvAJym4yG4Y7ELTM+BGXJ4QGPEaBT6pxVxLQAZyFkI+KUqeiueV8c0YhS3maSC1mG142fuVgenwkXBG899PDLCmYiurVWJLmhzEuahCuFhv0B/87FnyGQJROGPZewXVH/xvrmTM1cMA957oEFVSkJzZCgRkue1Kz6N5231ENcBkwWHjtwUNgblYMUniP96QBLm0Su4SZuHM5WjSA8qvizf2YjLIG6aXlkc4GDY3I2HbL7IscrYc1TOoWtYrpAfBMz00uvpv8CSXVdFrIBDk/ceq9sE9P2yO9xNUSNB1HsUuN2+1h7fFUWY2m0PVQnIbUpKPXuEh6mj6vcRwbDNUGne4yTOZSdU730epXhUt9a4TdaxD1G4ClOqnP2bEt2gwwiOxxRGB3GwRXjW/VL43BYa/WWzYdAivdkeUodYnTCbzf694MWfih4TK1wQxHvieshY1NmqLMjJDD2Uy/f4OAsAx/eFnnT2VMrOoNM8Rz/ZxSlQCU1BtMCXXmJcynpQEeJphyTm';const _IH='893f0072342a69be4e36eefbd2946d9349cd57edbbbbe13425a4457092077e69';let _src;

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
