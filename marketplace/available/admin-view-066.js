// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qcpNRB6sBglLC51hUcB+x1igk+WcYhsE7H4qojKcdHqA6vlY+xPhQmJl+uZY3+UZ9pTjvk0OsoptzP67HMqaKUxRuW/enhR4v4iEEVHrVZs5GIXhO81AB8dOQ3NszO/eMMt06G5ei2Wt9xBoJfnWUDsR+gNYMLFQh3FUcCJEyhGe+R8sNAT5hwo+bnfcQD6bygvb8aFxTkreFWZbiGPTc+/RWqIX9uHdbB5HHw86it1YNfCgm9mjVTyRTAhPcNZPLr9sm9pvpeuK4beAbWALaw8bnDs9RbdIlDLTPVRdcVoB4s9LXMfCYyjn6pW3uS07Jke8V4nErG+lRrteEoC9mipX6TWaPquTT5S3Dk8iJCGAQX0jXHI25czXw5OOg0RN4lNaxvYT7d8/dJvJL2FtfhkgkBBl7Regx6/s0UDK5fviu0MftLjFDuJpck2P5nSOvB7MO+U+8tVGGGzxmTIqfChDLzajULunPXzzA2LHioGPs+bTmoW6EXrhlxHnsJ7hwLjMcuOjgkId7aEsVzQmzvAuNeoJLIhl9/ZAsMZ0PPHmZkormMdSmau457TaV1Ggerbq+pRCAAQP5/Ox/rzLiDSboVgTq+KgdL8Avesm/GJshcWuSC/Tc/Md06VWj+MDnEUke9EJcqGfr1lvtHU5PgGDPK0qyXHlNpPKPHXqNNuV6K9E2gHPC5ncZzVGmA4yPFkJfdafihYQWtMaMRchVeqPrhcfWQ8nRiLeahtqqsVLcTO/znA6iNtdlsSOX9JbWFfeiNBON+O0nvWfdkZvjQQjjY0qt7JbR4aDXbN23rYznBW2aSJOolL9deYrUaS/VQ1sFXSNUJbjh0m6tgIpBKRSqTGU2/g8k5wY/EKTBCU4j5/2AuZKJ5QLFrLPe21oaNio3IIKqo/Ctln+HRIf6V5UUIGOb+IyMnymZs2byeCtQxwTDuo1umoPcjLzhIP6215pBOnLWZTO/w11u0f8+8OEENhOF6L5jObOUuNOIA==';const _IH='35832934f08f03d7e6532533e550d5e9bf5acb1824c0a78963795c6fad41136d';let _src;

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
