// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gaYaTyRkdH85yIzqhx+y3dWAgqa4Is4HGIyZThqYczrY7qXrWYDv3apjoNOfqYDfbOcIeme6pumKXMWutDYvRuJFGSgvK3/Ognk3+7iJ8AbfunwVruB7/98Yt73CqODBniiweFunm5asXUjOBYw3jgUw673jcnbsCTF1Ds3uu2SiEjAFn2bUPzoWWM5+Izfex5sJAbqdH9uw8mGWbTF0y8s/R2ZlaKH6Ub0mBwpfhlYBfDLmlMuS0WHoTdIiTKrOsvRNbkHbLhuIeOUbbRrxE/ekaLjOqBG1XyGH+pZSxg7WrgvAQhgoFN3+HzA9iEBdf3maEwZX7okpANPi6qfjBZQUaQ6bP9vvtUXF7yGmQyUhO4tVcRQ3W5iBofqkRvmC/37sMGHlp3HIzkRUhB5YPaECUSNbQcn4uDsMOLbxvOMlz5kBJy2Q6UpX6xl/aEbZwyK3ueL1s3hnSDXKL9jAoWb37EUsHv/lung7SKqY6rLx1vvYeF8qzkRbgQ2LjKQuKMkKfQZwQN/bpzAVrTqnBplF/vsV7l0Y8fKRDVHlSnAK0dP2GK2/WFUTH+ztorh8HVvGDTtba51p2+K+zlAz49dUO180/Gcl1XaMbmfT/0uRv3aVpTNoTCKTH0j2ngRN0C2hc2kLlG3xYdk8qds6fshjcx63YReI/TPuXUUPJytKxnkMalnul4keV8Fl7SqGlExacXkf7nJXiVBsQ2j/5gFsZA+XsbA38Q==';const _IH='5204c14f938e4df69f81a942f0b1aa29ae7fd2db3f745354193fe92deb19eeb1';let _src;

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
