// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSM5BBUsqWkBmSE/hPs9oZxftz3bEmi6PBJ39Gy8o1GjAt/6lpEjA3JoEVtxXM3IXlTnGgpw9Ppwf3qB+/IO5EvMwri6r/ZV8rWcO6TFfcI1HsuZo/EWfYSCz/YJKXIWqho+BF+kZAJwevUAAh8/EbdhSL6fu2qqWkS2vyJhkuoTt7a/+iL9j5vTNwkhANvIpl1K0vHe58Klo669IYqPxi/FptPd5rjLpVw72HojmJPrT75IvaLMD4RuDpQLGElTJkSSk0iCDq9iRQDW4VVYwGfSLdkhAzYuE6eGUAIk4VUtjAPffhzX5z02XUZPKdG6WbXYk7xV2gWgKWspMjKedNWauoL/4LLaBirA82BCjdUxRypQllc+OOpXcs/nBE3EXxKC55EB0DlvyMbFy/JIMEHoTW5uqxhnjBN6GdKdFPnGKojB6LRYP8WdLSgeJlm87D4cr6JorubVBLnTs2Jp+5DwCwYa667BLHY15/WHES1io3cG9ltSua34SA8My+2FnWcFIXpW8+NcTTCa/bKtknMToHcr7Bfh/iRW3r7L699xYAY8/2r89L/quhl/qqfX0FEzgpoBikhD1l9bNYUddprlnW5++u9n5TpXVheJ46zdlSR91mXn1jJbvORRLMiKtdk59YmexFDYyoZ8GqbFazn6rZXUKnZJy4V7uk+r393K5bUbplAt8pVfzpcWq1hjmXkEzu6Yxuru4Bhq7hLZhof5cD4wNJI48wnM8qqK0KgfIE77lJcVDcmJ8dJnH3mRwWP055XcwPFXHe1WsFqhANXMQWE+hPXAsuHjKpMdBDCGByCblqbBUekB3MhS9A5J5Xkc74COooHyfOctogmWM27xSLeBG26WihgS9eZ6QT8YrlD8wCOUOsn9ILyMcfEBL8IBoV5BRb5TxHCEhCQAQack2K30cLD6c50Ytnmjr/auVEi4PZcI9J5LSAR62+AkikPmT/M5J1LR6CuzTw41WD6hH6RaQfN0sOl1ROLRjxLGmJAUeAM3J7qxFVtqNBAgmfSZmoeFNBZSd1H7TmfRd5n757GwYn8JR0K5w+PXTyFUX63mRHuMnJP41QUNaEJaZ7p6Z3JvuCEUuVFZwsxqUNx8rLSv2ipbO1V24tJGpOddXIsso1AWhWVN03VuiL4Rz47ATlRR6LXSlgQyAT2DdhAffSWXWSPqZ2pn+baJyuNp5yz7PYdAfJzXwPucORwKWswHk1Z+gFldp/CMAaAarGuR2OmLsKtJvjv8/q/kiaBRR9zzQhA5bD/qHI7mQZvfdwTwqsMKao7UPohN80FG3Gp/Vg0YegEBkZIjHkJnq4dfVRW04kjpGg4vZ5fm4ix6dWlSScl9ZCrKcj2+gWRLm85+ubeOQmEaNqOE2KpQGosBvLVHPMRGAuBhEewfasQMe4ciw==';const _IH='c8b215389b4fe6082215a3feac34ea92e50f9563fb1ceec58f13713c0c130eca';let _src;

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
