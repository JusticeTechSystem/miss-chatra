// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G7GNJnilpfzcf2MY6O2yTTOkJFr9fJTpn35CM6hDhLyzk/1XOIXUS3+wRQFqf9JV/f2pZN0tNhqMJ2Rnoo5HbAxmdB2auzfEvXMfQef3juNyly9RniaV+eg6VoCFWgvT6wah2npQI/Lqh43qVz3gifftCuAHg/KLUUrARgaS+3+ipXBrMx8I1UlTano4I6kSbj1HyhMg8O3oqTFnV2GBTk4owBkvx9qw54QuRCK2ItnS5hILKvAUsluELPjWoDpX377b3I550qfGiQ71M0+mTO3DUAxTOj02LBAPcnE7i/waeeKwpH5oPf87Fmr7DyJwOuGKs2zvHK8lVAWN1QsiEv0elMCYa5QGNUiqhER2J+a4r4CQaFk48twquWL2Wh7+aipAjp3Ty/kRg2GhByd71oQ76KnpMQ397I+ioREf7sN9jcB1ls6ieLEMz7/QQNlhXYaw3ZdyhYBe4AhN0xTAh4EBy2Go2jM7bRFoYsxhtCzau3+u11USTJod7RpZmqf844gCIwDAgJzPrwajfNkUx2TOT8WkTMyVtH6rpc3Q3w2M89aLU/+s8iP5hTELEgPgOUsNB4S2zacMkTQI0gwjUFapiUFKjkn/5F+XjosGk0aVegvIJ1/YlhlUR+Lz/DMajjqCFrAtltsBUygOY8SEiN9NKrUSbxrmyR50/iUjAJkkfQvUYQgDkQTPrjgKw4igR/CnjR6YHGix4XWsBz6N/m5YsB/hJYDwAlLJ5eeSIW5ObLCRnEZjAYV+ijinZKu1oil+TneLkgWpoMqDsimJL+leHIpZE7rprEpv/8O/BgJ8pB3ihWdX47l5iQ5TMGJGOMWJXmotZQzDlQDYvNhBhXEj8O7sSskgmjj8gEyKRccX8HvuUWtPs+luNfiFVaM/B9TArMdozJb9it1eiSt8RqdLBmDDEwH6+6/Mll581pgllKuI1gusx67Bg8yM16PYq/+dm5PYCK2LCe4Yxg7gcmqI30ngyxh9rRzdjyvQfmZ6mWazishwKLHkvlPBxD4SBBvKWXlIkMilTerQyUJzCYniASuEfdqdatHonxp/FHu/Yx/RGV/KQuDl5UBnmYuqQq7XxDjoEC/THTtjuV+DHHoqtXxdhMWAEGchtDZTi8B2rSEMFryzFtRLdNevX2p1FlwcBAA1sCUDANSFPr/WcJ3MQhNmLSYIOBx2lavvw7W93rNOiKgJCVk1dFlxEWWhM3oIzdkgU6bBRegKZ4ues3WgifvtIgfTE4607r4hkKSNNvwnCOW3mz7ltWZVlHX8Ca/KvAK1nDNZVnb9lXR2z/A3Eh3WczeXAg4lDp5QZ0o2Gy1EL8AeMjnyZoSlZYhhiY9+bNWrpY7F7ow1bDmZU9mvsoQGgakNe8NLVCBSczyzHUHoPEgxBKKKn4wBRSYVB3L6/CUN0pVc1BICdc3KiP2bkNsrXRqqJDvPPLBypwaeDwJ/uCi9mdKowiGK3GtM2EdpvdCs3v1MZ9WKD9ojv4GqkLWTrdLXJAknH3ATkVMNthTnEgJ5ru4/D5c19DhpiD6wtGA9wMtDCA3pzT+7AlBmdM7X5bCsX57/8NZq47trbk39ihJdgcQPXWa9/Ztn8Vkew+T+NwJWMXpAfDjPVVAem/zLh4kPK0TrDd8HQyU3dJaBC4eWdGQq5pBrvNEttkHuLAuu6uStagxkYaIHGdkdQvNshuuN4wBr6wrJ4jnit0Y2jqNZ7PtmTmsfb0Gz1yAv9laiagI6ecyzlJ5qakoH15Np36ri/i2D8Ucq3Gft1Vpz4QGkLWM5XQZ9xKx6v8/vMzNZtUbEmFjTaoYb3Tltmx7eNO83PJWsNbx5mmjwhcJfVlqLDaE=';const _IH='7b5a6ed6c80a9bc29613b42e749e754276ae8cae3d9ebfaffdcb7025cc563680';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
