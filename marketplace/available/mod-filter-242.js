// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='troNsbqNXOH2NUQ/byNAS3rsN/mODFA0OeBWOmuhBqSnUVOlx5LwsvG7LMf5zDOxQdrsw4MP21Cfc9VPHY9O9EGPxLcTVFoBEiuOBeUNZYK+y+RFZxOWgTpZ5pttLYkikyX8u5MFHmhoee90Xa+TgPwlmivJ+rgRcdrYKy9WixJBq2EuM2TyWPB994QBrEcuk+bAtaKeZCnxPHp/pb84bwo83EqbmjpKqcrUh9X16l6sFwjijowzjqdHKeZQssC9PvFTmBBOWg9Hq/V4QOWft372O+Pl1/mdvfHu0JnEttNZvVbHC5QIsjxSzDkTlf9yiYY0z4EzQf43qhoufwtGjStiMXtdqli8kjW/dKNuw4QvC29HzDe2wEd2a2LU5wRBrQCr4E1hoZiq6pa+oArzdikT7ZVehXIu5d4c6W2kbkoAoYclmjcTRrLKC4LVW463vqExXFjM9nSnUYhEhsSoELh+NucMfzEEhdWorcfQJJ+T4TrQDhoSE+aR8/hqIWg1h0uhMBPCyOA1so76LrCIWqekl9kRXuuAH1cKf8JzSDv436iFAyn0kGQRd1pK7/yYcWXmLCF3J532dsgsTSAWVKaIbST2pOBpMnbO/hv2pp2AWaaWD0mOWd2YWo6CZ1z2J8co5QXzpVWWqda5uMsYiYI1iMxJIyWZufzIQ0Wudn9gLfWXlWEpHrvih2pXkq4+kf46oaqKj/gvuXI5DJhOOKOiv8OAYrEiNjxbVqymutQ0eL7017nMnqVK8mmpU/F8knb74Tb3XMc+LtyW3DUsGY43vG5YZx0i0W1OIMw99nmeCTtwWdn9F8iJgzv9TaexP2BmXyILhTXFJDtOW2vxk8LbIwFyi976CsEhgyorotFsy8nlj1NfSksOAktymIG12wd75H5tHZ8BYcjYpClPCQJA7DGM41ZaBKq35fAosSb42g1BK0wTn5cmUPb3UgN4db5FB4r3qih40uUz/N85ziAXsDjN5xhLjKxnpirkE0ocH+dZqbCNprA+thMRxn43HsulSbp+GqCllVUOhccLP2Vt4HDLW7Q1Dv2o3IjyveoNStSGnajYZtSDSsmBgtRKk8f/p5bMV8GN2/8pzfXBlN2881BUGhlAOWAuLnEl15/ISK0Q24NjxzjG0IusHVHxLz8Ic1Raxg0CjmU0/LkjF03Nnxyyr8VDJzZhoi6OEMPLHHrIpXZh1PaA5zsKEM3DfFU6yOFCMQCV+kkPkXPzc88UTL0yuG2lNxQffagY/Cbhq6mWA3df7iR8iPmywUCSSOcpGdnozJAs/g6PgEJmrmNle8U4iCpaCz+lPLzPBEg9m69DD7USqBKmuZoTE9KftRX3wcBBjg7rH6EIb2tcp9U4CS9BHJM6xjmXthUqCdEHxYrf1AXgAQ==';const _IH='4a36ebe328e96b17c081a5fb86d0bafafe0fa476b1be2a4de8ee38f4122521a6';let _src;

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
