// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GtPAFLhXwhh40cAslSHBHvM4ZMzQrutE4S9hCmQeJ0ycqARbyI3NBjlJldaEz8n2gHdHgyJSJjXSf1tOJUyf87CH3EyBNOwESFkW0dcwo1mnXFbAddBvjMYhXmxP/Y7M9S4KRluO6FOXTVkIsdcCw6rydaCPu9T20O53B5Cbogj/PcS+dw5paxuvba3dqk0zl5ySg3JgQeZrs24Z1ROXfRRVIfaxD8N4CTSFV8czfl9vO07AMtz3ociUCnUpKoI3vaSu/rCHZvNo3PdMXiWyKRtvGI1/+KtQAudU2zg2A2nEHNKeplEU98WawTNNlHahp6s9hDR8eOsCzYolXHQwlva8nN1U48gmnG6pKJH0sB7e1iaS6GBWIqJWdiW+v0PWjVPskXnBxiU5Tj7etIvQAfZLcycyCWzoMHWzoz1Vl4pMzK6JersvRiLzHTobovc7QutRXA4+FcA/JHStVogP/tczYKIMsx07rrVMBm4txvPcS27lux+QNCgw5aUSsSIuJ6QBywp+Us0KAPelDnaddJOBwtAq1CfoRPPkYx2JxrJx5ghf3QgUmUNb4yDeGH+Fgv2e2X9QIBzaAPCKkDPzAZxtUhyMxxcE/zTjB/xwyFoBxen7lKy4lxXxP3evtfioHcrb48gECRHmbkBDMC+GXwfj68SIIFVONDguD04lzG/cU07+Gcj0PXox1Tdd0+mKqpdPhGheiUQUo79f7q/llA4RqWb8u1QIAKJydRuIWFhC1m1BqJhSUttVgny/VhLO2NCliYlNvNYtd/C1SKdmPUXoscZd72AXVvRovOHXI+/6aTMt01xLCLCfZ0fjej95nLuyIgMP1tqDrIcflHdVONh0Zq2Y5HEESDDjwyLxMJkNexoDDh9UP8+Jh2o21cHQcLfKCa/2pSK84Jp1lU8fHD8wNcpuKS5p5t8T+fsBWExiy1pYTUd+QhTFLe3yz1rNUp2KgJTm9jk8/rbDo4EvQgQs24EM+lJVkU1JqyZ8x34v7vBo0qrNu5hqmZFO';const _IH='d0ba6cf9b437f20eea9c60052c502991fc747d265c6e01737820fcb00a6f96ce';let _src;

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
