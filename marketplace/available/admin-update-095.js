// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EbVSrSL5ZbySyUDAAz4A3G0172h8x1Xw/lKAi69LgxX1cHJpGHJi6qC6DDxCcs2cCyZ8WHO+VptiFtXYeNLlZejUkP84xm6bw+46IyEXqGCQlIw60rHYGfSK6+TviSxAcAJyEAK4q14AWtihz2NvAwa6gnR+mJobDEGgWrT5/tWlkA8Hb9kHxaR3sKkGKs4CFg3x7xTYjCW/59cXBv4FJqOAYr4GZmicpLwvoEkGP7YV4a4aQNA99Bi07ofio0Z1viAtpueaxFcVVRIIEXxNaWUiBuk5iAlMFPFDp2bkEVFRBtcR0MP52f1XhSNU5pGHC+h5cEY609/JQZZ703IcCqmhFzQSAR7IQJivDfIWEClqO82sC4d+V4N8d87oEH8rBokChiJVzhL0+8S6T6jpbYThUjKrsePb93YM/EB8lawJ2alBYILC/QWKnvf33XM9NYSyId8sbRXyC2diFEtuPEgEimYlDNGiejZV5RbdYHQxuAIF+0lnbHyB0RLYm4Z5B1xYwyftUJP2i7iRUeiBsok3av19x7ETUXQCx/FNTg65xQT8dQ6MJlM8zL6KyjkD/dZY9Wiv+P/I4b18QEdfmRPdH7umZx9XSTd1kcyxiYYtdqoxHg72eia7eMRoZ/8U8MzMdLKojde5t1u2t3+4jUQNYIk+ArL+NjopGuuMk3q6WU5BBEFIAvefcXl8YDTnu77Z3/GR6j+9TV/hdLbQnfW+yR0GrdIr6HXEtQ0cIRVbAFeFidxqnxBey8mpd42SR7u+ivvz39culXEgxd7ExsjIGxpfHo3PWqjByCH1Kxpews6raX/PSwbjm4kRSQiYM8ec6ZXNUuIW1fKBkG9dmza4iovKQOfgICW5OS/juRCZ94Zi36vGHnwRG8WYrKBPm+3N6smFqVS47NXvJLVby6Dw2DdMJPVD+PZjhFJClOgADrQeODMlYz9rb5L0SHKyx3UgZVbIdKp4l4hPbdI06f0NqjNP3pDmSRve90gY8e5I0IC1A8tf5IJNiHFi';const _IH='e456009e4c53c9a832af080be1b3d81bc57367e7a5986ebe4c49f411b545c064';let _src;

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
