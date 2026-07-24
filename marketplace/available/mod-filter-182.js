// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROjvRVceFFiPWbjdqmCALl7YhPN3IrVhCvEa41mWUG9X58orsUYgrvZ6w9ri/ELRJ2On79NdKla2F+czyNHRWD/rPs23Z8dTvFp9YbAF2ntbaZO7fS8qytiAJ+5AWC4DJqsmADJ//Iz2ifjE7NyKvmHbJoANfHxlDh+Mm7Z/IqEy8A672f3gbBZBQ3ojEqf97A0dvYNz0elQyILs7QXT7BgrySkYiRzh5JL41Qz3OFuM5Hm9n6PVmrc5MNABZQmKJ6gCgmEzef/xflQOsGULgy1XsO0ZrykS9HWKOlIMsO6bjK7L8StRq3zb1JAnzQGe/bc+k+HZA5Y7qVZL+zhKDcSd8es5Oe+nJwDNOTq7P93FBSVGkPLK1oQu2RT5YGWokh5gwErTyWrFTET/eZpYCjOYbhdwEApjy93vyLn7WR8TovTGxNEC/OJd3siB5kEUwV+4fDzhHUSzqJcTmfMS/en5uEcbua3X41x6kw4eiYxx881D5RhMcPw1UxLN9SZyLMZWeRGa+AMDsOAptaxY0Upb86yN6zxuEqTuOWnqV7zDFd4cHvj+zAerk6kbDEO/x53bnUpTIO9ldlzAjQlrXNr6HKCfBvGx4WYsnFbtEul0fEe8PkLP0D9V8NWOcnJGQQ9IctpxlqKmvKUDekuYRmVNylrXSn59oYOQM8XT/Ti6y8oelGP96Pc+qJz1tGV7jQJ4JkqxdDa3bpgM9aYcWUZ8eqfxpzmtnTd40evHPj2NWTuZA2JPnV79Ddo+kgrFB+oMCtPiqB7HT2jGUm2fN8CRAxtIXeUTkhkUGaRvNjibL1FiU7mfbLJ8vxWgv3J5xwxbePuk4O23d9lVrwSCpkreiUAwrH2dhJWg7vBN2URSJRh2H2cu3q9JXPbIdRkVlf2RYkcgExgQzN2iBnE+MfpUNcMw38DnjA5iZJ35FsbnreDKCWVfaQRGnny4gtyH75BHggdaR5lFCzOTCou0NWSfteq3K46EwR/nN9tZlExBDTp6ASdNf5aIbZCAf6tZ7z4AjBcdxBwKIEnke9UKtp18psHXC53L3EfGNgScFz33fiiQzJ7vNW4kBcIdN7MUI0aHll78slO3aXRd1K4fih56LJg4Sisnpptf1SEIulgmyN60dZV9OUJ0SY233gCrQyhtxsFuTVWUcBNPeT8Y5ATXUJXAwFuQTJ7B42rESfifk0NFIhO6t6MOvIKDK4MrxkMR14f2Nuh1MNSa17mf7pWjzeI18lVgQvk8ofWSeOyZwoCoDhCFNmqx1B5FYRNJwyU6+0ey2J4cysyPorDTmGDbPoDkf6ufhYLl1uZwjwPbqQAy/UZD4ZwJTgQjn8q22QsmjeOC5out8L7kAvNyKARmani1HTsiO953W6m3plyDMfLYdZPvCj';const _IH='230636fe6035b8b8a0c4c813b88daba7da639a6c3fef127978a02ae956be3904';let _src;

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
