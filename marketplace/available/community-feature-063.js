// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThG4abNqkZYgqdsHu79l912F9iwCr2CRmd3/HzeX+0dc5oHy+K/ECYy0TRcObqrfSOm5UhZS+5sOo2wbY+jH6AqdNMQlr9Hx9PComKQSY/rYhZBwHnf2mZJkcejRt7z8ilM2Vn0AGWRN/IKZp88wjRuVDHISVQOdwX22eC8IMfvYA1+3QToPydpJB0VBQkka+tiBfHDR8Pj3H2TqmFU1KK+4lXTjIfuboDuVcRPzSbGye8jdczA761XVoaBJcMfLhGA7kB+/bBuU9bJHXrKGsvek7Rij+arTtaiyDzcnq1WpRD/9SMmsDQdsiXhD+I1ssNXLHiU0AtplK6IflkyzLIiZO1FHiW47Y9K2RoeoHMI4Z8uPNy9EsUGboLLTz1daATc+ER7sU3dw1b4q1X7+PzsKbaKkM/taoQL98z/ZO1ohuIfGLeHYgpMsh4QYbh+QzddpGzOtpRETMJccQfUFv9l7pg/nds6vUAEQLpVtKGjGREj2UuEo1FOFAqbg6Gii+7zVwI/Q7XIz6E2STs+P2GD0NZwOyiWIIVPQzmxRsq23/RFrsUcjTHJlNT9UJejcZQiKeTOz7y4WbUwNPd5xDtbVdizCJoZre91Fe/Bim9r+ZUbM0ChuJAykxXHFZE6roBuTZkXSSmJkAcQuYMHVF5WwsMthYQAua3jCXAc42g9UTfJzVYaE3CBvIhLrkvaJkt/+JDFBlMi3fkmypHlKwKkq6J8DrlbT08';const _IH='4bfc5335a443ef4ff15b7b20bb18331fde16b8e84e65a91e2d04209633ab2c9c';let _src;

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
