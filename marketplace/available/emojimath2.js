// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSej5DTtREsX/0m2w+im5FtciQuwJQDgQ/gbIVZfzuf/lazOf8IyC2H0TeIFw0C+kTEpBTdZl9PHVgtgfxZQak5Awcbc8nbdne8WB6GtR1k/Baf6IdouC0eDzLj96qLdwKsSJE8FIRprkBcZ+98dHpJl38qND9AXzCUu2OvznBENgPQPauRPNNeBaNw1tHz7X6voZg01qa2z+NzdHfery+8Br/DgHouQVZaDZTxCdogoyARy4rIvPTzTsJqinWSbP6T9jmZIrgjoISa6ArSkClia0o7qb5TBA3FsjCpy+uTnqU1Ax7MogOHicr0Dv1v2MTBMDmNHTVNLTLA5Toi/CBkarkS8/p1v2wKQNQn82ex3FqUNQ2ryStR0vhYVdWoqKhcTxCtSE0syXaMSrYob4+/eXF2uOeG086gWZR011kM6gpXZgoNbhLw1LPiRBqhRqLz4zj6K26fqhmVx/1gQ/kbYa5ilNJ2eFA9AR7NeoTRCRikmBV+XvHnEsgHuw/bgd1RceL195k0IhpY8vKeUWWcxa5Sna+c0DX8dI3AtmDtxFJhvcKwMtWIDXkxWU5LB7Hf0gvkIN9Ocp/0sbxB/HU9Ah/aprbSkuARt1HOg+NQjMbL4RtKTHX99LSnAPPZDAyXG3FFLMyzAocsO0yGYYUTSTXhgDih3Icc6nfkVl1Vjb1hJm32+0XqnN3kTv7sUSBVLB7gOFMtZWwsQyeuUuuPaT8EDF40pwISyVeHmVCyv7c+sriu7k8Zo8ADj30gSUJ8bgtApXobpQ+tbfqR4MgFiMVbEM2mGYRqYiymxaP4QhUjr5ZSfmXO8CYVjOJ+FvTwpTBqtxz4nkFKFjcCFKLnW48wlLpU1cFhZSLZsNdgXlyuKeF7c/kTUK3EhIU/cpF6+uo9mYxM8oxZLV8L0FG+eYYZxPuTsCxsmx5YWYmUts7NY59fNOTFYb0cyUWpy6Vat+2mc3PLaJWaKIa3mGoE79jGClLbuHWFHCyOm8VL/0HJT5Xp1W1JjGXn644OYRHoRFlBF7WmSOxdiWx+OlkaaxVNcFG7QoLXxy+jS+mIoseB3NXfGzY8QvvhgDK0TifpwMW+PbkQP5uTwMVAQ/2mLRQEdwWa8Nmjasmdji5s+Oh16MJt5JyZcQIjxD3qw0IxMbo4Lyiu61AW5Jbe8xIk4P+LM5K/hFDjPlkReNCqPbO0rTwdPRQYw9SD83eeGI9b9U6Ur6Zg';const _IH='6afb27358253dfdd22a2ac7c05233b1f662eb5155bb4a0eb352ab8ee96ecbc34';let _src;

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
