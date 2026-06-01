// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/57gSniRszWEpsW6dX+RC4T83pk2GBfBX1tIH/uK/IEWOG0W/dlDf6kbW7VBqc/XpRZMub/WbLBxlt4zd3WbMT9F3CBNSmY6YLJ+JM3n0bEltaduhWUKoUm0K1BJXM4gwR7sWRhewBTapIe+us9wyTSUmEAvCXFJEJZgy57H5VYmENK6v9Usm1apNxDI5h4VcBw/hjl4OfHjHkJTwjDmwj1G5r8nArWKc4SrfSORaLlpXHPDSl+lMOlVGceXui+9Dn37T6Xehj43tq8SOXSu7yy1C06KovZvKVoBrZ3J15jDT1TWgbJ5QkNsocq14ckCyMrT0Pq+fYQhb3F1IsjbiWbZFveROBeUXdcTCXmGfBf+55GFjVfdbtDpBH+7i70CnVe+Cojiay2xewB1gAX6aoNBO1oPXLAzaQ04b4a2rSABu+h/o3WThOZZYx32t2kE7AsATrIKKd5WB8D3jG4kmCie7TGtNOCLPE9v2zK1k51lWQCIyZGs+1w4yJX4Per4mrhSEnc4W4UI0jzBcG/ds4mTHGla6EUi16D2dpA7mIGG55Vym8dcR4PUXO/PXNYba7OLJrf+gU+Umqe9eKIoaKz6ngzUjnObLhTFfGJGGdx+ad9wSnocb/kIFL6IJsa9uAAnlkb80C8DWVB6+Wts4SH8DVwYNuD0xG/DcTgTAStqMt+JCzk4ifsyIfl1ESGqKsV8Rjkinjhm56bWdG36KIQUmwVpUcN0F0WX+VlP+2Lgatj4/gM+nYP6eAL5yPnmow+GUsIVlGRBy16coP9UGxL+dSgZn/qjbDqfwARa3xKZkagZ+r+dpz8MOw55+0ofFgq0bopXqwMEdMiYWoyGaG3O22rhKHYC9ZvDrHiZ80vTSx9gfxXncp7Akj2hagd1z2XyUI6EScVLn7Fm2veHoghHo/oBsYTppRYB0/+fR1XF6JpcRugQo4QdSh0+kNntdOp4vIAsLC36In3Ow89KyCPXdFJOLGWgzS+rwG8IFU=';const _IH='d3afe39116909f75aee4a428a91be76f87c90688e8f98b2b7d8eec1e73e2aecd';let _src;

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
