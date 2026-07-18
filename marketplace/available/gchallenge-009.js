// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQaQS6+aOHzsbvLz2bS+Z3X+OGIoY5ETVahtOPycPOu3q9mIHf7SQg2nEQHFIpcUyiq5sNHt25stRgoXSD8kg9BXUftv3ye3dN69AVAp7lzrt9hGaWmuTIGaewnxRHm2vV99vWmpETxfQPoQ26hdRYwK6VXnj7cbJTDNsJgAPBoW1tgPNJbMA8+xysq+BWdKX+Sb1eMg4OjhsfEsg3sfpVHITgaWra8pGiGN7y2Wocx6p8LcEpdG3h8I0JR7v9lxUYceIQYAui+S7zNndzjYf1GRRhJYsbA1hYXwl1nfm/VjECoKWrXboAeRlNSmWZplacfXrIRSDS1Cdfsl4a+HGjkAo6/EME5+HiNSwN5FoyX5v7Zbq5ED2GPFzauzXQmsZHVr7fqUOam2Z+o3CzF5bxE+Q6LIHBWt1lx8vtZUSxDqiWUeVefp31Lsg3aRoBrnHpLDaj/9xXhlGp/5V5I47dUbPpG9UIQ7+w04JuUDLaSb2O9wjMOSzUm2PMOhWuHLSO9vs6ke6K6fs/IayhxjgbxIr3MAKcQNa3PmCiDd8lxgc6gCpuaesRDqZdZd30dBcQ0snqp5130YotXGVJ5tcD0p42y3ecbw6yQ8z27rxkfffwclEX04/5FLLgo+/NjqPtpRnUZOg==';const _IH='6c99191c1943e43302c45ef200db8ded5a16ef8f69f41718bb77180b15770bf9';let _src;

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
