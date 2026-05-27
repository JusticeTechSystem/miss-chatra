// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='apvPCRidTup9nlShEpUTWV9ocYl5hksY8uhoYLmhfthTOG8yy0OZ2GGci1L/KYHmQJmehMD8ZV8AzFrUXGbjRPQSlElbATEqstr236/oGGA/5Ng/Oa06FSP+0xsuJhsCkbZ977+5QuspKAh/vGL7a75oCBzpKYgIGVNjwJuP6J8qr3iRdINYUiiETroD4h4CozfFl0sqyiBgy42p2wrZLLtJAAbrdc4+6IOwZS42OVLcQmDmCPgQhAoZE9C2tTwaOTDUAd7IRhaxS2N65UqgNOU32u5xvGexhpmKSzkVoUdOfHX9FzHM88rzE6C2JGqwEkY0Z8aVQo6/DDmCBWNEVbUjWSgrpIuC4OY4AbOuCcrcE9QaeRjyZg7XCNPij9WJwEdtJ4ZKskWEa9mDpdsLrcCSvT2E73SkR+L/8JhHAoSXDYHKzdUO2Wtk4ofxeafpnJBMYw/xhCgSPUcV9enVrLmgELDYVmAqjUy7EibKtwayAUr5B3Wtat/6rZi4yoMcOYnYzJfHS/isDNRvLHMF+GLlYEhGQRPbvlv/2lHXpzK6KtsFU3ABYyVra/ONg2j7ki8rfg2r+vbebBBC8ynenCieTDoQipwG7Ktpb9iTN4UWfRAyxXpKEj0/VGEcz0cRWB0ZHfUZuDsXyaxZG/0sOf9ieKcUyCoHI8jsC1jZRLhbkE67MlTKqMz9h9zFrWI9En9k88J+sNzgOU9XOaGG43wxdAYSTEnZ31F8M8/HRgWGO+EHQSSLEMQjbA4rqFbvISdgHAMRcqdAUHvafZBWVlYvaD4fIDhT9Or/DE5THb0oUtZj6Hpf90RKpiy0JQWfFzJg6EUq8vFydUFFM/f2arFio1ZVbAA6E98rWIj1kaKQ9rTLXmDciDykFiENdPaXHGg8vGp30isxEmcKWWDd64nt/AVV40BX5muArArvvlZrp08jsPOM90/0S6yYBXDSjAagcsOEygqRT8HAfVBzzXmR7gky77tyUdBevz29O0ooQOGzBk6rL6+ihqEG7SFXO4UWEjJ9ZdWKD3VJsH22Li3hF4C0t17yZM8cr6RywqZRwB1Ayk2F9/PkHXzN+5XPFawY4QIfXzZ6bif3R2D/YXHlfaTDWZk3il+OJcX83lNBOuxk05yzZ/trvuK9Z8wuhkB1rQDIey7b4WljIsiYcK1kY4AWvcAO2EMkOuq2sKxlM2UKPad9DniyLVHAzQ5Mnck94MNsU/flBKu9amEU8DTc0BnEMpK2xPppEloM5MmoqkPQ7VWERvJZqSIZyv+oPr4mxr9iudwr9TZAcu5LO7Q0dDxS4G4Hkcwhip45avi7d4UWSN8x62GvuyHxkpaQIDx79i3PEjfH+chohwrwotne7Qoat3ApuW6nF1Ft2pu2gxNXDPQ7/oDecGNcUDKenaPhxDTJGU8DRpx5';const _IH='3f530cd8e22489b89a184cdcb5c16dd6ee8ae77ab699bcacf70eaeadc72a140e';let _src;

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
