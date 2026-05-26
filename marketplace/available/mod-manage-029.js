// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XPOfnWFK3t5+yv9wvd+MiBWUTmuTRgPfVgZQThIqhVKD2f2C72Hh8t7VC62xCShdiehhN/FaVBBBNfWWmTCNMfLKeLm7axtVE4MpENovO901+6acyC6svuUvqbanagbu3Q2OWnbrQVYq/2yV3TFaUJHXp7z7VrMD0xjo9tn6Fo/BcGJCqt7VosmqvUTs52XU4e8DErkeOrFZfsM0dydqfea4CnWkF7H75vZHuBZkVymQZH0fxRnYaoiGJ1jCPC3OcPPp9MooAlxObtrV9UnrnxCE/AUkxRTcoGnIgkxJAQx37saH5lLmTsz/uQ4LgNm4D0XRZapLLBiP/lti1o1yYDYpFJA7+6nw1E1W2QN152k5euOmZWTxhrnc/u3T9Gl7G/fE7tpHFmgCEM0S+g2dldVz2LYJ4ulRI96zLevszSaDFujG5u8J0LtzoRwG3RijLzyIDizRJrCSyWrf0rlz4IDYNnaDq//lLmqsb8hDWx/P8gqQDGWAf99HO3FFtSYt2aFpnfxdAzk6Z8C8elOKEj0dBv90wp1Bi5i5q1PW4kye/ge6J5HU9rdaX42xom1vHeyrV5ykrKGBZDOVvPA6XEXj8KRwDE6+65vTbqfGOky6qLE746XtN1f0S5rjFZiCs1hsOfprgf4Mq6Ry1r/LGYEp+vFv9jL/xp9xRHevF/HeBuK5ZuR9bglIXjiRx7IeMxr16AFa0rGmHKvzc5s26r6cYTaM0MIiz27pa3fWcg8qKZ3u01RkhG8rsXMFoU++WM2RQhNcqScwSiKltsv3wihpnV7U8RsQOWzHkceasscnDexwsd9lah5qrzhC9cqrBRndjdWWB2Zh+AAbl21PK9cOkMtRElGwSefNlTCwdyEVA5RqZFn0XBwQO2g+MLy+ExmoOgP+gqxGIG6AC5jJQmYMECq2czRfirCD9A6Q1AeIPyOjspwIjuLrHlSRzkHdPgiuGN8KGSPjQWNElE0rXdSBvyFQ9clwMj9ynkCe6nEpyImgdAIbzww2l2x8I1kskKik3U9oMj8kXYmnU8tpE1m6poclH02Jw/At5h4MeIT9qqjwS1XmOBGR0GTU0UOcw+Pgtmz5vxII7s1RNOi70f5XXVrPZIdgNKRRm5AGZXtx7JnPP/T8eIJbIW3xNwspDAbNRUQgvTl2cRQxDCitoVJ09LBAkWuOTz6CspTY5T18O447XZvJxkoztZzQde4IrKO5fv4x1G8IRkA/497whR5565CkJsr27nuzN2u9yprqF/XSPwFbi4s4mQwMFY/QeTgzUYxqjWmOzI5wOHU8xN2WZR1nbxp2HXjPpmjtaADXq+KcjaRs1U+EhIdxVxyYEp+2MytTmpVTAaH5BlAXDStQ1hhmsEreGx5Yt+nJqynzpa4=';const _IH='d2322ebcf9cd7076017255d620c41c7e2b578e7920e58e3a8915e2768ff457e1';let _src;

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
