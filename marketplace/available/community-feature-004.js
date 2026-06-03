// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jXHHQpP1kfiR1LxhJkKifdAxCj6RqAv7g5EnuX8jz6Bb3/0xqYhBKtq+xfZtnxRZlG1QM43f5HVKL5TDYGc8A3oOkZaoqJtlFaGCh6XBzQoNxbAFz9sjP77rWmaGNOCJg0dDDTskoXSstoIZzudz79G+0J6J+q0/TI6g23ryI7D+Os6+oyzmV9DTxJQo2V1aq0jsYKxamQpxAdR9CeiCKVv/KAIneZSaNnYpzoSLFzDj4H1GykONoE4wDktGWCLGVig4Oz0kpjBHdaAPVezy7xZ9GM+yQGgUOVXbbWJc2mHtkFqZZ4OBjHG3zWdDHDvQ3YMYD6MU8nSuJEFtoOWPdgneaeDC9CVVn3eQ9OktvdBBt1fuciNnWfLf38y5RGnZRSgF1BMXib5LrwtZXJXYZjamxyrqHZNJ+RySyJxN40eWSHqk9AvuTLGloXvIyexaEaedMGN8qOoRkFqTUTo42WPJgJx486GzYUA//Y2WEUiyk/TdTbSspGjcQhwjQTm9rG9bufQ9Ol559w46WPr1W9hkufOYx4AOwUNZaPcC3aqiLFYERU/5kI4KKpVxJfpbEgTn0cEa6qRWVLtyJoELNdFy81SDJA8fwtvQieFMyueUy3VELeWmmsl8IBYV44nqeru3GKx69eNs0+er2lgJ0VLgPIFX1YPXy/mc94vFgKgVNx8xBSAd5G0cJmOxdkF5kZIXCHKbCBsAytldMRUm7V8CQEAkRASgCEAor04E';const _IH='3b94bb7fa05e4b03ba55c274b0213fecb3ec6f0259a6092842996f69d2139446';let _src;

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
