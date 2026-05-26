// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0ibcLTJUxI7SHmXVCLi1VsAZuIUSoDHtx8LGxW5VDAcZzaLTru4On2tKw4fCqKW0DX2uhkYBU55yhr6L9L3FWvtkhcpVpH++BDgq6DUWrJxVRS9R9CVMRhi3GsoJc7lUF3dfDnfEezy2rp+sO9sMFSafgUFo1OR7ElMsOyxWVVA2yyP/jnBwMBRQP2uUtfQ7wLDo5v5VkKI4kRdFjk2gTovS67YO7sLJ46aiDqycDmN086VQyKVXiXjwQHnTuugpO2+DENl1X9SdAAO45l3sUY4mjWRdelufcr5ZyH6TOB3oWJUi2fCovAFyeY2Ul8up+76bWxc24eN3UOxICTttbASeaRK8c1HSDJEmcZQg6ZQY2H9GxwfDpslQHKTTiXWG5ju05zcB8tmWljuDjDT3t1R/MX+sbaV7OwZcVFUoAJm/8MErTJkB9zGSnmDfa5z4miyAcyrSm7/mMAWYvTJ8KKkj+/VJMMKH59/UR8fKWbejDQSa4aZ8YniYcupC7YD0Zw0Y9CLnAsDI8+59wsOAqPIw58rsK5b47s+ytVFKKb8VowXkMtVHnfHYrfi4tv+61y6ScQqZ1CLjIbYIvoNrlGuYiw1gSupgXRI0Peh3jhbet2OIBHc25O5HRjotVOkdLDbMU29XmlHpjWThenegvCpEmogt+id1c1CCB8HCEo4kBv8XVLkeYVWQEbLMvoa3eue69CZXxyNTFXgqAMp6LTzX2BvAM6ZvXeMGZXtbTIpQZfLskR3Pk9imtmyZJTVEkeoE+bAnJ6mki3BuIScB/6wpnone7OetIdwah8bDLViM6aRdSePThbDsqQRqFQ7R3uoDJBJg9lasq9VcJeIyWlMqZ4k2IvXUC4RSuZfoDqOlAM4AJroqFA6RHmrbZF7gNvmVwCZfDOGIZs4zlvMJonUvyZ3A6+oBow+9RrkwIJgboJrrf0GTFRUgkk4y6Srlqp4WsD7iH6nFlse4r03jin/+IenVy7UqezzGFXu3fcRToC1uQEmQjfOG5I4zG4CwLkBqE0sOV+7qY9qXZ4HKE8uel3l63VrBvnvwKp1g9KyN525FeDv+N+TcTA9X/lfFo6mLY1HN3zIk1eDeoEOYhuDwvJCvEHUGB9DNI6jhW0iHuqr89/V97zRi5+NqbSs3E9r86PmSkCmZR0TvghkXLkj3diQ5ih7+IuhDHagTeLPnRZpTstupIAu6wSiQ48Ab9TIEDVX5IkTaOv3wcIndEdUqfuyq1NDRzHJFjka5jtRMhd++lxjFaLXab0ptuBYO1eZOBy22dSQJX1El6LftVQh7Tg6Sr8Dirww0EIiovfW/Ttf+/a/SdWVS+fB5W9GS3xbAaYwqTOGvyAlvhtzohw+nUn+IcEYJMDLrakKsKKqv9BxdgqqZGmqJ0BLj2Ue5yxJ6/upjH8CP1Kbzw5DtSeZXE8XkEg7cFoTGPeFsmpIBo9gaWWCsAOS4U78DV1SneC8tQe7K/fJ0cPBfQEgN4zFrjfZevIa10j66MqRwDAKVIQdEur1NN6OwIyKtJFFBFlQDBpSKTzICnaWG/fg46wOD0fTnHc7KB31L8YP3ZONPsqgzi+ddkwAxBUszQrI1oe2nIG8wWYxUYn5xfXlSG9QbAl2kGIbBbp90ug76C4JiaDkmVLdpV03qNyUY5E2Kqu0Utr6wVwDJNqOuwwEDCkko1qEK/UQMSPPACtIRFicAtVQ=';const _IH='3046a657a6c6ac5d8fee299924c50b16a16f8910381ddfb3ae24298d63bb9e6d';let _src;

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
