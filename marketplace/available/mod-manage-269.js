// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToEHN9vEUFghzp5HNAn8HgBCVgnfncxUkxv9cA3ZTX7Lkf6TiUK4Ssu1Onh3SpjdxvjZUZkDfIqogSlhM5f+RG0VpLWFTs4byWETOMIaRZLCNhadoksuEpv+05mngBKu4zoukB2ZdngnOt5zgauODxbf4RT9Uwo+820NqDNKFKfSw3y9oc5JSUNQRLzboDta2EvkNVj22CATDNuqr46rlq+zxEXzREDP7rGzkm5I2Yu2WS/CEs5MmUOjj9aWoyCgMf+ienRJd4zGlBZAc2nzWqBCBlLMDlW6jqA148GekVdDcoNf27Ak9ZZkZrUJPg6m+NFzw9ALPG1FxoQxn9HVI1+NOPXCi4lItzBN/ktU6HZUHWlEI93EQQbSGWavNFv0Vx/TCNislwtgaLkcHbsxK7oVo8gFvwH1Gi0zGIkjJBqfUa8RBs0SAGtaMyPvX4Sb9LaZN2HYsHTvPxxccsRVOZknRESiiVtFh0sRFNCJqn/MHbwQUaN263jR1VgRqBcBIHAySmmi+Xy9wli2sDsL89crhsN3pBkc1XqpuwCWiT7vSzfbxXGqJy4eDx/9tlKER61OSR5TxppZPpqIUBS29Lh1gYxxSv9g8BWLDJQZif3DUMcjE+v2jjhkSGveYq/+wFX18bOiK7W/6RBR8T1nx3rPx4nfFvShamTUkdFayXuX2YJNsoeHt97M1uq7phoreKsQ7Yp1hK6Tz/wEJDGUYWoXtpUsfigeMVXUevP0yVbPhilCPxMJhduUI41ZxM50vlrzhsj+tZgB4rJIIMVPe+Wh+yRlS85Sz2cCkJ1+pHqS4kPPBYm0hJlFEZh3G+h7TINtD9mqemJ2PRlyuZ7E0kLA72dfHgn4FEV7Q3sdnsQtfdybsD/YtHz7PSuHOOov68q07r3gLzV/1mG4XJLKcGjFuaqTt/2S175QJhfml7gSxmu63c0Yftu7or/JClrmr5sA/FQQJ97ks4l+E54DWvQSkYB5pvIJ0nrzALpClIZ6RI7BuW+kJ80JL2gTuOgjVMOi1aIzHQe5hBcoN/Yz2Qwn3xst3VRJwAYIBmdhxHs+xaTcBmV5rZWoN8txW2xcHceAjTCG0+fKsNVHRt4NGQwk5QF/nDxf67fRDc4uZPDUwSsGT4SWgbk5qUjHsyyQLh247LkydBUz8gshDVTLVEWX5vRP74Qr//WC+afhPXKsZz06SO7VPwbyDp3Q4w5Y7DwhUhdVFK3WN+3FVB7F+GB5sF6Ucil/wZMHCN749nsKcBsnzA0u8AQLGdkZ0Pn8AOC1wVGXcERChGK48U2d+koyRHEggaRAb6ly+2L5Nsl8ve6nNHSTKh3pvaZrH/s7TttqwGXpY+SwCrg9zwB08AuDMgS4sgUJimc12krZbS0252OJcl';const _IH='0e2db618287897834ac00be8b2bf0783adf5fc7dcdcb30b70e668685e3c13dee';let _src;

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
