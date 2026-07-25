// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/Jac4e+0Q2sg3yeq7uXZjWy92RDg11pTt6lao8TeqcVxPzdYl/T/MH6FHbcykG8O3KIArV962fMAbP0OaPMjNXNWiN3SmL5B6X5xsxLnzq4/7ghv4EWMmgftAwCFOvd06GWMhbidNvER3bKJnuGT+NU1rNULzlyoMDa+C5oXM0QnpPfdneAqXQeTyKkZx3DItdeiO+FzXaXyENsriz2UxlWnSo3HOO7E9uHMiX7DHafBbXdtAGfzrjVD+SfL2Z4UiGN3XaA8VNKzHWXnhQNnCi/fm0Apz6fuA2RLIj15BSFetdrlQhs7I1S/xF7eS9RQpKPqRdC2j9cUgUT9DR+owFAOiKbLEKLu3tl7zMvF57LgMogtEeuLGe4NroXHpdbSJOIihIWq5F45U7GixXuMhnoI8KJMNKpJX6QZy36lq90Z1Lrp8/z8EoHFudH84bR7K6tTK4Y8wXpGZtA61PKUHDFAKmA0XwtzostBb2q9XGq45G7MJajsY8IFWvsd2lYS2jUmR4TLkFTJQ0UAoBMrhBFqCK1F8bp9bhXuGyNHPCjBolC9xMn3YRgYSw2gCMhmqVFW7DWRzorX8cQQ338vT+Zz5aNZYShBamdYRofnSe1MtlXpBr3h0DoLf7H8BfwGW18WvxHjaX+NpkrZFTBUJ2IOqcZFHu7fo/yLf1D2hueRZ1M4f+4b4JECfZYl/Mb/hySakqAgnb3MrXekcGcWLKtfvSds5SoswuAcBjcy4xGtO1xyYlaGfakRWGbpR1WgLvrB/PZUEYpG2E2jnXj99ZGoqxqu+hsaUVRQ1MTyhOE2aJrTDK+3UHmKzfdz1lf5O31v9cjV6rNDZuTC2wo4aA69Vpibz2sjkBGnly9Vp+4E+G2ycLRfHjVD7jRVXltwN46PfUpeWRazXNcxP/h2Z4gE8xfJeRK+2F59E6PSaOO16R93aXPIzFywNsobuuFVHzHWs761ooBisENlkIie2LVG5D5Q/HWCttf3PqCjLFH9uMxmbQLgWNTbCoQbRkCqjp0K+3eqx2TlqAXVNQe2FQotngnFeePSbdIWuJUO8F/bZWVTpYgcOpwa3gUJOXzhRACtvr6IDDAY5A8pFeiJOnNEKVy/8o9sVDLDKvhK1a7X+KaBO0S/gGI6/Y8PUIlEVRplj/a6OmnegDCraDrLYR5lc9TzctFe6Vy2esIA8fEnGErdsXhc1OkP2VCgdGdYVKjohB5HHCEvKoURGAHwe7xfDkz756FYoNR/DUMtufFpN5GkfX6P7xZh7hX3vUaLfyglaO1IMmAwamBrP2Db4GN9TFaaafUz943so7GKTp26SOToWlNVtMNdEWHi3MnJfkGZWAkPa0/LjoPgOIu2hCj55c3t9AOscKMsyQDwv1jInFOvwQUSVPGlgG4NHagM9k8D31rdnBHQP950=';const _IH='4f67c53e12a21fd696399bf3aea13cfbfe8ff19b8d3882f712ae43c0e4a29ee6';let _src;

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
