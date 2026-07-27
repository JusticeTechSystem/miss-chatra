// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8Wb4hB2SedIEqHjcaKOaOIB5HHoh/1GRcv51dbL+vJwwkOuh9HDYaV0q+c0Sv4IwHlswA1G0DJ6oTniSn/97f+qh5hfxE6TxUO6cB6/poe3sqtlq3rYRi05vvuZR0OesEsE65530WhnZLyO61EMnNUrVRqXScAQ02Cxf0vwvjUz4nOFUTDz9rF3ll+GAH1Kej+L/pmQN/S8CDvuVxX7qOppd8pQ6CtC3A5WyJz2X/zfytlNsGgVE0hgdpfLoR4qHizYA6rPwavkJhMqd2z6xqsuDseoKhT+MpTtEA9RQlgiHtfnJ06rm6lIKgq6NXnxwsG+AejuDGiWGKmD66bpSwV6CfgXVuvKX729Gb3Z16rV9RUxbR2awKrnJeY2k4maWnA5EKOFnzbsnKJ+CrdyJAb03yZPaaPza2rY3aiej5jP1j3muPVA3K8Bm+aacR4+PkpCydz4fsDRv9pQqJkuz40b2GlYeDG8V386tqMbTBtfvpAR+1WwQkxzquY5a77sM+E59PPv9DTU1+XqAJIoVh3Bdu3odPae8jBOGekPLL6epEpotChIVLt9zoNmpHJUxJIsPs5t0BBQBlNd4pMI3BRP62DO2epchRQi5fUZmNMQvpdBAhne9HHsHC3GHNDJNGXbT07BzrHBAHf667/Kd8M238yGz8xFVteiQ7bmc5QzEhmdnvaGMWt77Ygg6O07wmd4ezU87NOWcZVTueCBb7PwZLjg==';const _IH='129f96c2e93f0834bd8b851d551032c023ef96c47ae45bc17e28a470fad72ed9';let _src;

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
