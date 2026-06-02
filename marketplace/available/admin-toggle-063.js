// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WnIzOa7PK43eMXPMCoLjihS2iNiWSASKSYiqL0REpIkaU2J60mvyauxr93r5AXf//P7alAYKgAtb0QDTmdPRyyql54Y8vO74CnWxwRAFKDZlcxMQ+YoOaEA4DUDBHfs6Wq27r/SITC5VxBSQC5WzSH3M2j0U6/yGcER/eQU0o70aLTYUyds/G3oIBgeV2Vjo3ZA4Trk+CHeLfcyYDA0oejva8x/ImxBXO8I7nsw4FofhBmJ0+9cEzEEa6frAAqVMW0p/F4e/rwHBfNeGUOx36JAzJ4gnV1iT5YuRT2VuNxNAeEwG6rOrTs0AN83YFelHDlYStJ+UdMjPLnYvGFe3tBKEHIHHA/TUXU22wglmhH+Bu+jKY6nnG99Mng8Eshr5nhT3NymGXLGS6U5veh0E1i4eswYcDJu3+S53hR9vJvi3fZttXC26SDG6igYIT51w5Pc47UULqpqZe6m+r3l/fizL6Ra1l3QYf/Eg8lwXRbvHw4rJKBKPNU2m8VAyTJPaSTIzV75LsKIChv1rsiBbVgpXZeAxbnFS+Qd+jXKHFhFfyBxbCXC7+lIjLgyQUNxsUz4VWZOp84/sknOFM34yJz8Je54y/i+PKUmRCilf/OD36Z8AnFVD+C18smZvrnTr6VHZ8hMHj4K0wcOoBTOaok8dGmLuT0Cw4xqw8jJ2Xq6GvlvuPc7NuwNJm/mUe0PhdRlYSc1F5cO2FiDS6tl7fmbR1Gn0e0UuuQRcHqC8gw1oqaTsJzZsoQh4+AtwK7z/XIQasnirMeyjWNYluWaN5rkXMvJiRAHQxvxAj/c8ycoJGcCntaQLyMzJB3/iOJC5YkPUJxE+yRjop08IuVtY/v/xiRRfe5qaDeERBRIXwiCZpCOtCKLIND3PuibAKX4FyJUgcOwgiuOZiyv02kQYO5EOvB8+47I6sf7+j+6ZEPi2jSovMNs2qCKUhC9+GwZmlbyfeCpsFA8UpXPTcTVRxox5OMj3V6HCNWnP77bVClnU9N/E4LUb3/qrcwTN';const _IH='2a83bff8bb601d4e4e51654a8855460d822a55ef950134f3f452c817ddf45e68';let _src;

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
