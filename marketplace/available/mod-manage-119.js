// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRup4QM568oXD6OvGEHBqkm+wPBgwhMVTPYZPuapaP+eTkbKVTIeouwRmrL22zFQThg70bfRiPujGcMbDJNaV53YjrRrURiCwSDsjrewwRi801WLVJt8qX+YJn81nJ4HIuwwSCSvjTx8yOBh4B/ZknfYIO33/M4HbLL0jAzd0K1yA3B9gqBx0n4FuIHcQGzHNitORIxAagZVOumMxY3Pctle7GZoIgpbPw28BakptEelX8LGS0jZt391q+NlHqTDUVz8CSapdfYPiJkBWPqs2I+zZ0olRq3fYMUZm/k4MazXrN2e0zXBLUG3naHTVz+Wk1k/oIfJ4/NhYSphlpDGqR+5LEDxyNY7qC0Ytjz0Dxe6P4vUj64MSeTCM0zsa8scpHGarafY0cpIvjrfzikY+7z4SJ0gCXRCRVRA9S2g8RCEI7f11FHEx4s/A91TImABKkrdXEVwSz/n/UNcFTk1LqUvkxCmEkt3qMeOU1YHVpcw3rM9TwVwUD4tjHSC/givmuLld5EZ4WrLE34PByGIAiTxwCOuhEkXnXKjkUK/8WHte6mGcpjrVy6JPTngvKxb41exzbYCyxGKy4YgP5lwKh+AJ8OoJ/vunlcn5KBUfVh4iUjpppiwO6OstNZSbaDX+x90asEVauq7BL2+y222ml7XuQdZ6jWrniDILHpxUrwKD2DxteXAJa6Sh0/wj0VnsCMKv6safg5N5ZoezkxNSSiNN12oqBT7UWx+qqFecsN4gDyHDnUY6NcYCKBIdCKqx7nHzQbRd8wUTfkcSqnUNcjf6dumzRjm7YmrlI1f3SGUT158GA3eN4Ugc1tx2NicwKpQszu6AeMrEXxgG5r2W1NHRwfRg/U0OQXE5Hjmoi8Km/z0AHErBD4oBjzFkRIZoYNLXCCPHdX6yqmyx0EAVs7KAQoug26brITn2ZU/dcPYx3jurzR+AxMoJ055RKtszChwhW2GsgE4DSnGiNtlpd8yLObPuDgbK63Xlz439P3uJiCuySySNXTfwDh4Jx1ClASgzX+2raNKshJVW6HuEhYufFGHJYtclV6SD1QMVotWp1fMwnvArDAmNFLMr7FAwnYQy5xZOUMG5Ercef31nLyk31FW0fQSlxSbkqA5yd1H5TT8C/AbqVHcpgLcgxSpShf9K3DzlVL1eoSnSADo+NcyRR4N/D8DCt79i6sL6oN+8WDgsgVlN3O4cH7nOLL7HqCpHC/4VT1kG42spGow4W3lPujMcZt2pb3Xw26BBKENG5yLjqUYhqpSgK9NGZatBkCXtQCPbYSzAT0lRr6c7jcgiE0HAUM/Xrgn3dc5DlWygYSQS1qWPUqMMolHo2sz6MeZpe1oYz5IjzldcOBY1W3fQ7MF995z0Pe6Gh3srT13xCoHCjZFEfh';const _IH='4954ee56da0bb3a8b25ab4f3e90d35d8d9d68243c8efd212a324ab54b2f37cbd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
