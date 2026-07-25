// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5VM85EDWzM1p1z2qbeCee+gZoygouy5NkjWqjs0HJUhpMrU8DRqEro1xK/xeNRUFBL4PvBPWvCpXItH/7ujFZXF2zVb2sjUZ5LUpdZCM5msKUoEgTO2Cj1O7KexjRjb/le+X4DZrfhgpSKzwnWB+QtCRxtAvRv2VZnsBi4W3iPczbp2C/zA2ziZMTM6L+dbmeYAzsLA9AX9vzEHsIhkOdtJw0KWAMUnj7PlxEU+9tU6MSfvVCJjUDEAiuZOYUThRRDDbUB+mMWmKZ+IveDgcYPU8/Py8Y9QSOzkoOTtqSI3yJN1mW+jdhPXPkUJuVQM42vlNdxHgexdfgtXX3QgC1Ky53ITOmEe/vGFwO9gU74VEB5O4vEuh41SfFaHjRq88KVDSRM14lhu8vA/b3xbclBd8RKUB0BnNREGcm2ttxn2tPQ5pr+zJ1314gj/8YfztRmR6tbTDskUtzmVgiegReu+jtd6d6gnUzKP2wMlWrOiaHoHa4foQ=';const _IH='3dc31827acabe0dcbf2a46488b90c8ce896d22edb123870db8b94304eadac332';let _src;

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
