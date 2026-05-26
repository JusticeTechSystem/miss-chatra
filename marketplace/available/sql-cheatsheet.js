// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cJL0I6ZMh+VHMYa++2J1c2+A3sDRf/ial3KQawYVwASXynnV7J3LfL5erVOuITKwun/kRPc0yJA2GJKl/2pVxrBFJvXVqSW5cqcikqILXVPu8rSsGWzamwJvz7EJwpNmHjug8G28gtfGOutDCQzFCEInwifVrI/z3uRrcFsBmVseOdhg60cZFI2BZ7ve3BcOAG4dK1AcC2/3noAAgdgYE6ITHaUNAiWgo8zG2U3zacIrZ6JwFxBA0xpWToFf596NkZTEt2S8j9OZBZL4A1qS+DzhoLP1U9g84Pczcgkv8OwcOasB8t3HbyhFxRQhnhL6icZgkDNVGhjL0GE7N4reh5+axQR2hQ2L3xLSw5WTEQEH3Iqiv0GbSBqRHm8Gr3CfUqF9T8DCU9t8RC9EsxEKKkeMa9Jo4ygzLsb56MdCQHxDMT54k2HvtxyW7cvF3iNTw/baR5dPu2/iLbngw3Wy9gDFydAFnunpZvJNBCJp04k0ZfnQyvejAKTYSAS1OswnxFHdMvmZ/xZCtEqk7k0jrDKYRiA2u0vBDf7xQ4+nDEUB7WAQMugWfhV7VtcGZ03NrUpoRri4I0zLnIwu2L8EtaVcAyNTgpgumgU2tOoaN6nQGPpCvz/xy2iZvc2h161JAIx7HU0ulmThGYiNjHeKfL/f4ksI5lK41b+h7SrCgEaQjkut/+vMaMg5CpAalHpXwG66HKdP9+0101S1zwemGQ9pnGbwx/JjuDKnywVafj7vVpHX471HCI1DEeGkcn567ZtnbRdenbQbCwKHscnJ1G9b5B0BROvzeOE5UzrXwIFNz67aCyogLicbaTiC1DCx6S+JAUs5UwjCjRe6TiXydx17xWp/yk93tyWYcXNVYh0f0YpZq5WpVGSsgl/6cQ7UgeUcrKKxFM+BXhQZNe8sEr2N9S81LVkgmdxQF3KNSF2ZPPpMvdS85KUbhONQC0gWOjDTCcKN0ayX5XYThMmMOv6G33TtcFzuQnMcr1ql93/fh0mFdFDejWXAmmFIiAdLVzoD13Wl1xDP8FbHjT3skQo4xi+zdA3CQysFs9Q9udfuk31qpsro47ptaUoHgS56UIwukFNJyFoUxYXAZHqBJ2sr1cy6r8TUlzNQ8Ch81uXI/fgEx92eW3ki+Hwn+x/xFPfVOhf6qvLwOfYanrYDNQc12foWFSfShaCbZFQtlF+KCn0DFAYuIelt5pUPI17OXKL4e3bLzUja5cD18Q3QL0VnN+fa7s/B3QgFe5aECNn4fxUEPIytO3IwLwdRhY30muXy31bqR4UaAVJun7+6iKXLVq6df9jkjyjsurMMUKWj/p8y+ZsWlh7TKherJuEnVRntLQAkeiSAUhOeMsiXvSEPUwKMwHylGz0wEQ50LNeGj1be0W22WzsR2o2bnAZTvOdhpTGKC4psZKUdurvEVmlR4vhBwLXyqNpxaj5jtR1s2klUUFOyM5shvVqMgXQFoyqaW2Ez7YgZBTjkS/KsNHysBUerMrCTNsgyojy4ycHyxOC3+4UtIMQkev4pDWdvGTzY1itLuqFPuRZQG0O4pOaeC/UMX7P0j9nsEGop3Ce0tU6qL1m+tnHA2oxZ67GwB49t8D+qFt2qIbSN8lvB6slTrMCJf5iWGUvL4gPCDYJUWxeT7p+4qgELsNhzzLGEiurFh7bv1fPb24Tv2TTA0nZbhBVkwZHW9HedAombRJpshbvCd9pi5Aju8qzZmM1griCM07XZGRgkFdn6JEeznFCnCBg4BeZmb0W0MCeYYmZdY0IXXZBFzS48XbsClnLWyu4tm0BGZlg=';const _IH='4fd616b1940fe5fd9faa336e02de5ebb045a5826ec797223fa07f4411a506f27';let _src;

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
