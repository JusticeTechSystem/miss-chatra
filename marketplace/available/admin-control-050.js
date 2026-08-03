// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4+5rV0OGeo0ROYwbTezsrjw4HipFzmjHuytK0xY5qtXbiOnNMWTrhd47prt/RlNtPavBe8FwpGDRppWo9LsDLxfnoQl1R67ZpSt4N38oOyJk4F7OK1xQTtQ8nnnTMStdN8A9ig+5BeOMGZ/M++uHwYBOoHRf9HdFLe2ZwTqTp3R+e27xJkSga+fow0Su477N/4EftrRi1IuOjX5ctKyBr8JemLN3QqrXQJURdEA55GwhEo3rbWZDlzEWUXO69uDLezXUl4Qr/cUam4fhgNeTHIBMDFBrW4ACxMlE1Gv2vQL4DUAL6jXyMiQ49ZuU6KYrGscxhIjFh5QVUhF9IBOuVsSIRLRAsdEyvkYKQN4mPcEatuuYiflG3o1hxDZalr/7k+brYBflFu58buqhLWFvnxlsWSCqhRq4lEBqxcqCE7u9u9R5fsUuB6zXe3HPgx7sXcMOhyN2FyiuC6vDPekgKXAurvhV5bClXcs6ghiNtXaQVlREl6Fmr94nKkfpl4SGCkQxAyxtBvoNKXdDzNR3Z8PH9NdMiWAE01Izo4MkC7aO8gM/EE1mJf1obUK5nhEmGmGYWstsIEPGj0JUSHRERdD6OyzEC4ebmK6JS5jx6sn6sOqo6rhp9VFkUds6ifFlZiXOtGDFVEEgAbU4+aLTo+fzP5adGfMOPlookww7M684layQ44uP6KaC5UG+CZJqjnlKMqjczCEiJ4deCQo6ciqfJHA5KfmqD1J8bgIYz/9FIIwXQWqeVqCU42ATH1VDDZxnbZTn8mCKUdsfVQlDXDaQHM2BxXyt6g1mLRVoyRB8kapZIugNkbYCidul0+r1byK/rADEW4ZvPwmUs+yhx+WX4UszmFyXWw7AykZVnrkzKEWQDmlmpRje6K7kct/JnBoQSxWG5+y8Kr0bNGGaoQT1PRbZxxqUcQ6btUGoimOFraormy51RCQzh8LhOm11J/zNo8fv3j+1+v2R3KejJDZ/dxB5Ix4kiBxjJM6+d4dDzCfNOsY3lhkzi4fCaPJim7g==';const _IH='62ab50a0dc8a7996e65bb754b89d7cc9a28a2a005ffe05a742674a3925b45142';let _src;

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
