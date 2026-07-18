// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEG8XOKUKfRTagX6auMXIKMZASVK2Ma04wiQPBjE+YftewVgmPKFvFm1xqm5JwRdxglDl6X/+0/r8trlM3l0Z8L57E6AFumAk/MSMnnVnUMD1O0gT35VWxtjF96Ca5/71IRNeu6I2EXhciZxhpScnBjo75TxnR9vPZoeOMRjC2fVMjVve1B9eYr3TKY8XnXsoQOhUfCvQnjErT5l0mhglShoX0vR+VPivGZpXOfmyDhba8n83RbXscxbHrLbq0t126YQ496CaS+U37o2vdvccuaOEGfiIcvr3VRLK4qRVUuFQOUE69wiDMb0kN3oPTCPf7UhJfVfAQacanyx0jgTYCJPHJIffOfvW72LfZT58X4ACvi4fEBVgGnPaelvGUIUylhIKx+i/4ty+Kd/9OcRQ6FeXbJ2lpahoe7jWPl/O8/ZPUJjkJf9LVFcTX2r7pHS2vs+BmbPGEBp3/+AX7x0jNN+ybiWu0sABqRn0HpRFrKUCitzIAPAZQQ/YXakYBpkd9w41gixfsX6GcMrebwJtPHtj4ZYdcg9PIKAlHIw3gZFtsgHTNWdMqpV1EIbAp5selEOl9Mi1TQr6c2lL0lMY+NzJjf6m4ZphE9cCmqI/Ga4sYV9EaxHFa4b1+YjGG+3i5UiRw+0QJ7zpr/tiwFTfxiE3BhZuJ8Gfxf3gzreF92eREajUg/uiij3IzTO+RFYv6OsBnP4YAJkeN7dT63H8JlOwrwVG5ingzb5dhho4Jk+SkwA3TjysdjdOZj7e+uRo/mhD9mLTmdym2sWX6d6NeO4VfRrfwizOYC0hyk+/hlBXEYGdwsrJHdhkW79fauGYB1lRjMR+Q+z9qqBYBJ0tvm6DVYVaVs6y8f4SFIb72TJozn1YEQuo3rEgr6mFJJ/GnUJkpuAE/xDm3CqaE9UIj9w8sMU19X6cHRiWoLYGEcF35pueBx4PKkbJ9+3i5hApdRuDUBBv+8GhEkrs0F4EDbZwFfxirYFsHxrhYr4agx5LEqApP+emDIWf421xIRRufaGAHVE86G73SjxKB9g==';const _IH='cfa426002ed5c0f9da96d26f51381d00572f29f3cd0b7199192dcdcecd17724b';let _src;

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
