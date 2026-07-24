// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTdQiyX3WUsIDpWA2HgU+H8O+V8XDpEWUfT74YOBl0YJiFLlfT+9hBzQNR8uvFhBRcZR06zKylmifbRBHJXOJ8QGmLNLox1q24uKb0oyJ1aDIbpMTItEZ61CZ/w22BUIH4XdiVaxEmcPjlKQEcgGsi39AjIlm6a7qcuRLAkjQQMPnlGP3TBOzW/dOI1ZFnqvJNG3xeOOo2x29Fd+cpq2RU3Fui8RZFkc2QbIlt3aeBsWrKcS+NLkv1nsFBlDgp+E5/7kTtBlpbIv7/1p4QO6gf0c/eiJE/+OngbaIiOqg58tTkp1gaRPu8M+/B/pt6NswX8LhtipL6lP9RaAOprUBgy4fKtRrOrUCLWoHOQMPpuU6dXRNSmCGQUghqGCaT/AJlEnQRGoJlLgsmcN4MQkU+r/L01ChBcN4iC7vWtJDby7fZY/Fml9pddbYVnTeyb4Txp89c78RxcbgRqGlr1dK50m9xcT712/GypF5o7Lexra/mYSq+NBqQXchlRFfZYD0G8xdbdfCQXO9i23RUi1KntfbssoHNSsx37b+KUSjxZLtFtho1xGLl3kTR988u54SzcDygp/3yNsiOTNO+6l3ajAvbKekjwwH22CreEsBsZ+NoQv+Y936L9AYuMbNnTCsKsjJ6KizkH7i4EBkp4S/4PwNBXz8Pg6MtwIagITJBzQIQ8fi9X+/0bfc92aiPiXFRQTy32KbEKUVGU5ZJVfVSB9JFui0DfJaApGhC3kP7htRf8HpRE4OtLjppaWgNfUDqllB74c74cjh/hrZHiMeu1cmA1huybFqf6r5HEfZsoOdSLOPlPSjZvZF6ym4r0CVUj7OMo8wTKCgX2eTDbrNvvyLMY5CwUoQ3ec4+prgZBiPuhfdGIrNg/FE17lHfuIFKm33Oa+m/TF4K+K6Xzj/YbOX3oBM04ELc3UVWSGt4swnzo2EtaD8DQm9XpDLFknP7ZVSnT8uasxxX9qiiaIqoNPGrUwUGFVTAJnRm+/6XbCYxbsnggAGhX3FT+DMfniXvc+FhAsyLRrV+fgQLw01RC1C4=';const _IH='4edf6854edceead62d2b753912334eddb666e6f6d208b5c0ecbc5c7ea7345797';let _src;

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
