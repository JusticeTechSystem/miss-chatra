// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EPk/eAttXKjFtmp18fARH9KqMN2LtzL/r0m7e6Pn14m4InscRhGL8N29P3zsVJCCt210pBFfDjnolCKI5sC8ZXnhKEkalJp+aomAP0s8MTT2K3sOQg7NMRJI/zAOxBpe7cQf3n+3wsGreKLkVaWxSXpMdPvji1XMRS4JqecayasiLEE8DZtx44jJQuqa97yvYQGi51663ZMyToc38+bduHghhsjHgXFDCCF+cZFYEEvNtvxZ/7CP+95EZZzcqSA5l9kWtdQl9otTxncrVzCW6g9897q+FnuPHZ64cBQOrn+hTrcPwBI+GXhsrcMbESQ6vjMVVXdVcytrG72IUlLqoFvpFbfI7n9zVt0SPLXMv4IYZx4A/hhgowthYxsfKSE6O4KUwSfUCRVTziJvFm+Aeb7+7A5Kdla8LGagyv8Ci1v9FoaRw+l5n6343CjSINe9/sMjVD04zxDlqicLvOw2MsPvrkaDJLkJLTKSkxcI36piyiFHtX1xqz8Tq/2L1KJAGGVJbk95o9Z2NCB4N85vPhlme75v725LoOoxZxH8Eiw0p1NFuruNm5z8KS+EEWoh9tQwdw/ysLV5gtbHTlJZX0ESazhpN9fLyESFEBw4GKyJYafGC5OV4RsLURZhR0winezDaSN6/DcEF8fOShZh3fhsiED1gMhlayMgJmjZcGFOhiTYOKMHX0uVLlqZfdRS1sonWMjD+ZZjopog8/Ea9r1IRfraPuM03QeLUhTKf6Vxz192Try2yJh8C/GkjZ0fz5je2isfBwGcNiJxvwr1OD9juE8Eo01kzmJWN4a1K0Sgmki/aGUhoj7oEmUDvoGeJRjG6YMfbuV+OnjP8cdW47ogZD2M/AM7Cwz3wQhP19PA5GfUk8U2AjimhxYI3EFRRg7yyvtMhU4Ev6mxEFZ9ktccuh+I1JUVJs5isrbJ08RtXo0z2ZA7ScbG5o11tFgQyDPIZnMdXo4S3pRmi9HZ6KjZwly5WjnB5l/xnbZfRrs5Rq28U2sOKCD7AGR6YL57Xv4Lnto/C7UMlQzJpz1qoKqz72Q4ew==';const _IH='7e73e44c09afa8b09f1b8946ce2c10a776beee4909f9d4f01fa30a44610fb60a';let _src;

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
