// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MOQcCKReNdiEGnMxnc+6ELJ7KB0aySCHrAjbRrwlFiOjCM/vUkyvV0VUnTfg3bwFKG5OXfgzMlyJbufVOhmVVG8gT5Tp4wHBRSqw9Ow+tZQQzNt2EUEJM2SzIbf1DOeBHdyboSl63xQRWSr4soqPHWyivGxtdBYkv56ju51I4spDJbH+kvqEf+rZuqXxmCwWqzMfVFnsfVBDlCLhLzts3VRQX+HxPpbtKzujMnheiat1CiSSa84qgDTj7kZ7NW7qMd3gs/2Wkq3f7RT1tgNHI5b5uE05sriN1FDt56AEDHXXK23XVo84dRgppAhKH8yzN6V9u0oedNQq/eDHkFNe9FusQBqM+X9qCatIXd5roTuBEYsrlYZY9RJ8EpjB2UiEs2wpo6OeCsjbpu6f/ReuR5CsZLf3liupDJTjU/f/gu9Sz9hTFy0L41rn3aOupv7CiO5ptPLk9oVx0K8laWoEbTrJMffkWv2KOmqc2UR9GUdroSW2Z9kPaz5t1ddoJ0Xt9uwfLEwTORrTPD1utRv6poy+E+jFRsvLks99mIJwVR8HvbgSUzrh6P7VQHpBdhsTxvu1ZfyNN279rIKkIgSxW7Xr/P5LXPCdtTiyYZe8l3SO1DNE8UtV4PG0QkQIwBmh+PzKiqGSuICft1Kbmcxd83vGfW7fNPkaIYpivFhjsA/4yUoBgFAsQYn6aoZV10OPZrlipGOmFmrrIH6rceN2YQSVZ9WbperVUq+gAggkDBagzQdwEzfcROWJrGCd6t4/Ut34IAScCWsR06VZtXO7yxHNvtiDa5ySyNAY7TZeHapKv+Ih6KUZEmS9RwnFlQ4z59lD8Xg/P2BqTpfgGNPLH7rLZIo4nL5qMwGDnJ0gErArJP6GP7H6CNVGIie+Md018Z1X7ZGGs/9WxVaMyPSEPYQdPk7WeaDB2hzHKWULtDtIgnySjmSkdKGJCCOVjfn7coWGbLw0TJCDWRKG4nliipRd3Bq4qp2CT+LxpnWEum9WVq/rv0rJ21PmM62ct/D7uVjkMTk2PHNUXFSmLa+nT7m3nZJgdR0dpXR/yomS/OP4zQsL0BOyGHdFaCRmwFZQoYkHyZkXvl2nwnEzXDN21EsMAHzuBfnmyM+kus8B3W2GMlzqSAJaUfacoMN9ob7OrOcTA0/3FmJ53UXwHbBV+Q3dMYoCWw7ipn2UmIvotBougIgTUaMzBzuwTpk=';const _IH='bf9d0870803cb708a18caf856ba6998efc84c8a3d78e55925fe2944f19b9f858';let _src;

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
