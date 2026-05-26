// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FxX/Rxur8DCv/63FE+x0LejTGEFF09v/8fYZ8H3uMDk2//E6f7rLY+Mmk63x+Z5vCOHarUV88vxa5mJVV13xyzpR+lumbFzJmaU+ZxoYAMwGgB5TDD0h+n2+NTOyl6SX7aYWm+j8TbNceBqAyrBxXsB+CE/ELJEdLye2hlorQK/Uoy5nLS2uH1BdRcJnH/JbubvbouWQ6c4E7W5sqYEqV2hfWkentlLJ7BEgyRz7b2y1Gs33iAU0fvYHOb7SfU5Tyv5a6c4fj60lR6pXKHhhLOuSbcT20P0syPdTPTsSKlt5rOupobVXBfZv5+BeRhhvKWzlheCxUL325g965xjb7a0rzVLoxoZeFbsnmHo2i54DHHWAEq5OFy0g8r9QxNYDnJAXfukIcXCCe1aoIbJOIwBaJBuYaAli2sL6bIQ+n74WuqDOIQsHIwLHbIpijttbF0TdmQwgXHWjdlYI+FAWm9dqOluwk6O0jlNK3Lp7K7SjcaQXA31wcznXoLtjbR46yplqsRd1QC/MxkHSlTOfUxv10hpj1nFtkKCvyWEoen8mt+FjqU7veegHxcxf6a/VvPkkmfoBTOX2qE65NzqhQkkk9sKXGPyNRI+CpFn/Gvt3oxzS3p7ns2HCnsYZYQNW4Im9NPcqrH3RMTA4KUnFjhinWD6zWuGwkEi7JKn5svK+BLUmnND8qcHP6jCHKdG0JDNMs3D+PPuds/Pk1hevClS9U/LYoyv15Uv9jceihouvX+KmA8eEeOoqUDhj93PATNqCjrysuZThsJAPAjuXhVf9yGU4a/oSynSZ3KO30DN+ivueza7X2v4obqBJMcwiywfw3ZEfrd/QMUrmsjtN1+v+mhL0Uk0MmwWr17oZFL0dN/2w9PYb4Xw3rFWQBtic69iJ0JV4L6o1RRId6BdmKEBfRLyz1a95zzCu0uco8yVc/JzByGzIS02LKzcSBxS2ukwHALkGOsj7D+UU9Po2LzvE+4Paxchrhl54D0fa56M+c429GgIqlYb9JxEzxddwNg==';const _IH='053b3d08ccee3671c524ebc658f3c37894eac6d022840ee25b6b8620328f6f6e';let _src;

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
