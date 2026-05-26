// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6cS9F+DnBd+NSCLnNxTecjjaPeJpnGllmn3TiLf+i+UCdzu5Xx8pRy0Cp+Gm/NSzirRTfD64F9CpxZ1NgkvIljCVzjh/xgW+s+rK6owuxUqqhK8sgkcw+2JvqMplhH+qaZGukeTt+QYb8P/mQFGS68yNcL2MAiDefT+TzC/p6nQ5SUtiEmg/r9TBTnixR4H+C5m7jiHTo+T5V7mXqJOkIKksY8Gq78cfwn4/WAYTQo9mVK04FoD97oHAOqxJWhDiCZ0bUkRVH2ATQVY60OApNwCWvjKn3LYZKc6LHdxV4Cx1HvxiaorpPArCYFj5n/9L3xl51KJvVS2wuks1/HSGuenH7W5m1opP6F5eJVqjib3dGaoFWr5pLJitakfB5LgFqwVN2twOiaFkkSQallshQAdP1Y2tasb3CU9lK6X2zy2CZn+s+u+36FjbheBvP/o7S2H3TtlCg10BMYornC12bXC+Y70Ow62FIQjNjquDaM8zAcqi9yzIPgxfrps4gAGMsFobU8wbD9809GPZe7LY4YXQUQlSsErXZ88LVLGCeQEmM9lGjYm+ZB+4Pl4huUosJNPL46K7+Nx8DeyTsxsSDDeznpP1fQSDtrMVzMDQqpNTw+I+Ji8lD3hn7pNObBhHnxkzqdYNxK/d5VzRK+hRLqSawXzPw1kQf/5bEtSyKLZc4KrIosv+GFfp18T4Iydzzp+KjxR/uQp9wa0eRXgtU1QAtMq2TcF5piVb8cuiGq4oqJ8+nwTe66xt8N6r3dQKzeq5MjUP5dQxJiM5DIqdkHtmNngoVxUjnd82emC9IJOUFpBCt2n910cszBn5Z+p+AtU3EdyMS6JirVFQXuw+9ucYo7ckKq5+z24r+FrSijvZ31i+wNH4wj87QjAfeJfntAp11oWXfOMR6DvwePqLB/XG/Z9md9eje5PgjBMqopFL+X1YDIJpS/9+reSAZFotKlf7OKK+LwT0QmNeAJeMfVt28iktkuXHAe+lSKckBNjYoyf0BELjPvTxqyvqFMKGpeTnTLpR0Zgxt38HfP1k3G4wKMZnYgY9qirKtJEv0x2ZNLh3kLzM1NrG3hHQ+Z/z33/oTrnUJaOaszI=';const _IH='6e68fb153207bb3928b388bff8b454e558fe240cb1e4c814c5888ff91192d26f';let _src;

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
