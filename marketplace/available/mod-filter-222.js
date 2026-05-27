// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sr0WN8Ipdaqgpc9FI1UlnWtustlquNSybg3v3QCEnumpHuOuZCeEEgyn7FoWWVZ5QXNrcIIg4mwSrC81oV8mtdMqaq0XW/X6QyA7F9I8iYsjaZa3Wd6gSLOu6TlqzhL98FIV3rDoBSyv8dNEyJtOyBFAOkXBXcQk4/1nD1850WB4t+ZgjbpV70TM1z0rtw4ll9eeCA1us7LyZBZ2qWRdaVOnnYK+fV2QD3XWtLnp64yE7D0Mj4qtP70wkRtR95EwcKF3ZbeaS+mHwMVM1H2I06JTPnChrQ5WhGxuxMC/nrakmsOqq1l5hBu3S0IyuK46o6PXRI+TRLFJrM1lKWWbau8Xlzpv6MxpSldJ9VLNy79xBEO80T/v8CvuXNjMq7lPcLz7Cj2gMgbKNFuJN0GrZGXf/jmlpWJC9dMHQJ8qCmyePdQgjdumEmbiPTXYAHLrzRV7FhjhL+5eTr0ND5hH8N+Lm3MmA6nUsZQiFWS4p1Lk2+GupV9D+ydV2DWYOY/ys9/ZyL5XNT8megr4b2cH/Ops5Qa/uDEawc/TPtslfa5ERVYcfUMGHM26tDogV60CJwIZrHf8sYrXif8ppCvRMDPG0CFOQG4+fkr7DPdAyfw3yTPvjy9sy3zGZ0a0pY5KZW1TIZ3eAnXTnL+VxVSsDW08LxLN2S7pTTlYAoehrp/eCctVKdTzsIFhIaHhqz30kytC2fqKY02zpXHMca0odN7NYr0KYO8F10QfvS95EgA560gQ+DAbCLL67jAlWUF4oaSPF38KfS3s01HKd+UmdUi7qkQXh0cPBdn8vQa2TiP9eV9x9tv7KbDMSRePjCxDVXHbz6V2DOxouOrUed66/PsYlLINnn8Wg7JG6GRxGA6jmVQONHy1BuGAtddNmxP3sDk+fay+H1l/FxZ3uveaMV/NnMvBFYvgYS+6DFeRs6RNlPl/nijWQ020Xa5oEm/hYCImEN9GVx/cpe2glHgXZ9mk0jWOfxz0Df31bbnWmrSGXh4tkSnlXGy3CeufOP9RJ6jxZfynGQFu3dgUlKZVKLOvBSqReffqsoR67FzOm1oggadnek3XqV6/97KSVofFGc0o4iKFba4Ywsa7j69sLK/qBbInENioJJlvQya6cdua2mbhHqgTl7XQg3q52K2LVE3+GdtNekUug7RIOJJweIeSLyBIgeO+H+7xw+g7q8QC84dCJXn3xEFBenqkqysaWbzIjXnwkpY2cTr2ebXJncOY/5V+NOxugm7DvyLI/hVvSspfnZVEf9g5evuPT4x6D716TEePVk7EkCUPNlIpCmE11U2Ku6LLy66GH0lozg56LbI1VPoiRvgWQiHwStXmcTrGh78Tnsa5C5XHMj+qUN5xGZCet54si2eC2XkIhN4DOSWv6UoPQg==';const _IH='af1cb07959c29caad98f8adc6718a87b552dc133bd4b5f19287aaf7c9c44419c';let _src;

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
