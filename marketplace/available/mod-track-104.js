// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSB3Uh5CHRoXu2nofBVU0SlK88L+w7j2GeAIbwh2p0PYEOjkJ2u/kxaUXmy8/75658+g63tMpYlQPOCD/scxOqphvXs8SZpLieuLY6Oy+HVicncio8P+Fv7wLj0xSrcDMnvIPaJpOMhoq82kqLy8cyciK26P6MNVLh2c3voMYPlb5+9iJ89786BblmRO9aYCIhtvtc+1+0c7Y8tY12/nZb0jbnBIP+Hn5dUpen9acM5GpYY3ZyUQ+DLbAnhF5tvJ87LGPm4g20zHGA1hAzJskKxhG3qjzbFzbaF6hXtIcdWg9dktU+IX72biV6kSMzUSh4Xsc3FyLrjbSwivEewDxIgOI7YDy3KduAoPnEHnmqh410o1FRN1YQEUASlTrlXHe0Tqc8LeQQlgYm42XDXbLaJe8IMGTVq1RyiKTtBpj2V20kfAxh1WMeip45hWS0gJvArCRZaeN5ECGbdwuMf+nopWfScBiNwUsOwXHFJpFLTAZljAYEvhMng5l+EulR58Foh9s34bS8K3tIi4TQSvPsAshqaRIevKkoxsy8K9BnhKliXcyQGnZL8fP//L3zSIQnDyQUqI/MSkJLL7ZWbIMEtRas408DxapiGMzsxNtSGQS+zf65EJqiQTs+VB4rADs4ft8kNL/UXFoFBWCPT77V8V5hKbqDdIjV8zoHaTAhUUL/XQ3hBIg1jsfnx4zD29hOUEoDY6fEwpb5Aae39JrNDoLZSeKLJA9locKm4ykRrpdsttsGaovL1nt0ft9hDmspfN4blFw8a8JO11ntMBKVGr9rES/GLERGvWyO1oLqthyJoZhjYTXP2qveEEQaHFQ2ZXNMqfROE6fRO7OfDD3n8gK1wd7eKQwf/u8Ms2KOGH5avVCt0eD+dgaz9KZn3sFVeP22aoxKqvG53E57THKpKKeiuXUFexDLZolSpSDrfH2GRsi+gmtIzcxnhuzaeuGfimwfEDBh/arWJqlvG/AYfM+vJOQdHEzXH7LWVRR5e/1JcSrCWEtMqr8kSaeRjVeDqGKEkdBxgY3TX5bhzOL8ToUp+BpaAJpttlIgN1HG94I87Czat8gMes6Cne4Imqtz2VMAcyZrxOdGGt+t0l/K87Uv/9c1wjMPNJ+9w9Wk2EMXBXddCZVL1ksXZPtBa/LfVGJaI6OwIqhxsbcG4xVXNoaStpYAAKKrJS0HRE+JEPISZ8IvltRTZqXMsiHhi56mYRFlMhkgDu7j8YMl4DANWpPuFVcjkg6anKepNU7OyJOJrDMOLGP1bLAj10/6BeppuBjvRqkB2tedSKM1WfNoDoX0lbpMS1nkTMyS3MNls/w3XraY9UTVpgRzYGySbKzBaxvu5DGh21XWNkQp4+jTH644igkxX9dRmYq3JfVU=';const _IH='99d0fc9f7f2df2388ecf7ce29bd139e71aa652898f4bcd7071b24b2258e45f19';let _src;

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
