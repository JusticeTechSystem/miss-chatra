// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSly0dTswHYBOJlveCDih4m5+SvF88w9WJvIHTLhfSnhyVzQdfBPEmKUD6rYlv1ZxHFqPChLC5/lq3g+Sn4MU3w8KEvilmGhM6rcmFI9iI12vnbNvC62HMn4/6gyP1pChD++SVMZX5H1hN4RdyYHthGounhyG20Lk3+QQ3P6SJwn79IDgd4rgTdw12ePkOtHEtZnz1lchWy0kPmKkhNvAg74HnZcUbPz04citMQv0NFkuyuQIcwXutbn6gpoY3Ukv/llr8r9OacGklh8UWhfjxMAOytMFM1VPTCclDeN+hEtHw9xLPLUxULUMdFUuAS15dS8lH1oqaIkDnId2mJKU1taLtyNtxCWbJGnVprpamo/ivFshpyOY/Vbhi2VBFH9Felh0KhpmEX9SPiOFWkbMZeclElCHQU8C3LsFs9lkhqe1LTKysRZBn3mi4NaI8YEtnvpteaVu8dSXFgCuRb9hAO8R82WwJVKI3bfFVM3fJfiIAuO7YOh6RergamqjiVr+LHmGuzSCj4o8znTIZxid2Pq/c/3F1iK4ZmKkO6ifdq7XevbG9P2Sl5aey91W6Hwm9Yeovo4ylmGfBDTB0l390OzA1IWr3WRVE1tJg6eFc8nnh4BrEWpQDmvVkvCI3aNyLsw+/FhULTcZ80dvR/3jgnTWV4LnAPTAimkiQpZ9E0bEUkW9UnKcbtg6j9kaUas321hRc+5v6WqZBJ2J9Q5XH0l1u6bubZ7+PsEixXrgozs0ZsIQfN3AUbQrRep0qYgxdaVXzf5kZcs5Z4VVVSEnQbhFSvyt78NRjCLMCl9aVb+1JfvLxJLkF//5buVRhFxjkYRsz9GDQXsIReqOYvTxiu8LjaX+kEoOdHRmpoh+mWdC4qI3wBs6cF7HH80NWnAnFhzWnsX7PQDIs4GYB+3YfJ/nuXa0BelWSm++o+YDc/8FM27/wDtXYW46DqclnalKArVc4I7qw+k/wmFjKzVeJBa/sVxrjnLQc=';const _IH='68288f78b222348cf292dea32c148f9574b3e17340d369107c52757b0bd04045';let _src;

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
