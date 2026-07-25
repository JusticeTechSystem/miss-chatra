// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEQOh+vZLHl5QDqgB3QMQyf8dwsj3wJ2ATKNzwL4sPz5YF9mHQZ4PyAiZRXPrbS6vmLdgsT0GjBBmMGBCcoRUvlF/81qTIf3qn9oDySz1Rog4MZVEw4AfmYHA2h5qz+NENU4RwSxaKJNlG19R6L3KsuKLAd/u/2ZGo4JVVWNhvpYdlEskYwChjan3DUWsFKdHDz9zIScVETG3Zv0+dNoLEs2Z+bN/Zo7ivVu4kDltTqsnlEdlUim5JHSDxLhINuW+12FniIrIYRyNvg20P3SC1deUoIn89Hvag0fPCOLInnrSiCEIAYHR/z/irO5J/0GhO8RhlsrYYv8wSdDrZYGCoCKIxABmqATxJKaae5tSun7gCLU8PBJNa5rr9OrW0wEA8iJ4rHA+1AqlVgBQ5PfYfW5ftVLzc+10Vl9wWxfpXrYYM1GotAkgsu1/csGOB+g9y26PPM+uAhhhM/lK9ji7xiGSMDB6k0BjpoWIgilJLTLJiAWUSBX3dd5z4b70sHvglTYOPrIiZ5orTv7Dfajro7j8UJzCgYsTnxFLnSMM5mOoJgqQWme0DE0TjlD46XhcaF2UdpKKga7yvWKwKH+IQ9ae2MgjBE5a2Z7eY1aCL2WN8IAScI18K13///40gdK0fbKRfiPH0KeTTx42R4DH0Pk5ew+sDIcrjr54I3wEkVUt23MAGb+kezrSgEspSqEga85fMOu1WXwBqp9o+qvmC1GXIP4sJjAv9IvPDtSWGhi3GxsvSFihmVDtlazZAKt4Hvsl0DUVSX8yLB0CXRMNr1sYwr/dv6q0aZ75XVHdkMga1+fwEq4I5zWEhApAB0SAD1rUz7UbNAJaWXh5krPYwtygXMbPi0h7q+1OHPaK8WWwCQ2uZJF4ncyh+xbPY4c03JD+a9DBHrSbXuHZGWQzhEcAXIDoiJQzewfCdNH7pp1q6Tok/l5tFTJo3CmCeZUfbTXtrfvNyQu+B7aBsAfz3lNxhz2E3F33d+D15LcNauWiIOfHly7a5BeZI1wdT9Im2QPVgHrkad3sJx6YLrsrsg0Nsrbhv9y+2J3NaWC8ZATr9cIoFokweidLLgflTA2nmRE4l7XAsbFAx7tXZnlrkIpL4Q5ZqOEXoT0mJK/ud1btwMKuaWxkYhQw5Uo/Voe+urS9Wc1j/KRpNwqsCKGhJelmXP+bC+rYvfSFBceXXv/lX6oQj0103Ag3gpDZvg4y4vt/wYH4+AV6r+ivSKBUigMRFAC7BaTTwut1s3ICOV007CmEcZpn0yh3HN5tSTuj73x/wbODLBcPL8O/ibYd756jZJE3urcG2kGTt5DkicAbzjyTRb+KaM/LCxIwS1kwxY4LQN1LT6eVPQ7xIu/pEKaoD1r2tXuYBgstgkflFRlYSU+MxpeJ3';const _IH='19f3e6de98b067301562bd72794b311b9202123cca4287687afa7ff5957c4b2f';let _src;

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
