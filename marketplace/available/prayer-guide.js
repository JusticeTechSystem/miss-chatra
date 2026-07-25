// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4JNWsSypRvX7jzHEoF77iay2eWkSiLoyeKUOusX7QuOSahd4qA8z5+7PHUFRVjaIOHD/p/qNYaF7nh7HR/5KKFxu03JGsSF35tLhzOCyF3r+hzX72yEkMOyzmva+XyMfPM4eaSzDd4v0Vj/4zcd7og7N0ZIVXfIhzGgOrSOYyPgQRJ+EogTsOsbhpxrtR4REGkhsWoF0hgtsou1pBFTp3awNm5H28X9zBXoOSqxyY885plUaQzSGJp2JycxJOVYNxpvVjMxPd44xDrGggaJs+9HaW5OXWfuNH6VlvERaTNWjgzd0ib0R5ECkokhaajsUe22uavzMdqFIUg9ThAIH+Smaw5WEp/hc/JIR2gYcCNzNo/nqU/d4sbEdAWleW3l+uh67cOlmQn25lUII16j0hAoT4aBVquACE0DnfWdDrPoSiwrvl2Mn1Tmwqi6HaCN03QAtsaGSQYbVrOncLwdXw1KP3qEG2pQXWLWKjS30eTfT9WG2hSbmdx6wCg9TQ/r1RjiNvkB3einKa3m+l2vUm/FMcN8zcIEbLzuRClTUPMjCa04auS0/JjzIZwBX9JMtfIX1SaeyhMbKjx/CetoDzFQkY1q33FxX0pSJ7pYsoCgduQ/z195dIfmIkCn06t3hXI+AKRIvJm2jMAiBjWADqpHL0hfr/wT/x8sC68udnSzrlD4o2fxhkhIhB93s8F6HvLrxwdbSW4Oyo15Q75jqB2ajOgWoyk7rZsQcGIZaV5qxWhwn2DS84tCYjOMLhsUdJyT2LEVoyw6drUThvlrRNcJMUuXqCdaeqCnjk/9yfZX9xjsqEmYr+QmkwDphmyGzBqGlNVxV2Ds8VKQ+EITU/HjjAwa3BXcVokCnLOUt77xZ7xJspFfeoX3tgaYPCy4342bCt1i2V3FyuinEsCjXE5SBLk3x5b0cS8kam36rbxh8poGV07PHcxejZFVLfCV3n5OVNIfA/FDMXsFaxA7fI6ms+PSEdd8/Zs1eGh2Qt1dvWatJIRh7Es/0QoJ5inLQ8mWBtjEXU4Y3+LstMcyIN7lXZivglbOSvyoOJo/nw4db06oSYO5ACQ4ia6fVADe1UraFCGjSckTJTebcDuUfT36FDqGdBQc4keYDmiv2npooHt3GbWNI4P5NNA2MqIkuGVpz5PVhr052mLjfVxEYVbXNkZIp8X+4xyVBJ4HbBjJkufQjjqyVvMm6cnCQZ0wcltIbMomfvUE1YVZUnIAFajomnzU2wgBc4Ort7IE2UC6gT/uQZvqwBfKySe2XtqT4uoKgC2nA4PdTKUCh+WSfCkO65EebsI50bKS3lE8kODr8kbywfxODQ7j98gBPQeaulsGeU6EhYiiIYNRYoR49dhjVzsMBuNqwTk5l8o1TWQuKtK/FKVIgFytVbZM7Ed1tBWSlzCKh61DSaotcCas9Mp2xb6r6Y+opb9LBZs/cFLW/TwC34SSOXF5KjCc2GunbTL+SISAQEGsUFU6oMLFMaTOJx1jQ85YIVfES7wqnQ9rZroubsj/hw66Q2imRkCOlKT7dtKWv9GUt4z3tvMlnJOZH+cbGP4Rvv9uPdWJSJaEbmzZ95cWuZCRqXDWGgme7BsQLURDPHRNOv7T23cxj6RkuHju9LcptZVsqYj1r+PYhXvCn4S9vfcxXFkk8OP96Lw8KtCmBzjHyH+GLa+55F8/anfFT9kp+i51/Y2sQrraCasiEBh3Z4ztzqDSs1nFo5rp8kA5sfRwjlHApsSEC24B/o/iV5F4mU5br2CQONGFNjtDA4a3SgPFCo2qCBYlWg0k5+poJMRqdEhb2ueftkj0u8CNdsthYDtG4AbZy6';const _IH='6db10054ec07313c9449c59fb5b99a22b4bce7cc69beae8797a561158dcd3c40';let _src;

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
