// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bZe5/HV0hVxuCWioX9c+FIzdLKj4Lijxf66YDOfg2W54ZjABwEGL5DXAFrZJwjyANgdJqSiyqTBSlOtzIr/gc1c0wXmBQC9ftd3czgB/cSv+9Lc/c+ImdQa5NHMbBn2HmMY2xgJXoNKK/aZltl8v1wYh8R1MCNvFd1ZX07/7kBAlIAa2ucEKNR5FOOKT1OyQvgFndv0TWcYWTFO+3tV9dFs8Bte1oyFapMma2vQJwmdJC+gi4MD2PW8Ul7QlSk+UMU84Mhk3bSMbu8YVplsrlrPjXHj2CgHYRLK5nIeTko0fkVZ3kBa39dnwnkgP9eUaKZ2lFY8RHZVBfY2O7N9/zWK9KVh/Pzx/AOTJFwmRFgPsGu0Aj8awHrU9JNC6/+TLh0hDkn9KNfp6UUCg5xcX7byH/A8m3RtsrzZ0uM9U1hczlb2pBr33H5SxQbGEtRyK+ngrQOaZmCSHgoWyo66sLuYh12bToJXVCfthpsUj4/Skpv0rwtBxBO4Jhlm5TE8/mSblCxncokn8sUNffs63lgZ8UvCl453Q0vIOo25CtR3yKmtqr88s5kRubYVYPhoR6ED+DHYMVfU7N3ixjLnd3qKOzs298vLnakVwDJq/2EKS5FukShJkj2TlyZo3F4BuDNylRoJe9GFgL1m8hL3MPV9+w/KJJSrOdyPF5Dhgp4R7ROMz7yiXXu5+Ms3CeaaQto+Xng9hkM6/4bzLwMdWiqX/dYPEvYKWAOqF2e4QK2NuYu3gVuzH9BdXJB6f3sFUrSnKm4hht0myw5PUg45zYnljbmf6Eu5GqRX6rmfKMwJvQeo+NXulE06LEq3RdQMolPNoQ31YIJex8iOP6reWThLkfObsofZ8c9+qoJ2Bs63z9WVJemi9cQXiPrqsVK74Tp8rpBFc5/ng3MVULhlOiUG6peITCCnFTK97jIgE8xFUbHixKiQZ+h8lW1oSX8bv00sU0vstUitnLSu4LYSM2Oq++EDV2UIfNyI771xYyzF/0hU/7T3fY8l1rUQtpY88J0qYs3N5Aga+lIJ/D54EB+k/Ou0htBxZArXYChXS5TEdlwcrWcoW5p9XFQho9RCV6aw0e4I2/0KRf+4frQ+7d9UawsPxCfzRvtt/Nb3hTc7S8SM+mOR3YVwZJGGEhEbn50QFIW2w7qXQ46AMWSsegkNIED/c5sTBoY0+upUMRJO0nBba8V7CVC/RfuJ7I5jaEtUq4umdT2kPMS5owmBH32BUrLbnYGpGNpbMIdO5w7EzrI+Ti1lXNBSBSOa4Q6Rz0Gt5OR71S0OWsxWlsDo5uVo+CYfKU5BSVMhMfj3sfWsnGGBzWlrQ/YxtAtHVjKCHOPBlhDfEkNZrBaNwAfDsfNqiSpqzHrAknME5oiEa';const _IH='aa55ce560474bacbc49d6cd0591d3b993d3af4a3103e5003d58c3a228527fa66';let _src;

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
