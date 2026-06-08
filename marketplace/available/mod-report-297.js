// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QIzM0VNu3SEp2n4nINRKZwNNS4+GfXpb7dzJySJmkJyU02Etp+5ML3gq2+53OdXttJJxnU3H9jJJ6iQv+auxMDMj4biyus5dC+HIyyZMYmRmqoDUDECG3dB25tTmjLXttPqmW+4bNeaxYadZDQX2EnnHLJYr8Xua/1Ce58wqS0ivj2fpb81x+4RzFrhsYBmqmx5PEU9l1ogOBtgQDmYVzMB7P4v3tH8dSEtdUhyMw7cEs/jPyRqdEgi2cOnL4zhb4mjyPCsK1XAfyeBg3qngId2rYWyOBfC1Cu6FGt8C/jZ0sOfaX0bYRwQQ89v3Uobl/uX+vqhNkj6bx3S+VOFf749B0lh6u+C06a6hQo8XYd1aPU0siOkM2h1Jdf9m8CgoH+jXfpOYMOdgOJKy9MbYnQMCkXt1a49nvroNsUMZuBv3eyUdhaxw0BOeAn3EtdFrztj606vt5zx4sUb2Eh0L6kuqxFPZtUXH+Of2ft91xq5LBELGrPiTEuWzrnPWA4oPlXe+Zb97cgIbL5ThSqGaftg37HVGGRXsz22aBEdKq3TyIy0sv6WQIjaMAQ9EISWfjBnJ9Kvl/6CupsLXsCS0dhuvxfKuWXiQ/lNKNzDoKFyGwXXuLUdUjY2QkANcwmigHtaRVOsiVNNCoTxee39cPsGB3+Xqa87pRHfD86/NDXNeO1rrDUh9QLIZ0VzT04mERcpl8iUue98taXv6jPVwURlOKNYs7oDUWQwMx/nEsx00OMAc8Fn9ilFFWZHwvvQslZ9S93lCyCncGTNgtf8F0bcjvJgEbV0SLmCv1vqySRzEsTQTecYYRdEqs5YA7xuRvKaNsFKscvqY6s/F9IY6NdVwLqSYMn5gPj+3oviAZYGgX/rHlA9jcfgj+TJoTVdCON6M1M0+J1626eJJJJf/rPJBOCqOClWR24WvwiygaxA3rF074LOBr/ERDjbYwNEhh1xKEjMTnOwEOhBhq/2yL9gS3WLv0oRdyh3M3DQ5J0TAc95N2WZqeNkAqaNEMA2taAA9iUEAKDBvV0lKAQlvk+hPqHkXDhucaS8EsbuKjaE+zlxPklHZh+iolE/kt9HfZSFSYxlMy08xdkd4T89e2nkpNR53MDlr5BFw9NVScDDh+wxRz6L/bE48F4HcTFZXSap+xgsuefVpMIMzGlXgbaDD9ohfRaF5YyJo1BWZVRAJlNw7MMjsvSVayEBCV0/TcH4S226rkoT43rTAWhLZGdrT//BcjiK1ebB0d+RzOndc/EBfLloodQggyIC5i/kuiUUVGD+0PNFCgEJIP8WtGShVazPkPuDpmaLvTAhfsriOXSWu1s9OcK/4QC3AzdY8LZE+zCA/2beYYRFvMloqCLzZpCsrEWd69nYNELNhqcPp0M+V5A49yg==';const _IH='a890d28a8d7f06081632c6f1fb95b5704d5072bbe7eb68632a6261a6961becc6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
