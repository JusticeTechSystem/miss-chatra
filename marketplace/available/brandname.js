// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgFNSPK/XLOZDL5+JeiR6PWceVs4TW+Q/TNEr/EQoNr52HxIjaDn8HVyG+PAvVhXL19bXFQ0GW66fH3DeXAJe9nbxZMGGfm8g9htKlebezFXRqoylgzPfWaOchJa6Gd+dMpa77qXjJaUl9lkt2RkOtsAbNME2MBxaFrboJH3rr9cRciYwOj0t8ZQvCS2SZ+VFdN4VhUmTATga3iutnLOHn4nkfHqEJ4rtryhBcLoNr7dO5A599UIIzLcLmcZBL6n634Ssxd8VtSHi+35icmiZqD2+PkXrzLaDWJ3uc0svd0riqjNk3HtWz6ov+lBqAI1tklt6i+b30TjH/Mhx/PPIRD1a5y4ZjW40HBD16jPOxUxddKGvC7PPbeWazFDef2muiWQIv0EKDBdMcddqAZMlcgfx7e9ebP/Ak410CchJAOb9Gp2AuisiU8u3CbNv7du326RK/rN1q7xZGPyiyVoRLa+pkonRDSdL6Q5zg611aIqTG+WQFAkDI1Bnvf6C8T+Qe7/n0SiY5JBrR9pkddrEuCmFRWh0hEXLAVWL9uREKOOLfYAdgD4NwQvhdXjpAn5AluWsNV4d0tnKUeYQbAml818i1qbfpsI3mUY2n5yyePcQelIrTtKpNk003h8OZR7caqvPp4AJ7BYaLRqCEq6jbXJb+dWbY1X5r6dxm34v2aUOkQb/NVxTIT1iyIMWipwNLV/g5Js3JSOUBxXp5uCPDS21Sx3aaJQmaLG6hWnJdomRSpEm6Fg+VRqnDFuAKsYFF4hvXh0G7d/Qvyoq8dsT7ocPPFnAQDMB2aA8aWvy4k6YpHOHTocjdJ0A+3DjeXEtd/UEjL1OjcogZrRDC9/tWOxITjiYLk5EktPuy3rC3EH4IqXunu90TFJGXdoLooo/s2aS2fxU7ImsNec30mUMqere6P7ftT0mvVizYsDnsS79+rbNZuDNsG1c2ZfS0mHz9uoRL+ydfU2kpz7KbGHwg18CnouWkMugLeAaS0I7pFGcm1KF+c8pjg9vt2enrWEmy7fNXugNwF2BZ3XlDwhk7HMR4NrOrJLOjoFzCZdQXze+J8U6ODrqgw4QzDxwlzEGpc1CVnDaQuJrytndWzSqv5eXQ9OWPmpDtwYF1iT90YVVGSv1Z50CDyAszop9OnWDaERZscVQBdsKIoSXesFuHBidZ2zqVsB4QQywB9Wib/bngnUO6H50Q5vVSBaFZRR0XW4GTWRc=';const _IH='05b9b48242c8eb9219aa4dbcfc5afdd2c76d92f9eff3c75b0cc8635b069f9877';let _src;

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
