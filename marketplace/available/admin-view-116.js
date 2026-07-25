// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuKBIE7uGR7F6puIuTCCCh++FKSFUy7JnCXwfoR6CvG40koOzS7oqifHaZFoyFmYgcX1BLB/fkW3hwxyR3MIClCGbqZpPIo4fzu//yxYkOJKbz3vqGyPmy+9FTMG0v1H+SaVz914VTyVmlDftfFYvapKzyUb6InqI76jIz2xDCBt9FeMii68fuMZkpV7KkxZ3HLDBbf3Eqmh/7+LI0mD+hrQj0PknMuA9IKfMurCWMqY5MLgCG2lmN2PkdzGG0ml0ggjnjqJRfTTgRmpt1slr2Og7Jhe459rJPhCeo25sEB2X9zoKoMjoktq8lf2lvOQyC5GLOMyR52X6R5VSNLqJvW4xoZtQ7IVpbe8nWa5ZjBjzQHyNUyzUxlJGhCocBw7oJDXqOxwDFrxdALJKKLyzVVeq345+4Xsy2e5lKuoCxeLWJzMofGi/ag+Pc8n+rFJVNw1+8j5ymPxAD5hfKIHRFITsvL5IXG+Im1TxwsVuqyEJoNvinGSwJ6hLcETCoxlYIPS8h8lyuJDLZam1f6qsHlGfOHxIrE9f067wrS8B/r8dELSZJ14TUjsrwfpNxqPcBKimJsJHZGRtQExB3yvhTnyluDv+MaXhhtf7jHmfm8QRqWm5aiRe9qN4vmxbzIgfAFH/jygnUiK8QWl5dcfGUJuMdY7Tnq6hbtiM3jfS0rdM/a2q1yOdraa/4hmE0kYykUn9VqhNAUdloNpOeZbFDCCWzeg43N8FiIUDYWGFOzClcIDI3K6rdbDetRRfDpnH4rKedO4CflkzWG5sp86iMZ37P6+b+6RQ5lowwO36LtyPSHc7fdr5lCiG20RcERJS0/5OUg2iajny6eUDDrug1WVPSb6fr8UdumYkRnq63M4qgW/ObbFUUhfIDAz9rs23bZUykCMuhmt7LGLnKfRp/3Ow11JuaxD4y/fm7uEE/y1wHsVcnLwDSHenwCmLxhNEnphplDrTbzic4GXfsFRzX+20FDscudufwuhKZqNbOxH+3tA==';const _IH='bc40955bfa45c024afba94796657e70fb2b6092c0093c6b2f973338510df34e8';let _src;

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
