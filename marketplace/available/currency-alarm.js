// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWLRaD/NZgpf5JqCiFM/J9EQTDUxufKvrtzL5TwdrNpO+62TSfITLMAkHz/N4JSbkt+XgO70nemk5763xqGJnZY5eVQozJ8vH6h9nYaDzLHy5H3uPXKd2xNU1UhU4zfQNq2RWMx8ZfRC8CMrZrxQzejyizg5GA9DTeQZ1e+Ni+LH+TjfNs5lET5W1/+jQPq1PytmOUS88XxcP8Ui5HlUObNUNgAlixjn5GM1IFcpbB5JbE4LoWvtkMQg0to60VT7QaMZIdJ9Lc8EClly4SrEiYDYDQXiaYjy8s4VAsAOkALMWcjEhkV+CF9wd5/fapXOBJXtUqZfreym2od36B3kqqVzfR0eQ/pKPvNJEmn6RyJfE8vmhH/aXPzJRnfdtlxS6YkpXDmccYzq0WT2bxMMwSy/xJ5AAJb0jbhWcQN7plvz3Rt3Wy7NU2GQH5KiuFypnDS7FjdiRY4Au05R89CQIzw3PBw/2btoZLESE8WyoJ7wQX+5Q9JT2bdPRJeBztjsKp4EhdaMZ/DEuzgPNLb7S0SEE/lp9tFFlAeeevV+6QCi3Tj+YxDjx43N9bHCXAAGrhTfaJ+fIADBZYR822DbLyMJVKoOurfAYmeOiG0nKsFJ5lXNtJuaMPwDCHzM9UD2GwJ54AaqxQn03sQB9ZZeVDspgw+o+cmpEyvAfJQB4y0EH0BEex6O84KBs6e91d63ecWXJEAzLF91YsvJjCK5zGQNGaQB5SJRuseWwucJJ6DDW89dSswwa9W1uEfha8dDnu+2UCo+6Lfr2pnwtY3zfZ7soRMdrs99EId3Cvvlb/O7Ff7XOK2kT35YiiW87ngYdKeyMtjsXpu2cW/jjjjCH+jF7CspxPYF7144l+vgx+HDa5MczLUQnKSlgru4TKh4Rh04mSZK7UidgeBwMY3q+LAumR8DakVeDhQCS51218yBcJkAiOPlNTytkb70VJWaUbzSp3YIfAGvLjRhwUhe6y3vFwRa/LVVJT8K+3zpLPryebk88tSIMNRyYfhM+tTZgvm7ZprANuIxpH6OuUp9IsSu6kfazUoubMt0+y6GfLoIW6mHGKWjZ1+x39T3y9vXRVwdjxuGTKZgrwc9lmRkB+FNq1E1Mus+tgJk37ZHeUWNKSVPXM7O7J1q//Y807qyGLgnupVRDHAXQnk4tL8ASQa5VGzREIW6RrcO0kKMEPRNFCzaG3I6XcDjl/BG5ldRb1LMSBIFzxbSiJ+rL+KO32hVw5ZU3vAQIF24XJagsvfyGUFGOjvLr9clx5vy/Ln6CulH5Un5YxYu4yegk8tje/a1m0Nbr3YeXswkyemafAQ2HLNnF/I6yHsynnwctyqJjt9Ls5ksABY+TSvoTFi4vmvGhBVdvBEAkrJXXISEiR9ftEEMCodgkuEs3mnj03C6jUyPyXTBMBEGmtLJmW+hD/czzcXjhF8Zcr2fBQrMVcN2kLqy7y9smBYemxfsgy6D1pcnuqjRlyeyNNycCzNyIK9THM0rfBVx2JCzW19jXptIsNvAcdz23KYKNiHf5EbbhkMb2BFqeoRCo715XMc6L6frU/AewERWuE1LXd79LadQZkkvDNlDiaMhz0gEYvGZ2IeVucXt1H85d/XPDt6lIQYzLtbNpoUDx8EvKvl0c3dHK+tXLzYxEADwJavOL2vPFlGIGrAcT85+GImxyTrtvuBrlFk5+H6bEsXjc89EcZ9qcytffq3yk4rtE84+YSAHfzW07L3LToZXbHFv2UCUobodsctcm5yVyeuprb1cqrcCN8nAcZha977VbE/V66gIRfjEn1jvCYSRusuctjrF3/q5i4I8K9SUXfWnxCa6t8RZDSM/3ECVd2dD894WVkEQ==';const _IH='3dc5879a1d79771b7f6d36c2469b4b133be334b49ef5ee08f53cfa08cce0924e';let _src;

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
