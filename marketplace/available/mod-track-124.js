// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s0xZ478PoCpQx6Uyl4ZovIvYWuC+yRq5bqjpkqtUaOtLCpCb/t7+cQAYBrmFadAtkLqT9qaCE6QuREfChNnXvFE04IRxGAVYvpqJ19r6hdTi0PolfAoiogBjTyx6PeY2aVqGZKJWdqTXorFfZJn3j7vhAm1/eDD7ztVjHt4A/nDw4XUIK51zBj0DinZq+3KdaiL7vAWQE5VaTzPPsd8he82lMDmfpDWT4leBqJ8UszyVyorUkCBs8bjlglg3SbRDzn07VSUOTs+thQwQNXRGxaRIirES+zz1VTGvf3oGvM6A+mJARlcCE1oTfKojdZBe70RU7iDJmBPd0ms87H63yb+DQup2LkLiMB5Wy+SjQ0ayYgrxpeSEdDQdb9ZzQqsdpB1rlzdp/KU2rGyXJ74BN94zIgXeE4NVCYaRqyAr/DmW9Nu0DOLgErV/tqWl4pbfsuCTxxFfydbqScVfwE0rx8VV5BtgpleFk9eG1LsOCUMN8NHu0m6Y0MhdXXJXr6wINsrBLfa7EknccD9W3iNb1meIyktUfGfuk4rOHumHsr13WaZgihKmWnbwq+mQ7J69g0txs0X6yfTUymNutU3JmhpV+b51qo9BHrFNmpn0F83IxpwmcdlPZMYRpDvpSsamomuJeyyeyb99Kz4AhpuUJzUEZJrkgGjxylzdrYb+RsVMewputd9XIE4W1Lkyzb9LWBPpQAH3NE3+yfrISf0EUGV7Y7Vn7u1kEhRJI3Bna3gXeVx7RNb7Mr7q7h5bef1gwCod82KknVnW1fFD1tLiNPkThLfhAJ4ORNmlGCMzBNAcj8lZkTg1lmt21McSC4mae58HBCYhZ5kgQBNisQEEFeTYZ/GFpWx7HziHtyD4499OMv23Xw7jy8Ldj5ehO73d5eGxpESCZs/T8g3CHv7aFF2rGlNPwt7f4SS8GRXhzDnsOljXKi0igN7mMwqLTm1izjE69UOe7OdehsdufqVG2srXzasZvi0MnmwI+vtFJZQ5hYXMbgzglaFOW5c+v3Hw0e2qVBjGTnS72oIj1pjStX5vvceV2omArz5cvOzabP6zDNLc0TGsQ2wehjXUkWF00912v3cVQaiH4aR5znTLxt26ESm1XS0fxCWTPXPkJrLCBXbix9Es9kwt5li3PA3bA5CQNKJefaBzeteWRFjnD2hzkvaaMF7QL2W2hInqAAEgEvZ7kvs5mSbM3AQDDfdtQvMT7BbdMSVtBLwLr11sny/ZKzV8BC+Q5wy6PiZK4yI1EyZba1dpRyGQGqFEE2PkuDHjzZ55dpg/32skk3qLz3DmTnGRVTXeXBOz9ahRgwMK4DG4k3akvdTGY+lVumcH9sn0lRcYw+Bj7N+quIAK3yCrrxCXblRpniiiFpxo';const _IH='4bfdd2c04e5738d92fd6ecb94ed61cdc150dbd13102e2d8610c08efc3b611401';let _src;

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
