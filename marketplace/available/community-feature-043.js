// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSc6PZtMHvm9mPRQeAxX4p42tk5VeYOAVXIJLt0HUxPBMn5rvJog6KSfXBZ/VmQQXlfE3qh7WwBWKBsr9eueeQdFrZEuijgV35S0ICa5mI5eYoITfkxuxO6M8DO4dQx1nG8DBddjD/iXrVgoIZF/G34yDtHpZYttH9e+yLlQ2+SqzEZqw6Ml6+gjs4C0CXf0gr2iP57Y5LglOKXN+0E9PiK52vp2Xi7F94afKXSAm+ggdywdaGxXz+FXbNKIPo1OPwtOYPfg0fNGpPzm0zdwjZD6y1nVqfrSlZzXU0EJaiigJ4dSpX9+fNwylyzlmO8wOQV0q5ApqHZyZ5wb8R4jKcVhf+hXhaTilBGKsxwS4YYYN6JwGSOzje92qgvhK3ll56MQP1fxsQzi2X1VmYvT8O9UB/nMHK42J+Cle1jmZ3OZXOsXGEKQVbdUCw20oMP89DSwS+dAR//DDUTXSwIykfoQ45Mfo3lxkWAYQThp3utc8HNG0xNPdLSpTDYPS25SFbeiVz+FXNsLlkwzBHQxmhUlpwqVASQppOEDfrXLacaNyizlLWjZmYJvrPgSGmc9IZoN+NizePfT+iyNHhLwpfmxHdY6P9884JPc13+HkUgS2HVXIExnX8tVY2TKOdpIE6PW/h2Cok+pjIUs0e2+wnuBPCkESLnI1y6ghfZ8qsjaLJKYDFSrdLMmKSLUHRm/0MGOY02yi0O8QmiSZ71uOVhyEBKUxZ8Hps3';const _IH='f2f46d5395aadc436bb2f275cf3237f97233f44444d81501469ebadca8194748';let _src;

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
