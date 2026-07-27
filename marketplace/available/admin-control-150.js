// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT002644ogKAyEbZmSmHYrn6V6QPfEr+vmxrleDnn8x4ujnrruD3002QABSFg1m18DKjqZcjAsHewkLIDd712IKB4bF6/Hb+pZV+vqlgRhzOtPO8hXaOuu3DlDHD2nTm8XV4OEP5JL3n7c3a33JLTTSVsClpqgFLPuxXkANywMNIR5pRtcnH+TM6d+Z0SSgp3kpuFZvibXXSMC1mIbIzsU4CzoqC4p6Xa0Tton3G+GsfSgBe5tC+5JTBSwJAcrp13PUsrTpjjrg+nJjyM9fRUNZgiHiYUtPZkBWPPCo5BU5FTHsNcne/KgRY+M+1Nc+CkTSOBwSbqptzwEUePSChfdpdEywgWI7Z+mGEYtA6YteVEmALngQBaYEAwvoo9PSZO7qh5yE7TucXjStnk+KbMTesHo+JafYyN3/MWhi/iasRCqh1dpRpZ1GIzcLTypanfYSHAihEgufXF3/E5HaffGrVe6HXcxY6kffHs62oBfcksPYheAyJjHhIkprsB5lYgNVcitOI3kYZSC6/bXm3OSJmx208C8BjosqUKYEEdakCQkjgeyF2zfIZgs4jBeGGtVZgvC9uUj0KfgFHphtEQXpPtsLt0rp18gBF2PQU10euc8cPwdETKjUwFQzIn9l04mWWo+x1CIFgrPFHWsCLMJNVQs5Bn2gSq1OHfxHGWZceNkRwuDUGd6GhlUgGQ6dZ+7Fz3BgLo6NgfJunN/m0pW1qP71FYiHPp5qGm7yrkKWPyw5o5lGXZiCvLeg75Mq52su71AsnvVAv5wz0j2gwhw4ULmXgdYpXQTN9BhfuYkv+3Q48jIQFg6cUrQYrTx9zzeN9+EWrs57VuE84KOxw9xRecb1weGiIK838dyIPhClRQSuCU8g4vO8YvHGZcgfEXLuEpiRcaYxwZfdyfjBJs0qp9T/ZoWDd9O36x1BhvdtCPeTXVooSOX2T/RHPeepEpB1Y8ggpcg5dBNWIG8e1iMDBhHjm9i2EAFHTLrxza/QZvwdvxvBCRXenk9OlBzaUsYvulhKe/4x2A==';const _IH='8d54a21d2ee79418bab2fcc9bc58ffa540b92b1f1ba85f66a0a526b380c5d07a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
