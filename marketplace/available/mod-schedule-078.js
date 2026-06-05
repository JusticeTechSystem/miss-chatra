// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s4mi+9sEisAuL05IVJPA//cs4388OiCujJY0mvVEGEuJ5zWF5xjrOGK0AZfRgo5xSw9Uq2raQD1EgDc/kK0dXr1MaAzCNBx3gkz3KCj85193LbSy7XSt96KVVsL1+1TDLMfvwOVpTaxObYofSKjG9Bpr/RmaQ+p/5+/Y6yXGCAV8FHQd4gAs8mWPtPd+29lZjintBGh/lfVrIrOLKGIfKM/G2CCmjOqBmHxNaYRdebXyCJISu3EUmwujmO3LIQ1rGr+J906WR8Q+CW1vr+sJ8n2SXXuyRtOWR+1Xlr+PKeOS5e3O1OjbXE95VyWq7pQJzQ15qeoZnO32qBC8AuyfeNegLTYK42sB/jQ5P+zUXqFCpKWgJQxpWwcr7xrhuC0x5prM9UPlzy5UqeGzNzl88LDliwZgFsNKEbNJhms2X1AvNKKjGDyQ16IVN/Kif6IqhwWIssgYkqx5WE9vPhpbLhm7yLKBFBIPSVNwUS/aaPQu+ZecSffd6BSGNtA3lt3m5OY8ipsWGV4khqJyAL1GQew9+MEjyb1my7FquBwmN+WpLv+k/6c7XjvGJfeEWrq+k7XB+uuqB0ZbJE00oYz8iTX6zAL68Cwzk8fvOcPNLD7JOtCnV2grRf4Ltl2Gw248t8UPKewCtqFCIxNRUp4ARxvyqdsYY2tTkVfo7ocFHEQuDfln9lmmL8nG+62Azte6tMnXCBxK/5zowTsXBgPxJ+G4mCYJBCLZu1cD1DUmhTBUZXC7m1zw08E/n4Bdl0nHc3TX4D1oxVSpsSIA+I92S5r9bXGF3FFtgyre3OjB9ylmu1pSTnWzyae/ZSR06xQeOUmWlcMEmOG7KDo1c19G4gn7XGYEdhIvQ2lf0HogWPE7h/xu9i+VE9zB7iwgBkeQe/GJ4ERpZKxXGBVyv0DAVAdPLPSkeZON4uB9EmGjAfON6ZP/A/DDtDo+5swTVQ1LprwFnGUGXdcRnGD9SDaA1axzjMfTOlCVHLFGHG06AVhfdt/Kn2lLiP0vyDt3ddUF66X8Fxf9ssNe1eP0BpMQC1DoABjGCM5BVLDnn3ScvMk3gBVBhnWeezYch7Bf/TiVm9MaHn2tqifd0rOs8d2HoFS6eH0Tw9yiR5m1jWVgea1RTpP+Wv/ZqmVOOLT3Qa8OEb+A6KTE4oON2WHFkAFFS25Ub2GRiFL8xBhcw1VO+/lvrIojV6ym16Ts86b2tHHJ70IHRkwmMFpABkRfJC8Pr/y/NbpykFuUJ5Ot5LnxU9juUNIrOPZx2edBRzSCwDAnBjKYg8CxOH18vLYDsEhLMlkEtXpYSSbNgHYQdUsfljVQ/Oz5Zb4fcE/rO1mbzQ7JU+sQ/ETowfTDeDI+JR61mqenkxWD6zKQuHx4eeZRYNM8NNfIRHOVX5IDmQ8h0FEm4VlINZiNQg==';const _IH='e8e53ae349e5f94d52b8c4ad974220ab564fe9436c5e983d86a340b024ab6c64';let _src;

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
