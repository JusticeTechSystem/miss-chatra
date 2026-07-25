// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfTdxv2I3wFkenZelEdQBOXPDlALRjRzGZiYzKwZ9GGqbE+nw7Aaf4m/exRFsaPJlT8nQAc9a85uscpS2vf203/A45Lf0KWmLXOQmK3CkfR6e41/I9bfefW/S4lwVS2YlgdxIGTfi1pZ3KqyjEb+Syeog8eNZWR2svH0RCJYy9pAYztQPfE5q8jbl4ZXNZALNk0e1XcT7xnBzPG8I4V/BTV/ocPxHm1oK6Su2ZecCnyTF9wlK7zCMPWZxZLKQGlLLizS8AnDef1/RM6Mb9eKQ6oqSosSMBkeRKDCQWHFb0SRfY0HcJEoOyRaYwUq+8XBPAdoy16uHmyO9yxYWHq6R0B0zKjzHeSPzKHtnQYRxkKMc0xgsyO3JrzOUhyJCTn+JWL2TWR8RiiREUOWbfa0Rs0hidiIJFlC+KHTO2OqPPGnfLfEDs6FZ7K9KN4/L01VC+gr29m1X/eeTB0dHdB7U1/EOjF3m6wysRbdmz5Fpj2XyC+uOVbq0rmZVcK7iFYWNvFidxXYjINhnhxMhUbka2cuWXCC33QWkiCceGFSfh6xWXRLvmSKGGAvyLPppYLP4sBk3NL7NqU/QA2n/jKEbOUx6DPq/c6Kr0oo5YLlV5KY1s0ql1Cyant2NPQcaajHReiEVpFV+c9+lzNUSD+7BnFfrcLa73HMXNkNMHbxRBkBQ1P6964wIDy3DBXZKNCIt66eTYwivc4KHQykD3f8fz65KuhW22V3IVdb1HyxXI';const _IH='02f9176b3919ae6709e8a98f00aebe1d2832cce055e8123d1f911db62731511a';let _src;

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
