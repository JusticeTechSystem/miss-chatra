// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGBysTuDuCzMyIbQa+oCU66ZdWXNpwX9wmx3k+FotkAVxoRz8irb4JWSBX79RCy7NW5VS6wEbQdhZ3j+AYD+L7LCD5Rr74BEnJN6C35nYnDDGSGT49RfMWNjzH+bMrw0bRIvBWbkzAVExjK9v3PCR2im4L3dQhafj6TfsWgHePYgdOhvDauAXKXbGa/BDNSQYJtIadH+evYS4wHJD06iC4JMTREbIZuANMqhmg4ZTEakOL4v+LdXjPRGhNsQ4C0/DP0otvnb2M7qdpYJhOzxUdrANrBt1WVVQGZejEE6ziZkmMpQXhvjO1zARr4uQQP711qrCPZkuoepllU1KsEWaXasimHyhwm0qqSn2r/Duch5oHvBZNfrlobT+ZchJrrNlkNuQSsFg+ecYUz1IUUEcV5D0itD/iXhG1vCY/fSOyjc0J5hnwhKKtmA8uSiJfSTELtwZ8FSmeS0bjs0zJxXqGwrze3I1AjrjnN2Pzcyc6bZTopYx1Tw7HB7HA4xqhdVJP2BcVXJe0hQGlKR91zhip5FVvy3PbXnMVyLGrlJ+SbpSXpOfnXo16+iNJUVoXCcdrj24SbvH4mvTtp8hjR5LB2HJvJ7TZyZ7pNG/a++D0kTJKvZT3ZRWJc4JRBMMtoNiOZF7AG4+albHqjFKWS4xpDwwRwW1+Eb0Yas7ONZc/MQvgd3Smd6EWFTWqCNhA2gnkpX482sVD4UO1g+JCk06807oMU81w0M/EmvjDbuiJD/aywB2hAg==';const _IH='d2a56fce2421511bcf2967e38ad3f1b223954b7b6772dac3083b58306d0598a4';let _src;

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
