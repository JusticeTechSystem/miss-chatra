// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSymHS4yFvaZwNUwoBjMFLQrnRW8CRvJLhkcDgyFqL5Nv4S01XtVf4mnZL5ODKxG7mVzPjXwwUZLKw609HHKNLqRqK6keXK6p0yQVy/MP6txl7HVSkHW6Mv0AIvl6QQCNh4fjuc4MsvgUomrmd2S9zD/ySD02x7Z8lhx6MdxoGjNMgoG7JhJ1TkawZHZn4ds3imBpXRrYPfzft2WxpRaKcxlPu/uxpAco2Hvkwbbh1Vt1tnyQwND9bbpQfYozu/C5noG59B9CuIaLHpPamEPIrCwprQhdddmlWpiranJDHNRX1cLHUp1dGQaDPvj1pvhSSKvaEgBn6awXGGBWR4lEB7YaQDCxtpbxj1uN3FFpUewt0Jo2ot9IXh/5Wy/SpIWhmV4gNF4laxw8eXFVQTet3JbYzpwXjZf3LSkG5pDQlY+bkZfkXz9zl3rG5P0D6VyD+MkkIgwu1XuILc4NQWSKw3Of0sOhykI4AhzyRPV1Fc+LDZtWpgWiyu1fBUutPqdgAqKqd4FRKF13h7H2VNbaMWQVxCE+mUWDuvWQJsnz1B45QjvXvMljx7X6+TI9snN23ftBsIERs9H8QuQCcBRzj52QNFrhOMRX8GgLyJKnopUJxAhxD1ooZn78B2kNRWSI3aVCdbTLTIkwbXAfEaqIg9ctBndNG00uYyCeHF+pHoSCej5qq8I9hHnMyGiriQ5ZjBtObToqXU0arM6jfOahMbFGKeCT/XVdlPL/YZNoSx8bETvNQg9tt3r53hKY9k6Sn/QHxvtByUYr2XV/DAJNOldH1C49/XDfqWDJ8eZAfBoll4LR4mgJaazUsFJntZg1zVg5nYH27Mmn5Z6/K5GExU2zOSk2r8Tzz93sN+XSTx7FsXTkksr9tp6xBx/l67Ml8aFao8vhQDtCsG00tOBL9psGtX/RDj0d9DSfpF1idtq3opple1OLidBnE4c0hlduA4P+wNZvNHuscHIRL3AIQTO7eubGVNMdUB5HeGuqxF+qB0646ShQUW1VMbc7+4hVxEVu5CEv0CTuxHxsa2+GFO6aZHQlWcFKPqYMiCatJghIDnMVaU0NpoeEYxEuG7jdPW9m4emslVnhDtJUMHaGLcFeynGklheYF5c4ZlQEAI/Alz3LKSjt6VMfcbVOklQ/IfuFEL4gXS/5AckN0Wf3jJLOu5imKdqLEab0YPGd66im7lkqKwM4EV7n7U2VIrqvUS0/EO8EuRuouRrrdZ3IyJ0GTe29d2/a+0bhZlA3iHnLpPPRH8OHBhyfmI1DD7N/JM3HHsmSuazOZE5MMAGIW+FQeW4/6D5DG/csYKFwNTu4xSlU20xOLX4rfayW9YoN7uS8u03T5/f/X23rs//7sM+C0afOdD1YfqnmubbwpL+631yULFtluvMnYCr2Yb0V8PA/5J';const _IH='6714d68f0ded27f415d887e64c43eae04b0393eb35ac75bbcc756a1283a37e35';let _src;

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
