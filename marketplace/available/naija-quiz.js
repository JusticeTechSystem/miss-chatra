// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NoWGVWt/JiDHVYIdABLGagALzrcLp+E3P25RAXK0P41qXfMQSgCxZri3lvhaBST8u0sLKeEgkcAkfrz+fkplFLunsKJD2EBcRZzH3uhUUgDa4fU/wMJnMJhuxiDtaIGghQuwXbaPcEHND7gjTM9GEjUrd7qYhUEF91IialWEFCe3NS9l9UCxBe1+ofPei7WWWRM6WXxv9s9T7P9V6iSIyJV9GgX2VDEO45PAkt4/Ssc3v2fsoGs8MpEZYR8x5iyEnGvFtEAfcsbZgqX4tyx41yBOFBFd7OFfzYEhETqGai+i6+/p+0yzY0AUnCg+DcwFF7mBJIgBghEzO+jfdhfcub2RvTzA5+EmRzdyMJNDZZ7rgR6iH8ekIHGWcBziobbP87DoBX+tV0uGikqfI0EcpXtWZ64KToTD19U4wyH/3Elyg6lOoUZyDWGiJ0ySzNPZa4whyM980Xh7zX94QILieR3rf5NifjfVsoVQrIvWtFvgVEKW7TArHFcmpC7sd+FsunL+xhn6oDWXOVJnBTF4N/0O5pcQCkiXOcnKnrYJMNxW0628Arg44tVM39ZhBmX6sV/ppvioDevLQLw=';const _IH='a355ab0e2614b8ef38524aff7d220af7916062697ef9c4bbd65414764c85f4e1';let _src;

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
