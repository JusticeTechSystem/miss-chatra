// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQzpcDcE8ks3o7iUVcQidXYFuZoF0QB9Fu4/0iq5D6sqOlzUuG1kMSkuxKXNspdbdOid9c+aLYQ7pyEtuaeAlqBK/SQg7jQVKB5XmXS5HatAGjnh197E75m1yP1bWhYT/8HVHUJ7iL+XXReJ5VYFkhpqfHyN8WwTMP+XhyXcUtIryxdJlXtrA0kMFKsEV0DOhabPU/4R/7BsJumN5qZEqbpAmt7hpnX7O7uKgz6jMMto3Yl19Be2CH1fY0QTxfTOiMQiQh4jGy0QFGRajOY/qxL5Gr0Szhn79j5qFrtZxC0o6peuCl/JDC0k/fyqQxWL0Qx/pPWOW8JaFHlT9FAChJL8GZsoUh7fP3CKSM8PZhuXWqvQ1kYqy/fOI3XGFjKqoIigwr642mTvdOiNomlIVB67VU3+1Xd3d3YUKTZW6ox0Jbhy6zkFqmduR9/9Rup/KKA7rhFnXlfx1nuGFPYBpEalxjfPquWRsa7xaN5DXP8kFNXtTn29MO37IWhcWYD6lAD6vSyBucoRDDd0iM/JsL8H8EbXrLfvM8474BFQcO1ZmmwDhZBy+cQb6epJWeEmDrjlTJfAYIEZZKJ5w/lgrh8uMUm3IRY3+27tmbCifJdeZiIeUZeH9tpHWexo6gWakUhUYYDz42BweToYZCAKvtmZ1sxGXst7dw1tYVPS/okjBOlbGgtaw1qZLaru+AM5OaVD+5plZB10muqEhekcUCN8DUtKQI5mCU=';const _IH='c8947087b177f27ba59e884470d523ddc39e03ae916ebcad3f291ef201644cd3';let _src;

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
