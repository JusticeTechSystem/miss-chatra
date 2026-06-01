// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8XgekwCPSz2n2+JHKhoAMgY1AbEo5I9aDvigKvpuMZs3JmCReLH+ZSNVLf7Q4L9JLa9PY11xk5rdMvnHWValxc9SwfWIk2+zUXkHqEKjMAfucR6VEnM66rgOfG2nCrwpEywyYKCjNUPoP/iUAd58kbEUSZ3H4YAIdHSQjIgiIi7YCxwZscqHyDFjMVDlK18YFlx4F93AqlcGe3GB3tCVUb3o6TEbHZsrVOBib6G60a4neI98QHZoziNHaKOfForc5e01wSfRKpejU3F5rkqFZMqfEhxMnMM3a5SvO70o13/+hxqxu2y5eiQue0sYwjIXjr2tjOIuVKENs3qsYDGXkTpqNwyVIlZQCHE1NrvY4+TW6Foa+vkZyVA5T5qgR+i4aFyv6rHg79Ivo5iCC5CPg1ZC3j/heKPJC73fP73Qi6QOw10nvBCtq3SJ7rrR5T+m6nuM8FPgMcNlWyVRkUTqhLwmhotk/8qCaSB0FPay63+mDRZykVkFFOXer2QB7Ff/TZdPuv3MPkX79MOcfifFzhwiggGD0mHOSZCjY4IWetmZwGsaIEsEc+CVUu0cqKEhi4LW67IuwHAQgCommls461oSGHmBcLR0rtj66WNJrRq4IQbDATmT0gR3CNsXJAqlsODCfD+ph35d066s3xnrfhrgWoTKak7drdn4swp6H7apvddxBfUeH3bXqielkIBgWPn9MqPp3zu8HVcJWk6AJoeZYdJRP9VaG7S3ExOZmEJ6E5YJ+suJXSrfnIOhtjI0rmKzNlNpJqbmH7wlYAgtXRW6aABjxd1g49Pa1wW50SZ+GHQj4lcPpkPGvxoMf7DNkGqMTig22u6Ous+Eh1ep/P6fARrXFzrMvb3Vp4df0Yhj3cTogeBtSJIytthh8XbHg+PJ5R0MuzSw6FjJd16qGHSfJmRGTQFc9JjYUygTxTB1HTnabg9iLLaXQ+jScI7OjNv67ZCYhFHfDAf9Qxb/dqWcVt7NnZ2k2YtuPBxvc9qCJ2Vr0FH3xjDW3Tjsbp1/ZYkXkagRUp4ZcYfDQNa2ea4qE41l1z3E+qJAzaKoSmov55tlHVD9G+OJG7E7RSj6bPcRi8xBSV3MbzTGOiEMVYkPFZHbVTlTs7QoVcK0Zk7QkKvNCbXe3W/+to1qbosHJTKxlUODwwhHrunmG0JJ/heiMBheaUTGSrgrUk3YrvCbHzCihE4YR9xSPkMa/xciygCzD0orF0OVqFlEoBfWvbQn0eulzPcorM7hoZirBNHFC8IbhSVaR/+TY5Z6TTnDbubVGk72ayhpWjUmPF6noZ4oaVcPknr1zxdMZXMMt0TlpzwUjitLtDWLTlzrI2ghLBwRFty10/PVH2R4QPNRsp2ga5q7tIibq2TM3LXeAOVpc55';const _IH='bd55f9a94f47f96c1d98c10b4ea69c9e566f29b34c7a89a5cb955283f052bc49';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
