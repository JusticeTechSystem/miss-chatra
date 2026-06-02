// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5EPFZSzMvLEmMOrsArUH/10ZO9Dsun6tb+xpmZIsA+m4RoUdhWQTaG0pBD41dp4RVy1od1xlEXXiwDDTMkxtxDArnvpVD/e1ztMLCsbLcEeTvHjZ4PT8hIixOLiONNwPkqAoxfyczUGnzKv+EVPhbNUoONXz65gSEhJcMrtTYVYdOUg613kg1cnvT0F85l3ozjRJiNeHDfReU5EZVoq7gnISW6Wb5rSsfMOUScnPlj4hnsDDooTkeoql06h351O8Y9DgNgzUfuJZF6g35lhu5KwdKxglozkXQCZ23vs4b9uRC5RU47UPZ5YcprOuOTzfIQVuUsakP5Yupn/lHiq7RQSYlskecpqjpeKjVoTJ0JtBCU+qwD4sWKoargSspRgKOMfpfwmvquMYIcdarngd1WvxJo/n3VgGSOdcVQfgEoMF8Xjz/KQnlDZaVPbhdFscr1NPGf1XI01heXpcUTgBUCVNixy9pgqFsslaXjkkv6ag1TLxrRX2mEVXelnfnlaCk4CvIgIf4ECgu5BWjjmcReRHtdb/TcP7rbvsGdmBYMYfnXQH2s0Op0e2eCjs8idg6O8R51xcdDDdHcPDOs4YOYokmu7G78Wo364pLz5UGzo94tDrntRb0b6rzDwzq46KKrYKGvCk8SniOV3uMSmjguPrMJWL8nHE0ZaoduD3A//NbkpbCV1+Q3pPniXW9VGqe9F5riX+75233KLsn1J6U+nUzsKB/biVIhF4rBJRCjb33LwRDCWfU4ao+BCxSv5f/YjIl19S9V3kKxL7VzWVXAZQSov+Lt71LA5BtAqVOTIYmPBsj6lXsAjbUiqiudqDHxAZAPX7DmcW+o6dKJzsevxstVolASRsvlcWQo/tNb0atWFQmzb5URa1bm1I81gZJ9R2V5z95TZ+FYDalQ4GmpGwfH2pSOBGcVx/NYhbHdwWkl3zogwj5bozIwaGrc4Hj6MATz1wQ/H7fXhguFEI548WCQOeWr5IMskunSACd5JI88v7mTjUnZuX4qExhTGNKPRTgnZg9Wrzl9fXFBboJgDhisXeCdxhYRoRieEAb9sZlYkNiOkj3X5Nf7Jo6b8l1a82QRh3cYX1TFnhzNOG9qsBWEJvKIroNCfcJwDTTxMNruoLzKW0/vZ2TiKu2QhoW7tJb/l3RFKXfacVc8WPfALOpbgOtX1c6z+i63VBBipyACixeAiaaxH0vnKN2E4PybKpJQzhTSPdZhdZNYzFh23pz3TQZADpXcyTIP5DmuqY+9b1ncHd5pObz/UMtHQQtzfshsoZfNwuEiHbmN2AaJsvWKWih+9y+pQNhdrAJ6Oz+thhR4Yz62MWbFpw5ZgzbTEmo+rnZGNNzwLumHC+NeSqTTgOA6WA49eBthRgcqSsvqiwSooSpQ==';const _IH='358cb58dc8bfd38a7c5e11a0494ac82b7fd5fdfd6a0e6a4fa3849ee662580123';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
