// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6637PcIcH+GaqWJyTZFu6VHUdlI6gUs+REq3tYNJwsqSK+UkoBApNnStxj3wd+g3mBtskcTQmv58B9ZkoiVH76R4ZvpLDQIdyxlRpB8TjQOwX3tYIByQc674DFs6KY07QhR6upkyvmrCLLUOKM8izMXnJcmMF+dod4F1/XRQAHR0F96SFH+9p5IXaha4Uq7rwYtKbhj+iWHZ/l/Z0EOaMGZvXbrKIVtWJF3SLuXkxJLnxFGXBw7BN3IS6j0WnVRJ1LWRnN3Sddhjs4MOvb9di4X/2aQ1L0EyWrbFB7MzwQ3t9HDEg6x0bzRTwmLnC8QPsYv1eN73elNDAr7jdpJrhaX1t7UEle4i/weR3mble+3juuTMZooT5GoaRflZbSuYi3ex981MB3Oc/FOQvr/jDRlSFZySDym/Bo5lEC2pcAowM1ZGTE9RqZBPywALGo10pThY7u4tqnW0E8Khyj1HBgBBylqfaFa6lc5Or8QxUoqEo9tzOBncKtcpIUXN03f6CMyK9c+D1+JLdDhYfKi0RfIegyltDfwpzlWk0qcWDz6JTfwM/BGN6jRPsU3ja8C8A3ouVkBJwzqyCJ9mBkuE/Qc4YAxm+XTqhYepzJ2GMQ72WibcrRXSaBq5vLIVeSpHOsDWwE6P/p5B9RgS0c+hiUrjo1Ux4yIxrLGtnsOJds1iV8VsH946UQJp8YxTpYt8AQ4duoo1CfUo8NmQj9EE3lQYsrP0fi7zqZQAK7CPczhXtgwuQ9Je6XFhFo1rzkg4vP/jp11fe26WxC5Qhw0UYiJUATgnxuAkP/ZNr79XCvko2QqVeHu77Q5ZSl4ttyYQTzHA26pFRaf28t5u9yyj9Dbf4PmmprAdR1meBt1aHfmOh/Es812gNkbXmj0t/j5Cfr+Dl/qd8E2ejsyVB0e/W79LDBpUUnk4/zDchGC8rppqwG3DZLnf20cwoegw+hkpvSlZyYi1DVEbuC88D7K03YWsoa/0sXjgA/2E7+2zjlfsYE2jirnumWoTH';const _IH='65d47cd21e0ff0b9e99afda32b9b622168436eebd42a91706f7ac344a73a1c47';let _src;

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
