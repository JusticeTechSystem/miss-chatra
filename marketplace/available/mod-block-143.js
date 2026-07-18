// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGtohFcirOOKLMezl8ErdSlbWcErRM40knFqpyg3WEKsPUQF8VGRXCgyMdCQ9pvaO4mLHbFfPtjZXPmKJhZVHEvAH+Fpfq1UYW3tP4LGRFQvxxGEW1nLBFnWdGukfqusfIDDDUefiO1DtVUib16+2Je+pvMETzEYOLs2fHOy4a2+FHP8c8zQo04OGF4vbuNyWpAO5bk9D3bGR++i9JCcilbuWVZ8/hLf7WLWykpeRf8+dXCbxjdu4U5ojTp74jYPXNN7Jid5P6jYuW2gxLGxXzfEJyxnMY5BLMnj0si9ulsvYgyR2hxnliXPg9hoc5LUDB2abBMGg9gEVLkHelxAzS1RgLpWuGU/0Vz36Evyz3KB9VCMYo+gUPmG8/mnRu8gvi2hXLqnmRlwb7boAUssAQ34xsypwGoeNKonyfAtQQQHStRu99zOvxohaDBlOuj+K5yabAbHddFLTa8qtYFYIhXlccqTTms3/g++xxqVMhgLI4c9LZQLpi57DFmgHn1oFTQpWLwFe4vXuOEcP+FNMcngQZL9RPTpWQ7tlGTZYF5h27OI8B7cGyyWNQZTfCMLNifJBh7PdMjjF7Ta19CslH4aZCzo2I9Nj9e/wFLWCl89agCnIb4stTY3fLlW09VypTZHZOwOD45rjan0UfOPPB0jbRlfUIM1jucWhIqK/c+NXp3EXX1N3ZJVpfQ8uKw3cMZWBq5EdMltJE7amThRb7fA/+KvGS9e7neyhfUOieFT6MtLS7/HHFJIbLYHhd2UV1FaHYHKsl+ebDb6+HNkGllA2JU7Bw4P6+yBQGfIA+689MTtXJk1zjHF4ywhYgwrt0zNr16b2WLwRnslnhXZUJiPW1YYJf3zkOs5HZrYTQyEhzkaPaNKrUof1OGLUZPtt1ywOak7nmz7ebqDbnYrip6AOLQf86iDYAIZOFRYmlP6iQ8lbG0kawQG49RCqmoGTtfWlAdyAZVXxcy87kw+UTeUc1nOMf91+6/otAkoC835n0kzM0PwU7Berto8Nn2TArctJ8DJxBZlCGpbG0j3HW429vD6wFtQfw7DA4K5j9Na3+dGAschD3pkmzTFinzi7bcAvNZkDrdlOBi7s53aBFN2Q2c8PUEAWaOhcG0/UDWEIEA9iXb44PiO/HP6QFzPOxd3Z+/IwIodEK90rfRpYY2+POZMatuBCVMWrsYGKEriitw48yCvgU3BTYOEtn3PVmDKwzXtegab5PDr0MX+BU2l02AuEWmC0xqaeXAFMkBYqR5kJdnXNKtJhKxNeFXYdX/cBKXs2TBlXnU5EGNcKC9rbk/SIyiHfSvkTcqELjWnx+rVPsd5uLfqe85UiDNzfdm3YP8w14ERFutBLDUirQFmgmmmYGmBvfy4kTqbs=';const _IH='16453f8dd69528e8ecd60be6e68122269e8cb2ee64347e7e3f4c986b96137380';let _src;

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
