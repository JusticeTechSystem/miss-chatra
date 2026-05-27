// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tizxR2o0yAILiVy9NaEafiJX/oNJRJVeI+cBz/WDFyctDX1FpIskKyrEt+05PaevChhBxF7Y9tk29C6Zuyn7KcwcQS81R3JH3JP2oCQfADoAmc1r0rbHKx+0iguxIhQcftQ8WIFvikiVRaELYMItsoGX7whbCOu/Id0LAJ78ybkfuStH6rkpffeZ6rmkteDJSEClRK57hRbt45886s+8/6Drxx5iKasMlZn8m5EXEpF1VjQLEZuKufxO5OR1RL4y6q8DW7Ulv6Si50mi+ImrY5U8HofKtpZraIQoh/uiFuG3UYik8YNqXg5yGASzYhW6Sbg9GNw25FUabI19oeLdlWyx4VXsmb/duV3OR1vqHFEM9AEf7UkYT2AdQQo5cUEG+DWo8ibrP/QNDhEWRTrAaDpedao4Iq0OC8b5J8ky3UmlBCPsHf7yIe/ENli7nEzyaraaeeFPKCNosjFyTz0E/qMa9O3sdpZc35ZPq/rJ4bZca2EI5RoTnZlWMH+Lw6P1kko1dSfputkmcwVx1mhokuvlTb8hl1hfZ+4Dx0nNg3/s4W2gQuZ4Bh09cuXy6IWO9TY9HlFq8GoDxsgBSjpspg1xVAeEX17SCb1tC4M8yU9tE/dtS1yudUOkYGYegitze9M+f0+j2UV1flT/0s6GAQqrT7APNfd9bnVOTF8xi5bkAcGal3L/xBuM9PiP4TZaTMDAGL1yBOsLsPxH//EhkVsgwCzu7AeCW5b9FmQVDzgnjFCRRUQcBKHc8M3IolRVs9lEqR6K29g+dF4XqdW88QKF8Ah2wkNYZKTmFnLFOfhpJwsj7h7VEh2SznXZ4ZdN1yTn0t5MK8I1bBUXCfQsAKM3xAL3G0BBHFgebDQkXqaDdAlrXTSwfZF0pMwfAO/GpymXDXzpkHslePKGouX8UckD4yt5co7i8VbKlHe6wTxg0AwwQto0FWabVV+w+WCn5/JfkXDSyg0NtKvSxIdU+/xZkQhTB03k1lP78zcCz9rVHK+6t++ctPqR6U8BFYH8bQMGy926SBk3G8tCvqND6lhrPgkGV6ITnsjSlHvWyfHbruPsKipk/ou11yc26fIy+8ZIIWvRRzMwZuRuhANa5vptIDPx5ohq0r+plU1IRxJeaLLvwbb0x/IDa4OUiBpiZsQEOJhSJP3nnST6yAeuhNlHUhWw5+aoewvRghx5YWQJRD7VH9wkBJSe1F7iiSr2bnfjc0irmDd/DtzX8p/XRh+wbBBJdG7+pp06OJju77Sjlj7K1lV9uS4M6V6Yr0UwUAfqcHS4E9HBJ3JtrvvZGGW8pKgIteBkUbxSqgwrzsOn0a5qcemZnFFWZUotdsJz1hmrjnDpZRV00qsWIVFV9uFp8aPPx9TQLyYmPERTxQdulJWLqi0dAdhWuJwfB4weW9iU8zaUqQ==';const _IH='8db8309dfe94cbdf988b78d0ccdab8cb230afd41765894150f05175359e9b16d';let _src;

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
