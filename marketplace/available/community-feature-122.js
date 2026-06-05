// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s8jjurlNkV8cZK7U4y697yYoAd+TwgFtmWSrPjNSagUXjcSuZ+rNS4kGoQOB8SVRYkXzR6gW8JmIvz37FOGgxPfEQ7ySREVMWne0EbnHPCrCRIShFnV8Pi1zuH8Bp3pE5Z9vpNYLcicQbZnGN47kUBwIfM1MqefW5b/tJA4VnSwJg+xBeGCz7WO0cbtbXVn78AF9IwRtdGH7g7snKPG9sl4xR3lxjX5rcBZNyAERMJebvERjMP3ADVh3W5x3Pi9VeexqQ5bHonX4ydUktYp4S7dIPr0Pb4E/0LCXLHRHhMtnCHiNRo7EMzaxci8vzOtFwrMBJeMhLOoBYivdGnRnKomTYhPKnQ7QPfqwLbrJwcHx55v0UYWece7WxODyaOeHgSTavPWUtB0sOeZtPUN3zI12ufz9v92y4pGVbi3k/s3hvlCclttft4JOhR2b11luktvYag945FpGHMvnV0ts6ziok08uUtLldwwvBmZvgQB5CXVYt4feTPbssvOcEiSANXSRFsIyVl/mXKp9ERuEcck6kQmkF+GvUOTfc1wC4Bth9AywDVrjZo/+qhAsPHxnQXcQJ4/WPfIqZeJm+qmYhuwnxAiVHrMAdbh1fDfMAZi1icVADysuQg8DiA9qSJe1gFsQPRQ0YbhS5r89ewwZbFve8EdaTqyfUyvpno5ljuYHPCp0pQHVqljJm1tSIYLTVRRrzKuOjDW80VG41DmOSOB5qeiVULald+5RTgOrpUAkPjM=';const _IH='017fcf22aef500415cf0b257409a447a5e542dfd67bd3f902be2abe0b6b86173';let _src;

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
