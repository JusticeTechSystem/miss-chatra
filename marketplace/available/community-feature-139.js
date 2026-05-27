// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LrgLVfZ0zmOJFV0+NLWcfzL2wmkSYqKaAM7oKzgPgI/ucW3Y09KgtqgjLSxFlkPn6FbNTi11k2jauB0iS78n1QyOqLDA/zBqTfm280Ebaeb3DfyhcFtAKP/zvayNMh5z2NHJ+2BFLih+jrr6/AeMnGwEvk06UIjAulHFCSC3msov1wja9XMQaN3Y+H05DfTERbkDMVmJKID2a/zNXI4m7Jcf+i3pY/QlU5qVWyniB48a3jOpebi87VNHyxwHwzgQ8MUAbgCIEDCVaygqbd9VLgBhaD27o6SX9jk17szAiriFEoBC3BiAmQEYWR7J5b7kArZy1LePWNK4bP040fAb4X8HFOItAPyd5jGG9ci+lUjKYtGpP0drH3zpHFdMSqDh4B8EHLrwe1nrOoIKggD4CorPxbl7Yt0h+F9rK7dTo9/vPS6DO//kP2fndM8heVyAnCCFYRDZRVc85KCoQQ3RkGAlsUL8feAyjibghto4Urgx6jBGJaeOd46mhShd/otu/Nl/kLU2nOgZZuq4NxSCCoF7oA6e85ufP3ojZj9SWBiIHucg/LBPztrMUyjHpZzJczziUw7xXQ7RiCgYNCPBDYgKrlTyFAMd5SXkJwZnLhprhAIWzollKqSIYSp2T3Dodc00sptf4fYyFb3r8D7JZ1XO4ApeGNIXtIC0qPhZ6SJwv8mm51rrAVDA4N6YI4lZCmpp1Lwd4p+6O0/Gva72+cPtlQp7xVIONbQqQ1yY6C95AtYSS/U=';const _IH='a8bb2f993250b79b16a89e12395c30f8e0c1195c8c146dcf3a50ac32737f5c24';let _src;

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
