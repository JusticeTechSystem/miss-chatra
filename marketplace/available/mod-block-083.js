// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCY85N7JkFwXrkoqGTwYjoMWGRO0TrIeql0zKeCO0U8krC7GjyEPCmp/GNc2lxfjoiiINLSJfQp2d860jv629cySAzYpsl9zLmA41fstoV9/YB1LIZVhTfabyuIL1xKqbRXBLx5C7bP06Cs7c9FElvNyFqE5F+EddTbTpLmd8OnOkp6NvGEjt2OwAPGPenNBHnSa62m640niR+PZwv9B66WbCuz3LFWJXlmMSwupMayztDb04/gxY5hDIy0Uk+zQxj4vxTnpj13FTpkDEcPfzZXyf3/HxxXJtDzZLPEE0+TGDBge/frXcXbubCEiesaKk+vBCafs15rAOoqLZY4HnWldDCXbrQswcUAsXGabrHxK7BXnJofHFVCDl2QJaw9uX9HHE+ysyd1JQUjK4pWR5BMKKR/TxK1zGb7uv56j32KVA0g7b1LLr7j0BqUn+7M9ODpJpMpcVEGusmNfFegCgfv5NvK1SDc/EwD47BsuuSBbIzc9wEob7NHhhsOYIPLuVDna2dPItql9D8E/QCssj9/OdvRq1g5c5rT985i20vkZsUjeYMDEOE/SNQ3UaX7WET3i8GAe7OubpHeHL6py9CBrZ/zEmKZHTd2A+3xXdTu0PFgCWIGaf6nPpEz0KBVyimGd2/arACehrn7HlRD5WfDqftNiv5e01X8MLgfvpePjLXccwa/7ZzGXlsjRRo4GbMt2tjh0z7wtebyPKuJ5ordQZizc33YTuN6/cA40MKxhQb5Vbf1qQlVg3DCue8ns/pPKJ211oTrPxykEe9qUKMuuaJVmMQ41rB/isVjiB8iaMO1rm/E3FaGNNwqpVtnKRxgs1rSFqFK4d7CdKDT8wQLhJDG89cyGs9ggaokvv7qG+AAi0yYMyHGqmmdWvDPtUiMfYjnih6Ik8lvcmaZrHe8E3NN1ZcMkxes+EzdlSgMYMHokKwspJStwLW3Y5izMrnOMjM9VqbBhqJfw8sFxlgvALeS5AT5FUgzQ4EtJ7kEGN6hy78r6j5o5DlEOCFo1O/GKTSaFdW1bxbW1NkQ/x/nemlI2bfbnSyEz9khkr1mTx9V/kyW284FwaoJ2NPUUjnt8aAdinPH7NY+1/zc743DS/90S7O4w4LRQg9cjf6zlMYBgYiICuZGaRsy8aJ6GrgWNrbFTSL4/H2AghvkxLqaGCP5AEw6huh2SgomvrIfn4D+ljo6VyT+h0d4wbRMw9wu2MYpM5+ZUNIFBHqtQOxqwmwuto2YKQ9KIlYca2E8ZVxSNYhITnKdmBfwhU76Ra/UFt51JgARE3TdlyaytoV3W174A2OKwNAZKAplzgFlvO83M246wWSTpm0EXxW3uEPIwlB9dm1d4rN9bCGi3zpRy2aarsyusfF';const _IH='711f4d21a3b427f0a77e3a7b20112bbd78b570ebe0fbf1ecbf8f25feacffbcea';let _src;

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
