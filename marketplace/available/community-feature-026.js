// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGjrOy10mzBAJurcj0Mij1t+nW8nAGoVBk/G0s7Rfo1Tt78mls7oBoK+dl+qC0ovbi9avLXSy6YHnqp195vavabEw0O8QyCibQEWGuDQteHUnGc6MQ3XJcR8bWDyoNrAk8Spqr/pijZ4YRzRXPk9lem7qvud4KmD4g8WAqiIjKmmiP74cStUWE81Jsju+IumIRx/VaMIihdY2LZxaWJ/y1plJQRDAYKjtPyo6WjSuj0iCO465n+m+AeNV9iUgtvCk4lVZFGLVo/a+Ce05+FsH9tQGXg9hpN2j6IS57+eLxytagnIxBARP/qJGaQPdvVNMvstiHanQEZmSDNOg0OF/Ii5eroCuRmPiMEEQ1qLTWNLa4fn+pOKV0gvfLdSJE4PjezwofSUrfuUxuTu9cWfmNO2eubSX0lv97F1JBsmZHRE+APh7XMhK2MWL7Voj6h5kW1vAtvU20cr2LO6mpcVCWOJMW5EAbmF4Kf2e2fVZwPGAQsGoDCuaRa4+787pU7R6ThtGYM0Dn28it6PZ7V7Z+gutgn9rd43PheVPgmC3o/2mK/72y4EcwKeP85Pa34CIRW83umwpredGJarwIRVSjAEULD86+p4x726R1hUl4Dvf3jxSMw/DpbJKdXvX5ydkeszXCMxeIjVwg/98MUlfEIuHKkCijeqfaOUr9uNe6JM1mdTLsBg0kQTHeAYJp53cuIHvt3IWpyC3UUT3xgLOHarlDRg==';const _IH='5dc6c561325c859240e1339549dabecdc62c1d6dcd9cb586d4f86315b782307d';let _src;

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
