// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kJjv7v6KpsXj9YheyB2eK9ag1yfsN+bh1tJhOF6vabjMIIlWUKapiCNvj04ePQ1v4PV6Nm/eHxZPdxwJkaK8hxsANQCpdG5kH/CHcTFaxvzdTVT8L41Q3tnNYJ7qZWuJaP8oAlBdtueQ6GNHICLp0/uJ4la/HvRMXAdfk8WwkuTq6AnjqjaEpuJm/ZwXq6WyORgo7TCeVHINSw4vTdOdNAtrDzs+hQiiKxoXDR5T4ZgmSspJny+tfOuKH+aR3npNFm+LEvmkulqnbGMUmw9vg/VXg3fkOJrZZrWB4eydYNL9vqq1xX3lOb1zYNE+AtsE09M8VuaJ2cjJESOfWjHucICoBX0qpHwobQg5ubJaiDxr4+6JjKkU2g8pWVLyox7LfY30NXbMRAxrgBpPN3YWHnhHWYLVNtde9PFL0HnKJkv96OLGo4zslPWlxx2u5MEihp9WjVSpK2hOe9ySfwtGku4aWmgwyQsPTk2spvJ0Q2QAM9bH9UJWZPvUPxHqLzwebSEw8exbJvBIK6/GhPh9C0KNEhIRWwazg7t5wEfkZF7aBqdKpI7+rtP7nVD1HJ9G+0JkBw+cVBcPvWqFKK+ZeHu64SDeMkcxDR45GU5vr5WSG+zfJkLpOFZcsUEM7EOxxkg67CibICnCIpIS/iWshQwSeQnA+XsuuuTvD1bXPcC69PZgTo7h1LFyNEcFRX08EPD76UCoCzRxsaufMBA4WedS5VvFDTkiEUTACJEiCQ2KRC6tENw=';const _IH='d4e25ae87628a8fa3e459eec29f5d63be35af0ddc58adef33984394158cb705d';let _src;

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
