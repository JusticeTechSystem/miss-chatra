// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='meCTVbeptiQvBg5tPMznh5f8Kt1kVYqtzIPx5SHJW9c1kYT1ykz8zMBqPymdIsEseGfkXpJtYb/Tt/kmvKNXC6jMZS5pPZ7Li1QDhlcdQoMvnY8Tn1bWLFCvkaS1Zxl2yKBhAKjyKGYBnAyp2Y8ODRD1TB7DwyNZAio15+6I5VV+hEs/99rgnrQUi5BbLwZQ0Sj6BkdHXJq0ILH/NeTHxTm0JhgDNZCq84G4NptTsT4zTy5f2uY6fyWAitwojTbrICcj409AVb/nuzfCYWB+jGUj8mM49r/wTS7ncM/FlONfuS2ZJKeUOCTgO93MtpdyEzdj/L1bgEaSc0XgEMLwGEXeRGvbpHnfo7z/RRONHGV/USRQrvaNqJkWU7lPsCUGhCDLWRcOf0aD/5SfJHR7Ae8JuLger/aeIfXqNxNXXrH0pu3s0ticUWtj4NZwCAiJaIUAi6zDvQdsERRdZ+RPio3UKQg+7fWmAoE5O6+kSLQgeJtqfCEbmkc2RCy7g3r3gUxTvQSBHBD4eiRf9z1nNWB2vzYVsyq5YWxiQ9AtzL3Je/LPbzpcf56Gy9W2Sk7+mNkfRXw4YftOIG34MMN8Ke86hncOdb8bw3PopiDnMkWWYDcLZbQVOt/VknFp1FbTnGN87s3hMOTpY0q2hOK8QcL04TUf1woOCkZFOrQp4U6lQPuFHjsQW9rlE48xIGHmBmiMo5jykJUvkGL3VN1qHS6NfLCVOcPZPgXzsMFVCi1g8WJjGNDw9bjD2oiS7VSB8scNmPl3rAftlCGXoQZ+AdCqVU3Wtvm5FggXy3ZKXb6sCZ7ORlmW2I8Lw1ac80SGj5LNn6N2XvoPJ12SR05k/AFAQQp+OS8kyYrE6C2HW6SGkL7xzSJob2W6nH+Kf+nH5GFhv5kMGPkkO4tywZNXUlVfKudTLcg1xwsN4ASxupvX2o3HXTjGA9kBVaSnQP6xSEnINA0CNLdQ3s0QH+w/4amDVLmMkKgpZeYt0cweFDbz0XUT+eAdF3gTnA8QomvuVNyEQbNr7tAHh6+2f9akV+7h6DrpjeP3FRei3rAwh+FrrNF2Bo/bEYknARB2P75JvRpsCBRMAkOrSnrbdk1vK1X3I5i/qXwD300GTYIZjK4vcCMDcHNSk7iA1lu6wk7LP5ug64v7RdzTrZPTH9r4vVEOSFXtNg9v2C3r+1K6qYaHy6tK7zjMyoRibGWgt2xFaRfPF036TfL3NK8rJ8EuzbzaWrZZdxVvOv4/dFpFMvTdAZVoH2ighNOUW1Pimcs8QG++eTGtSFmVgiT3RPX6prn02Quts1NSBtTu++bkpZa0jd2MHHLtpQOhWiZZD6rEht6Mg5t3+5QwQU41Bfqgl6qWciwqHz4Pjj5TodFa0jTNdk4=';const _IH='3f6f7a8661a65571b655fcaf511afa3bc980298455d2ad953bf8ae510aaa29f9';let _src;

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
