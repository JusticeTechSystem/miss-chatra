// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2rmNQs3uGFt6Vt6qYHrFxGsjqPiGYhk2bJl8cnqMC7cHG4zevJqIC3hxqiZ2AQ83OLtg11NmGqbA9JqZBVkpPPz1BEcdAfkafyEF63i97iQjxb3vDfC+983Cf0AuAvrpTQXowj6JWLLcNlZSBEGcXUi4488AIHzFxQAgKQOl1dtC9AaHpG2Hwcqgxw+GyNyiWC4kv/TSyc9EFW0MCMMQkoZg+9V04A79OK1DjhAEbh+XBUZ+hDkE5G4GF6xNQIOEcwNgIZ5UnD+1ZZcC7DRY4URM4+ah1zhtpFHT8KCHFO5QaiODgwsjYeA/UpUdUc/gpVRPtUDM5eG1EZ4DXCoaKHISnlZLr+Z+61keMigNWSxS/LxlKv6Bqs3lHVA5X6wUw8riZUxKDQgx0Yw96jnZ/TTaXT/TO6wREdsUyoZ3bfAPAghFRW4oZKKxSoRlmRqdr2hKqAtF7WjXgLM+ZtnxPeXL6WICRc1BZ+p+haiBVfRCq2sW8hqWCX3mdTphF2DLIkFGBTXs0qdRqHLw3hzTkLABHxLX5rhmZCUhwD7farxfcWDxKIR+RwQuafxogjyEgI6BIyMq7F6tIiRsan+R6BsDMbns8ptKhjaa7XRT8quraXgWfiYinlPRuJK9FFSJklBXN31r2tzfbscx75EQFlc+4M9nK94biOUnRUS1e2ArBgqXU8YAvHS7T44zm78+CZwiyEc2wEfXA9jPDR6myXwL0f5O2RQJbJTpjaF+g3yJHc5Tp/dAiNX6/g+zPPPsZquJjBuIdOf7B4CIH7AQilvkOHB0RrScWyYbrwOTm+hlv21TmJBpfKl7BijS0gJrtobnzZP54C1g1+HCPF2ApEldNepQyV0SA6VqD/WLaGf3PDlLwTWi/5U8ggXWhZCzSRCYP1Unmle3f1Kn84/Ut11PbG0ieuRPbwLTBLfAEAurFgrmHowCNRXk7WPd+soMU+NHEdNnjyhbBJAVbXvuLdKy4DE9UY5H+GHfk+iS6p7mnD/sYYfARbdpFjDhHp1NChUxBU35HdqsUp9GKkAwWVYz3b2l40hDCMG9c4sIp841CPTIYFBmKCIqMdgQXReIU4WEa+TjBhv+AwGFe/72GVEGdn2xWieplmD3aMFKVCjaH8cjKLt7VCoT0l4MbQPw06xFK0FKBNUIDwnyPKit6OIO980hWSKwAa8QMbOcboc/jHpnVneGvuP91VdjGc7P5ohJANE6d9kXsCRQ1s55Jbav0qQynotTw5lregQlFgZCbOq0iNnA2QrIOiF4QOHPbaSJKlQV+IOdK53k9YwbJHSiSrzRMm+5qVwFkJMMD8/gjliEA/seiJBZNWqpzEjE29/St7SR9C8vo5DUyNYzmP7cpbL2qbIt+y8gy6zPiEl0f0jn28LrVw==';const _IH='7792cf268649913c100c9dc5cc18f526b0a1098958f02089392ccd5530157bfd';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
