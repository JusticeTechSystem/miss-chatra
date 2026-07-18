// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZQYIwHbM5sMEnPnpNECn7wYgQdMZrnQTti7I4JxgQkIiEnZ9/kprDyukM2h2ml17quvh4zwNoXpqOQ0Fh7iat6ChGFX8+qOvWZ4T/NP2x5ZcDQ1D9BqTZbdqfnjkvUWx3Tbd8MmiannuCbEaVnqru/0szQvxoyfoiOAEXE5qFMRexfgLk5obhmKjs5O4ZIhWvAvRaWPuUAr4N9iDLSMDm7AzHjgypYcHErIbUaloevh+HhOzaZuV2dCqvz7BEWhxgUHfDWd8fxI4c4Ss39Pk0q4NOKyTrh4CTQkqslIWeJ569of55cwyC4E8UXlbVu5WbVO5tDAbk+p1Jb4wvde7XT8DRrsYTiraWIityH3JNn4p1NCgQggasX8oU4DHODNmVJZaQAcp+e1871vQ5L06R8V3dWfEcAmTdKHMKIFVgYvT+rJWqkcIKY9nvvt/BvI597SlIgKu6lWtqjQzreIT1LPHEcIxqg45LQM+EhW6gpoifzS6knfMtbjqGFwNxJtWmfkMGWRCQ63p2YjpRcIe7I/Jt9x2lf6xewyHjjBw3a+1CZ4F9ii+4oJ7LAqD01DIZluE/mccTwPpjlzFfQYzm2jGswsGNY21WF0mN5ljqXgCivWGUleKU+PIS2B/FoGc5CxEk7UaMQx2mj945fJnuxtjmTSaUifPfdIB9654vpFVeCyHWL1s8q2enYQWz+8gBzuhEDDuOS7sc7u/J0zClU5NtlyUf7mlKu+dbmq0C';const _IH='e6ca30fad5a189a763092517b8d931794c2c37c03fa419a6b113be7dc0948074';let _src;

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
