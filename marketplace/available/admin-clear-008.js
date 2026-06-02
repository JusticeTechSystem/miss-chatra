// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PwgtH8D0fLgtEBjAQrXntKIsh9v5geJcGkCkGO36quC4jQWKnhU76iasAbFuOMTNIdQK0eldeH8mgfQssAKEaZ/aO94eaiaOqf93B6WsUa0hggRiHp8uKn0eKFInwrTYJSyztle1a9Q2DhBHeslKmioFL6rIEJAUXGX7U6VYB0daDChlRq1wfS+f7sZPoF2x0nZo2JfFx7+nKs+FiyJBoMJjEZWbFboySSJcznX59O/sGzbxD/sISi2YnyMRkglfCi0l702FMdEvkTfjQimHLr3zFCbSbyx/VzDiMf2eEqf5sDLemg0Jvyznas7/uA4KQS/No7O4Phv3SWRUcUwIc/nLuVpv61l07OXoSVJtBPFGTG/irZldsQG6PoJTzHJlBBIhfhnBTtqQyS5wbpS32cenb6f+ZsFGx4+h2uBh4hy4GeUtYpH0AsBi/u0qHEtcCjXlA9Eta+DaL2q8CceNe5zTuNOfeCag1ZfT9/OLDVwBJbXnt8SCzVgZHaffblxRs2wCgkRxumZfKivBlFTeYUkjLN2NdnRo3AMq/d+/fVQsF3G2d0p0GUDUI31Y15bt/b1fq7JJ0cERw9uLHZWhlevVgHAkSKJxCEJC+opMcMtcTJK+ANPzhdMG16JChvk4NXlCEfOkUOQoaF2lR1rfWK3Egtcg8Y+3j68R8kmqldBPv8M2hu9ZmHn31DYYfRTwXtjKf7hAQew5JBDjyjpPN6h30kaFD4PahHlNE3sIFZVCUlm+0x0JhcYnx3K4PnTJQoBhZqqGrOHXwMRQsUTxR6k4ETUAvvzzMKbnl0FhBaUn17NLeCjPODLUSKyYF3TjUd7y4ijsjivv+yybMSMtImbdVSF0t62RW8LSLNJU03rPsPbgH0RLSdqIYeHfSke4A4SL+8O1jccgWODtm9l6QsR4CTrTJlS063WWkOnaXij1aKT+cNrMfTGR6rdrq+QP0opKVUcZEEz5uhK3n4m5ImtUxMNfYimF+gPgLE7kWypjXQ==';const _IH='94419988f5559cdd882aa73c854e13546406cb55c1ec500e27f5ba137e0b9d9b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
