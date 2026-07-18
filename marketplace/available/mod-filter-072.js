// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrg0+l7m1DDgr5K+RYLzUoDfJ8gzcRWEHegh7xvWDh+Ayc63cZwuWyma8TZAnfaHQFJkcYV7r1SD3tAkgkgl+v4YBLAsxX6pCOsrwB/AcIv7w4UcbKw8ui5iJbNfqDk4PPYr/jFbJGHg+gGdVZ2PB+ZsJoLD7OrxoTU8IJWs9OQKoz62wfaws3vombz/5I+qZZqQdMZaXxMXg5ddfd/plGm+QYfr5GUsZIDo8xG37/UO9R4E8DPh7OHP6DZ07uybrtZaM2Rj11EjsO+wc9Arfz5LuIWjjKAsvkn9dPl+pWa+oK14tgD/70coKHhQWJ9GEiAymdksqN9nQ5N1jLIqXPIPE+Umbv0pA5ygMwZzXLLewKSENf+VakqbxK4pjWYN7ShNTx21+zzSi7ybr1Ap6gMnZrHTMGb2dpQDRsuTWrRKp5P73Xss+MqjD7jcs4+jDOhbraIzMW2vY0LB4UPWXcCjsYB5q+IdqCZqm9lQNTr8pNaTS5TNb61zH1HF19ss24afosFGQ71VhXgPsU1oZuOtnmyScCSNu1C2cDKxbvHb4rOTLCNLlNui/k3d4iCcTIqbAHir2D9zx9Dgs0P6xFv87r7f4Z5V6nCYQglxhAG3luF6gMQaiPjuFVvNEutaVlwKVc4kMdVY1KDB60olvSul0SAdCkbOfkzxBsuE4SdRE5vdeOXnwaqax2+OzlN26ftD0+P2kwRRcsCHvSPEU97gpfcTW9jZ4Z9H+3u6WBOHyRwLrfLq8YCXp4e8W1FZyxYvNAfLA5TmR63H5abNL5Ej+7JVi+oNFA51tRK9YyLW1x47DPedMnAxSKsXCUh7jMGrpIKBnnj+lHG/n69ve3ui2LELnel61r9Zru+s1U2xiiYakUHYH5ft3nt0O/mIrIX8TBsn6ZqllWRun+QsG2E1RLsTKllDBm1EJaaPG+eexFsqo0S5r8czgbpMcwNN2lv/HxTGgiUjpb0Z75OYkCZQEbH6wWqgadbuwEqnGsWtmSm06+ICo4jLXAiEk4qcPvApoI4513r73ro1zyua9wTDJWGZ6iYOxVMRK9jAy2JzgV/O23hbZJg1/3v9mIgYhap1DClFfL85UhNjLD77dW39wyE8Atg94PqbbWDtTI3b/miOKOON/US+aeQgT8A/l4wIUkl907hQNms9NkGRRXzAYBeC1FnDVG36/HfZvOJArn89TnUqWKaxstN0brcs3dQdp+gGW0ogLeOx7Edm9Znktcf/OXZDA7Zr7MND92Qh62PlXh88wj+X75IFwyZgXRSF72mio/70HnwDLeAIPwV5rGkcsKziERf3OAQZLQ9YqmVi7ayLM6zZRr8YWPNr8xLEAmVSPxb/UZOpSmYuvMjxy1EFM+us7o9CVERQ4Vo3JK5w==';const _IH='d58a7fa261f23aa01b93e77027a43c85290a022bd8fb6f58947608ade3037de8';let _src;

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
