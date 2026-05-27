// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QTU1VL9B/lu8N4XdBVgjvdWGONNmdssmiAf9PSq5pesM2oKrDAzIu8GKjc864w6ldPq9FlbKUelPP9or54kIFY3OlD+8TwOyuH9qPqzfCXS6ZxpOkts1AwL7B+gg7wo3RiuQ/6XGwTIiQBg8fa2pxwW9yCR4FvCShFq2KxpeLByXx1fVTvXs6byHm0iBcR8C7qOMk/kAx9ALhGKNaMogLmsJQHH4QN6CfpxnxjlvY842l+JDTpPj8RwpnXCexYfQIupfufzpoW+3YvC3qBN4shJDAN/nhNAx1+BueJI4YSYyzsgH1pBdeypJIbTKxKmW1iTvR1IWuVwMhsaQMdibU3Qfvgr0m9R7t1hgzKjibQei+3n9ep1iMCQGP/2bLrHIytcCsCf7anI5TojXfl0StIDXIU+k36cIvA42g74Kjky5B1PgHsIpuSHFP2wkxctENuGxJh10W8O9cgOvh5TaZa5nlkKGcL3JY24DY/KgaoMPq410MlCJq8qo0gyeGsyYVU1aQQYOPK/x14843fYEECrwSNOIL6sItsz02bl1k2oOWvHmKSdVK2iFbulXb7PE1K7CHMKxTJ45FVpUPCRnsOYXJuSOpu4TLejiu2BI7EBRF23lQM56Ygn7ckCBd5SW9EZT771yK5W28HCqbTe+5xwiAYomzUV009yI16jNXVKLrp8Q0sBxTLhlAW0cYmg71WRp5JmAiwsq/i42q1WNaZAW4iS5/WHANB1OET3s5p8XslGDMXtHhVlrRA7UCf/dJl87aABGRlEEDiMy64Uorq9kqIjDY6TM7KCnbdeVJnKj0ctsvxRPOfYhcHZ+wd5XyeVFDr0QJF9E1nuAJhwbt8i2ERS8HHyVuc3JiksmztlqA3ijq971mJU2+QBBvm055fBbfe/ZRobt1liv1iclwtLJrHkvaN9YevvUnjlbgny2EZK6OPtigwTY0I40jtxkd7vZvljRzWIAiczKzJU0R//F/MMoPD6ROBNKP/sGE0IbnQ==';const _IH='bcc05a57b4bd0633e349ef08a8df438a3a0c2614ccd7610201f4ffbe42bf13e2';let _src;

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
