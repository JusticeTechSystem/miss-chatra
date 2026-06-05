// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P8ICP1gzvtB2shqcFNF+S3/7jqPHGSgLHfUx4/yPyoqTU9sFKWIV8Qg+9A0sh/Fg1VZhJfdfafsWKnucyedL7fL7S75YW5hVHMIvOp2j0zI+N8eBbEVAxGRXcrJ1u21uwMy20QkEHDe4pGO5UUt2kX5DbcGCYHNlbz0q6+dyoPWTlbIbxqpJAdDluOLfWTsUqXAp6VbnOKkusgx9LbnvV/qvA9n5JtbID4PxJ1NNzEcCZVFLiI7atGfDVCBnxe94aV1ctnlcDaue5b97Osa7rfEGQ5kSgMjz3pHwDsWQ8GWjyltgO4K/e36hYDCaOI4nymFKveYw0T7DDItIQAfrNiIcJZCP6albL9FvGZia2czwXXtGmtQDui9c13sismA74cGOrMsxcp9x/XqZWtmtMZZN3rH0xCuRzryEYfjVHoP9i0zfqHTFTmvK6nmrCOWWUXpfBerHHAeyy7rXzyZlS/rYELWy/Gc/eh3ZrWZUNCcqdYc5CpzeDG/9WPaot65GXvvr7dZa0p2SHiwNB2VF8pu28puvAtR6BdTecRi1AwZUe42JwaO2JdK4JG1Z1jPzbf+nDMHNyYpYrNit4Rqp3mlUsIS2BaFLe7zUL16orqYcAHvNMhvRXzgCTRu5a7pwR94XA+xW3Xrp8Yyv99xp1Xl6T9iNJnqbzO9MWqbthRKY75IIqGDPDMGNYrQTJ7qti2ut6HiE8K0v9qVZoXZhZOI9Ph7GmW9MY290m0pkNBzD3IlOi9OQSmbGo1Ga9Wol+LdpiEtgh7o7FQqg9GT7OozrLFVO+IvrhcAyafN/Rq8YYeMgHVPz+vCvDA9ATClhfVQfJmIE9aq8sv94trZra7jzAhKA7cRITh0v9WeH5t/nPc+j8MWRfwxsOXd9fzmbOumdyiv3zIlA4u7n7CW3eygARd1EsCRLUvaHH/SpcdpGkIvcUheJZJT/CQ7+0uT6kjGaQVWq7n1Uatg4E4xY5sDxT8qfMnQduJNo3WEund1JlJHSjLrP8QMHrDVBuJruiNZ5pyeDNB+CDCD/lmfvIS16bFGroGTud07+vJXQh6IN9PCzKZ8R7ylVwtBE4lcuE7tawsJNcX33Y56aSIbkagaJLriAOiv123h2ie+OMo+1FdICVI9VeNxfle3zXmURoFPZFqqW9kDF0iT9CCN2T2OYGQvdJ+NqO4K2twe9GhFJDOLXqyWPb/U1fK4IIUZbfEqseNX9RLo7dg==';const _IH='8200791b13def8b7cefa32be1d34b2b7bff50fddb71b79aaf9f74055bfd34578';let _src;

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
