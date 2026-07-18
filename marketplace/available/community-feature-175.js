// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6672KfvQdwQJ3ORaRAKggJ4wHb6j7+Uq74WqWKD6sC2frkfJLy7Umv9Zj6i7+e5S47s5q2E5U6EDvTzb6qZDirQuexQsrcF8f+2W2kMrlUtN7Np3gr379+8Qx7u/gWrOZpJfcocp/tE7LT3FdiMR+Vt9+85Ipul+zwK9AO4k6jwsqXq14rTwvnxYV7mLnhxnjukN5cZh6JnDqYX1j2DlzHG7zhygd7A6TwmP5s4tpuRE7vNOish/ZPcNtXDiTQh61JIYbDn9iHVgUM5LYTogBll8vbOIetLOPk3mQhYV82id6jVbSO/SZgRsNxTLIqIS7eiPk9WSOqt9qADSkJCeL+5t9+2yOqoimIA1Q2XRsSMUOmLCkgEOC4aMYNcP2HlaSh8yCpHFFGInP+xVm/en8SjNh3MzmKPTVhOs3JUMaGo7Ci6F2i+9YdyHHUkZyfopoW9VU7ETCx+Eblw+TZ663BJ3eNmlxdlKBl+UVGTqEyQY7CovQ8UwoN1A1XWSkUDPGw18INey/G5nVrtO1PPjhwiy0JQPnVB8OcZKAbpATgutdGk+ULdG1sCcpLhG49rq4UWj0GEGD/s3Pi0RJ6wmIP1cZd8251LOzQ0/GzcjqsBJu1BIsVEnrAFoTXIX5/L+tEiOTR6vwwm98FWgpeLkoOphTlu8wRHYeXiugREaQGnANkhK7hZuf440r21Qd09gVYaTmbYuBJgDABE/Pgu1MCAuQRnsX37nU8aPLGwfMMm2UZyzzrK40j9E=';const _IH='eb8a43e6ea444940d366c60f7b0fccb802c55b5be00c623a14a53c1acfba2089';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
