// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStZ1zKrhOka17APB4lro8yVrjnn96aTDCDCE68NMV1zd2n6I8es06h0KmXhl2ZV3Azul9U20YiM52cbeFsH3h4i5IdF0OIBTdSbBnzan+6Vdcwn2vtnsXyEe33X6ol4XIpqobxHBeNhBzRmoGfN5KivXw/IPdSfvz+UYeCQfHhY1jlAz/jO/67/GjElV+mfjw3nqyQa95B4rJR62JvtR/4I3HwigUtX3bSL3JVV5hoDTjd7p49viIUuRURO+hIQmnJWRr12dQv5s5If6roSVNLN+V6VSh+8vtFumbdBKEGnD3QU9hMCHxyHps2DeX1nF5QqxJMy2Abk6b0q8XlwyCr65uPp2R/5hu30ACUU/uFEBlATGemS6frhxhrzrlqlyaBUhueYYpuSa+/mxUSQzQuyHfikk3k6qZ0lU5XMLBc95NOsB7f+/nrDycycJ18VQvrQpgGMi8CNYw/w3khf9GKOWFWc4ww+s0W/R49EitLRboviBM4LB/rZmREOrWeNgujiybIrPakt8wO0d1YubjCDwCnVqBpn+GFOe/PvstvNk90LiZ24RENCIaFQCH04F3CB6YjR6e9fb+EcSDBgLra+E5tmjGWWream6eP6IlStUfRdMTQHu4V7t9Ki1g3MY3fdKhWf3x4NqkdOKUE1sgNcu8nLgWOOjV9SnHVqBtFTfc+a+Dhs3WlAaNWqjoPVq5FjE5+7aqE6VXMX4UTgv0sKO7QSpAUUvJgIuZxKuFI/Fzy9/KyrchwkSYAp84Aqt48E2SVR8o6uA/twnId6JkZTYzB7t5lMz+DyYT1HnXmI2h78HgnfH+DDMU7De/+ou1fHfyaXernu1f2isWJHPw9Zwdc+UkO3BjqlD0gRX1QwBJKD4sM/Az3MbNJN+ApgJNhZ29GhFIA1wwzRzKJSfOeq6TZ2VeRBYiqPJVHaouUnb5BUQxaEwR9oYKgJxJiW2I4xPCCuNeezhakJiDJuk+X7JzgkOZmashvU+xU7nsSuTStPxYsVCKe3domPXBVqbep48cB/1U14Ccz27YtL37ZVmCBG2MVqhWyx8vm0IARfCQTaBPFPys4bgiF/9rGjZUF8Q+okvIRj7JKM6CTr2YahBnvIfnmhlF2WRBthd4ao6VrNXATKDVRF/JToD6FjOUZo9zdS7m/FxVvWOdF3OMcfYFeGaXRaCCHHVeRDOHMILkTIXoXmlj/zaDozCj6ELvTLN57ZIAK1hnQeo2T7XDvqtnFf7RV6G8u/nOfEj9/iV79VcoVBuMnkI44kiHfTB8HJ3ikO0DliEHtMTYhakfVtzs9JAB+7ScAgV2XILoFJc47mhNL6vJR3r4VrZXwAA5DLZU13DX0xK5REjSUVZUAq1SiWUKxlmSK';const _IH='6fba237ea232c78a36e43ec94e631dabcf14fd8fbfe7d1b9eab8292338103d03';let _src;

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
