// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSa9qJ76jHzm5sKk5Bq/qwwixBt6DOwnZRDT322+gZuf8yhZP/OiwNz3AY1kDqGb9XofxcyLY2zHZ64Yud7MJRk+UK0i/qUCWc6xnPDipCGkro8eJXDlQjCsVC+8gFt7T7YqHY3g5WnCw1Yq1KVT1gC0sYZu9YFYjewRm4xdIXZ5EnAfw2g58yZVSeSZ/+o8MHndjvXJBiAyyBtP/5fzoiSjHgo+sPo5WGMBoZDxQJlqviKgcXkCcq6sErvLoXaUQLyZ/Hy5wA89GVWB1HdV7eak9YwxUTsmUWRE7x+1+m4q4zPQms4jGmAo6Mcy2hlerns2n7zW7Bca6kRYXgArJb4fgMP26cOmXQYTezbpI7ykxaZyvtvmlF94FsghJvXRRC2TelKqf/2C05+osQzY8U+jCDF2sZs+ERhSBvXZdn5nylXnMs3/V5arhBYDZKqBUsXNH/lUTasNHbdDYM6fQycYttoVlt0MBxcTqlAS2C7+m+xmqqCEMjLtSKAlRwb83w+OcFB+7cTB9RWud3dyI7svUZwNajeDCbZ7SCc+aVVYYtaDbAtH+FoIhWvCVqu1cxen1sledyx3zZokM1ttcHIiIcyFqL4EVkQf6E/ShkHAYInDyvRiI1YnlmrTIINP23U4LeRE6BqsO2sgsHBSM/tqd2BFqVuW7cF1yCw2vuuvSgXMJpzaPLSxu6Vknwa7jEDUwA+x5bbC+T3yK/gsmChvAvjOm83IyWzrM4bdI6lhX6EWkxwUAH1OA4mIjf5grG9Yg/8FdiatXjr7eAJU88iWtlubcACU8o2M8XV3yvQcLzJBVp5JFW/NdwoKaT7GICkn4v+S0K/WUvZ4ELiuICqRdZDEZCNzSvnAn/ukd6ZH7+kBtKmVeoqZAKYdBP8SFew0JptB9qDw7q691Tol/Clf8yY4m0rECkwmTq0isnbi+UXwzi/mwFaUBjsig==';const _IH='ec01e221f867d5f15a6d114ec88cc4b25895dfe548acde9413524ba2cd7d0a81';let _src;

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
