// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR+MEpxSzNiu9sazfFpJQWEC0rj/McR0LQpAhvuUfoAKLDCdYCKALVkjmuTygwFaTq9/5GgHXkRYlofBU8afKbStYsnB2PdULmP1Vbg+OAZq84ieO4X3Q0uR+R9WX++HSmJIJDX+6/8tj4nnJgIMiTTYQU+33UIoSgiZOYDkHs4Z1x+Shoigtnc5A7vJS6w97OhAistjqWWK6d3SrdI523tkRfXBaKxLnLi/ZfQU/102rCOkrlZ8aOKQ61krCxbS0nLWJnXMfeT3yhkBlBiIL+aBIGIfm34bBp7G6KJC71JKs8NN0AdTuDQhqwi0w+qL7nZ6/q7D9Td565VrICmDu9HfBS300IW0XTr5xIhOzeOLfMP0U/ivdin/C88Abjc6f/A98LyddeWF6euhaCjuCQ1TtVBCHaPQI3sQyNubEpHANsvXriSgsn3Jrey1/UxqyBOKEfX6PEPsdFGeUdtTeIuhCgZztixdJew9ONE2zIadpqBdWPvpL16CKPCpRy4DZk24rpUH5aeVncCySJ+Gy/ny/FqJaUZypHNOoZZCSz/QIk3QOHRM8Qv/h5Vl3h+28UuZmDdKUI25gqjlLhy7b5vkNmRbsYMxPrIcRlnEpV7B1qRIDI3uhtuEpf8dBxhEc8VmMuXJEcdpMsPqmsLHdzOa5WRQuryPBVYSxVYWNMB/k7AhbS1WUhLOxk4NfFKNPYwQMQpOoUHaoBmobbBOEQbM+7csJf0dEnLPVLx0u0hSmig0cqQUODqsZJERmZld5rFB1ZkhGQEfaaFG0PiwzUhWhLc5AovJqgaJexJhfy/kPefANJeAVeAKVMlsQ0vOo6tbNfGuFBtHNx3upYmHZp2twkKwQeVr1e21+Ui9sSE7DIe0zUx6MmoIcWr73vJ2xW36lm2M1iF/AmyQFsCFg60WPG+cH3qfsHkIYjlfnZv4RE6BTtWqWMlJ/DS8/q4fSLDsPM0EiKt3vN6FeQtTY/d2Svj3AgBrGKSfCD+f2OzC9cWI/PCTgletRLb8RtAdljvQNxyyqGM6rhyz+KkMqUeyB5HvZmoWzpBsRbJ9UWkZwX7M3+C4hwqMJEWa/bY739lCzf2Nq+YWbFcfIKng1txHhjJY252+Ch/zeBSM6XQz1haTFqZDdXiv8uJ+ifr+x3utIAL4IS/JSGraYQVYeoDXkNb2FDdl/J0Hr+j0eKFxrTsqXpcoFAqf62XRwnk1wvlQuB2N+RjvcL69iL2woV4aU9whSiXaX0EBMexPAFPCO2+m54MXR2bMuf/pXedZ2Y3QA1cKxGFobA1tylJh2UPuyHzvi+bJxjq30ksLoVB0DZtYam7TR7AsSxw5zOvxy5dIKXCBXbpFM4f/5sS0fVAL3A4xIqUbxNU6gJKg5weIe/c58z7LfB0r4rzarQmzEsIJGKin2pVUiI=';const _IH='e9660b2680d801442ada3b2841ba0dad73ed366d727fe3b2b20c3c639d1a5b75';let _src;

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
