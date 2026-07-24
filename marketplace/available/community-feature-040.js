// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtlQ11aD0O3ExCk0QL0k/HUAOtgtFR0ZdNPqprsDNcRWVxDzRPfQkzn4ewPmqO8b9sHY8F9wptEize+Hxtyny2Pm/55eF+HINn210jxqyQkaExqGxAOM5rkXQc6O/Iz4wUWcZnq3tTeMm0zdAynWeCylmRYGUMC1N1f9qgR7+GvUb9tvM5WhEqT3cITWRYHFV50jI9GfMK5yhHRn7WcdZ0e42empB3HKME/xZyUI3bCbfZkSMqwNAd+/rxmc7qVIXSdqGFcnviyTydEq3lmz9AS8yuIDff+cIIg6A9hbD/2S9SbLBcVPa4R75DcmH81PK9zWM+HN+cneNzJY1WUCgj9tIT6wUbftGjiFkkncdP6cMIs9XCMPgB6vifnMeyRaG+cbi0FhOloyYl8nR/IW0pRHR5dr0i9J1/H/d2d8XwIUDuEyLFi404oKlsFSyBgz5YbuFhXlH6DClaLTfQLt+zEbJ+JwlS36woN9vXehFJbjG3ZyowUw1j6wGpty1Lxq8m4rYR9WZAa4RrMeml0SZgTxrYosqOZmi8vR2uAhu5feshty7msn7CIUYzq9iwIji+ytEjjZGTQDvonlSxR7vyJeepVYaQW3F2o9wCPRl9tDjVQ9UGw4vsks5vO/Z6eluJYkDob6NcWcVfiO5H75hziTOGuwsWvCJark3t8L6TGNa/tidIWi/mCKEn/llIHdWbtKVKexnUC2DZWHe9PZ1511T+Bpvpp7OV4GCZMn5tPcleuaCOsg==';const _IH='ef7d2548981aab7de18f8a4b58969add8e48b469d7fc1f56f1d6210cbe7a3b54';let _src;

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
