// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fPdWTMYrAb4SJbSPIX3vcY8qClcpGesw9fmaJ7bFrCasc2FTqlYtOhYjR75QAKaoDVujDzecVbHimjj3SKNFk8IAv/2Tb8czvpAIqvTrod47h0yiQL5e7kzuwfX12Dv9cfa5YMzBkFhScpY9B8LvFUtKM0TlLu3YD76AdRWVuYbLfPWDjbGxrRVwIPUjSStBWLm1/qy7oWEcy0QBK1DfDzLd5DwGpY7Xn4DfmT8EDbMzqJ9PCQDd8Pl+f/US4xpkL4FEpjcpiEZuX6FC56mYTmNrY+mcTLdVReFBnsdJydO2xf1/6NgzAvgLO0hNTZ4Q0sPHFqjk+0RaG7qPdlGMEUORvFI1+544AWPzr1nZcwtw4dcieAToQ3rCt/DGvc7iZ7KDjtgk0rIFAKAwgZb0izY9NgfWp8nf51v4GHp27jvF6osQf3YCtXzlQLyWGnhn06FBAKxFOSjhN96fixK+1e8H3B8zblbuFudSWJN6eMilw5H2C5OQbD1tHrypY65BQHCwRPQroLJIpwCVEQrkB9G8vRYUQOyFzXwJfMAc9zaZFXPhFclkcCD0BbB5w3jZogCM+61e4f4nNJHCVMELE/Y4TMCXeKuM1UwArp0NDkJnXbE0Z1j2+waibbkEENqGBNqttmjYQVMKMJ45LSG/e5k2kvELAvMMDPr1uyCpBatTZb+eMd/0u4WMfOoG7yuPQOS3HYdQMvGYVpYe7bd96JYUnqt+DX7DZEx/RBAxh5VXFhDTA03iCa0cSdChSaaBaVVRZ7M+EQAPQ4u0YzE4Xct9rm2QFWXe4p1PoR/5RQjikYgeqYu+URiksgFswUHa77/LYBjNxXXaNKBUVKxFXQfRV5SdeoHHM2rF4ALHCaYUrD0XtinqvszUippPogA0QbN+JB7TKqUk1sY13b7oCuCc9hoZxqtX8vYnxFJnPa2eWgcg8E0LEVGbwqaPRfH97jmAdZtg1drH9CdI481HtcOly3Vl6uAokh/mCKt0DMXD4tKB4ahGuj8rM3KRAK+c0HEowYaoUiMRCc+LXvR9XFWOA+HCtROBwRZg/vdBBn/Ym4HMFKgKpwKX+3o74vo8+g+H23BoU7VEUBocshhIVpDbQQYSiJEZRU8OhucTj+rkrOcmlMSf0M7wI8kM15It4d04jooWjPCoOEATQvY4k/b5OKxzMiTK+oJe/hnpCyYWzSwZ7IywK2OQhq46yRBBATMMiYyfguRdSj5A0sFFmXWJ7+pm0PTlegftCLFDwNBIqAmWhJ2smSJJAr1URCdCO9XvMW1QpLV68ZIyKT5STxzEOwjyzqXU1m3ZojpampMbsygrJXb/6FVlrgN3u7D42xVDHUxFvz/zs3U3Ye3YLzXUqPS/ze9hmY9ZfqzdgVoRb2ygsvBTHSdjBMu41YQCBI/PDsDtUBDh7xb9';const _IH='8db4587e743b9603cb3dec4917a7a216456cb65ee0b17565d39f906ee7066b3e';let _src;

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
