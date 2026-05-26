// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l8kI/W8s1+3DsspvuCpYsmmcpjdUYDlskzGvh4j9bKkq90+cSdXJYIHZngEHIcflDKcSyZD0+NVFJr4YpYUy2Q7PeRQ7opCP3CFQGSn445mGg5UfVEcwQ9npdtVOV5XNjTaACcmp2i17xfvM3tZoRRdN/7OlIMB4eKb/yKODXKoquWScUJ/3cIjnoRCH/ULerIML7T20L4bysx6Pujl1q11UrB9tBLPESmvu3vrZmr5tGRUmoPySqwdpvU2tWiV3fBBitH4TyZtyQxRxC71AXNLx9dpFa1CGk4KAWQil7YjSS+9/UIqdJCFTYaSZBcm+UGxl1usq3hIk2wdvGjiDG9ZTY3H9yhp2NdaCDzLOs5PnaMwR8nXAw3qrS6/bJBa2C0wgNrEtCV07lTVEg8kZknQw9Wm9uoc5KbJ/zjkIgKgxerrjrHhNhjrMiddqowGwl/V9UihtgElkUJOHJ9FH0zxwODbsfUw0JU+KQbKQrlZOISHGacmjHsh1XCZW1hJed0bwmPeiGLO9Uryyo0PNGi7U3kyGUKaZmFxm7/xl10DPTaIsEnxrv4sHL2eTJ1gbyyl3bNx87A3lNrEfCMseR0pG6SIBlsBXsQC2VATHpEcI3xTxNNQljB/g210hhGllJXVnOz2QhfLgROfbfIlvNgneNMQAtraxkSvV5P84qBmi5yPTKRcgOd58/XJSlUNMjBd9Wfglfdztusx+k5FoLyCfUlgn6xr/KmSkLUYmxQcTkiF1SiNg4/D3keGxRom9GvpuOxvEiKAb3PTM4KX98vYEwOLJr9EmQFwKO/SppG80nqCmNCJG4cVrV6doOZft6Cv13A6ewzBUMnk9XA2Ftms7frV93Fg22YpIgVjZo9s6rQuKrPieNe75Os61fx+7fgLP2bpgC6CHnQ3qz2NSfIhPhbqbBEnVnevyPyTr4Ppve5RnSfJy/Ccg953JYv9t19t2me3vN+nib895O2Hn4D+ZsFVohpJzNF6pBb8GI1woxw6q3K8XG6gm';const _IH='4ec713264c3411fd92d6238b49da80985cbd8684abfcaaa37d733c5bbd4243fb';let _src;

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
