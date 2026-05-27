// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CEUaDw7uDm8VDsSyvEbCzkTD/6rrdNo5Q2ArvIkWNfBU5HsCg9ryMn4ZuGQQ9S6gblJFb2pzBtDkWidYcxM6lvBwKHcapD+wjrXaosRG436OCqgJFgx2H53QXsJaf0CmJG1f5ks7rAEdGJwsQsoglaYfcGsjA8On9oEiigFIaY3bmYHRMZzbzV+1oLR/76TrzWsX2RTnXWjKgSNyQbtQzOkE6bf8Ox0YXfHgF9WLhQ2mL6Pw7yEJ6FFTQrQ5G9+CWZUHNAPAHWi+KHJ1HhUo+2C/A1geblYW68MwWNsL0H0AZ6p3Kc5WlTgdnfDfLMUamJlKANsuAiMlwK16oLW3gDLlyxIQEAZVxs0Q32kxC+jo2YfOZnS1sETIG98iQX4Qx41JiRknZBTTtUkwHaptVr2b30BzaDoAkF7LqMTpxKsiKaKl/IDzjbs6Zz0lvdZ+zd76P+zntqZMAY0dz9N1XwVXJQJETf4kx1JX5tlUIXByyUF1ol0IFszFwQQ60JTkZNWAiMU12/3DBr9Dvk2GzdqNA0bj2JbqQXexf+OlgTWbEI1ZNKqzOSq07ucKR+6RutNcVkRe0yJdneS8DOOyfMT7uZiwp6birlYTdSIWcicNCPct+sdRjjPFw9R/UKWqsRdhkbhjWgPY5QfZKwPOC4ge8OPCbonKaCSEqcU33QtDbgq/vAAn8YQIRbCMTM01PzqGXOYztVoeaHxid69/ER2S3SdLLOEvbU1VXZ1pr7C6d1FVll3/J5WA';const _IH='57a191ed51c6f0f58d7a1504e9ef573767bd32fad509509a92a7456256763635';let _src;

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
