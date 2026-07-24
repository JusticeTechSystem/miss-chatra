// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjFcxrGucifx3HpK4EJEtwHNdInSBG/LtrswbGQIPg4C2HVM9qkHiYULkFbIXu5ohCW3twgysXvFwcvbcCVV4/UGV/yOt+LmVoxYHnS1HSY983o6nfSJZjoav7XQcQvnirwUAuD8PLpdnF3mJi89KK/+Urz8ZaLWuacCGn0P00CbktaSG05Itg9/vSgS/ldzS+DWRuWeASWAo763X3pUVSMYLY2Hfvu9gVUrtwSNTuJnNIOXjLeYrgdTwZkKzhJO8EE9xMkaCUVeyh36dJ+dSej/KaidbpG+lNGBP8dnzELaBxh0ISdPQ25eTzysmp3/aH1UGcb9lWQYASnjr3aW8EKSnsQmpFhgTY7TWxhi2atBNbDSk4KGK6BAwcU0hbdEVvSVJSxOc3vZLIY1Jyo+Kq2Lgxd0GG24U6aCRsrNUgfGUkl1UXAqcYw4yxrVB6wsSykcq7tEnNagpvGOeXl10nO2JLb6Qsv8PGGb3qnMNdr4fi58rFgcgA4bNWKzUUR9pDTNXfbiXBFGtJ8ev+/qh79o+58oHP0/7T4F/qtjFmP/4l3x8ykTarQT7sPHc+XYgNkN+aLkovZngfeSp3NeQv7zBIAmWtwUZJ4rxsQhw2+ddss6tfMIKbYwr36eGZRNhilVVfE+Awmaj0Rts6Lphp6V61vPU2QSjF6/bI4DHfLlEhnu3XTnd8e+cTEoLd2W2PNndeZrreDc2zSC3i0zMQHAbHAMRy2Lq5/kPhddkWQb2vzKC40PAIWR+vCY47v6TCxyBcQL3jj6qyGiMnz5mkv2QVwByKLE2FkqQSApBhQFjWIjtgwl8NGJdVgcgFvkd20F+eE6An5Z8Z++xZcH5YRtiLbYVMRch6HPca8uni1/p98Kkv8KZ7UHh63JpAjqbCerLGdfY7M1XE1JytqO3evyke17sLo0yMcDRsj4kMTD5BUVORB7HQ';const _IH='f951d84d6e312cf9775886106a07b9def287c0bea92a3e207a58e0abbaafe117';let _src;

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
