// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='byXn74+AQ6HE2OMm8VGOOSFhoG4tjR+TuEy8UC1QS6wnFr6Lbm+hgpn1MbOWHHrxiawH4F0dK8MuXgU1vOUByF5bHcNtU1FTzVni4mySWOuh0ay5n0fCBW1myjHv/RFHCrKYmaaOtK92ONU3u/YfwqZnxSCVS6BjUfV7rFxQrE/k8CZMviJ3QTHeaJr6hYfSBhFxNpzcHUUTYQvZP5+7nFiZQHTv+HreNcFdQdHOjeDEwl98BUvbL0OcOPCcr3y9oLqQJ8ePRf6J6M8SvR96VCIr4Bl4qyic3SS7AuVsmpAwb59I33u3Oquc2h5YZp8Yuath3TvutZgPi5PVG0FI/3TWYkDlkOwkNubVOMgIbBG3Q6YD8oIjZuOJ4Bs9HlMASDKt3ujtAbycK3mDBoyNdvx3VaQRTg42ZmYx3ktfiZnIWUCYJTjYTRIZ+JBdgh5+V6tHspYe9ySBrH/eGWWqBabILA6syScjiz6hZ23w3FfCxr5/8y5/wjT6bH2VsGHWZKFqvcOVOFpY/mfNPKK6kMymLkC5MZAnYamAi3mJXlXIjiO0qYm9I/vye0QIJLkcUeGa8FVK0JpXKC+5C2g1DOZ862sBFQQ+tMAMw0M1Tm9gkVKk5xOaaatEzhCUwf/HblttMxZLvwKWOcQKlspgl47YaZeRUN+c3t/eaFlK2Nbx35hNDYKzPi5QR1ytqOEmMOg1qm/MAUvMJmIwkW6sKx8ugilLcJ/MOKPCr8GUOtqUX8kHkjmktJtDBz1hxfCogy/fmlxdkqLVhTXLO4aHF1tBjs5fuZBXcd2mZlAi6YixtEZZnI51HvStUdM39+oUZMb3EjtnjYwEpGfBeiVqKpA83xAQ6Id/UKeUooIg0VUqsKxNonbl0Rp2ncpezETcmT0h1BTVpcPDf0k/NBCxuj0zqDEQok4FcLez2dwvh57nCYwlTeVcBXUOCP6kCiIGKnbwmRZDxzqItaP3Kcxz/8JWUF4vjiN1uMOZ+i6iZp2xSyRSwf9OGuXx';const _IH='470cb693247b5c721d5a246bf4557343a9e57289c72317965850fc6427522b04';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
