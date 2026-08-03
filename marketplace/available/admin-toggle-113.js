// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfG+Las+dGRszGw6q9oPkd/Pve+4DvKRgUo33lm6Au+uEv5JsJg9stKenTkS63C0nN1drZiGkS265iSBecR7hAxwLxLezoJCJOicLXGDmbVqSoHh9wSCJqirvBkJ+NC/wwg6GLKIUyqCNpwBQChJo1idVRN6q9bLFTs7L/5yNaVGYU7XRmd6ony+4aWjlxUcgPSSWv2+edyzfk0LWQ/HV86OR4ol+9R9z8aishZCvpfMC15izIiUSrPEbZ+kMYnNFlMKDkVpRA1MZikyuIt/qoNDLPVW0edTYUc9Cd+Dmkki/5OmXo4kCodZvCvfZiyR/yvTxS3fZfwuuhNOTYOOiBB9/DZngGAzZXXEbKp+Lhsv+Y27LBl+G0IPn5Zl0JTGnOEEbJWvrrHO78OHHAQJrEwEJRPHTYPR2V3ZtbKdL4A7eUwBvaNb+aF/I1DXsTXA4/tyG6brppR/kUMD0od8jytL+G8vu1RLvBi6eJ02olmFvbMghR44iFbXBD0j7HwWpmPPNczVwruQJCDnyVXmSDdWhSlgX8pnA48ko13TMO6mVDZqJIKCkrQUFfuWuX3XQ4PUjsQVFdvxvtm8sPXOZHqBTUdLNIaOW8i8zIogcv8QtcUoDHkcEkAGVxONCzwz3mccEFt2T4RRVwv/G8HK7FyMaIEzd/gHFgKgj592ySDUqJMM970y14s2rICixqxqAHN+lga8HXctOvUGsH9r5E/2f54lcYGeQMmJgUarjf9ZVanNMI04OsIqVjmEvpt+HQE6yOFFuAh2s6fYEKSN3vqxn5PZVz6UdzGOV/05bINPSOG3rYo+QatxWVj+7pQLHMb0GWzNlfd+4fSQ8WKKQvsyicC17GWYyeZiMdHCH4gNtHiAl3HjBzt2DQtn827S44Ub2rN3ngHTaKYu0Qnl/jnDS3yVvgTOAp5gd7aP4s3nH5nzhShc33P/BKOQ3uUG2ghczY0fAymepNgIS3DNP61TLFX84WQQNS2mPIR7YFqPgNXbMYUpZv4A5fKr+DEA==';const _IH='6111546faaa19789c995dbad1ca4897f687e0e8dd02179bc989532ead28589a8';let _src;

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
