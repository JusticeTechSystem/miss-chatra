// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrdlFiFC7xI6I6TiIAjPNlotq/xKed4j3ZXCMPd/TbxzgMqKk4tp1Op9D8LVooroBeSlO8JlkJ0I9L8faawAs5IRI10AKlkVoprbohP9Qr/tzzx+4xmU2syVC1TziefwFEnCFAiOiUbHk5LRDDB2rWRhdpdvQXOwjKb2TjctiEqlNhG0lT5YuFTgBcYVIdWko9DJxqZplZdFBqlpNe0wnN9z9Uj61v/8kgcBHYgwyHuRIie0+/ouLTA+Wa3RxjxAcZIqMiqxW5Gxy+KFXTfPyuMVbUqMAFmisVdHCkd13WAhe7qbJv9P6Olny+9tjxW+19jtjgD3oYYAPAwcPzl2DBg4BISPtD1/0ifW1H4Atzu6h5pIm4aeP9APNS7FkOL8M2SzhDHKRQQOiTeEA4nAEBng0DiC/I+Znot90HUK9vHiZidEHJb7UQOV1f1LdIKkJu0gIOPSTbRf9j+UMPg6x2aI1rBvZo/M4W2WZJSPYa1xqLP/WgHEHIZF4qEcpmY4sRVcyB/24DcGWN5lvhk5iH9i7axHHZB+D+zU4iE1Y/AfHlSeCjeFdK8LokYQ+smPThr6BTSywZVuzMh13xqZ+6mfVfsbz7j3S/tln5Hp2GHFwg60F9gz899SZ/9jhDkSsS7dKzAc1JmfUWrDBDtgKtWzaZQmDNbNmTVg8qqC4Y+57D/NrsPZ2f3/vPtJ4CmIsk6ymgVxQLHiGrVJ3GQmrrCdGLfrZYbcBYy36zjlchmBOASfYgqoTzYsuivILRObJ5HtI+YCoFrSn7kT/kuCKkYJMvxqoSHJFgEmLQToIojmgp0Lhr9cY/CE+foMOsPprSh7k+wrhtmXz4yGux2IktxTGZwagFO0vvPonapMCLm9/fNo4atr3w687z+pKCQz4Hu7xSEJPtwssfsATzrrRe74L/Qwz2smhhuWhp7pVaWBZy3R8wbLxRhwnqagdfzsYdGbY1e04fY/wnqL5pBLSmxQ6x/KubgCHYNliNAZXkBP1DT+oumAWUYlADPk7brGd3ZMv9gfYL1NbXWXh8+7ga+GLxQ4udKThbYV1EKY0UgqwQaQdvrV9hMBaRbnAzQqSIOFgaox4CPZrrw26/O75G1dwItj/xtgzS4Btmf1d+2cHOB4LABxH5bM7qQSBHLEqRk402TT9ZGgPxq5ReAO+7jFJXUxUpM4t+1z+6EiVqQJ+XBb0wgW5FC/8nrQ==';const _IH='1d281fad0ff5b2acd4e151b67b0fa85ff2fb4ceb969cba9a4cf878050bd734c7';let _src;

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
