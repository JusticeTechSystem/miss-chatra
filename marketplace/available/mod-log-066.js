// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOMLRpSVwo2zv8kjYbyo42iL9q8ooxO24hzPbwLHp1dMGZ+3GQiu5K9mT61NTM8dQUN2qjIMjj9L7gAzNHiy/QQY34FMwdUf2cu1rEgOZD9ShS8+PT6zC0gWn2wn282ZFIANvlXgynHEhQ0kDJK2Q3RLMoCJHBMIzJh7MAvty0K8aJ2zeVOu86U2dxhvvE92WLbnI/50XlPHCY8e7lg6C0/M2Anf/VxWdR/WLpInu/OT1KZxGHv0j7NtuzEuMo+O22/N1aHHtbM+doVkmL7vdXN8frGnvqK9ZiphFqwzR1wcz3A02NmnyZFad3faCpPhsLOokv4goy14FEN7txUuOCbHAoZRdPL0uifGknE6VFAEu8drWYUJcz6L8srw4Igv9JPWZFtCVEISMZyYKK7zQrNUALebXMw/9Gnf1Asc7sZMDQpnvikTWSJanEHhRkK3pEWK4rz++TCPPhvaLTdz60f9nQDfPrZ95ZFqSnE/iXQYMpJf7qsDd7IfSJ2CaRA34UTloNT/jJILAUk0GUcGBmiSsLJgmn3zMcYikuop1zyfgItRLYxzNXHksa8lMtJzPlJ78rUOvzxFgUvppV2uoP03knBvU713PegWTmHwuZsYaW9rY+I6WlnrumAErJMklp0l/wwh27vxoE5nUTV3n3FNXPvRTQGhvabfZR2Zsj6DQ+WUrTaFhevjFcuTu2PJn+7b85N8x3RoRaCSyEvooXzofETj4GT+7qYL/Nk55HpOrMoqwynm9jKW6i1ri8jcWxSXzpjk+b3dhpUUluLt4LKKRJzxQM+dlBlPixZnbp/HhE5cPuETjC/I2yFS5Xe0h1CYgHqnSlm3wE4fzHEHknhQKpDSXJJmfZAYR/rYBP0RMOS2PRYqxuFVOYKPb91u3yvW/lQjsX7fOE9cV6LTqOUibHK1lpRYg5puo86thjUmafDFjuiMsHA8wzbgGt+zi/k+HgVeW0ygx5BmF68Ek19lk6/fGSzhd3+7dnfEAUQ7rjraHqSWXTmJOWKYPGiACOsQbNlaIhoCvy82UJuV26B/HN51YknWwqh1uMpQ3B57g1o6oWFqsUW8wBrqwRdUu0PcOqG8bkHk2dHem8l+7f9S/34XixpNcZQw0y1ATx28y1RpyIY5Gby8qaDs2PhaH5UIsgaAkI6rz3N2S1gbano5DPYSDNCFJdau/XIQznAFv5gIiDsJ1kppsGHBjyNCK8XfC2rYQoWpx+DxjErnstks604+dRRD1lgHPzF211tDGb1FkITY+o6JearPnwCxbJN+VjOFEEICV6fKK3BM9BWfRsx1EX+XgUc2JyErM2SoxaPADxpIO0e4liIvyo2hIFjQ==';const _IH='b7f9c33fce864e7744d4e1f24bf7533c089ac1bedda9dd7fbeeb2717683a2585';let _src;

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
