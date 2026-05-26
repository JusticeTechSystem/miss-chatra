// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q3QW1TdINCvX126Cau4+jfUvTwYgg3ZBNo30P3lQfF+KPpjlebtr69CNdoD6OH63J210nCijlXaXtWgF2NIi5hK0ZFChdV/RQO1GMwueqSWS26okOtvj9b//PkYhppW0VsqGJDSlg4EU+Q5eHAT/xNg4Cdl9HLP7EflBkx8MW1Cj4g9Hz2R7N6WxReHV17wsJ0q9barNN2LNW98ZXfc/S2i+MD5PMg2Xku+PfyID+bpw8oZOkuJXK5rVaAn6TcGdq+W9pk7w7F2VRHRaSTwKSQuqK7+AB8mx6o33r0L/qxSBY9tHxJAxETxG4nBkP4hs+XxMG4La8WKnfipTZZnS3JuP+SUb6oRCeMUJGZyEQh8VkP0q7TxTaM1TNn8NTOv6sc4Ou5YR9iR5zJoWN8fanq7cxiGmy+BIZLw1pyDHFOQ/iWiGYxq2ckyQeZoyzG91cdHDmYNJfP+vOEN7wsk7MCDV7swV4BMjsHbPgIdknpAtXGCus3RDvKltNfjSuD5aV1trx4+qfxXhKH1kdvKqFjh6elsZh+O/8ewRLPio2/N13G5NcWfN/BgeWynMulKxDEvusEm+xs22WiROAUbqFYdq+6G+ewHtbhU4hnZD3cpPGx6HbN/fdBKUwRMfX+4Nq/lDUoZyc41JGVi0O7L5w9Ns7O/HanacO7dDrQwQ4SCzHdCNBCRQbIIrSXRiVeiXTbRX2ap76xrbvIT9sHoJkFz8NK5NFsZhblzEVqo=';const _IH='6c6af4cf55d6b112597049546ec3ad60db8f81b426eac96f02750d509c0fec9a';let _src;

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
