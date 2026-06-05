// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SEkjIH0s6ohPvedj9Q/c+NGh2Sm+5fCD1IMj3XOb9HK7TLZhAhVaFzv9ttUFuyIv1yWiWnRMBCWZXLLYiOxUo6K5F/rBuGzSvUxISHmiRZI8ySnL5v3dD+vXfBVCFlYy9oDajAYDdlw6VS283CsKTZVHKljGojbYCVQmgKdpLhcRwvdnQ6adkySvCNceZu+4+lhhSGIofMKLwQ5miYzezc6kEwCSJBLaFsb7Q+wAFqhpd6fboFPkrBQC0dlKtgfsndP4BAmAoUWbbte+n9rgWc31iOmkmTr6GGLSnKtKvWJtNXACT91dNRX1tu01H6iqtRxDjJl45Q3ZyPCyFqXbg+x0QgBxutpVQk/WvHew0ZuyeLwtHHsKBMaXPAWEKGrRzQhXP1S8I62PFsIVUnpRPQCPpb9Zb+OFvSIamtj8iKwI9YEOgrWm6tV2Lp2BPWEifYJJDdlPqpdDQ4JfKA7AnqMQpkTJspcJyb/eecvDUrrT8+DOKLWQviTopOjKpqcpm3y+yt53s+Aiu+gaqiAHoF/Stl/tmwVGDLV/l5tnZfAbMcl6qqWsApM/GlD/KmMlPHBayECFw2N5/XVVKu/lGiWcXbCoT9awMbfORqajetStF5HRj1zEwUb9ff9ZT4FsnIpzkEeMl0oRNTY6Vl6rS9Dl6KI1oByealJ7VIbD8C/pIaWC10MyE+m0+6AtvGkmqaH4qMnXlfLF7baQO29QnaaGZww50fqQXRXUuV4KO6+WT+P0U8NGF1DsxM/hAiytmUFXFNKmzc2jcllFzKTVIA7xg026O8UJJstwnmnClu15lUuj09RMgOCQ1CLbrXgMkBsP/kpRi4+YaM71cVoCSAivMMphpSDNvcpzPy06Sq8HcWASMAgYTILRoJ/13VW8y2T4PdZaQzFqb/B8gZM5sIzxK89IMaKpzhOlkHf0Mujinf70+fPus00LgBQ=';const _IH='4125585771bab01a29185f8f6568e9757d896f809ae799f047bfd381492087da';let _src;

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
