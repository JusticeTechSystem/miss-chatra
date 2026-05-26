// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BQPoA3rDVv6ugXo//oQoDww+I4fOzAniVY0KUtQ1PiAPqXQrV2+dIWO3qC4ZwD9EGx8/pzeVlaF3z86YR+e1NvL+kr+fvRl68QnXEOl+8/NGOtJBZg0FG6WYUmGPvUiPsyn9Ohdj/RcmecCodVDNKR/6sPL1AhU8HFEybPQ6k5NhS9HAW5BSzkmBLq+tkcZdmM5C/aNM9J0BdVCWhjAZteBxIjgWvobfNNWS4tx0ZkRm0scLGecrpcVk6uDPW7oGiH9pUo7P115FaL1b4V1KKZB6E5GVM+EVVntAijbh1F8Z596evZGBPvi31+1T4GBVIOq8/S4SvFSHIhhZXJWg/v9JqQRt3eaX2I83azFitdAV/xdd7BK/k0OfzACiOOIk0Zc1eQp12FmJrHLn3rQPrG+jHNELST4Wz3++VIGyP19KcVEm78A7hIGl1ckf25Ks5XYEkqlSWiNadfwyi5QRycwEpdx0re6ms18oOTA49BDzHis+h0Pac2Mjfgs1ligbrMJOajpTTGW5WUnh5cb77xwIbZgphYDC1VdgK9QFoC9zCc8PDRjNWprNutm10skXXXoYbhnBiJcycHv2lXZiaiC8FkZLAuqxYYSIOP/wx1ifTxMRO4HGqh3JqBPLXeejgsSCQvDmYpir8lcpZu9Y6B7geciGD/q3UWF0lmhdkuv9ktkhjeboOj52dVxcbXIQUMl135/zIXjKmvFKud97T8h6Wz1BlLhkj55XUVc3Y/IBK6kbgIfWEcpkKeOAHyaUpiXnO9rel6tMq8tiuxRFVfk0AEOxuKsywOHS8NM8D/qOYDj2tDLw1p9Pz82AQnSWhxXeRs9j7h7x472yp2AhbwNv/bmBo/07Gn27nNDJrCulbrYSGXDcjUhRBhkIGtp/QxHve2mx/kMiIa5JYnEi32uuPcV2sbTQvRN2f7S8tYQWe4dFIe3g6dUg3XyeeZHfMva3wvtJuXkFgEC7Fr15AsemIbw+Y/PZ29WzWDqvv/ed2DQ+vjeoELJxEyfkNZ9jAeQsXxRZcrOGQaHTBbIrbRElgi/YFm0uKpMCItwclb+GWg==';const _IH='0a6ac9f1db5edbcc707ef92fbcc29a554b7f2f3dee5e3f8d97e0ebc59985fdbd';let _src;

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
