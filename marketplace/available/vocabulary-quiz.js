// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQi0IKcLceOlRDka8WRdr6POKG3yLCS7RtjXl+TbySd/pS2RlGK72mypw1a6byxHQSulSBcROrGFPTEfxSfrX+UmhPNEQZzEH9klSAxvNeTyHi8RJS94XBOLBHuh2H9PrxYx6q0KNeKEk3wnuLkyJ8a2eIg4EegW3qxSAFj/lWBZ2Yz86xu33Fc7Nv8lzQykxt8g00BV7POyCWIbqPO8H92yqu9krJoy6JcUpb2ZRKIIIrVnc+qhI7Cf1DM40XzpVfXlXd7xqITGgupXlaTOF31z1qoXIBd6YZXCU5RX7yEQ9fi0oNFAauD/Fj1q+htRWGDnn+WNgDTotg+278iA4iyzGbyciP8ypxhcyRCwqtRb5x1awgFb49zklY9QgljY5DDTKEV+XsFsCh0jTUrO7eGOtTOTkCpFbGTncEDVi/VT5ktJfALLz7BgaAq64y6C5MOmhFS5pApV7Jj42Tfvex1bvwGTtvDBnbyN84Z/kv92lJsdg==';const _IH='d267b242985ffc7bca8be69067e71b15a653970476a6ab8907132058aefd1f6b';let _src;

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
