// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S74QwLWrL09bw/4veSaKc7Typf4GIuMEVcfXUGjFSUZ1nwrsSKykVcTDRRj9yXfSzk0hHoVeylqg+xmXOzwnVyiWhYAE6OK9sx6GqkPStkFWYp15cRKDJzeFJrN0VPAu8sFvwZSp/Lj/ERDVVyzMhMmITnIfo2u2cu7hMSzavPYEm/a/PoOEWxmsiQjU8b1sbc6zCgmKjavEwMzp9s+TK+Qm6x2bnmv64QkCA4yHU0LF8p8X4/jUGoetMUcVd7qlTde7BnapQFWlO5PJx5Ge4kM2LJKUgQ3tcrKTSA6K8WciUCXbbQqoaaDwL5CwAa4/qYcWjoBoQ5HAv2x1anohTdJjegVhjdMdZmpWp36DV2sc6tQSsnxazNGuCYxBEu+WUGyJMksyodK/8UdnNj9iMauxCLzB3WLX+bxoyh7NIFuhOnGg5e5NfSkk6Fn/tjZ6XT/hVqi6b+zs3rZyGXFugS6zL0+tiFwHkoLJHKsn8vh/sefWSbMcdz3Ho58KUmI8TEuprdYq/sj4/U5qnNfrrWxN22wIzI250p1NZymUENhpl2Yc5eR5IDcxFyjjTvn/+aHe4TDB9NfQCIvbhwL2+hjepjUYSKLkbQH+KbU3x8txLHrewivBfQcRI/eE5jZIZP1G3PXdBl40kAHqmiyWu2GZZwRYqoOu2GiZRhcXqjbGzrqqF4Rws43pJ8v9ZKM82jve++dQmCBfXpF/5z/rUfvRBM8QVfctzNzUVxnJWXd7Bd1bPO78nRKgZmBhochG1hQv1NjIZ9p7pqIGFDs38WUM4v4QHXFi1O/QnyRSuKbVNDa4zhUCn+0SaWtBE1kq4bwENDKh9oy0C2lzy+OsfiHl7KlRUCZKul9hNyn4Fr5PQMKnqbpQNg+M7lesBzbW4LhRciZAjbOaCEaTeM+5oBkRVl3ccv71DjHbE4cJrJyapFJbVW39Z/dSYbJBs/1wuZoTfY0KRWeGjn+HAL0GIj11sjYFdKX6id7qkyXMZc58SvsXU5C4GTWsP439ACEvzen63LS4zdg4OCYGZ2vJ+UlJpw2dFRFglN1EACGbsuaZUnyPZJ3HISzETB7NOVwtOkXkOrMmhH8THUM+3Jy8FoMUf4QATCgdmStgpyJRzFH84h2Tfsmfh1JNTlrTBKq1IExnTbtPuysDVx2gSCXbPrG9K7KUiNSUE86zkqGQhknwa5pc3CarMxinTve4xFhaNfBzGNimnr6paybP7hw7yya89ODiCytB1J9oUdpzzYYjfniZMVOM7y1JDGkRMj38mq/ic1+NR1sxjRpE7xsde723wY5gFgMONkYZG2MaF+UghJhP3iklPATOq9yN1WBEm4g4pLflhHYtNzdVA1OS6dG81tT2sQEzJq0JsmOq';const _IH='dc32ea3745c562ac43949f8fc76c61ec0311f9788d3580cad122e2a69c0e58ac';let _src;

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
