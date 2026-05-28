// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jmbRzbXkQ/FyyGnBGNGT8T+N+4b9tPDmaVa4oQ8OAfxU6SS7S/sfAHf4HNr48h1B3YQCG6BDp52nhTGMxvciHJoAs9DFUPVAtlf1t0t/bwxZEUw/v4RIcLmxtjlBZNpzZCGymxgwX5BJ6s0hZizziMgEUH8HYR+oaHgZ9RcV55NcqNDWOTAyi3pA4B1GjRtBY3edkhWrMy2GnNFCtwCmEW9VW0ygsfX/AciI6zbIRPxj50xgi597ckXGI3wZAJMBFQYQjIRELtNJjBw5uJJkZme9VLUuWjquFXdKWHWhsYAmNUhCBp6GZAHyE5XE4Stlsy3GjiBJZDO3/TpErSaQJCTF1bcblrk6srmWwbKqUyxUTH5uaH2b5xf13HR7ZxCHKppEF6a9/Uh+gLHaM4Cj8Ykm9Hk0/1ioF2Cu6oIxk0ODSDQ6I1/aDhsui/8E2aGXuw2elkU1RRK7yL4xi2tG7g8XeDdP9PBzyQUy1HNva9eNu26gAt+5zILGWjzB49RmdFBqTKSbGwq+2yg37OOOG7Y95NCBL+bfeXcCIBiFx7uf6mn9HFLLTzarb90MF/By32Jfm9xAmGG/KBfKTODe790Twr2rML+UqCjCn7Q5I90kSBCosqrQbRn/hnFDPt3Y1vtrV5wkON5+azCKxQ58AX12oqRswgBFAsAa2NTiRZEIxbdiIZ4lnL+N7jndbs4uAjT+C9S3LvKYIiJUH6wb+ZkFGQNFr8iqBiBLp2Z97VxDwMQtUC42hnwCcYYEN9GkBLgQRGpFniue59Ho0jV/3+66QssRHbEnEzSjRHc3BOYwetMRWLaXMta7SbaL/KBJBlTi+Kn5ItisztseL/QL2ZAiyXU2gsUyhy2m9DwJr4F4NR0spWInKGBDglKaomVIOi5fAUqXPm62pp+Eheih2qst0Nl3qSPmZ3P9Q2yQF+ISg8b8K0MAxT6zpqT293eE3bC3qWNETC0X+WXFLkdv6XR93MdoaBTtBRPrBtZejF2B2HSiWOHZzC9rbxh7Cr+5D0mtjQfis39i0cMFZz6xKIE9d2NcqttdyAKSCagOiAmg6cho4MeizLIKhdpIhCz/T0CW72U2gCHpPI3PhniAjT4KYjOdvxuCeUvNhlt25f00/h0pHj2nOSyM+ayZtj4HgUXFFGPquxHgyKlnjUo7AboWoDtZiflKxAuYYOOlccG4xrKH66dDreO48o3kdz60INWQtqvq38gc8G2qkfzkRw9lE3Q+7Be47VPKqpDeqpPdjD7vd5tVh0JxykYc';const _IH='de91537e61e728d311f3570eb301517fd88958306eca35059c0e0fc1ae321597';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
