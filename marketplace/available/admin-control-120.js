// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1ij/WNIkoqYIob5sWIaXMfP4Mmo+BRV8qQyYsf/Br7ocWifwzXtTzH+uHgrGuvLp9CUk0zPx/kTiYmvnm88l+x/c57R2FC+0reZuQqlka5KSGOlbhK+FLpxnjdNqBLUREBbgmX/vZq/9Iq9KvuCDA2K6R7E+V5fxWW8SK9CBSQ76UNDlbmCp8gzExg9l0HnZU8mUEBbSvrMz92prvYUxmemghyvA0+uXgGYT0jzpJsoJGsAt1Y7UpN32SWaoV46k8veAKZq27aRGAmUfFEGn0D1suwMbaqEt1xMnHA0cpK6KkFwTOZtvGit9CoV74XehiyMn89hCJnuBY1XECmNv6wPfznyfllNlWPiVw2N0myzaHlHbRBsHf1IVPzPG5Yca5Z0KmHL+0WJ+9OpPYTT0oPWW1RIf9tt4fEGCHfjrl2ncRvAxbooNdgCjOjBJZKM7ujLoZhJKtJGr7UzRAxCa1QRk0BMxLDc9F9Fw3uh/wnI8MPZe5HdxUlsENZtxncy4xrU/g4OrBgCiH9p7cb5oNRO9U4z85sV/KdCYRn3exuaZKRU9Ktjfths9Kzb48DiLmAyHezZlv9azk82W41dtvVTgjTkMU9p0eg8kTspUjQkxPVov7vmEeNDpK0wXWbLwHduCBMGDzudNHRelNogHaDlmJeuT2JWpn9GgX4oq+85T7c3SIaKvLE+zvTTT2emEWvyml0xY61Nc/h1qnJVVMe/hgmnRYVWjcewKhHhv+iN5tIu4/bRblm2j2HZsn8/DaCFcM9SPFc67lDVzrAMZDXVYR6JoKp0Td6GLY71ZHOjL/LGKHs3hAhuBgUwP9e+SMGBCW8kSPVflv8N28wvAxi0g56ihFKapq1W17SjwWjkNZiDymk3UJjmhs6XkS+S4u3EKW9E1+dxyQUGoNt67q9mLeWo5viSKcClNNbE7t3DjPy4vFzF3caTpm0kegHQldfri+2jTFXccRTfsSA5hVjs9lw8g+fK82Ww1aXr9Dqx9GtHkrxj+IvOMGhioacogZhmOTSNd0P7';const _IH='47c9bb30b5c16140e45878b1dd67b35d5c791062625399e668792c95ce0ae170';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
