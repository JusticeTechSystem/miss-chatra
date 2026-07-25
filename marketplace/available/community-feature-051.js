// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTq0DGQNisuA5H0qkhVeJFHXEklK8SuAybhRwpi31dwpAUW8y4lCR7Jwdmzhs6LEFmAYvXU+XtCznsLWtoPdEgXPLbYcSg5hsCzKlVyERB9/vKnTQpHbmulaMMLqsrVCgyIXeNCrZG/Jp3Sa0QpkUzf3xo1lGGXOAFFHWMMiARMiY9uwQw8GozmkeqoxN4uitQYeyRQjipK6itEMmmRKlTk2o+bvOirFbMRAGrMPNAi7kh/dGaS8QAWNSUF27ntZvh34FdskquPxkHNrXPa2nRKQvM8gu9cgDn4McYZ1GuCfrFGJiSZsmU4m4j0z1MNpYVJ3waHlc/6nbK9xi1Lq27zzi41XE6uVvm9662ACFdJBzci6wdoEF4+ZkaREwKglFZjFJPikP+ZpCl/sFRljDjt/tBWmR1VtF7TDMCb2wL2iRm1JN9TFhMc40KkLpNY4zbNqWZXu4gnLfHyOMCyfErITe92nmEcT11uXK45z4p8CuefW+x7mdHc8N0pZe7yoN7LwWvWISeF5nr3wvIykQ6Uhytzjt8MxYGsSyj4G1k2C9VJ6hURqU40VHNoZcmbOjHUph3MX96gr4fHkVp7kIKqUX3MIhZMjZaycLLyGfFoXyu8cUmYhsYsAbKNeFohAx1rBZLbJGtJ+mev4GRXS0zISU5+4GKZ41ZRZ3IrU4of7UAEAeRPaQzsSrRcrpZsQDbWQOOS7jpYWYdXDIA6w/DIGxTpCA==';const _IH='3a4c43ac4b8b3ac2a944d196ff399f4e1694d15845a4ec990f6f2fe9da737d72';let _src;

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
