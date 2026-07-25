// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAjQdvayEK/M4oy7txxhkriVEMJVLhZw8DUQgNvVmlQ4LJK/rg6azg/4KyuNNUdJ8rJ1MyWW6DY1mnBz0Y9cNOwQlrOspgx9iWr6GDhU9q/9I7GQ9c0EukuYYTcysUJTQmto46wg45+SEiL1PudP9yWSTfnajvVNDDI4rXHzQqSePbL83QUjtqnaeJBzo2PAJhNCPd28JeMeR52zuNK1eoWDQQmamPHL7LPPOGz6KtlRNiuNkyBMpOQPU+0dzF6c3al1E7833fcB0Stl+NwME737OWF2gO3fFjAjop+vpmGc1mxsFQRuOQ6VCtpWJsqRJY2q4LlIthCpxeWc0C+JblupAQp97pb8Flc5wFLCbryQjCujH95c2gItuF9anHrNH5OOzvxnlRZynRHQSUb8Je9g4MNX/uKEo8Es2e8peQAsDp0yUJ7zCXTywae8CLSbzTSX7nNkElx25erX/+0uE0yqjH9fmIvGNyvz70wCpG+3klQggpoEtpBH2I36m7btYhL8/F6NtY/aPn3ftuKMUz3qj4GT3J0AVneuS5JJ1hbhfnfD4QEXSjyM7KWf59oJposriPy7JJaidtlkBoJNu8yNrtkP9vNy9FfjjQfBdRucU9cw7qHgSmGF72xtK71BKVeZujexXtNOdkuce1pfiQM5Fs5ACYag7bdDfH1rkbjKFH/zS48XE8kbBuaG7BuwU3PViCRkrXWNTpFGPI7J3erO0ygtEoMm8e0B/76ckvV9T1yE0WTxjiMMfKUGS8Bou4jJg838KVHilXnO+C0z3MT49W4YQ0j1aAqeXz83z9Bq05/pKC5OTH/eh5bmYv3t4Oi5h4XTUpJG2iYj4+ZYbGVOJQIG2JBUwHgoc3M2+v0HGeoR+P8JtSUGPPFrlX7IKuvUC5/3d6N0/Trk/gpjFzfAObF5+fAc4BaXQEWEfSCcN5evXbfZivGH6PUfQDC/ElxuI4mpHxaT85oWVu4r26lskEEsL0nDA8rnsZQTOmgILLxA41puT57dZlNARAbSzxdvWd46Qag4VdJGNxapoAXFep1l2QHBIwP8WcfKoNx9nvx49CbKcaYOgC7doQTe+aynPHibgOUIkTQbl9DjbotMWihTSInaaBDOMeUYi7T5IjhONY2umdxJ/ixYE2JJSzt0TOtndU2pKUHQx9RyJPdwxCx6MEHrz53fcZgRMSAXHet0T3sDl7refBeaUpXvlXG87o3OmEiAjSADubDOjvRMa011KTRsOCEAzw/hsZl8T4HmHyUyU9eDScJPModO5JcPB3JIs38tx0q6YQjK1bEZ7c0z95NY3S2NEco6KjHbN/YpoEIcvyM5V9XUaYtiZ+c2+zN7cjcZ86UqFSJ88If3LIsSWrb20H5xTmgpoP5TjoDNJLWCcZci23GJbEwsj6WaMzjaJRTHJ4Vl0frnbKOe1mchi6qzImuu8N838SADksJDa32C7sd0Xnw68ybzedyo84fdx8GxGF3+FBE+DkZq0PXV8YUKTw0zSNLLOdruAFDPgSYDBCY6UzVEApS/fG1CwGjfNrViLE76NNsdtIFafBCgRG2j6kAtvFL9euCqwyr5VzbxYOJEy3INaKtCPHzE1Shjgmhodx/zP2bpcgTemscP1S/XT1fRJ2XgzSsjDWfnu20apOKQoBwy5WHBTJJ+rF79oMExti9pMvmnlZ+AKCCt7aIlqh1G45Z4q9JabyIfxHYLNQwNQOo9RTERuGXHjWhunvKsCWon031hbfmVvH2xa8BDYTHFBQP19WbRwbYLTUGf99ragmCjXs2TZst+M14pA7diUEv6WG9ViOrK3KUdal4Rzns5T/VggwIcooyfmpehv6CZqCZ26mrg==';const _IH='a21d5aa9695ff7d0b0420e36bfb824c898209bac885036aacf0eb9cb22feb236';let _src;

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
