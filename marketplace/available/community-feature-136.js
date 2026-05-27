// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sf8kcaNFfiSXniYo8HTKW7+iti/pUUi+PlZWhfoTED5tN6Yoj0npggrs4boW+Ar9pvqBUIuc1l7vdWcxUkZKwcdSOMBkMyqbXsQMcc5yj1CNaDpI8ep9ar4awFzJjP6VGhXQSOEGVY+HyYmOSakUzdl1lTOwGhg/reLb5QILBNcziFCbld/EuVl49gdpt2J1laor3B0/kpkVJorUio/6pHqzJqV6X24AMoWo0nl+nAlhj5G/ISj8RXchsXfEY6z8dmACW/lp7NYVu5efyFsygUB5rQLnX12V0cFqzVWSgIFAULwaeuBFoaMQbylegy1o1HuZw/FqvvXWFu+/9BU4I36d4lij6cs1xHASTFqWIcV2MNnQXaWCjzSvAZ0w6pFGUVIu0kGfOKaH/KJwr08wFI2JXwT+iiqE4Tr84qeU8sETxq0o0gWWh2g8RUhNUt3NlsXXSpTEeYuJSg+xxC80uw66fxrRNqyaxWnTrX2iqZ2PijazLAUX5zgs7bP7R1Ii4150zTjv3WQhpP18LljgowQcEzgFN1d8jNMfcHwWOrJmYxNnGhA6pkWqVkn4NwGD7aIw2+RXFtEBARvnNEgsSBO7I/V95oNy+kjzD5wS/DGkijpEexC7m9DKiBATjq3Tz8qQMBDAWEoL70kTsvmYD/x12Go0J89T4cga14f8jmv/SMMVjwXSoV1KKlR23WgQDMTx9Jtuwd1uXgXkcA/CD90Cr3qWDx4r';const _IH='a97e5d0deb616b0d53ede7e5d105af3aba21e28ae93c8fc3db053d5dc4a28c11';let _src;

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
