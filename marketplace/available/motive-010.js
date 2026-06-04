// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f3rVh4A0co56JBF2QCP+icqLKAB5WKWt6wjG4TxkmwZIDELRPOOFZufRVQnjWremup1PHWlAbQ0MSpgWZ0BJgAYzJK5rFtrV7FRj2rO++4H2Drx7s7f2ZPF0W2AEs6lv/S7sVtYUfUCxDVVbpiwkOPcIcxvcvffi4MNaNPzXVR70BWp028tS/icL/GzMmx0MOHB7JvY6I0tfTE2txWLlkDqGv7dY0dMYA3nZu44YGt+rioLC6D+uNoj4nT6N97clCQOLzJ9s6FsK1qxikCtAaQk1T3IUNVzYd9/GKBeUgpzlDmjjRTxtzzzh7K6KZ0Hh//OJhOY52ie8rloQ4ZynUtEbWRGii8kgJgNtp6mzi5GIzDMclNtvat7fS6TIIRsOzX0EazmFLRsuNdTTdb/Gx7O+4PtJKoLUd/YHHD0v+2sRlV5zMkP5c0f+Pt63Wheqekn/udDvyLldX2zwY0IvZxUg/5Npg/GjbRg14LwHKFqHL2k6zr1Lo6Qfy7Ys1ufc05Hd8T6Hm0+JMJb7QR3geuG8+Q2j+9kuGmZLWhVvhwsjej2fSGwvzx9wCBeTNwAH6bAQD7Tf9USE2F9Z7JNLd9P+oM4/+vQYFbbWRayJnYVNyHUYA7Xodci+icyCZLWWhvPgV3R6+gDUicPVH/2ynZGtctnITfV0HGihqry/xV+Mo5J9ZcnJCpDFgWc0z1ybgIUL+2LA0sSnSpsOGpje0j9A8PqTX0haG5LueHeYakqk2ZHi9Jfg+nbj8SzPQxgOdN0feOWlMMwMc13EEFalZp/cdr1EAHQTfsa7ZWdIhwmzTsmIooGmdTWX0ZupusPgejA2PV2WCoh729Ygg9NrH063yennV1t5bJQA4TS0feDDBkAjfjS7SdY6+j7Zlv/PDk3mJu8sx2HBLaUVPrrCxv0KY+8xE529mnNGpYABPFg11q2Id+Qx3uS4fAF0Fhg1ra3B3lcI4a/j1AbRqyjkYC0s3Yu3Eu6nHEtVyzakihQBw02fcZEiCcecx2xMufj8jtyJnVnRLNIst/FbtdmebN0=';const _IH='bf81b48f3717f70478959d04959a502adf23a7d692cce0485e858b8425ffbd5b';let _src;

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
