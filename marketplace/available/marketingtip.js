// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nLkN7AutLlXOIhjUQlKD/+ZZ/oCs63bBI6WfM5KsaeIE99cvHnFj5lp9m+nIrEYHZ0Jne2r02NJJqYgNMB3zI5YsTLUrkH2nGn3vhvI9sOdWuZuez2bOhC9bHaBYeARaPef+m98hhAGyh2E7T++EfsH/XKxhRay0c0CiCDuW53HHZ8D0tm076gd67kiGxv6x6wABlZK3CgS9zdXMP0Swhw29BrXCpnw6mjp/jfYa/GferkEXLWNGJzZbtRsEqVA61yrQN2kdil1L7ob9VhIMWgrMy02nWSMSyOiZeG/HwNxs0BZCZN5rXaQK6Eqe2315O+KiI8nUKmlxtsaaBJ9dP54Lvpubp0UJ3Nhl4V5YcMDZre0foD7l7BC9P4aknqNMVRwtG3IIMdYKG3uUCcjLNy36mO4abMhf2DboMHuRedBlDToPiCGYv9+RWwioNZUP7DrYYy1rojdlCmwCEG1b77KO64VClyEeXqizEL12FBk784Pri0nynBM5HbrJQVIUyfnW6sNW+qtdFNPBOJcFdW3SxykHjrPoYiYfsX/sBbKXjmb4pCWs0uEeY5AEkYJzEvPtdlAbMUJTs0o8pmcnfG/XOk+e/Csyg3YqqtKs6sBgtahTY1HaOKNoYbiBObb04ANBE76rYAXEBHNj3uLQqnga861EaiIoZuKMs9sPfAJKNCUZkCScLAvfEAO/UjaCddZ1hEFyO0Xxd5iRSs3zg6tCAxzXJRxzL+0Scv0hyH3jkcCMb5FMQPnoqV8dNux8gmax+06oscQB+Ti18Oj2aEzsGoF44HcyyjB7LCc5yccGhdJtR1V96IUVxoWTZ70+ZG8eIiI/MVbVGWKlmij4zMIqOXWUsKvlLQjpSkGD9/zsYMlbZs7JuEIN/lMo0htgobHzG5ynpwNT1ltrVod8Ucq/Z5+z8ehUabCFMP4j4gABFp/YT7A0Pkp4ZdecvTfthtprZivUj1HbevjkZrGDVNQ8J3zSeLMOZPWnNUTfg7q7thbyVSib+z7CMGwl7w0Iqk35E7Ey2ze4m4+VRfbfb0n4KwmZ14XXiK4Q4FSGGm9We1YOffG5SOhmPmV8LKT5kLlnZFmbEzzaCK72m3/XBxJyeNgTEhiJ5WYgv9Wl5MOXDFY+6zqX0+1Cntc20JGI1S7mBAFdzZXqNKndWV6LVTrBMghpBVrSpL1FRcFWUtDkrNVi4LnWoYbq4z5xcxU5r2May/lx2N833t3tnzPg';const _IH='07fd10fdc6f799557e4645457be0f9a738772cc50d9a40db9f28ebaeadb4e076';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
