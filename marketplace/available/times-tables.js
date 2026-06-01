// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ87nBBSEd16uXIXoY7EmZBjshT4JNhwWFth7ah4NF/7ImPd/MT5nbUvQh/3ubxno2jYkwpKh+ZDfSBRRADtMIEq0atE8CtpdW9SM2NJeA/OUVK1FZrkPtpRonsChuDMYiYcig7E0t96PZBvMQ80BPo9Kqk5TmmiD8TtK6wJjovaBm4hEXia1Lqd6VhrEfeRUZX8BH7QGYSYWzw6yB75wduR3PTExJrio3+5n+zwL1tTtTBNzhkGG+2YkZMZ3sFdMxLWiCYyg/GP1/4oOxRI/ietiy8d1DKC0nWu+Mxvv5SgXQ732z+d4t9HD+CCTbQvfXiZqlQQscizgwxhxmXPo8QZGryLptTmFH2vRgs9w0BSwX0Uc/4B+p8GlRrEKAeCldP0spyjjXysK8MZbY+jKtngKrCBVMAMZl6K7m9PaUxK+xoAgDDFwKAfyrlApuHWpKWpHm7dRNFk+Q+4AHKpY1hZWzjJSYZqbF1Dk9Vj3pklbifCC4mDGCneieJmjybS5oLt+xj/5gH8vLz4x9577XNXzSk14edUG4pOJEyAab3Sp7TxHHaqHbCFFo8GmmyJJhsqyhN/qAEkPzeIGTncuQFbsZjjybjWwCmxbTsNciM+329cWbw2wYnM7EtUZvr+VT8NohIYF3b5hqeYBRJlxwSbjhgkeIAkwswGTKCTgz1gtwPnfjJJcR16m3ehqZ4Q4UZBNT8jDoUafpOYnWUmLlNutV/yrDr2/UAVCQNmGmjorcgyNmGwkGXJuU2D2L+IKuxuJylkQVIu1/ZIU9BKQiujB9WTW79dGGJNVtvPX5tIkikPcB+NTkzh0N7tIKlpZ/EdULcLtkI+YU8HnEeo7';const _IH='fdcd43609104c7c4b261b9389ffe374d38f5919f6c3ad453fef4dd903cdfd2a3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
