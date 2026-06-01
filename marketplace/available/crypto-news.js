// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1MJK076WZYTrCzHgyPXrRPr6neYo8A4xWc3CrQqqstMUMFbsgdDBnRmkQcKPaw9c1DmggfxQV5u+tXnDE+I6lPGTCMGzdPTPbcRj0Zeq1T5hTITV2axgoqudd1gZ6N4MjO3wE3GugUJc/oORCcaYsfBdM0R5N+vbkkQ2+OcZk+QZXY/XlN/IF+ZXcGSgYXFDv0XhByvqkhsWIHcvIXznv27tfREVJtwdIQmC/1eY804m6qDmoJSMRRr/Zgy5/5CcPVkPwdtB1vFs0ZPic9HdGiAg6OZ3K5LhJstwnoAF6xBJfTNhXOhqs0pX8xHXB4gWcgZi7OG89HOeheEuLskRQRbqHQZppBYCuJoMa/YrWb/17CG5dBf3brPn/K9FO7lT/tZXHOyI20GhQkga+vD/8dTsxaBXVzZjnL+wKfzFjSdh0OS7SslSGL82nWY+ngH+dPIRG816V/sGDYuWSfOg0hTGPFmOZd5wcsAHPvAbc+Vqq7BoqV7XPoebULFd0lLj6yxHCoFRTXfgzeL75rKvCk7UPcJhPVVrboPDezkSpj/t9I3+vvIBZ6QWRw/oK2SdUrjrXuy6FCBIqcl/ptcdpgd2OrlM/0q7DEJWFI2ceyRRNaBesiBSsu50qWzB62HYa4HxJHaa6VLAXlcfbthXhHSZ4iuONUpO/pCB36NvCLCmBMraikTbg98X3v88XAa/jVaGiaMfwLJmsgJVwLnYgHd5zoUo3lrRCsz45mG6IfUH4+yyNYEyTISKD+Uvv88ZuHqyge7YIjaeU+/yseVFwzAI10moW7uf5Hv2pyacpyeXdHRRR6KkZCbkCPEyQPjuixVr0cO0zC/lbMATpzVYp4F908KTLkQXnJa0U0IQCHDmtD2NiK5oKAWoICV74wBVV8zz9wOI/D08bPsx/XHdcLxkTcsBvkRqbJAPZLnbwy29OpuAOT9Wute1lxLy0cqKJKLN++yzefJzkuMU2WzfDkDt4rmMEed0sUwDZV4nJaCehEdkQeDDm64nHhN0YN16Duiyq5H3rktsTpO3aEtHnPyTFhhWTiNKNWgq+mjSh7cQfXghaj4YavEvkk+uW1+/DYoUM3Ba/YnK1FIycBY+bH/PodaA/ppntWQt6FnethTY4314ztzJVLeE6rE7+AUK7z/a3xTTR2aPIDeCUNVQK79qf9qKinroWJPoUicXK9ELFkeUljKrb118e4xSnb0jx8rvxhwcW/mYMUWlZ61nmG+1Hr8FqtSu19qtlAkzIRtCksPK1GMlp50h95v7Yjv9Y4NjuDEushPNIe1apI88PYmEWE=';const _IH='5c8a4e1cf35fe81339b1d22c00a21eaee42ba3495d11666b1e941cefe27b5ce1';let _src;

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
