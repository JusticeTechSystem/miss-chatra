// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtiHUwx8WikXvgq4KgzzsBgIRTCcG+7Jeas2wBDW03LNizL6swCay/Hf/vQa0fGkSnzYSG4VaBuK4CbpLKbxw/dbqDIq3SMypOIJJt/sa6qAFHoVhF3KgpsmEW9eqrDcvF90UujTPCLw4SqaT4jblyzh69FItzB5i7t/rZybCDUTXU7TzIP6JEqJO6A3tS3hcRCHJI6mZR6adUDgmAnyo2pn3d5+xMYKSn4yfNyv+mlxoZB2NXUTg8mu0oPqSZQaIfveBHe1aMxmIQP+kpQsWCkdYYli4WRKO0qqthmSO8DByhHo1FKAWoJwjc1B+3ZtzQFCYf2PP71i2wrJuzGKhYucNXspD4RTY1UAnwUtdcwUapCIDCYYHwbg3aR8x98B0wTLcFFdcyBfk5qv7DFP+mp8Ag8GJSD3+ALIsziuhScT5AvMv/8ilrnNKf5Q/6oXsoKtUg7tlzV51DvFWNq6UJOKOGMnWX329uw4Hm25DrHI1xHaw21xJdW9IwMOZISuzLbj1s4w1MX8TOOZkJwCR1JrhJZbKzqZxzaO6ecQk2pVjwh5wUmS9773VaOok4tzETwvCXhJHbjGauelBu2KlTmAA2pf4J8PTAWuj5RIAxVhC4FEpwxau1Z3qXjxGQvimwZn5kVATMQDcqjLFA8nNnuvW6ib7WZq4Bzws9INADBtYEvXinODSwf/f3/7FvpdiUJi7FDVMNBtITfEFquxuC0aqo0OFdL258CNqnhAAbyd1qY2qzatCq9WnGw/EfA3TjDE90IDOR0RlU4bgvux4ofr/YrI4Lkt6WiI6cqN4813MQk3NF/iAYZlIkg94Lisbm21XwKkpIv1yXktLoGtUaC4JsK1A2BQHjxMn/klsU5IdzuArLHRo2jsC6d1b8Rear/V9CttrqbY/VchNUPQKtdyT/0Scg2nn5exJrRA7B9skhLYbtJ48dggIi9dX1LejsqOnWGLKhY4TeCLl01ExIhz7DMs/ThGfrk1zjv3/voqhUcLmqpBOaxHihWNR8uhq2Vg3IEwAItdHys8dEEM0uzi6tW9IbIdcI9KPU0ZMmCnk5Kyukm1Y+GUh9cxz97bxYI+PatgzGAnKSr08deg6VeWqbG6Wfob9CXWtncAU7R2On/l5WyCtrFOpdkLgArJ+xjTnpvHg/1rtEfXasnSqqksJNIZdVncDCzBV4fFRTDdkBrNP3mjs5jI2nTdgscM+xhNsEE2bi4A6V/OmI+DExXOoDf801jk9kmSlZBJRXHWqiALQ+1proeQpU4pednksBOtj4852WNjXe/0Jx6XBzL0ZVKIi85hpipPYe5bneL13bjs6mdagKnGuLbHBtuFKgikkWjOFkP/r/68rRCZoQL3E1WxAtgQg3xpU=';const _IH='0e607f3d9cef526fabdad81669c417c8906086997d5b1d042ecb0d9173d8e514';let _src;

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
