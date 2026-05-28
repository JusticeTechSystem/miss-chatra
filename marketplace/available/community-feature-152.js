// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r4/zLQ+MBcfsPqT44LdxAcWBRM7Uq+Mw6a6HRJbBCIOg0WsIpizaDPgQSv3NFL7Kktf5+nAHY0PsdLgVXqtT2/NbMLFPEcPxub8n2cxdNrsm3DWZKnQVWcH/bqbFSvUF+IW1C1ssI9rj3IElMicthN81CSgqhPHaUbVCmXFctFX0OSkcBIVgOy0+viGimN8FZnr/DH/aBuBZ7HjcaL8cfcu1J9lDC9KW/oStwrUXs8LIbx9Xenhp14WW3O0mP0/TweYV4IKpvlrCmYgvcuwnCytu+RInRArRN0n11nNiSIvP+ypb0Qj1rC62EGzL4Mxgruhf8KwStaURXd5SQLRaW88V1xwUkLnVZuTgegoKf9mon7rjymxxTtSKiCud2uAE0fNzwhkD23vjkrv7feHr5nwUkn3FEhaa1DomOudEbhy1TOLMr/sW1327Q/1p/2KG8q045c/Ur4Tyvyw+wjER57+KY1j82N/gLkh5UncLC1S/n1Yif+VE4jE6nlr2j/p18JL6XMsUgZ+smxMerQ5OAX9JeLZcEaZ27boMG1y+8Avu9gG64FC+DKKs8Vez6Y6y/3FZMNd4tQOmhod0a72I5juBQ3YbBwQVRpD517biREAfX1t9YP6bKEi8NQIWUwZMSASF5c6KoXPptC6BFnKb9PjUFdJxnsK0395ByCBtnhVihLNz04ATjPibFeLuVYkvBv0V7qPj1ZlCC9fcEhENhMCMnpWlqU7UnRMYW4nPTxZxxP8=';const _IH='fc564f2e38c3570e8a807bdc275d8271186f87f143ea948487a6aeea907728b1';let _src;

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
