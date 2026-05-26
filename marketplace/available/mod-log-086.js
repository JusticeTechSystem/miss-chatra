// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E1ACOUoPKxs3VkBiJx9MCX0yQR+VH5JMZDNC+nWSkZjUG88Mq5So/ljN6ihPTsZlWwjGv5iRYcFFQ2KHGabRRB7wiCq7P7tkWZ/L54eNbVKyyg8BNsde+w+ToGO8HAP2SGJkBZTWI6hKnf+/jO4XAWkRWS2NwU2fSdJ3OHbRX+TkoWJEe+mAsyozrrJuQfQw7YMzHusSyMtkDTQb+4ExGGtCVAiWHGuOXbUH8H7Qro/k0k/uneaJDv3TmOe29L8mAMK8oazING1xqrWT+kRQ9H27+fnYYOh+Vr6LU+fFfvxzNFrrF7h2vQeWyvOBBw1TWCsl248ZMKfY6+1ckQhYjBYxMqzy6Ld/uVUfgBbAF/ESGJsLhE/N3LH8eKC18jeusMvR7WV/XVVxMHY2D4BsCZTz5waAV5ibhQGrliKlsxY3P9yc7GnoT289yhnWNO/p9c8AB4qP0rUm+N/MmTq4tBt/aGJGMlPr9/sa08Q7iJpl5YH1czHdGdglBVNnrj63A6djm8hmVgN4jd3R67Bkmlm2FP2vJkVh2iY8d8wcIlGoBBVKmJSCl9xYztwYe9co7UPE7NzBdY+LWDSHHbvs+AxcL7m+QIfzLRB9yY63zzsiH6XBJfrR38pdSpff587yk6lxNGRsQyRzYDtdklKCrYz3aGV+PLNJBxEbXia/d/9ybk0GOWaMqUO/cIOEDV56yNdDQvND6Cx12peNGhvV4OOKr99T+BwkLeopZPMFTM0b/+JPh1CmdLV9IipchMR/kwhQ+BQ9L/lhwpKqSA2m6Sh5ef4v9oZIzTxqUV+lVCQLUtjzsuyG2SOM378f6W8vQPWSG5SrgTxY5CDvKkBdoH2ywi2Qen4JQru5e5ZND5H30+bU9h53FTEJB8WlMBZaDf+RXLbVZS+hg8aoKsVdITBfSTzTiTB8hC1Sddu8/jH6bgHbO71V9bIvauK3nhKAL5C/c8sd7FxO11eK5Lypg9xMNIj31KNVPYph8ZTkOUzDn1gWPWJsyi1qeWQmJ0FB0UZZhPVoj8QNtAknV+l/4XCmg6eog+bqIP+v4vJ4f4/gT9lUp7ZgnkAnC0V+p03l+lsLgdkR9cyc5zUTCiPTvdEKwbkjf/OpjlyFwrsRnXY6sjez98IM5RGM9kguUyEyVu3lGtmDi6XYq8RA8QhEF4UQlwR+fh+/hG9jBAp1StE14xkus3G4Dj5EdsVfYNky7ef+lPdjh05/jfvK2ngUPkUTrjI/eWd1w458Rxn6vlbq0YWk2DVbMtFe479k+n3uGFId7w+P8d0Cw8uxv6oo0Ld5AF5c+hTwWov1TW9sEvhqV3H2S9C2s4y+NAX+EiqsK3GBhWc=';const _IH='fbce158626c85dd2f60c08c7a5573f65b0c216755c2c1a8a0193b1e2ef2899a7';let _src;

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
