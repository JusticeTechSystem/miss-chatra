// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR4ai7urzxy+b8+yU3w5GqF16HbzNmshNqY6Op8UH/glDVaQ2MbOxrW8sMODlcgxXwLyNETIT4Fwvn5RZroLBoyl0+UBTdlVZnQmiWIAg0324wJgA/nRiCtUXXua6S0ZxgL4vHGXPSZA6b5Qut/XnMJkJP+hEdTUHSjb4Gfw2eqSCPV1rOfXxPxSEdNnmaPf225xf+JU0FZYwz9nu4tVRupSqYxlmqWTRElOylUWAVFh8TvmdgeCiD0JXn8HetTu62GDdi69UBvn0sRB6dZY2/Iw4JOEEqyqTLJFTG46q1eYn8N+aGK5ccLciGHCNrMZQa3mqrFrKkrKsfLNqKCi+Wu64MDCwjxnztWaKP+YXx351RhpxBAPJ6tzSXrbfqfm8aM6UVO78D46TGI4X+6VhMB/qSMe2C/nqee5gg/0KN1+p1ih9tncdUa9gCzFrlIrtWZha1wZIaTzthGQyAU9XpnpEPLfe6AnynO2qKlFV5HsVOP2zUrdcR5fYXrGw0HkDN/+Wu2qw3qpclGAShEkpPCn1b2g0GYptTf6tY2YSmO295b/W0l8Yv2q4lc/Kbo/Rk80UcL+OPdAhNh8G1BQGfKR7qma6yeXpemCqHDzJuRWuQkZwtIpVYIx5EIphFEoqTJM+k43j+E6I/G3iChglqUTVbg04MkOtBEyXXXpN6+nb+FSwuY/jmO/4YaiOA3nXp/6r+Rqg7plonJwBaDwXLlTOLf5Va0MqFhyeDYA9rmvB5kFDv2CtFiBlovMBWNCKN25+JuE3jGcNrtBRSNRFfxHewxQD/NDtVkL157U5nDBaBo/JBkIXO2yt17haWcRL6nWpdEQ3alIjXtP8kV0hjDsJ/zkWvK5ZdSU84Sti8Hu7msKkjdJqOK5FEmo1eWuQfwJq96miCWZQpYpd3kRrMZguJcIwsLQBqywGNfa6x7wtiVHOQNQVy4NW4kQqtDbTb6LKcFoxdDS1RyWhx1pyBFsdCsDeUAUtaPvaWIi0aifnRMCVBwkrukh6K6qzCX0ZitaM6sonRpGHBd+AR7U5UenNDktuFRPvw52+K3ADYie3HeBAOfK37tq4UIHBQjxkaquGQg1Fx/rRri2skNylQ8MlhCni2PZUf/Xz9BqFk2ZJKfqZm1gQH74i7owuFnpnfGOfN9pyGaMhxJ6kNKjXfWLRlvlx0KlCnaOzBYZtCDNwi6adKTA04NMswMJmo3sr9rwm8VmnI9yuYeprV9e6r68Hb/Hw5rZET4kMJB8LLCw2U7tLMgZ3XAvhu7wp9YShxrIQBaZffZe1qnyMucWAvhVGjQim7cxJgQem7RFkBPFiFXPm/JU3xlOLglattACLZXD1tGa9/OGTY6vnnFGn7j9vm4eNDsxStwMD4akeGcrWLXUdG7tZq5Wo2AplB+wle5K8lLKypI1CtLI+RFJfx4XnxLM9ja6GSPLSZIwA3cm033eEViAJQVDsl+wEKstO1WlTd4LFEYUxbXo6jjvfyhCHut044pPKwHACyVPT7tcbYka0o5GeZUZ1VMk78Hhfam438cEsO2yUhS0fDdLxZC6ppH0yeVc8C5Rdr9cXuJOvh0ANmFeHjswb87mGb4LOXm7a8d5gEF65jSTKgjWXrbUuwG7IuQ3jhxkF4tFkPiJCfP8TCTgvKb/zV2extr+KI59Yj/ejJuImXRS2gEES8aL42tu1qPjDkOzNpMgP8GuUdZyMk2';const _IH='beb4e8b855812342f8fbb961890808038f3bf6f4b6885f42fb30368e16994dff';let _src;

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
