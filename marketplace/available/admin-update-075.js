// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQr0KnTi/ATPKv4ImqG+mGlkwxCImutQVIbPazIHMExAVWMt7qy490jaNcXQc6VFUeUbTEdBML93+q3ax3coq9YDloW3mwVLhlQWO4TIheQ2nLcR960R1hZW3d0T4p/Cxt02VlDhpLUQx/PP3SQKq+eyOyQLS9hDLU4GQ5/lWoPuUbNQ8p5QRzBwqIh0kAJfOCWQcg3O9JOrAuekjRsTxpBuTxb+Ou2NXAWLjJjv9P2kmAehKlLot2NwYrqXnZiuJZRP07IZjatOJTPF5+8s0XUayNGQp/FdF0ihswwyvuPYgfbkEaGc93/4UcAP+0qCXgKue2fkfTtHe4FHhPDcUbDRnLsMBfKKjOZhCyiGN2DiGVrGuPNTj9CZgjVLBhWk/G3vNAxzcNXR1S0CwHH3EtSlwd61mU0VkRz6yiViLI0anZhiWCrP4NFzgpW2x9y/Tfk82HDbigusyvewn36WSIToFx19N5t+YccJj2UHUP0ljOn694vVcno0b11lcftkO5v50aphE8MzHVzarqVK9JBMKLJEe0LVnBFC5RVZ7wcNCH0gyL/xPfSxf/+u5qsD0IDvDlVG+8IZA6CMsmM2/rTyg9BXilu6QVTvtzieKU8GWpdJGbXeXwsB5F6olzKQ0yVQrhsHGKy8yHEMytvr/eF/G/p35HjjRlmMbFKuB7ppo7xKd+QzOMSnXiw1NWxm0j89rmStmeGVkiSSx5WGmGGq110t80IdqxJ3Id7ELExGtKhQOtOI48NoHzc6k4w8G0ie5fndhzNdWsN+gIfBrIT/ZE+UTV/pU2Un60IRpgziQS0DFogHYIz6WW/1G08NpMtsHNCatiVfpi6D3bI3eElastlrrwXASYcyf83tgvYpfWg/mbFth+CcJ9tzWzfaYHL5DZbD4BKUHnNQfZPHbIxhz6jTsFpHa6RfIzIU6QZs6Ri1gAChYayhZ1ws4nfDsoF2dG2GD5YaQehy1zjBdiTDi9lKWvdRsXkWi5TYKbLQTIwK4K6fT2ULHYdaFQ=';const _IH='0615da31d9c68d71efdc52e1775a0ce455924310395238ef381f162691bf41b5';let _src;

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
