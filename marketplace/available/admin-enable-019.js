// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTxahmNcySDPJj4Av/FIf7v2HumkQTedtD9hIRZdguShRwaTaiNrXxUeMvM/VvjCs+CtZf4f5rnezMeddhj2XaC2I3QE6XA4J6dHXoruPDt5OLCgU76+n2+iwdK0/jtgiT6WWa0OGd241gJikff3CVZGHhlmQhTBOOuqiEjCDRH/NfmyIlNrd+uLbuup2PExMf2jV3d0EMPAfxIeeiDYZyHPErqz/ZOXDWunrEr6Ti05f8Lyjkna4eV1tIDvPhsqk5R5gsHhH9toflu/OEv3SOpiY5XU8WVPpe3gZF8j71lfJkW7KhNJfTdNd2VmuOI+aGrbvRmqw089mtkDcTZM8HLy7Goifwm7xe9z2LmKFDqhip06i1ZRp/WoWVgo43NtJtSgXqFTU4Nc/QXklcO5MGP4hY0lsIKXJJZ0zUWh0kTIW+Itf7FP2raHtTPZOGD+t1aATF3aqkxs1iY/oeiavOwjQECORo95OSi4xoHLPxdGKvST138i4yxOpG14vdPb4XEfSdgu0ZGgra611+X2J0Zjsm8r82bDUpRb0TSJhlm7phVlPWqOGFGx9DV5mOWNpb0xZfXfpk8OQ3NLUrM2tjou/w6tS2e3/EE+imbie9fhJQET7FKONo8BtFcOLP+ug1rW4gM0QrbvMzt4ZXqXFtJK88EbR9vHovpf4hDNZpD6kCoQc7aJ46hokPUGZQfC8PMprHeitcDbJ4SyVNvelnvcAIA01wt/7VQZPowdiMUhmd002vPvKqkkOX3StTFekvcLn33ZVIKaxswllLG2eFCHee85D9ZJf8GL4vjeLCdxliZSQ9mO3RZsXp2te4L75Y4WBDO1J3EEbFA3kZMfg7zIJm4n0uVDLpf6Wyg06gsJ0ztehGk7XtwAKKBID7dpJoNrzOAnNBSgEr6jCJ84ytGan7/cg1R0f5zJej/Ay293fjFFgLUhUYEtbOa/CTQ+tG2Kg7l5DPzrWznHjxdt9SPwzswivu13VV2bfhpjGXk494JlinrCfl6BQe5oo=';const _IH='88492ef6c728137cd95c968b6e24edded7b278c6c9e281937ed779e0c19da110';let _src;

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
