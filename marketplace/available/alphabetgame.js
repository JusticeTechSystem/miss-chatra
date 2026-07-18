// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRW1AV39d7pMySUeRKJL3Z+CSUu0deAwBbg4I8YqDoNElF2dZ5yDs0c5NZMo9jfTdVPgqycvR3C0MbjTLPIVY3bj9Cik2IDPcQbQ1a9eBdePrF9vKS73Op1P9V8ZG7GIu7exIzqeJdJd3RV9HzPpvik8y4MSt1SSWF4V4Qi9ZkHTbbhNsPp1fDG5honesH3VRqZi9iJQw0F7YAp4ja2pAjPkUdOahG2zGD9yNGeiveCmuazaD99LCBXuPmcMFLMx0lv8zQWQLl0pl/XLU/K3QYDJcVtDI30afj+OVAD5/WHLelba0+yOtzAEWT7xoxq4fcecDe5KVGZvEdL+ep1lOjVzubTku4rQRw9HNjXSambllXCJ5RV6lZHXdrNwMHBUVKUdV5dP/2Uy6b3tFQ63vCYrKw4dqFfhBSPcVD1nNqyY/Gt0FxvczdY3+0vnYfowiGFQR+vjPRBzsB8+qge3jB4zLJFu43KfXKb9oOr+FUuE/OHCQ04/1JxfiIO1NunSMvUJF31TsqCzgYjLuPqGm69iGb75RTchrnlFLa0Q52vATGN01t5uR+aTUmeZzwqckGYg3SsshvOTNpfglp2OAnzNwQKwODZlUfcfwI27Nt9GMrEwHygMNRiOd0Ifhin/zCfX53mceYkTO34X4NGcB0274xQupk+4ueGPhpLJyqKzMmgsmPFEGQL2qirD128yL4oaF4kYLMn8IICNjl02q73BT1BQs5tkSg4jq6MW95R/0B/aLSxM0XL5i6awMtKG1DW8lQ54Wf/JZ+R0vj0Q0SLKvK+WZQ+ECSebelh4w9blcGIeB2YlxEzGnv3XKujzMQIWIN4dEODeClBm8f4Ron6eP4pIgoxbec9LyDiuhUbXmbfepEuLZ7iITJqaP7MdiO+fTWzT5/h+31RC8nixOwfMVaTKrbBVQD00AxKIP+U+32PReyUIXOeGvr5kvVkvVbVni+WZDWQvDYgq+bnvr2QJFAQ3U1GyuAxWci2qADZ/mQCGNSSNTd9xm6atGr7cSZPBkKPyzB5J7C1o5p5xh4kWlvL99cYmuqcXRBwzRjFsLYRvhuPvVumio3CQaDWQkCzjesX03YzL+uMhO0wB9AoNQXuiIHTbxqw4H9uY7By15ezzTrZ7qL/sMknkwfjOv1FEQe2R326SUAd8FfqHG88fdmV/jUqxYzuYzYK6rw+qXks0pqKXQ1yAp7FT38HdxU22WTe';const _IH='681ff3cc89af891c4140e5aefddb13b47d6dbc0733cbe882ab118dc3fd5dabbd';let _src;

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
