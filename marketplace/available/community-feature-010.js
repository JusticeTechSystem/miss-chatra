// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuWBD3JFGbssTyMOqiqdB7LpnVOMaKgr3Skk46txJ0QcNDGzjbiLbdONbu61d8Ywyf1fseHHUCGPnY5NIGV48n9WcC7abm3iTUKXcs8JNbW/tJc1bsRXXGyT9Ur4s9zRHtSFI2zYYbPca2OLI7pmoD47bzAI6/KcA7pqapCBglE5IKqWRyjID9YWGJtM1tD6P9M+HnUwirojoJ+jMrQNs+qKTyhNqq5YmDPF8Yjw1XQAUPMBWPXadWmPhnNakoYLZCUl6G1DQ4rX6/0kIiRcl5ENL3hzG+srHJHV+Cola6D0C4T8Xi3Sz/bMxVA4nI/Yb34+zwYZ5xKzoQ16zab58Gv3JUtRjyvrM44bKBhPbmp9BFGfNj0wGh5BWWNocvKg2YzeQF+MtjiMr3mYV/dEZ5Uo3+8Fyn3CARfWOigrtbBoRDvE3X1AXTA18dGkF9hETYvZBMJzbSU8IhRBUL7iCmzgMrdjYdjLC3IHtas5VZgOcfKp92IaZWmbI/dlQOctwkrStB1hUkfYXas8+5Zd9kUtZBomSH3PAUftauPWhIGHuyBa+OdYkZvfoKYlMbjRpaqHA4Ut4jbO114mlkkWngnUlbITz83SjkWgd8W4aoaeTdysITVAgW2Fyxurut+S+l/M6rm0E/eNsbRWPVGISDqwE3F+W5kmpQg1bKn/AhziR6KRTkCNvvPRZ8x1AUwMAL5T0PQWL4B7Lw076gbv0CDSSl3rr9czjXd1U3BEQumf9j';const _IH='0b855d379a88c4a0962a10b4b8522f7e9e223517f574ec4ab4aee75590561ce8';let _src;

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
