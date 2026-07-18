// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQuHhKDr8cuFygNSueE1CykDuboquq+paQOG9FxmoLK1yihpj0E3swUn5+bYihsf09DlrrdFn/AU0rMA9iPAyJ53kD5/1P9UjxxcxqdsNfKfVS3MRRo/LR/LkTAKZ8HqPj2fvUpzMepotdzT8XdKhZQomO+lEAsmAcZB/b73o57tO1IRe/XBHhLI58PSh9Rzwx97tynpUxeJgwo9I4hDKD4MvuVp2zLcjhviwMcOec+axJ0glE32WIYqSvswogYBHwLc97j2yzq6gBT7vFVBe/VGUyGpwQZ1QpdtT86ksVXaEotFoYmJX5IuPku6xI3b5lHMh1GUY/k2KntDhe43XIMQXt33z6XtPcurKT29sBhXXvtMCqauYzDCo6/2kxcLkbk4aqJRQ3e3KwqhvKmDYdvpPAZr7P4NGnPNI79VD4/gYkt4FryiP+nIT/nRpnexQpj+jSNH3JI3JQweXT4RWyndxZxw08CfWr6LMn1ZobBu4SfJsq791foIrVkmSmYH7BUkPDZBgq04Ra6sAjOPIlT6LDutGFQUfxTN9/dJXyB44RgIcp1kVUj1+QwPXkx+Z9APax8w/1RDNCnbIH+iS0jx/3AS3/J6NAnuyTNGptEqBKXYbtsgHy9hhh5AZmAiahspVPWj6+ragH8AW+J2bho0LHZ8qu3voBIwEJ+JlLmRNwZZtIE03xugm01LhlvqlHGnBVdpot/byFe2jeFtrAk/mOWeGdBLnHV8U4sj2lheHwN15m/zYnRduTymj7xY7LnS05KiTEfemCYeW7TgbWdZgRvdkLFtyrnzCE81KjFTr6FbE726BEp2tv9BYlwO7LS/9UteMk27dUolvi30MJ11OstLl68ANQe6vBsMrA+xzITLn3jozuTcditbxtEgPqUbvGxCk8KoR7vpqDklDJxJjbv/uAj6NkJWQE3VVEeFiSbfA3QfRMoA6UemNwAMxAsza2jSn7HE7xnbgMBJDbTapxb1Jel3zWfg38=';const _IH='c07a97a576ed83267bc4ee7c22c1d83a22f5879636ea53b78f4105f5203d8f07';let _src;

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
