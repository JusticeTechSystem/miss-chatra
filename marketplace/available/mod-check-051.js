// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l7h7f9hdEmBxbYN2WG+koq1K+we777WQkvPDzAar407Ua9qBSDamtayWStBxKrAeynRT19v/IFzYUMazoec7jYSuUtxSwugRaoHfSxnjaHlVBJa1aEPPxOPfjI3NpjjBIPhy3htgNT9XG72D6ixKIcMQFgcsbwwaMIR5PX7GWp1kN8ygPsGgb7VOlwfgP4amkN5RkkkLWEX9mms1VJcyorBGHfb2d6xfn1/3chifuFqqE6VnM2XMUfQy6yQAR5WEvDAUwM5OQTEA4rFEwP01aWnOMI2Vs2aM17/W/pmBhvG61aurpBgWNftf/W2tVtmcvCNPFJ8J+N/ijE7/yE8YNumtNGTCmlpvY1r+EcKz+Hinc+PPaPeK6Zr9V6vABn/+EUEw7VTDRiZLMFwWN9NQlXUgPfW0UTpc18Q0rzZwAduVhTGhs+lU7WEXP9IvZW09XLoxiIWU61Yq09KOcvZG5vl/v6fZYhzbCnTpEZfMzN/2EU1GHrre76VTcyJRt3NJCEClHfVWgI1ij+YYrVBF8cxYgPupaRTFKiaVUHCkGiEdSLmY7AnxdlVk6zdQLhVPXiUTuFvvHd/RJkj7SE33W6eyo+1MpodaH84n/gbbxGH4tkVS6nU2trgrqXyFg58GrvBCjtyvY+xczYUIJ9g7ibum8u3pT8FDIOZlrRUXeV7V/sqQX3A3Kcc5+dQdaEhzHJPKToV5NgGj+80SddbyUVv66dXqkGc6bGP1k+WPvkr44v0k0cS+vd+r685qwegUjhi7PX4XcsWeIYMsFNuJMyl1vjK3Uo2iheuLoBafXUzZ8HUtKgRVlZCS2jGhH7pjstH23WEOT2qcJ6GL+TQR8N7+fxapYjvR7MMxcjqfmqpE8Z6bqC032D91tE8l6VNXJRvhxgFr56dmEUzmRFGuMgJ/IdtEfEPq8GUW2HRfSbVBSuTV43PkKaZBP/TIfnzGF0jLSNMF8AcbWu/klWfyZ09NO4FP3hu3H6gdj3x8uaLb3l99ryvGVptSFNCQtqvluA62jNfc+ahHLqXOy9gSqZMoc9nUg7dtHEnF5Gu3d2X3NnaIjI+LW/8gtmPsm13w8vazZj3yjKOM3O0Km02lkNxZFWufbnk7OAAvYzWK2zZB2g0g5e+B9wIbiyb+fWuK4el+NxG0tN7IHrllgzkHllFYTTavze4dhCS30IC2aQjLF6B/JK8sQ/qbrz7U20/tJ95Ubx6BEXU21MsrlP04j4AmUFVORIcLIDg1eg0N3NHOHHmiJfd/83gVhzJe6SNoP1fFnfAOPotLoVFIfDCKYYpH3VtDT2htJnCO4W72hxPE8pL9gCA5e6GHkd55P0TgNbOJ2cmJ2qnF68XfrzjgWKdvovR8IRsQJw==';const _IH='5231ff75bddfd3c4b03a27d6302dadd76f5782cbe065b48fbb2ce2c4ac012e9e';let _src;

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
