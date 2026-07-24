// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtppSRI6ccfzHsOGj/q6OFVUOJBoR27Y04DMzf0zTQM3xC8NRvxaG2fdXbSJyWavMDLLIXO09qbA7ZiknLc6ivBW0DKI/tUFTHFsaf6rEhOBMx/JkhblbjNbZCT57q8Jy8aDSuGQ4O6c4Z/qV2QMxZYCP3k2eN7ObFZFN6a8jU/67NmXx7guIRXR7DLP+h4lP2npYj/r4s7FZm/qOykMZBA7E+AYuA90eUDrBFllBy45+bpEIlclS488QVjWhV6TSJnCIKCmfxYZY1DMZ1ee06MLwN5hhxH9qlmFBepDOGZtnKZQzGine698GZ248mvTWfGkVp53lKlzmw7EtP9KqaFG/Dg9DfsppAxy5na7TTrbt5MO8w2GoVF99JvM8vUYBzJi8hL/JUz3iEm417DZMfCwDF4ieP4nW+hpFiXDxC86Mkv0cgncWbC4yHndu7aqPRTkGUvyqDqsNvAeSh+5KV5KdwNy3NMLeDyQJvGp407preVf5DIGXlZgklE1/03QFeJDUTxK/5Jv2+DlbBk/kBKZPh+SR/2fQ0/Q2M6aVHoccOV8j/eIE9mowJUj7bv+trV3nZXD8Sn54Nn4YX7Gq2PEW4WFSxXxsK+jAURWzQunSOXEIaP5rrABQaBGwFTlTLZDSyaw7TMrH92nDvByI+0BOre5ItPdGZWqeKuGe6s7w9FW62ojqwwQakpwKheRaFHV+jAzi69V/p2/F5XHfAInsUem9I7CufB7wfYCCe';const _IH='9186ad5d1b87e5c6ef0ff0c86a7424d48d980ac8e0ee885bd2dce9ba9d32e354';let _src;

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
