// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q7Hiztnk1d6OgC2Qtfhk2p0cu8ex69xe94Yh7zbte2W2S7ORKqGemICLPX2k7zqj7JiwZOpL2pgEgWtfLV5pf9EjTULV6LqQEYHBKwYyeFA/sKY3nw8S6/eSkrwbF3D6UT9qbt+yjfiTKugc5I5luX22kNtQwxECVIqm8SblXBoov9MqD1isDS7CwWWwoLJFEG8CnrTRvDxnvSlKxckcnm4TalXrJ8mUhYXMXsta7dSsLckVnsRuOjP0Pyeb3oo2rNwk7dxfJc9lZAkTgmsXfldyPEnrBim47ugwzSZMzfohMMCsdQb9OPZu4ND309g68SoaWjpE8FHQn/0vvuO2jm16PUdefDyKvTsc+/2D/Sd37z/IdKPFEg1dSraWj0uf+DqZnzm9kOwBgvm7dKMD2eFSRZXB47PLP5RRKyz0YR45JZ9zvIiktJY48YrQnow9NAmM7lZo6zkqA5WY4ZHfNgeB6DlNE6TRAj4k5WQJb5LXQigBoWhEUW2JrASI5RLVhjx1d7nxyknoj/dK5cgQDNMXCVepU3TnCDZpUiklf5xH4VTgAJG/EWemQY7X5t6OQQcDqobIN7GV0Iusvrbmma6b1h6suDi22jj276lvmkadIXOvm9A+nslo2DzUzAyihzJSWqFOXDySMNakYXGyTVeczNSmEb/s1tZP7T3wQ19FfLUbW/hXoA==';const _IH='5d8218c07f80675afa84379be93648c913683c785fa07dc3456d1d02bbe7d67b';let _src;

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
